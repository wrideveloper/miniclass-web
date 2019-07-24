# Object Document Mapping

![](object-document-mapper.png)

## 1. Penjelasan Singkat

**ODM (Oobject Document Mapping)** memiliki fungsi yang sama dengan **ORM (Object Relational Mapping)**, perbedaannya hanya terletak pada jenis database yang digunakan, dimana **ODM digunakan untuk Document Oriented Database** sedangkan **ORM digunakan untuk Relational Database**

## 2. Penerapan ODM dengan Mongoose

### 2.1. Installasi

```bash
# Menginstall mongoose
npm install mongoose
```

### 2.2. Mengkoneksikan Mongoose ke Database

Tentukan nama database yang akan dihubungkan ke aplikasi terlebih dahulu, misal: **test**

```javascript
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
```

Untuk mengecek apakah database telah berhasil terhubung atau belum, bisa menggunakan perintah di bawah ini

```javascript
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
})
```

### 2.3. Membuat Model

Semisal kita ingin membuat _collection_ dengan nama mahasiswa. Terlebih dahulu kita harus membuat sebuah Schema.

```javascript
const mahasiswaSchema = new mongoose.Schema({
  name: String,
  address: String,
  age: Number
})
```

Lalu compile Schema diatas menjadi sebuah Model

```javascript
const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema)
```

### 2.4. Melakukan Operasi CRUD dengan Mongoose

#### 2.4.1. Create Document

```javascript
Mahasiswa.create({
  name: 'Mnindrazaka',
  address: 'Probolinggo',
  age: 19
}, function(err, mahasiswa) {
  if (err) return console.error(err)
  console.log(mahasiswa)
})
```

#### 2.4.2. Read Document

```javascript
Mahasiswa.find(function(err, mahasiswa) {
  if (err) return console.error(err)
  console.log(mahasiswa)
})

//Akan mengoutputkan semua document yang berada di dalam collection Mahasiswa
```

#### 2.4.3. Update Document

```javascript
Mahasiswa.findOneAndUpdate(
  {
    nama: 'Mnindrazaka'
    //Mencari semua document yang memiliki atribut nama bernilai Mnindrazaka
  },
  {
    nama: 'Aka'
    //Merubah nilai dari atribut nama menjadi Aka
  },
  {
    new: true
    //return document yang telah terupdate
  },
  function(err, mahasiswa) {
    if (err) return console.error(err)
    console.log(mahasiswa)
    //Mengoutputkan semua document yang diupdate
  }
)
```

#### 2.4.4. Delete Document

```javascript
Mahasiswa.findOneAndRemove(
  {
    nama: 'Mnindrazaka'
    //Mencari semua document yang memiliki atribut nama bernilai Mnindrazaka dan menghapusnya
  },
  function(err, res) {
    if (err) return console.error(err)
    console.log('data telah terhapus')
    //Mengoutputkan semua document yang didelete
  }
)
```

## 3. Referensi

Untuk melihat seluruh source code penerapan ODM menggunakan mongoose, silahkan kunjungi link berikut
https://github.com/wrideveloper/express-mongo-webservice
