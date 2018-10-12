import {
  SHOW_IS_LOADING,
  HIDE_IS_LOADING
} from './actionType';

export const showIsLoading = () => {
  return {
    type: SHOW_IS_LOADING
  }
}

export const hideIsLoading = () => {
  return {
    type: HIDE_IS_LOADING
  }
}
