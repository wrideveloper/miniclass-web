# Mengenal AJAX

**AJAX** (Asynchronous Javascript And XML) merupakan cara untuk mengirim dan menerima data ke server secara cepat tanpa perlu mereload halaman, ajax memanfaatkan objek `XMLHttpRequest` dalam javascript agar ia bisa berkomunikasi dengan server.

![ajax](ajax.png)



## Cara Kerja AJAX

![cara kerja ajax](cara-kerja-ajax.gif)

Berikut langkah - langkah bagaimana ajax dapat mengirim dan menerima data dari server tanpa perlu mereload halaman :

1. Browser membuat objek `XMLHttpRequest`
2. Browser mengirim objek `XMLHttpRequest` tersebut ke server dengan HTTP verb tertentu ( GET / POST )
3. Server menerima dan mengelola request tersebut dan membuat response yang didalamnya terdapat data yang diminta
4. Response tersebut kemudian dikirimkan kembali ke browser
5. Data yang ada di dalam response akan diekstrak oleh browser
6. Browser kemudian mengupdate beberapa bagian kecil halaman (tidak seluruh halaman) dengan data yang diterima, karena itu browser tidak perlu mereload seluruh halaman.



## Beberapa Cara untuk Membuat AJAX

Ada banyak cara untuk membuat ajax, bisa menggunakan cara lama dengan membuat manual objek `XMLHttpRequest` , atau menggunakan library yang dapat mempersingkat pembuatan AJAX

Berikut beberapa cara untuk membuat AJAX : 

1. Membuat `XMLHttpRequest` secara manual dengan javascript native - https://www.w3schools.com/xml/ajax_intro.asp
2. Menggunakan JQUERY - https://www.sitepoint.com/use-jquerys-ajax-function/
3. Menggunakan library Axios - https://github.com/axios/axios

**Catatan** : semua cara diatas tetap menggunakan `XMLHttpRequest` untuk berkomunikasi dengan server, hanya cara penulisannya saja yang berbeda 