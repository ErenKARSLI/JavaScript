const toggleButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', function() {
    menu.classList.toggle('open');
    toggleButton.classList.toggle('rotate'); // İkonu 90 derece döndürmek için sınıf ekleyin veya çıkarın
    if (toggleButton.classList.contains('rotate')) {
        toggleButton.style.transform = 'rotate(180deg)'; // 90 derece döndür
    } else {
        toggleButton.style.transform = 'rotate(90deg)'; // Dönüşümü sıfırla
    }
    if (menu.classList.contains('open')) {
        document.body.style.marginLeft = '200px'; // Menü açıkken içeri doğru kaydır
    } else {
        document.body.style.marginLeft = '0'; // Menü kapalıyken kaydırmayı sıfırla
    }
});
