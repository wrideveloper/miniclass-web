# :art: Pengenalan CSS

## :bookmark_tabs: Tujuan
- Mengulas dasar dari CSS

## :clipboard: Pembelajaran

**Cascading StyleSheet**  CSS merupakan bahasa `style sheet` yang berguna untuk membantu menyajikan dokumen yang ditulis dengan HTML maupun XML bahkan SVG. CSS mengatur bagaimana elemen-elemen seharusnya ditampilkan di layar, di kertas, dan berbagai media lainnya. Hal-hal seperti warna, ukuran, posisi, dll (color, size, position, etc) dapat diatur oleh CSS. Tentu saja berarti CSS membutuhkan HTML agar dapat bekerja. Saat ini versi terbarunya adalah versi 3, secara resmi disebut CSS3.Kalau HTML hanya bisa menentukan struktur tampilannya, maka CSS dapat menentukan bagaimana gaya dari tampilan tersebut.

Apabila kita ingin membuat sebuah halaman web, maka kita akan menggunakan **kombinasi dari HTML dan CSS** agar tampilan web kita **terstruktur** dan **indah**

Cara penulisan **CSS** biasanya terlihat seperti ini:

```css
h1 {
  font-weight: 800;
  color: gray;
}
p {
  color: orange;
}
#website-title {
  padding: 10px;
}
.container {
    margin : 50px;
}
button:hover {
  background-color: #FFECB3;
}
```

### :telescope: Memasukkan CSS untuk HTML

Ada 4 metode untuk menyertakan CSS agar dapat mengubah layout HTML.
 - Embed HTML
    ```css
        <style type="text/css" media="screen">
            selector { property: value; }
        </style>
    ```
 - Eksternal CSS
    ```css
        <link href="mystyles.css" rel="stylesheet" type="text/css">
    ```
 - Inline CSS
    ```css
        <tag style="color:orange background:yellow;">isi tag</tag>
    ```
 - Import ke tiap CSS ,misal didalam custom.css
    ```css
        @import "otherfile.css";
    ```

### :gem: Selector

Setiap elemen HTML yang ada di halaman web dapat dimodifikasi ataupun dihias dengan CSS. Selector menunjuk elemen apa yang ada di HTML untuk diterapkan style/modifikasinya (seperti warna, ukuran, posisi). Selector dapat merupakan satu atau kombinasi syarat (qualifiers) untuk memilih elemen yang unik, tergantung spesifikasi yang kita tulis.

Bentuk umum selector seperti berikut:
```css
selector { property: value; /* properti lain lain */ }
```

Terdapat perbedaaan cara seleksi antarra lain :
 - semua paragraf yang ada di halaman web
 - suatu paragraf yang ada di dalam div
```css
/* semua paragraf */
p {
  color: pink;
}
/* paragraf di dalam div */
div p {
  background-color: clay;
}
```

Selector juga biasanya menunjuk nilai atribut seperti id atau class ataupun tipe elemen seperti `<h1>` atau `<p>`Setelah menunjuk atribut atau elemen, terdapat definisi yang menggunakan kurung keriting (curly bracket) seperti { } yang berisi modifikasi yang ingin dilakukan terhadap atribut atau elemen yang dituju.

Misalkan ada elemen HTML seperti berikut : 
```html
<div class="bordered container" id="main"></div>
```
Maka kita dapat mendefinisikan CSS selector seperti berikut : 

```css
div {
    width ; 100px;
}
#main {
    background-color : black;
}
.bordered {
    border: 1px solid black;
}
.bordered .container {
    width: 50px;
}
```

### :ribbon: Properti
Setelah elemen dipilih, properti dari style yang tersedia dapat diterapkan pada elemen tersebut. Nama properti diikuti dengan tanda titik dua (colon) (`:`) diikuti dengan nilai/value yang ditutup dengan titik koma (`;`)

Properti umum yang bisa digunakan :
- `color`
- `background`
- `font-size`
- `height and weight`

### :mega: Komentar
Menambahkan Komentar pada CSS
```css
/* Komentar mabro  */
selector { property: value; } /* Komen brobro */
```

### :white_square_button: Box Model dan Posisi
Sekarang, bagaimana cara elemen-elemen ditampilkan pada halaman dan diatur ukuran serta posisinya? Untuk itu kita perlu mengetahui box model. Juga ingat kembali tentang adanya level penempatan elemen, antara `block` atau `inline` yang mana setiap elemen memiliki value default tersebut pada properti `display`. Ada berbagai value lain seperti `inline-block`, `float`, `absolute`, `relative`, `fixed`, dan `none`.

Value display diatur seperti berikut:
```css
p {
  display: inline-block;
}
```

`inline-block` berarti bersifat seperti elemen level `block`, punya berbagai properti box model, namun tetap ditampilkan sebaris `(inline)` dengan elemen lain, tidak memulai baris baru.

Sehubungan dengan box model, umpamakan setiap elemen HTML seperti kotak yang memiliki beberapa lapisan jarak `(padding)`, batas `(border)`, pinggiran `(margin)`, dan posisi `(position)` diilustrasikan seperti ini, yang bahkan kamu bisa lihat dengan membuka Chrome Dev Tools.

![html-css-box-model.png](html-css-box-model.png)

### :fireworks: Transformasi

Transformasi memungkinkan kita untuk mengubah bentuk atau orientasi elemen seperti scale, rotate, translate, skew. Hal ini juga dapat dikombinasikan dengan transition.
```
h1 {
  transition: all 1s;
}
h1:hover {
  transform: scale(1,2) skew(-15deg);
}
```

### :rainbow: Animasi
Dengan animation kita bisa menspesifikasikan beberapa keyframe (bingkai kunci) yang menjadi titik utama animasi. Yaitu style-style apa saja yang akan diatur pada waktu tertentu.
```css
@keyframes resize {
  0% { padding: 0; }
  50% { padding: 0 10px; }
  100% { padding: 0 30px; }
}
h1 {
  animation: resize 1s alternate infinite ease-in-out;
}
```

Ada beberapa properti umum yang bisa digunakan seperti:

**Untuk mempelajari tentang CSS silahkan pelajari lewat link - link berikut** :

- [W3 School](https://www.w3schools.com/css/default.asp)
- [CSS Tricks](https://css-tricks.com/)
- [Meet the Pseudo Class Selectors, on CSS Tricks](https://css-tricks.com/pseudo-class-selectors)
- [How To Use CSS3 Pseudo-Classes, by Richard Shepherd on Smashing Magazine](https://www.smashingmagazine.com/2011/03/how-to-use-css3-pseudo-classes)
- [Decoupling HTML From CSS, by Jonathan Snook on Smashing Magazine](https://www.smashingmagazine.com/2012/04/decoupling-html-from-css)
- [Belajar CSS dari dasar, oleh Sekolah Koding](http://www.sekolahkoding.com/kelas/belajar-css-dari-dasar)
- [Belajar CSS3, oleh Sekolah Koding](http://www.sekolahkoding.com/kelas/belajar-css3)