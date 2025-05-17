let hasilPerhitungan = document.getElementById("form");

function tambahAngka(nilai) {
    hasilPerhitungan.value  += nilai;
}

function hapus() {
    hasilPerhitungan.value = "";
}


function hitung() {
    try {
        // Ganti semua persen jadi /100
        let ekspresi = hasilPerhitungan.value.replace(/(\d+)%/g, '($1/100)');

        // Hitung hasilnya
        hasilPerhitungan.value = eval(ekspresi);
    } catch (error) {
        alert("Input tidak valid");
        hapus(); // asumsi kamu punya fungsi hapus()
    }
}


function hapusSatu() {
    hasilPerhitungan.value = hasilPerhitungan.value.slice(0, -1);
}