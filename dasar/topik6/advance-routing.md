# Advance Routing pada Express JS

Setelah mempelajari tentang dasar-dasar routing pada express js, selanjutnya akan dibahas mengenai advance routing. Apa sebenarnya advance routing dan bagaimana penggunaanya? Berikut penjelasannya.

## Penjelasan Advance Routing

Advance routing adalah suatu teknik routing untuk memecah rute berdasarkan fitur - fitur aplikasi

## Mengapa Rute Perlu Dipisah

Ketika aplikasi yang dibuat sudah dalam skala besar dan kompleks, perlu dibuat struktur aplikasi yang bagus untuk memudahkan dalam pengembangan aplikasi tersebut. Advance routing ini memilah - milah setiap rute berdasarkan fiturnya, sehingga semua rute tidak dijadikan dalam satu file. Bayangkan saja jika semua rute dituliskan pada satu file saja, pasti akan membingungkan dalam hal pengembangan aplikasi bahkan mungkin aplikasi tidak berjalan dengan efisien. Oleh karena itu, penting untuk menggunakan teknik advance routing ini.

## Cara Mengimplementasikan Advance Routing

### 1. Membuat File index.js

File ini merupakan kondisi awal sebelum kita memisah rute kedalam file yang lain

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/produk', function(req, res) {
  res.send('tampilkan produk')
})

app.post('/produk', function(req, res) {
  res.send('tambah produk')
})

app.put('/produk', function(req, res) {
  res.send('edit produk')
})

app.delete('/produk', function(req, res) {
  res.send('hapus produk')
})

app.listen(port, function() {
  console.log('Server listening')
})
```

### 2. Buatlah file router.js yang berisi rute dari aplikasi saja

File ini hanya berisi rute dari web yang akan dibuat

```javascript
const express = require('express')
const router = express.Router()

router.get('/produk', function(req, res) {
  res.send('tampilkan produk')
})

router.post('/produk', function(req, res) {
  res.send('tambah produk')
})

router.put('/produk', function(req, res) {
  res.send('edit produk')
})

router.delete('/produk', function(req, res) {
  res.send('hapus produk')
})

module.exports = router
```

### 3. Menerapkan Rute ke File index.js

Karena rute sudah ditulis pada file router.js, maka kita tidak perlu lagi menuliskannya pada file index.js, kita hanya perlu memberitahu index.js untuk menggunakan rute yang sudah ditulis pada router.js

```javascript
const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.use(router())

app.listen(port, function() {
  console.log('Server listening')
})
```
