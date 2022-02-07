# Koneksi dan CRUD Dasar

## 1. Permasalahan

Pada pembuatan web kita akan perlu melakukan pengolahan data, dengan demikian kita memerlukan koneksi ke dalam sistem basis data.

## 2. Penjelasan Koneksi Database

Koneksi database PHP diperlukan agar kita dapat melakukan pengolahan data yang tersimpan di dalam database.

## 3. Penerapan Koneksi Database PHP

Berikut ini penerapan dengan menggunakan database mysql.

### 3.1 Membuat Database

Membuat database bisa melalui phpmyadmin langsung atau melalui command prompt dengan mengarahkannya ke direktori xampp\mysql\bin. Kemudian menuliskan "mysql -u root" pada cmd.

```mysql
CREATE DATABASE databasename;
```

### 3.2 Membuat Tabel

Sama seperti saat membuat database, membuat tabel dapat dilakukan di phpmyadmin atau melalui command prompt.

```mysql
CREATE TABLE `tablename` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `nama` VARCHAR(64) NOT NULL ,
    `alamat` VARCHAR(255) NOT NULL ,
    `jenis_kelamin` VARCHAR(16) NOT NULL ,
    `agama` VARCHAR(16) NOT NULL ,
    `sekolah_asal` VARCHAR(64) NOT NULL ,
    PRIMARY KEY  (`id`)
) ENGINE = InnoDB;
```

### 3. 3 Membuka file config.php

```php
    <?php
        $server = "localhost";
        $user = "root";
        $password = " ";
        $nama_database = " databasename ";
        $db = mysqli_connect($server, $user, $password, $nama_database);
        if( !$db ){
            die("Gagal terhubung dengan database: " . mysqli_connect_error());
        }
    ?>
```

Untuk menghubungkan PHP dengan MySQL, kita menggunakan fungsi mysqli_connect() dengan parameter alamat server, user, password, dan nama database. Isi password sesuai dengan yang dibuat di servernya. Jika tidak menggunakan passsword, maka dikosongkan saja.Jika koneksi gagal, variabel $db akan bernilai false. Karena itu, kita bisa mengeceknya dengan ekspresi if.

## 4. Penjelasan CRUD

CRUD merupakan singkatan dari Create,Read,Update,dan Delete. CRUD sendiri adalah proses yang digunakan dalam pengolahan data pada database.

### 4.1 Create (C)

Merupakan proses untuk membuat data baru yang nantinya akan disimpan didalam Database.

```php
    <?php
        include("config.php");
        // cek apakah tombol daftar sudah diklik atau belum?
        if(isset($_POST['daftar'])){
        // ambil data dari form
            $nama = $_POST['nama'];
            $alamat = $_POST['alamat'];
            $jk = $_POST['jenis_kelamin'];
            $agama = $_POST['agama'];
            $sekolah = $_POST['sekolah_asal'];
            // buat query
            $sql = "INSERT INTO calon_siswa (nama, alamat, jenis_kelamin, agama, sekolah_asal) VALUE ('$nama', '$alamat', '$jk', '$agama', '$sekolah')";
            $query = mysqli_query($db, $sql);
            // apakah query simpan berhasil?
            if( $query ) {
                // kalau berhasil alihkan ke halaman index.php dengan status=sukses
                header('Location: index.php?status=sukses');
            } else {
                // kalau gagal alihkan ke halaman indek.php dengan status=gagal
                header('Location: index.php?status=gagal');
            }
        } else {
            die("Akses dilarang...");
        }
    ?>
```

### 4.2 Read (R)

Merupakan proses pengambilan data yang tersimpan dari Database yang sudah dikoneksikan.
Pertama kita membutuhkan koneksi ke database, maka kita harus mengimpor file config.php agar variabel $db dapat dibaca.

```php
    <?php include("config.php"); ?>
```

Setelah itu, kita melakukan query untuk mengambil data

```
$sql = "SELECT * FROM tablename";
$query = mysqli_query($db, $sql);
```

Hasil dari query tersetbut, kemudian kita ubah menjadi array dengan fungsi mysqli_fetch_array() dan hasilnya disimpan dalam variable

```
$variabel = mysqli_fetch_array($query)
```

### 4.3 Update (U)

Merupakan proses pengubahan data yang berada di dalam Database.

```php
    <?php
        include("config.php");
        // kalau tidak ada id di query string
        if( !isset($_GET['id']) ){
            header('Location: list-siswa.php');
        }
        //ambil id dari query string
        $id = $_GET['id'];
        // buat query untuk ambil data dari database
        $sql = "SELECT * FROM calon_siswa WHERE id=$id";
        $query = mysqli_query($db, $sql);
        $siswa = mysqli_fetch_assoc($query);
        // jika data yang di-edit tidak ditemukan
        if( mysqli_num_rows($query) < 1 ){
            die("data tidak ditemukan...");
        }
    ?>
```

### 4.4 Delete(D)

