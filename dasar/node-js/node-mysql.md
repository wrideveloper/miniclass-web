# Node MySQL

Sebelumnya kita sudah mempelajari tentang database MySQL, kita juga sudah mempelajari bagaimana cara membangun http server menggunakan node js, sekarang kita akan menggabungkan keduanya dan akan mencoba mengoneksikan node js dan MySQL

![node-mysql](node-mysql.png)

## Mengoneksikan Node dan MySQL

### 1. Install Module MySQL

Untuk mengoneksikan node dan mysql, kita perlu menginstall module `mysql` menggunakan npm

```bash
npm install mysql
```

### 2. Import Module MySQL

Setelah kita menginstall module `mysql`, tinggal kita import untuk digunakan

```javascript
// index.js

// import mysql module
const mysql = require('mysql')
```

### 3. Membuat Koneksi

Disini kita akan membuat koneksi menggunakan fungsi `createConnection()`, setelah koneksi terbuat, kita dapat melakukan koneksi ke database menggunakan fungsi `connect()`

```javascript
// index.js

const mysql = require('mysql')

// membuat koneksi
const con = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  db: 'database'
})

// melakukan koneksi ke database
con.connect(function(err) {
  // hentikan eksekusi apabila gagal melakukan koneksi
  if (err) throw err

  console.log('Connected!')
})
```

### 4. Menjalankan Query

Setelah node terkoneksi ke database, maka kita dapat melakukan query database menggunakan fungsi `query()`

```javascript
// index.js

const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  db: 'database'
})

con.connect(function(err) {
  if (err) throw err

  // melakukan query ke database
  con.query('SELECT name, address FROM customers', function(err, result) {
    console.log(result)
  })
})
```

### 5. Menampilkan Hasil Query ke Browser

Disini kita tinggal membuat http server seperti tutorial sebelumnya, kemudian letakkan koneksi database didalam callback fungsi `createServer()`

```javascript
const mysql = require('mysql')
// import http module
const http = require('http')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  db: 'database'
})

// membuat http server
http
  .createServer(function(req, res) {
    con.connect(function(err) {
      if (err) throw err

      con.query('SELECT name, address FROM customers', function(err, result) {
        // menampilkan hasil query database ke browser
        res.write(result)
        res.end()
      })
    })
  })
  .listen(8080)
```
