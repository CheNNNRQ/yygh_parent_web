import request from '@/utils/request'

export default {

  //数据字典列表
  getDictList(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,//后台的@PostMapping("findPageHospSet/{current}/{limit}")里的地址
      method: 'get', //后台的提交方式
      // data: searchObj //用json方式把数据传到后端
    })
  },

  
  

}