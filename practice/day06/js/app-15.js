let buton=document.querySelector(".btn");
let video=document.querySelector(".background-video");
let faEl=document.querySelector(".fa");



buton.addEventListener("click",()=>{
    control()
})

const control = () => { 

    if(buton.classList.contains("pause")){
        buton.classList.remove("pause")
        video.play()

       
        //2.asama

        faEl.classList.add("fa-pause")
        faEl.classList.remove("fa-play")    


    }else{
        buton.classList.add("pause")
        video.pause()   


         
        //2.asama
        faEl.classList.remove("fa-pause")
        faEl.classList.add("fa-play")

    }
 }