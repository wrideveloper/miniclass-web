# 1. PENGENALAN DASAR PHP

## 1.1 Pengertian PHP
PHP berasal dari kata <i>Hypertext Preprocessor</i> atau dapat juga disebut dengan <i>server-side programming/script</i> adalah sebuah bahasa pemrograman yang dijalankan/diproses oleh web server atau bisa disebut open source.

PHP dapat digunakan untuk membuat website dinamis yang dapat menyesuaikan tampilan tergantung kondisi serta dapat membuat halaman yang berbeda sesuai dengan inputan dari user. Lalu juga dapat menyimpan data ke dalam database, dan sebagainya.
<br>
<br>

## 1.2 Sintaks PHP
Berikut sintaks dasar penulisan PHP. Diawali dengan tag `<?php` dan diakhiri dengan tag penutup `?>`
``` PHP
<?php
    echo "Hello World!";
?>
```

Kode program PHP dapat disisipkan ke dalam HTML. Agar dapat menjalankan kode program PHP, maka file harus disimpan sebagai file PHP dengan ekstensi .php
``` HTML
<html>
    <head>
    </head>
    <body>
        <?php
            echo "Hello World!";
        ?>
    </body>
</html>
```
Kode Program diatas akan menampilkan output berupa kalimat "Hello World!"

<br>

## 1.3 Aturan Dasar PHP

- Penulisan Perintah dalam PHP
<br>Setiap diakhir baris perintah diakhiri dengan tanda _semicolon_ atau titik koma ( ; )

- Case Sensitive
<br> Di dalam PHP membedakan huruf besar dan huruf kecil untuk penamaan variabel, sehingga variabel ```$name``` dan ```$NAME``` dianggap sebagai 2 variabel yang berbeda. Contoh penulisan variabel seperti dibawah ini
``` PHP
<?php
    $name = “Nama Anda”;
    echo $name; // output: Nama Anda
    ECHO $name; // output: Nama Anda
    echo $NAME; // output: error, karena tidak ada variabel $NAME
?>
```
- Komentar
<br> 1) Komentar satu baris dapat menggunakan // atau #
<br> 2) Komentar dua baris atau banyak dapat menggunakan /*……*/
<br> 3) Komentar <b>HARUS</b> berada di jalur mereka sendiri
``` PHP
<?php
    $keliling = 4 * $sisi; // mengitung keliling persegi
    echo $keliling; # menampilkan hasil
?>
```
- Echo dan Print
<br> Dapat menampilkan data ke layar dengan menggunakan perintah echo dan print. Untuk penulisannya sama saja, tetapi yang membedakan hanyalah kode bawaannya yaitu echo dan print.
``` PHP
<?php
    $kalimat1 = "Halo Selamat Malam";
    $kalimat2 = "Selamat Datang di Miniclass Web";

    echo "<h1> $kalimat1 </h1>"; // menampilkan "Halo Selamat Malam"
    echo "<h2> $kalimat2 </h2>"; // menampilkan "Selamat Datang di Miniclass Web"

    print "<h1> $kalimat1 </h1>"; // menampilkan "Halo Selamat Malam"
    print "<h2> $kalimat2 </h2>"; // menampilkan "Selamat Datang di Miniclass Web"
?>
```

## 1.4 Variabel
Variabel adalah kode program dalam bahasa pemrograman untuk menyimpan suatu nilai sementara yang dimana nantinya akan dikembalikan.

Aturan-aturan variabel dalam PHP
1. Penulisan variabel harus diawali dengan tanda dollar ($)
2. Variabel berisi karakter alfanumerik. Nama variabel harus diawali dengan huruf atau karakter garis bawah ( _ ), tidak boleh diawali dengan angka.
3. Variabel tidak perlu dideklarasikan terlebih dahulu.
4. Variabel merupakan case sensitive.
``` PHP
<?php
    // Penulisan yang salah
    $4six; // Variabel tidak boleh menggunakan angka didepan
    $jenis kelamin // Variabel tidak boleh menggunakan spasi
?>
```
``` PHP
<?php
    // Penulisan yang benar
    $a;
    $nama;
    $Kelas;
    $_tanggal_lahir;
    $NAMA_LENGKAP;
?>
```

