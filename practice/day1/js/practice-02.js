//ornek-1- diktortgenin alanini hesaplayan kodu yaziniz
/*  let uzunKenar=prompt("Lutfen uzun kenari giriniz");

let kisaKenar=prompt("Lutfen kisa kenari giriniz")

let alan=Number(uzunKenar*kisaKenar);

window.alert(`Diktortgenin alani ${alan}`)  */

/* 
let piSayisi=3.14;
console.log(typeof(piSayisi))


const str="Satranc oynamayi severim";
console.log(typeof(str))

let  a= null;
let  b= undefined;
console.log(Boolean(a))
console.log(Boolean(b)) */

/* let name1="Ali";
let name2="Oya";
let name3="Can";
let name4=null;
let name5="";
let name6=undefined;

console.log(name1 && name2 && name3) //can
console.log(name1 && name2 && name4&& name3 ) // null
console.log(name4 || name5||name2||name6) //oya
console.log(name4 || name5|| false|| name6)//undefined */

// == degeri kontrol eder
//=== degerle birlikte type ' da kontrol eder

/* let x= 40;

let y="30";

console.log(x=="40") //true

console.log(y===30) //false

console.log(y!==30) //true

console.log(x>y+10) //false

 */

//ornek
// verilen sayinin birler, onlar ve yuzler basamagindaki sayiyi bulup
//toplamini yazan js kodunu yaziniz

/* const sayi=254;



let birlerbas=sayi%10;
let onlarBas=Math.floor(sayi/10)%10 ;

let yuzlerBas=Math.floor(sayi/100);

let toplamSayi=birlerbas+onlarBas+yuzlerBas;


console.log(`${sayi}'sinin toplami: ${toplamSayi}`)


Math.floo() kusuratli sayiyi asagiya dogru tamamlar
Math.ceiling() kusuratli sayiyi yukariya dogru tamamlar


 */

let a= 5;
let b=--a;
let c=b++;

console.log(a,b,c);





