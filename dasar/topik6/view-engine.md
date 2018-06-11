# View Engine

Apakah kalian merasa terganggu melihat file html kalian yang berantakan atau terlalu panjang ? padahal hanya untuk menampilkan halaman sederhana, kalau iya disini kita akan mempelajari yang namanya view engine.

![view-engine](view-engine.png)

## Penjelasan View Engine

**View Engine** merupakan sebuah tool yang dapat memudahkan kita menulis sebuah tampilan web menjadi lebih sederhana, karena dengan view engine kita dapat menyingkat penulisan syntax html yang banyak menjadi lebih sedikit.

## Cara Menggunakan View Engine Dengan Express

1.  Install view engine yang diinginkan, misalnya pug
    ```
    npm install --save pug
    ```

2.  Mengeset view engine yang akan digunakan, misalnya pug
    ```
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')
    ```

3.  Letakkan view di folder views

4.  Untuk merender view, gunakan syntax berikut
    ```
    res.render('namaView', {data})
    ```

## Beberapa Contoh View Engine

Berikut contoh - contoh view engine yang dapat digunakan dengan express js :

### 1. [Pug](https://pugjs.org)

**Dokumentasi**

[https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)

**Tutorial**

- [https://www.youtube.com/watch?v=cddghkeGAdU](https://www.youtube.com/watch?v=cddghkeGAdU)
- [https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1](https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1)

**CheatSheet**

[https://devhints.io/pug](https://devhints.io/pug)

### 2. [EJS](http://ejs.co/)

**Dokumentasi**

[http://ejs.co/#docs](http://ejs.co/#docs)

**Tutorial**

- [https://scotch.io/tutorials/use-ejs-to-view-your-node-application](https://scotch.io/tutorials/use-ejs-to-view-your-node-application)
- [https://www.youtube.com/watch?v=EYKjBJDPvEU](https://www.youtube.com/watch?v=EYKjBJDPvEU)
