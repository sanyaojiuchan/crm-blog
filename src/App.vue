<template>
  <el-container style="height: 100vh; border: 1px solid #eee" >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']" :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>内容管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/article/index" >文章列表</el-menu-item>
            <el-menu-item index="/article/create">新建文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <!-- 首頁內容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  watch:{
    $route:{
      handler: function(to, from){
      console.log(to.path);
      console.log(from.path);
    },
   //立即先去执行handler方法
    immediate:true
    }
  },
  methods: {
    gethash(){
      console.log(this.$route)
    }
  },
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

</style>

<script>
</script>
