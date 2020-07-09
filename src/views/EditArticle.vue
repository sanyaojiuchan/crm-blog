<template>
  <el-form  @submit.native.prevent ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章內容">
    <el-input autosize type="textarea" v-model="article.body"></el-input>
  </el-form-item>
    
    
    <el-form-item>
      <el-button type="primary" native-type = "submit" @click = "saveAricle">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article:{}
    };
  },
  methods: {
    saveAricle() {
      this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res=>{
        console.log(res.data);
        this.$message({
          message: '修改成功',
          type: 'success'
        });
      })
      this.$router.push('/article/index')
    },
    getDataById(){
      this.$http.get(`articles/${this.$route.params.id}`).then(res=>{
        this.article = res.data
      })
    }
  },
  created(){
    this.getDataById()
  },
  
};
</script>