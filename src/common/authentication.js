import { Util } from './util'
import { BASEURI } from './api-config'
import userApi from '../api/user.api'
const isLogin = () => {
  return getCurrentUser() === null ? false : true
}

const DynamsoftTokenCookieName = 'DynamsoftToken'

const getCurrentUser = () => {
  let DynamsoftToken = Util.getCookie(DynamsoftTokenCookieName)
  if (DynamsoftToken) {
    return {
      email: Util.getCookie('DynamsoftEmail'),
      role: Util.getCookie('DynamsoftRole'),
      token: DynamsoftToken,
      userId: Util.getCookie('DynamsoftUser'),
      username: Util.getCookie('DynamsoftUserName'),
    }
  }
  return null
}

const isSales = () => {
  let role = Util.getCookie('DynamsoftRole')
  if (role == 1 || role == 4) {
    return true
  }
  return false
}

const logOut = () => {
  userApi.logout(
    {
      token: Util.getCookie(DynamsoftTokenCookieName),
    },
    res => {
      if (res.code == 0) {
        Util.delCookie('DynamsoftEmail')
        Util.delCookie('DynamsoftRole')
        Util.delCookie('DynamsoftToken')
        Util.delCookie('DynamsoftUser')
        Util.delCookie('DynamsoftUserName')
        window.location.href = BASEURI + '/Login/Login'
      }
    },
  )
}

export default {
  isLogin,
  getCurrentUser,
  isSales,
  logOut,
}
