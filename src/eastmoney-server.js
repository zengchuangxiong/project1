var Koa=require('koa');  //引入koa模块
var router=require('koa-router')();   //引入router模块（路由）
var views=require('koa-views');   //引入views模块（用于指定模板引擎）
var static=require('koa-static');   //引入static模块（设置静态文件目录）
var nunjucks=require('nunjucks');   //引入nunjucks模板引擎
var bodyParser=require('koa-bodyparser');  //引入bodyparser中间件模块（用于post获取数据）
var formidable=require('koa-formidable');   //引入koa-formidable模块（用于接收FormData实例）

var server=new Koa();   //创建koa服务器实例
//添加bodyparser中间件
server.use(bodyParser());
//views部署模板文件
server.use(views('D:/VScode文件夹/npm-module/nodeTest/webpack_test/dist',{map:{html:"nunjucks"}}));
//设置服务器端口号
server.listen(3000,function(){
    console.log('服务器启动成功！可以通过http://127.0.0.1:3000来访问');
})

//首页
router.get("/",async function(ctx){
    await ctx.render('index.html');
});



//将路由route加入到服务器实例中
server.use(router.routes());
server.use(router.allowedMethods());

