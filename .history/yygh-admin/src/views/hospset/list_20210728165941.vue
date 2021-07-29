<template>
  <div class="app-container">
      医院设置列表
  </div>
</template>
<script>
import  hospset  from '@/api/hospset'

export default {
  //定义变量和初始值
  data() {
    return {
      current: 1, //当前页
      limit: 3, //每页显示记录数
      searchObj: {}, //条件封装对象
      list:[], 
      total: 0
    };
  },
  //在页面渲染之前执行
  created() {
    //一般调用methods定义的方法,得到数据
    this.getList()
  },
  //定义方法 请求接口调用
  methods: {
    //医院设置列表
    getList() {
      hospset.getHospSetList(this.current,this.limit,this.searchObj)
        //请求成功
        .then(response =>{
          // console.log(response)
          //返回集合赋值list
          this.list = response.data.records
        })
        //请求失败
        .catch(error => {
          console.log(error)
        })
    },
  },
  
}
</script>