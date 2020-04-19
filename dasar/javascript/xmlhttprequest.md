# Fecth Api

## 1. Permasalahan

terkadang dalam membuat suatu program kita akan bekerja secara terpisah antara backend dan frontend, hal ini membuat kita harus mencari jalan lain untuk menyambungkan data yang ada pada backend menuju frontend, dan javascript sendiri memiliki fitur bawaan yaitu Fecth Api.

## 2. Pengertian

Fecth Api merupakan fitur yang ada pada bahasa javascript yang berfungsi sebagai alat penghubung data dari backend agar dapat diolah oleh frontend.

untuk mengolah data dari backend maka kita perlu memahami API(Application Programming Interface) terlebih dahulu, API merupakan bentuk data yang telah dibuat oleh backend agar frontend bisa mengolah data tersebut.

## Contoh Data API
![Alternate text](https://user-images.githubusercontent.com/36991049/79677375-d30fa580-821a-11ea-8fec-5db0428c5611.PNG)


## 3. Contoh Kasus

pada percobaan kali ini kita akan melakukan implementasi Fecth Api Javascript

## Langkah Pengerjaan

1. Pertama buat file baru yaitu file.html file ini dibuat untuk menampilkan hasil data yang kita buat

```html
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h2>Belajar Fetch Api</h2>
        <script src="index.js"></script>
    </body>
</html>
```

2. Kedua kita perlu membuat file baru yaitu file.js untuk melakukan percobaan Fecth API,
   pada dasarnya Fetch API sendiri memiliki beberapa perintah yaitu :
   - GET    : Mengambil data dari backend
   - POST   : Mengirim data ke backend
   - PUT    : Mengubah data di backend
   - DELETE : Menghapus data di backend

    pada kesempatan ini kita akan belajar GET dan juga POST

### GET

```js
// fetch('Url_api_yang_ingin_diakses', {
//     method: 'perintah'                   // isi dengan 1 perintah seperti diatas        
// }).then(res => res.json())               // buat variable lalu kembalikan dalam bentuk json        
//     .then(data => console.log(data));    // cetak data untuk mengetahui hasil

  fetch('https://aka-contact-backend.herokuapp.com/contact', {
    method: 'GET'
}).then(res => res.json())
    .then(data => console.log(data));
```

langkah berikutnya jalankan file html pada browser lalu click kanan pada browser pilih inspect element, lalu pilih kolom console untuk melihat hasil dari script yang telah kita buat 

## Hasil
![Alternate text](https://user-images.githubusercontent.com/36991049/79677955-70b9a380-8220-11ea-81d3-aad63d831e12.PNG)



### POST
untuk percobaan ini kita masih menggunakan file yang sama,namun akan ada sedikit perbedaan format pada file.js

```js
// fetch('Url_api_yang_ingin_diakses', {
//     method: 'perintah'                        // isi dengan 1 perintah seperti diatas     
//     headers: {
//         'Content-Type': 'application/json'   // untuk mengatur format pengiriman
//     }   
//     body : {                                 // untuk isi dari body ini ditentukan dari endpoint yang  
//                                                 telah dibuat
//      "key_data" : value
//    }
// }).then(res => res.json())               // buat variable lalu kembalikan dalam bentuk json        
//     .then(data => console.log(data));    // cetak data untuk mengetahui hasil

 fetch('https://aka-contact-backend.herokuapp.com/contact', {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Robert Dasilva",
        phone: "082312321321"
    })
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"));
```

langkah berikutnya jalankan file html pada browser lalu click kanan pada browser pilih inspect element, lalu pilih kolom console untuk melihat hasil dari script yang telah kita buat 

## Hasil
![Alternate text](https://user-images.githubusercontent.com/36991049/79678104-f7bb4b80-8221-11ea-8947-1c8e807ce2aa.PNG)

untuk melakukan pengecekan data yang telah kita kirim kita dapat menjalankan kembali fungsi get yang telah kita buat sebelumnya, atau kita juga melihat hasil yang kita buat tadi dengan menggunakan aplikasi yaitu :
- Postman  : https://www.postman.com/downloads/
- Insomnia : https://insomnia.rest/download/

