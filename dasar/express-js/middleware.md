# Middleware

![middleware](middleware.png)

## 1. Permasalahan

Biasanya, sebelum request dari client sampai ke tujuan. Perlu dilakukan sesuatu terhadap request tersebut. Misalnya autentikasi, sehingga hanya request yang sudah tervalidasi yang dapat dilanjutkan ke tujuan

## 2. Penjelasan Middleware

Middleware merupakan fungsi yang dijalankan sebelum suatu request mencapai endpoint tujuan

![middleware](middleware-detail.png)

Suatu middleware dapat melanjutkan request ke middleware selanjutnya hingga mencapai tujuan. Selain itu middleware juga dapat mengakhiri request dengan response nya sendiri

## 3. Cara Membuat Middleware pada Express.js

Untuk membuat middleware, kita dapat menggunakan perintah `app.use`, dimana perintah tersebut harus diletakaan sebelum `app.get` yang menjadi tujuan akhir. Untuk melanjutkan request, kita harus menjalankan fungsi `next()`

```javascript
const app = express()

// contoh middleware
app.use(function(req, res, next) {
  console.log('middleware dilewati')
  next()
})

// endpoint tujuan
app.get('/', function(req, res) {
  res.send('endpoint tercapai')
})
```

## 4. Contoh Middleware untuk Autentikasi

Untuk membuat middleware, kita dapat menggunakan perintah `app.use`, dimana perintah tersebut harus diletakaan sebelum `app.get` yang menjadi tujuan akhir. Untuk melanjutkan request, kita harus menjalankan fungsi `next()`

```javascript
const app = express()

// validasi nama user
app.use(function(req, res, next) {
  if (req.query.user == 'budi') {
    console.log('validasi sukses')
    next()
  } else {
    res.send('access forbidden')
  }
})

// endpoint ini hanya akan dicapai apabila validasi middleware sukses
app.get('/', function(req, res) {
  res.send('selamat datang ' + req.query.user)
})
```
