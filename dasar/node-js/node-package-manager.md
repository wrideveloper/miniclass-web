# Node Package Manager

![npm](npm.png)

## 1. Penjelasan Node Package Manager

Node Package Manager (NPM) merupakan salah satu package manager yang digunakan untuk menginstall package node.js yang tidak disertakan saat penginstalan node.js.

## 2. Menginstall Package Menggunakan Node Package Manager

### 2.1. Inisiasi Project Node

Sebelum melakukan instalasi package, kita harus membuat project node terlebih dahulu, buatlah sebuah folder kosong kemudian jalankan perintah berikut

```bash
npm init
```

Setelah menjalankan perintah diatas, maka akan muncul file baru bernama `package.json` yang berisi informasi dari project yang dibuat

### 2.2. Menginstall Package

Gunakan perintah berikut untuk menginstall package node.js pada project yang sudah dibuat sebelumnya

```bash
npm install <package-name>

# contoh
npm install hello-world-node-package
```

Setelah melakukan penginstalan package, maka akan muncul folder baru bernama `node_modules` yang berisi script dari package yang diinstall. Daftar seluruh package dapat kita install menggunakan npm dapat ditemukan pada https://www.npmjs.com/

## 2.3. Menggunakan Package

Setelah package terinstall, maka package tersebut dapat digunakan pada project

```javascript
// index.js

// import package
const hello = require('hello-world-node-package')

// menggunakan package
hello.helloWorld() // output : Hello World!
hello.doSomethingAwesome() // output : Doing something awesome...
hello.doSomethingElse() // output : Now something else...
```

### 2.4. Uninstall Package

Gunakan perintah berikut untuk menguninstall package node.js pada project yang sudah dibuat sebelumnya

```bash
# uninstall local package
npm uninstall <package-name>
```

## 3. Referensi

**website resmi npm -** [https://www.npmjs.com/](https://www.npmjs.com/)

**dokumentasi npm -** [https://docs.npmjs.com/getting-started/what-is-npm](https://docs.npmjs.com/getting-started/what-is-npm)
