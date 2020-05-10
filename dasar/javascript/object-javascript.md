# Objek

<img src="objek.jpg" width="350" />

## 1 Permasalahan

Terkadang, untuk membuat suatu fitur pada web, kita butuh menyimpan data yang memiliki banyak property didalamnya. Misalnya kita ingin membuat web yang dapat menampilkan list kontak. Dimana satu data kontak ini sebenarnya memiliki dua property, yaitu name, dan phone.

## 2. Penjelasan Materi Sebagai Solusi

Untuk membuat data yang memiliki banyak property didalamnya, kita bisa menggunakan object

## 3. Penjelasan Detail Materi

### 3.1 Penjelasan Object

Objek memiliki banyak properti didalamnya, misalnya kita ambil contoh objek laptop memiliki properti seperti merk, jenis processor, ukuran layar, jumlah RAM, warna, dan sebagainya.

Objek adalah sebuah variabel yang menyimpan nilai (properti) yang dibuat dengan tanda kurung kurawal dengan isi berupa key dan value.

```javascript
var laptop = {
  merk: 'Asus',
  processor: 'intel',
}
```

`merk` : merupakan key  
`Asus` : merupakan value

### 3.2 Perbedaan Array dan Object

Array dan object sama - sama dapat menyimpan lebih dari satu data pada satu variable. Namun keduanya memiliki perbedaan, yaitu array menyimpan kumpulan data yang bersifat sama. Misalnya :

1. Daftar nama kontak
2. Daftar nama buah

```javascript
// daftar nama kontak
var daftar_nama_kontak = ['amir', 'budi', 'joko']
// daftar nama buah
var daftar_nama_buah = ['mangga', 'jeruk', 'lemon']
```

Sedangkan object dapat menyimpan data yang sifatnya tidak sama, misalnya pada object laptop terdiri dari beberapa data yang berbeda, yaitu :

1. Merk
2. Jenis processor
3. Warna

```javascript
var laptop = {
  merk: 'Asus',
  processor: 'intel',
  warna: 'merah',
}
```

Walaupun berbeda, array dan object dapat dikombinasikan, misalnya untuk membuat daftar object laptop seperti berikut

```javascript
var daftar_laptop = [
  {
    merk: 'Asus',
    processor: 'intel',
    warna: 'merah',
  },
  {
    merk: 'Samsung',
    processor: 'amd',
    warna: 'hitam',
  },
]
```

Pada contoh diatas, kita memiliki sebuah array yang bernama `daftar_laptop` yang berisi kumpulan object `laptop`

### 3.3 Cara Membuat Object

Kita dapat menggunakan kurang kurawal `{ }` untuk membuat sebuah object, contohnya seperti berikut

```javascript
// cara membuat objek
var kontak = {
  nama: 'Doni',
  notelp: '081322928088',
}

var kontak2 = {
  nama: 'Abi',
  notelp: '082176789829',
}

var kontak3 = {
  nama: 'Reza',
  notelp: '087812890938',
}
```

### 3.4 Mengakses Object

Untuk mengakses data pada object, kita tinggal memanggil nama objectnya diikuti dengan property dari object tersebut

```javascript
// cara memanggil nilai dari objek
console.log(kontak.nama) // Doni
console.log(kontak['notelp']) // 081322928088
console.log(kontak.nama + kontak.notelp) //Doni 081322928088
```

### 3.5 Mengubah Object

```javascript
// cara mengubah nilai dari objek
kontak.nama = 'Yusda'
kontak['notelp'] = '087812304333'

// menampilkan perubahan
console.log(kontak.nama) // Yusda
console.log(kontak['notelp']) // 087812304333
```

## 4. Contoh Kasus

Untuk contoh kasus, mirip dengan topik array, hanya saja data yang disimpan bukan berupa array of string, melainkan array of object.

Akan diberikan langkah - langkah untuk membuat website list kontak. Data yang disimpan berupa array of object, dan object tersebut memiliki property name dan phone. Web tersebut dapat menampilkan list kontak (menggunakan `<ul />` atau `<ol />`), dan sebuah form untuk menambahkan data kontak (untuk menambahkan data pada array menggunakan array.push).

### 4.1 Membuat Struktur HTML

Pada html, kita akan membuat struktur dari web yang akan kita buat, dimana disini terdapat sebuah form untuk menginputkan data kontak baru dan sebuah div yang nantinya akan digunakan untuk menampilkan daftar kontak

```html
<html>
  <head>
    <title>Contact App</title>
  </head>

  <body>
    <div>
      <h3>Add Contact</h3>
      <input type="text" placeholder="Name" id="input_name" /><br />
      <input type="text" placeholder="Phone" id="input_phone" /><br />
      <button type="submit" id="input_submit">
        Submit
      </button>
    </div>

    <div id="contact"></div>
    <script src="index.js"></script>
  </body>
</html>
```

### 4.2 Membuat Script Javascript

```javascript
var data = [
  {
    name: '',
    phone: '',
  },
]

var contact = document.getElementById('contact')
var input_name = document.getElementById('input_name')
var input_phone = document.getElementById('input_phone')
var input_submit = document.getElementById('input_submit')

input_submit.onclick = addContact

function addContact() {
  var nameValue = input_name.value
  var phoneValue = input_phone.value

  data.push({ name: nameValue, phone: phoneValue })
  renderContacts()
}

function renderContacts() {
  contact.innerHTML = ''

  for (var i = 0; i < data.length; i++) {
    contact.innerHTML += `
    <div class="contact__item">
        <p class="contact__name">${data[i].name}</p>
        <p class="contact__phone">${data[i].phone}</p>
    </div>
    `
  }
}
renderContacts()
```
