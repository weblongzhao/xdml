function  init() {
    this.context=canvas.getContext('2d');
}
// 初始化
var canvas = document.querySelector("#canvas") ;
var tool = document.querySelector("#tool");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
window.addEventListener("resize",function(){
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
},true) ;

var context = canvas.getContext('2d');
var flag=false;
var lastpoint=null;
var newpoint = null;
var eraser = false;

eraser1.onclick = function(){
        eraser = true ;
        tool.classList.add('active')
};

pen.onclick = function(){
        eraser = false ;
        tool.classList.remove('active')
}
// 鼠标按下事件
canvas.onmousedown = function (e) {
        console.log(context)
        flag =true;
        console.log('未开始画画') ;
        console.log(e.target.classList) ;
        var clientX = e.x;
        var clientY = e.y;
        lastpoint = {
            x:clientX,
            y:clientY
        };
};
// 鼠标移动事件
document.onmousemove = function (e) {
    if(flag){
        console.log("开始画画");
        console.log(e.x,":",e.y) ;
        var clientX = e.x;
        var clientY = e.y;
        newpoint = {
            x:clientX,
            y:clientY
        };
        drawing({x:clientX,y:clientY}) ;

    }else {
        console.log('未开启画画')
    }
};
// 鼠标松开事件
document.onmouseup = function (e) {
    flag=false;
};

function drawing(){
    context.beginPath();
    context.strokeStyle="#ffffff";
    context.lineTo(lastpoint.x,lastpoint.y);
    context.lineTo(newpoint.x,newpoint.y);
    context.stroke();
    context.closePath();
    lastpoint=newpoint;
}





