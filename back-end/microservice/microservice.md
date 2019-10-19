# Microservice

<img src="microservice.png" width="500px" />

## 1. Penjelasan Microservice

Secara pengertian, Microservice dapat diartikan sebagai gaya arsitektur yang membentuk sebuah sistem yang terdiri dari susunan banyak service. Sebuah sistem lengkap biasanya terdiri dari susunan service, antara lain :

- Back-end (Server side)
- Front-end (Client side)
- Database

Sehingga dalam microservice, sebuah sistem tidak terdiri dari 1 buah sistem utuh (monolitik), tetapi terpecah menjadi bagian-bagian kecil yang saling menyusun sistem yang utuh. 

Sebagain contoh, aplikasi berarsitektur monolitik dapat digambarkan sebagai sebuah perusahaan (A) di gedung dengan banyak lantai, setiap lantai yang berdekatan punya departemen dengan fungsi masing-masing yang saling berhubungan. Suatu hari, Disaat ingin mengubah lantai sebuah departemen, atau memperbaiki fungsi sebuah lantai, bisa jadi perlu dilakukan perombakan pada gedung tersebut, entah sebagian kecil, beberapa lantai yang digeser, atau malah keseluruhan pondasi yang harus diubah. Tidak menutup kemungkinan bahwa perubahan ini jarang terjadi, sehingga lambat laun, konstruksi gedung selalu berubah, bisa jadi lebih kokoh, atau, suatu hari roboh karena strukturnya tidak lagi saling berfungsi dengan efektif.

Lain halnya perusahaan (B) yang memiliki banyak rumah 1 lantai di banyak tempat. Setap rumah punya departemen, yang menjalankan fungsinya masing-masing. Suatu hari, mereka juga ingin mengganti dan memindah sebuah departemen ke tempat atau fungsi yang lain. Hal yang dilakukan adalah, tinggal mengganti 1 buah rumah dengan bentuk yang baru, atau memindah isi sebuah rumah ke tempat yang lain, tanpa harus mengganggu struktur rumah lainnya. Dengan begini, pergantian setiap rumah tidak punya efek apapun terhadap rumah lainnya. 

## 2. Keuntungan menggunakan Microservice

Dengan menerapkan Arsitektur Microservice, maka kita akan mendapatkan beberapa kelebihan :

- Aplikasi scalable, artinya dapat lebih mudah dikembangkan dengan skala lebih besar
- Setiap service dibangun terpisah, separation of concern, setiap urusan service, ditangani masing-masing
- Future-proof, lebih mudah mengatasi penambahan kebutuhan / ekspansi aplikasi di masa depan dengan penambahan service, tanpa harus merombak seluruh arsitektur sistem

## 3. Kerugian menggunakan Microservice

Penerapan microservice juga dapat memunculkan kerugian atau kesulitan yang belum tentu ada di aplikasi berarsitektur monolitik, antara lain :

- Singkronisasi data, disaat sebuah data dalam sebuah service berubah, service lain yang berhubungan harus beradaptasi, dalam artian tanpa mengubah struktur secara langsung, tetapi hanya data yang berelasi. Detail dari konsep ini akan dijelaskan disaat contoh pembuatah microservice.
- Karena data dipisahkan antar service, perlu dokumentasi lengkap pada setiap data yang beredar didalam sistem

## 4. Info lengkap tentang konsep microservice

Dapat dilihat di [sini](https://microservices.io/)