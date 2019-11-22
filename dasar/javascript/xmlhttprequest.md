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
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    // tampilkan response dari server saat request berhasil
    console.log(xhttp.responseText)
  } else {
    // lakukan sesuatu ketika request gagal
  }
}
```

### 2.4 Mengirim Request

```javascript
// index.js

var xhttp = new XMLHttpRequest()
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users')

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    console.log(xhttp.responseText)
  } else {
    // lakukan sesuatu ketika request gagal
  }
}

// mengirim request ke server
xhttp.send()
```
