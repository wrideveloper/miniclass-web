# Cookies Pada PHP

## 1. Permasalahan
Seringkali saat client melakukan suatu aktivitas yang berhubungan dengan mengisi data (form), client terkadang malas untuk mengetik kembali data atau informasi yang sudah pernah user ketikkan sebelumnya.

## 2. Cookies Pada PHP
Untuk mengatasi masalah diatas, kita bisa menggunakan teknologi yang bernama cookies pada bahasa pemrograman PHP.
Cookies adalah file berukuran kecil yang diletakkan pada komputer pengguna ketika mengunjungi suatu website. Cookies menampung informasi sederhana tentang kebiasaan user, seperti nama, telepon, alamat.
Cookies berguna untuk memudahkan pengguna, seperti "mengingat" user setiap kali mengunjungi website yang sama.


## 3. Membuat Cookies pada PHP dan Contoh Kode Program
### A. Untuk membuat cookies pada PHP,  fungsi 'setcookie()'

```php
    setcookie(nama, value, expire);
```
name adalah nama cookies atau variabel yang menjadi pengenal cookies
value berisi nilai yang tersimpan dalam cookies
expire adalah jangka waktu cookies akan disimpan di dalam komputer

### B. Setelah cookie dibuat, selanjutnya kita dapat mengambil cookie yang telah dibuat dengan variabel cookie '$_COOKIE'

```php
    $_COOKIE['user'];
```

### C. Contoh Pembuatan Cookie
1. Jalankan Apache
2. Buat file dengan nama cookiesCreate.php untuk membuat cookies

```php
    setcookie("user", "Polinema", time()+3600);
```

3. Buat file baru dengan nama cookiesCall.php untuk memanggil cookies yang telah dibuat

```php
    echo $_COOKIE['user'];
```

4.Jalankan file cookiesCall.php pada localhost

## 4. Menghapus Cookies pada PHP dan Contoh Kode Program
### A. Untuk menghapus cookies sangat mudah yaitu dengan mengubah expire nya yang semula time()+3600 menjadi time()-3600

### B. Contoh Menghapus Cookies
1. Buat file baru dengan nama cookiesDel.php untuk menghapus nilai cookies

```php
    setcookie("user", "Polinema", time()-3600);
```

2. Jalankan file cookiesDel.php pada localhost
3. Lalu jalankan file cookiesCall.php pada localhost untuk melihat hasilnya
        
