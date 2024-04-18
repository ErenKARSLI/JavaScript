//Kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanalara
//%50 indirim, diğerlerine %10 indirim uygulayarak bunu mesajla gösterelim.


function hesapla() {

    let yas=document.querySelector("#yas").value;
    let fiyat=document.querySelector("#fiyat").value;

    let indirimliFiyat=0;

    /* 

    let indirimliFiyat= yas>=65 ? fiyat*0.5 :fiyat*0.90;

    document.querySelector("#mesaj").innerHTML= `urunun indirimli fiyati: ${indirimliFiyat}TL 'dir `

 */
//short circuit yontemiyle

yas>=65 && (indirimliFiyat=fiyat*0.5);
yas<65 && (indirimliFiyat=fiyat*0.9);
document.querySelector("#mesaj").innerHTML= `urunun indirimli fiyati: ${indirimliFiyat}TL 'dir `


    
}