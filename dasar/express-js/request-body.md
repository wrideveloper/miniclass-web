# Request Body

<img src="request-body.png" width="250">

## Penjelasan Request Body

Request body merupakan data yang dikirimkan oleh client ke server melalui http body

Berbeda dengan URL query maupun URL params, data yang dikirimkan tidak terlihat di URL karena dikirim melalui http body, cocok apabila kita ingin mengirimkan data sensitif seperti username atau password

Cara paling mudah untuk membuat request body dari client yaitu dengan menggunakan tag `<form/>` pada html

```html
<form method="POST" action="http://wri.polinema.ac.id">
  <input type="text" name="username" />
  <input type="password" name="password" />
</form>
```

`form` digunakan sebagai pembuka dan penutup form  
`method` menentukan http method yang akan digunakan  
`action` menentukan tujuan dari pengiriman data  
`input` menentukan inputan apa saja yang akan dikirim

Selegkapnya tentang html form :
https://www.w3schools.com/html/html_forms.asp

## Jenis Encoding

Berikut beberapa encoding yang dapat digunakan untuk mengirimkan request body

### 1. Plain Text

Seperti namanya, sebenarnya disini kita tidak menggunakan encoding sama sekali dan mengirimkan data secara raw, biasanya digunakan untuk mengirimkan data berupa `JSON`, untuk penerapannya kita bisa menggunakan `text/plain` pada `enctype`

```html
<form method="POST" action="http://wri.polinema.ac.id" enctype="text/plain">
  <input type="text" name="username" />
  <input type="password" name="password" />
</form>
```

### 2. URL Encoded

Encoding ini merupakan encoding default yang digunakan pada form html, digunakan untuk mengirimkan data yang sederhana seperti text, untuk penerapannya kita bisa menggunakan `application/x-www-form-urlencoded` pada `enctype`

```html
<form
  method="POST"
  action="http://wri.polinema.ac.id"
  enctype="application/x-www-form-urlencoded"
>
  <input type="text" name="username" />
  <input type="password" name="password" />
</form>
```

### 3. Multipart

Multipart merupakan encoding yang digunakan apabila kita ingin mengirimkan data berupa text atau file, untuk penerapannya kita bisa menggunakan `multipart/form-data` pada `enctype`

```html
<form
  method="POST"
  action="http://wri.polinema.ac.id"
  enctype="multipart/form-data"
>
  <input type="file" name="photo" /> <input type="text" name="username" />
  <input type="password" name="password" />
</form>
```

## Parsing Request Body

### Parsing Text Berupa JSON

Data yang dikirimkan melalui encoding text biasanya berformat JSON, kita bisa menggunakan middleware `express.json()` untuk membaca data berupa JSON

```javascript
const express = require("express")
const app = express()

// parsing json
app.use(express.json())

app.post("/", function(req, res) {
  const data = req.body // berisi json yang dikirimkan client
  res.send(data)
})
```

### Parsing URL Encoded

Untuk membaca data yang dikirimkan dengan encoding URL Encoded maka kita bisa menggunakan middleware `express.urlencoded()`

```javascript
const express = require("express")
const app = express()

// parsing data url encoded
app.use(express.urlencoded())

app.post("/", function(req, res) {
  const data = req.body // berisi data url encoded
  res.send(data)
})
```

### Parsing Multipart

Untuk membaca data yang dikirimkan dengan encoding multipart, kita perlu menginstall package middleware bernama `multer`

```bash
npm install --save multer
```

Setelah berhasil diinstall kita bisa menggunakan middleware multer ini seperti berikut

```javascript
var express = require("express")
var multer = require("multer")
var upload = multer({ dest: "uploads/" })

var app = express()

app.post("/profile", upload.single("avatar"), function(req, res, next) {
  // req.file berisi file avatar
  // req.body will hold the text fields, if there were any
})
```

Pada contoh diatas diasumsikan input file pada form html bernama avatar
