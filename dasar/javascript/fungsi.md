# Fungsi

## 1. Penjelasan Fungsi

Fungsi merupakan kumpulan perintah yang digabung menjadi satu dan bisa dipanggil bersamaan

## 2. Cara Menggunakan Fungsi

### 2.1 Fungsi Sederhana

Berikut contoh pembuatan fungsi sederhana bernama `hitungLuasPersegiPanjang`. Setelah fungsi tersebut dibuat, maka bisa dijalankan berkali - kali

```javascript
// index.js

// membuat fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
  var panjang = 5
  var lebar = 6
  var luas = panjang * lebar
  console.log(luas)
}

// menjalankan fungsi
hitungLuasPersegiPanjang() // output : 30
```

### 2.2 Fungsi dengan Parameter

Agar kita dapat mengubah nilai dari `panjang` dan `lebar` pada fungsi `hitungLuasPersegiPanjang`, maka kita dapat menggunakan parameter

```javascript
// index.js

// membuat fungsi dengan parameter panjang dan lebar
function hitungLuasPersegiPanjang(panjang, lebar) {
  var luas = panjang * lebar
  console.log(luas)
}

// menjalankan fungsi dengan memasukkan nilai parameter
hitungLuasPersegiPanjang(5, 6) // output : 30
hitungLuasPersegiPanjang(2, 4) // output : 8
hitungLuasPersegiPanjang(3, 5) // output : 15
```

### 2.3 Fungsi yang Mengembalikan Nilai

Agar nilai dari perhitungan luas persegi panjang dapat diolah kembali, kita dapat mengembalikan nilai dari fungsi `hitungLuasPersegiPanjang` menggunakan perintah `return`

```javascript
// index.js

// membuat fungsi yang mengembalikan nilai dari luas
function hitungLuasPersegiPanjang(panjang, lebar) {
  var luas = panjang * lebar
  return luas
}

var hasil = hitungLuasPersegiPanjang(5, 6) + 20
console.log(hasil) // output : 50
```
