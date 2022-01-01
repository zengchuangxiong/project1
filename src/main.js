import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/CSS/reset.css';   //引入css样式表
import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/CSS/less/style.css';  //引入重置样式表

//引入icon字体样式
import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/icon/icon-3barsNav/icon-3barsNav.css';
import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/icon/icon-arrowNav/icon-arrowNav.css';
import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/icon/icon-phoneDropDownBox/icon-phoneDropDownBox.css';
import 'D:/VScode文件夹/npm-module/nodeTest/webpack_test/src/static/icon/icon-phoneNav/icon-phoneNav.css';

var arrowNav_lis = document.querySelectorAll('nav>#navBox ul>.arrowNav_li');   //导航栏中有带箭头的li盒子
var DropDownBox1 = document.querySelector('nav>#navBox>.left>ul>li>.DropDownBox1');  //导航栏左侧“请登录”的li盒子的下拉框
var DropDownBox2 = document.querySelector('nav>#navBox>.right>ul>li>.DropDownBox2');  //导航栏右侧“基金交易”的li盒子的下拉框
var DropDownBox3 = document.querySelector('nav>#navBox>.right>ul>li>.DropDownBox3');  //导航栏右侧“产品导购”的li盒子的下拉框
var DropDownBox4 = document.querySelector('nav>#navBox>.right>ul>li>.DropDownBox4');  //导航栏右侧“网站导航”的li盒子的下拉框
DropDownBox1.style.display='none';   //先把下拉框设置隐藏
DropDownBox2.style.display='none';   //先把下拉框设置隐藏
DropDownBox3.style.display='none';   //先把下拉框设置隐藏
DropDownBox4.style.display='none';   //先把下拉框设置隐藏

//给带箭头的li盒子循环添加事件
for(var i=0;i<arrowNav_lis.length;i++){
    //添加鼠标划上显示事件
    arrowNav_lis[i].addEventListener('mouseenter',function(){
        this.classList.add('arrowNav_add');
    },false);
    //添加鼠标移出隐藏事件
    arrowNav_lis[i].addEventListener('mouseleave',function(){
        this.classList.remove('arrowNav_add');
    },false);
}

//导航栏左侧“请登录”的li盒子添加事件
//添加下拉框显示的事件
arrowNav_lis[0].addEventListener('mouseenter',function(){
    DropDownBox1.style.display='flex';
},false);
//添加下拉框隐藏的事件
arrowNav_lis[0].addEventListener('mouseleave',function(){
    DropDownBox1.style.display='none';
},false);

//导航栏右侧“基金交易”的li盒子添加事件
//添加下拉框显示的事件
arrowNav_lis[1].addEventListener('mouseenter',function(){
    DropDownBox2.style.display='block';
},false);
//添加下拉框隐藏的事件
arrowNav_lis[1].addEventListener('mouseleave',function(){
    DropDownBox2.style.display='none';
},false);

//导航栏右侧“产品导购”的li盒子添加事件
//添加下拉框显示的事件
arrowNav_lis[2].addEventListener('mouseenter',function(){
    DropDownBox3.style.display='block';
},false);
//添加下拉框隐藏的事件
arrowNav_lis[2].addEventListener('mouseleave',function(){
    DropDownBox3.style.display='none';
},false);

//导航栏右侧“网站导航”的li盒子添加事件
//添加下拉框显示的事件
arrowNav_lis[3].addEventListener('mouseenter',function(){
    DropDownBox4.style.display='flex';
},false);
//添加下拉框隐藏的事件
arrowNav_lis[3].addEventListener('mouseleave',function(){
    DropDownBox4.style.display='none';
},false);

