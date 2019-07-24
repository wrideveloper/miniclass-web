# Mengenal AJAX

## 1. Penjelasan

**AJAX** (Asynchronous Javascript And XML) merupakan cara untuk mengirim dan menerima data ke server secara cepat tanpa perlu mereload halaman, ajax memanfaatkan objek `XMLHttpRequest` dalam javascript agar ia bisa berkomunikasi dengan server. AJAX merupakan skill dasar yang wajib dikuasai oleh frontend developer agar dapat berkolaborasi dengan backend developer.

## 2. Cara Kerja AJAX

![cara kerja ajax](cara-kerja-ajax.gif)

Berikut langkah - langkah bagaimana ajax dapat mengirim dan menerima data dari server tanpa perlu mereload halaman :

1. Browser membuat objek `XMLHttpRequest`
2. Browser mengirim objek `XMLHttpRequest` tersebut ke server dengan HTTP verb tertentu ( GET / POST )
3. Server menerima dan mengelola request tersebut dan membuat response yang didalamnya terdapat data yang diminta
4. Response tersebut kemudian dikirimkan kembali ke browser
5. Data yang ada di dalam response akan diekstrak oleh browser
6. Browser kemudian mengupdate beberapa bagian kecil halaman (tidak seluruh halaman) dengan data yang diterima, karena itu browser tidak perlu mereload seluruh halaman.

## 3. Mengirim AJAX dengan XMLHttpRequest

Berikut cara membuat request AJAX ke server dengan menggunakan `XMLHttpRequest`

```javascript
// membuat objek XMLHttpRequest
const xhttp = new XMLHttpRequest()

// menentukan apa yang akan dilakukan setelah menerima response dari server
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4) {
    console.log(xhttp.responseText)
  }
}

// menentukan method dan tujuan
xhttp.open('GET', 'https://api.github.com/users/wrideveloper/repos')

// mengirim request
xhttp.send()
```

## 4. Mengirim AJAX dengan Library Axios

Axios merupakan library yang mempermudah kita untuk mengirimkan ajax ke server tanpa harus membuat `XMLHttpRequest` secara manual

Pertama kita perlu mengimport axios ke web page kita

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Kemudian kita bisa langsung menggunakan axios seperti berikut

```javascript
// mengirim ajax menggunakan method GET
axios
  .get('https://api.github.com/users/wrideveloper/repos')
  .then(function(response) {
    console.log(response.data)
  })

// mengirim ajax menggunakan method POST dengan menyertakan datas
axios
  .post('https://example.com', { nama: 'budi', jurusan: 'TI' })
  .then(function(response) {
    console.log(response.data)
  })
```

**Catatan** : axios tetap menggunakan `XMLHttpRequest` untuk berkomunikasi dengan server, hanya cara penulisannya saja yang
