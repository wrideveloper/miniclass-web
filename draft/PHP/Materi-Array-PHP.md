# Array

## 1. Permasalahan
 Pada pemaparan sebelumnya kita telah membahas mengenai variabel. dalam PHP variabel dapat dideklarasikan dengan sintaks "$namavar=value". variabel ini digunakan untuk menyimpan suatu nilai yang akan diproses lagi nantinya. 
 
 Sekarang bayangkan ketika terdapat banyak sekali nilai yang perlu disimpan, pastinya akan ribet dan tidak efektif bukan jika harus mendeklarasi serta menginisialisasi banyak variabel dengan nama yang berbeda untuk menyimpan nilai-nilainya? Nah, maka dari itu array ini adalah solusinya.
semisal,

```php
      <?php

  	// tanpa menggunakan array
 	     $buah1 = "Pisang";
	     $buah2 = "Manggis";
	     $buah3 = "Nangka";
 	     $buah4 = "Markisah";

 	 // dengan menggunakan array
	     $buah = ["Pisang","Manggis", "Nangka", "Markisah"];

       ?>
```

</br>

## 2. Penjelasan Array
'Array' atau 'larik' dalam bahasa pemograman PHP adalah jenis struktur data yang memungkinkan kita untuk menyimpan beberapa elemen dari __tipe data yang sama maupun berbeda__ di bawah satu variabel tunggal. Yang artinya kita dapat menyimpan banyak nilai atau elemen dalam suatu wadah yang dinamakan "array" dimana nantinya tiap elemennya dapat dipanggil menggunakan indeks array. Penerapan Array pada PHP dalam praktiknya kebanyakan digunakan untuk menampilkan data pada database maupun menyimpan data dari Form yang akan diporses lagi nantinya (Pembahasan lanjut di materi CRUD).

Dalam bahasa pemograman PHP terdapat array bawaan dari php, berupa variabel `$_POST`, `$_GET`, `$_FILE`, dll. yang akan dibahas lebih lanjut pada materi CRUD. Pada materi kali ini kita akan fokus membahas mengenai dasar-dasar penggunaan array dalam bahasa pemograman PHP. 

</br>

## 3. Penjelasan Detail Array dan Contoh Sintaks

### 3.1 Mendefinisikan Array di PHP
dalam php terdapat dua cara untuk mendefinisikan array, pertama menggunakan fungsi `"array(valueindeks)"` dan yang kedua menggunakan kurung siku `"[valueindeks]"`. contoh :

```php
	<?php
	    
	    // menggunakan fungsi "array()"
	    $hewan = array("Singa", "Harimau", "Buaya", "Anjing");

	    // menggunakan tanda kurung siku "[]"
	    $tumbuhan = ["pohon Pisang", "Kangkung", "rumput"];

	?>
```
selain itu kita juga dapat mendefinisikan array dengan hanya menginisialisasi nilai dari indeks tertentu saja melalui sintaks :
```php
	<?php
	    
	    // mendefinisikan array dengan inisialisasi indeks
	    $hewan[0] = "Gajah";
	    $hewan[1] = "Kucing";
	    $hewan[2] = "Kelinci";
	    $hewan[3] = "Singa";

	?>
```
seperti pada definisi array yang telah dipaparkan diatas, bahwa array pada PHP bisa menyimpan banyak elemen dengan tipe data yang berbeda.
```php
	<?php
	    
	    // array pada php dapat menyimpan elemen dengan tipedata berbeda
	    $array = [3,"Pulu-pulu", false, 3.14];

	?>
```



### 3.2 Menampilkan Elemen Array
terdapat dua cara untuk menampilkan elemen array, yakni dengan mencetak elemen per indeks dan dengan menggunakan perulangan

#### a. Menampilkan Isi Array dengan Mengakses Indeksnya
```php
	<?php
	    
	    // Membuat Array
	    $hewan = ["Singa", "Harimau", "Buaya", "Anjing"];

	    // Menampilkan Elemen Array Hewan 
	    echo $hewan[0] . "<br>" // menampilkan Singa
	    echo $hewan[1] . "<br>" // menampilkan Harimau
	    echo $hewan[2] . "<br>" // menampilkan Buaya
	    echo $hewan[3] . "<br>" // menampilkan Anjing
	?>
```

#### b. Menampilkan Isi Array dengan Perulangan
Penampilan isi array menggunakan perulangan efektif digunakan ketika array tersebut memiliki banyak elemen. terdapat empat bentuk perulangan, yakni perulangan foreach, for, while, dan do-while
```php
	<?php
	    
	    // Membuat Array
	    $hewan = ["Singa", "Harimau", "Buaya", "Anjing"];

	    // perulangan foreach 
	    foreach($hewan as $h) {
		echo $h . "<br>";
	    }

	    echo "<br>";

	    // perulangan for 
	    for($i = 0; $i < count($hewan); $i++) {
		echo $hewan[$i] . "<br>";
	    }

	    echo "<br>";

	    // perulangan while
	    $i = 0; 
	    while($i < count($hewan)) {
		echo $h . "<br>";
		$i++;
	    }

	    echo "<br>";

	    // perulangan do while 
	    $i = 0; 
	     do {
		echo $h . "<br>";
		$i++;
	    } while($i < count($hewan))

	?>
```
fungsi `count()` digunakan untuk menghitung panjang dari array.



