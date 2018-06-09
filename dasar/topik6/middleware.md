# Middleware

![middleware](middleware.png)

## Pengertian Middleware

Middleware merupakan teknik untuk memfilter atau mengolah request dari client yang akan menuju ke suatu rute

Salah satu contoh penerapan middleware yaitu untuk autentikasi, misalnya ada client yang ingin mengunjungi halaman data, maka middleware akan mengecek apakah client tersebut sudah login atau belum

Satu rute bisa menerapkan banyak middleware, berarti selain memeriksa autentikasi kita bisa menerapkan middleware - middleware lain

Pada express kita menggunakan kata kunci `app.use()` untuk membuat sebuah middleware

**Untuk memahami lebih lanjut tentang middleware silahkan lihat tutorial berikut**
https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498
