var codeContent = `
面试官，你好
这是我的一个动态简历，说了这么多该来点样式了。

`;
var codeContent2 =`
# 自我介绍 
    
我叫龙钊 1995年8月出生 互联网工作经验3年 希望应聘贵公司前端岗位

# 技能介绍

熟悉JavaScript Css 

# 项目介绍

1. 轮播
2. 简历
3. 画板

# 联系方式

- qq
- Email
- 手机
`;
var style = `
    body{
        background:#dedede;
    }
    #code {
    height: 100vh;
    width: 50%;
    background-color: #fff;
    padding: 40px;
    overflow: scroll;
    }
     .style {
    position:absolute;
    width: 50%;
    height: 100vh;
    top: 100px;
    left: 0;
    }
    /*让我们把样式移动到另一张纸上吧。*/
    .style.move-right{
      transform:translate(100%,-100px)
    }
`;

var code = document.querySelector('#code') ;

// pre.innerHTML=codeContent ;
// code.appendChild(pre);
write(code,'pre',codeContent,function(x){
        var lastContent = x;
        write(document.querySelector('.style'),'pre',style,function(x){
            write(code,lastContent,codeContent2,function(){
                console.log(typeof lastContent.innerText)
                lastContent.innerHTML =  marked(codeContent+codeContent2);
            })
        });
        write(document.head,'style',style,function(){

        });
});
function write(codeBox,TagName,codeContent,success){//参数分别是 内容容器，包括内容的标签，内容，成功后回调函数
    var num = 0;
    var pre=typeof TagName==='object'?TagName:document.createElement(TagName);
    var  time=setInterval(function() {
        pre.innerHTML += codeContent.substring(num, num + 1);
        codeBox.appendChild(pre);
        num++;
        if(num>=codeContent.length){
            success(pre);
            window.clearInterval(time)
        }
    },50);
}








