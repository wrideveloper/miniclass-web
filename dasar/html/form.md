# Form

## 1 Permasalahan

Web tidak hanya digunakan untuk menampilkan informasi saja, akan tetapi digunakan untuk mengambil informasi atau data dari pengunjung. Salah satu cara untuk mengambil informasi dari pengunjung adalah dengan menggunakan form. Pada topik ini akan dibahas bagaimana cara membuat form menggunakan HTML.

## 2. Penjelasan Form

Form digunakan untuk menerima data dari inputan user, biasanya diterapkan pada form login, pendaftaran, transaksi, dan sebagainya.

Form dalam web bisa disamakan dengan formulir di dunia nyata. Form dapat diisi, kemudian diproses menggunakan bahasa pemrograman tertentu.

## 3. Membuat Form Pada Website

### 3.1. Tag Form

Form di HTML dapat kita buat dengan tag `<form>`.
nantinya semua tag input akan dimasukkan ke dalam tag ini

```html
<form>
  <!-- input form ada disini -->
</form>
```

Kode html diatas tidak akan menghasilkan apa-apa.
Karena kita belum membuat input-nya.

### 3.2. Tag Input

Agar web dapat menerima inputan dari user, maka kita perlu membuat beberapa input di dalam form yang dibuat. Untuk membuat input kita bisa menggunakan tag `<input />`

```html
<form>
  <input type="text" name="username" placeholder="john doe" />
</form>
```

Input memiliki beberapa attribut yang harus diberikan :

- `type` merupakan tipe dari input. Ada beberapa tipe input yang dapat digunakan, yaitu `text`, `number`, `submit`, `checkbox`, `radio`, `email`, `file`, `password`
- `name` merupakan nama dari input yang akan menjadi kunci dan variabel di dalam program.
- `placeholder` merupakan keterangan atau petunjuk yang mendeskripsikan nilai seperti apa yang harusnya diinputkan oleh user. Attribute ini hanya berguna apabila `type` dari input adalah `text`, `email`, dan `password`.

### 3.3. Tag Label

Tag `<label>` digunakan untuk memberikan label pada input yang sudah dibuat, sehingga user akan mengetahui data apa yang harus diinputkan pada input tersebut, misalnya `username`

Untuk menerapkan label pada input, kita bisa memasukkan tag `<input>` kedalam tag `<label>`. Tujuannya agar ketika user melakukan klik pada label, maka cursor akan otomatis fokus ke input yang ada di dalam label tersebut.

```html
<label>
  Username:
  <input type="text" name="username" placeholder="john doe" />
</label>
```

### 4. Contoh Kasus Membuat Form Login

Agar lebih memahami cara membuat form pada HTML, kita akan membuat sebuah form login sederhana yang memiliki beberapa input sebagai berikut :

- Input username atau email
- Input password
- Checkbox untuk remember me
- Tombol untuk login

### 4.1. Membuat Form dan Input

Langkah pertama yang akan dilakukan untuk membuat form login pada web, adalah dengan membuat inputnya menggunakan tag `input` dengan `type` yang berbeda - beda sesuai kebutuhan. Jangan lupa untuk membungkus semua tag `input` tersebut dengan tag `form`.

```html
<form>
  <input type="text" name="username" placeholder="john doe" />
  <input type="password" name="password" />
  <input type="checkbox" name="remember" />
  <input type="submit" name="submit" value="Login" />
</form>
```

### 4.2. Menerapkan Label

Agar user tau data apa yang perlu dimasukkan ke dalam form, maka kita perlu menerapkan label pada masing - masing input yang sudah dibuat sebelumnya

```html
<form>
  <label>
    Username:
    <input type="text" name="username" placeholder="john doe" />
  </label>

  <label>
    Password:
    <input type="password" name="password" />
  </label>

  <label>
    <input type="checkbox" name="remember" />
    Remember me
  </label>

  <input type="submit" name="submit" value="Login" />
</form>
```

### 4.3. Hasil Akhir

Berikut hasil akhir dari contoh kasus form login yang kita buat, jangan lupa tambahkan struktur dasar HTML agar file HTML kita valid

```html
<html>
  <head>
    <title>Form Login</title>
  </head>
  <body>
    <form>
      <label>
        Username:
        <input type="text" name="username" placeholder="john doe" />
      </label>

      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <label>
        <input type="checkbox" name="remember" />
        Remember me
      </label>

      <input type="submit" name="submit" value="Login" />
    </form>
  </body>
</html>
```
