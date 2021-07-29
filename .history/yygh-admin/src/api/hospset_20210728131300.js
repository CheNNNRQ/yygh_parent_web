import request from '@/utils/request'

export default {
  getHospSetList(current,limit,seat) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'get',
      params
    })
  }

}