### 3.3 Menambahkan / mengupdate Elemen Pada Array
```php
	<?php
	    
	    // Membuat Array
	    $hewan = ["Singa", "Harimau", "Buaya", "Anjing"];

	    // Menampilkan Array 
	    foreach($hewan as $h) {
		echo $h . "<br>";
	    }


	    // Mengupdate Array indeks ke-1 
	    $hewan[1] = "Serigala";
	
	    // Menambahkan Elemen di Indeks Terakhir
	    $hewan[] = "Monyet";

	    echo "<hr>";

	    // Menampilkan Array Setelah Update dan Tambah Elemen
	    foreach($hewan as $h) {
		echo $h . "<br>";
	    }
	?>
```



### 3.4 Jenis-Jenis Array di PHP
dalam bahasa pemograman, array dapat dibedakan menjadi 3 jenis, yakni array numeric, array assosiatif, dan array multidimensi.

#### a. Array Numeric
  - Array numeric adalah jenis array dengan indeks numeric yang selalu dimulai dari 0. Contoh Array Numeric :
```php
	<?php
	    
	    // Membuat Array
	    $var[0] = 3;
	    $var[1] = 6;
	    $var[2] = 9;

	    // Menampilkan Array 
	    echo $var[0] . "<br>" // menampilkan 3
	    echo $var[1] . "<br>" // menampilkan 6
	    echo $var[2] . "<br>" // menampilkan 9

	?>
```

#### b. Array Asosiatif
  - Komponen Array asosiatif terdiri dari pasangan kunci (key) dan nilai (value).
  - Array asosiatif mengindeks elemen di dalamnya menggunakan nama (String) yang kita tentukan dan bukan menggunakan nomor.
  - Cara membuatnya : menggunakan fungsi array dengan mengeset sepasang atribut sebagai nama elemen dan nilai elemen itu sendiri menggunakan gabungan “=” dan “>”.
```php
	<?php
	    
	    // Membuat Array
	    $komponen = array(

               "prosesor" => "Intel",
               "RAM" => "8 GB",
               "VGA" => "NVidia Geforce"

            );

	    // Menampilkan Array 
	    echo $komponen['prosessor'] . "<br>" // menampilkan Intel
	    echo $komponen['RAM'] . "<br>" // menampilkan 8 GB
	    echo $komponen['VGA'] . "<br>" // menampilkan NVdia Geforce

	    echo "<hr>";

	?>
```

```php

	<?php

	    // Membuat Array
	    $komponen = array(

               "prosesor" => "Intel",
               "RAM" => "8 GB",
               "VGA" => "NVidia Geforce"

            );

	    // Menampilkan Array menggunakan Looping FOR
	    $data = array_keys($komponen); // untuk menyimpan key indeks dalam array $data

	    for ($i = 0; $i < count($data); $i++) {
    		echo "$" . $data[$i] . ': ' . $komponen[$data[$i]] . "<br>";
            }

	    echo "<hr>";

	    // Menampilkan Array menggunakan Looping Foreach
	    foreach ($komponen as $data) {
    		echo "$" . $data[$i] . ': ' . $komponen[$data[$i]] . "<br>";
    	    }

	?>

```

#### c. Array Multidimensi 
  - Array multidimensi merupakan jenis array yang menyimpan satu atau lebih array lagi di dalamnya. Contoh Array Multidimensi :
```php
	<?php
	    
	    // Membuat Array 2 Dimensi
	    $buku = [
		[
		   "judul" => "Belajar PHP Mengasyikkan",
		   "penulis" => "Arif Nauvan Ramadha",
		   "halaman" => 1500
		],
		[
		   "judul" => "Pemograman PHP Sederhana Gampang Untuk Pemula Asik",
		   "penulis" => "Ahmad Rafif Alaudin",
		   "halaman" => 1750
		],
		[
		   "judul" => "Cara Memasak Pukis",
		   "penulis" => "Fauzan Pradana",
		   "halaman" => 30
		],
		[
		   "judul" => "PHP is Fun",
		   "penulis" => "Ilham Sinatrio Gumelar",
		   "halaman" => 1254
		],
	    ];

	    // Menampilkan Array menggunakan Looping Foreach
	    foreach ($buku as $data) {
            	echo "Judul   : " . $data["judul"] . "<br>";
            	echo "Penulis : " . $data["penulis"] . "<br>";
            	echo "Halaman : " . $data["halaman"] . "<br>"; 
            	echo "<hr>";
            }

	?>
```

</br>

## Studi Kasus Array
Buatlah Array 2 Dimensi (selain pada contoh), Implementasikan / Tampilkan dalam bentuk Tabel.
```php
<!DOCTYPE html>
<html>
<head>
  <title>Belajar Array 2 Dimensi PHP</title>
</head>
<body>
<table border="1">
<tr><td>Nama</td><td>Jurusan</td><td>Jenis Kelamin</td><td>Usia</td></tr>
<?php
$mahasiswa = array(
		array("Dimas", "Teknik Informatika", "Laki-laki",23),
		array("Fitri", "Sistem Informasi", "Perempuan", 22),
		array("Juan", "Manajemen Informatika", "Laki-laki",24),
		array("Wulan", "Teknik Komputer", "Perempuan", 20),
		array("Marcel", "Teknik Informatika", "Laki-laki", 24)
		);
			
	for ($row = 0; $row < 5; $row++) {
		echo "<tr>";
		for ($col = 0; $col < 4; $col++) {
			echo "<td>".$mahasiswa[$row][$col]."</td>";
		}
	echo "</tr>";
}
?>
</table>
</body>
</html>
```
