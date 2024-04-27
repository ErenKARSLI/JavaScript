const menumuzEl = document.querySelector(".menumuz");
/* console.log(menumuzEl);
console.log(menumuzEl.innerHTML);
console.log(menumuzEl.innerText); */

const yemeklerimizEl = document.querySelectorAll(".yemeklerimiz");
/* console.log(yemeklerimizEl);
console.log(yemeklerimizEl[0].innerHTML); */

menumuzEl.addEventListener("click",(e)=>{
    /* console.log(e.target.classList); */
    if(e.target.classList.contains("urun")){

        menumuzEl.querySelector(".text-danger").classList.remove("text-danger");
        e.target.classList.add("text-danger");

        const listelenen = e.target.getAttribute("data-menulerim");
    /*  console.log(listelenen); */
        yemeklerimizEl.forEach((item)=>{
            /* console.log(item); */
            if (listelenen == "hepsi" || item.classList.contains(listelenen)){
                item.classList.remove("d-none");
            }else{
                item.classList.add("d-none");                
            }
        });
    }
});