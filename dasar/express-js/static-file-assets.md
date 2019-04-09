# Serving Static File

<img src="static-files.png" width="150">

## Permasalahan

Untuk membuka static file yang terletak pada aplikasi express, kita tidak bisa menuliskan path nya secara langsung pada url, misalnya `http://localhost:3000/public/img/yolo.jpg`

**Mengapa ?** Karena apabila kita melakukannya maka express akan menganggap bahwa kita akan mengunjungi rute `http://localhost:3000/public/img/yolo.jpg` sedangkan rute tersebut tidak ada

## Solusi

Solusi dari permasalahan tersebut adalah dengan menggunakan middleware static file `express.static()`

Misalnya kita ingin menampilkan gambar yang terletak pada direktori `/public/img/yolo.jpg`. Pada direktori tersebut kita tau bahwa root foldernya adalah folder `public` maka script yang kita gunakan seperti berikut

```Javascript
app.use(express.static('public'))
```

Kemudian pada URL kita bisa mengetikkan `http://localhost:3000/img/yolo.jpg`, disini kita tidak perlu menuliskan folder public lagi
