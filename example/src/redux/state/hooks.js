import {useEffect, useCallback} from 'react';

import {useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import store from '../store'

export const useReduxState = (name, initState) => {
  const dispatch = useDispatch();
  const action = useCallback(
    (payload) => ({type: 'SET_REDUX_STATE', payload, name}),
    [name],
  );
  const cleanUpAction = useCallback(
    (payload) => ({type: 'CLEANUP_REDUX_STATE', payload, name}),
    [name],
  );
  const stateSubscriptionAction = useCallback(
    (payload) => ({
      type: 'SUBSCRIBE_REDUX_STATE',
      payload,
      name,
    }),
    [name],
  );
  const stateUnSubscriptionAction = useCallback(
    (payload) => ({
      type: 'UNSUBSCRIBE_REDUX_STATE',
      payload,
      name,
    }),
    [name],
  );

  const setState = useCallback((payload) => dispatch(action(typeof payload === 'function' ? payload(getState()) : payload)), []);

  const selector = useCallback(
    createSelector(
      (state) => state?.state && state.state[name],
      (state) => (state !== undefined ? state : initState),
    ),
    [name],
  );

  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction]);

  const getState = useCallback(() => {
    const state = store.getState()?.state;
    return state && state[name];
  }, [name]);

  const getSateSubscription = useCallback(() => {
    const subs = store?.getState()?.state?.redux_state_subscriptions;
    return (subs && subs[name]) || 0;
  }, [name]);

  useEffect(() => {
    const sub_count = getSateSubscription();

    sub_count < 1 && initState !== undefined && setState(initState);

    // subsribe to state
    dispatch(stateSubscriptionAction());

    return () => {
      dispatch(stateUnSubscriptionAction());
    };
  }, []);

  return {selector, setState, getState, action, cleanup};
};