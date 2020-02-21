# Routing

## 1. Permasalahan

Sebelumnya, kita sudah membuat http server yang dapat memberikan pesan ke client, namun pesan tersebut selalu sama. Seharusnya sebuah server dapat memberikan pesan yang berbeda berdasarkan URL yang diakses oleh client

## 2. Membuat Routing

Untuk memberikan pesan yang berbeda, maka kita dapat memeriksa URL yang dikunjungi oleh client menggunakan `req.url`. Kemudian kita dapat memberikan pesan yang berbeda berdasarkan URL yang dikunjungi

```javascript
// index.js
var http = require('http')

// list contacts yang akan ditampilkan pada rute /contact
const contacts = [
  { name: 'budi', phone: '085739582738' },
  { name: 'imam', phone: '085637562615' },
  { name: 'siti', phone: '085462736253' }
]

http
  .createServer(function(req, res) {
    // memberikan pesan berdasarkan URL yang dikunjungi
    if (req.url == '/') {
      res.write('Welcome')
    } else if (req.url == '/about') {
      res.write('This web service contains contacts data')
    } else if (req.url == '/contact') {
      res.write(JSON.stringify(contacts))
    } else {
      res.write('Page not found')
    }
    res.end()
  })
  .listen(8080)
```
