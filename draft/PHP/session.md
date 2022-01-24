# Session PHP

## 1. Permasalahan
Seringkali saat melakukan suatu proses pada website, misal Login atau mengupdate data. Kita perlu menyimpan sebuah parameter sebagai penanda atas proses apa yang hendak kita lakukan pada website tersebut.

## 2. Penjelasan Session pada PHP
Untuk mengatasi masalah diatas, kita bisa menggunakan session. Sebenarnya, apa itu session pada bahasa pemrograman PHP?
Session adalah salah satu fasilitas yang ada pada PHP yang digunakan untuk menyimpan data sememntara ke dalam variabel, sehingga data tadi dapat diakses
oleh pengguna selama variabel session tersebut tidak dikosongkan atau dihilangkan

## 3. Penjelasan Perbandingan Cookies dan Session pada PHP
|  Jenis  | Menyimpan Informasi | Lokasi Penyimpanan | Dapat Dipanggil | Bersifat Global | Dapat dipanggil lain Waktu | Dibatasi Browser | Dapat diedit User |
|:-------:|:-------------------:|:------------------:|:---------------:|:---------------:|:--------------------------:|:----------------:|:-----------------:|
| Cookies |         Yes         |       Client       |       Yes       |       Yes       |             Yes            |        Yes       |        Yes        |
| Session |         Yes         |       Server       |       Yes       |       Yes       |             No             |        No        |         No        |


## 4. Penjelasan Detail Session PHP dan Contoh Sintaks
A. Untuk membuat session pada PHP, digunakan fungsi 'session_start()';

```php
    session_start();
```

B. Setelah session dimulai, kita dapat menggunakan variable session. Variabel untuk session adalah variabel global '$_SESSION'
```php
    $_SESSION[‘namaVariabel’];
```

## 5. Contoh Penggunaan Session

### Membuat Session dan Memanggil Session
A. Buat file PHP baru dengan nama misal buatSession.php
```php
    session_start();
```

```html
    <html>
        <head>
            <title>Membuat Session PHP</title>
        </head>
        <body>
            ```php
                $_SESSION["nama"] = "Max Verstappen";
                $_SESSION["kebangsaan"] = "Belanda";
            ```
        </body>
    </html>
```

B. Kemudian buatlah file baru lagi dengan nama panggilSession.php yang berguna untuk memanggil session yang telah dibuat
```php
    session_start();
```
```html
    <html>
        <head>
            <title>Memanggil Session PHP</title>
        </head>
        <body>
            ```php
                echo "Juara dunia Formula One 2021 ". $_SESSION["nama"]. ".<br>";
                echo "Dia berasal dari ". $_SESSION["kebangsaan"]. ".";
            ```
        </body>
    </html>
```

### Menghapus Session
PHP menyediakan fungsi 'session_destroy()' yang dapat digunakan untuk menghapus session. Berikut adalah langkah-langkah untuk menghapus session:

```php
    session_start();
```
```html
    <html>
        <head>
            <title>Menghapus Session PHP</title>
        </head>
        <body>
            ```php
                session_unset();
                session_destroy();

                echo "Semua session telah dihapus";
            ```
        </body>
    </html>
```


