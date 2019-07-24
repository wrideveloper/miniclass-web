# Task Runner

## 1. Penjelasan

**Task Runner** merupakan sebuah program yang digunakan untuk mengeksekusi beberapa tugas secara otomatis. Contoh pekerjaan yang bisa dilakukan oleh task runner yaitu :

- Minify sebuah css, js, maupun html
- Optimasi sebuah gambar
- Mengcompile [CSS Preprocessor](preprocessor-css.md) ke sebuah single file css
- Mengcompile ECMAScript
- Dan masih banyak lagi

Kita tidak perlu lagi repot - repot melakukan task diatas secara manual, biarkan task runner yang melakukannya untuk kita.

## 2. Beberapa Tool Task Runner

Ada beberapa tool yang dapat kita gunakan untuk menjalankan beberapa perintah sekaligus, yaitu :

1. [NPM Script](https://docs.npmjs.com/misc/scripts)
2. [Gulp](https://gulpjs.com/)
3. [Grunt](https://gruntjs.com/)

## 3. Penerapan Task Runner dengan NPM Script

Disini kita akan mencoba menerapkan task runner menggunakan npm script, contoh kasusnya adalah seperti berikut

1. Mengcompile sass menjadi css
2. Mengcompile ES6 menjadi ES5

### 3.1. Mengcompile SASS Menjadi CSS

Untuk mengcompile sass menjadi css, kita akan membuat sebuah npm script bernama `build-css`

```json
"script": {
  "build-css": "sass src:dist"
}
```

### 3.2. Mengcompile ES6 Menjadi ES5

Untuk mengcompile es6 menjadi es5, kita akan menambahkan sebuah npm script bernama `build-js`

```json
"script": {
  "build-css": "sass src:dist",
  "build-js": "babel src -d dist"
}
```

**Catatan** : jangan lupa untuk melakukan setup babel terlebih dahulu

### 3.3. Menjalankan Semua Task Secara Bersamaan

Sampai disini kita sudah bisa mengcompile sass dan es6, namun untuk melakukan kedua task tersebut kita harus menjalankan dua perintah, disini kita akan menambah npm script baru bernama `build` yang akan menjalankan semua task - task diatas

```json
"script": {
  "build-css": "sass src:dist",
  "build-js": "babel src -d dist",
  "build": "npm run build-css && npm run build-js"
}
```

Sekarang kita hanya perlu menjalankan perintah `npm run build` untuk mengcompile sass menjadi css dan mengcompile es6 menjadi es5
