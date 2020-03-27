# Koneksi Express dan MySQL

## 1. Permasalahan

Sebelumnya, kita sudah bisa membuat web server yang dapat melakukan manipulasi data, dan menerima data dari body. Namun data tersebut hanya disimpan ke variable. Masalahnya, apabila server direstart, maka data yang disimpan pada variable tersebut akan hilang, karena variable disimpan pada memory sementara (RAM).

## 2. Solusi

Agar data yang disimpan permanen, dan tidak hilang saat server direstart, maka data tersebut harus disimpan ke dalam suatu file. File disini bisa berupa file text, atau pada kasus ini lebih cocok menggunakan database seperti MySQL.

## 3. Penjelasan Detail Materi

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

### 3.2 Install Package MySQL pada Project

Setelah membuat database, kembali ke project dan install package `mysql`, agar server bisa terkoneksi dengan database MySQL yang sudah kita buat. Untuk menginstall package ini, cukup buka terminal pada lokasi project dan ketikkan

```bash
npm install mysql
```

Lalu kita cek pada file `package.json` untuk melihat package yang telah kita install. Apabila install package sukses, bagian `dependencies` dari `package.json` akan terlihat seperti ini

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
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "expressmysql"
});
```

Lalu sambungkan koneksi tersebut dengan menggunakan fungsi `connect()`

```javascript
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

Sebelum menjalankan query, ada baiknya kita membuat sebuah rute baru agar pengeksekusian kode lebih mudah dan jelas.

#### 3.1 Buat Endpoint Contact

```javascript
app.get("/contact", function(req, res) {});
```

#### 3.2 Jalankan Query pada Endpoint Contact

Endpoint sudah siap, koneksi sudah siap, kita lanjut untuk menjalankan query pada Express. Query MySQL dapat dijalankan dengan menggunakan fungsi `query()`

```javascript
app.get("/contact", function(req, res) {
  con.query("SELECT * FROM contacts", function(err, rows) {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});
```

Karena kita juga menggunakan `console.log()`, hasil dari query bisa kita lihat pada terminal

```bash
-> Server running on :3000
-> Database Connected
[ RowDataPacket { id: 1, name: 'Rhoma', phone: '081356789876' },
  RowDataPacket { id: 2, name: 'Ani', phone: '081356789877' } ]
```

## 4. Contoh Kasus

Diberikan langkah - langkah untuk melakukan CRUD ke database menggunakan express dan MySQL
