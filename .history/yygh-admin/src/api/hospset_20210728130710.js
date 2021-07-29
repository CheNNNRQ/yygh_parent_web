import request from '@/utils/request'

export default {
  getHospSetList(curr) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
      method: 'get',
      params
    })
  }

}