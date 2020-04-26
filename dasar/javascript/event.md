# Event Pada Javascript

<img src="event.png" width="600" />

## 1. Permasalahan
Saat membuat fitur web,terkadang kita membutuhkan perintah sebagai respon sistem terhadap kegiatan yang dilakukan oleh user pada web. Contohnya menampilkan pesan (alert) setelah user mengisi sebuah form, merubah warna button setelah di klik, dll.

## 2. Penjelasan Event

Event merupakan suatu respon dari web atau sistem terhadap kegiatan yang dilakukan oleh user dimana kegiatan tersebut akan memicu jalannya script javascript yang terhubung dengan file HTML dari web tersebut. 

## 3. Penjelasan Detail Materi
Contoh-contoh event umum pada javascript, misalnya : 

### 3.1 `onclick`
`onclick` adalah event yang terjadi ketika user melakukan klik pada suatu element. Syntax dibawah ini akan menampilkan pesan "event click terjadi"
```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <button onclick="alert('event click terjadi')">Tekan saya</button>
  </body>
</html>
```

### 3.2 `onkeypress`
`onkeypress` adalah event yang terjadi ketika user menekan keyboard. Syntax dibawah ini akan menampilkan alert yang berisi "hallo! ini pakai onkeypress" saat user menekan keyboard. Isi alert dapat disesuaikan dengan kebutuhan dan keinginan. Onkeypress tidak berlaku untuk semua key (contoh: `ALT`, `CTRL`, `SHIFT`) di semua browser.

```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <input type="text" onkeypress="alert('hallo! ini pakai onkeypress')" />
  </body>
</html>

```

### 3.3 `onchange`   
`onchange` adalah event yang terjadi ketika nilai dari input form berubah. Syntax ini akan menampilkan inputan yang dibuat user dalam console browser.

```html
<html>
  <head>
      <title>Belajar Event</title>
  </head>
  <body>
      <input onchange="console.log('halo, ini pakai onchange')" />
  </body>
</html>

```

### 3.4 `onload`
`onload` merupakan event yang terjadi ketika suatu elemen selesai dimuat. Pada contoh dibawah ini, akan muncul pesan `gambar dimuat` saat `<img />` selesai dimuat pada browser.

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
`onkeydown` merupakan event yang terjadi ketika tombol keyboard ditekan atau dalam posisi down. jika `onkeypress` tidak berlaku pada key tertentu, hal itu tidak berlaku pada `onkeydown`. `onkeydown` dapat digunakan juga saat user menekan tombol `ALT`, `CTRL`,`SHIFT`
```html
<input type="text" onkeydown="alert('hallo. ini pakai onkeydown')" />
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
      Enter name: 
      <input type="text">
      <input type="submit">
    </form>
  </body>
</html>

```

contoh lain dari event javascript dapat dilihat pada referensi

## 4. Referensi

- **w3school** - https://www.w3schools.com/js/js_events.asp
- **flaviocopes** - https://flaviocopes.com/javascript-events/