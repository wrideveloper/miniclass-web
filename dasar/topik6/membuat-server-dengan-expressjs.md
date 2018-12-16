# Membuat Server dengan Express JS

Hal pertama yang akan kita pelajari yaitu membuat server sederhana dengan menggunakan express JS.

Tentunya sebelum kita dapat menggunakan Express JS, kita harus menginstallnya terlebih dahulu, baru kita dapat membuat servernya.

## Instalasi Express JS

Sebelum menggunakan express, kita harus menginstallnya terlebih dahulu dengan menggunakan npm.

```bash
npm install express
```

## Membuat Server

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
