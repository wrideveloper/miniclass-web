# Import Export

## 1. Penjelasan

Untuk membangun aplikasi yang baik, kita tidak boleh menulis perintah dalam satu file saja. Kita harus membagi perintah ke dalam beberapa file sesuai kebutuhan. Sehingga dapat mempermudah debugging. Node.js dapat mengeksport variabel dan fungsi pada suatu file dan mengimport nya ke file lain.

## 2. Cara Export Module

Kita bisa mengeksport variabel, fungsi, object, dan sebagainya agar bisa digunakan pada file lain, untuk melakukan hal ini kita bisa menggunakan perintah `module.exports`

```javascript
// mahasiswa.js

// contoh object yang akan dieksport
const mahasiswa = {
  nama: 'budi',
  kelas: 'TI-4B',
  alamat: 'malang'
}

// mengeksport object mahasiswa
module.exports = mahasiswa
```

## 3. Cara Import Module

Setelah mengeksport module, maka kita bisa menggunakannya di file lain dengan menggunakan perintah `require`

```javascript
// index.js

// import object mahasiswa dari mahasiswa.js
const mahasiswa = require('./mahasiswa.js')

console.log(mahasiswa.nama) // budi
console.log(mahasiswa.kelas) // TI 4B
console.log(mahasiswa.alamat) // malang
```
