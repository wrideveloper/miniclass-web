# Metode Autentikasi Token

![](metode-autentikasi-token.jpg)

## Penjelasan Token

**Token** disini merupakan sebuah random string.

## JSON Web Token

**JSON Web Token** (JWT) secara singkat adalah sebagian data yang telah ditandai dan dalam bentuk JSON. karena JSON tadi telah ditandai, maka penerima (**web server**) bisa mengecek keaslian dari data tersebut.

Dengan JWT, kita tidak perlu menyimpan data session kita ke dalam server untuk mengotentikasi user.

Dengan metode ini, maka HTTP kita akan tetap **stateless**, karena state dari user tidak tersimpan di memori server.

## Langkah - langkah Autentikasi dengan Token

1.  User melakukan log in.
2.  Server merespon dengan JWT yang di dalamnya terdapat informasi tentang user.
3.  User melakukan request ke service yang diamankan dengan mengirim tokennya kembali.
4.  Sebuah middleware akan mengecek token dan jika benar, maka server akan mengembalikan data yang direquest.

**Untuk belajar mengenai JWT lebih dalam dapat mengunjungi**

- https://float-middle.com/json-web-tokens-jwt-vs-sessions/
- https://www.skyarch.net/blog/?p=8562&lang=en
- https://jwt.io/introduction/

**Untuk belajar tentang autentikasi lebih dalam dapat mengunjungi** https://hackernoon.com/how-do-you-authenticate-mate-f2b70904cc3a