Merupakan proses penghapusan data yang ada di dalam Database.

```php
    <?php
        include("config.php");
        if( isset($_GET['id']) ){
            // ambil id dari query string
            $id = $_GET['id'];
            // buat query hapus
            $sql = "DELETE FROM tablename WHERE id=$id";
            $query = mysqli_query($db, $sql);
            // apakah query hapus berhasil?
            if( $query ){
                header('Location: .php');
            } else {
                die("gagal menghapus...");
            }
        } else {
            die("akses dilarang...");
        }
    ?>
```

## 5. Contoh Kasus

### 5.1 Membuat database mysql

Membuat database melalui command prompt atau phpmyadmin.

```mysql
CREATE DATABASE `dbuser`;
```

### 5.2 Diikuti dengan membuat tabel di dalam database yang telah dibuat

Kemudian membuat tabel di dalam database dbuser dengan nama user dan juga berikan tipe data di setiap kolomnya.

```mysql
CREATE TABLE ‘user’(
‘id’ VARCHAR(64) NOT NULL ,
‘nama’ VARCHAR(64) NOT NULL ,
‘phone’ VARCHAR(64) NOT NULL ,
PRIMARY KEY (‘id’)
);
```

### 5.3 Memasukkan beberapa data ke dalam tabel

Kemudian kita isi tabel user dengan data seperti berikut.

```mysql
INSERT INTO `user` (`id`, `nama`, `phone`) VALUES
('pg674kf', 'M. Nindra Zaka', '085335473895'),
('04khd6i', 'Raka Ardinata', '08533124098'),
('jf64odj', 'Budi', '087564326777'),
('S5oUR5UR', '','087333647555'),
('DPdOOWf6M', 'Aqib', '087333647555');
```

### 5.4 Membuka file config.php

```php
    <?php
        $server = "localhost";
        $user = "root";
        $password = "";
        $nama_database = "dbuser";

        $db = mysqli_connect($server, $user, $password, $nama_database);

        if (!$db) {
            die("Gagal terhubung dengan database: " . mysqli_connect_error());
        }
    ?>
```

### 5.5 Create data (Membuat dan memasukkan data baru)

Sebelum memasuki proses create, pada file index.php, tuliskan seperti di bawah.

```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Data User</title>
        </head>

        <body>
            <header>
            <h3>Pendaftaran User Baru</h3>
            </header>

            <h4>Menu</h4>
            <nav>
            <ul>
                <li><a href="form-user.php">Daftar Baru</a></li>
                <li><a href="list-user.php">Pendaftar</a></li>
            </ul>
            </nav>

            ```php
            <?php if (isset($_GET['status'])) : ?>
            ```
            <p>
                ```php
                <?php
                    if ($_GET['status'] == 'sukses') {
                        echo "Pendaftaran user baru berhasil!";
                    } else {
                        echo "Pendaftaran gagal!";
                    }
                ?>
                ```
            </p>
            ```php
            <?php endif; ?>
            ```
        </body>
    </html>
```

Membuat form pada form-user.html

```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Formulir Pendaftaran User</title>
        </head>

        <body>
            <header>
            <h3>Formulir Pendaftaran User Baru</h3>
            </header>

            <form action="proses-pendaftaran.php" method="POST">
            <fieldset>
                <p>
                <label for="id">Id : &ensp;&ensp;&ensp;&ensp;</label>
                <input type="text" name="id" />
                </p>
                <p>
                <label for="nama">Nama : &ensp;</label>
                <input type="text" name="nama" placeholder="nama lengkap" />
                </p>
                <p>
                <label for="phone">Phone : &nbsp;</label>
                <input type="text" name="phone" />
                </p>

                <p>
                <input type="submit" value="Daftar" name="daftar" />
                </p>
            </fieldset>
            </form>
        </body>
    </html>
```

Kemudian, pada proses create akan dilakukan pada proses-pendaftaran.php, sebagai berikut.

```php
    <?php
        include("config.php");

        // cek apakah tombol daftar sudah diklik atau blum?
        if (isset($_POST['daftar'])) {

            // ambil data dari formulir
            $id = $_POST['id'];
            $nama = $_POST['nama'];
            $phone = $_POST['phone'];

            // buat query
            $sql = "INSERT INTO user (id ,nama, phone) VALUE ('$id','$nama', '$phone')";
            $query = mysqli_query($db, $sql);

            // apakah query simpan berhasil?
            if ($query) {
                // kalau berhasil alihkan ke halaman index.php dengan status=sukses
                header('Location: index.php?status=sukses');
            } else {
                // kalau gagal alihkan ke halaman indek.php dengan status=gagal
                header('Location: index.php?status=gagal');
            }
        } else {
            die("Akses dilarang...");
        }
```

### 5.6 Read Data (Menampilkan data user yang telah terdaftar)

Pada file list-user.php, tuliskan kode seperti di bawah.

```php
    <?php include("config.php"); ?>
```

