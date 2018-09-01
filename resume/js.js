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

