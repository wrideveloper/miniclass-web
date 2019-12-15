# Package.json

## 1. Penjelasan Package.json

Package.json merupakan file yang berisi informasi dari project node kita. File ini dibuat secara otomatis ketika melakukan inisiasi project node menggunakan NPM

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "hello world project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "upper-case": "^2.0.1"
  }
}
```

## 2. Properti Package.json

Berikut beberapa properti yang dimiliki oleh package.json :

- `name` merupakan nama project yang dibuat
- `version` merupakan versi project
- `description` merupakan deskripsi dari project yang dibuat
- `main` merupakan nama file utama yang digunakan
- `scripts` berisi npm script yang dapat kita jalankan
- `keywords` merupakan keywords project yang digunakan untuk mempermudah pencarian saat project di publish
- `author` merupakan nama dari pembuat project
- `license` berisi jenis lisensi yang digunakan pada project
- `dependencies` berisi nama dari package - package yang terinstall di project

## 3. NPM Script

Merupakan script yang dapat kita jalankan pada suatu project menggunakan npm. Biasanya digunakan untuk mempermudah penggunaan project

### 3.1. Membuat NPM Script

Untuk membuat sebuah npm script, kita dapat menuliskannya pada `package.json` pada properti `script`

```javascript
// package.json

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "hello world project",
  "main": "index.js",
  "scripts": {
    // tulis npm script disini
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "upper-case": "^2.0.1"
  }
}
```

Pada contoh diatas, kita membuat npm script bernama `start` yang berisi perintah untuk menjalankan file `index.js` menggunakan `node`

### 3.2. Menjalankan NPM Script

Untuk menjalankan npm script, kita dapat menggunakan perintah `npm run` diikuti dengan nama script yang telah dibuat.

```bash
# menjalan npm script
npm run <nama-script>

# menjalan script start yang sudah dibuat
npm run start
```
