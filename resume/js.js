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
lias.forEach(function(val,key){
    val.onclick=function (x) {
        x.preventDefault();
        let targetName=x.currentTarget.getAttribute('href');
        // document.querySelector('["data-'+targetName+'"]');
        console.log(document.querySelector('[data-target="#skills"]').offsetTop);
        window.scrollTo(0,document.querySelector("[data-target='"+targetName+"']").offsetTop-60);
    };

});

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

