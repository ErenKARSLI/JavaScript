import { listem } from './data-25.js';

const butonlarEl = document.querySelector("#butonlar");
const yemekIcerikEl = document.querySelector("#yemekicerik");

window.addEventListener("DOMContentLoaded", () => {
    itemYerlestir(listem);
    butonlarFiltrele();
});

const itemYerlestir = (listeler) => {
    console.log(listeler);
    let icerikler = listeler.map((bilgi)=>{
        console.log(bilgi);
        return `
        <div class="cerceve"> 
            <img src=${bilgi.img} class="resim">
            <h4>${bilgi.title}</h4>
            <h4>${bilgi.price}</h4>
            <p>${bilgi.desc}</p>        
        </div>          
        `;
    });
    icerikler=icerikler.join("");
    console.log(icerikler);

    yemekIcerikEl.innerHTML=icerikler;

};

const butonlarFiltrele=()=>{
    let categories=[];
    categories.push("all");
    listem.forEach((item)=>{
        if(!categories.includes(item.category)){
            categories.push(item.category);
        }
    });
    console.log(categories);
};


