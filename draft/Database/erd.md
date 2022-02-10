# ERD ada 2 Versi 
---
## Pendahuluan

ERD (Entity Relationship Diagram) atau diagram hubungan entitas adalah sebuah diagram yang digunakan untuk perancangan suatu database dan menunjukan relasi atau hubungan antar objek atau entitas beserta atribut-atributnya secara detail. Dengan menggunakan ERD, sistem database yang sedang dibentuk dapat digambarkan dengan lebih terstruktur dan terlihat rapi.

1. Peter Chen<br>
![2](https://user-images.githubusercontent.com/73374855/151656571-c48991ae-2c42-43f4-bddc-86af987fdca8.jpg)

2. James Martin<br>
![3](https://user-images.githubusercontent.com/73374855/151656580-df60aa29-8789-4ef6-b014-0d37b21397cf.jpg)

<br>

# ERD Martin

ERD Martin merupakan jenis ERD yang diusulkan oleh James Martin pada 1981. Hubungan antar entititas digambarkan dengan simbol-simbol di bawah ini:

![image](https://user-images.githubusercontent.com/73374855/151655654-7997e6e9-a1ed-46ff-bab0-f784b33b6c89.png)

## Entity 

Entity merupakan objek yang mewakili sesuatu yang nyata yang dapat diidentifikasi secara unik dan berbeda satu dengan yang lainnya.
<br><br>
Penggambaran entity dan atribut:
<br><center>
 ![image](https://user-images.githubusercontent.com/73374855/151655686-7f111dd5-42c8-482f-9cb7-152b72fef971.png)</center>

## Atribut
Atribut adalah properti atau karakteristik dari suatu entitas. Atribut memiliki beberapa jenis
- Atribut Key
Atribut yang digunakan untuk mendefinisikan entitas secara unik
- Atribut Simple
Atribut yang bernilai tunggal
- Atribut Multivalue
Atribut yang memiliki sekelompok nilai yang banyak 
- Atribut Composite – atribut yang masih dapat diuraikan lagi, misal alamat, korban, waktu.
- Atribut Derivatif – atribut yang dihasilkan dari turunan atribut lain, misal umur dari tanggal lahir

## Jenis Key Pada Database 

<table style="width:100%">
  <tr>
    <td>Primary Key </td>
    <td>Sebuah Atribut yang bersifat unik. Tidak boleh kosong dan tidak boleh duplikat</td>
  </tr>
  <tr>
    <td>Foreign Key </td>
    <td>Sebuah atribut (atau kombinasi atribut) dalam sebuah tabel dimana nilainya cocok dengan primary key pada tabel lainnya</td>
  </tr>
  <tr>
    <td>Super Key </td>
    <td>Super Key didefinisikan sebagai sekumpulan atribut dalam tabel yang dapat mengidentifikasi secara unik setiap record dalam tabel super key bagian dari candidate key</td>
  </tr>
  <tr>
    <td>Candidate Key </td>
    <td>Sebuah superkey minimal, yaitu superkey yang tidak merupakan bagian atribut dari suatu superkey.</td>
  </tr>
  <tr>
    <td>Secondary Key </td>
    <td>Sebuah atribut (atau kombinasi atribut) secara paksa digunakan untuk tujuan pengambilan data</td>
  </tr>
</table>

<br>

  ![1](https://user-images.githubusercontent.com/73374855/151656605-177ac4e2-f8c8-4e0b-bd4d-d7eb98970ce7.jpg)

<p style="text-align: justify;">
Sebagai contoh disini kita telah memiliki sebuah tabel staff dimana atribut – atribut nya terdiri dari id_staff, nama, kontak, alamat. pada tabel tersebut atrribut id_staff akan kita jadikan sebagai primary key sehingga pada Gambar 2 nilai dari attribut yang kita jadikan primary key value nya harus bersifat unik atau harus berbeda dengan nilai pada baris lainya.

## Relationship

Dalam ERD Martin terdapat 5 jenis relasi, yakni:

![image](https://user-images.githubusercontent.com/73374855/151655944-cce7d95f-3768-42e8-a878-006ac5826b24.png)

### a.	Exactly One 

![image](https://user-images.githubusercontent.com/73374855/151655960-c5f7ed82-a412-4212-a9d8-b13d8b1a0079.png)

Satu record(data) pada entitas A harus memiliki hubungan dengan tepat 1 record pada entitas B.

Contoh:

1 Orang dosen hanya boleh menjadi Dosen Pembimbing Akademik dari 1 kelas. 
![image](https://user-images.githubusercontent.com/73374855/151656128-80116d92-92fa-491f-8fa2-549c97f0f632.png)

### b.	Zero or One

![image](https://user-images.githubusercontent.com/73374855/151655964-2d165d54-72f1-463b-aa38-28870a4b3d54.png)

Satu record pada entitas A memiliki hubungan dengan TEPAT DARI 1 record pada entitas B atau TIDAK SAMA SEKALI.

Contoh:<br>
1 orang dosen hanya dapat mengepalai satu jurusan atau tidak sama sekali.

![image](https://user-images.githubusercontent.com/73374855/151656098-3f837eea-644c-44f2-b758-ff3606e52848.png)


### c.	More than one

![image](https://user-images.githubusercontent.com/73374855/151655985-7197d661-b6ed-4b5a-9ab1-4942b925489c.png)

Satu record pada entitas A harus memiliki hubungan dengan LEBIH DARI 1 record pada entitas B.

Contoh:<br>
Setiap pegawai kasir menangani lebih dari satu transaksi pembelian.

![image](https://user-images.githubusercontent.com/73374855/151656070-b74231f5-b8a3-47fa-992b-25eb6f6ca481.png)

### d.	Zero, one, or more

![image](https://user-images.githubusercontent.com/73374855/151655989-de38a874-7c34-4183-bb15-5ec2635116b0.png)

Satu record pada entitas A dapat memiliki hubungan dengan 1 atau lebih record pada entitas B, atau tidak sama sekali.

Contoh:<br>
Dalam sistem informasi toko, terdapat pelanggan yang pernah melakukan pembelian satu kali, lebih dari satu kali, dan terdapat juga pelanggan yang belum pernah melakukan pembelian.

![image](https://user-images.githubusercontent.com/73374855/151656053-f050b0ff-4760-4eb1-a69d-abd38d58655f.png)

### e.	One or more

![image](https://user-images.githubusercontent.com/73374855/151655986-41d13417-456e-4be3-bc57-6e72e3f244aa.png)

Satu record pada entitas A pasti memiliki hubungan dengan 1 atau lebih record pada entitas B, dan tidak boleh tidak.

Contoh:<br>
Setiap dosen mengajar minimal satu mata kuliah atau boleh mengajar lebih dari satu mata kuliah.

![image](https://user-images.githubusercontent.com/73374855/151656013-36a65533-e1b3-46ec-adbe-7ff601e5708b.png)