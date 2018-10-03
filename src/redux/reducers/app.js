import { SET_TOKEN, SET_LOGIN_USER, LOGOUT_USER } from '../constants/actions'

const defaultState = {
  token: '',
  userDetails: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case SET_LOGIN_USER:
      return {
        ...state,
        userDetails: action.user,
      }
    case LOGOUT_USER:
      return {
        token: '',
        userDetails: {},
      }
    default:
      return state
  }
}
