# Pengenalan HTML

## 1. Permasalahan
Bagi seorang pemula, untuk membuat website mungkin masih belum memahami struktur website dengan baik. Membuat website berdasarkan struktur website perlu dilakukan karena dapat membantu ketika mengatur komponen dalam website.  Untuk itu, langkah pertama sebelum membuat website adalah menentukan struktur dari website yang ingin kita buat seperti bagian header, body, content, menu, footer, dan lain-lain.


## 2. Penjelasan Materi Sebagai Solusi
Untuk membantu dalam menentukan struktur website, kita bisa menggunakan HTML. HTML (Hypertext Markup Language) adalah satu dari banyak bahasa markup yang digunakan untuk menentukan struktur dari website yang akan kita buat. Di dalam HTML terdapat syntax yang bisa digunakan untuk menjadi acuan dalam menentukan struktur website sehingga kita bisa menentukan letak header, body, content, menu, footer dengan mudah.

## 3. Penjelasan Detail Materi HTML
Di dalam penggunaan HTML, ada 4 tag dasar yang perlu kita pahami, antara lain:

```html
<html>   </html>
```
Tag tersebut digunkan untuk mengawali dokumen HTML. Semua kode HTML yang akan dibuat harus dimasukkan dalam tag tersebut.

```html
<head>   </head>
```
Tag `<head>` ditulis dibawah tag `<html>`. Tag ini digunakan untuk menyimpan informasi dari website yang kita buat.

```html
<title>   </title>
```
Tag `<title>` ditulis didalam tag `<head>`. Tag ini membawa salah satu informasi untuk tag `<head>`. Title akan menampilkan judul dari website yang akan dibuat di halaman web browser.
```html
<body>   </body>
```
Tag `<body>` ditulis di bawah tag head. Tag body merupakan tag pembukan dar badan dari dokumen HTML. Tag `<body>` umumnya berisikan tag-tag yang lain seperti tag `<h1>` dan tag `<p>` .

### Secara Keseluruhan, Penulisan Tag Untuk Struktur Dasar HTML Sebagai Berikut:

```html
<!DOCTYPE HTML>
<HTML>
  <head>
    <title></title>
  </head>

  <body>
		
  </body>
</HTML>
```

## 4. Studi Kasus
Pada studi kasus kali ini, kita akan mencoba mengimplementasikan struktur dasar HTML diatas. Ikuti langkah berikut ini:
1. Buka Visual Studio Code atau aplikasi Text Editor yang lain. 
2. Buatlah file HTML di dalam Visual Studio Code dengan nama "Pengenalan-HTML".
3. Tulis kode program di bawah ini dalam file "Pengenalan-HTML" tersebut.
```html
<!DOCTYPE HTML>
<HTML>
  <head>
     <title></title>
  </head>

  <body>
  </body>
</HTML>
``` 
4. Tambahkan nama judul didalam tag ```<title>```.
```html
<!DOCTYPE HTML>
<HTML>
  <head>
     <title>Belajar HTML</title>
  </head>

  <body>
  </body>
</HTML>
```  
5. Lalu di dalam tag `<body>`, tambahkan tag ```<h1>``` untuk heading dan tag ```<p>``` untuk paragraf. kalian bisa ini kedua tag tersebut dengan kalimat atau paragraf seperti yang ada di bawah ini.
```html
<!DOCTYPE HTML>
<HTML>
  <head>
    <title>Belajar HTML</title>
  </head>
  <body>
    <h1>Apasih HTML itu??</h1>
    <p> HyperText Markup Language atau yang lebih akrab dikenal HTML adalah bahasa pemrograman atau komputer yang digunakan untuk membuat suatu website. “HyperText” mengacu pada Hyperlink yang ada pada page HTML, sedangkan “Markup Language” melambangkan cara suatu Tags digunakan untuk mendefinisikan layout atau desain suatu page dan element-element didalamnya.</p>
  </body>
</HTML>
```  
6. CRTL+S file HTML "Pengenalan-HTML" kalian lalu buka file tersebut di web browser. Akan muncul website dengan judul "Belajar Website" dengan konten yang sudah di buat sebelumnya.








