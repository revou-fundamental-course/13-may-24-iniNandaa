function hitungLuas() {
    // Ambil nilai dari input
    let alas = document.getElementById('a').value;
    let tinggi = document.getElementById('t').value;

    // Hitung luas segitiga
    let luas = 0.5 * alas * tinggi;
    // Tampilkan hasil perhitungan
    document.getElementById('hasilluas').innerText = "Luas segitiga adalah: " + luas;
}
function hitungKeliling() {
    // Ambil nilai dari input
    let sisi1 = parseFloat(document.getElementById('s1').value);
    let sisi2 = parseFloat(document.getElementById('s2').value);
    let sisi3 = parseFloat(document.getElementById('s3').value);
    
    //Hitung luas segitiga
    let keliling = sisi1+sisi2+sisi3;
    //tampilkan hasil Perhitungan
    document.getElementById('hasilkeliling').innerText = "Keliling segitiga adalah: " + keliling;
}