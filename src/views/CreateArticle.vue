<template>
  <el-form  @submit.native.prevent ref="article" :model="article" label-width="80px" :rules="rules"  >
    <el-form-item label="文章标题" prop="title">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章內容" prop="body">
    <el-input autosize type="textarea" v-model="article.body"></el-input>
  </el-form-item>
    
    
    <el-form-item>
      <el-button type="primary" native-type = "submit" @click = "formatArticle('article')">立即创建</el-button>
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
      this.$http.post('articles',this.article).then(()=>{
        
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          onClose:()=>{
            this.$router.push('/article/index')
          }
        });
         
      })
      
      
     
    }
  },
  // beforeRouteLeave (to, from, next) {
  //     // 导航离开该组件的对应路由时调用
  //     // 可以访问组件实例 `this`
  //     console.log(to.path+'---'+from.path)
  //     next()
  //   },
  //   props:{
  //     isActive:String
  //   }
};
</script>