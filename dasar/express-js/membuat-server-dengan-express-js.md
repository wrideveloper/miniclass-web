# Membuat Server dengan Express.js

Hal pertama yang akan kita pelajari yaitu membuat server sederhana dengan menggunakan express.js.

## 1. Instalasi Express.js

Sebelum menggunakan express, kita harus menginstallnya terlebih dahulu dengan menggunakan npm.

```bash
npm install express
```

## 2. Membuat Server

Berikut script untuk membuat web server dengan menggunakan express

```javascript
const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(3000, function() {
  console.log('Server listening')
})
```
