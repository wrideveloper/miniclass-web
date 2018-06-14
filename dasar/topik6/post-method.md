# Post Method

## Permasalahan

Di dalam Express JS, kita tidak memiliki method post secara langsung. Artinya, kita tidak bisa membaca data yang dikirimkan oleh user melalui method post.

Dari permasalahan tersebut, maka sebuah middleware yang dapat digunakan untuk membaca data yang dikirimkan oleh user perlu diinstall terlebih dahulu. Middleware tersebut adalah `body-parser`

## Penjelasan body-parser

`body-parser` adalah suatu middleware yang berfungsi untuk membaca atau mendapatkan informasi mengenai data yang dikirimkan oleh user melalui method post.

Oleh karena itu, jika ingin membaca data yang dikirimkan oleh user, kita harus terlebih dahulu install package `body-parser`

### Instalasi body-parser

Kita dapat menginstall `body-parser` dengan perintah :
```
npm install body-parser --save
```

Sama seperti package-package lainnya, untuk dapat menggunakan middleware ini kita harus memanggilnya dengan method `require()`

### UPDATE

Untuk Express JS dengan versi diatas 4, tidak perlu menginstall `body-parser` untuk dapat membaca data dari user

## Link Terkait

Untuk mempelajari post method lebih lanjut, silahkan kunjungi link dibawah ini :

https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters#post-parameters
