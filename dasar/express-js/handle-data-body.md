# Menerima Data dari Body

## 1. Permasalahan

Apabila kita akan mengirimkan data yang bersifat rahasia (seperti username dan password) ke server, akan sangat berbahaya apabila mengirimnya melalui URL, karena dapat dilihat oleh orang lain.

## 2. Solusi

Kita dapat mengirim data yang bersifat rahasia pada bagian body dari request dalam format json

## 2. Menerima Data dari Body

Untuk menerima data dari body dengan format json, kita harus menjalankan middleware `express.json()`. Setelah melakukannya, kita dapat mengakses data tersebut pada endpoint atau middleware selanjutnya menggunakan `req.body`

```javascript
const express = require('express')
const app = express()

// meletakkan data json ke req.body
app.use(express.json())

// validasi nama user
app.use(function(req, res, next) {
  // mengakses req.body
  if (req.body.user == 'budi') {
    console.log('validasi sukses')
    next()
  } else {
    res.send('access forbidden')
  }
})

// endpoint ini hanya akan dicapai apabila validasi middleware sukses
app.get('/', function(req, res) {
  res.send('selamat datang ' + req.body.user)
})
```
