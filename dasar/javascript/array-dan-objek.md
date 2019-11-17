# Array dan Objek

## 1. Array

<img src="array.jpg" width="350" />

### 1.1 Penjelasan Array

Array merupakan variabel spesial yang dapat menyimpan banyak nilai sekaligus, bayangkan array adalah sebuah loker, loker dapat menyimpan banyak barang karena memiliki banyak pintu, masing - masing pintu memiliki nomor agar kita tidak bingung dimana kita menyimpan barang kita sebelumnya.

Sama seperti loker, array juga memiliki banyak index (pintu) dimana masing - masing index memiliki nomor index (nomor pintu), ketika ingin mengambil data dari sebuah array kita harus tau di index keberapa kita menyimpan data tersebut

### 1.2 Cara Membuat dan Menggunakan Array

```javascript
// cara membuat array
var kumpulan_buah = ['mangga', 'jeruk', 'apel', 'pisang']

// cara memanggil nilai dari array
console.log(kumpulan_buah[0]) // mangga
console.log(kumpulan_buah[1]) // jeruk

// cara mengubah nilai dari array
kumpulan_buah[0] = 'salak'

console.log(kumpulan_buah[0]) // salak
```

## 2. Objek

<img src="objek.jpg" width="350" />

### 2.1 Penjelasan Objek

**Pengertian objek** secara umum yaitu segala sesuatu yang ada di dunia ini yang dapat dilihat dan dideskripsikan, misalnya manusia, laptop, mobil, pesawat, dan lain lain.

Objek memiliki banyak properti didalamnya, misalnya kita ambil contoh objek laptop memiliki properti seperti merk, jenis processor, ukuran layar, jumlah RAM, warna, dan sebagainya.

### 2.2 Cara Membuat dan Menggunakan Objek

```javascript
// cara membuat objek
var laptop = {
  merk: 'acer',
  processor: 'intel',
  ukuran_layar: 14,
  jumlah_ram: 2,
  warna: 'hitam'
}

// cara memanggil nilai dari objek
console.log(laptop.merk) // acer
console.log(laptop['processor']) // intel

// cara mengubah nilai dari objek
laptop.merk = 'toshiba'
laptop['processor'] = 'amd'

console.log(laptop.merk) // toshiba
console.log(laptop['processor']) // amd
```
