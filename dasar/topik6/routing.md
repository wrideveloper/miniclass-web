# Routing pada Express JS

![Routes](routes.png)

## Penjelasan Routing

Dalam dunia pengembangan web, routing merupakan pemetaan URL - URL yang dapat diakses oleh client menggunakan method tertentu seperti `GET`, `POST`, `PUT`, `DELETE`

## Melakukan Routing

```Javascript
// index.js

const express = require("express")
const app = express()

// GET biasa digunakan untuk menampilkan data
app.get('/', function (req, res) {
  	res.send('Get Method')
})

// POST biasa digunakan untuk menambah data
app.post('/', function (req, res) {
  	res.send('POST Method')
})

// PUT biasa digunakan untuk merubah data
app.put('/', function (req, res) {
  res.send('Put Method')
})

// DELETE biasa digunakan untuk menghapus data
app.delete('/', function (req, res) {
  res.send('Delete Method')
})

app.listen(3000, function () {})
```

## Memisahkan Routing ke File Lain

Selama ini kita selalu meletakkan routing pada satu file saja, yaitu pada `index.js` hal ini tidak baik karena semakin fitur dari aplikasi bertambah maka `index.js` akan semakin penuh dengan baris kode, berikut langkah - langkah untuk memisahkan routing ke file lain

### 1. Kondisi Awal index.js

```javascript
// index.js

const express = require("express")
const app = express()

// route user
app.get("/user", function(req, res) {
  console.log("get user")
})
app.post("/user", function(req, res) {
  console.log("add user")
})
app.put("/user", function(req, res) {
  console.log("edit user")
})
app.delete("/user", function(req, res) {
  console.log("delete user")
})

// route product
app.get("/product", function(req, res) {
  console.log("get product")
})
app.post("/product", function(req, res) {
  console.log("add product")
})
app.put("/product", function(req, res) {
  console.log("edit product")
})
app.delete("/product", function(req, res) {
  console.log("delete product")
})

// run server
app.listen(3000, function() {})
```

Disini kita memiliki dua jenis routing, yaitu routing untuk data user, dan routing untuk data produk

### 2. Buat File Untuk Routing

Karena kita memiliki dua jenis routing, yaitu user dan produk, maka disini kita perlu membuat dua file routing yaitu `userRouter.js` yang menentukan routing untuk user, dan `productRouter.js` yang menentukan routing untuk produk

```javascript
// userRouter.js

const express = require("express")
const router = express.Router()

router.get("/user", function(req, res) {
  console.log("get user")
})
router.post("/user", function(req, res) {
  console.log("add user")
})
router.put("/user", function(req, res) {
  console.log("edit user")
})
router.delete("/user", function(req, res) {
  console.log("delete user")
})

module.exports = router
```

```javascript
// productRouter.js

const express = require("express")
const router = express.Router()

router.get("/product", function(req, res) {
  console.log("get product")
})
router.post("/product", function(req, res) {
  console.log("add product")
})
router.put("/product", function(req, res) {
  console.log("edit product")
})
router.delete("/product", function(req, res) {
  console.log("delete product")
})

module.exports = router
```

### 3. Menerapkan File Routing ke index.js

Setelah kita memisah routing ke file lain, maka kita perlu mengimport dan menggunakan routing yang ada pada file lain tersebut menggunakan `app.use`

```javascript
// index.js

const express = require("express")
const app = express()
const userRouter = require("./userRouter")
const productRouter = require("./productRouter")

app.use(userRouter)
app.use(productRouter)

app.listen(3000, function() {})
```

## Contoh Penerapan

Berikut contoh penerapan routing dengan membuat aplikasi CRUD dengan express dan mysql

https://github.com/wrideveloper/express-mysql-crud
