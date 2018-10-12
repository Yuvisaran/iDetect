import { initialState } from './initial.js';

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_IS_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'HIDE_IS_LOADING':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default commonReducer;
