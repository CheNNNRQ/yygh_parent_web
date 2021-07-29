<template>
  <div class="app-container">
    医院设置列表
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" label />
      <el-table-column prop="hosname" label="医院名称" />
      <el-table-column prop="hoscode" label="医院编号" />
      <el-table-column prop="apiUrl" label="api基础路径" width="200" />
      <el-table-column prop="contactsName" label="联系人姓名" />
      <el-table-column prop="contactsPhone" label="联系人手机" />
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? "可用" : "不可用" }}
        </template></el-table-column
      ></el-table
    >
  </div>
</template>
</el-table-column>
</el-table>

  </div>
</template>
<script>
import hospset from "@/api/hospset";

export default {
  //定义变量和初始值
  data() {
    return {
      current: 1, //当前页
      limit: 3, //每页显示记录数
      searchObj: {}, //条件封装对象
      list: [], //每页数据集合
      total: 0, //总记录数
    };
  },
  //在页面渲染之前执行
  created() {
    //一般调用methods定义的方法,得到数据
    this.getList();
  },
  //定义方法 请求接口调用
  methods: {
    //医院设置列表
    getList() {
      hospset
        .getHospSetList(this.current, this.limit, this.searchObj)
        //请求成功
        .then((response) => {
          // console.log(response)
          //返回集合赋值list
          this.list = response.data.records;
          //总记录数
          this.total = response.data.total;
        })
        //请求失败
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>