# Metode Autentikasi Session

![](metode-autentikasi-session.jpg)

## 1. Penjelasan Session

**Session** adalah waktu yang dihabiskan oleh user saat sedang membuka sebuah website. Session ini disimpan di sebuah cookie, tepatnya session cookie, cookie sendiri merupakan file yang disimpan oleh web browser yang berisi data - data dari client.

## 2. Autentikasi dengan Session

HTTP adalah **_stateless_**, **_stateless_** disini berarti HTTP tidak dapat menyimpan informasi dari client, sehingga server tidak dapat mengenali clientnya walaupun sudah login sekalipun.

**Solusi** : Menggunakan autentikasi dengan session, dimana session ini akan membuat session id yang kemudian disimpan ke cookies client, sehingga kali ini server akan mengenali clientnya dengan cara mencocokan session id yang ada di cookies client

## 3. Langkah - langkah Autentikasi dengan Session

1.  User melakukan login.
2.  Server mengecek informasi login user, jika benar, maka server akan membuatkan session id ke cookies client.
3.  Cookies yang telah disimpan tadi akan digunakan setiap kali client melakukan request.
4.  Server menerima request dan menggunakan cookies tadi untuk mengetahui session id dari client, sehingga server dapat mengenali client tersebut.
5.  Ketika client melakukan logout, maka session id yang ada di cookie akan dihapus. (cookies juga dapat di set waktu expiresnya, sehingga apabila client lupa logout, session akan lenyap dengan sendirinya)

## 4. Menerapkan Session Pada Express

### 4.1. Menginstall Dependency

Untuk menerapkan autentikasi session pada express, kita membutuhkan `express` dan `express-session` untuk mengelola session pada express

```bash
npm install express express-session
```

### 4.2. Membuat Server dan Route

Pertama kita akan membuat server dan route - route yang akan kita gunakan

```javascript
// index.js

const express = require("express")
const app = express()

// parsing url encoded request
app.use(express.urlencoded({ extended: true }))

// show form login
app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/views/login.html")
})

// authenticate user
app.post("/login", function(req, res) {})

// logout the user
app.get("/logout", function(req, res) {})

// show home page when user already authenticated
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/home.html")
})

// starting server
app.listen(3000)
```

Disini kita memiliki dua view, yaitu `login.html` untuk halaman form login, dan `home.html` untuk halaman awal setelah client melakukan login

### 4.3. Membuat Session

Setelah membuat server dan route yang akan digunakan, selanjutnya kita akan membuat middleware session yang akan mengirimkan session id ke cookies client

```javascript
// index.js

const express = require("express")
const app = express()

// import session package
const session = require("express-session")

app.use(express.urlencoded({ extended: true }))

// parsing session
app.use(
  session({
    secret: "auth-session",
    saveUninitialized: false,
    resave: false
  })
)

app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/views/login.html")
})

app.post("/login", function(req, res) {})

app.get("/logout", function(req, res) {})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/home.html")
})

app.listen(3000)
```

### 4.4. Mengautentikasi Client

Setelah mengkonfigurasi session, langkah selanjutnya kita harus mengautentikasi client dengan mengecek apakah username dan password yang dikirimkan sudah benar, jika benar maka kita akan menambahkan properti user ke session yang berisi informasi user yang sedang login

```javascript
// index.js

// receive login post and authenticate user
app.post("/login", function(req, res) {
  const { username, password } = req.body
  if (username === "admin" && password === "admin") {
    // add user property to session object
    req.session.user = { username: "admin" }
    res.redirect("/")
  } else {
    res.redirect("/login")
  }
})
```

Pada tutorial ini kita menggunakan data dummy dengan username `admin` dan password `admin`, untuk implementasi yang sesungguhnya kita bisa mengambil username dan password dari database

### 4.5. Melindungi Route

Sekarang kita akan membuat middleware untuk mencegah user yang belum login untuk masuk ke halaman home, serta mencegah user yang sudah login untuk masuk ke halaman login lagi

**Mencegah user yang belum login ke halaman home**

Kita hanya tinggal memeriksa apakah objek session memiliki properti user, jika tidak maka client tersebut belum login dan akan diredirect ke halaman login

```javascript
// middlewares/authenticate.js

// redirect to login form when user not authenticated
function authenticate(req, res, next) {
  if (!req.session.user) res.redirect("/login")
  else next()
}

module.exports = authenticate
```

**Mencegah user yang sudah login ke halaman login lagi**

Middleware ini merupakan kebalikan dari middleware `authenticate`, dimana apabila objek session memiliki properti user maka bisa dipastikan bahwa client sudah login dan akan diredirect ke halaman home

```javascript
// middlewares/redirectIfAuthenticated.js

// redirect user to home page if already authenticated
function redirectIfAuthenticated(req, res, next) {
  if (req.session.user) res.redirect("/")
  else next()
}

module.exports = redirectIfAuthenticated
```

**Menerapkan Middleware ke Route**

Selanjutnya kita hanya perlu menerapkan kedua middleware tersebut ke route yang ada pada `index.js`

```javascript
const express = require("express")
const session = require("express-session")
const app = express()

// import middlewares
const authenticate = require("./middlewares/authenticate")
const redirectIfAuthenticated = require("./middlewares/redirectIfAuthenticated")

app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: "auth-session",
    saveUninitialized: false,
    resave: false
  })
)

// implement middlewares redirectIfAuthenticated
app.get("/login", redirectIfAuthenticated, function(req, res) {
  res.sendFile(__dirname + "/views/login.html")
})

// implement middlewares redirectIfAuthenticated
app.post("/login", redirectIfAuthenticated, function(req, res) {
  const { username, password } = req.body
  if (username === "admin" && password === "admin") {
    req.session.user = { username: "admin" }
    res.redirect("/")
  } else {
    res.redirect("/login")
  }
})

app.get("/logout", function(req, res) {})

// menerapkan middleware authenticate
app.get("/", authenticate, function(req, res) {
  res.sendFile(__dirname + "/views/home.html")
})

app.listen(3000)
```

### 4.6. Melakukan Logout

Untuk melakukan logout, kita hanya perlu mengeset properti user dari objek session menjadi `undefined`

```javascript
// index.js

// logout the user
app.get("/logout", function(req, res) {
  // set user property to undefined
  req.session.user = undefined
  res.redirect("/login")
})
```

## 5. Source Code

Silahkan kunjungi link berikut untuk melihat full source code dari tutorial diatas

https://github.com/wrideveloper/express-auth-session
