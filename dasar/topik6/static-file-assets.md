# Static File Assets

![static file](static-files.png)

## Pengertian File Assets

File asset merupakan file yang berguna untuk mendukung konten dari suatu website, misalnya file `.css` `.js` `gambar` dan sebagainya

## Permasalahan

Untuk menginclude atau menggunakan file - file ini kita tidak dapat langsung menuliskan path dari filenya, misalnya `/public/img/yolo.jpg`

**Mengapa ?** Karena apabila kita melakukannya maka express akan menganggap bahwa kita akan mengunjungi rute `/public/img/yolo.jpg` sedangkan rute tersebut tidak ada

**Ingat !** dengan express kita tidak dapat membuka file secara langsung melalui path, kita perlu menuliskan rutenya, nah bagaimana apabila kita ingin membuka atau menginclude file statis seperti `.css` `.js` `gambar`

## Solusi

Solusi dari permasalahan tersebut adalah dengan menggunakan middleware static file

```Javascript
app.use(express.static('public'))
```

dimana `public` merupakan nama folder tempat kita menyimpan file `.css` `.js` `gambar` kita

**Untuk lebih jelasnya silahkan lihat tutorial berikut**
https://www.youtube.com/watch?v=7UErZ43jzrU
