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
        var edit = document.createElement('span');
        edit.innerText = 'E';
        edit.className="edit";
        //获取域名

        console.log(hash[keys[index][i]]);
        kbdBox.appendChild(div) ;
        div.appendChild(kbd) ;
        kbd.innerText=keys[index][i] ;
        kbd.setAttribute("data-target",keys[index][i]);
        if(localStorage.getItem("href")!=null){
            load() ;
        }
        img.src='http://www.'+hash[keys[index][i]]+'/favicon.ico';
        kbd.appendChild(img) ;
        kbd.appendChild(edit);
    }
}

//添加键盘事件
document.onkeydown = function(xxx){
    var key = xxx.key;
    var ele =document.querySelector(`kbd[data-target=${key}]`);
    // console.log(document.querySelector("kbd[data-target='+xxx.key+']"));
    ele.className='active';
    if(localStorage.getItem("href")!=null){
        load() ;
    };
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
    console.log(xx.path);
    var kbd = xx.path[1].dataset.target;
    if(xx.target.className === "edit") {
        var href=prompt('请输入新网址');
        xx.path[1].firstElementChild.src='http://www.'+href+'/favicon.ico';
        save(kbd,href);
        load();
    }
};
//存储localstorage
function save(kbd,href){
    hash[kbd]=href;
    localStorage.setItem("href", JSON.stringify(hash));
}
//加载href
function load(){
    console.log(JSON.parse(localStorage.getItem("href")));
    hash=JSON.parse(localStorage.getItem("href"));
}