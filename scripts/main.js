var num=0;
let context = document.querySelector("textarea");
context.textContent = num;
let button = document.querySelector("button");
button.onclick=function(){
    num++;
    context.textContent = num;
}