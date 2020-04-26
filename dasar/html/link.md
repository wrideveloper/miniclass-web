# Link

## 1. Permasalahan

Saat membuat sebuah website, kita membutuhkan penghubung menuju file html lain atau website lain. Contoh penggunaan link yang menuju file html lain adalah ketika membuat menu navigasi website seperti beranda, halaman produk, kontak, tentang kami, dan menu menu lain dalam suatu website. Sedangkan contoh penggunaan link yang menuju website lain adalah ketika kita ingin mengarahkan user menuju suatu konten yang berada di luar website kita. Misalnya menuju youtube, instagram, ataupun website lain.

## 2. Penjelasan Link

Link pada HTML dapat digunakan untuk menghubungkan satu file HTML dengan file HTML lain atau website lain dengan menekan hyperlink yang dicantumkan.

## 3. Cara Membuat Link

Link di HTML dapat dibuat dengan tag `<a>` atau anchor dengan diikuti atribut `href` yang nilainya berisi alamat yang akan diakses ketika link di klik.

```html
<a href="alamat yang akan diakses">ini text yang ditampilkan</a>
```

### 3.1. Membuat link menuju file HTML lain

```html
<a href="about.html">About Us</a>
```

Untuk membuat link yang berfungsi menghubungkan satu file HTML dengan file HTML yang lain, file tujuan harus dipersiapkan terlebih dahulu lalu disimpan pada folder yang sama dengan file utama. Misalnya pada contoh diatas, apabila user menekan link `About Us` maka user akan berpindah ke file `about.html`

Apabila file tujuan terletak pada folder yang berbeda, maka nama foldernya perlu ditulis seperti berikut

```html
<a href="namaFolder/about.html">About Us</a>
```

### 3.2. Membuat link menuju website lain

```html
<a href="https://www.instagram.com/wri_polinema/">go to WRI Instagram</a>
```

Untuk membuat link menuju website lain, cantumkan url dari website tersebut pada atribut `href` untuk menentukan kemana kita akan diarahkan setelah mengklik link tersebut.

### 3.3. Contoh Penulisan Link yang Salah

Berikut ini adalah penulisan syntax `Link` yang salah

```html
<a>tidak bisa diklik</a>
<!-- penulisan yang salah -->
<a klik disini></a>
<!-- penulisan yang salah -->
```

pada baris pertama, tag `a` yang tidak diikuti dengan `href` tidak dapat memuat link yang dapat diklik dan tampilannya akan berupa tulisan biasa. Sedangkan pada baris keempat tidak akan memunculkan tulisan apapun.

## 4. Studi Kasus

Disini kita akan membuat sebuah website yang memiliki link untuk menuju file html dan website lain

### 4.1. Membuat File `index.html`

Pertama, buatlah file `index.html` yang berisi tag HTML yang terdiri dari title, body beserta text formatting yang telah dipelajari pada pertemuan sebelumnya

```html
<!-- index.html -->
<html>
  <title>Belajar HTML</title>
  <body>
    <h1>pengenalan HTML</h1>
    <p>
      <b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk
      membuat sebuah halaman web <br />
      <b>HTML</b> adalah sebuah standar yang digunakan secara luas untuk
      menampilkan halaman web.
    </p>
  </body>
</html>
```

### 4.2. Menambahkan Link HTML Menuju File HTML Lain

Tambahkan tag `<a>` dan atribut `href` yang berisi nama file dari file yang akan dituju. Misalnya menuju file `link.html`

```html
<html>
  <title>Belajar HTML</title>
  <body>
    <h1>pengenalan HTML</h1>
    <p>
      <b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk
      membuat sebuah halaman web, menampilkan berbagai informasi di dalam sebuah
      penjelajah web Internet dan pemformatan hiperteks sederhana <br />
      HTML adalah sebuah standar yang digunakan secara luas untuk menampilkan
      halaman web.
    </p>
    <a href="link.html">materi link HTML</a>
  </body>
</html>
```

### 4.3. Membuat File `link.html`

Agar link yang sudah dibuat pada langkah sebelumnya dapat digunakan, maka kita perlu membuat file tujuan dari link tersebut, yaitu `link.html`. Buatlah file baru pada folder yang sama dengan nama `link.html` dan isi dengan konten berikut

```html
<html>
  <title>Belajar HTML</title>
  <body>
    <h1>pengenalan Link</h1>
    <p>
      Link pada HTML dapat digunakan untuk menghubungkan satu file HTML dengan
      file HTML lain atau website lain dengan menekan hyperlink yang
      dicantumkan.
    </p>
    <a href="index.html">kembali</a>
  </body>
</html>
```
Untuk mencantumkan link yang berfungsi menghubungkan satu file dengan file HTML yang lain, file tujuan harus dipersiapkan terlebih dahulu lalu disimpan pada folder yang sama dengan file utama.  

Pada halaman ini kita akan menampilkan penjelasan dari link html, serta sebuah link untuk kembali ke file `index.html`

### 4.4. Menambahkan Link HTML Menuju Website Lain

Terakhir, tambahkan url website yang akan dituju pada atribut `href`. Misalnya menuju website w3schools

```html
<html>
  <title>Belajar HTML</title>
  <body>
    <h1>pengenalan HTML</h1>
    <p>
      <b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk
      membuat sebuah halaman web, menampilkan berbagai informasi di dalam sebuah
      penjelajah web Internet dan pemformatan hiperteks sederhana <br />
      HTML adalah sebuah standar yang digunakan secara luas untuk menampilkan
      halaman web.
    </p>
    <br />
    <a href="link.html">materi link HTML</a>
    <p>penjelasan lebih lanjut dapat dilihat pada website berikut</p>
    <a href="https://www.w3schools.com/html/default.asp">w3schools website</a>
  </body>
</html>
```
