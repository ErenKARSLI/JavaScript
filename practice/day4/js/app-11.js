//Girilen iki sayı arasındaki 4'e bölünüp 8'e bölünmeyen sayıların
// toplamını ve adedini mesaj
// olarak yazdırın

let sayi1El = document.querySelector("#sayi1");
let sayi2El = document.querySelector("#sayi2");
let mesajEl = document.querySelector("#msg");

document.getElementById("hesapla").addEventListener("click", () => {
  hesapla();
});

const hesapla = () => {
  let sayi1 = sayi1El.value;
  let sayi2 = sayi2El.value;

  let toplam = 0;
  let sayac = 0;

  if (sayi1 > sayi2) {
    let temp = sayi1;
    sayi1 = sayi2;
    sayi2 = temp;
  }


  for (let i = sayi1; i <= sayi2; i++) {
    if (i % 4 == 0 && i % 8 != 0) {
      toplam+=i;
      sayac++;

    }
  }

  mesajEl.innerHTML=`Sayilarin adedi: ${sayac}, toplami: ${toplam} `


};