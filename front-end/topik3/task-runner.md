# Task Runner

## Penjelasan

**Task Runner** merupakan sebuah program yang digunakan untuk mengeksekusi beberapa tugas secara otomatis. Contoh pekerjaan yang bisa dilakukan oleh task runner yaitu :

- Minify sebuah css, js, maupun html
- Optimasi sebuah gambar
- Mengcompile [CSS Preprocessor](preprocessor-css.md) ke sebuah single file css
- dan masih banyak lagi

Kita tidak perlu lagi repot - repot melakukan task diatas secara manual, biarkan task runner yang melakukannya untuk kita.

## Beberapa Tool Task Runner

Ada beberapa tool yang dapat kita gunakan untuk menjalankan beberapa perintah sekaligus, yaitu :

1. [NPM Script](https://docs.npmjs.com/misc/scripts)
2. [Gulp](https://gulpjs.com/)
3. [Grunt](https://gruntjs.com/)

## Penerapan Task Runner dengan NPM Script

Disini kita akan mencoba menerapkan task runner menggunakan npm script, contoh kasusnya adalah seperti berikut

1. Mengcompile sass menjadi css
2. Melakukan minify pada css

### Mengcompile SASS Menjadi CSS

Untuk mengcompile sass menjadi css, kita akan membuat sebuah npm script bernama `build-css`

```json
"script": {
  "build-css": "sass index.sass"
}
```

Kemudian kita bisa menjalankan script tersebut dengan perintah `npm run build-css` sehingga file `index.css` akan muncul

Perlu diingat bahwa untuk menjalankan perintah diatas kita perlu menginstall package sass secara global terlebih dahulu menggunakan perintah `npm install -g sass`

### Melakukan Minify Pada CSS

Untuk melakukan minify pada css, kita akan membuat sebuah npm script bernama `minify-css`

```json
"script": {
  "build-css": "sass index.sass",
  "minify-css": "uglifycss index.css"
}
```

Kemudian kita bisa menjalankan script tersebut dengan perintah `npm run minify-css` sehingga file `index.css` akan terminify

Jangan lupa untuk menginstall package `uglifycss` sebelum menjalankan perintah diatas dengan menggunakan perintah `npm install -g uglifycss`

### Menjalankan NPM Script Secara Otomatis Saat File Berubah

Dengan menggunakan perintah - perintah diatas kita dapat mengcompile file sass menjadi css serta melakukan minify terhadapnya, namun kita perlu menjalankan perintah `npm run build-css` dan `npm run minify-css` setiap kali kita melakukan perubahan terhadap file sass

Untuk menjalankan kedua perintah tersebut secara otomatis setiap kali ada perubahan pada file sass, kita dapat memanfaatkan package yang bernama `onchange` yang dapat kita install dengan perintah `npm install onchange`

Setelah itu kita dapat menerapkan `onchange` dengan membuat sebuah npm script baru bernama `dev`

```json
"script": {
  "build-css": "sass index.sass",
  "minify-css": "uglifycss index.css",
  "dev": "onchange index.sass -- npm run build-css && npm run minify-css"
}
```

Sekarang kita hanya perlu menjalankan perintah `npm run dev` untuk mengcompile sass menjadi css serta melakukan minify terhadapnya
