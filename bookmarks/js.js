var keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
] ;

var hash = {
    'q':'qq.com',
    'w':'weibo.com',
    'e':'weibo.com',
    'r':'qq.com',
    't':'qq.com',
    'y':'qq.com',
    'u':'qq.com'
} ;

// 生成 dom元素
for(var index =0;index<3;index++) {
    var div = document.createElement('div') ;
    div.className='row' ;
    for(var i=0;i<keys[index].length;i++){
        var kbd = document.createElement('kbd') ;
        var img = document.createElement('img') ;
        //域名
        console.log(hash[keys[index][i]]);
        kbdBox.appendChild(div) ;
        div.appendChild(kbd) ;
        kbd.innerText=keys[index][i] ;
        kbd.setAttribute("data-target",keys[index][i]);
        img.src='http://www.'+hash[keys[index][i]]+'/favicon.ico';
        kbd.appendChild(img) ;
    }
}

//添加键盘事件
document.onkeydown = function(xxx){
    var key = xxx.key;
    var ele =document.querySelector(`kbd[data-target=${key}]`);
    // console.log(document.querySelector("kbd[data-target='+xxx.key+']"));
    ele.className='active';
    console.log(hash[xxx.key]);
    window.location=`http://www.${hash[xxx.key]}`


};
//抬起键盘事件
document.onkeyup = function (xxx){
    var key = xxx.key;
    var ele =document.querySelector(`kbd[data-target=${key}]`);
    // console.log(document.querySelector("kbd[data-target='+xxx.key+']"));
    ele.className=''
};

// 添加编辑功能
kbdBox.onclick = function(xx){
    console.log(xx.target);
};



