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

Untuk mengirim data, client dapat menggunakan URL sebagai media untuk menginput data, data yang dikirim melalui URL tadi akan diterima dan diolah oleh server.


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

Disini kita akan melanjutkan
