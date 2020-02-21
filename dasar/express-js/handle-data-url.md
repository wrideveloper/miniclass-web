# Menerima Data dari URL

## 1. Penjelasan

Ketika kita mengembangkan sebuah aplikasi, terkadang kita membutuhkan sebuah data yang harus diinputkan. Sehingga output dari program tersebut dapat berbeda berdasarkan data yang diinputkan. Pada pembuatan server, kita dapat mengirim inputan tersebut melalui URL

## 2. Format Data dari URL

Ada dua format data yang dikirimkan melalui URL. yaitu url query dan url params

## 1.1. URL Query

### 1.1.1. Penjelasan URL Query

URL query merupakan string yang terletak diakhir sebuah URL yang diawali dengan tanda tanya

```
localhost:3000/?nama=budi&umur=20
```

### 1.1.2 Mengambil Data dari URL Query

Kita bisa menggunakan `req.query` untuk mengambil data dari url query

```javascript
app.get('/', function(req, res) {
  const nama = req.query.nama
  const umur = req.query.umur

  res.send('halo ' + nama + ' umur kamu ' + umur)
})
```

## 1.2. URL Params

### 1.2.1. Penjelasan URL Params

Dengan url params kita bisa memasukkan data kedalam URL dengan format yang lebih rapi daripada dengan menggunakan url query

```
localhost:3000/:nama/:umur
```

### 1.2.2. Mengambil Data dari URL Params

Kita bisa menggunakan `req.params` untuk mengambil data dari url params

```javascript
app.get('/:nama/:umur', function(req, res) {
  const nama = req.params.nama
  const umur = req.params.umur

  res.send('halo ' + nama + ' umur kamu ' + umur)
})
```
