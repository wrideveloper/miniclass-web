# Middleware

![middleware](middleware.png)

## 1. Pengertian Middleware

Middleware merupakan fungsi - fungsi yang akan dijalankan sebelum suatu request mencapai endpoint tujuan

![middleware](middleware-detail.png)

Suatu middleware dapat melewatkan request ke middleware selanjutnya hingga akhirnya request tersebut mencapai endpoint, atau mengakhiri request dengan response nya sendiri

Middleware ini biasanya digunakan untuk melakukan autentikasi request, dimana hanya request yang sudah valid lah yang boleh menuju ke endpoint, selain itu maka request akan ditolak, selain autentikasi masih banyak middleware yang dapat digunakan misalnya parsing json dengan `express.json()`

## 2. Cara Menggunakan Middleware

Untuk menggunakan middleware, kita bisa menggunakan `app.use()` sebelum endpoint tujuan

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

Pada script diatas, kita meletakkan `app.use()` sebelum `app.get()`, sehingga apabila ada request dari client maka middleware kita akan dilewati terlebih dahulu sebelum sampai ke endpoint, perintah `next()` digunakan untuk melanjutkan request, apabila kita tidak menuliskan perintah `next()` maka request akan berhenti pada middleware tersebut.

## 3. Menggunakan Middleware Pada Endpoint Tertentu

Kita juga bisa menerapkan middleware hanya ketika client menuju ke suatu endpoint tertentu, caranya adalah dengan memasukkan url kedalam parameter pertama

```javascript
const app = express()

// middleware /produk
app.use('/produk', function(req, res, next) {
  console.log('middleware dilewati')
  next()
})

// endpoint tujuan
app.get('/', function(req, res) {
  res.send('endpoint tercapai')
})
```

Pada script diatas, kita menerapkan middleware hanya ketika client mengunjungi URL `/produk`, selain itu maka middleware yang kita buat tidak akan diterapkan
