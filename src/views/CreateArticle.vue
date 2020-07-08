<template>
  <el-form  @submit.native.prevent ref="form" :model="article" label-width="80px">
    <el-form-item label="文章標題">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章內容">
    <el-input autosize type="textarea" v-model="article.body"></el-input>
  </el-form-item>
    
    
    <el-form-item>
      <el-button type="primary" native-type = "submit" @click = "saveAricle">立即创建</el-button>
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
      console.log(this.article);
    }
  }
};
</script>