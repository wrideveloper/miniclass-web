# Event Pada Javascript

<img src="event.png" width="600" />

## 1. Permasalahan
Saat membuat fitur web,terkadang kita membutuhkan perintah sebagai respon sistem terhadap kegiatan yang dilakukan oleh user pada web. Contohnya menampilkan pesan (alert) setelah user mengisi sebuah form, merubah warna button setelah di klik, dll.

## 2. Penjelasan Event

Event merupakan suatu respon dari web atau sistem terhadap kegiatan yang dilakukan oleh user dimana kegiatan tersebut akan memicu jalannya script javascript yang terhubung dengan file HTML dari web tersebut. 

## 3. Penjelasan Detail Materi
Contoh-contoh event umum pada javascript, misalnya : 
### 3.1 `onclick`
`onclick` adalah event yang terjadi ketika user melakukan klik pada button. Syntax dibawah ini akan menampilkan tulisan "event click terjadi" dan jumlah banyak nya user mengeklik button. Tulisan tersebut akan terlihat pada console
```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <button onclick="console.log('event click terjadi')">Tekan saya</button>
  </body>

</html>

```

### 3.2 `onkeypress`
`onkeypress` adalah event yang terjadi ketika user menekan keyboard. syntax dibawah ini akan menampilkan alert yang berisi "hallo! ini pakai onkeypress" saat user menekan keyboard. Isi alert dapat disesuaikan dengan kebutuhan dan keinginan. Onkeypress tidak berlaku untuk semua key (contoh: ALT,CTRL,SHIFT) di semua browsers.

```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <input type="text" onkeypress="alert('hallo! ini pakai onkeypress')" placeholder="onkeypress" />
  </body>
</html>

```

### 3.3 `onchange`   
`onchange` adalah event yang terjadi ketika nilai dari input form berubah. Syntax ini akan menampilkan inputan yang dibuat user dalam console. console dapat dibuka dengan klik kanan halaman website, pilih inspeksi
```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <input onchange="console.log(event.target.value)" />
  </body>
</html>

```

### 3.4 `onload`
`onload` merupakan event yang terjadi ketika suatu elemen selesai dimuat. Pada syntax ini, setelah elemen selesai dimuat akan muncul gambar. File gambar yang disertakan disimpan dalam 1 file yang sama dengan file html

```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <img src="wri.jpg" onload="alert('gambar dimuat')" width="100" height="132">
  </body>
</html>

```


### 3.5 `onkeydown`  
`onkeydown` merupakan event yang terjadi ketika tombol keyboard ditekan atau dalam posisi down. jika `onkeypress` tidak berlaku pada key tertentu, hal itu tidak terjadi pada `onkeydown`. `onkeydown` dapat digunakan juga saat user menekan tombol ALT,CTRL,SHIFT
```html
<input type="text" onkeydown="alert('hallo. ini pakai onkeydown')" placeholder="onkeydown" />
```

### 3.6 `onkeyup`
`onkeyup` merupakan event yang terjadi ketika tombol keyboard selesai ditekan atau dalam posisi up

```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <input type="text" onkeyup="alert('hallo. ini pakai onkeyup')" placeholder="onkeyup" />
  </body>
</html>

```

### 3.7 `onsubmit`
`onsubmit` merupakan event yang terjadi ketika suatu form akan mengirimkan data inputan
```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <form onsubmit="alert('data sudah terkumpul')">
          Enter name: <input type="text">
          <input type="submit">
  </form>
  </body>
</html>

```

contoh lain dari event javascript dapat dilihat pada referensi
## 4. Event Handler

### 4.1. Penjelasan Event Handler

Komputer akan mendengarkan kegiatan apa yang dilakukan oleh user dan menjalankan suatu fungsi saat event terjadi menggunakan Event Handler. Event Handler ditandai dengan keyword `on<event>` contohnya onsubmit, onclick, dsb.

### 4.2. Cara Membuat Event Handler

Ada tiga cara umum yang dapat kita gunakan untuk membuat event handler pada javascript

#### 4.2.1 Menggunakan Inline Event Handler

Inline Event Handler diterapkan didalam file HTML dengan menambahkan attribute pada suatu element
Aktivitas onclick pada syntax dapat dilihat pada console yang dapat dibuka dengan mengklik kanan mouse, lalu pilih inspeksi.
Angka yang terdapat pada console bertanda merah di gambar akan bertambah setiap tombol di klik

```html
<!-- index.html -->
<html>
  <head>
    <title>Belajar Event</title>
  </head>
  <body>

    <!-- tambahkan attribute onclick untuk menulis event handler -->
    <button onclick="console.log('event click terjadi')">Tekan saya</button>
  </body>
</html>
```


<img src="event(2).png" width="600" />


```
note:
kelemahan menggunakan cara ini adalah akan mencampur-adukkan file HTML dan Javasript
```

## 5. Event Object

Dalam Event, Event handler sebagai button yang dikenai aksi oleh user sedangkan Event object sebagai parameter pertama dari event handler yang berisi informasi terkait event yang sedang terjadi

```html
<html>
    <head>
        <title>Belajar Event</title>
    </head>

    <body>
        <!-- (event.target.value) merupakan parameter -->
        <input onchange="console.log(event.target.value)" />
    </body>
</html>

```

## 7. Referensi

- **w3school** - https://www.w3schools.com/js/js_events.asp
- **flaviocopes** - https://flaviocopes.com/javascript-events/