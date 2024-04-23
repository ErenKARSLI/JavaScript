//Büyük sayının küçük sayıya bölümünden kalanlar toplamını,
// küçük sayı büyük sayıya
//yetişene kadar birer birer artırarak bulalım.

let sayi1El=document.getElementById("sayi1");
let sayi2El=document.getElementById("sayi2");
let mesaj=document.getElementById("msg");

const hesapla = () => { 

    let sayi1=sayi1El.value
    let sayi2=sayi2El.value

    if(sayi1>sayi2){

        let temp= sayi1;
        sayi1=sayi2;
        sayi2=temp;

    }

    let kalanlar=0;

    while(sayi2>sayi1){
        kalanlar+=(sayi2%sayi1)
        sayi1++;

    }

    mesaj.innerHTML= `Kalanlar toplami: ${kalanlar} `;

    sayi1El.value="";
    sayi2El.value="";






 }

 document.getElementById("mesaj").addEventListener("click",()=>{
    hesapla()
 })