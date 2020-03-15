# Pengenalan CSS

## 1. Permasalahan

Sebelumnya, kita dapat membuat struktur halaman website seperti paragraf, heading, image, list, dan sebagainya menggunakan HTML. Namun untuk membuat tampilan website yang baik dan nyaman digunakan oleh user, kita juga harus melakukan styling seperti merubah warna background dan text.

## 2. Pengenalan CSS (Cascading Stylesheet)

Untuk melakukan styling pada halaman website yang sudah dibuat, kita dapat menggunakan CSS. Apabila HTML digunakan untuk menentukan struktur website, maka CSS digunakan untuk menentukan styling pada website tersebut. Misalnya :

1. Menentukan warna background dan text
2. Membuat border atau garis tepi pada suatu element HTML
3. Menentukan layout website
4. Membuat website menjadi responsive

## 3. Struktur Penulisan CSS

CSS memiliki struktur penulisan seperti berikut

```css
/* struktur penulisan : */
selector {
  property: value;
}

/* contoh : */
p {
  color: blue;
}
```

### 3.1 Selector

Langkah pertama untuk membuat styling pada CSS, yaitu menentukan element apa yang ingin kita terapkan style, dimana element tersebut kita tulis pada bagian `selector`. Pada contoh diatas, kita akan menerapkan style pada element `<p>` atau paragraf.

Untuk mengetahui jenis - jenis selector, bisa mengunjungi link berikut

https://www.w3schools.com/css/css_selectors.asp

### 3.2 Property

Langkah kedua, setelah menentukan element apa yang ingin kita terapkan style, selanjutnya kita menentukan `property` atau bagian apa yang ingin kita style dari element tersebut. Pada contoh diatas, kita akan mengubah `color` atau warna text dari element `p`

> catatan : kita dapat menuliskan lebih dari satu property pada satu selector

### 3.3 Value

Terakhir, kita dapat menuliskan nilai dari `property` pada bagian `value`. Pada contoh diatas, kita akan memberikan warna `blue` pada property `color`. Sehingga semua element `<p>` yang ada pada website akan berubah menjadi berwarna biru.

> catatan : masing - masing `property` memiliki `value` yang berbeda - beda yang dapat dipelajari pada topik - topik selanjutnya

## 4. Memasukkan CSS untuk HTML

Untuk menerapkan CSS pada file HTML yang sudah kita buat, kita dapat menggunakan salah satu dari cara berikut

### 4.1. Ditulis pada element HTML secara langsung

Setiap element HTML, pasti memiliki attribute `style`. Kita dapat langsung menuliskan CSS pada attribute `style` tersebut. Contohnya :

```html
<!-- index.html -->
<html>
  <head>
    <title>Contoh penulisan CSS</title>
  </head>
  <body>
    <h1 style="color:red">judul ini akan berwarna merah</p>
    <p style="color:blue">text ini akan berwarna biru</p>
  </body>
</html>
```

Pada contoh diatas, kita menuliskan CSS secara langsung pada element `<p>` dan `<h1>` menggunakan attribute `style`. Kelemahan dari cara ini adalah struktur website akan terlihat kotor karena terdapat CSS pada setiap elementnya.

### 4.2. Ditulis pada tag `<style>`

Selain ditulis pada masing - masing element, CSS juga dapat dituliskan pada satu tag khusus bernama `<style>` yang berada di dalam tag `<head>`. Contohnya :

```html
<!-- index.html -->
<html>
  <head>
    <title>Contoh penulisan CSS</title>
    <style>
      h1 {
        color: red;
      }
      p {
        color: blue;
      }
    </style>
    <body>
      <h1>judul ini akan berwarna merah</p>
      <p>text ini akan berwarna biru</p>
    </body>
  </head>
</html>
```

Dengan menggunakan cara ini, struktur website akan terlihat lebih rapi. Dimana semua struktur website berada di dalam tag `<body>` sedangkan semua styling terdapat pada tag `<style>`.

### 4.3. Ditulis pada file CSS

Sejauh ini, dengan menggunakan cara kedua, kita bisa fokus melihat struktur website di dalam tag `<body>`, sedangkan styling berada di dalam tag `<style>`. Namun, bagaimana apabila CSS yang kita tulis sudah memiliki puluhan hingga ratusan baris ? hal ini akan menyebabkan file HTML akan besar dan susah untuk dilihat.

Maka dari itu, kita perlu memisah CSS pada file khusus berformat `.css`. Sehingga pada file `.html` hanya berisi struktur website saja, sedangkan style nya berada pada file `.css`. Contohnya :

```html
<!-- index.html -->
<html>
  <head>
    <title>Eksternal css</title>
    <!-- untuk mengimport file css pada html menggunakan <link> -->
    <link href="index.css" rel="stylesheet" />
  </head>
  <body>
      <h1>judul ini akan berwarna merah</p>
      <p>text ini akan berwarna biru</p>
  </body>
</html>
```

```css
/* index.css */
h1 {
  color: red;
}
p {
  color: blue;
}
```

Pada contoh diatas, kita membuat struktur website pada file `index.html`, sedangkan style nya berada pada file `index.css`

> catatan : Pastikan `index.html` dan `index.css` berada pada folder yang sama. Apabila `index.css` berada pada folder yang berbeda, kita perlu menuliskan nama foldernya juga. misalnya `<link href="namaFolder/index.css" rel="stylesheet" />`
