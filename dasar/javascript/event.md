# Event Pada Javascript

<img src="event.png" width="600" />

## 1. Penjelasan Event

Event merupakan suatu hal yang terjadi pada website kita, contoh dari event misalnya : 

1. Ketika user melakukan klik pada button (**onclick**)
2. Ketika user menekan keyboard (**onkeypress**)
3. Ketika nilai dari input form berubah (**onchange**)
4. Ketika suatu elemen selesai dimuat (**onload**)
5. Dan masih banyak lagi
  
## 2. Event Handler

### 2.1. Penjelasan Event Handler

Event handler merupakan suatu fungsi yang akan dijalankan saat suatu event terjadi

### 2.2. Cara Membuat Event Handler

Ada tiga cara umum yang dapat kita gunakan untuk membuat event handler pada javascript

#### 2.2.1 Menggunakan Inline Event Handler

Kita dapat menuliskan event handler langsung pada file html dengan menambahkan attribute pada suatu element

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

#### 2.2.2 Menggunakan DOM Event Handler

Kita juga dapat menuliskan event handler pada file javascript  

```javascript
// index.js

// ambil element yang akan ditambahkan event handler
var button = document.getElementById("id")

// masukkan event handler pada onclick
button.onclick = function() {
  console.log('event click terjadi')
}
```

## 3. Event Object

Sebuah event handler akan mendapatkan object `event` sebagai parameter pertama yang berisi informasi terkait event yang sedang terjadi

```javascript
// index.js

var button = document.getElementById("id-button")
button.onclick = function(event) {
  // menampilkan button mouse mana yang diklik (kanan atau kiri)
  console.log(event.button)
}

var input = document.getElementById("id-input")
input.onchange = function(event) {
  // menampilkan value dari input setelah valuenya berubah
  console.log(event.target.value)
}
```

## 4. Referensi

- **w3school** - https://www.w3schools.com/js/js_events.asp
- **flaviocopes** - https://flaviocopes.com/javascript-events/