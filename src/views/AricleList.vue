<template>
  <el-table :data="articles" height="100%" border  :header-cell-style="{background:'rgba(0, 0, 0,.15)'}">
    <el-table-column type="selection" width="55" align	='center'></el-table-column>
    <el-table-column prop="title" label="标题" width="140" align	='center'></el-table-column>
    <el-table-column prop="body" label="文章内容" width="auto"></el-table-column>
    <el-table-column fixed="right" label="操作" width="200" align	='center'>
      <template slot-scope="scope">
        <el-button @click="editArticle(scope.row._id)" type="primary" size="small">编辑</el-button>
        <el-button type="danger" size="small" @click="removeArticle(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "",
          body: ""
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("articles").then(res => {
        this.articles = res.data;
      });
    },
    editArticle(id) {
      this.$router.push(`/article/${id}/edit`);
    },
    removeArticle(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.delete(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delete(id) {
      this.$http.delete(`articles/${id}`).then(() => {
        this.getData();
      });
    }
  }
};
</script>

<style >

</style>