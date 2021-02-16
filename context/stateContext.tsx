import { Context, createContext, Dispatch, FC } from 'react';

import { Action } from './reducers/stateReducer';

export enum types {
  SET_BOARDS,
  SET_THREADS,
  SET_COMMENTS,
  SET_USER,
  ADD_BOARD,
  ADD_THREAD,
  ADD_COMMENT,
  UPDATE_BOARD,
  UPDATE_THREAD,
  UPDATE_COMMENT
}

export const defaultState = { user: {}, boards: [], threads: [], comments: [] };
export type State = typeof defaultState;

export const stateContext: Context<[State, Dispatch<Action>]> = createContext([
  defaultState,
  (action: Action) => (action as unknown) as void
]);

const StateContext: FC<{ value: [State, Dispatch<Action>] }> = ({ children, value }) => (
  <stateContext.Provider value={value}>{children}</stateContext.Provider>
);

export default StateContext;
