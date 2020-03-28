# Middleware

![middleware](middleware.png)

## 1. Permasalahan
Pada Web Server yang sudah dibuat sebelumnya kita sudah dapat menginputkan index dan data yang akan dimanipulasi dari client.Namun server belum melakukan validasi apakah data yang dikirim client sudah lengkap atau belum.

Kita dapat memberikan ( if ) pada setiap rute untuk melakukan validasi, namun hal ini akan membuat source code kita banyak, karena akan ada source code untuk melakukan validasi input pada setiap rute.

## 2. Penjelasan Materi Sebagai Solusi
Middleware merupakan suatu fungsi yang dapat dijalankan sebelum request sampai ke rute tujuan(Endpoint).

![middleware](middleware-detail.png)

Dimana fungsi tersebut bisa dimanfaatkan untuk melakukan apapun. Misalnya autentikasi, logging, atau pada kasus yang kita butuhkan adalah validasi input dari client. Fungsi middleware dapat kita tulis sekali saja dan dapat diterapkan pada beberapa atau seluruh rute yang kita punya. Selain itu middleware juga dapat mengakhiri request dengan response nya sendiri.

## 3. Penjelasan Detail Materi
- Contoh Fungsi Middleware pada Express
```javascript
const app = express()

// contoh middleware
app.use(function(req, res, next) {
  console.log('middleware dilewati')
  next()
})

// endpoint tujuan setelah melewati middleware
app.get('/', function(req, res) {
  res.send('endpoint tercapai')
})
```
- Contoh Penerapan Middleware pada Express
    - Application Level Middleware
```javascript
   const express = requitre('express')
   const app = express()

   function validateInput(req, res, next) {
      // Logic for Validation
      next()
   }

  // Used as Application Level Middleware
  app.use(validateInput)

  app.get("/", function (req, res) {
    res.send("hello world")
  })

  app.get("/", function (req, res) {
    res.send("hello world 2")
  })
```
- Router Level Middleware
```javascript
   const express = requitre('express')
   const app = express()

   function validateInput(req, res, next) {
      // Logic for Validation
      next()
   }

  // Used as Router Level Middleware
  app.get("/", validateInput, function (req, res) {
    res.send("hello world")
  })

  app.get("/", function (req, res) {
    res.send("hello world 2")
  })
```

## 4. Contoh Kasus
Berikut contoh untuk menerapkan middleware validasi data pada web server yang sudah dibuat sebelumnya.

```javascript
const express = require('express')
const app = express()

//membuat array menyimpan data contact
const contacts = [
  {
    name: "amir",
    phone: "085482938471"
  },
  {
    name: "budi",
    phone: "086452738493"
  }
]

//membuat fungsi validasi 
function validateIndex(req, res, next) {
  if (req.query.index !== undefined && contacts[req.query.index] === undefined) {
    res.send({ success: false })
  } else {
    next()
  }
}

// menggunakan middleware validate index pada level aplikasi
app.use(validateIndex)

app.get("/contact", function (req, res) {
  res.send(contacts)
})

app.post("/contact", function (req, res) {
  contacts.push({ name: req.query.name, phone: req.query.phone })
  res.send({ success: true })
})

// middleware validate index bisa juga digunakan pada rute tertentu :
app.put("/contact", validateIndex, function (req, res) {
  contacts[req.query.index] = { name: req.query.name, phone: req.query.phone }
  res.send({ success: true })
})

// middleware validate index bisa juga digunakan pada rute tertentu :
app.delete("/contact", validateIndex, function (req, res) {
  contacts.splice(req.query.index, 1)
  res.send({ success: true })
})

app.listen(3000, function () {
  console.log("server running")
})
```