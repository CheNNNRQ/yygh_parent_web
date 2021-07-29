import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,//后台的mapper
      method: 'post',
      params
    })
  }

}