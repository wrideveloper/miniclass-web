# Synchronous vs Asynchronous

Disini kita akan membahas tentang alur eksekusi program, yaitu synchronous dan asynchronous, hal ini penting untuk dipahami karena banyak bahasa pemrograman yang menggunakan konsep synchronous, sedangkan node js sendiri lebih banyak menerapkan konsep asynchronous.

![synchronous-vs-asynchronous](async-sync.png)



## Synchronous

Merupakan alur eksekusi program yang dilakukan secara **seri** atau **berurutan**, sehingga suatu statement / request akan menunggu hingga response nya terjawab dahulu, baru kemudian request lain boleh dieksekusi.

Hal tersebut akan menjadi **permasalahan** apabila ada sebuah request yang membutuhkan waktu eksekusi yang cukup lama, misalnya meload sejuta data di database, hal ini akan **membloking** request lain karena harus menunggu request sebelumnya selesai.



## Asynchronous

Merupakan alur eksekusi program yang dilakukan secara **pararel**, artinya suatu statement / request tidak perlu menunggu request sebelumnya agar dapat dieksekusi, sehingga dalam satu waktu akan ada banyak request yang dapat dilakukan **secara bersamaan**. Hal ini akan mempercepat eksekusi suatu program.



## Masih Belum Paham ?

Untuk penjelasan lebih lanjut terkait synchronous dan asynchronus  silahkan gunakan referensi berikut :

- [https://medium.com/@siddharthac6/javascript-execution-of-synchronous-and-asynchronous-codes-40f3a199e687](https://medium.com/@siddharthac6/javascript-execution-of-synchronous-and-asynchronous-codes-40f3a199e687)