import request from '@/utils/request'

export function getList(params) {
  return request({
    url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
    method: 'get',
    params
  })
}