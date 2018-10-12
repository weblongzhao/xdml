window.onscroll=function(xx){
    if(window.scrollY > 0){
        document.querySelector('.topNavBar').classList.add('sticky') ;
    }else {
        document.querySelector('.topNavBar').classList.remove('sticky') ;
    }
    // 滚动高亮元素
    let specTags = document.querySelectorAll('[data-x]') ;
    console.log(specTags) ;
    let minIndex = 0;
    //找出用户当前在看的元素
    for(let i =1;i<specTags.length; i++ ){
        if(Math.abs(specTags[minIndex].offsetTop - window.scrollY) > Math.abs(specTags[i].offsetTop - window.scrollY)){
            minIndex =i;
        }
    }
    console.log(minIndex,'最小元素index');
    //给元素添加边框
    specTags.forEach(function(item,index){
        specTags[index].classList.remove('hightlight');
    });
    specTags[minIndex].classList.add('hightlight');

};

// 点击导航滑动到指定位置

let lias = document.querySelectorAll(".topNavBar  nav li>a");
var num=0;
/*lias.forEach(function(val,key,index){

    val.onclick=function (x) {
        x.preventDefault();
        let targetName = x.currentTarget.getAttribute('href');
        // document.querySelector('["data-'+targetName+'"]');

        window.scrollTo(current, target);
    }
});*/
for(let i =0;i<lias.length;i++){
    lias[i].onclick=function (x) {
        x.preventDefault();
        let targetName = x.currentTarget.getAttribute('href');
        //缓动动画
        let currentTop = window.scrollY ;
        let targetTop = document.querySelector("[data-target='"+targetName+"']").offsetTop-60 ;
        // Setup the animation loop.
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        var coords = { y:currentTop }; // Start at (0, 0)
        var s = Math.abs(targetTop-currentTop);
        var t = (s/100)*300 ;
        if(t>500){t=500};
        var tween = new TWEEN.Tween(coords)
            .to({y:targetTop },t)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();

    }
}

// 导航子菜单

let aTargets= document.getElementsByClassName('menuTigger');
console.log(aTargets) ;
for(let i =0;i<aTargets.length;i++){
    console.log(aTargets[i].parentElement,'123');
    aTargets[i].onmouseenter=function (x) {
        console.log(x.currentTarget) ;
        x.currentTarget.classList.add('active');
    };
    aTargets[i].onmouseleave=function (x) {
        console.log(x.currentTarget) ;
        x.currentTarget.classList.remove('active');
    };
}

//留言功能实现
// 存储服务
var APP_ID = 'deqGjtnzzioid309TaY5odqh-gzGzoHsz';
var APP_KEY = 'FHlT3Jd5Yl2sNCO24nYFJveQ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});



var formbox = document.querySelector('#form') ;
console.log(formbox) ;
//获取留言内容
getContent('TestObject','content',document.querySelector('#lxbox'));
function getContent(tableName,field,Ele){
    var query = new AV.Query(tableName);
    query.include(field);
    query.find().then(function (text) {
        // 查询到商品后，在前端展示到相应的位置中。
        var content = text.map(
            function(item){
                return item.attributes[field];
            }
        ) ;
        console.log(content) ;
        content.forEach(
            function(item){
                console.log(item);
                let Li=document.createElement('li');
                Li.innerText=item;
                Ele.append(Li);
            }
        )
    }).catch(
        function(error) {alert(JSON.stringify(error));}
    );
}
//
formbox.addEventListener('submit',function(e){
    e.preventDefault();
    // 发送留言
    var lyContent =formbox.querySelector('#text').value;
    var Todo = AV.Object.extend('TestObject');
    // 新建一个 Todo 对象
    var todo = new Todo();
    if(lyContent==="") return ;
    todo.set('content',lyContent);
    todo.save().then(function (todo) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + todo.id);
        //添加留言内容
        var query = new AV.Query('TestObject');
        query.get(todo.id).then(function (todo) {
            // 成功获得实例
            let addText = todo.attributes['content'];
            let Li=document.createElement('li');
            Li.innerText=addText;
            document.querySelector('#lxbox').append(Li);
            formbox.querySelector('#text').value='' ;
        }, function (error) {
            // 异常处理
        });

    }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message);
    });
});


















