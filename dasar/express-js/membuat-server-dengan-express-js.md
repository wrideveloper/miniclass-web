# Membuat Server dengan Express.js

Hal pertama yang akan kita pelajari yaitu membuat server sederhana dengan menggunakan express.js.

Tentunya sebelum kita dapat menggunakan Express.js, kita harus menginstallnya terlebih dahulu, baru kita dapat membuat servernya.

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
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log('Server listening')
})
```
