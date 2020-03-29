# Pengenalan HTML

## 1. Permasalahan
Website merupakan kumpulan dari beberapa halaman yang dapat diakses melalui internet. Dimana pada masing - masing halaman terdiri dari beberapa bagian seperti header, body, content, dan footer. Apabila bagian - bagian tersebut digabung, akan membentuk sebuah struktur website yang utuh.  Maka dari itu, langkah pertama untuk membuat website adalah menentukan struktur dari website yang ingin kita buat.


## 2. Penjelasan HTML
Untuk membantu dalam menentukan struktur website, kita bisa menggunakan HTML. HTML (Hypertext Markup Language) adalah satu dari banyak bahasa markup yang digunakan untuk menentukan struktur dari website yang akan kita buat. Di dalam HTML terdapat syntax yang bisa digunakan untuk menjadi acuan dalam menentukan struktur website sehingga kita bisa menentukan letak header, body, content, footer dengan mudah.

## 3. Penjelasan Struktur Dasar HTML
Di dalam penggunaan HTML, ada 4 tag dasar yang perlu kita pahami, antara lain:

```html 
<html>   </html>
```
Tag tersebut digunakan untuk mengawali dokumen HTML. Semua kode HTML yang akan dibuat harus dimasukkan dalam tag tersebut.

```html
<head>   </head>
```
Tag `<head>` ditulis di bawah tag `<html>`. Tag ini digunakan untuk menyimpan informasi dari website yang kita buat.

```html
<title>   </title>
```
Tag `<title>` ditulis di dalam tag `<head>`. Tag ini membawa salah satu informasi untuk tag `<head>`. Title akan menampilkan judul dari website yang akan dibuat di halaman web browser.
```html
<body>   </body>
```
Tag `<body>` ditulis di bawah tag head. Tag `<body>` merupakan tag pembuka dari badan dari dokumen HTML. Tag `<body>` umumnya berisikan tag-tag yang lain seperti tag `<h1>` dan tag `<p>` .

### Secara Keseluruhan, Penulisan Tag Untuk Struktur Dasar HTML Sebagai Berikut:

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title></title>
  </head>

  <body>
		
  </body>
</html>
```

## 4. Studi Kasus
Pada studi kasus kali ini, kita akan mencoba mengimplementasikan struktur dasar HTML diatas. Ikuti langkah berikut ini:

1. Buatlah file HTML di dalam Visual Studio Code aplikasi Text Editor yang lain dengan nama "pengenalan.html".
2. Tulis kode program di bawah ini dalam file "pengenalan.html" tersebut.
```html
<!DOCTYPE HTML>
<html>
  <head>
     <title></title>
  </head>

  <body>
  </body>
</html>
``` 
3. Tambahkan nama judul di dalam tag `<title>`.
```html
<!DOCTYPE HTML>
<html>
  <head>
     <title>Belajar HTML</title>
  </head>

  <body>
  </body>
</html>
```  
4. Lalu di dalam tag `<body>`, tambahkan tag `<h1>` untuk heading dan tag `<p>` untuk paragraf. kalian bisa isi kedua tag tersebut dengan kalimat atau paragraf seperti yang ada di bawah ini.
```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>Belajar HTML</title>
  </head>
  <body>
    <h1>Apasih HTML itu??</h1>
    <p> HyperText Markup Language atau yang lebih akrab dikenal HTML adalah bahasa pemrograman atau komputer yang digunakan untuk membuat suatu website. “HyperText” mengacu pada Hyperlink yang ada pada page HTML, sedangkan “Markup Language” melambangkan cara suatu Tags digunakan untuk mendefinisikan layout atau desain suatu page dan element-element didalamnya.</p>
  </body>
</html>
```  
5. Simpan perubahan yang dilakukan kemudian buka file tersebut di web browser. Akan muncul website dengan judul "Belajar Website" dengan konten yang sudah dibuat sebelumnya.