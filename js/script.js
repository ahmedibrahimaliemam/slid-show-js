let image=document.getElementById("slid") ;
let images=["work/work1.webp","work/work2.webp","work/work3.webp","work/work4.webp"] ;
let i=0 ;
function change(){
image.setAttribute("src",images[i]) ;
i++
if(i==images.length){
    i=0 ;
}
setTimeout(function(){
    change() ;
},2000)
}

change() ;