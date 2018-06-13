# Pengenalan Preprocessor CSS

**Preprocessor CSS** adalah tools yang menyediakan fitur-fitur yang tidak terdapat pada CSS. Fitur-fitur tersebut banyak mengadopsi konsep-konsep pemograman seperti operasi matematika dasar, variabel, perulangan dan fungsi. 

![Preprocessor CSS](css-preprocessor.jpg)

Cara kerjanya adalah kita menulis script pada file berekstensi lain, lalu dengan memasukan baris perintah pada terminal atau command prompt, preprocessor akan menerjemahkan sintaks-sintaks tersebut ke dalam bentuk CSS dan menghasilkan file CSS yang siap untuk digunakan.

> Sebagai contoh, kamu ingin mengubah shade warna biru yang kamu gunakan di beberapa bagian website. Menggunakan preprocessor CSS, kamu hanya perlu mengganti satu hex value melainkan harus mengubahnya berkali-kali dalam kode CSS-mu.

**Berikut adalah beberapa contoh Preprocessor CSS:**

## 1. Sass

Sass merupakan kepanjangan dari *Syntactically Awesome Style Sheets* yang termasuk dalam salah satu tools preprocessor css.

![Sass](sass.png)

Ada dua cara penulisan SASS, yaitu dengan menggunakan ekstensi `.sass` atau `.scss`. Perbedaannya dari kedua file tersebut, apabila `.scss` kita menuliskan kode SASS mirip dengan css, namun dengan penambahan fitur yang dimiliki oleh SASS, sedangkan `.sass` tidak menggunakan kurung kurawal dan titik koma sama sekali.

**Contoh sintaks penulisan Sass:**

```
$mainColor: #0982c1;
$siteWidth: 1024px;
$borderStyle: dotted;
 
body {
  color: $mainColor;
  border: 1px $borderStyle $mainColor;
  max-width: $siteWidth;
}
```

### Keunggulan Sass:

* SASS sangat kompatibel dengan semua versi CSS, kita dapat menggunakan semua library CSS yang tersedia.
* Memungkinkan untuk menggunakan Sekumpulan sintaks dan fungsi yang berguna seperti warna manipulasi, matematika, dan nilai-nilai lain.
* memiliki banyak fitur dan lebih powerful.

**Beberapa tutorial Sass:**

* **Sekolah Koding** - [https://www.youtube.com/playlist?list=PLCZlgfAG0GXBIi8ZDcuN658AzNAzFN0Kv](https://www.youtube.com/playlist?list=PLCZlgfAG0GXBIi8ZDcuN658AzNAzFN0Kv)
* **Petani Kode** - [https://www.petanikode.com/sass-untuk-pemula](https://www.petanikode.com/sass-untuk-pemula)
* **Situs resmi Sass** - [https://sass-lang.com](https://sass-lang.com)

## 2. LESS
Sama seperti Sass, LESS adalah preprosesor CSS yang memberikan sentuhan dinamis kepada CSS dengan fitur variabel, mixin, serta operasi dan fungsi yang dimilikinnya. 

![Less](less.png)

Proses kompilasi LESS menjadi CSS dapat berjalan baik di sisi klien dengan javascript maupun di sisi server dengan bantuan **Node.js** dan **Rhino**. Berkas LESS yang memiliki format `*.less` dan akan diubah menjadi file berformat CSS oleh file javascript less.js pada sisi klien atau melalui kompilasi pada sisi server.

**Contoh sintaks penulisan LESS:**

```
@mainColor: #0982c1;
@siteWidth: 1024px;
@borderStyle: dotted;
 
body {
  color: @mainColor;
  border: 1px @borderStyle @mainColor;
  max-width: @siteWidth;
}
```

### Keunggulan LESS:
* LESS menggunakan javascript, jadi bisa langsung pakai saja `less.js` tanpa harus download lagi compiler untuk mengubah dari `.less` ke `.css`, sedangkan SASS memakai ruby untuk compilernya.
* Lebih mudah dipelajari karena sintaksnya lebih mendekati css.

**Beberapa tutorial LESS:**

* **Dasar LESS** - [https://www.hongkiat.com/blog/less-basic/](https://www.hongkiat.com/blog/less-basic/)
* **Jagocoding** - [http://jagocoding.com/tutorial/711/Tutorial_Dasar_CSS_Preprocessor_LESS](http://jagocoding.com/tutorial/711/Tutorial_Dasar_CSS_Preprocessor_LESS)
* **Situs resmi LESS** - [http://lesscss.org](http://lesscss.org)

## 3. Stylus

Stylus termasuk dalam salah satu tools preprocessor css yang perkembangannya  dipengaruhi oleh Sass dan LESS. Stylus ditulis dengan bahasa **JADE** dan **Node.js**.

![Stylus](stylus.png)

Sintaks penulisan Stylus jauh lebih ringkas, dengan menggunakan ekstensi file `.styl`, Stylus juga dapat menerima sintaks penulisan CSS standar dan juga menerima beberapa variasi lain di mana terdapat tanda kurung, titik dua, dan titik koma.

**Contoh sintaks penulisan Stylus:**

```
mainColor = #0982c1
siteWidth = 1024px
$borderStyle = dotted
 
body
  color mainColor
  border 1px $borderStyle mainColor
  max-width siteWidth
```

### Keunggulan Stylus:

* Stylus dibangun dan berjalan pada bahasa yang sedang naik daun yaitu **Node.js**
* Penulisan sintaks yang simpel, ringkas dan fleksibel.
* Stylus memiliki sintaks yang mudah dipahami.
* Mampu berjalan sebagai bagian dari setup Node.js yang berjalan berdasarkan penggunaan Grunt dan Bower.

**Beberapa tutorial Stylus:**

* **Dasar Stylus** - [https://www.youtube.com/playlist?list=PLLnpHn493BHFWQGA1PcyQZWAfR96a4CkH](https://www.youtube.com/playlist?list=PLLnpHn493BHFWQGA1PcyQZWAfR96a4CkH)
* **Try Stylus Online** - [http://stylus-lang.com/try.html](http://stylus-lang.com/try.html)
* **Situs resmi Stylus** - [http://stylus-lang.com](http://stylus-lang.com)
