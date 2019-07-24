# Template Engine

Sebelumnya kita sudah mempelajari bagaimana menerima request dan memberikan respond berupa teks ke client, namun bagaimana apabila kita ingin memberikan respond berupa data yang dimasukkan kedalam html ? caranya adalah menggunakan template engine

![template-engine](template-engine.png)

## 1. Penjelasan Template Engine

Template Engine merupakan sebuah tool yang digunakan untuk memasukkan data kedalam sebuah halaman html

## 2. Cara Menggunakan Template Engine Dengan Express

### 2.1.  Install template engine

Ada berbagai macam jenis template engine yang dapat digunakan, berikut contoh instalasi salah satu template engine yang bernama `pug`

```
npm install --save pug
```

### 2.2. Mengeset template engine yang akan digunakan

```Javascript
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
```

### 2.3  Letakkan template di folder views

Selanjutnya, kita harus meletakkan file - file yang akan digunakan sebagai view pada folder `views`

### 2.4 Render Template

```Javascript
res.render('namaTemplate', {data})
```

## 3. Beberapa Contoh Template Engine

Berikut contoh - contoh template engine yang dapat digunakan dengan express js :

### 3.1. Pug

[Dokumentasi](https://pugjs.org/api/getting-started.html)

[Tutorial](https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1)

[CheatSheet](https://devhints.io/pug)

### 3.2. EJS

[Dokumentasi](http://ejs.co/#docs)

[Tutorial](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
