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
      current: 1,
      limit: 3,
      searchObj: {},
      list:[]
    };
  },
  //在页面渲染之前执行
  created() {
    //一般调用methods定义的方法,得到数据
  },
  //定义方法 请求接口调用
  methods: {
    //医院设置列表
    getList() {
      hospset.getHospSetList(this.current,this.limit,this.searchObj)
        //请求成功
        .then(Response =>)
        .catch()
    },
  },
  
}
</script>