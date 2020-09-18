import config from '../config'

const jwtService = {
  saveToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasToken() {
    return !!jwtService.getToken()
  }
}

export default jwtService