```html
    <!DOCTYPE html>
    <html>

        <head>
            <title>Data User</title>
        </head>

        <body>
            <header>
                <h3>User yang sudah mendaftar</h3>
            </header>

            <nav>
                <a href="form-user.php">[+] Tambah Baru</a>
            </nav>

            <br>

            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama</th>
                        <th>Phone</th>
                        <th>Tindakan</th>
                    </tr>
                </thead>
                <tbody>

                    ```php
                    <?php
                        $sql = "SELECT * FROM user";
                        $query = mysqli_query($db, $sql);

                        while ($user = mysqli_fetch_array($query)) {
                            echo "<tr>";

                            echo "<td>" . $user['id'] . "</td>";
                            echo "<td>" . $user['nama'] . "</td>";
                            echo "<td>" . $user['phone'] . "</td>";

                            echo "<td>";
                            echo "<a href='form-edit.php?id=" . $user['id'] . "'>Edit</a> | ";
                            echo "<a href='hapus.php?id=" . $user['id'] . "'>Hapus</a>";
                            echo "</td>";

                            echo "</tr>";
                        }
                    ?>
                    ```
                </tbody>
            </table>

            <p>Total: <?php echo mysqli_num_rows($query) ?></p>

        </body>

    </html>
```

### 5.6 Update Data (Mengubah data user yang tersimpan)

Dari file list-user.php, terdapat potongan kode program seperti di bawah.

```php
    echo "<a href='form-edit.php?id=" . $user['id'] . "'>Edit</a> | ";
```

Di mana jika diklik, akan menuju ke file form-edit.php, yang berisikan seperti berikut.

```php
    <?php

        include("config.php");

        // kalau tidak ada id di query string
        if (!isset($_GET['id'])) {
            header('Location: list-user.php');
        }

        //ambil id dari query string
        $id = $_GET['id'];

        // buat query untuk ambil data dari database
        $sql = "SELECT * FROM user WHERE id='$id'";
        $query = mysqli_query($db, $sql);
        $pengguna = mysqli_fetch_assoc($query);

        // jika data yang di-edit tidak ditemukan
        if (mysqli_num_rows($query) < 1) {
            die("data tidak ditemukan...");
        }

    ?>
```

```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Formulir Edit user</title>
        </head>

        <body>
            <header>
            <h3>Formulir Edit User</h3>
            </header>

            <form action="proses-edit.php" method="POST">
            <fieldset>
                <p>
                <label for="id">Id: &ensp;&ensp;&ensp;&ensp;</label>
                <input type="text" name="id" value="<?php echo $pengguna['id'] ?>" />
                </p>

                <p>
                <label for="nama">Nama: &ensp;</label>
                <input
                    type="text"
                    name="nama"
                    placeholder="nama lengkap"
                    value="<?php echo $pengguna['nama'] ?>"
                />
                </p>
                <p>
                <label for="phone">Phone: &nbsp;</label>
                <input
                    type="text"
                    name="phone"
                    value=" <?php echo $pengguna['phone'] ?>"
                />
                </p>

                <p>
                <input type="submit" value="Simpan" name="simpan" />
                </p>
            </fieldset>
            </form>
        </body>
    </html>
```

Dari form tadi, proses update akan dilakukan pada file proses-edit.php

```php
    <?php

        include("config.php");

        // cek apakah tombol simpan sudah diklik atau blum?
        if (isset($_POST['simpan'])) {

            // ambil data dari formulir
            $id = $_POST['id'];
            $nama = $_POST['nama'];
            $phone = $_POST['phone'];

            // buat query update
            ```
            $sql = "UPDATE user SET  id='$id', nama='$nama', phone='$phone' WHERE id='$id'";
            $query = mysqli_query($db, $sql);
            ```

            // apakah query update berhasil?
            if ($query) {
                // kalau berhasil alihkan ke halaman list-siswa.php
                header('Location: list-user.php');
            } else {
                // kalau gagal tampilkan pesan
                die("Gagal menyimpan perubahan...");
            }
        } else {
            die("Akses dilarang...");
        }
    ?>

```

### 5.7 Delete Data (Menghapus data user yang dipilih)

Dari list-user.php, terdapat potongan kode program seperti di bawah.

```php
    echo "<a href='hapus.php?id=" . $user['id'] . "'>Hapus</a>";
```

Di mana jika diklik akan menuju ke file hapus.php, yang berisikan seperti berikut.

```php
    <?php

        include("config.php");

        if (isset($_GET['id'])) {

            // ambil id dari query string
            ```
            $id = $_GET['id'];
            ```

            // buat query hapus
            ```
            $sql = "DELETE FROM user WHERE id='$id'";
            $query = mysqli_query($db, $sql);
            ```
            // apakah query hapus berhasil?
            if ($query) {
                header('Location: list-user.php');
            } else {
                die("gagal menghapus...");
            }
        } else {
            die("akses dilarang...");
        }
    ?>
```
