import request from '@/utils/request'

export default getList(params) {
  return request({
    url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
    method: 'get',
    params
  })
}