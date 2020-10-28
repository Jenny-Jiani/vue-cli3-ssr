import http from '../common/http-service'

export default {
  getCountrylist(param, success, failed) {
    http.get('/api-common/Api/Country/GetList', param, success, failed)
  },
  getStatelist(countryCode, success, failed) {
    http.get('/api-common/Api/State/GetList', countryCode, success, failed)
  },
  getUserInfo(param, success, failed) {
    http.get('/api-common/Api/User/GetUserInfo', param, success, failed)
  },
  getUserList(param, success, failed) {
    http.get('/api-common/Api/User/GetUsersByPage', param, success, failed)
  },
  getCompanyInfo(param, success, failed) {
    http.get('/api-common/Api/Company/GetCompanyInfo', param, success, failed)
  },
  logout(param, success, failed) {
    http.get('/api-common/Api/User/Logout', param, success, failed)
  },
  Invite(param, success, failed) {
    http.get('/api-common/Api/User/Invite', param, success, failed)
  },
  CheckInvitee(param, success, failed) {
    http.get('/api-common/Api/User/CheckInvitee', param, success, failed)
  },
  GetInvitationList(param, success, failed) {
    http.get('/api-common/Api/User/GetInvitationList', param, success, failed)
  },
  AcceptInvitation(param, success, failed) {
    http.get('/api-common/Api/User/AcceptInvitation', param, success, failed)
  },
  RefuseInvitation(param, success, failed) {
    http.get('/api-common/Api/User/RefuseInvitation', param, success, failed)
  },
  UpdatePassword(param, success, failed) {
    http.get('/api-common/Api/User/UpdatePassword', param, success, failed)
  },
  UpdateUserInfo(param, success, failed) {
    http.post('/api-common/Api/User/UpdateUserInfo', param, success, failed)
  },
  //Api/UserActive/GetUserActiveInfo
  GetUserActiveInfo(param, success, failed) {
    http.post('/api-portal/Api/UserActive/GetUserActiveInfo', param, success, failed)
  },
  GetUserRoleList(param, success, failed) {
    http.get('/api-common/Api/UserRole/GetList', param, success, failed)
  },
  RemoveRole(param, success, failed) {
    http.get('/api-common/Api/UserRole/RemoveRole', param, success, failed)
  },
  AddRole(param, success, failed) {
    http.post('/api-common/Api/UserRole/AddRole', param, success, failed)
  },
  GetUsersByRole(param, success, failed) {
    http.get('/api-common/Api/UserRole/GetUsersByRole', param, success, failed)
  },
  UpdateCompanyInfo(param, success, failed) {
    http.post('/api-common/Api/Company/UpdateCompanyInfo', param, success, failed)
  },
  RemoveUserFromCompany(param, success, failed) {
    http.get('/api-common/Api/User/RemoveUserFromCompany', param, success, failed)
  },
  SetCompanyPrimaryContact(param, success, failed) {
    http.get('/api-common/Api/User/SetCompanyPrimaryContact', param, success, failed)
  },
  GetCompanyList(param, success, failed) {
    http.post('/api-common/Api/Company/GetList', param, success, failed)
  },
  AddReseller(param, success, failed) {
    http.post('/api-common/Api/Company/AddReseller', param, success, failed)
  },
  login(param, success, failed) {
    http.get('/api-common/Api/User/Login', param, success, failed)
  },
  GetResellerList(param, success, failed) {
    http.get('/api-common/Api/Reseller/GetList', param, success, failed)
  },
  ConfirmReseller(param, success, failed) {
    http.get('/api-common/Api/Reseller/ConfirmReseller', param, success, failed)
  },
}
