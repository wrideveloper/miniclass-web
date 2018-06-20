# Cross Origin Resource Sharing

![](cross-origin-resource-sharing.jpg)

## Penjelasan Cross Origin Resource Sharing
**Cross Origin Resource Sharing** (CORS) merupakan sebuah mekanisme yang menggunakan **HTTP headers** untuk memberi tahu browser bahwa sebuah aplikasi yang sedang berjalan di sebuah **origin**(domain/port) telah mempunyai izin untuk mengakses resources dari server yang berada di **origin**(domain/port) lain.

Contohnya Cross-Origin Request `http://localhost:3000` merupakan backend dan telah menyediakan web service, dan `http://localhost:4200` adalah frontend yang nantinya memerlukan data dari backend.

Karena masalah keamanan, secara default Browser melarang Cross-Origin Request. Sehingga diperlukan **CORS** agar sebuah Cross-Origin Request dapat berjalan.

**Untuk mengetahui CORS lebih lanjut dapat mengunjungi**
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://www.codecademy.com/articles/what-is-cors