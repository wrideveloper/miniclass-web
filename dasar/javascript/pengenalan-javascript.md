# Pengenalan Javascript

![pengenalan-javascript](pengenalan-javascript.gif)

## 1. Penjelasan Javascript

**Javascript** (JS) merupakan bahasa pemrograman yang biasa digunakan bersama dengan HTML dan CSS untuk menambahkan fitur interaktif pada website. Misalnya :

- Menampilkan pesan apabila tombol ditekan
- Mengubah tampilan apabila tombol ditekan
- Mengolah teks yang dimasukkan user
- Dll

## 2. Cara Menggunakan Javascript

## 2.1 Embed HTML

Kita dapat langsung menulis script javascript pada file html, caranya dengan menggunakan tag `script`

```html
<!-- index.html -->

<html>
  <head>
    <title>Belajar Javascript</title>
  </head>

  <body>
    <!-- menulis javascript didalam html -->
    <script>
      console.log('hello world')
    </script>
  </body>
</html>
```

## 2.2 Eksternal Javascript

Kita juga dapat menuliskan file javascript diluar file html, pertama kita harus membuat file javascript kemudian mengimport-nya ke file html

### 2.2.1 Membuat File Javascript

Pertama, buatlah file javascript dengan ekstensi `.js`, misalnya `index.js`

```javascript
// index.js

console.log('hello world')
```

### 2.2.2 Import File Javascript ke HTML

Kemudian, import file javascript yang sudah dibuat ke html, hal ini dapat dilakukan dengan menggunakan tag `script`, dengan menambahkan attribute `src` yang berisi direktori dan nama file dari file javascript yang akan kita import

```html
<!-- index.html -->

<html>
  <head>
    <title>Belajar Javascript</title>
  </head>

  <body>
    <!-- import file javascript ke html -->
    <script src="index.js"></script>
  </body>
</html>
```

## 3. Referensi Untuk Mempelajari Javascript

- [**w3school**](https://www.w3schools.com/js/default.asp)
- [**Petanikode**](https://www.petanikode.com/tutorial/javascript/)
- [**freecodecamp**](https://www.freecodecamp.org/challenges/comment-your-javascript-code)
