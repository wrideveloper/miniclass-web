# Height dan Width

## 1. Permasalahan

Pada pembuatan website, terkadang kita harus menentukan tinggi dan lebar suatu elemen agar sesuai dengan desain yang sudah ditentukan oleh desainer. Misalnya pada suatu website kita harus menampilkan image dengan tinggi `300px` dan `500px`, sedangkan image yang kita punya ukurannya tidak sesuai dengan kondisi diatas. Bagaimana cara merubah ukuran image tersebut menggunakan CSS ?

## 2. Height dan Width?

Pada sebuah elemen HTML, kita bisa mengatur tinggi dan lebar elemen tersebut. Untuk mengubahnya, kita menggunakan properti dari `CSS` yaitu `height` dan `width`. Juga properti `height` dan `width` memiliki beberapa 'keluarga' yang akan kita bahas dibawah.

`height` : properti yang mengatur tinggi elemen.  
`width` : properti yang mengatur lebar elemen.

`min-height` : properti yang mengatur tinggi minimal suatu elemen.  
`min-width` : properti yang mengatur lebar minimal suatu elemen.

`max-height` : properti yang mengatur tinggi maksimal suatu elemen.  
`max-width` : properti yang mengatur lebar maksimal suatu elemen.

## 3. Contoh Kasus

Misal kita akan membuat sebuah halaman web yang menampilkan sebuah artikel dengan gambar. Kita buat struktur HTML untuk halaman artikel seperti dibawah, lalu kita buka file tersebut pada web browser.

```html
<!-- index.html -->
<html>
  <head>
    <title>Judul</title>
  </head>
  <body>
    <div>
      <center>
        <img
          src="https://cdn2.tstatic.net/tribunnews/foto/bank/images/bromo-tengger-semeru-national-park.jpg"
        />
      </center>
    </div>
    <div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique
        velit, voluptatibus debitis expedita neque at iusto consequatur tenetur
        ipsam sit vitae minima ratione. Beatae soluta reiciendis eveniet neque
        molestias veniam eaque facere ad illo numquam sapiente, adipisci eos sed
        sint, facilis itaque amet consectetur et velit. In, accusantium minus?
      </span>
    </div>
  </body>
</html>
```

![no-width-height](no-width-height.png)

Gambar tersebut terlalu besar, sehingga tampilan artikel tidak proporsional, dimana paragrafnya terlalu sedikit sedangkan gambarnya terlalu besar. Sehingga ukuran gambar perlu diperbaiki menggunakan width dan height pada CSS. Ukuran gambar sebelum kita ubah memiliki `height` sebesar 393 pixel dan `width` 700 pixel

Maka dari itu kita membutuhkan 1 file CSS baru dengan nama `style.css` untuk memperbaiki ukuran gambar.

```css
/* style.css */

/* Pilih elemen `img` dari HTML yang akan kita atur dengan CSS*/
img {
  /* Atur properti `height` dan `width disini` */
}
```

Lalu kita masukkan file CSS tersebut kedalam HTML kita. Panggil file CSS menggunakan tag `<link/>`diantara tag `<head></head>`

```html
<!-- index.html -->
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Judul</title>
  </head>
  <body>
    <!-- Lanjutan kode seperti diatas -->
  </body>
</html>
```

### 3.1. Menentukan Height dan Width

Untuk menentukan ukuran dari suatu elemen, kita dapat menggunakan property `height` dan `width`. Sekarang kita akan mengatur ukuran dari elemen `img` menjadi lebih kecil dengan `height` `200px` dan `width` sebesar `400px`.

```css
img {
  height: 200px;
  width: 400px;
}
```

![with-width-height](with-width-height.png)

### 3.2. Menentukan Maksimal Height dan Width

Untuk menentukan ukuran maksimal dari suatu elemen, kita dapat menggunakan property `max-height` dan `max-width`. Sehingga ukuran maksimal dari elemen `img` tidak bisa melewati batas yang telah kita tetapkan. Kita beri batas untuk `height` maksimal `500px` dan `width` maksimal `300px`

```css
img {
  max-height: 500px;
  max-width: 300px;
}
```

![with-mxwidth-mxheight](with-mxwidth-mxheight.png)

### 3.3. Menentukan Minimal Height dan Width

Untuk menentukan ukuran minimal dari suatu elemen, kita dapat menggunakan property `min-height` dan `min-width`. Sehingga apabila gambar kita memiliki ukuran lebih kecil dari batas minimal yang kita tentukan, akan disesuaikan dengan `min-height` dan `min-width` pada styling kita. Pada contoh kita beri ukuran minimal untuk `img` adalah `height` `400px` dan `width` `1000px`.

```css
img {
  min-height: 400px;
  min-width: 1000px;
}
```

![with-mnwidth-mnheight](with-mnwidth-mnheight.png)
