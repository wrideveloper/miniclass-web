# Koneksi Express dan MySQL

## 1. Permasalahan

Sebelumnya, kita sudah bisa membuat web server yang dapat melakukan manipulasi data, dan menerima data dari body. Namun data tersebut hanya disimpan ke variable. Masalahnya, apabila server direstart, maka data yang disimpan pada variable tersebut akan hilang, karena variable disimpan pada memory sementara (RAM).

## 2. Solusi

Agar data yang disimpan permanen, dan tidak hilang saat server direstart, maka data tersebut harus disimpan ke dalam suatu file. File disini bisa berupa file text, atau pada kasus ini lebih cocok menggunakan database seperti MySQL.

## 3. Mengkoneksikan Express ke Database MySQL

### 3.1 Pembuatan Database dan Tabel MySQL

Sebelum memulai, pastikan sudah terdapat sebuah database dan tabel untuk menampung data dari server kita. Jika belum, ketikkan kode berikut pada terminal MySQL ataupun jendela query phpMyAdmin.

```sql
  CREATE DATABASE `expressmysql`;
  USE `expressmysql`;

  CREATE TABLE `contacts` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(80),
    `phone` varchar(15)
  );

  INSERT INTO `contacts`(`name`,`phone`) VALUES
  ("Rhoma", "081356789876"),
  ("Ani", "081356789877");
```

Sebuah database baru dengan tabel `contacts` akan terbuat dan terisi oleh 2 data.

### 3.2 Install Package Express dan MySQL pada Project

Setelah membuat database, kembali ke project dan install package `express` dan `mysql`, agar server bisa terkoneksi dengan database MySQL yang sudah kita buat. Untuk menginstall package ini, cukup buka terminal pada lokasi project dan ketikkan

```bash
npm install express mysql
```

Perhatikan pada command terminal diatas, kita bisa langsung menginstall beberapa package dari npm. Dengan cara memisahkan **nama package dengan spasi**

```bash
npm install package1 package2 package3 . . .
```

Lalu kita cek pada file `package.json` untuk melihat package yang telah kita install. Apabila proses install package sukses, bagian `dependencies` dari `package.json` akan terlihat seperti ini

```json
"dependencies": {
    "express": "^4.17.1",
    "mysql": "^2.18.1"
  }
```

### 3.2 Koneksi dari Express ke MySQL

Package sudah kita install, sekarang saatnya menyambungkan aplikasi Express kita dengan database MySQL.

#### 3.2.1 Import Package MySQL

Pertama kita import package `mysql` agar bisa digunakan

```javascript
const mysql = require("mysql");
```

#### 3.2.2 Membuat Koneksi

Kedua, buat sebuah variabel yang akan menampung lokasi koneksi database kita dengan fungsi `createConnection()`

```javascript
// membuat variable con untuk menampung data koneksi ke MySQL
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "expressmysql"
});
```

Lalu sambungkan koneksi tersebut dengan menggunakan fungsi `connect()`

```javascript
// menyambungkan variable con dengan MySQL
con.connect(function(err) {
  if (err) throw err;
  console.log("-> Database Connected");
});
```

Dan bisa langsung kita coba dengan menjalankan aplikasi Express kita

```bash
-> Server running on :3000
-> Database Connected
```

### 3.3 Menjalankan Query MySQL pada Express

Koneksi sudah siap, kita lanjut untuk menjalankan query pada Express. Query MySQL dapat dijalankan dengan menggunakan fungsi `query()`

```javascript
// Eksekusi query SELECT degan koneksi dari variable con
con.query("SELECT * FROM contacts", function(err, rows) {
  if (err) throw err;
  console.log(rows);
});
```

Karena kita juga menggunakan `console.log()`, hasil dari query bisa kita lihat pada terminal

```bash
-> Server running on :3000
-> Database Connected
[ RowDataPacket { id: 1, name: 'Rhoma', phone: '081356789876' },
  RowDataPacket { id: 2, name: 'Ani', phone: '081356789877' } ]
```

## 4. Aplikasi CRUD dengan Express

Setelah mengetahui cara mengkoneksikan database diatas, kita coba untuk membuat sebuah webservice yang bisa melakukan operasi Create, Read, Update, Delete. Sebenarnya kita sudah mengimplementasikan proses Read Data pada contoh diatas. Tetapi, kita belum membuat endpoint untuk mengakses query tersebut. Sehingga perlu dibuat sebuah endpoint agar bisa kita akses dengan REST Client

### 4.1 Read Data

Saat client mengakses URL `/contact` dengan method `GET`, maka aplikasi akan menjalankan query untuk mengambil semua data `contact` dari database.

```javascript
app.get("/contact", function(req, res) {
  con.query("SELECT * FROM contacts", function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});
```

### 4.2 Create Data

Saat client mengakses URL `/contact` dengan method `POST`, maka aplikasi akan mengambil data dari `body` untuk dimasukkan ke dalam tabel `contact` pada database.

```javascript
app.post("/contact", function(req, res) {
  let name = req.body.name;
  let phone = req.body.phone;
  con.query(
    "INSERT INTO contacts(name, phone) VALUES (?, ?)",
    [name, phone],
    function(err, rows) {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil ditambahkan"
      });
    }
  );
});
```

### 4.3 Update Data

Saat client mengakses URL `/contact/:id` dengan method `PUT`, maka aplikasi akan mengambil data dari `body` untuk memperbarui data dari tabel `contact` pada database berdasarkan parameter `/:id` yang diinputkan. Contohnya kita ingin memperbarui data dengan `id` = 1 pada tabel, maka URL akan menjadi `/contact/1`.

```javascript
app.put("/contact/:id", function(req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let phone = req.body.phone;
  con.query(
    "UPDATE contacts SET name = ?, phone = ? WHERE id = ?",
    [name, phone, id],
    function(err, rows) {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil diubah"
      });
    }
  );
});
```

### 4.4 Delete Data

Sama seperti diatas, client mengakses URL `/contact/:id` dengan method `DELETE` akan menghapus data pada tabel `contact` sesuai dengan parameter `/:id` yang diinputkan. Contoh kita akan menghapus data dengan `id` = `1`, maka URL akan menjadi `/contact/1`.

```javascript
app.delete("/contact/:id", function(req, res) {
  let id = req.params.id;
  con.query("DELETE FROM contacts WHERE id = ?", [id], function(err, rows) {
    if (err) throw err;
    res.json({
      success: true,
      message: "Data Dihapus"
    });
  });
});
```

### 4.5 Source Code Lengkap

```javascript
const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "expressmysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("-> Database Connected");
});

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
  res.json({
    success: true,
    message: "Hello World!"
  });
});

app.get("/contact", function(req, res) {
  con.query("SELECT * FROM contacts", function(err, rows) {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

app.post("/contact", function(req, res) {
  let name = req.body.name;
  let phone = req.body.phone;
  con.query(
    "INSERT INTO contacts(name, phone) VALUES (?, ?)",
    [name, phone],
    function(err, rows) {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil ditambahkan"
      });
    }
  );
});

app.put("/contact/:id", function(req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let phone = req.body.phone;
  con.query(
    "UPDATE contacts SET name = ?, phone = ? WHERE id = ?",
    [name, phone, id],
    function(err, rows) {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil diubah"
      });
    }
  );
});

app.delete("/contact/:id", function(req, res) {
  let id = req.params.id;
  con.query("DELETE FROM contacts WHERE id = ?", [id], function(err, rows) {
    if (err) throw err;
    res.json({
      success: true,
      message: "Data Dihapus"
    });
  });
});

app.listen(3000, function() {
  console.log("-> Server running on :3000");
});
```
