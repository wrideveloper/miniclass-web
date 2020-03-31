### 1. Permasalahan
Tidak dapat mengakses file secara publik, Express tidak dapat langsung membaca file/folder secara langsung, karena itu kita membutuhkan suatu route untuk mengakses file atau folder tersebut agar dapat diakses secara publik

### 2. Solusi
Agar file tersebut dapat ditampilkan, kita butuh membuat route khusus yang digunakan untuk menampilkan file-file yang ada pada suatu folder. Pada express, kita bisa membuatnya dengan mudah menggunakan middleware `express.static()`

### 3. Penjelasan Detail Materi
- `express.static()` adalah middleware Express yang digunakan untuk membantu client mengakses sebuah file dengan route yang ditentukan

### 4. Contoh Kasus
Folder public bersisi beberapa file yang akan kita akses menggunakan `express.static()`, Kita menggunakan `express.static()` dan route `/images` untuk membuat route agar client bisa mengakses file tersebut. Untuk mengakses file buka http://localhost:3000/images/namafile.png

Berikut source code dari penjelasan diatas :
```javascript
const express = require('express')
const app = express()

// menampilkan semua file atau folder yang ada pada folder public dan routingnya /image/namafile.png
app.use("/images", express.static('public'))


app.listen(3000, function () {
  console.log("Server running on port :3000")
})
```