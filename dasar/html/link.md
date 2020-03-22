# Link

## 1. Permasalahan

saat membuat sebuah website, kita membutuhkan penghubung menuju file html lain atau website lain.

## 2. Penjelasan Link
Link pada HTML dapat digunakan untuk menghubungkan satu file HTML dengan file HTML lain atau website lain dengan menekan hyperlink yang dicantumkan.
Link di HTML dapat dibuat dengan tag `<a>` atau anchor dengan diikuti atribut `href` yang nilainya berisi alamat yang akan diakses ketika link di klik. 

## 3. Cara Membuat Link

```html
<a href="https://www.youtube.com/"> youtube</a>
<a href="belajar.html">file lain</a>
<a>tidak bisa diklik</a> <!-- penulisan yang salah -->
<a klik disini></a> <!-- penulisan yang salah -->
```
untuk link yang berfungsi menghubungkan satu file dengan file yang lain seperti baris kedua, file tujuan harus dipersiapkan terlebih dahulu lalu disimpan pada folder yang sama dengan file utama. jangan lupa menyertakan `namafile.extension` pada atribut href. 

pada baris ketiga, tag `a` yang tidak diikuti dengan `href` tidak dapat memuat link yang dapat diklik dan tampilannya akan berupa tulisan biasa. Sedangkan pada baris keempat tidak akan memunculkan tulisan apapun.

