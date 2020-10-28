import http from '../common/http-service'

export default {
  getEditionList(param, success, failed) {
    http.get('/file/EditionEnumList.js?random=' + Math.random(), param, success, failed)
  },
}
