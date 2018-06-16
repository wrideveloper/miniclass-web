## Routing pada Express JS

![Routes](routes.png)

## Pengertian Routing

Routing merupakan suatu metode untuk menentukan bagaimana aplikasi merespon permintaan _client_, dimana permintaannya menggunakan URL dengan method GET, POST, PUT, dan sebagainya. Routing digunakan untuk memetakan atau mengatur kesesuaian URL dengan konten yang akan ditampilkan agar bisa mengakses suatu halaman javascript.

## Permasalahan

Pada express untuk mengakses suatu halaman javascript kita tidak bisa membuka filenya secara langsung di browser, tapi dibutuhkan suatu URL yang mengacu ke file tersebut. Lalu bagaimana cara mengakses file javascript menggunakan URL dengan _request_ yang kita inginkan

## Solusi

Solusi dari permasalahan tersebut adalah dengan menggunakan routing, dimana routing tersebut bisa menggunakan HTTP Request method. Berikut ini method yang sering digunakan pada routing express js:

**1. GET**

```Javascript
app.get('/', function (req, res) {
  	res.send('GET request to the homepage')
})
```

Method ini biasanya digunakan untuk menuju ke suatu halaman atau menampilkan data pada database.

**2. POST**

```Javascript
app.post('/', function (req, res) {
  	res.send('POST request to the homepage')
})
```

Method POST biasanya digunakan untuk submit data pada form untuk ditambahkan di database.

**3. PUT**

```Javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

Method PUT biasanya digunakan untuk mengedit data pada database.

**4. DELETE**

```Javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

Method DELETE digunakan untuk menghapus data.

**Agar lebih paham mengenai routing, silahkan pelajari tutorial berikut ini:**

Routing Express: [https://www.youtube.com/watch?v=Ba1_zIoerp4](https://www.youtube.com/watch?v=Ba1_zIoerp4)
