let angkaBenar = Math.floor(Math.random() * 10 ) + 1;


function resetTebakan() {
    document.getElementById("inputTebak").value = "";
    document.getElementById("hasilTebak").textContent = "";
    angkaBenar = Math.floor(Math.random() * 10 ) + 1; // Reset angka benar
}
function tebakAngka() {
    const inputAngka = document.getElementById("inputTebak").value;
    const tebakan = parseInt(inputAngka);
    const hasil = document.getElementById("hasilTebak");

    if (tebakan === angkaBenar) {
        hasil.textContent = "Benar! Angka yang benar adalah " + angkaBenar + ".";
        return;
    }else if (tebakan < angkaBenar) {
        hasil.textContent = "terlalu Kecil!";
    }else if (tebakan > angkaBenar) {
        hasil.textContent = "terlalu Besar!";

    }else {
        hasil.textContent = "Masukkan angka yang valid!"; 
    }

}
