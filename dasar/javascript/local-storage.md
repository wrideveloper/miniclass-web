# Local Storage

Local storage atau web storage merupakan fitur baru pada HTML 5, dengan local storage kita bisa menyimpan data tanpa perlu mengkonfigurasi database, data akan tersimpan pada masing - masing browser pengguna. Walaupun sekilas mirip dengan cookie namun local storage memiliki keamanan dan kecepatan yang lebih baik serta jumlah data yang bisa disimpan lebih banyak.

![localstorage](localstorage.png)

### 1. Cara Menggunakan Local Storage

Local storage cukup mudah untuk digunakan, caranya seperti berikut

```javascript
// menyimpan data
localStorage.setItem("lastname", "Smith");

// mengambil data yang sudah tersimpan
localStorage.getItem("lastname");
```

### 2. Menyimpan Array atau Object pada Local Storage

Local storage hanya dapat menyimpan data primitif seperti string, integer, boolean, float, kita tidak dapat menyimpan array atau objek secara langsung kedalam local storage

Namun ada cara untuk menangani permasalahan ini, yaitu dengan mengubah array atau objek tersebut menjadi string dengan menggunakan fungsi `JSON.stringify()` sebelum disimpan ke local storage, kemudian ketika data tersebut diambil maka tinggal diubah lagi menjadi array atau objek dengan menggunakan fungsi `JSON.parse()`

```javascript
var siswa = {
  nama: "Budi",
  jurusan: "TI",
  alamat: "Malang"
}

// objek siswa diubah menjadi string
localStorage.setItem("siswa", JSON.stringify(siswa))

// objek siswa yang semula menjadi string diubah lagi menjadi bentuk objek
JSON.parse(localStorage.getItem("siswa"))
```

### Melihat Data yang Tersimpan

Jika kita penasaran dimana local storage di simpan, kita tidak usah bingung, tinggal membuka inspect element lalu pilih application, disana akan ada menu local storage. Ini contohnya:

![penyimpanan-local](tempat-simpan.png)

**Berikut beberapa tutorial tentang manipulasi Local Storage yang dapat dipelajari :**

[https://www.w3schools.com/html/html5_webstorage.asp](https://www.w3schools.com/html/html5_webstorage.asp)
