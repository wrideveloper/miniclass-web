# Metode Autentikasi JSON Web Token

![](metode-autentikasi-token.jpg)

## 1. Penjelasan Autentikasi Token

Autentikasi token merupakan jenis autentikasi yang sering digunakan pada webservice, cara kerjanya yaitu server menyimpan sebuah token berupa random string yang dipasangkan pada satu akun.

Setelah client melakukan login dengan akun tertentu maka server akan memberikan token dari akun tersebut yang nantinya akan disimpan oleh client

Kemudian setiap kali client mengirimkan request maka token tersebut perlu disertakan sebagai penanda bahwa client tersebut sudah terautentikasi

## 2. Penjelasan JSON Web Token

JSON Web Token atau disingkat JWT merupakan pengembangan dari metode autentikasi token, dimana server tidak perlu lagi menyimpan token di database

Token yang diberikan ke client bukan lagi berupa random string, namun berupa data user yang sudah login dan dienkripsi menjadi string

## 3. Langkah - langkah Autentikasi dengan JSON Web Token

1.  Client melakukan login
2.  Apabila username dan password benar, maka server akan memberikan data dari akun tersebut kedalam sebuah token dan memberikannya ke client
3.  Setelah client menerima token maka token tersebut harus selalu dikirim setiap kali client melakukan request ke server
4.  Server akan mengecek token, apabila token valid maka request dari client akan diterima, jika tidak valid maka request akan ditolak

## 4. Implementasi JWT Menggunakan Express

Disini kita akan belajar bagaimana menerapkan jwt pada web service menggunakan express

### 4.1. Menginstall Dependency

Untuk mengimplementasikan json web token kita membutuhkan package yang bernama `jsonwebtoken`

```bash
npm install express jsonwebtoken
```

### 4.2. Membuat Server dan Route

Pada tutorial ini kita hanya membutuhkan dua rute, yaitu `/login` untuk mengautentikasi client, dan `/` untuk mengirimkan data user apabila client telah melakukan login

```javascript
// index.js

const express = require("express")
const app = express()

// parsing json request
app.use(express.json())

// authenticate client
app.post("/login", function(req, res) {})

// send user data when client already authenticate
app.get("/", function(req, res) {
  res.json(req.user)
})

app.listen(3000)
```

### 4.3. Mengautentikasi Client

Untuk melakukan autentikasi, pertama kita memeriksa username dan password yang dikirimkan oleh client, apabila benar maka kita akan membuat token menggunakan `jwt.sign()` dengan menyertakan data dari akun yang bersangkutan dan memberikan token tersebut ke client

```javascript
// index.js

// import jwt
const jwt = require("jsonwebtoken")

// authenticate client
app.post("/login", function(req, res) {
  const { username, password } = req.body
  if (username === "admin" && password === "admin") {
    jwt.sign({ username: "admin" }, "secret", function(err, token) {
      res.send({ success: true, token })
    })
  } else {
    res.send({ success: false })
  }
})
```

### 4.4. Memeriksa Apakah Token Valid

Sekarang kita akan membuat middleware yang bernama `verifyToken` yang akan memeriksa token yang dikirimkan oleh client menggunakan `jwt.verify`, apabila valid maka server akan mengubah token tersebut menjadi data user dan memasukkannya sebagai properti ke objek `req`

```javascript
// verifyToken.js

const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"]
  const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined
  if (token) {
    jwt.verify(token, "randomStuff", function(err, payload) {
      if (err) throw err
      req.user = payload
      next()
    })
  } else {
    res.sendStatus(403)
  }
}

module.exports = verifyToken
```

### 4.5. Menerapkan Middleware ke Route

Setelah middleware `verifyToken` dibuat, kita tinggal menerapkannya ke route `/`

```javascript
// index.js

const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

// import middleware verifyToken
const verifyToken = require("./verifyToken")

app.use(express.json())

app.post("/login", (req, res) => {
  const { username, password } = req.body
  if (username === "admin" && password === "admin") {
    jwt.sign({ username: "admin" }, "randomStuff", function(err, token) {
      res.send({ success: true, token })
    })
  } else {
    res.send({ success: false })
  }
})

// implement middleware verifyToken
app.get("/", verifyToken, (req, res) => {
  res.json(req.user)
})

app.listen(3000)
```

## 5. Source Code

Berikut link menuju source code dari tutorial diatas :

https://github.com/wrideveloper/express-auth-jwt
