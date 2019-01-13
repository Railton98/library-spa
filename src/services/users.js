import { http } from './config'

export default {
  login: (credentials) => {
    return http.post('auth/login', credentials)
  },
  register: (user) => {
    return http.post('auth/register', user)
  }
}
