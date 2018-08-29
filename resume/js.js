window.onscroll=function(xx){
    if(window.scrollY > 0){
        document.querySelector('.topNavBar').classList.add('sticky')
    }else {
        document.querySelector('.topNavBar').classList.remove('sticky')
    }
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
        // document.querySelector('["data-'+targetName+'"]');

        //缓动动画
        let n = 25 ; //一共动多少次
        let duration = 500/n; //每次时间
        let currentTop = window.scrollY ;
        let targetTop = document.querySelector("[data-target='"+targetName+"']").offsetTop-60 ;
        let distance = (targetTop-currentTop)/n ;
        console.log(currentTop,'currenttop')
        console.log(targetTop,'targetTop')
        console.log(distance,'distance')
        let i = 0;
        let id = setInterval(function(){
            if(i===n){
                window.clearInterval(id);
                return
            }
            i= i+1;
            window.scrollTo(0,currentTop+distance*i);
        },duration);
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

