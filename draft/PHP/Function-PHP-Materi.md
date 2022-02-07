# Function PHP
## Permasalahan
Dalam merancang kode program, kadang kita sering membuat kode yang melakukan tugas yang sama secara berulang-ulang, seperti membaca tabel dari database, menampilkan penjumlahan, dan lain-lain. Tugas yang sama ini akan lebih efektif jika dipisahkan dari program utama, dan dirancang menjadi sebuah 'Function'.

## Penjelasan Function
`Fungsi` atau `Function` dalam bahasa pemograman adalah kode program yang dirancang untuk menyelesaikan sebuah tugas tertentu, dan merupakan bagian dari program utama. Kita dapat membuat fungsi sendiri, atau menggunakan fungsi yang dibuat oleh programmer lain.

## Pengertian Argumen dan Parameter dalam Function PHP
Sebuah fungsi dalam memproses data, kadang memerlukan beberapa inputan atau nilai masukan. Inputan inilah yang dimaksud dengan argumen. Sebuah fungsi bisa membutuhkan 1, 2, atau 5 argumen, namun bisa juga tidak memerlukan argumen sama sekali.
Parameter adalah sebutan lain untuk argumen. Perbedaannya, parameter merujuk kepada inputan fungsi pada saat pendefenisian fungsi tersebut, dan agrumen adalah sebutan untuk inputan fungsi pada saat pemanggilan fungsi. Kita akan membahas perbedaan Argumen dan Parameter secara lebih dalam  pada tutorial selanjutnya, namun pada dasarnya argumen dan parameter merujuk kepada hal yang sama, yaitu inputan kepada fungsi dan kedua istilah ini sering dipertukarkan.

## Contoh Pemanggilan Fungsi PHP
Sebagai latihan dan prakter dalam menggunakan fungsi,  Berikut adalah format dasar pemanggilan, dan pengembalian nilai fungsi:
```php
  $varibel_hasil_fungsi = nama_fungsi(argumen1, argumen2, argumen3)
```
Penjelasan :
- `$varibel_hasil_fungsi` adalah variabel yang akan menampung hasil pemrosesan fungsi. Tergantung fungsinya, hasil dari sebuah fungsi bisa berupa angka, string, array, bahkan objek.
- `nama_fungsi` adalah nama dari fungsi yang akan dipanggil
- `argumen1`, `argumen2` adalah nilai inputan fungsi. Banyaknya argumen yang dibutuhkan, tergantung kepada fungsi tersebut. Jika sebuah fungsi membutuhkan argumen 2 buah angka, maka kita harus menginputnya sesuai dengan aturan tersebut, atau jika tidak, PHP akan mengeluarkan error.

Sebagai contoh, PHP menyediakan fungsi akar kuadrat, yakni sqrt(), berikut adalah cara penggunaannya:
```php
  <?php
    $akar_kuadrat = sqrt(49);
    echo "Akar kuadrat dari 49 adalah $akar_kuadrat";
    // Akar kuadrat dari 49 adalah 7
  ?>
```
Dalam contoh diatas, fungsi `sqrt()` akan menghitung akar kuadrat dari nilai argumen yang diinput. Saya menambahkan argumen 49 sebagai inputan.

Nilai hasil dari fungsi `sqrt(49)`, selanjutnya di tampung dalam variabel `$akan_kuadrat`, yang kemudian ditampilkan ke dalam web browser.

Selain ditampung di dalam variabel, kita bisa menampilkan hasil fungsi langsung ke web browser, seperti contoh berikut:
```php
  <?php
    echo "12 pangkat 2 adalah: ".pow(12,2);
    // 12 pangkat 2 adalah: 144
  ?>
```
Fungsi `pow()` adalah fungsi pemangkatan matematika bawaan PHP. Fungsi ini membutuhkan 2 argumen, argumen pertama adalah nilai awal yang ingin dihitung, dan argumen kedua adalah nilai pangkat. `Pow(12,2)` sama dengan 12 kuadrat.

Perlu juga diperhatikan adalah tipe parameter yang dibutuhkan oleh sebuah fungsi. Seperti 2 contoh kita diatas, fungsi `sqrt()` dan `pow()` adalah fungsi matematika. Kedua fungsi ini hanya bisa memproses parameter dengan tipe angka (interger dan float). Jika anda memasukkan parameter jenis string, maka PHP akan mengeluarkan error.
