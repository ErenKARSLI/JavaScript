
const notlar = [
    "Yataktan kalk",
    "Elini yüzünü yıka",
    "Kalvaltı hazırla",
    "Ailecek kahvaltı yap"
];

const eklenecekYazi = document.querySelector("#yeni");
const listeBtn = document.getElementById("ekle");
const silBtn = document.getElementById("sil");
const metinEl = document.getElementById("metin");
const listelerim = document.getElementById("liste");

listeBtn.addEventListener("click", () => {
    if (!eklenecekYazi.value) {
        eklenecekYazi.focus();
        return;
    }
    notlar.push(eklenecekYazi.value);
    /*  console.log(notlar); */
    listele();
});

const listele = () => {
    listelerim.innerHTML = "";
    metinEl.innerText = "";

    notlar.forEach((item) => {
        listelerim.innerHTML +=  `<li>${item}</li> `;        
    });
    metinEl.innerText=notlar.join(", ");
    eklenecekYazi.value="";
    eklenecekYazi.focus();;
};
silBtn.addEventListener("click",()=>{
    if(notlar==0){
        alert("Dizi boş uğraşma");
        return;
    }
    notlar.pop();
    eklenecekYazi.value="";
    listele();
});

eklenecekYazi.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        listeBtn.click();
    }
});

listele();