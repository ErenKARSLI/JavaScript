
const sayac = document.querySelector(".sayac");
const giris = document.querySelector("#giris");
const resetBtn = document.querySelector("#sil");
const mesaj = document.querySelector(".msj");

giris.addEventListener("input", () => {
    mesaj.innerHTML="";
    sayac.innerHTML = giris.value.length;
});

resetBtn.addEventListener("click", () => {
    sayac.innerHTML = "0";
    giris.value = "";
    giris.focus();
    setTimeout(() => {
        mesaj.innerHTML = "<u><b><i>Devam Et Dostum</i></b></u>"
    }, 3000);
});

giris.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        resetBtn.click();
    }
});

setTimeout(()=>{
    mesaj.innerHTML ="<u><b><i>Devam Et Dostum</i></b></u>"
},3000);

giris.focus();