# Pengenalan HTML

## 1. Permasalahan

Website merupakan kumpulan dari beberapa halaman yang dapat diakses melalui internet. Dimana pada masing - masing halaman terdiri dari beberapa bagian seperti header, body, content, dan footer. Apabila bagian - bagian tersebut digabung, akan membentuk sebuah struktur website yang utuh. Maka dari itu, langkah pertama untuk membuat website adalah menentukan struktur dari website yang ingin kita buat.

## 2. Penjelasan HTML

Untuk membantu dalam menentukan struktur website, kita bisa menggunakan HTML. HTML (Hypertext Markup Language) adalah satu dari banyak bahasa markup yang digunakan untuk menentukan struktur dari website yang akan kita buat. Di dalam HTML terdapat syntax yang bisa digunakan untuk menjadi acuan dalam menentukan struktur website sehingga kita bisa menentukan letak header, body, content, footer dengan mudah.

## 3. Penjelasan Struktur Dasar HTML

HTML memiliki 4 tag dasar yang perlu kita pahami, antara lain

### 3.1. Tag `<html>`

```html
<html></html>
```

Tag tersebut digunakan untuk mengawali dokumen HTML. Semua kode HTML yang akan dibuat harus dimasukkan dalam tag tersebut.

### 3.2. Tag `<head>`

```html
<head></head>
```

Tag `<head>` ditulis di dalam tag `<html>`. Tag ini digunakan untuk menyimpan informasi dari website yang kita buat.

### 3.3. Tag `<title>`

```html
<title></title>
```

Tag `<title>` ditulis di dalam tag `<head>`. Tag `<title>` akan menampilkan judul dari website yang akan ditampilkan pada tab browser.

### 3.4. Tag `<body>`

```html
<body></body>
```

Tag `<body>` ditulis di bawah tag head. Tag `<body>` merupakan tag pembuka dari badan dari dokumen HTML. Tag `<body>` nantinya akan berisi konten dari website kita

### 3.5. Struktur Dasar Secara Keseluruhan

Berikut struktur dasar dari HTML secara keseluruhan

```html
<html>
  <head>
    <title>Judul website</title>
  </head>
  <body>
    konten website
  </body>
</html>
```

## 4. Contoh Kasus

Pada studi kasus kali ini, kita akan mencoba mengimplementasikan struktur dasar HTML diatas dengan membuat sebuah website sederhana. Ikuti langkah berikut ini:

### 4.1. Membuat File HTML

Pertama, buatlah file HTML baru bernama `pengenalan.html`, perlu diingat bahwa semua file HTML harus berformat `.html`

### 4.2. Menulis Struktur Dasar HTML

Selanjutnya, kita perlu membuat struktur dasar HTML. Tulis kode program di bawah ini dalam file `pengenalan.html`

```html
<html>
  <head>
    <title></title>
  </head>

  <body></body>
</html>
```

### 4.3. Menambahkan Judul Website

Tambahkan judul website di dalam tag `<title>` agar user tau tentang apa website yang kita buat

```html
<html>
  <head>
    <title>Belajar HTML</title>
  </head>

  <body></body>
</html>
```

### 4.4. Menambahkan Konten Website

Untuk menambahkan konten dari website, kita perlu menuliskannya di dalam tag `<body>`.
Disini kita akan menggunakan tag `<h1>` untuk membuat heading dan tag `<p>` untuk membuat paragraf. Kalian bisa isi kedua tag tersebut dengan kalimat seperti yang ada di bawah ini.

```html
<html>
  <head>
    <title>Belajar HTML</title>
  </head>
  <body>
    <h1>Apasih HTML itu??</h1>
    <p>
      HyperText Markup Language atau yang lebih akrab dikenal HTML adalah bahasa
      pemrograman atau komputer yang digunakan untuk membuat suatu website.
      “HyperText” mengacu pada Hyperlink yang ada pada page HTML, sedangkan
      “Markup Language” melambangkan cara suatu Tags digunakan untuk
      mendefinisikan layout atau desain suatu page dan element-element
      didalamnya.
    </p>
  </body>
</html>
```

### 4.5. Simpan Perubahan

Simpan perubahan yang dilakukan kemudian buka file tersebut di web browser. Akan muncul website dengan judul "Belajar Website" dengan konten yang sudah dibuat sebelumnya.
