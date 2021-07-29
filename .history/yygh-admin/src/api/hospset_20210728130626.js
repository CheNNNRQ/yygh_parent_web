import request from '@/utils/request'

export default var unwatch = this.$watch('propertyName', function (newValue, oldValue) {
  
}, {
  deep: true,
  immediate: true,
});}
  getList(params) {
  return request({
    url: `/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}`,
    method: 'get',
    params
  })
}