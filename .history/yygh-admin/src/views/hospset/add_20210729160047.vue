<template>
  <div class="app-container">
    医院设置添加
    <!-- 表单框 -->
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospitalSet.hosname" />
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospitalSet.hoscode" />
      </el-form-item>
      <el-form-item label="api基础路径">
        <el-input v-model="hospitalSet.apiUrl" />
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="hospitalSet.contactsName" />
      </el-form-item>
      <el-form-item label="联系人手机">
        <el-input v-model="hospitalSet.contactsPhone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import hospset from "@/api/hospset";

export default {
  data() {
    return {
      hospitalSet: {},
    };
  },

  created() {
    //获取路由id值
    if (this.$route.params && this.$route.params.id ) {
      const id = this.$route.params.id
    }

    //调用接口得到医院设置信息
  },

  methods: {
    //根据ID查询医院信息
    getHospset(){

    },
    
    //添加
    saveOrUpdate() {
      hospset.saveHospSet(this.hospitalSet)
      .then(response => {
        this.$message({
          type: "success",
          message: "添加成功!",
        });
        //跳转列表页面，使用路由跳转方式实现
        this.$router.push({ path: "/hospSet/list" });
      });
    },
    //修改

  },
};
</script>
