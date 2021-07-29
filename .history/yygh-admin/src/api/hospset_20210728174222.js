import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'post', //后台的提交方式
      data: searchObj //用json方式把数据传到后端
    })
  },
  removeDataByIdt(current,limit,searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'post', //后台的提交方式
      data: searchObj //用json方式把数据传到后端
    })
  }

}