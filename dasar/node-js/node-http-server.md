# Node HTTP Server

Dengan teknologi node js kita dapat membuat http server menggunakan javascript, sekarang kita akan belajar bagaimana cara membuat http server menggunakan node js

## Membuat Web Server

### 1. Import HTTP Module

Untuk membuat http server menggunakan node, maka kita perlu mengimport module bawaan node yang bernama `http`

```javascript
// index.js

const http = require('http')
```

### 2. Membuat HTTP Server

Setelah mengimport module `http`, sekarang kita dapat membuat http server menggunakan fungsi `createServer()`

```javascript
// index.js

var http = require('http')

http
  .createServer(function(req, res) {
    res.write('Hello World!')
    res.end()
  })
  .listen(8080)
```
