# Middleware

![middleware](middleware.png)

## 1. Permasalahan

Pada Web Server yang sudah dibuat sebelumnya kita sudah dapat menginputkan index dan data yang akan dimanipulasi dari client. Kemudian, pada rute untuk mengubah dan menghapus data, kita sudah melakukan validasi apakah index yang akan diubah atau dihapus ada atau tidak

Berikut rute untuk mengubah data, terdapat kondisi untuk memeriksa apakah index yang diminta oleh client ada di variable `contacts` atau tidak. Apabila ada, lanjutkan pengubahan sesuai data yang dikirim client.

```javascript
app.put('/contact', function(req, res) {
  // diperiksa dulu apakah data pada index yang diminta ada atau tidak
  if (contacts[req.query.index] !== undefined) {
    contacts[req.query.index] = {
      name: req.query.name,
      phone: req.query.phone
    }
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})
```

Begitu pula pada rute untuk menghapus data, terdapat kondisi untuk memeriksa apakah index yang akan dihapus ada di variable `contacts` atau tidak. Apabila ada, lanjutkan penghapusan.

```javascript
app.delete('/contact', function(req, res) {
  // diperiksa dulu apakah data pada index yang diminta ada atau tidak
  if (contacts[req.query.index] !== undefined) {
    contacts.splice(req.query.index, 1)
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})
```

Pada dua rute tersebut, kita harus menuliskan kode untuk melakukan validasi index secara manual pada setiap rutenya. Apabila rute yang harus divalidasi indexnya hanya ada dua, maka hal tersebut tidak menjadi masalah. Namun bayangkan apabila terdapat puluhan rute yang harus divalidasi indexnya, kita harus menuliskan kode validasi index secara manual satu per satu pada puluhan rute tersebut. Hal ini pasti akan sangat melelahkan dan berpotensi memunculkan bug.

## 2. Penjelasan Middleware

Middleware merupakan suatu fungsi khusus yang nantinya dapat dijalankan sebelum request sampai ke rute tujuan (endpoint). Agar lebih jelas perhatikan gambar berikut

![middleware](middleware-detail.png)

Berdasarkan gambar tersebut, sebelum request dari client sampai ke endpoint, maka request tersebut akan melewati middleware terlebih dahulu. Setelah request masuk ke middleware, maka middleware dapat meneruskan request tersebut ke middleware atau endpoint selanjutnya. Atau menghentikan request tersebut dengan mengirimkan response khusus.

Pertanyaannya, apa yang akan dilakukan middleware apabila ada request yang masuk dari client ? Apabila kita sambungkan pada permasalahan yang sudah dijelaskan diatas, kita dapat membuat sebuah fungsi middleware untuk melakukan validasi index. Apabila indexnya valid, maka request akan diteruskan ke endpoint tujuan, sedangkan apabila index tidak valid, maka middleware akan menghentikan request dengan mengirimkan pesan error. Selain untuk menyelesaikan permasalahan validasi index, middleware juga biasa digunakan untuk melakukan autentikasi ketika client melakukan login.

## 3. Menerapkan Middleware Pada Express

Terdapat dua langkah untuk menerapkan middleware pada express, yaitu membuat fungsi middleware, kemudian menerapkan fungsi middleware tersebut pada rute yang diinginkan

### 3.1. Membuat Fungsi Middleware

Pertama, kita harus membuat sebuah fungsi middleware. Fungsi middleware merupakan fungsi biasa yang menerima tiga parameter, yaitu `req`, `res`, dan `next`.

```javascript
// contoh fungsi middleware
function contohMiddleware(req, res, next) {
  if (/* isi kondisi sesuai kebutuhan, misalnya untuk memvalidasi index */) {
    console.log('middleware terlewati, request diteruskan')
    next() // panggil next() untuk meneruskan request
  } else {
    res.send('request terhenti di middleware') // panggil res.send() untuk menghentikan request
  }
}
```

`req` akan berisi data yang dikirimkan oleh client, `res` digunakan untuk mengirimkan response dari middleware apabila request akan dihentikan, sedangkan `next` digunakan untuk melanjutkan request ke middleware atau endpoint selanjutnya.

### 3.2. Menerapkan Fungsi Middleware

Setelah membuat fungsi middleware, kita tinggal menerapkan middleware pada rute yang kita inginkan, terdapat dua cara untuk melakukannya, yaitu dengan menerapkannya ke rute tertentu, atau ke seluruh rute yang ada.

#### 3.2.1. Menerapkan Middleware Pada Rute tertentu

Untuk menerapkan fungsi middleware yang sudah dibuat ke rute tertentu, kita tinggal memasukkan fungsi middleware sebagai parameter ke rute yang diinginkan.

```javascript
const express = requitre('express')
const app = express()

// contoh fungsi middleware
function contohMiddleware(req, res, next) {
  if (true) {
    console.log('middleware terlewati, request diteruskan')
    next()
  } else {
    res.send('request terhenti di middleware')
  }
}

// terapkan contoh middleware ke rute /hello
app.get('/hello', contohMiddleware, function(req, res) {
  res.send('hello world')
})

// terapkan juga contoh middleware ke rute /hello2
app.get('/hello2', contohMiddleware, function(req, res) {
  res.send('hello world 2')
})

// pada rute /hello3, kita tidak menerapkan middleware apapun
app.get('/hello3', function(req, res) {
  res.send('hello world 3')
})
```

