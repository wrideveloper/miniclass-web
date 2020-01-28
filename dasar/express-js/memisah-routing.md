# Memisah Routing

## 1. Penjelasan

Saat server yang kita kembangkan semakin kompleks. Maka bisa jadi pada `index.js` akan memiliki banyak routing. Hal ini akan membuat kita susah untuk membaca file tersebut. Sehingga kita harus memisah routing yang ada pada `index.js` ke file lain.

## 2. Memisahkan Routing ke File Lain

Berikut langkah - langkah untuk memisahkan routing ke file lain

### 2.1. Membuat File Untuk Routing

Karena kita akan membuat routing untuk biodata, maka disini kita akan membuat sebuah file bernama `biodataRouter.js` yang hanya berisi routing dari biodata

```javascript
// biodataRouter.js

const express = require('express')
const router = express.Router()

// Menampilkan semua biodata
router.get('/biodata', function(req, res) {})

// Menampilkan biodata berdasarkan ID
router.get('/biodata/:id', function(req, res) {})

// Menampilkan form tambah biodata
router.get('/biodata/create', function(req, res) {})

// Menambah biodata
router.post('/biodata', function(req, res) {})

// Menampilkan form ubah biodata berdasarkan ID
router.get('/biodata/:id/edit', function(req, res) {})

// Mengubah biodata berdasarkan ID
router.put('/biodata/:id', function(req, res) {})

// Menghapus biodata berdasarkan ID
router.delete('/biodata/:id', function(req, res) {})

module.exports = router
```

### 2.2. Menerapkan File Routing ke index.js

Setelah kita memisah routing ke file lain, maka kita perlu mengimport dan menggunakan routing tersebut ke `index.js` menggunakan middleware `app.use`

```javascript
// index.js

const express = require('express')
const app = express()

// import router biodata
const biodataRouter = require('./biodataRouter')

// menerapkan router biodata menggunakan middleware
app.use(biodataRouter)
app.listen(3000, function() {})
```
