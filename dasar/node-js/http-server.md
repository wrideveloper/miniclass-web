# Node HTTP Server

## 1. Permasalahan

Sebelumnya, kita sudah meng*install* Node.js dan memunculkan teks ***Hello World*** menggunakan `console.log`, namun tujuan kita menginstall Node JS tentu tidak sebatas hanya memunculkan ***Hello World*** saja kan?

Contohnya dengan menggunakan Node.js kita dapat membuat sebuah *backend*

Langkah pertama untuk belajar membuat sebuah *backend* adalah dengan cara membuat ***HTTP server*** dan menjalankannya pada ***port* tertentu**

## 2. HTTP Server

Dengan menggunakan Node.js, kita dapat membuat *HTTP Server*  menggunakan module `http`, module `http` ini secara *default* telah ter*install* saat kita meng*install* Node.js sehingga kita bisa langsung menggunakan module `http` tersebut tanpa meng*install*nya terlebih dahulu

## 3. Membuat HTTP Server

Pastikan kita telah membuat file `javascript`, contohnya seperti `index.js` atau `app.js` atau sesuai dengan nama file yang diinginkan

### 3.1. Mengimport http module

Untuk membuat http server menggunakan Node.js, maka kita perlu mengimport module bawaan Node.js yang bernama `http`, cara mengimport module adalah dengan mengetikkan kode program `require('nama-module')` dan menaruhnya kedalam variabel atau konstanta, contohnya seperti ini

```javascript
// index.js
const http = require('http') //load module http
```

maksud dari potongan kode program diatas adalah kita memuat module `http` kedalam konstanta bernama http

### 3.2. Membuat HTTP Server

Setelah mengimport module http, sekarang kita dapat membuat HTTP server menggunakan fungsi `createServer()`

```javascript
// index.js
const http = require('http') //load module http

http.createServer() //create HTTP server
```

### 3.3. Menjalankan HTTP Server pada port tertentu

Setelah membuat HTTP Server kita juga harus menambahkan pada port berapa backend kita akan mendengarkan dan akan memberikan respon, caranya adalah menambahkan `listen()` setelah `createServer()`

```javascript
// index.js
const http = require('http') //load module http

http.createServer().listen(3000) //add listening port at port 3000
```

maksud dari `http.createServer().listen(3000)` adalah kita menjalankan HTTP Server pada port 3000

### 3.4. Merespon request

Setelah menjalankan HTTP Server pada port 3000 kita harus membuat suatu fungsi untuk merespon request yang diterima, caranya adalah menambahkan `function(req, res) { //Some Code }` didalam fungsi `createServer()`

```javascript
// index.js
const http = require('http') //load module http

http.createServer(function (req, res) { //Create function
    res.write("Hello World"); // Respond with Hello World text
    res.end(); // End Respond
  })
  .listen(3000); // Listening at Port 3000
```

maksud dari kode diatas adalah kita menjalankan HTTP Server pada port 3000 dan ketika ada request kita akan merespon dengan **Hello World**

simpan kode program yang telah dibuat dan jalankan file tersebut dengan cara ketikkan `node namafile.js` di command prompt atau terminal kamu

kemudian buka browser lalu ketik `localhost:3000` di URL bar untuk melihat hasil akhirnya yang seharusnya akan muncul teks **Hello World**
