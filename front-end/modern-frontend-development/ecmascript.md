# ECMAScript dan Babel

## 1. Penjelasan ECMAScript

**ECMAScript (disingkat ES)** merupakan standard penulisan dari scripting language seperti javascript. Dengan mengimplementasikan ECMAScript, maka syntax javascript yang kita tulis dapat dipersingkat dan lebih mudah dibaca.

## 2. Versi ECMAScript

ECMAScript memiliki banyak versi, yaitu :

1.  ES1 (tahun 1997)
2.  ES2 (tahun 1998)
3.  ES3 (tahun 1999)
4.  ES4 (tahun 2000)
5.  **ES5 (tahun 2011)**
6.  **ES6 (tahun 2015)**
7.  ES7 (tahun 2016)
8.  ES8 (tahun 2017)
9.  ES9 (tahun 2018)

Javascript yang biasa kita gunakan menggunakan standarisasi **ES5**, yang disupport oleh browser terbaru hingga browser lama, hanya saja karena ada banyak permasalahan dalam penggunaan syntaxnya, maka para developer cenderung menggunakan **ES6** atau setelahnya.

## 3. Penjelasan ES6

Seperti yang sudah dijelaskan diatas, bahwa ES6 merupakan versi dari ECMAScript yang diterbitkan pada tahun 2015, ES6 cenderung digunakan oleh developer karena memiliki syntax yang mudah dipahami, dan memberikan kemampuan baru terhadap javascript.

**Berikut Beberapa Fitur ES6**

- Variabel `let`,`const`,`var`
- Arrow Function
- Spread Operator
- Destructing
- Import , Export
- dsb

Tidak hanya ES6, versi ECMAScript setelah ES6 pun juga sering digunakan oleh developer

**Untuk mengetahui fitur - fitur yang dimiliki ES6, silahkan ikuti tutorial berikut :**

https://www.youtube.com/playlist?list=PLCZlgfAG0GXBWhs2AwMdPyKtMG2cF4YSR

## 4. Penjelasan Babel

Sayangnya, tidak semua versi browser mensupport ES6, sehingga sebelum kita mendeploy sebuah website ada baiknya kita perlu merubah semua syntax ES6 menjadi ES5

Babel merupakan compiler yang dapat merubah syntax ES6 menjadi ES5 yang disupport oleh browser baru dan browser lama.

## 5. Setup Babel

### 5.1. Buat File Javascript yang Akan Dicompile

```javascript
// src/index.js
const nama = "amir"
console.log(`nama saya ${nama}`)
```

File ini merupakan file javascript yang berisi syntax ES6 yang nantinya akan dicompile menjadi ES5

### 5.2. Install Babel

```bash
npm install @babel/core @babel/cli
```

### 5.3. Setup Babel Preset

Preset digunakan untuk menentukan versi ecmascript berapakah yang akan dicompile oleh babel, preset yang biasa digunakan adalah `preset-env` yang dapat mengcompile ECMAScript versi 6 keatas

**Install Preset**

```bash
npm install @babel/preset-env
```

**Menerapkan Preset**

Untuk menerapkan preset, maka kita perlu membuat file bernama `.babelrc` yang isinya adalah sebagai berikut

```json
{
  "presets": ["@babel/preset-env"]
}
```

### 5.4. Compile

Langkah terakhir kita tinggal mengcompile file javascript yang berisi syntax es6 menjadi syntax es5 dengan menjalankan perintah berikut pada terminal

```bash
babel src -d lib
```

`src` merupakan nama folder letak file javascript yang berisi syntax es6 berada, sedangkan `lib` merupakan folder tujuan file javascript yang sudah tercompile
