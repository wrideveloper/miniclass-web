# Import Export

## 1. Permasalahan

Untuk membangun aplikasi yang baik, kita tidak boleh menulis code dalam satu file saja. Kita harus membagi code ke dalam beberapa file sesuai kebutuhan. Sehingga baris code dalam 1 file tidak terlalu banyak dan akhirnya akan lebih mudah dipahami.

## 2. Export & Import Module

Karena code akan terbagi ke dalam beberapa file maka diperlukan export variabel maupun fungsi. Sedangkan untuk menggunakan variabel atau fungsi yang di export tadi,maka harus melakukan import terlebih dahulu.

## 3. Cara Export & Import Module

Jika dalam sebuah file terdapat variabel maupun fungsi yang akan digunakan pada file lain, maka variabel atau fungsi tersebut harus diexport terlebih dahulu menggunakan `module.exports`.

Sedangkan file lain yang ingin menggunakan variable atau fungsi yang diexport tadi, file tersebut harus mengimport terlebih dahulu menggunakan `require()`

### 3.1. Export

Semisal terdapat 2 file, file pertama bernama `data.js` dan file kedua bernama `app.js`. Dalam skenario ini file `data.js` akan terdapat variabel yang nantinya akan digunakan oleh file `app.js`.

Mari kita buat file data.js terlebih dahulu

```javascript
// data.js

var data = {
  nama: "budi",
  kelas: "TI-4B",
  alamat: "malang",
};

module.exports = data;
```

### 3.2. Import

Pada langkah ini kita membuat file `app.js` yang nantinya akan menggunakan data yang berasal dari file `data.js`

```javascript
// app.js

var data = require("./data.js");

console.log(data.nama); // budi
console.log(data.kelas); // TI-4B
console.log(data.alamat); // malang
```

## 4. Contoh Kasus

Sebelumnya kita telah membuat web server dengan beberapa konfigurasi routing seperti berikut.

```javascript
// index.js
var http = require("http");

var contacts = [
  { name: "budi", phone: "085739582738" },
  { name: "imam", phone: "085637562615" },
  { name: "siti", phone: "085462736253" },
];

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      res.write("Welcome");
    } else if (req.url == "/about") {
      res.write("This web service contains contacts data");
    } else if (req.url == "/contact") {
      res.write(JSON.stringify(contacts));
    } else {
      res.write("Page not found");
    }
    res.end();
  })
  .listen(8080);
```

Di dalam file `index.js` ini terdapat sebuah variable `contacts` yang berisi data - data kontak. Untuk membuat file `index.js` ini lebih rapi, maka kita harus memindahkan variable `contacts` ke dalam file baru yang akan dinamakan `contacts.js`.

```javascript
//contacts.js

var contacts = [
  { name: "budi", phone: "085739582738" },
  { name: "imam", phone: "085637562615" },
  { name: "siti", phone: "085462736253" },
];

module.exports = contacts;
```

lalu pada `index.js` kita dapat merubahnya menjadi seperti berikut.

```javascript
// index.js
var http = require("http");
var contacts = require("./contacts.js");

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      res.write("Welcome");
    } else if (req.url == "/about") {
      res.write("This web service contains contacts data");
    } else if (req.url == "/contact") {
      res.write(JSON.stringify(contacts));
    } else {
      res.write("Page not found");
    }
    res.end();
  })
  .listen(8080);
```

Pada materi kali ini, kita tidak mengubah aplikasi web server kita sama sekali, namun yang kita lakukan adalah **mengorganisasikan** code yang kita ketik menjadi ke beberapa file.

Sehingga tiap file akan memiliki fungsinya sendiri - sendiri, dalam hal ini `contacts.js` berfungsi untuk menyimpan data (variabel `contacts`). Sedangkan `index.js` akan fokus ke code web server yang kita buat.

Dengan mengorganisasikan code kita ke beberapa file dengan fungsinya masing - masing, maka code yang kita buat akan lebih mudah dipahami
