# :art: Pengenalan CSS

## :bookmark_tabs: Tujuan

- Mengulas dasar dari CSS

## :clipboard: Pembelajaran

**Cascading StyleSheet** CSS merupakan bahasa `style sheet` yang berguna untuk membantu menyajikan dokumen yang ditulis dengan HTML maupun XML bahkan SVG. CSS mengatur bagaimana elemen-elemen seharusnya ditampilkan di layar, di kertas, dan berbagai media lainnya. Hal-hal seperti warna, ukuran, posisi, dll (color, size, position, etc) dapat diatur oleh CSS. Tentu saja berarti CSS membutuhkan HTML agar dapat bekerja. Saat ini versi terbarunya adalah versi 3, secara resmi disebut CSS3.Kalau HTML hanya bisa menentukan struktur tampilannya, maka CSS dapat menentukan bagaimana gaya dari tampilan tersebut.

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
  margin: 50px;
}
button:hover {
  background-color: #ffecb3;
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
  @import 'otherfile.css';
  ```

### :gem: Selector

Setiap elemen HTML yang ada di halaman web dapat dimodifikasi ataupun dihias dengan CSS. Selector digunakan untuk memilih elemen html mana yang akan kita ubah stylingnya.

Bentuk umum selector seperti berikut:

```css
selector {
  property: value;
  property: value;
}
```

### :ribbon: Property

Setelah elemen dipilih, property dari style yang tersedia dapat diterapkan pada elemen tersebut. Nama properti diikuti dengan tanda titik dua (colon) (`:`) diikuti dengan nilai/value yang ditutup dengan titik koma (`;`)

Properti umum yang bisa digunakan :

- `color`
- `font`
- `background`
- `border`
- `width dan height`
- `margin dan padding`
- `display`

### :mega: Komentar

Menambahkan Komentar pada CSS

```css
/* Komentar mabro  */
selector {
  property: value;
}
```

### :rainbow: Animasi

Dengan animation kita bisa menspesifikasikan beberapa keyframe yang menjadi titik utama animasi. Yaitu style-style apa saja yang akan diatur pada waktu tertentu.

```css
@keyframes resize {
  0% {
    padding: 0;
  }
  50% {
    padding: 0 10px;
  }
  100% {
    padding: 0 30px;
  }
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
