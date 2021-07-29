import request from '@/utils/request'

export default {
  getHospsetList(params) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
      method: 'get',
      params
    })
  }

}