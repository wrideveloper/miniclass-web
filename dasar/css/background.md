# Background

Dengan menggunakan CSS, kita dapat memberikan background pada elemen HTML seperti div

## 1. Background Color

Kita bisa merubah warna background suatu elemen menggunakan property `background-color`

```css
body {
  background-color: lightblue;
}
h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
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

Apabila image yang kita jadikan background tidak cukup besar, maka kita bisa melakukan repeating pada image tersebut menggunakan property `background-repeat`

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

Apabila image yang kita jadikan background terlalu besar, kita dapat memposisikan background tersebut menggunakan property `background-position` dan diisi dengan posisi horizontal dan vertical

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
```
