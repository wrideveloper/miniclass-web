### Objek

<img src="objek.jpg" width="350" />

### 1 Permasalahan

Terkadang, untuk membuat suatu fitur pada web, kita butuh menyimpan data yang memiliki banyak property didalamnya. Misalnya kita ingin membuat web yang dapat menampilkan list kontak. Dimana satu data kontak ini sebenarnya memiliki dua property, yaitu name, dan phone.

### 2. Penjelasan Materi Sebagai Solusi

Untuk membuat data yang memiliki banyak property didalamnya, kita bisa menggunakan object

### 3. Penjelasan Detail Materi

### 3.1 Perbedaan Array dan Object

#### 3.1.1 Array

Array merupakan sebuah variable yang dapat menampung lebih dari satu nilai.

Array memiliki elemen dan index.
--> Elemen : Merupakan banyaknya data yang ditampung pada array.
--> Index  : Merupakan urutan data yang terletak pada array dan biasanya diawali dengan 0.

<img src="array.png"/>

Inisialisasi Array 

```javascript
  var kontak = [
      ['Doni','Abi','Reza'],
      ['081322928088','082176789829','087812890938']
  ]
```
#### 3.1.2 Object
**Pengertian objek** 

Objek memiliki banyak properti didalamnya, misalnya kita ambil contoh objek laptop memiliki properti seperti merk, jenis processor, ukuran layar, jumlah RAM, warna, dan sebagainya.

Objek adalah sebuah variabel yang menyimpan nilai (properti) dibuat dengan tanda kurung kurawal dengan isi berupa key dan value.

```javascript
  var kontak = {
    nama : 'Doni',
    notelp : '081322928088'
  }
```
  nama : merupakan key
  notelp : merupakan value


### 3.2 Cara Membuat dan Menggunakan Objek

```javascript
// cara membuat objek
  var kontak = {
    nama : 'Doni',
    notelp : '081322928088'
  }

  var kontak2 = {
    nama : 'Abi',
    notelp : '082176789829'
  }

  var kontak3 = {
    nama : 'Reza',
    notelp : '087812890938'
  }

// cara memanggil nilai dari objek
console.log(kontak.nama) // Doni
console.log(kontak['notelp']) // 081322928088
console.log(kontak.nama + kontak.notelp) //Doni 081322928088

// cara memanggil nilai semua object kontak
console.log(kontak + kontak2 + kontak3)

// cara mengubah nilai dari objek
kontak.nama = 'Yusda'
kontak['notelp'] = '087812304333'

console.log(kontak.nama) // Yusda
console.log(kontak['notelp']) // 087812304333
```

### 4. Contoh Kasus

Untuk contoh kasus, mirip dengan topik array, hanya saja data yang disimpan bukan berupa array of string, melainkan array of object.

Akan diberikan langkah - langkah untuk membuat website list kontak. Data yang disimpan berupa array of object, dan object tersebut memiliki property name dan phone. Web tersebut dapat menampilkan list kontak (menggunakan <ul /> atau <ol />), dan sebuah form untuk menambahkan data kontak (untuk menambahkan data pada array menggunakan array.push).

### 4.1 Penyelesaian

#### 4.1.1 Tag HTML

Buat file baru dengan format .html
```html
<html>

<head>
  <title>Contact App</title>
</head>

<body>
  <div class="app">
    <div class="form">
      <h3 class="form__title">Add Contact</h3>
      <input class="form__input" type="text" placeholder="Name" id="input_name" /><br>
      <input class="form__input" type="text" placeholder="Phone" id="input_phone" /><br>
      <button class="form__submit" type="submit" id="input_submit">Submit</button>
    </div>

    <div class="contact" id="contact">
    </div>
  </div>
  <script src="index.js"></script>
</body>

</html>
```

Buat file baru dengan format .js
```javascript
  var data = [
    {
        name: '',
        phone: ''
    }
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