## Routing pada Express JS

![Routes](routes.png)

### Penjelasan Routing

Dalam dunia pengembangan web, routing merupakan pemetaan URL - URL yang dapat diakses oleh client menggunakan method tertentu seperti `GET`, `POST`, `PUT`, `DELETE`

### Melakukan Routing dengan Express

#### 1. Routing dengan Method GET

Method ini biasanya digunakan untuk menuju ke suatu halaman atau menampilkan data pada database.

```Javascript
app.get('/', function (req, res) {
  	res.send('GET request to the homepage')
})
```

#### 2. Routing dengan Method POST

Method POST biasanya digunakan untuk menambahkan data pada database.

```Javascript
app.post('/', function (req, res) {
  	res.send('POST request to the homepage')
})
```

#### 3. Routing dengan Method PUT

Method PUT biasanya digunakan untuk mengedit data pada database.

```Javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

#### 4. Routing dengan Method DELETE

Method DELETE digunakan untuk menghapus data pada database

```Javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```
