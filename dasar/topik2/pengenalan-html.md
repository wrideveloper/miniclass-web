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

Dokumen atau konten HTML dalam sebuah halaman web dideskripsikan dengan elemen HTML atau tag seperti `head`, `title`, `body`, `article`, `section`, `p`, `div`, `span`, `img`, `picture`, dan banyak lainnya. Elemen-elemen ini membentuk bagian pembangun  blok pada sebuah website. Website dapat memiliki sedikit atau banyak dari elemen-elemen tersebut.

### :scroll: Deklarasi Tipe Dokumen 

Deklarasi `!DOCTYPE` di awal membantu browser untuk menampilkan halaman web secara benar.
Secara formal, setiap dokumen HTML yang valid harus menyertakan ini (satu kali saja di atas) setiap dokumen. Ini juga termasuk mengatur tipe dokumen (yang mana adalah HTML) dan versinya sekaligus. Untuk sekarang kita hanya perlu HTML versi 5, atau disebut juga "HTML5".
Deklarasinya tidak case sensitive, jadi kita bisa gunakan bentuk huruf apapun:

```html
<!DOCTYPE HTML>
<!DOCTYPE html>
<!doctype html>
```

### :pencil: Komentar (Comment)

Kadang kala kita butuh menjelaskan apa yang terjadi atau menaruh penjelasan di beberapa tempat. Kita dapat gunakan komentar yang disertakan di baris sendiri atau di tempat yang tepat. Kita bisa juga gunakan ini sebagai teks sementara (placeholder).

```html
<!-- Ini sebuah artikel -->
<article>
  <h1><!-- Ini title --></h1>
  <p>ini cerita gw</p> <!-- lagi nulis -->
</article>
```

### :chart_with_upwards_trend: Meta Data/Information

Meta data/information adalah sebuah cara untuk menyertakan hal penting tentang sebuah dokumen
yang akan dibaca oleh browser, walau tidak terlalu diperhatikan pengunjung website pada umumnya, walaupun developer biasanya membacanya. Ada beberapa tag meta data umum yang digunakan seperti `head`, `meta`, `link`, `style`, dan `script`. Biasanya mereka ada di bagian `head`.

```html
<html>
    <head>
    <meta charset="utf-8">
    <title>My Simple Website Title</title>
    <meta description="Showing what HTML can do">
    <link href="/favicon.png" rel="icon" type="image/png">
    <link href="/index.css" rel="stylesheet" type="text/css" media="all">
    </head>
    <body>
    </body>
</html>
```

### :card_index: Header dan Footer

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
Dalam paragraf atau heading, kita bisa gunakan strong (`strong`) untuk hal penting yang kuat dan emphasis (`em`) untuk penekanan. Ada juga styling umum lain seperti bold (`b`), italic (`i`), underline (`u`), dan strike-through (`s`).

```html
<p>
  He is <strong>the strongest hero<strong> in <em>Universe 7</em>.
  <b>"But I also need to compare with heroes in other universes, <i>right</i>?"</b>, said <s>them</s> him.
</p>
```

### :memo: Blockquotes
Kutipan dari sumber lain, atau membuat teks kita terlihat keren seperti sebuah kuripan/quote.

```html
<blockquote>
  "Jika ingin bahagia, jangan jadi karyawan"
  — Bob Sadino
</blockquote>
```

### :anchor: Anchor untuk Link
Jika kita butuh menautkan halaman ke halaman lain, gunakan _anchor_ dengan URL. Anchor ini juga disebut hyperlink (hypertext anchor).Beberapa atributnya yang bisa digunakan antara lain adalah `target`, `rel`, `media`, `hreflang`, dan `type`; juga mereka memerlukan atribut `href` agar bisa bekerja.

Contoh penggunaan menggunakan `href` :

```html
<a>Ini Ngga bisa dipencet loh</a>
<a href="https://www.instagram.com/wri_polinema/">Go to Polinema Instagram page</a>  <!-- kita akan sering membutuhkan anchor -->
```

### :clipboard: List 
Ada dua jenis daftar, tidak berurutan `unordered list`(`ul`) dan berutuan `ordered list`(`ol`). Setiap butir daftar dideklarasikan dengan tag `li`.

```html
<ul>
  <li>Pikachu</li>
  <li>Raichu</li>
  <ol>
    <li>Bulbasaur</li>
    <li>Charmeleon</li>
  </ol>
</ul>
```

### :dart: Button

Kita biasanya memakai sebuah tombol yang dapat melakukan sesuatu. Gunakan tombol untuk membuat masukan sekali atau bahkan saklar saat diklik. Tombol dapat diaktifkan atau dinon-aktifkan tergantung dari keinginan kita.

```html
<button name="success">Success Button</button>
<button disabled name="danger">Dangerous Button</button>
```

### :straight_ruler: Table

Menampilkan data dan informasi dalam dua dimensi , Diwajibkan menggunakan `table` untuk melakukannya. Catatan bahwa table bukan untuk digunakan sebagai `layout` atau `memposisikan` sebuah halaman website, namun sebaiknya hanya untuk menampilkan data saja. Gunakan kombinasi `table` dengan `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `col`, `colgroup`.

```html
<table>
  <thead>
    <tr>
      <th>Nama Negara</th>
      <th>Ibukota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Indonesia</td>
      <td>Jakarta</td>
    </tr>
    <tr>
      <td>Kanada</td>
      <td>Ottawa</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Palestina</td>
      <td>Jarrussalem</td>
    </tr>
  </tfoot>
</table>
```

### :cd: Figure Image , Audio , Video

Sebuah gambar bermakna ribuan kata. Namun bukan hanya untuk gambar, figur dapat juga sebuah foto, ilustrasi, diagram, listing kode (code listings), video, lagu audio, dan lain-lain. Dalam HTML5, direkomendasikan untuk menggunakan `figure` yang dapat berisi berbagai informasi yang juga sejalan dengan sebuah judul/caption (`figcaption`) seperti gambar/image (`img`), video (`video`), dan audio (`audio`).

```html
<figure>
  <audio src="music.mp3" controls>
    <a href="music.mp3">Download this music</a>
  </audio>
</figure>
```

Tidak apa-apa menggunakan elemen-elemen tersebut tanpa `figure` jika tidak terlalu dibutuhkan.

```html
<img src="assets/fotoku.jpg">
<video src="video.mp4" controls>
<audio src="music.mp3" controls>
```

### :triangular_ruler: iFrame

Dengan HTML, kita dapat menyertakan HTML di dalam HTML! Seringkali disebut framing, seperti embedding juga, kita dapat gunakan `iframe`.

```html
<iframe src="http://wri.polinema.ac.id/" height="300" width="800"></iframe>
```

**:books: Untuk mempelajari tentang HTML silahkan pelajari lewat link - link berikut :**

- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [Belajar HTML5, oleh Sekolah Koding](http://www.sekolahkoding.com/kelas/belajar-html5)
- [The Best Way to Learn HTML, on Envato Tuts+](http://webdesign.tutsplus.com/tutorials/the-best-way-to-learn-html-2--webdesign-10144)
- [HTML Cheatsheet](http://www.simplehtmlguide.com/cheatsheet.php)
- [HTML5 PDF Cheatsheet](https://websitesetup.org/HTML5-cheat-sheet.pdf)