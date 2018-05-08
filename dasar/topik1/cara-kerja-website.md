# Cara Kerja Website

![cara-kerja-web.jpeg](cara-kerja-web.jpeg)

Sebuah aplikasi web berkomunikasi dengan perangkat lunak client menggunakan protokol HTTP.  HTTP sebagai protokol yang berbicara menggunakan response dan request. Sehingga untuk dapat menghasilkan dokumen yang ingin diakses harus melalui  siklus tersebut :

1. Client mengirim permintaan kepada server dalam bentuk **HTTP request**.
2. Apabila halaman yang diminta memerlukan data, maka server akan meminta data ke database.
3. Database akan mengembalikan data kepada server dalam bentuk JSON / QUERY / XML.
4. Selanjutnya server membungkus data tersebut menjadi HTML dan mengirimkannya kepada klien dalam bentuk **HTTP response**