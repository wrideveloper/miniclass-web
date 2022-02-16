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

Berikut 7 jenis operator PHP:
- Operator Relasi
- Operator Logika
- Operator Aritmatika
- Operator Assignment
- Operator Increment & Decrement
- Operator Bitwise, dan
- Operator Ternary

### <br>1.6.1 Operator Relasi
``` PHP
<?php
    $angka1 = 8;
    $angka2 = 23;
    
    echo "<h2>Operator Relasi</h2>";
    echo "$angka1 < $angka2 adalah "; var_dump($angka1 < $angka2);
    echo "<br>$angka1 > $angka2 adalah "; var_dump($angka1 > $angka2);
    echo "<br>$angka1 == $angka2 adalah "; var_dump($angka1 == $angka2);
    echo "<br>$angka1 != $angka2 adalah "; var_dump($angka1 != $angka2);
?>
```

### 1.6.2 Operator Logika
``` PHP
<?php
    $angka1 = 8;
    $angka2 = 23;

    echo "<h2>Operator Logika</h2>";
    echo "angka1 AND angka2 adalah "; var_dump($angka1 AND $angka2);
    echo "<br> angka1 OR angka2 adalah "; var_dump($angka1 OR $angka2);
    echo "<br> angka1 XOR angka2 adalah "; var_dump($angka1 XOR $angka2);
    echo "<br> angka1 && angka2 adalah "; var_dump($angka1 && $angka2);
    echo "<br> angka1 || angka2 adalah "; var_dump($angka1 || $angka2);
    echo "<br> !angka1 || angka2 adalah "; var_dump(!$angka1 || $angka2);
?>
```

### 1.6.3 Operator Aritmatika
``` PHP
<?php
    $angka1 = 8;
    $angka2 = 23;

    echo "<h2>Operator Aritmatika</h2>";
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

### 1.6.4 Operator Assignment
Assignment by Value yaitu memberikan nilai ke suatu variabel
``` PHP
<?php
    echo "<h3>Operasi Penjumlahan</h3>";
    $angka = 8;
    $angka += 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "<h3>Operasi Pengurangan</h3>";
    $angka = 8;
    $angka -= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "<h3>Operasi Perkalian</h3>";
    $angka = 8;
    $angka *= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "<h3>Operasi Pembagian</h3>";
    $angka = 8;
    $angka /= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "<h3>Operasi Modulus</h3>";
    $angka = 8;
    $angka %= 23;
    echo "Hasil operasi tersebut adalah $angka";
    echo "<br><br>";

    echo "<h3>Operasi Penggabungan Angka</h3>";
    $angka = 8;
    $angka .= 23;
    echo "Hasil operasi tersebut adalah $angka";
?>
```

### 1.6.5 Operator Increment & Decrement
- Pre-Increment (++a)
<br>Menambahkan 1 nilai sebelum operasi telah dilakukan

- Post-Increment (a++)
<br>Menambahkan 1 nilai setelah operasi telah dilakukan

- Pre-Decrement (--a)
<br>Mengurangi 1 nilai sebelum operasi telah dilakukan

- Post-Decrement (a--)
<br>Mengurangi 1 nilai setelah operasi telah dilakukan

``` PHP
<?php
    $a = 2; 
    echo "-- Pre Increment --";  
    echo "<br>Hasil A: " . $a; 
    echo "<br>Hasil A: " . ++$a;
    echo "<br>Hasil A: " . $a;
    
    $a = 2; 
    echo "<br><br>-- Post Increment --";  
    echo "<br>Hasil A: " . $a; 
    echo "<br>Hasil A: " . $a++;
    echo "<br>Hasil A: " . $a;
?>
```

``` PHP
<?php
    $b = 5; 
    echo "-- Pre Decrement --";  
    echo "<br>Hasil B: " . $b; 
    echo "<br>Hasil B: " . --$b;
    echo "<br>Hasil B: " . $b;
    
    $b = 5; 
    echo "<br><br>-- Post Decrement --";  
    echo "<br>Hasil B: " . $b; 
    echo "<br>Hasil B: " . $b--;
    echo "<br>Hasil B: " . $b;
?>
```
### 1.6.6 Operator Bitwise
- Bitwise OR ( | )
<br>Bernilai 1 jika salah satu bit bernilai 1 dan selain itu bernilai 0

``` PHP
<?php
    $a = 3; // 0011 (Bilangan Biner)
    $b = 6; // 0110

    echo "Hasil Output = " . ($a|$b); // output = 7

    // 0011
    // 0110
    // -----
    // 0111 -> 7
