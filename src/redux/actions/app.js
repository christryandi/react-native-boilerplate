import { SET_TOKEN, SET_LOGIN_USER, LOGOUT_USER } from '../constants/actions'

export const setToken = token => ({
  type: SET_TOKEN,
  token,
})
export const setLoginUser = user => ({
  type: SET_LOGIN_USER,
  user,
})
export const logoutUser = () => ({
  type: LOGOUT_USER,
})
