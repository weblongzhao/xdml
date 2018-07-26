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
        img.src='http://www.'+hash[keys[index][i]]+'/favicon.ico';
        kbd.appendChild(img) ;
    }
}

//添加键盘事件
document.onkeypress = function(xxx){
    console.log(xxx.key);


};





