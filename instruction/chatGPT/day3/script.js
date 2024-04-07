document.addEventListener("DOMContentLoaded", function() {
    const rooms = document.getElementById("rooms");
    const dateDiv = document.getElementById("date");
    const timeDiv = document.getElementById("time");

    // Saati güncelleyen fonksiyon
    function updateClock() {
        const now = new Date();
        const dateStr = now.toLocaleDateString("tr-TR");
        const timeStr = now.toLocaleTimeString("tr-TR");
        dateDiv.textContent = dateStr;
        timeDiv.textContent = timeStr;
    }

    // Saati her saniye güncelle
    setInterval(updateClock, 1000);

    // Otel odalarını oluştur
    for (let i = 1; i <= 42; i++) {
        const room = document.createElement("div");
        room.className = "room";
        room.id = i < 10 ? "0" + i : "" + i;
        room.textContent = room.id;
        rooms.appendChild(room);
    }


    // Yerel depolamadan verileri al
    for (let i = 1; i <= 42; i++) {
        const room = document.getElementById(i < 10 ? "0" + i : "" + i);
        const reserved = localStorage.getItem(room.id);
        if (reserved) {
            room.classList.add("reserved");
            const dates = JSON.parse(reserved);
            room.innerHTML = room.id + "<br>" + dates.checkIn + "<br>" + dates.checkOut;
        }
    }

    // Odalara tıklanınca
    rooms.addEventListener("click", function(event) {
        const clickedRoom = event.target;
        if (!clickedRoom.classList.contains("room")) {
            return;
        }

        const checkIn = prompt("Giriş Tarihi (GG.AA.YYYY):");
        const checkOut = prompt("Çıkış Tarihi (GG.AA.YYYY):");

        clickedRoom.classList.remove("reserved");
        clickedRoom.innerHTML = clickedRoom.id;
        localStorage.removeItem(clickedRoom.id);

        if (checkIn && checkOut) {
            clickedRoom.classList.add("reserved");
            clickedRoom.innerHTML = clickedRoom.id + "<br>" + checkIn + "<br>" + checkOut;
    // Tarih formatını kontrol et

    
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!dateRegex.test(checkIn) || !dateRegex.test(checkOut)) {
            alert("Tarih formatı yanlış. Lütfen GG.AA.YYYY formatında girin.");
            return;
        }

            // Yerel depolamaya veri ekle
            localStorage.setItem(clickedRoom.id, JSON.stringify({ checkIn, checkOut }));
        }
    });
});
