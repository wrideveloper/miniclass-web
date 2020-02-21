# Manipulasi DOM

![code](code.jpeg)

## 1. Penjelasan DOM

DOM (Document Object Model) merupakan object yang berisi struktur dari halaman web kita. DOM berasal dari script HTML yang telah dimuat di browser.

![dom-parser](dom-parser.jpg)

## 2. Manipulasi DOM dengan Javascript

Setelah DOM berhasil dimuat di browser, maka kita bisa melakukan manipulasi dengan menggunakan javascript

### 2.1. Menentukan Element

Sebelum memanipulasi dom, kita perlu menentukan element apa yang akan kita manipulasi

```javascript
// Mencari element berdasarkan ID
document.getElementById('id')

// Mencari element berdasarkan nama tag
document.getElementsByTagName('tagName')

// Mencari element berdasarkan class
document.getElementsByClassName('className')
```

### 2.2. Manipulasi Element

Setelah mendapatkan element yang ingin kita manipulasi, maka kita bisa langsung melakukan manipulasi pada element tersebut

```javascript
var element = document.getElementById('header')

// merubah isi dari element
element.innerHTML = value

// merubah style dari element
element.style.property = value
```

### 2.3. Merubah Class Element

Merubah style dari suatu element secara langsung kurang dianjurkan, lebih baik merubah class dari element tersebut dengan menggunakan `classList`

```javascript
var element = document.getElementById('header')

// mendapatkan nama class pada element (berupa array)
element.classList

// menambah class pada element
element.classList.add('className')

// menghapus class pada element
element.classList.remove('className')

// toggle class pada element
element.classList.toggle('className')

// memeriksa apakah element memiliki class
element.classList.contains('className')

// mendapatkan jumlah class pada element
element.classList.length

// mendapatkan class pertama pada element
element.classList.item(0)
```
