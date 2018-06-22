# Metode Autentikasi Session

![](metode-autentikasi-session.jpg)

## Penjelasan Session

**Session** adalah waktu yang dihabiskan oleh user saat sedang membuka sebuah website. Session ini disimpan di sebuah **cookie**, tepatnya **Session Cookie**

**Cookie** adalah tempat menyimpan informasi user yang telah log in.

## Autentikasi dengan Session (Cookie)

HTTP adalah **_stateless_**, **_stateless_** disini berarti HTTP tidak mengetahui request - request yang sebelumnya telah dilakukan, sebagai contoh user melakukan log in dan melakukan request, ketika request tersebut telah dilaksanakan dan user ingin melakukan request lagi, user harus melakukan proses login sekali lagi.

**Solusi** : Menggunakan autentikasi dengan Session/Cookie. Cookie akan menyimpan informasi log in dari user sehingga ketika melakukan request baru, user tidak perlu melakukan log in lagi

## Langkah - langkah Autentikasi dengan Session (Cookie)

1.  User melakukan Log in, dan request pergi dari web browser ke server.
2.  Server mengecek informasi login user, mengotentikasikannya, dan mengset cookies ke web browser. (Server juga menyimpan session tadi di memory/database)
3.  Cookies yang telah disimpan tadi akan digunakan ketika melakukan request.
4.  Server menerima request dan menggunakan cookies tadi untuk mengotentikasi user dan mengembalikan data yang direquest.
5.  Ketika user log out, web browser akan menghapus cookies. (cookies juga dapat di set waktu expiresnya agar jika user lupa log out, session akan lenyap dengan sendirinya)

**Untuk belajar tentang autentikasi dengan session dapat mengunjungi**
- https://hackernoon.com/how-do-you-authenticate-mate-f2b70904cc3a
- https://medium.com/@piraveenaparalogarajah/sessions-and-cookies-2c0919552f29