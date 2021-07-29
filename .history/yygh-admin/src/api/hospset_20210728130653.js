import request from '@/utils/request'

export default {
  gethosList(params) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
      method: 'get',
      params
    })
  }

}