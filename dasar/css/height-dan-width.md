# Height dan Width

## 1. Permasalahan

Pada pembuatan website, terkadang kita ingin menentukan ukuran suatu elemen. Maka dari itu kita dapat mengatur ukuran dengan properti height dan width dari elemen tersebut, agar layout dari elemen tadi sesuai dengan desain yang diinginkan.

## 2. Penjelasan

Dengan menggunakan CSS, kita bisa mengubah properti height dan width dari suatu elemen.

## 3. Height dan Width?

Pada sebuah elemen HTML, ada properti yang berfungsi untuk mengatur tinggi dan lebar suatu elemen, yitu Height dan Width. Juga properti Height dan Width memiliki beberapa 'keluarga' yang akan kita bahas dibawah.

`height` : properti yang mengatur tinggi elemen.  
`width` : properti yang mengatur lebar elemen.

`min-height` : properti yang mengatur tinggi minimal suatu elemen.  
`min-width` : properti yang mengatur lebar minimal suatu elemen.

`max-height` : properti yang mengatur tinggi maksimal suatu elemen.  
`max-width` : properti yang mengatur lebar maksimal suatu elemen.

## 4. Contoh Kasus

Misal kita akan membuat sebuah halaman web yang menampilkan sebuah artikel dengan gambar. Gambar tersebut terlalu besar, sehingga tampilan artikel tidak proporsional, dimana paragrafnya terlalu sedikit sedangkan gambarnya terlalu besar. Sehingga ukuran gambar perlu diperbaiki menggunakan width dan height pada CSS. Ukuran gambar sebelum kita ubah memiliki `height` sebesar 393 pixel dan `width` 700 pixel

![no-width-height](no-width-height.png)

### 1. Menentukan Height dan Width

Untuk menentukan ukuran dari suatu elemen, kita dapat menggunakan property `height` dan `width`. Sekarang kita akan mengatur ukuran dari elemen `img` menjadi lebih kecil dengan `height` 200 pixel dan `width` sebesar 400 pixel.

```css
img {
  height: 200px;
  width: 400px;
}
```

![with-width-height](with-width-height.png)

### 2. Menentukan Maksimal Height dan Width

Untuk menentukan ukuran maksimal dari suatu elemen, kita dapat menggunakan property `max-height` dan `max-width`. Sehingga ukuran maksimal dari elemen `img` tidak bisa melewati batas yang telah kita tetapkan. Kita beri batas untuk `height` maksimal 300 pixel dan `width` maksimal 500 pixel

```css
img {
  max-height: 500px;
  max-width: 500px;
}
```

![with-mxwidth-mxheight](with-mxwidth-mxheight.png)

### 3. Menentukan Minimal Height dan Width

Untuk menentukan ukuran minimal dari suatu elemen, kita dapat menggunakan property `min-height` dan `min-width`. Sehingga apabila gambar kita memiliki ukuran lebih kecil dari batas minimal yang kita tentukan, akan disesuaikan dengan `min-height` dan `min-width` pada styling kita.

```css
img {
  min-height: 400px;
  min-width: 1000px;
}
```

![with-mnwidth-mnheight](with-mnwidth-mnheight.png)
