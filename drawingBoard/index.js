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
var recordPoint = [];
// 画图tool
eraser1.onclick = function(){
        eraser = true ;
        tool.classList.add('active')
};

pen.onclick = function(){
        eraser = false ;
        tool.classList.remove('active')
};
clear.onclick = function(){
       del();
};

// 鼠标按下事件
canvas.onmousedown = function (e) {
        console.log(range.value);
        console.log(context) ;
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
            console.log(eraser,"eraser");
            if(eraser===false){
                console.log("开始画画");
                console.log(e.x,":",e.y) ;

                var clientX = e.x;
                var clientY = e.y;
                newpoint = {
                    x:clientX,
                    y:clientY
                };
                rec(newpoint) ;
                drawing({x:clientX,y:clientY}) ;
             }else{
                var clientX = e.x;
                var clientY = e.y;
                console.log(clientX,clientY) ;
                Eraser(clientX,clientY) ;
            }
    }else {
        console.log('未开启画画')
    }
};
// 鼠标松开事件
document.onmouseup = function (e) {
    flag=false;
    console.log(recordPoint);
    recordPoint.forEach((i,index)=>{
        console.log(i,'记录点',index)
    })
};
//播放功能
play.onclick = function(){
    console.log('开始播放');
    del();
    var index=0;
    setInterval(function(){
        if(index<=recordPoint.length){
            lastpoint=recordPoint[index];
            newpoint=recordPoint[index+1];
            drawing();
            index++;
        }
    },30);
    lastpoint=null;
    newpoint=null;
};

function drawing(){
    context.beginPath();
    context.strokeStyle=color.value;
    context.lineWidth= range.value/10;
    context.lineTo(lastpoint.x,lastpoint.y);
    context.lineTo(newpoint.x,newpoint.y);
    context.stroke();
    context.closePath();
    lastpoint=newpoint;
}

function Eraser(x,y){
    console.log('成功擦除');
    context.clearRect(x-5, y-5, 10, 10);
}

function  del() {
    console.log('清除画布');
    context.clearRect(0,0,canvas.width,canvas.height);
}

function rec(currentPoint){
    recordPoint.push(currentPoint) ;
}

