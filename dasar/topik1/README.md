# TOPIK 1 : PENGENALAN PEMROGRAMAN WEB

Disini akan membahas tentang dasar pemrograman web



## Cara Kerja Website

![cara-kerja-web.jpeg](cara-kerja-web.jpeg)

Sebuah aplikasi web berkomunikasi dengan perangkat lunak client menggunakan protokol HTTP.  HTTP sebagai protokol yang berbicara menggunakan response dan request. Sehingga untuk dapat menghasilkan dokumen yang ingin diakses harus melalui  siklus tersebut.

1. Client mengirim permintaan kepada server dalam bentuk **HTTP request**.
2. Apabila halaman yang diminta memerlukan data, maka server akan meminta data ke database.
3. Database akan mengembalikan data kepada server dalam bentuk JSON / QUERY / XML.
4. Selanjutnya server membungkus data tersebut menjadi HTML dan mengirimkannya kepada klien dalam bentuk **HTTP response**



## HTTP Request dan HTTP Response

**HTTP Request** merupakan sebuah **request** ( permintaan ) kepada server yang berisi perintah dan URL. Ketika client mengirim **request,** akan terdapat sebuah header yang digunakan oleh web server untuk mengetahui tugas apa yang akan dijalankan. Ketika **request** telah diterima oleh server, selanjutnya server akan menentukan jenis **response** yang akan dikembalikan kepada client. **HTTP Request** memiliki 2 metode, yaitu `GET` dan `POST`.

**HTTP Response** merupakan sebuah perintah **response** dari server ke client. Awalnya, request dari client diproses untuk selanjutnya dikembalikan kepada client dalam bentuk file HTML. 

Berikut ini adalah link untuk mempelajari lebih lanjut mengenai HTTP : 

- [https://bertzzie.com/knowledge/serverside-nodejs/ProtokolHTTP.html](https://bertzzie.com/knowledge/serverside-nodejs/ProtokolHTTP.html)
- [https://bertzzie.com/knowledge/serverside-nodejs/RequestDanResponse.html#](https://bertzzie.com/knowledge/serverside-nodejs/RequestDanResponse.html#)



## HTTP Status Code

![status-codes.gif](status-codes.gif)

**HTTP Status Code** menunjukkan respon apakah HTTP Request telah berhasil diselesaikan. 

**HTTP status Code** memiliki beberapa kategori diantaranya :

1. Informational ( 100 - 199 )
2. Successful Responses (200 - 299 )
3. Redirection Messages atau something moved (300 - 399)
4. Client Error Responses (400 - 499)
5. Server Error Responses (500 - 599).



## HTTP VERBS

![http-verbs.jpg](http-verbs.jpg)

**GET** : mengambil data dari server (READ)

**POST** : membuat data baru (CREATE)

**PUT** : mengganti file yang sudah ada dengan file yang baru 				   (UPDATE)

**PATCH** : mengupdate atau mengganti file yang sudah ada dengan file yang baru (UPDATE)

**DELETE** : Menghapus data (DELETE)

Perintah diatas lebih sering dikenal dengan istilah "CRUD".

