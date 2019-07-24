# Mengenal Web Service

Selama ini kita sudah mengenal apa itu website, namun apakah kita mengenal apa itu web service ?

![web service](webservice.png)

## 1. Apa Itu Web Service

Web Service merupakan sebuah web yang bertugas untuk menerima, mengirim, dan mengelola data yang dikirimkan dari aplikasi frontend, web service tidak memiliki view atau tampilan untuk end user, inilah yang membedakan web service dengan website. Web service bisa menerima data dari beberapa aplikasi, misalnya mobile app, frontend web, desktop app, dan sebagainya.

Membuat web service merupakan modal dasar apabila kita ingin mendalami backend development, karena web service akan mendukung aplikasi frontend dalam mengolah data.

## 2. Contoh Web Service

Berikut beberapa contoh dari web service yang terdapat di internet :

1.  **Open Weather -** https://openweathermap.org/api
2.  **Dota 2 -** https://docs.opendota.com
3.  **Pokemon -** https://pokeapi.co
4.  **Instagram -** https://www.instagram.com/developer
5.  **Github -** https://developer.github.com/v3

## 3. Membuat Web Service dengan Express

Untuk membuat web service menggunakan express caranya mudah sekali, kita tinggal mengirimkan data dari database ke client menggunakan `res.send()` tanpa perlu membungkus data tersebut dengan template engine

## 4. Contoh Penerapan Web Service dengan Express

Berikut contoh proyek web service menggunakan express:
https://github.com/wrideveloper/express-mysql-webservice
