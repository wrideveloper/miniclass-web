# Background

Dengan menggunakan CSS, kita dapat memberikan background pada elemen HTML seperti div. Terdapat beberapa jenis property untuk mengganti background sebuah elemen yakni :
1.  Background Color
2.  Background Image
3.  Background Repeat
4.  Background Position
5.  Background Attachment

## 1. Background Color

Kita bisa merubah warna background suatu elemen menggunakan property `background-color`

```css
body {
  background-color: lightblue; /*menambahkan background berwarna biru muda pada elemen body*/
}
h1 {
  background-color: #00FF00; /*menambahkan background berwarna hijau pada elemen h1 dengan hex value*/
}

div {
  background-color: rgb(0,0,255); /*menambahkan background berwarna biru pada elemen div menggunakan rgb value*/
}

p {
  background-color: hsl(0, 87%, 81%); /*menambahkan background berwarna pink pada elemen p menggunakan hsl value*/
}
```
## Opacity
Kita juga dapat memberikan efek transparan pada sebuah background elemen dengan property `opacity`

```css
div {
  background-color: lightblue;
  opacity:0.4;
}
```
*note : penggunaan property opacity juga berdampak pada semua child element dari suatu elemen yang memiliki property opacity, sehingga bisa jadi konten dalam element tersebut juga terkena efek tranparan, untuk mengatasi ini kita bisa menggunakan rgba value.

```css
div {
  background-color: rgba(76, 175, 80, 0.3); /* menambahkan warna hijau dengan 30% efek transparan pada div */
}
```



## 2. Background Image

Kita juga bisa merubah background menggunakan image tertentu, caranya dengan menggunakan property `background-image`
```css
body {
  background-image: url('bgdesert.jpg');
}
```

## 3. Background Repeat

Apabila image yang kita jadikan background tidak cukup besar, maka kita bisa melakukan repeating pada image tersebut menggunakan property `background-repeat`.
Namun secara default jika kita memiliki sebuah gambar yang lebih kecil dari ukuran elemen yang dipasangi background maka gambar akan secara otomatis melakukan repeat baik secara vertikal maupun horizontal sampai background elemen tercover seluruhnya

```css
/* repeat secara horizontal */
body {
  background-image: url('gradient_bg.png');
  background-repeat: repeat-x;
}

/* repeat secara vertical */
div {
  background-image: url('gradient_bg.png');
  background-repeat: repeat-y;
}

/* tidak menggunakan repeat */
h1 {
  background-image: url('gradient_bg.png');
  background-repeat: no-repeat;
}
```

## 4. Background Position

Property background position digunakan untuk mengatur posisi gambar yang digunakan untuk background elemen. Untuk mengaturnya kita dapat menggunakan property `background-position` diikuti dengan value horizontal align dan vertical align. 

```css
/* posisikan background secara horizontal center dan vertical center */
body {
  background-image: url('background.jpg');
  background-position: center center;
}

/* posisikan background secara horizontal left dan vertical top */
div {
  background-image: url('background.jpg');
  background-position: left top;
}

/* penggunaan background-position diikuti dengan property background-repeat jika gambar terlalu kecil */
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}

```

## 5. Background Attachment
Property ini dapat digunakan untuk mengatur apakah posisi background fixed atau tidak (jika di scroll ikut background ikut turun mengikuti laman).
```css
/* posisikan background fixed */
body {
  background-image: url("img_tree.png");
  background-attachment: fixed;
}

/* posisikan background scroll */
body {
  background-image: url("img_tree.png");
  background-attachment: scroll;
}
```


