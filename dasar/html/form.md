# Form

## 1 Permasalahan

Web tidak hanya digunakan untuk menampilkan informasi saja, akan tetapi digunakan untuk mengambil informasi atau data dari pengunjung. Salah satu cara untuk mengambil informasi dari pengunjung adalah dengan menggunakan form. Pada topik ini akan dibahas bagaimana cara membuat form menggunakan HTML.

## 2. Penjelasan Form
Form digunakan untuk menerima data dari inputan user, biasanya diterapkan pada form login, pendaftaran, transaksi, dan sebagainya. 

Form dalam web bisa disamakan dengan formulir di dunia nyata. Form dapat diisi, kemudian diproses dengan program tertentu.

## 3. Cara Membuat Form

Form di HTML dapat kita buat dengan tag `<form>`.
nantinya semua inputan akan dimasukkan ke dalam tag ini

```html
<form >
  <!-- input form ada disini -->
</form>
```
Kode html diatas tidak akan menghasilkan apa-apa. 
Karena kita belum membuat field-nya.

Apa itu field ?
`Field` adalah ruas yang dapat diisi dengan data.

Contoh field :
```html
<form>
  <input type="text" name="info" />
</form>
```
Field memiliki beberapa attribut yang harus diberikan :
-> `type` merupakan type dari field.
-> `name` merupakan nama dari field yang akan menjadi kunci dan variabel di dalam program.

### 4. Membuat Form Login

Pada form login, terdapat beberapa field dan elemen : 
-> Field untuk input username atau email
-> Field untuk input password
-> Checkbox untuk remember me
-> Tombol untuk login

### 4.1 Input

Untuk menerima inputan dari user, kita bisa menggunakan tag `input`.

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
### 4.3 Baris Kode 

<!DOCTYPE html>
<html>
<head>
    <title>Form Login</title>
</head>
<body>
    <form>
        <fieldset>
        <legend>Login</legend>
        <p>
            <label>Username:</label>
            <input type="text" name="username" placeholder="username..." />
        </p>
        <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password..." />
        </p>
        <p>
            <label><input type="checkbox" name="remember" value="remember" /> Remember me</label>
        </p>
        <p>
            <input type="submit" name="submit" value="Login" />
        </p>
        </fieldset>
    </form>
</body>
</html>
