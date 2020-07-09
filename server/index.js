const express = require('express')

const app = express()
//解决跨域
app.use(require('cors')())

app.use(express.json())
//建立数据模型和链接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin',{
  useCreateIndex:true,
  useNewUrlParser:true,
  useFindAndModify:true,
  useUnifiedTopology:true
})
const Article =mongoose.model('Article',new mongoose.Schema({
  title:{type :String},
  body:{type:String}
}))





app.get('/', async (req, res) => {
  res.send('index');
});
//新增文章
app.post('/api/articles',async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article);
});
//获取文章列表
app.get('/api/articles',async (req, res) => {
  const articles = await Article.find()
  res.send(articles);
});
//删除文章
app.delete('/api/articles/:id',async (req, res) => {
  
 await Article.findByIdAndDelete(req.params.id)
 res.send({
   status:true
 });
});
//获取文章详情
app.get('/api/articles/:id',async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article);
});
//修改文章
app.put('/api/articles/:id',async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id,req.body)
  res.send(article);
});



app.listen(3000, () => {
  console.log('App listening on port 3000!');
});