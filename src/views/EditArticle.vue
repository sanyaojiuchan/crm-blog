<template>
  <el-form  @submit.native.prevent ref="article" :model="article" label-width="80px" :rules="rules">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章內容">
    <el-input autosize type="textarea" v-model="article.body"></el-input>
  </el-form-item>
    
    
    <el-form-item>
      <el-button type="primary" native-type = "submit" @click = "formatArticle('article')">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article:{},
      rules:{
        title:[
          {required:true,message:'文章标题不能为空',trigger: 'blur' }
        ],
        body:[
          {required:true,message:'文章内容不能为空',trigger: 'blur' }
        ]

      }
    };
  },
  methods: {
    formatArticle(form){
     
      this.$refs[form].validate((valid) => {
          if (valid) {
            this.saveArticle()
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
   
    saveArticle() {
      this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res=>{
        console.log(res.data);
        this.$message({
          message: '修改成功',
          type: 'success',
          onClose:()=>{
            this.$router.push('/article/index')
          }
        });
      })
     
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