?>
```

- Bitwise AND ( & )
<br>Bernilai 1 ketika semua bit bernilai 1 dan selain itu bernilai 0

``` PHP
<?php
    $a = 3; // 0011 (Bilangan Biner)
    $b = 6; // 0110

    echo "Hasil Output = " . ($a&$b); // output = 2

    // 0011
    // 0110
    // -----
    // 0010 -> 2
?>
```

- Bitwise XOR ( ^ )
<br>Bernilai 1 jika terdapat salah satu bit-nya memiliki nilai 1 dan 0 dan bernilai 0 jika semua bit memiliki nilai 1 atau 0

``` PHP
<?php
    $a = 3; // 0011 (Bilangan Biner)
    $b = 6; // 0110

    echo "Hasil Output = " . ($a^$b); // output = 5

    // 0011
    // 0110
    // -----
    // 0101 -> 5
?>
```

- Bitwise Negasi/Kebalikan ( ~ )
<br>Jika bit bernilai 1 maka akan menghasilkan 0 sedangkan bit bernilai 0 maka akan menghasilkan 1

``` PHP
<?php
    $c = 7; // 0111 (Bilangan Biner)

    echo "Hasil Output = " . ~$c; // output = -8

    // 0111                 // RUMUS
    // -----                // ~n = -(n+1)
    // 1000 -> 8            // ~(-n) = (n-1)
?>
```

- Bitwise Right Shift ( >> )
<br>Pergeseran bit ke kanan sebanyak n. n adalah banyaknya pergeseran

``` PHP
<?php
    $d = 4; // 0100 (Bilangan Biner)

    echo "Hasil Output = " . $d>>2; // output = 1

    // 0100
    // -----
    // 0001 -> 1
?>
```

- Bitwise Left Shift ( << )
<br>Pergeseran bit ke kiri sebanyak n. n adalah banyaknya pergeseran

``` PHP
<?php
    $d = 4; // 0100 (Bilangan Biner)

    echo "Hasil Output = " . $d<<2; // output = 16

    // 0100
    // -----
    // 0000 -> 16
?>
```

### 1.6.7 Operator Ternary
Operator Ternary adalah operator yang melibatkan 3 buah operand. Operator Ternary digunakan untuk melakukan penilaian terhadap suatu nilai yang didasari oleh ekspresi tertentu.
``` PHP
<?php
    $p = "Miniclass Web";
    $hasil;
     
    $hasil = ($p == "Miniclass Web" ? "Mari Kita Belajar Web" : "Batal Belajar Web");
    echo $hasil; // Output = Mari Kita Belajar Web
?>
```

# 2. Percabangan
## 2.1. If - Else
Percabangan If/Else memiliki dua pilihan. Jika kondisi bernilai true, maka blok if akan dikerjakan. Jika kondisi bernilai false, maka blok else akan dikerjakan.

```php
<?php

$tiket = 1;

if ($tiket > 0 ){
    echo "Kamu boleh masuk ke kereta ini";
} else {
    echo "Silahkan beli tiket dulu";
}
?>
```
## 2.2. If - Else if - Else
Percabangan If/Elseif/Else sama dengan percabangan If/Else. Bedanya percabangan If/Elseif/Else bisa memiliki lebih dari 2 kondisi
```php
<?php

$tiket = 1;

if ($tiket = 1 ){
    echo "Kamu boleh masuk ke kereta ini";
} elseif($tiket > 1){
    echo "Siapa pemilik tiket yang lainnya?";
}
} else {
    echo "Silahkan beli tiket dulu";
}
?>
```

# 3. Perulangan
## 3.1. For
Perulangan for digunakan ketika Anda mengetahui sebelumnya berapa kali skrip tersebut harus dijalankan.
```php
<?php
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}
?>
```
## 3.2. While
Perulangan while akan melakukan pengecekan kondisi terlebih dahulu. Setelah itu, jika kondisinya bernilai benar maka blok kode tersebut akan dieksekusi. Begitupun seterusnya, sampai menemukan kondisi yang bernilai salah.
```php
<?php
$x = 1;

while($x <= 5) {
    echo "The number is: $x<br>";
    $x++;
}
?>
```
## 3.3. Do While
Perulangan do while akan selalu mengeksekusi blok kode satu kali. Kemudian akan memeriksa kondisi, dan jika kondisinya bernilai benar maka blok kode tersebut akan diulangi lagi sampai menemukan kondisi yang bernilai salah.
```php
<?php
$x = 1;

do {
    echo "The number is: $x <br>";
    $x++;
} while ($x <= 5);
?>
```