## 1.5 Tipe Data
Sama seperti di bahasa pemrograman yang lain, di dalam PHP juga memiliki tipe data yang sama yaitu Integer, String, Float, Boolean, Array, Resource, dan NULL. Tetapi, pada PHP tidak perlu menuliskan tipe datanya.
``` PHP
<?php
    $text = "Hello World!";
    $angka = 12345;
    $desimal = 3.5;
    $kosong = NULL;
?>
```

## 1.6 Operator
Operator adalah simbol operasi yang digunakan untuk suatu nilai dan variabel.

Berikut 6 jenis operator PHP:
- Operator Aritmatika
- Operator Assignment
- Operator Increment & Decrement
- Operator Relasi
- Operator Logika
- Operator Bitwise, dan
- Operator Ternary
``` PHP
<?php
    $angka1 = 8;
    $angka2 = 23;
    
    // Operator Relasi
    echo "<h2>Operator Relasi</h2>";
    echo "$angka1 < $angka2 adalah "; var_dump($angka1 < $angka2);
    echo "<br>$angka1 > $angka2 adalah "; var_dump($angka1 > $angka2);
    echo "<br>$angka1 == $angka2 adalah "; var_dump($angka1 == $angka2);
    echo "<br>$angka1 != $angka2 adalah "; var_dump($angka1 != $angka2);

    // Operator Logika
    echo "<h2>Operator Logika</h2>";
    echo "nilai angka1 AND angka2 adalah "; var_dump($angka1 AND $angka2);
    echo "<br> nilai angka1 OR angka2 adalah "; var_dump($angka1 OR $angka2);
    echo "<br> nilai angka1 XOR angka2 adalah "; var_dump($angka1 XOR $angka2);
    echo "<br> nilai angka1 && angka2 adalah "; var_dump($angka1 && $angka2);
    echo "<br> nilai angka1 || angka2 adalah "; var_dump($angka1 || $angka2);
    echo "<br> nilai !angka1 || angka2 adalah "; var_dump(!$angka1 || $angka2);
    
    // Operator Aritmatika
    echo "<br><br><h2>Operator Aritmatika</h2>";
    echo "Hasil penjumlahan $angka1 dan $angka2 adalah ";
    echo $angka1 + $angka2;

    echo "<br>Hasil pengurangan $angka1 dan $angka2 adalah ";
    echo $angka1 - $angka2;

    echo "<br>Hasil perkalian $angka1 dan $angka2 adalah ";
    echo $angka1 * $angka2;

    echo "<br>Hasil pembagian $angka1 dan $angka2 adalah ";
    echo $angka1 / $angka2;

    echo "<br>Hasil modulus $angka1 dan $angka2 adalah ";
    echo $angka1 % $angka2;

    echo "<br>Hasil decrement $angka1 adalah ";
    echo --$angka1;

    echo "<br>Hasil increment $angka2 adalah ";
    echo ++$angka2;
?>
```
``` PHP
<?php
    echo "Hasil operasi penjumlahan";
    $angka = 8;
    $angka += 23;
    echo "Hasil operasi tersebut adalah $angka";

    echo "Hasil operasi pengurangan";
    $angka = 8;
    $angka -= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "Hasil operasi perkalian";
    $angka = 8;
    $angka *= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "Hasil operasi pembagian";
    $angka = 8;
    $angka /= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "Hasil operasi modulus";
    $angka = 8;
    $angka %= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "Hasil operasi penggabungan angka";
    $angka = 8;
    $angka .= 23;
    echo "Hasil operasi tersebut adalah $angka";
?>
```