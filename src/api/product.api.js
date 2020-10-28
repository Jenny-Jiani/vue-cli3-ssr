import http from '../common/http-service'

export default {
  getProductList(param, success, failed) {
    http.get('/file/ProductList.js?version=' + Math.random(), param, success, failed)
  },
  getCommonList(url, param, success, failed) {
    http.get(url, param, success, failed)
  },
  RecordDownloadInfo(param, success, failed) {
    http.post('/api-portal/Api/SDKDownload/RecordDownloadInfo', param, success, failed)
  },
  GetSDKDownLoadRecords(param, success, failed) {
    http.post('/api-portal/Api/SDKDownload/GetSDKDownLoadRecords', param, success, failed)
  },
  UpdateApi(param, success, failed) {
    http.post('/api-common/Api/Api/UpdateApi', param, success, failed)
  },
  GetApiList(param, success, failed) {
    http.get('/api-common/Api/Api/GetList', param, success, failed)
  },
  RemoveApi(param, success, failed) {
    http.get('/api-common/Api/Api/RemoveApi', param, success, failed)
  },
  AddApi(param, success, failed) {
    http.post('/api-common/Api/Api/AddApi', param, success, failed)
  },
  GetProductDownloadFullList(param, success, failed) {
    http.get('/file/ProductDownloadFullList.js', param, success, failed)
  },
  GetProductDownloadTrialList(param, success, failed) {
    http.get('/file/ProductDownloadTrialList.js', param, success, failed)
  },
}
