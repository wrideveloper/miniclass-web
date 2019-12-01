# Node.js

![nodejs](nodejs.png)

## 1. Penjelasan Node.js

Node.js merupakan runtime environment javascript yang membuat javascript dapat berjalan di server

## 2. Install Node.js

### 2.1. Windows

Download instalasi node.js untuk windows pada link berikut :

https://nodejs.org/en/download/

### 2.2. Ubuntu

Gunakan perintah berikut untuk menginstall node.js versi 13 pada ubuntu

```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt install nodejs
```

## 3. Hello World

### 3.1. Membuat Script Node.js

Untuk membuat script node.js, buatlah sebuah file dengan ekstensi `.js`, misalnya `index.js`

```javascript
// index.js

console.log('hello world')
```

### 3.2. Menjalankan Script Node.js

Kemudian untuk menjalankan script tersebut, gunakanlah perintah `node`

```bash
node index.js
```
