# Form

## 1 Permasalahan

Web tidak hanya digunakan untuk menampilkan informasi saja, akan tetapi digunakan untuk mengambil informasi atau data dari pengunjung. Salah satu cara untuk mengambil informasi dari pengunjung adalah dengan menggunakan form. Pada topik ini akan dibahas bagaimana cara membuat form menggunakan HTML.

## 2. Penjelasan Form
Form digunakan untuk menerima data dari inputan user, biasanya diterapkan pada form login, pendaftaran, transaksi, dan sebagainya. 

Form dalam web bisa disamakan dengan formulir di dunia nyata. Form dapat diisi, kemudian diproses menggunakan bahasa pemrograman tertentu.

## 3. Membuat Form Pada Website 

Form di HTML dapat kita buat dengan tag `<form>`.
nantinya semua tag input akan dimasukkan ke dalam tag ini

### 3.1. Tag Form
```html
<form >
  <!-- input form ada disini -->
</form>
```
Kode html diatas tidak akan menghasilkan apa-apa. 
Karena kita belum membuat input-nya.

### 3.2. Tag Input

`Input` adalah ruas yang dapat diisi dengan data.

Contoh input :
```html
<form>
  <input type="text" name="info" />
</form>
```
Input memiliki beberapa attribut yang harus diberikan :
-> `type` merupakan type dari input.
-> `name` merupakan nama dari input yang akan menjadi kunci dan variabel di dalam program.
-> `placeholder` merupakan keterangan atau petunjuk yang mendeskripsikan nilai seperti apa yang harusnya diinputkan oleh user. Attribute ini hanya berguna apabila `type` dari input adalah `text`, `search`, `url`, `tel`, `email`, dan `password`.

### 3.3. Tag Label

`Label` ini digunakan untuk menyeleksi pilihan yang diberikan pada sebuah form.
tag yang digunakan yaitu `<label>`.

Contoh label : 
```html
<label>
  Username:
  <input type="text" name="username" placeholder="username..." />
</label>
```

### 4. Membuat Form Login

Pada form login, terdapat beberapa input, yaitu : 
-> Input username atau email
-> Input password
-> Checkbox untuk remember me
-> Tombol untuk login
-> Checkbox untuk remember me
-> Tombol untuk login


### 4.1  Membuat Form dan Input

Langkah pertama yang akan dilakukan untuk membuat form login pada website, adalah dengan membuat inputnya menggunakan tag `input` dengan `type` yang berbeda - beda sesuai kebutuhan. Jangan lupa untuk membungkus semua tag `input` tersebut dengan tag `form`.

```html
<form>
  <input type="text" />
  
  <input type="password" />

  <input type="checkbox" />

  <input type="submit" />
</form>
```
### 4.2 Label
Label digunakan untuk memberikan label pada inputan yang kita buat, sehingga user tau data apa yang perlu dimasukkan ke dalam form

```html
<form>
  <label>Username:</label>
  <input type="text" name="username" placeholder="username..." />

  <label>Password:</label>
  <input type="password" name="password" placeholder="password..." />

  <label>Remember me </label>
  <input type="checkbox" name="remember" value="remember" />
</form>
```
### 4.3  Hasil Akhir

<!DOCTYPE html>
<html>

<head>
    <title>Form Login</title>
</head>

<body>
  <form>
      <h3>Login</h3>

      <label>
          Username:
          <input type="text" name="username" placeholder="username..." />
      </label> <br>

      <label>
      Password:
      <input type="password" name="password" placeholder="password..." /> <br>
      </label>

      <label>Remember me </label>
      <input type="checkbox" name="remember" value="remember" />

      <input type="submit" name="submit" value="Login" /> <br>

  </form>
</body>

</html>
