# Link

## 1. Permasalahan

Saat membuat sebuah website, kita membutuhkan penghubung menuju file html lain atau website lain. contoh penggunaan link yang menuju file html lain adalah menu about us, beranda, dan menu menu lain dalam suatu website. Sedangkan contoh penggunaan file html yang menuju website lain adalah link video yang terletak pada website youtube, instagram, ataupun website lain yang file nya tidak dimiliki oleh pemilik dari website tersebut.

## 2. Penjelasan Link
Link pada HTML dapat digunakan untuk menghubungkan satu file HTML dengan file HTML lain atau website lain dengan menekan hyperlink yang dicantumkan.
Link di HTML dapat dibuat dengan tag `<a>` atau anchor dengan diikuti atribut `href` yang nilainya berisi alamat yang akan diakses ketika link di klik. 

## 3. Cara Membuat Link
### 3. 1 membuat link menuju file HTML lain

```html
<a href="about.html">About Us</a>
```
Untuk mencantumkan link yang berfungsi menghubungkan satu file dengan file HTML yang lain, file tujuan harus dipersiapkan terlebih dahulu lalu disimpan pada folder yang sama dengan file utama.  


### 3. 2 membuat link menuju website lain
```html
<a href="https://www.instagram.com/wri_polinema/">go to WRI Instagram</a>
```
Untuk membuat link menuju website lain, cantumkan url dari website tersebut pada atribut `href` untuk menentukan kemana kita akan diarahkan setelah mengklik link tersebut.

Berikut ini adalah penulisan syntax `Link` yang salah
```html
<a>tidak bisa diklik</a> <!-- penulisan yang salah -->
<a klik disini></a> <!-- penulisan yang salah -->
```


pada baris pertama, tag `a` yang tidak diikuti dengan `href` tidak dapat memuat link yang dapat diklik dan tampilannya akan berupa tulisan biasa. Sedangkan pada baris keempat tidak akan memunculkan tulisan apapun.

## 4. Studi Kasus
### 4. 1 Membuat tag HTML dan mengisinya dengan text formatting
```html
<html>
    <title>Belajar HTML</title>
    <body>
        <h1>pengenalan HTML</h1>
        <p><b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk membuat sebuah halaman web <br> <b>HTML</b> adalah sebuah standar yang digunakan
            secara luas untuk menampilkan halaman web.</p>
    </body>
</html>
```
pada tahap ini, buatlah tag HTML yang terdiri dari title, body berserta text formatting yang telah dipelajari pada pertemuan sebelumnya

### 4. 2 Penambahan link HTML menuju ke file HTML lain
```html
<html>
    <title>Belajar HTML</title>
    <body>
        <h1>pengenalan HTML</h1>
        <p><b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk membuat sebuah halaman web, menampilkan
            berbagai informasi di dalam sebuah
            penjelajah web Internet dan pemformatan hiperteks sederhana <br> HTML adalah sebuah standar yang digunakan
            secara luas untuk menampilkan halaman web.</p>
        <br> <a href="link.html">materi link HTML</a>
    </body>
</html>
```
tambahkan tag `<a>` dan atribut `href` yang berisi nama file dari file yang akan dituju. Jangan lupa menyertakan `namafile.extension` pada atribut href.
### 4. 3 Penambahan link HTML menuju ke website lain
```html
<html>
    <title>Belajar HTML</title>
    <body>
        <h1>pengenalan HTML</h1>
        <p><b>HTML</b> adalah sebuah <i>bahasa markah</i> yang digunakan untuk membuat sebuah halaman web, menampilkan
            berbagai informasi di dalam sebuah
            penjelajah web Internet dan pemformatan hiperteks sederhana <br> HTML adalah sebuah standar yang digunakan
            secara luas untuk menampilkan halaman web.</p>
        <br> <a href="link.html">materi link HTML</a>
        <p>penjelasan lebih lanjut dapat dilihat pada website berikut</p>
        <a href="https://www.w3schools.com/html/default.asp">w3schools website</a>
    </body>
</html>
```
tambahkan url website yang akan dituju pada atribut `href`