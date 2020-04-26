# Fungsi

## 1. Permasalahan

Terkadang, saat kita membuat fitur program, kita memiliki beberapa perintah yang sama, yang selalu kita tulis berulang - ulang, sehingga baris kode yang kita miliki menjadi banyak sehingga kode yang kita buat tidak cukup efektif.

 Lalu bagaimana cara agar kita membuat program kita lebih efektif, tidak menulis perintah yang sama secara berulang - ulang ?

Di javascript kita ditawarkan fungsi ,dengan fungsi kita bisa memecah permasalahan seperti ditas ,



## 2. Fungsi 
  Fungsi adalah kumpulan gabungan perintah-perintah yang digabung menjadi satu dan bisa dipanggil secara bersamaan. 

### 2.1 Struktur Fungsi
```javascript
  // index.js

  // membuat fungsi untuk menghitung luas persegi panjang

  function hitungLuasPersegiPanjang() { //function = keyword pada javascript dan hitungLuasPersegiPanjang adalah nama fungsinya.
    var panjang = 5 //var = adalah cara javascript membuat variable.  
    var lebar = 6
    var luas = panjang * lebar
    console.log(luas)
  }

// menjalankan fungsi
hitungLuasPersegiPanjang() // output : 30

//cara baca nya kurang lebih adalah
//javascript tolong buatkan saya sebuah fungsi 
//yang bernama hitungLuasPersegiPanjang
//dari nilai panjang dan lebar dimana perhitungan nya adalah menghitung luas dari suatu persegi 
//lalu jika sudah simpan nilai perkaliannya dalam variable luas dan tampilkan hasilnya nya di console .

  ```


setelah kita mengetahui beberapa struktur fungsi maka kita akan coba membuatnya.
### 2.2 Ada 3 cara membuat fungsi di javascript

1. Menggunakan cara biasa;
2. Menggunakan ekspresi;
3. Menggunakan parameter
4. Menggunakan return

#### 2.2.1. Membuat Fungsi dengan Cara Biasa
Cara ini paling sering digunakan, terutama buat yang baru belajar Javascript.

```javascript
  function namaFungsi(){
      console.log("Hello World!");
  }
```

### 2.2.2. Membuat Fungsi dengan Ekspresi
Cara membuat fungsi dengan ekspresi:

```javascript
var namaFungsi = function(){
    console.log("Hello World!");
}
```
*Kita menggunakan variabel, lalu diisi dengan fungsi. Fungsi ini sebenarnya adalah fungsi anonim (anonymous function) atau fungsi tanpa nama.*

### 2.2.3. Membuat Fungsi yang menggunakan parameter

Agar kita dapat mengubah nilai dari ``panjang`` dan ``lebar`` pada fungsi hitungLuasPersegiPanjang, maka kita dapat menggunakan parameter
```javascript
// index.js

// membuat fungsi dengan parameter panjang dan lebar
function hitungLuasPersegiPanjang(panjang, lebar) {
  var luas = panjang * lebar
  console.log(luas)
}

// menjalankan fungsi dengan memasukkan nilai parameter
hitungLuasPersegiPanjang(5, 6) // output : 30
hitungLuasPersegiPanjang(2, 4) // output : 8
hitungLuasPersegiPanjang(3, 5) // output : 15
```

### 2.2.4. Membuat Fungsi yang mengembalikan nilai
Agar nilai dari perhitungan luas persegi panjang dapat diolah kembali, kita dapat mengembalikan nilai dari fungsi ``hitungLuasPersegiPanjang`` menggunakan perintah ``return``

```javascript
// index.js

// membuat fungsi yang mengembalikan nilai dari luas
function hitungLuasPersegiPanjang(panjang, lebar) {
  var luas = panjang * lebar
  return luas
}

var hasil = hitungLuasPersegiPanjang(5, 6) + 20
console.log(hasil) // output : 50
```

## 3.Contoh kasus
Cobalah temen-temen buat file html yang didalamnya terdapat 1 kotak beserta beberapa button yang apabila button tersebut di klik akan merubah warna dari kubus tersebut.

hingga hasilnya seperti berikut :
![alt text](img/js-0.gif)

  [.file contoh kasus](implementation/fungsi/fungsi.zip) 