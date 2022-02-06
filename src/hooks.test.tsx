/* eslint-disable react/react-in-jsx-scope */
import { PayloadAction, Store } from '@reduxjs/toolkit'
import { renderHook, act, WrapperComponent } from '@testing-library/react-hooks'
// eslint-disable-next-line
import { Provider } from 'react-redux'
import { SET_REDUX_STATE, STATE_NAME } from './constants'

import {
  useGetState,
  useMemoSelector,
  useReduxState,
  useRootMemoSelector,
  useSetState
} from './hooks'
import { ROOT_STATE, store } from './index.test'

const wrapper: WrapperComponent<any> = ({ children }) => (
  <Provider store={store}> {children} </Provider>
)

const renderReduxHook = (hook: () => any) => renderHook(hook, { wrapper })

interface Man {
  age: number
  id: number
}
interface Woman extends Man {}
type MapOfMan<T> = { [key: number]: T }
type Human = { men: MapOfMan<Man>; women: MapOfMan<Woman> }

const man1 = { age: 20, id: 1 }
const man2 = { age: 23, id: 2 }
const men = { 1: man1, 2: man2 }
const woman1 = { age: 40, id: 1 }
const woman2 = { age: 14, id: 2 }
const women = { 1: woman1, 2: woman2 }
const human = { men, women }

const MEN_STATE = 'human.men'
const WOMEN_STATE = 'human.women'
const HUMAN_STATE = 'human'

describe('Hooks Tests', () => {
  const { result: setManState } = renderReduxHook(() => useSetState(MEN_STATE))

  const { result: setWomanState } = renderReduxHook(() =>
    useSetState(WOMEN_STATE)
  )

  const { result: manSelected } = renderReduxHook(() =>
    useMemoSelector(MEN_STATE)
  )

  const { result: womanSelected } = renderReduxHook(() =>
    useMemoSelector(WOMEN_STATE)
  )

  const { result: humanSelected } = renderReduxHook(() =>
    useMemoSelector(HUMAN_STATE)
  )

  describe('useGetState', () => {
    const { result: getHumanState } = renderReduxHook(() =>
      useGetState(`${HUMAN_STATE}`)
    )

    it('should get state', () => expect(getHumanState.current()).toEqual(human))

    it('should get state with callback', () =>
      expect(getHumanState.current((human: Human) => human.women)).toEqual(
        women
      ))
  })

  describe('useSetState', () => {
    act(() => {
      setWomanState.current(women)
      setManState.current(men)
    })

    it('should set nested state', () => {
      expect(manSelected.current).toEqual(men)
      expect(womanSelected.current).toEqual(women)
    })

    it('should set parent nested state', () =>
      expect(humanSelected.current).toEqual(human))

    it('should set deep nested state', () => {
      const { result: setMan1Age } = renderReduxHook(() =>
        useSetState(`${MEN_STATE}.1.age`)
      )
      const { result: man1SelectedAge } = renderReduxHook(() =>
        useMemoSelector(`${MEN_STATE}.1.age`)
      )

      act(() => {
        setMan1Age.current(30)
      })

      expect(man1SelectedAge.current).toBe(30)
    })

    it('should set state with callback', () => {
      const { result: setWomanState } = renderReduxHook(() =>
        useSetState(WOMEN_STATE)
      )
      const { result: woman1SelectedAge } = renderReduxHook(() =>
        useMemoSelector(`${WOMEN_STATE}.1.age`)
      )

      act(() => {
        setWomanState.current(50, (woman: Woman, payload: PayloadAction) => {
          woman[1].age = payload
          return woman
        })
      })

      expect(woman1SelectedAge.current).toBe(50)
    })
  })

  describe('useMemoSelector', () => {
    const { result: selectedWoman2 } = renderReduxHook(() =>
      useMemoSelector(`${WOMEN_STATE}.2`)
    )

    it('should select state', () =>
      expect(selectedWoman2.current).toEqual(woman2))

    it('should select state with callback', () => {
      const { result: selectedWoman2Age } = renderReduxHook(() =>
        useMemoSelector(`${WOMEN_STATE}.2`, (woman2) => woman2.age)
      )

      expect(selectedWoman2Age.current).toBe(woman2.age)
    })
  })

  describe('useRootMemoSelector', () => {
    const { result: userName } = renderReduxHook(() =>
      useRootMemoSelector('state.userName')
    )

    it('should select state from root store', () =>
      expect(userName.current).toEqual(ROOT_STATE.userName))

    it('should select state from root store with callback', () => {
      const { result: count } = renderReduxHook(() =>
        useRootMemoSelector('state', (state) => state.count)
      )

      expect(count.current).toBe(ROOT_STATE.count)
    })
  })

  describe('useStateSelector', () => {
    const { result: humanRedux } = renderReduxHook(() =>
      useReduxState(HUMAN_STATE)
    )

    it('should subscribe to the current state path', () => {
      const { result: selectedWomen2Age } = renderReduxHook(() =>
        humanRedux.current.useStateSelector(
          (humanState: Human) => humanState.women[2].age
        )
      )

      expect(selectedWomen2Age.current).toBe(14)
    })
  })

  describe('useReduxState', () => {
    const { result: humanRedux } = renderReduxHook(() =>
      useReduxState(HUMAN_STATE)
    )

    it('should subscribe to state on mount', () => {
      const { result: selectedSubscription } = renderReduxHook(() =>
        humanRedux.current.useMemoSelector(
          (storeState: Store) =>
            storeState[STATE_NAME].redux_state_subscriptions.human
        )
      )

      expect(selectedSubscription.current).toBe(1)
    })

    it('should return redux state object', () =>
      expect(humanRedux.current).toEqual(
        expect.objectContaining({
          selector: expect.any(Function),
          setState: expect.any(Function),
          getState: expect.any(Function),
          action: expect.any(Function),
          cleanup: expect.any(Function),
          useMemoSelector: expect.any(Function),
          useStateSelector: expect.any(Function)
        })
      ))

    it('should set and select state', () => {
      const { result: selectedWoman1Age } = renderReduxHook(() =>
        humanRedux.current.useMemoSelector(
          humanRedux.current.selector,
          (human: Human) => human.women[1].age
        )
      )

      act(() => {
        humanRedux.current.setState(15, (human: Human, payload: number) => {
          human.women[1].age = payload
          return human
        })
      })

      expect(selectedWoman1Age.current).toBe(15)
    })

    it('should get state', () =>
      expect(
        humanRedux.current.getState((human: Human) => human.men[2].age)
      ).toBe(man2.age))

    it('should create setState action', () =>
      expect(humanRedux.current.action(1)).toEqual({
        type: SET_REDUX_STATE,
        payload: 1,
        name: HUMAN_STATE
      }))

    it('should cleanup state', () => {
      const { result: selectedHumanState } = renderReduxHook(() =>
        humanRedux.current.useMemoSelector(humanRedux.current.selector)
      )

      act(() => {
        humanRedux.current.cleanup()
      })

      expect(selectedHumanState.current).toBe(undefined)
    })
  })
})
