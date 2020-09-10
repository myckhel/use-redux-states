import React, {useState, useRef} from "react";
import {useSelector} from "react-redux";
// import {useReduxState} from "./redux/hooks";
import _ from 'lodash'

import { ExampleComponent, setStore, useReduxState } from 'use-redux-state'
import 'use-redux-state/dist/index.css'

const App = () => {
  const [mounted, setMount] = useState(true);

  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <h1>useReduxState Hook</h1>
      <h2>Usage Samples</h2>
      <Component1 />
      <Component2 />
      <h2>State Dependency</h2>
      <Independent />
      <Dependent />
      <Dependent2 />
      <h2>State Cleanup</h2>
      {mounted && <Cleanable />}
      <Button onPress={() => setMount(!mounted)} title="Toggle Mount" />
    </>
  )
}

// i can create a redux state at runtime
const Component1 = () => {
    const {selector, setState} = useReduxState('component1_state', {count: 1});
    const state = useSelector(selector, _.isEqual); // {count: 1}

    return (<>
      <h6>count: {state.count}</h6>
      <Button onPress={() => setState({count: state.count + 1})} title="Increment" />
    </>)
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

    return (<>
      <Text title={"i am depending on Independent component state which is: " + independent} />
      <Text title={`i have rendered ${times.current} times`} />
    </>)
}

// i can depend on a portion of a state
const Dependent2 = () => {
    const {selector, setState} = useReduxState('independent_state');
    const {setState: setState1} = useReduxState('component1_state');
    const portion = useSelector((state) => selector(state)?.portion, _.isEqual); // portion: 10

    return (<>
      <Text title={"i am depending only on a portion of a state which is: " + portion} />
      <Button onPress={() => setState((state) => ({portion: state.portion + 10}))} title="Set Portion" />
      <Button onPress={() => setState1((state) => ({count: state.count + 2}))} title="Set Component 1 state by 2" />
    </>)
}

// my state will be clean when i unmount
const Cleanable = () => {
    const {selector, setState} = useReduxState('mountable_state', {current: 1});
    const state = useSelector((state) => selector(state), _.isEqual);

    return (<>
      <Text title={"my state should be cleaned up when i unmount: " + state?.current} />
      <Button onPress={() => setState((state) => ({current: state.current + 3}))} title="Set Mountable state" />
    </>)
}

const Text = (p) => <p {...p} >{p.title}</p>
const Button = (p) => <button {...p} onClick={p.onPress} >{p.title}</button>

export default App
