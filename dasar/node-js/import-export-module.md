# Import Export Module

## Penjelasan Module

Module merupakan kumpulan perintah yang dibungkus kedalam satu paket yang bisa digunakan berulang kali pada file lain

## Export Module

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

## Import Module

Setelah mengeksport module, maka kita bisa menggunakannya di file lain dengan menggunakan perintah `require`

```javascript
// index.js

// import object mahasiswa dari mahasiswa.js
const mahasiswa = require('./mahasiswa.js')

console.log(mahasiswa.nama) // budi
console.log(mahasiswa.kelas) // TI 4B
console.log(mahasiswa.alamat) // malang
```
