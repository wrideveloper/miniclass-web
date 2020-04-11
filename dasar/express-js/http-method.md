# HTTP Method

## 1. Permasalahan

Sebelumnya, kita sudah memiliki rute yang dapat melakukan CRUD yaitu :

- `/contact` - Menampilkan semua data contact
- `/contact/create` - Menambahkan data contact
- `/contact/edit` - Mengubah data contact pada index 0
- `/contact/delete` - Menghapus data contact pada index 0

namun, muncul masalah baru yaitu **rute yang terlalu banyak.**

## 2. Solusi

Kita dapat membedakan rute tidak hanya berdasarkan *URL* nya saja. Tapi juga bisa berdasarkan *methodnya*, sehingga pada contoh diatas, bisa jadi seperti berikut :

- `/contact` method GET - Menampilkan semua data contact
- `/contact` method POST - Menambahkan data contact
- `/contact` method PUT - Mengubah data contact pada index 0
- `/contact` method DELETE - Menghapus data contact pada index 0

## 3. Penjelasan HTTP Method

HTTP memiliki banyak method, 4 diantaranya adalah :

- Method GET - Menampilkan Data
- Method POST - Menambahkan Data
- Method PUT - Mengubah Data
- Method DELETE - Menghapus Data

jika ingin mengetahui lebih lengkap dapat klik link berikut [HTTP Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## 4. Membuat Rute dengan HTTP Method Menggunakan Express 
Cara membuat rute menggunakan method selain GET pada express :

- Method POST

  ```javascript
  app.post('/path', function (req, res) {
      //Kode disini
  })
  ```

- Method PUT
  
  ```javascript
  app.put('/path', function (req, res) {
      //Kode disini
  })
  ```

- Method DELETE
  
  ```javascript
  app.delete('/path', function (req, res) {
      //Kode disini
  })
  ```

## 4. Contoh Kasus

Contoh kasus menggunakan file dari materi sebelumnya,

### 4.1. Mengubah kode untuk menambahkan kontak baru

    Dari `app.get` dan `/contact/create`:

    ```javascript
    // menambahkan kontak baru
    app.get("/contact/create", function (req, res) {
        contacts.push({ name: "tono", phone: "085637263625" })
        res.send({ success: true })
    })
    ```

    Menjadi `app.post` dan `/contact`:

    ```javascript
    // menambahkan kontak baru
    app.post("/contact", function (req, res) {
        contacts.push({ name: "tono", phone: "085637263625" })
        res.send({ success: true })
    })
    ```

### 4.2. Mengubah kode untuk mengubah kontak pada index 0

    Dari `app.get` dan `/contact/edit`:

    ```javascript
    // mengubah kontak pada index 0
    app.get("/contact/edit", function (req, res) {
        if (contacts.length > 0) {
            contacts[0] = { name: "siti", phone: "085372638281" }
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    })
    ```

    Menjadi `app.put` dan `/contact`:

    ```javascript
    // mengubah kontak pada index 0
    app.put("/contact", function (req, res) {
        if (contacts.length > 0) {
            contacts[0] = { name: "siti", phone: "085372638281" }
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    })
    ```

### 4.3. mengubah kode untuk menghapus kontak pada index 0

    Dari `app.get` dan `/contact/delete`:

    ```javascript
    // menghapus kontak pada index 0
    app.get("/contact/delete", function (req, res) {
        if (contacts.length > 0) {
            contacts.splice(0, 1)
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    })
    ```

    Menjadi `app.delete` dan `/contact`:

    ```javascript
    // menghapus kontak pada index 0
    app.delete("/contact", function (req, res) {
        if (contacts.length > 0) {
            contacts.splice(0, 1)
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    })
    ```

### 4.4. Hasil akhir

```javascript
const express = require('express')
const app = express()

const contacts = [
  {
    name: "amir",
    phone: "085482938471"
  },
  {
    name: "budi",
    phone: "086452738493"
  }
]

// menampilkan semua kontak
app.get("/contact", function (req, res) {
  res.send(contacts)
})

// menambahkan kontak baru
app.post("/contact", function (req, res) {
  contacts.push({ name: "tono", phone: "085637263625" })
  res.send({ success: true })
})

// mengubah kontak pada index 0
app.put("/contact", function (req, res) {
  if (contacts.length > 0) {
    contacts[0] = { name: "siti", phone: "085372638281" }
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})

// menghapus kontak pada index 0
app.delete("/contact", function (req, res) {
  if (contacts.length > 0) {
    contacts.splice(0, 1)
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})

app.listen(3000, function () {
  console.log("server running")
})
```

untuk melakukan percobaan bisa menggunakan REST Client App seperti postman
