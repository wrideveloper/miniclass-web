# Table

## 1. Permasalahan
Pada pembuatan website, biasanya kita butuh menampilkan data dalam bentuk tabel apabila data tersebut memiliki banyak property karena akan sangat tidak efisien apabila kita menggunakan list untuk menampilkan beberapa jenis data dalam jumlah yang banyak. 

## 2. Penjelasan Table

Table digunakan untuk menampilkan data dalam format table, dimana dalam table terdapat baris dan kolom untuk memudahkan penyajian data. Untuk membuat table pada HTML, kita dapat menggunakan kombinasi tag `table` dengan `tr`, `th`, dan `td`.

## 3. Contoh penggunaan table dalam sebuah kasus

Dalam sebuah halaman sekolah, ingin menampilkan data-data seluruh siswanya seperti NIS, Nama, Kelas, dan Gender. Contoh table seperti berikut : 

![Contoh kasus menggunakan table](tablecase.png)

### 3.1 Buat file html

Buat file baru menggunakan text editor dengan nama file `index.html`

### 3.2 Buat tag table

Tulislah dalam html dengan tag `<table>` lalu tutup dengan `</table>`

```html
<html>
  <table>
  
  </table>
</html>
```

### 3.3 Buat baris baru

Untuk membuat baris baru tulislah tag `<tr>` lalu tutup dengan `</tr>`

```html
<table>
  <tr>   </tr>
</table>
```
### 3.4 Buat table header

Table header digunakan untuk memberikan deskripsi tentang data yang ada di bawahnya. Untuk membuat table header tulislah tag `<th>` lalu tutup dengan `</th>`

```html
<table>
  <tr>
    <th>NIS</th>
    <th>Nama</th>
    <th>Kelas</th>
    <th>Gender</th>
  </tr>
</table>
```
### 3.5 Buat table data

Table data digunakan untuk menampilkan data-data yang inin disajikan. Sebelum membuat table data jangan lupa untuk membuat baris baru terlebih dahulu. Untuk membuat table data tulislah tag `<td>` lalu tutup dengan `</td>`

```html
<table>
  <tr>
    <th>NIS</th>
    <th>Nama</th>
    <th>Kelas</th>
    <th>Gender</th>
  </tr>
  <tr>
    <td>20120302</td>
    <td>Ahmad Faisal</td>
    <td>3A</td>
    <td>Laki-laki</td>
  </tr>
  ...
</table>
```

### 3.6 Tambahan

Agar data mudah untuk dipahami kita perlu membuat garis untuk memperjelas klasifikasi datanya. Untuk memberikan garis pada table, kita perlu memberikan properties `border` dalam tag `<table>`.

```html
<table border="1px">
```

## Contoh penulisan keseluruhan

```html
<table border="1px">
  <tr>
    <th>NIS</th>
    <th>Nama</th>
    <th>Kelas</th>
    <th>Gender</th>
  </tr>
  <tr>
    <td>20120302</td>
    <td>Ahmad Faisal</td>
    <td>3A</td>
    <td>Laki-laki</td>
  </tr>
  <tr>
    <td>20120303</td>
    <td>Annisa Safitri</td>
    <td>3C</td>
    <td>Perempuan</td>
  </tr>
  <tr>
    <td>20120304</td>
    <td>Christan Febri</td>
    <td>3B</td>
    <td>Laki-laki</td>
  </tr>
  <tr>
    <td>20120305</td>
    <td>Diana Putri</td>
    <td>3B</td>
    <td>Perempuan</td>
  </tr>
  <tr>
    <td>20120306</td>
    <td>Fitriani</td>
    <td>3A</td>
    <td>Perempuan</td>
  </tr>
</table>
```

