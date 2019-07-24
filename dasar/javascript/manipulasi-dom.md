# Manipulasi DOM

![code](code.jpeg)

## 1. Apa Itu DOM ?

**DOM** (Document Object Model) merupakan API dari dokumen HTML dan XML yang berisi struktur dari dokumen yang telah dimuat di browser kita, file HTML yang kita buka di browser akan diproses oleh DOM parser dan akan berubah menjadi bentuk DOM

![dom-parser](dom-parser.jpg)

DOM dapat kita manipulasi strukturnya, artinya struktur dokumen HTML yang sudah dimuat di browser bisa kita manipulasi dengan menggunakan javascript, hal ini akan sangat membantu dalam membuat interface yang interaktif, misalnya membuat pop up menu, slider, animasi, dan sebagainya.

**Untuk mengenal lebih lanjut seputar DOM bisa dibaca di artikel berikut :**

[https://www.w3.org/TR/WD-DOM/introduction.html](https://www.w3.org/TR/WD-DOM/introduction.html)

**Banyak yang salah paham terhadap DOM dan menganggap bahwa struktur DOM sama seperti struktur yang ada di file HTML :**

[https://css-tricks.com/dom/](https://css-tricks.com/dom/)

**kesimpulan** : struktur DOM yang sudah dimuat di browser bisa jadi berbeda dengan struktur file HTML sebelum dimuat di browser

## 2. Manipulasi DOM dengan Javascript

Setelah DOM berhasil dimuat di browser, maka kita bisa melakukan manipulasi dengan menggunakan javascript

### 2.1. Menentukan Element

Sebelum memanipulasi dom, kita perlu menentukan element apa yang akan kita manipulasi

```javascript
// Mencari element berdasarkan ID
document.getElementById(id)

// Mencari element berdasarkan nama tag
document.getElementsByTagName(name)

// Mencari element berdasarkan class
document.getElementsByClassName(name)
```

### 2.2. Manipulasi Element

Setelah mendapatkan element yang ingin kita manipulasi, maka kita bisa langsung melakukan manipulasi pada element tersebut

```javascript
var element = document.getElementById('header')

// merubah isi dari element
element.innerHTML = value

// merubah attribute dari element
element.attribute = value

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
