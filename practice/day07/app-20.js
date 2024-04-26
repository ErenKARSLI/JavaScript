const numLabelEl = document.getElementById("numLabel");
const numberEl = document.querySelector("#sayi");
const btnKaydetEl = document.querySelector("#btnKaydet");
const btnGenerateEl = document.querySelector("#btnGenerate");
const displayNumbersEl = document.querySelector("#displayNumbers");
const displayRandomNumbersEl = document.querySelector("#displayRandomNumbers");
const sonucEl = document.querySelector("#sonuc");

let userArray = [];
let randomArray = [];

btnKaydetEl.addEventListener("click", () => {
    if (numberEl.value >= 1 && numberEl.value < 100) {

        if (!userArray.includes(numberEl.value)) {
            userArray.push(numberEl.value);
            numberEl.value="";
            userArray.sort((a, b) => a - b);
            displayNumbersEl.innerHTML = userArray;
            if (userArray.length < 6) {
                numLabelEl.innerHTML = userArray.length + 1 + ". Sayıyı Giriniz";
            } else {
                btnKaydetEl.classList.add("d-none");
                btnGenerateEl.classList.add("inline-block");
                btnGenerateEl.classList.remove("d-none");
            }
        } else {
            alert("Lütfen aynı sayıları girmeyin");
        }
    } else {
        alert("Lütfen 1 ile 99 arasında bir sayı giriniz (1-99 dahil)");
    }
});

btnGenerateEl.addEventListener("click", () => {
    while (randomArray.length < 6) {
        const randomNumber = Math.floor(Math.random() * 99) + 1;
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }
    randomArray.sort((a, b) => (a - b))
    displayRandomNumbersEl.innerHTML = randomArray;

    const uniqueArray = [...new Set(randomArray.concat(userArray))];
    let tutanTahmin = 12 - uniqueArray.length;    

/*     
    let tutanTahmin1 = 0;
    for (let i = 0; i < randomArray.length; i++) {
        if (userArray.includes(randomArray[i])) {
            a++;
        }
    } 
*/

    if (tutanTahmin == 6) {
        sonucEl.innerText = "Tebrikler KAZANDINIZ 6 sayıyıda tahmin ettiniz";
    } else {
        sonucEl.innerText = `${tutanTahmin} sayıyı doğru tahmin ettiniz`;
    }
});