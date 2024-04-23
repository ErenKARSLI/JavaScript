let img=document.getElementById("lamp")

document.getElementById("on").addEventListener("click",()=>{

   img.src= "/day4/img/police-bmw.gif"
})



document.getElementById("off").addEventListener("click",()=>{
    img.src= "/day4/img/police-bmw-off.png"
})


img.addEventListener("mouseover",()=>{
    img.src= "/day4/img/police-bmw.gif"
})


img.addEventListener("mouseleave",()=>{
    img.src= "/day4/img/police-bmw-off.png"
})
