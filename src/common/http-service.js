import Axios from 'axios'
import { BASEURI } from './api-config'
import qs from 'qs'

Axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  get(url, params, success, errorFunction) {
    Axios.get(url, { params })
      .then(response => {
        this.handResult(response, success, errorFunction)
      })
      .catch(error => {
        this.handleCatchError(error, errorFunction)
      })
  },

  post(url, params, success, errorFunction) {
    Axios.post(url, params)
      .then(response => {
        this.handResult(response, success, errorFunction)
      })
      .catch(error => {
        this.handleCatchError(error, errorFunction)
      })
  },

  handResult(response, success, errorFunction) {
    if (response.status === 200) {
      if (response.data.code == -2) {
        window.location.href = BASEURI + '/Login/Login?callback=' + window.location.href
      } else {
        success(response.data)
      }
    } else {
      if (errorFunction) {
        errorFunction(response)
      }
    }
  },

  handleCatchError(error, errorFunction) {
    if (errorFunction) {
      errorFunction(error)
    } else {
      console.log(error)
    }
  },
}
