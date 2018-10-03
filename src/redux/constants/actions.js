let id = 1
const ID = () => id++

// app.js
export const SET_TOKEN = ID()
export const SET_LOGIN_USER = ID()
export const LOGOUT_USER = ID()
