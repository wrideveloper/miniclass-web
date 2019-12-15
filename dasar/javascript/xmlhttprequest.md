# XML Http Request

## 1. Penjelasan XML Http REQUEST

`XMLHttpRequest` merupakan sebuah objek javascript yang digunakan untuk berkomunikasi dengan server

## 2. Cara Menggunakan XML Http Request

Berikut cara membuat request ke server menggunakan `XMLHttpRequest`

### 2.1 Membuat Objek XML Http Request

```javascript
// index.js

// membuat objek XMLHttpRequest
var xhttp = new XMLHttpRequest()
```

### 2.2 Menentukan URL Server

```javascript
// index.js

var xhttp = new XMLHttpRequest()

// menentukan method dan tujuan
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users')
```

### 2.3 Membuat Event Handler

```javascript
// index.js

var xhttp = new XMLHttpRequest()
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users')

// menentukan apa yang akan dilakukan setelah menerima response dari server
xhttp.onload = function() {
  console.log(xhttp.responseText)
}
```

### 2.4 Mengirim Request

```javascript
// index.js

var xhttp = new XMLHttpRequest()
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users')

xhttp.onload = function() {
  console.log(xhttp.responseText)
}

// mengirim request ke server
xhttp.send()
```

## 3. Mengirim JSON ke Server

```javascript
// index.js

var xhttp = new XMLHttpRequest()
xhttp.open('POST', 'https://jsonplaceholder.typicode.com/users')

xhttp.onload = function() {
  console.log(xhttp.responseText)
}

// set content type sebagai json
xhttp.setRequestHeader('Content-Type', 'application/json')

// mengirim json ke server
xhttp.send(JSON.stringify({ name: 'aka', phone: '085674567678' }))
```
