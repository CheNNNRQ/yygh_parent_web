import request from '@/utils/request'

export default {
  //医院设置列表
  getHospSetList(current,limit,searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'post', //后台的提交方式
      data: searchObj //用json方式把数据传到后端
    })
  },
  //删除医院设置
  removeDataById(id) {
    return request({
      url: `/admin/hosp/hospitalSet/remove/${id}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'delete', //后台的提交方式
    })
  },
  //删除医院设置
  batchHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/remove/${id}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'delete', //后台的提交方式
    })
  }

}