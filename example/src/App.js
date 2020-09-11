import React, {useRef} from "react";
import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import _ from 'lodash'

import { useReduxState } from 'use-redux-state-hook'

const App = () => {
  const {selector, setState: setMount} = useReduxState('mounted', true);
  const mounted = useSelector(selector, _.isEqual);

  return (
    <div className=''>
      <ExampleComponent text="Use Redux State Hook 😄" />
      <div className='body'>
        <h2>Usage Samples</h2>
        <Component1 />
        <Component2 />
        <h2>State Dependency</h2>
        <Independent />
        <Dependent />
        <Dependent2 />
        <h2>State Cleanup</h2>
        {mounted && <Cleanable />}
        <Button onPress={() => setMount((mounted) => !mounted)} title="Toggle Mount" />
      </div>
    </div>
  )
}

// i can create a redux state at runtime
const Component1 = () => {
    const {selector, setState} = useReduxState('component1_state', {count: 1});
    const count = useSelector(createSelector(selector, (state) => state.count), _.isEqual); // {count: 1}

    return (<div>
      <h6>count: {count}</h6>
      <Button onPress={() => setState({count: count + 1})} title="Increment" />
    </div>)
}

// i can access Component1 state
const Component2 = () => {
    const {selector} = useReduxState('component1_state');
    const state = useSelector(selector, _.isEqual); // {count: 2}

    return <Text title={"current component 1 state is: " + state?.count} />
}

// i can create a redux state at runtime without depending on the state
const Independent = () => {
    useReduxState('independent_state', {independent: 1, portion: 10});

    return <Text title="I have initialized state" />
}

// i can depend on Independent state
const Dependent = () => {
    const times = useRef(0);
    times.current = times.current + 1
    const {selector} = useReduxState('independent_state');
    const independent = useSelector((state) => selector(state)?.independent, _.isEqual); // {independent: 2}

    return (
      <div>
        <Text title={"i am depending on Independent component state which is: " + independent} />
        <Text title={`i have rendered ${times.current} times`} />
      </div>
    )
}

// i can depend on a portion of a state
const Dependent2 = () => {
    const {selector, setState} = useReduxState('independent_state');
    const {setState: setState1} = useReduxState('component1_state');
    const portion = useSelector((state) => selector(state)?.portion, _.isEqual); // portion: 10

    return (<div>
      <Text title={"i am depending only on a portion of a state which is: " + portion} />
      <Row>
        <Button onPress={() => setState((state) => ({...state, portion: state.portion + 10}))} title="Set Portion" />
        <Button onPress={() => setState1((state) => ({...state, count: state.count + 2}))} title="Set Component 1 state by 2" />
      </Row>
    </div>)
}

// my state will be clean when i unmount
const Cleanable = () => {
    const {selector, setState} = useReduxState('mountable_state', {current: 1});
    const state = useSelector((state) => selector(state), _.isEqual);

    return (<div>
      <Text title={"my state should be cleaned up when i unmount: " + state?.current} />
      <Row>
        <Button onPress={() => setState(({current}) => ({current: current + 3}))} title="Increase Mountable State" />
        <Button onPress={() => setState(({current}) => ({current: current - 3}))} title="Decrease Mountable State" />
      </Row>
    </div>)
}

const Text = (p) => <p {...p} >{p.title}</p>
const Button = ({onPress, ...p}) => <button {...p} onClick={onPress} >{p.title}</button>
const Row = ({children}) => <div className='row'>{children}</div>

const ExampleComponent = ({ text }) => {
  return <div className='test'>Example Component: {text}</div>
}

export default App
