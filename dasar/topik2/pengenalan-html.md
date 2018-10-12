# :school_satchel: Pengenalan HTML

## :bookmark_tabs: Tujuan

- Mengulas dasar dasar pada HTML

## :clipboard: Pembelajaran

**Hypertext Markup Language** (HTML) adalah satu dari banyak bahasa markup yang menjadi bagian pembangun dasar sebuah halaman web (webpage). Saat ini versi terbarunya adalah versi 5.1, secara resmi disebut HTML5. Digunakan untuk membuat dan merepresentasikan secara visual sebuah webpage.

HTML mudah dipelajari karena hanya sebuah markup, memungkinkan kita untuk membuat website statis maupun dinamis. Dengan sintaks HTML juga, kita bisa mendeskripsikan apa saja yang ada dalam sebuah website secara semantik dari konten yang ada di website tersebut. Kita sepertinya juga sudah tau bahwa apapun yang terlihat di browser ditentukan menggunakan HTML.

Sintaks atau cara penulisan HTML biasanya terlihat seperti ini:

```html
<!doctype html>
<html>
  <title>Website Ayas</title>
<body>
  <div>
    <h1>Halo, ini heading loh</h1>
    <p>Sebuah paragraf.</p>
  </div>
</body>
</html>
```

### :pencil2: Elemen Dasar html

Dokumen atau konten HTML dalam sebuah halaman web dideskripsikan dengan elemen HTML atau tag seperti `head`, `title`, `body`, `p`, `div`, `span`, `img`, dan banyak lainnya. Elemen-elemen ini membentuk bagian pembangun blok pada sebuah website. Website dapat memiliki sedikit atau banyak dari elemen-elemen tersebut.

### :orange_book: Varian Headings

Terdapat enam varian heading, diurutkan (ranked) tergantung dari pentingnya dan ukurannya, menggunakan angka seperti `h1`, `h2`, `h3`, `h4`, `h5`, `h6`,

```
<h1>Ini heading 1 loh</h1>
<h2>Ini heading 2 loh</h2>
<h3>Ini heading 3 loh</h3>
<h4>Ini heading 4 loh</h4>
<h5>Ini heading 5 loh</h5>
<h6>Ini heading 6 loh</h6>
```

### :page_facing_up: Paragraph

Sebelumnya sudah melihat paragraf, teks panjang yang berisi sebuah penjelasan atau cerita (apapun!), yang juga dapat terbagi ke beberapa bagian (section). Kita bisa gunakan paragraf untuk menyajikan teks polos apapun.

```html
<p>
Sejarah. JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para programmer yang non-Java.
</p>
```

### :book: Styling pada teks

Styling umum yang dapat digunakan antara lain bold (`b`), italic (`i`), underline (`u`), dan strike-through (`s`).

```html
<p>
  He is <strong>the strongest hero<strong> in <em>Universe 7</em>.
  <b>"But I also need to compare with heroes in other universes, <i>right</i>?"</b>, said <s>them</s> him.
</p>
```

### :anchor: Anchor untuk Link

Jika kita butuh menautkan halaman ke halaman lain, gunakan _anchor_ dengan URL. Anchor ini juga disebut hyperlink (hypertext anchor). Anchor ini memerlukan atribut `href` agar bisa bekerja.

Contoh penggunaan menggunakan :

```html
<a href="https://www.instagram.com/wri_polinema/">Go to WRI Instagram page</a>
<a>Ini Ngga bisa dipencet loh</a>
```

### :clipboard: List

Ada dua jenis daftar, tidak berurutan `unordered list`(`ul`) dan berutuan `ordered list`(`ol`). Setiap item pada list dideklarasikan dengan tag `li`.

```html
<ul>
  <li>Pikachu</li>
  <li>Raichu</li>
</ul>

<ol>
  <li>Bulbasaur</li>
  <li>Charmeleon</li>
</ol>
```

### :straight_ruler: Table

Menampilkan data dan informasi dalam dua dimensi , Diwajibkan menggunakan `table` untuk melakukannya. Catatan bahwa table bukan untuk digunakan sebagai `layout` atau `memposisikan` sebuah halaman website, namun sebaiknya hanya untuk menampilkan data saja. Gunakan kombinasi `table` dengan `tr`, `th`, `td`.

```html
<table>
    <tr>
      <th>Nama Negara</th>
      <th>Ibukota</th>
    </tr>
    <tr>
      <td>Indonesia</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>Kanada</td>
      <td>Ottawa</td>
    </tr>
    <tr>
      <td>Palestina</td>
      <td>Jarrussalem</td>
    </tr>
</table>
```

### :cd: Figure Image , Audio , Video

Dengan html, kita juga bisa menampilkan gambar, video dan audio dengan menggunakan tag `img`, `video`, dan `audio`

```html
<img src="assets/fotoku.jpg">
<video src="video.mp4" controls>
<audio src="music.mp3" controls>
```

### :pencil: Input

Untuk menerima inputan dari user, kita bisa menggunakan tag `input` untuk menampilkan input text, checkbox, radio, button, dan lain lain

```html
<input type="text">
<input type="checkbox">
<input type="radio">
<input type="button">
```

### :office: Div

untuk mengelompokkan beberapa tag html biasanya kita menggunakan `div`, div ini berfungsi agar tag - tag html yang dikelompokkan mudah diberikan styling serta mempermudah dalam pembuatan layout

```html
<div>
  <h1>Saya berada didalam div</h1>
  <p>Saya juga berada didalam div</p>
  <a href="http://google.com">pergi ke google</a>
</div>
```

**:books: Untuk mempelajari tentang HTML silahkan pelajari lewat link - link berikut :**

- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [Belajar HTML5, oleh Sekolah Koding](http://www.sekolahkoding.com/kelas/belajar-html5)
- [The Best Way to Learn HTML, on Envato Tuts+](http://webdesign.tutsplus.com/tutorials/the-best-way-to-learn-html-2--webdesign-10144)
- [HTML Cheatsheet](http://www.simplehtmlguide.com/cheatsheet.php)
- [HTML5 PDF Cheatsheet](https://websitesetup.org/HTML5-cheat-sheet.pdf)
