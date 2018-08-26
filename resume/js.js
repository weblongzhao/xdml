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
        let targetName=x.currentTarget.getAttribute('href');
        // document.querySelector('["data-'+targetName+'"]');
        console.log(document.querySelector('[data-target="#skills"]').offsetTop);
        window.scrollTo(0,document.querySelector("[data-target='"+targetName+"']").offsetTop-60);
    };

});

