window.onscroll=function(xx){
    if(window.scrollY > 0){
        document.querySelector('.topNavBar').classList.add('sticky')
    }else {
        document.querySelector('.topNavBar').classList.remove('sticky')
    }
}