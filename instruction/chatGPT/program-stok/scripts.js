function showContent(contentId) {
    // Tüm içerikleri gizle
    var contents = document.querySelectorAll('#right > div');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // İstenilen içeriği göster
    var content = document.getElementById(contentId);
    content.style.display = 'block';
}
