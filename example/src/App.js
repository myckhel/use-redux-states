import React, {useRef, useEffect} from "react";
import useReduxState, {useMemoSelector} from 'use-redux-state-hook'

const App = () => {
  const {selector, setState: setMount} = useReduxState('mounted', true);
  const mounted = useMemoSelector(selector);

  return (
    <div className=''>
      <ExampleComponent text="Use Redux State Hook 😄" />
      <div className='body'>
        <h2>Usage Samples</h2>
        <Component1 />
        <Arr />
        <Component2 />
        <h2>State Dependency</h2>
        <Independent />
        <Dependent />
        <Dependent2 />
        <h2>State Cleanup</h2>
        {mounted && <Cleanable />}
        <Button onPress={() => setMount((mounted) => !mounted)} title="Toggle Mount" />
        <h2>Usage</h2>
        <Usage />
      </div>
    </div>
  )
}

const Usage = () => {
  const {selector, setState} = useReduxState('component_state', {
    /* initial states */
    count: 1,
    locale: 'en_US'
  });

  const {locale, count} = useMemoSelector(selector);

  return (
    <div>
      <h6>Current Count: {count}</h6>
      <input onChange={({target:{value: locale}}) => setState((prevState) => ({...prevState, locale}))} value={locale} />
      <button onClick={() => setState((prevState) => ({...prevState, count: count + 1}))}>Increment Count</button>
    </div>
  )
}

// i can create a redux state at runtime
const Arr = () => {
    const {selector, setState} = useReduxState('array_state', (state) => {if(state) {return [2,1]} else {return [1,2]}});
    const array = useMemoSelector(selector); // {count: 1}
    console.log('mountarray', {array});

    return (<div>
      <h6>arrays: {array.map((a) => a+', ')}</h6>
      <Button onPress={() => setState((array) => [...array, (array.pop() || 0) + 1])} title="Increase Array" />
      <Button onPress={() => setState((array) => array.slice(0, array.length-1))} title="Decrease Array" />
    </div>)
}

// i can create a redux state at runtime
const Component1 = () => {
    // const {selector, setState} = useReduxState('component1_state', (state) => {console.log({state}); return {count: 1}});
    const {selector, setState} = useReduxState('component1_state', {count: 1});
    const count = useMemoSelector(selector, (state) => state.count); // {count: 1}
    console.log('mount', {count});

    return (<div>
      <h6>count: {count}</h6>
      <Button onPress={() => setState({count: count + 1})} title="Increment" />
    </div>)
}

// i can access Component1 state
const Component2 = () => {
    const {selector} = useReduxState('component1_state');
    const state = useMemoSelector(selector); // {count: 2}

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
    const independent = useMemoSelector(selector, (state) => state?.independent); // {independent: 2}

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
    const portion = useMemoSelector(selector, (state) => state?.portion); // portion: 10

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
    const {selector, setState, getState} = useReduxState('mountable_state', (s) => s || {current: 1});
    const state = useMemoSelector(selector);
    useEffect(() => {
      const state = getState((s) => s)
      console.log({state});
    }, [])

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
