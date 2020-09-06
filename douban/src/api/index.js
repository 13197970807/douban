import Axios from 'axios'

export function contrysList() {
  return Axios({
    method: 'get',
    url: 'http://10.25.14.34:3000/contrys'
  })
}
