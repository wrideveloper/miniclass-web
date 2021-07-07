# NPM Script

## 1. Permasalahan

Sebelumnya, anda tau bahwa untuk membuat aplikasi yang baik, anda harus memisah perintah ke dalam beberapa file. Namun, setelah anda melakukannya, akan ada banyak file yang terdapat pada project yang dibuat, sehingga anda akan bingung file mana yang harus anda jalankan. Terlebih apabila anda sudah lama tidak membuka project tersebut

## 2. Penjelasan NPM Script

Dengan menggunakan NPM script, anda dapat membuat sebuah perintah terminal yang menjalankan file utama yang menjadi entry point.

## 3. Contoh Penggunaan NPM Script

### 3.1 Inisiasi Project Node

Pada implementasinya anda akan dihadapkan dengan banyak file dan anda nantinya pasti perlu module untuk project yang akan dibuat nantinya. Maka dari itu disini anda membuat project node yang baru didalam folder yang kosong yang nantinya akan anda buat untuk menyimpan semua file yang berhubungan dengan project anda. Ketikkan perintah berikut untuk membuat project node baru.

```bash
npm init
```

Lalu akan muncul perintah berikut, enter sampai selesai lalu ketik yes.

```bash
package name: (belajar-npm)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to E:\script\belajar-npm\package.json:

{
  "name": "belajar-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
```

## 3.2 Membuat file utama yang akan dijadikan entry point

Buat script contoh dengan nama ``index.js`` isinya sebagai contoh disini menggunakan hello world

```javascript
console.log("Hello World")
```

### 3.3 Edit file package.json

Anda sudah berhasil membuat suatu project node baru. Lalu langkah berikutnya adalah edit file package.json. Package.json ini adalah suatu metadata yang isinya mengenai informasi tentang project anda yang isinya ada nama, versi, deskripsi dll. Metadata inilah yang nantinya akan membantu anda dalam mengidentifikasi proyek anda. Dengan hanya membaca metadata anda dapat mengetahui semua informasi tantang proyek anda. Ubah script package.json seperti berikut

```javascript
{
  "name": "belajar-npm",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "node index.js" //Edit index.js sesuai dengan nama file utama anda
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### 3.4 Menjalankan script menggunakan ```npm start```

Setelah anda melakukan pengeditan ke package.json saatnya mencoba melakukan running program yang entry poinnya sudah kita buat sebelumnya dengan cara melakukan pengeditan package.json

```bash
npm start


> belajar-npm@1.0.0 start /mnt/e/script/belajar-npm
> node index.js

Hello World
```

Nah untuk Hello World sendiri di-run dari program bernama index.js yang sudah kita buat tadi. Jadi kita tinggal menjalankan perintah ```npm start``` untuk menjalankan filenya.