Pada contoh diatas, apabila client mengunjungi `/hello` dan `/hello2`, maka request dari client akan melewati middleware `contohMiddleware` terlebih dahulu. Sehingga pada console server akan muncul pesan `middleware terlewati, request diteruskan`. Kemudian pesan `hello world` atau `hello world 2` akan dikirim ke client. Sedangkan apabila client mengunjungi `/hello3` maka request akan langsung sampai ke endpoint dan tidak melewati middleware apapun.

#### 3.2.2. Menerapkan Middleware Pada Seluruh Rute

Untuk menerapkan middleware pada seluruh rute, kita bisa menggunakan `app.use` sebelum rute - rute yang ingin diterapkan middleware. Contohnya seperti berikut

```javascript
const express = requitre('express')
const app = express()

// rute /hello-baru tidak akan melewati middleware, karena ada di atas app.use
app.get('/hello-baru', function(req, res) {
  res.send('hello world baru')
})

// contoh fungsi middleware
function contohMiddleware(req, res, next) {
  if (true) {
    console.log('middleware terlewati, request diteruskan')
    next()
  } else {
    res.send('request terhenti di middleware')
  }
}

// menerapkan middleware
app.use(contohMiddleware)

// rute /hello akan melewati middleware terlebih dahulu, karena ada di bawah app.use
app.get('/hello', function(req, res) {
  res.send('hello world')
})

// rute /hello2 akan melewati middleware terlebih dahulu, karena ada di bawah app.use
app.get('/hello2', function(req, res) {
  res.send('hello world 2')
})

// rute /hello3 akan melewati middleware terlebih dahulu, karena ada di bawah app.use
app.get('/hello3', function(req, res) {
  res.send('hello world 3')
})
```

## 4. Contoh Kasus

Agar lebih paham, kita akan menerapkan middleware pada contoh kasus sebelumnya. Disini akan dibuat sebuah middleware untuk melakukan validasi index. Kemudian middleware ini akan digunakan pada rute penghapusan dan pengubahan data. Sehingga kita tidak perlu menuliskan kode validasi index secara satu per satu pada kedua rute tersebut.

### 4.1. Membuat Middleware Validasi Index

Pertama, kita akan membuat sebuah fungsi middleware baru bernama `validateIndex`, tugas dari middleware ini adalah untuk mengambil index yang dikirim client dari query url, kemudian memeriksa apakah data `contacts` pada index tersebut ada atau tidak. Apabila ada, maka request akan dilanjutkan, apabila tidak, maka request akan dihentikan

```javascript
const express = require('express')
const app = express()

const contacts = [
  {
    name: 'amir',
    phone: '085482938471'
  },
  {
    name: 'budi',
    phone: '086452738493'
  }
]

//membuat fungsi middleware untuk melakukan validasi index
function validateIndex(req, res, next) {
  if (contacts[req.query.index] === undefined) {
    res.send({ success: false })
  } else {
    next()
  }
}

app.get('/contact', function(req, res) {
  res.send(contacts)
})

app.post('/contact', function(req, res) {
  contacts.push({ name: req.query.name, phone: req.query.phone })
  res.send({ success: true })
})

app.put('/contact', function(req, res) {
  contacts[req.query.index] = { name: req.query.name, phone: req.query.phone }
  res.send({ success: true })
})

app.delete('/contact', function(req, res) {
  contacts.splice(req.query.index, 1)
  res.send({ success: true })
})

app.listen(3000, function() {
  console.log('server running')
})
```

### 4.2. Menerapkan Middleware Validasi Index

Selanjutnya, tinggal kita terapkan middleware `validateIndex` ke rute yang membutuhkan validasi index, yaitu saat pengubahan dan penghapusan data `contacts`.

```javascript
const express = require('express')
const app = express()

const contacts = [
  {
    name: 'amir',
    phone: '085482938471'
  },
  {
    name: 'budi',
    phone: '086452738493'
  }
]

function validateIndex(req, res, next) {
  if (contacts[req.query.index] === undefined) {
    res.send({ success: false })
  } else {
    next()
  }
}

app.get('/contact', function(req, res) {
  res.send(contacts)
})

app.post('/contact', function(req, res) {
  contacts.push({ name: req.query.name, phone: req.query.phone })
  res.send({ success: true })
})

// menerapkan middleware validateIndex pada rute pengubahan data
app.put('/contact', validateIndex, function(req, res) {
  contacts[req.query.index] = { name: req.query.name, phone: req.query.phone }
  res.send({ success: true })
})

// menerapkan middleware validateIndex pada rute penghapusan data
app.delete('/contact', validateIndex, function(req, res) {
  contacts.splice(req.query.index, 1)
  res.send({ success: true })
})

app.listen(3000, function() {
  console.log('server running')
})
```
