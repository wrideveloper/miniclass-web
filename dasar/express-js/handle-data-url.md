# Menerima Data dari URL

## 1. Permasalahan

Sebelumnya, kita sudah bisa membuat web server yang dapat melakukan manipulasi data dengan route sebagai berikut :

- `/contact` menggunakan method GET - menampilkan semua data contact
- `/contact` menggunakan method POST - menambahkan data contact
- `/contact` menggunakan method PUT - mengubah data contact pada index 0
- `/contact` menggunakan method DELETE - menghapus seluruh data contact
  pada index 0

Namun, data dan index yang diinputkan selalu statis dalam artian data yang ditambahkan akan selalu sama yaitu

```javascript
{
  name: "tono",
  phone: "085637263625"
}
```

dan ketika mengubah atau menghapus data, kita hanya bisa mengubah atau menghapus data yang terdapat pada index ke 0 saja

Lalu bagaimana cara client memberitahu server index mana yang akan diubah atau dihapus, dan data apa yang harus dibuat ?

## 2. Mengirim Data Melalui URL

Client dapat mengirimkan data melalui URL untuk memberi tahu server index mana yang akan diubah atau dihapus, dan data apa yang harus dibuat.

## 3. Format URL untuk Menerima Data

Apabila kita ingin membuat server yang dapat menerima data melalui url, kita bisa menggunakan dua jenis format, yaitu `url query` dan `url params`

### 3.1. URL Query

URL query merupakan string yang terletak diakhir sebuah URL yang diawali dengan tanda tanya

**Contoh Struktur URL :**
`localhost:3000/contact/?name=dwiputra&phone=08123456789`

Cara menerima data dari URL Query

```javascript
app.post("/contact", function(req, res) {
  contacts.push({ name: req.query.name, phone: req.query.phone });
  res.send({ success: true });
});
```

### 3.2. URL Params

Dengan url params kita bisa memasukkan data kedalam URL secara langsung, namun untuk urutan dalam penginputan data harus menuruti apa yang telah ditentukan pada route

**Contoh Struktur URL :**
`localhost:3000/contact/dwiputra/08123456789`

Cara menerima data dari URL Query

```javascript
app.post("/contact/:name/:phone", function(req, res) {
  contacts.push({ name: req.params.name, phone: req.name.phone });
  res.send({ success: true });
});
```

## 4. Contoh Kasus

Disini kita akan melanjutkan kode dari materi sebelumnya, tujuannya adalah menerima data dari URL kemudian menggunakannnya untuk menambahkan data kontak baru pada array, dan juga untuk menentukan index mana yang akan diubah atau dihapus.

## 4.1. Mengubah kode untuk menambah kontak baru

Data yang ditambahkan ke dalam array akan diterima dari url, berbeda dari sebelumnya yang masih statis. Berikut contoh penerapannya menggunakan url query dan url params, bisa dipilih salah satu.

### 4.1.1. URL Query

```javascript
app.post("/contact", function(req, res) {
  contacts.push({ name: req.query.name, phone: req.query.phone });
  res.send({ success: true });
});
```

### 4.1.2. URL Params

```javascript
app.post("/contact/:name/:phone", function(req, res) {
  contacts.push({ name: req.params.name, phone: req.params.phone });
  res.send({ success: true });
});
```

## 4.2. Mengubah kode untuk mengubah kontak pada index yang diinginkan

Yang sebelumnya kita hanya mengirim `name` dan `phone`, sekarang kita juga harus mengirim `index` untuk mengetahui data pada index mana yang akan diubah.
Sebelum mengubah kontak, kita juga harus mengecek apakah data pada index tersebut ada atau tidak. Berikut contoh penerapannya menggunakan url query dan url params, bisa dipilih salah satu.

### 4.2.1. URL Query

```javascript
app.put("/contact", function(req, res) {
  if (contacts[req.query.index] !== undefined) {
    contacts[req.query.index] = {
      name: req.query.name,
      phone: req.query.phone
    };
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});
```

### 4.2.2. URL Params

```javascript
app.put("/contact/:index/:name/:phone", function(req, res) {
  if (contacts[req.params.index] !== undefined) {
    contacts[req.params.index] = {
      name: req.params.name,
      phone: req.params.phone
    };
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});
```

## 4.3. Mengubah kode untuk menghapus kontak pada index yang diinginkan

Untuk menghapus kita perlu mengirimkan `index` untuk mengetahui data di index mana yang akan dihapus. Sebelum menghapus kontak, kita juga harus mengecek apakah data pada index tersebut ada atau tidak. Berikut contoh penerapannya menggunakan url query dan url params, bisa dipilih salah satu.

### 4.3.1. URL Query

```javascript
app.delete("/contact", function(req, res) {
  if (contacts[req.query.index] !== undefined) {
    contacts.splice(req.query.index, 1);
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});
```

### 4.3.2. URL Params

```javascript
app.delete("/contact/:index", function(req, res) {
  if (contacts[req.params.index] !== undefined) {
    contacts.splice(req.params.index, 1);
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});
```

Untuk mengetes web server yang telah dibuat bisa menggunakan aplikasi REST Client sama seperti materi sebelumnya
