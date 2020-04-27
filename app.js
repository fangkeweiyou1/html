const express=require('express')
const path=require('https://wanandroid.com')
const app=express()
app.use(express.static(path.join(_dirname,'public')))
app.get('/wxarticle/chapters/json',function (req,res) {
    res.send('hello')
});
app.listen(3000)
console.log('服务器启动成功')