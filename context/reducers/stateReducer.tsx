import { defaultState, State, types } from 'context/stateContext';

export type Action = { type: types; payload: any };

export const stateReducer = (state: State = defaultState, { payload, type }: Action): State => {
  console.log({ payload, type });
  switch (type) {
    case types.ADD_BOARD:
      return { ...state, boards: [...state.boards, payload] };
    case types.ADD_THREAD:
      return { ...state, threads: [...state.threads, payload] };
    case types.ADD_COMMENT:
      return { ...state, comments: [...state.comments, payload] };
    case types.SET_BOARDS:
      return { ...state, boards: payload };
    case types.SET_THREADS:
      return { ...state, threads: payload };
    case types.SET_COMMENTS:
      return { ...state, comments: payload };
    case types.SET_USER:
      return { ...state, user: payload };
    case types.UPDATE_BOARD: {
      const index = state.boards.findIndex((board) => board.id === payload.id);
      if (index === -1) {
        return state;
      }
      const boards = [...state.boards];
      boards.splice(index, 1, payload);

      return { ...state, boards: boards };
    }
    case types.UPDATE_THREAD: {
      const index = state.threads.findIndex((board) => board.id === payload.id);
      if (index === -1) {
        return state;
      }
      const threads = [...state.threads];
      threads.splice(index, 1, payload);

      return { ...state, threads: threads };
    }
    case types.UPDATE_COMMENT: {
      const index = state.comments.findIndex((board) => board.id === payload.id);
      if (index === -1) {
        return state;
      }
      const comments = [...state.comments];
      comments.splice(index, 1, payload);

      return { ...state, comments: comments };
    }
    default:
      return state;
  }
};
