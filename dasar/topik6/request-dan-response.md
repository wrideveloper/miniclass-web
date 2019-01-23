# Request dan Response

![request-response](request-response.png)

## Request

Request berisi data yang dikirimkan oleh client kepada server, biasanya data dikirim dari client lewat URL menggunakan URL Query atau URL Params

### 1. URL Query

#### Penjelasan URL Query

URL query merupakan string yang terletak diakhir sebuah URL yang diawali dengan tanda tanya

```
github.com/?user=wrideveloper&repo=miniclass-web
```

#### Mengambil Data dari URL Query

Kita bisa menggunakan `req.query` untuk mengambil data dari url query

```javascript
app.get("/?user=wrideveloper&repo=miniclass-web", function(req, res) {
  const user = req.query.user
  const repo = req.query.repo
})
```

### 2. URL Params

#### Penjelasan URL Params

Dengan url params kita bisa memasukkan data kedalam URL dengan cara yang lebih rapi daripada dengan menggunakan url query karena kita bisa menentukan sendiri pola url yang kita inginkan

```
github.com/:user/:repo
```

#### Mengambil Data dari URL Params

Kita bisa menggunakan `req.params` untuk mengambil data dari url params

```javascript
app.get("/:user/:repo", function(req, res) {
  const user = req.params.user
  const repo = req.params.repo
})
```

## Response

Response merupakan data yang diberikan oleh server kepada client, ada beberapa cara yang dapat digunakan untuk mengirim response kepada client

### 1. Send

`res.send()` digunakan untuk mengirimkan sebuah data kepada client secara mentah (tidak dibungkus kedalam sebuah view)

```javascript
app.get("/", function(req, res) {
  res.send("hello world")
})
```

### 2. Render

`res.render()` digunakan untuk mengirimkan sebuah data yang akan dibungkus kedalam sebuah tampilan HTML terlebih dahulu

```Javascript
app.get("/", function(req, res) {
  res.render('namaView', {data})
})
```

untuk menggunakan `res.render()` kita perlu mempersiapkan template engine terlebih yang akan digunakan terlebih dahulu
