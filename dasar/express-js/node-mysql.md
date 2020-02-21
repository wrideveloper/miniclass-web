# Koneksi ke Database MySQL

![node-mysql](node-mysql.png)

## 1. Penjelasan

Terkadang server butuh melakukan penyimpanan data. Apabila kita menyimpan data pada variable, data tersebut akan hilang apabila server direstart. Sehingga kita harus menyimpan data tersebut ke database

## 2. Mengoneksikan Node dan MySQL

### 2.1. Install Module MySQL

Untuk mengoneksikan node dan mysql, kita perlu menginstall module `mysql` menggunakan npm

```bash
npm install mysql
```

### 2.2. Import Module MySQL

Setelah kita menginstall module `mysql`, tinggal kita import untuk digunakan

```javascript
// index.js

// import mysql module
const mysql = require('mysql')
```

### 2.3. Membuat Koneksi

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

### 2.4. Menjalankan Query

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
