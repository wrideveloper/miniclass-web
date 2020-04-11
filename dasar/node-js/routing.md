# Routing

## 1. Permasalahan

Sebelumnya, kita sudah membuat http server yang dapat memberikan pesan ke client, namun pesan tersebut selalu sama. Seharusnya sebuah server dapat memberikan pesan yang berbeda berdasarkan URL yang diakses oleh client

## 2. Routing pada NodeJS

Untuk memberikan pesan yang berbeda, maka kita dapat memeriksa URL yang dikunjungi oleh client. NodeJS memiliki object yang bernama `req.url` yang berguna untuk memeriksa URL yang dikunjungi. Kemudian kita dapat memberikan pesan yang berbeda berdasarkan URL yang dikunjungi dari client.

## 3. Memulai Routing

### 3.1 Buat Server

Pastikan server telah ada dan siap untuk dirouting. Apabila belum, buat sebuah file dengan nama `index.js` yang akan menampung server kita

```javascript
// index.js
var http = require('http')

http
  .createServer(function (req, res) {
    res.write('Hello World')
    res.end()
  })
  .listen(8080)
```

Sebuah server sederhana sudah berhasil kita buat, cek server dengan cara buka browser dan ketikkan `localhost:8080`.

### 3.3 Cek URL dari Client

Tapi bagaimana dengan URLnya ? Kita bisa melihat URL yang diakses client dengan menggunakan `req.url`. Kita taruh `req.url` ini pada `console.log()` sehingga URL yang dikunjungi akan tampil pada terminal kita.

```javascript
// index.js
var http = require('http')

http
  .createServer(function (req, res) {
    console.log(' URL saat ini : ' + req.url)
    res.write('Hello World')
    res.end()
  })
  .listen(8080)
```

Save lalu jalankan server. Setiap client mengunjungi URL baru, maka akan tampil pada terminal

```bash
URL saat ini : /
```

### 3.3 Buat Routing

Setelah mengetahui URL dari server, sekarang kita akan membuat beberapa route agar server bisa memberi macam-macam `request` dan `response`.

```javascript
// index.js
var http = require('http')

http
  .createServer(function (req, res) {
    console.log(' URL saat ini : ' + req.url)
    if (req.url == '/') {
      res.write('Hello World')
    } else if (req.url == '/about') {
      res.write('Ini adalah route /about')
    } else {
      res.write('URL tidak ditemukan')
    }
    res.end()
  })
  .listen(8080)
```

Restart server dan kunjungi rute `/about` tadi lalu kembali ke rute `/`. Sekarang server kita sudah bisa memberi bermacam-macam response dengan mengakses rute yang berbeda.

```bash
URL saat ini : /about
URL saat ini : /
```

### 3.4 Mengirim Response Berupa Array of Object

Sebuah server sungguhan selalu mengirim `response` berupa Array of Object. Karena data yang dikirimkan tidak hanya satu kalimat saja, melainkan data - data berupa object yang memiliki `key` dan `value`. Contohnya seperti

```json
{
  "warna": "merah"
}
```

Data diatas menunjukkan bahwa `key` **warna** memiliki `value` **merah**.

Untuk membuat server kita mengirim data yang berbentuk Array of Object, kita buat dahulu variable untuk menampung datanya. Kita buat sebuah variable dengan nama `contacts`

```javascript
const contacts = [
  { name: 'Budi', phone: 081234567654 },
  { name: 'Imam', phone: 087898654123 },
  { name: 'Siti', phone: 089543178987 },
]
```

Setelah data disiapkan, kita akan mengirim data ini sebagai response untuk client. Tapi sebelumnya, kita harus merubah data Array of Object tadi menjadi sebuah String. Untuk itu kita akan menggunakan `JSON.stringify()` agar Array of Object tadi berubah menjadi String

```javascript
// index.js
var http = require('http')

const contacts = [
  { name: 'Budi', phone: 081234567654 },
  { name: 'Imam', phone: 087898654123 },
  { name: 'Siti', phone: 089543178987 },
]

http
  .createServer(function (req, res) {
    console.log(' URL saat ini : ' + req.url)
    if (req.url == '/') {
      res.write('Hello World')
    } else if (req.url == '/about') {
      res.write('Ini adalah route /about')
    } else if (req.url == '/contact') {
      res.write(JSON.stringify(contacts))
    } else {
      res.write('URL tidak ditemukan')
    }
    res.end()
  })
  .listen(8080)
```

Simpan dan Restart server, lalu kunjungi rute `/contact` yang baru dibuat. Data dari variabel `contacts` dapat kita lihat pada rute ini.
