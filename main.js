document.getElementById("btnHesapla").addEventListener("click", function () {

    let implant = Number(document.getElementById("implantCount").value);
    let whitening = document.getElementById("whitening").checked;

    let toplam = 0;

    toplam = implant * 8000;

    if (whitening) {
        toplam += 3000;
    }

    document.getElementById("sonuc").innerText =
        "Tahmini Tutar: " + toplam + " TL";
});
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;

    if (name === "" || email === "" || date === "") {
        document.getElementById("formResult").innerText =
            "Lütfen tüm alanları doldurun.";
    } else {
        document.getElementById("formResult").innerText =
            "Randevu talebiniz gönderildi.";
    }
});
const toggleBtn = document.getElementById("themeToggle");

// Sayfa açıldığında kontrol et
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});
