# Document Oriented Database

<img src="document-oriented-database.jpg" width="500px" />

## 1. Penjelasan

Document oriented database merupakan jenis database yang tidak menggunakan SQL untuk melakukan transaksi data (No SQL). Document oriented database menggunakan file dokumen seperti XML atau JSON untuk menyimpan datanya. Berbeda dengan relational database yang memiliki struktur tabel dan tipe data, document oriented database memiliki struktur yang lebih fleksibel dan berbeda - beda sesuai kebutuhan.

## 2. Mengapa Menggunakan Document Oriented Database

Berikut beberapa kelebihan yang dimiliki oleh document oriented database dan tidak dimiliki oleh relational database :

1. Struktur data bisa lebih fleksibel, bahkan kita bisa menggunakan array dalam database ini
2. Penyimpanan dan pembacaan data lebih cepat karena menggunakan file dokumens

## 3. Beberapa Istilah dalam Document Oriented Database

Document oritented database memiliki istilah sendiri untuk menyebutkan tabel dan baris yang ada pada suatu database, yaitu :

1. **Collection** : merupakan tabel - tabel yang ada pada suatu database
2. **Document** : merupakan baris - baris atau data yang dimiliki suatu collection

## 4. Pengenalan MongoDB

MongoDB merupakan salah satu database no SQL yang populer dan sering digunakan oleh developer, berikut langkah - langkah untuk menggunakan MongoDB

### 4.1. Install MongoDB

Silahkan ikuti tutorial berikut berdasarkan platform yang digunakan

[Install MongoDB pada linux ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

[Install MongoDB pada windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### 4.2. Masuk ke Terminal Mongo

```bash
mongo
```

### 4.3. Pilih Database

```bash
# Menggunakan db_siswa
use db_siswa 
```

### 4.4. Fetch Document

Berikut beberapa contoh untuk melakukan fetching document pada collection

```bash
# fetch semua document pada collection biodata
db.biodata.find()

# fetch semua document pada collection biodata yang memiliki alamat malang
db.biodata.find({ alamat: "malang" })

# fetch satu document yang memiliki id 1234
db.biodata.findOne({ _id: ObjectId("1234") })
```

https://docs.mongodb.com/manual/tutorial/query-documents/

### 4.5. Insert Document

Berikut beberapa contoh untuk melakukan insert document pada collection

```bash

# insert satu document pada collection biodata
db.insertOne({ nama: "Santoso", alamat: "Probolinggo" })

# insert banyak document pada collection biodata
db.insertMany([
  { nama: "Budi", alamat: "Pasuruan" },
  { nama: "Amin", alamat: "Malang" }
])
```

https://docs.mongodb.com/manual/tutorial/insert-documents/

### 4.6. Update Document

Berikut beberapa contoh untuk melakukan update document pada collection

```bash
# update satu document pada collection biodata dengan id 1234
db.biodata.updateOne(
  { _id: ObjectId("1234") },
  { $set: { nama: "Suherman" } }
)

# update semua document pada collection biodata dengan alamat malang
db.biodata.updateOne(
  { alamat: "malang" },
  { $set: { nama: "Suherman" } }
)
```

https://docs.mongodb.com/manual/tutorial/update-documents/

### 4.7. Delete Document

Berikut beberapa contoh untuk melakukan delete document pada collection

```bash
# delete semua document pada collection biodata
db.biodata.deleteMany()

# delete semua document pada collection biodata dengan alamat malang
db.biodata.deleteMany({ alamat: "malang" })

# delete satu document pada collection biodata dengan id 1234
db.biodata.deleteOne({ _id: ObjectId("1234") })
```

https://docs.mongodb.com/manual/tutorial/remove-documents/