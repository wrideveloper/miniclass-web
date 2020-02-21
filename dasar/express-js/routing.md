# Menghandle URL

## 1. Penjelasan

Secara umum, server akan mengirimkan response yang berbeda berdasarkan URL dan method yang digunakan. Hal ini disebut routing

## 2. Melakukan routing pada Express.js

Berikut contoh penerapan routing menggunakan express.js

```javascript
// index.js

const express = require('express')
const app = express()

// dijalankan apabila urlnya / dan methodnya GET
app.get('/', function(req, res) {})

// dijalankan apabila urlnya /contacts dan methodnya GET
app.get('/contacts', function(req, res) {})

// dijalankan apabila urlnya /contacts dan methodnya POST
app.post('/contacts', function(req, res) {})

// dijalankan apabila urlnya /contacts dan methodnya PUT
app.put('/contacts', function(req, res) {})

// dijalankan apabila urlnya /contacts dan methodnya DELETE
app.delete('/contacts', function(req, res) {})

app.listen(3000, function() {
  console.log('server started')
})
```
