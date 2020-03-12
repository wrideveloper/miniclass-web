# 1. Permasalahan

Terkadang dalam membuat halaman web kita tidak mengetahui batas dari konten yang kita buat pada halaman web, salah satu cara untuk mengetahui batas konten yang telah kita buat kita dapat menggunakan `border`. 

# 2. Pengertian
 `border` merupakan salah satu jenis dari property css yang biasa digunakan untuk memberi batasan pada kontent yang kita buat pada halaman website.

# 3. Pengaplikasian
Buat file.html dan isikan kode dibawah :
```html
<html>
    <head>
        <title>Belajar Border</title>
        <link rel="stylesheet" href="./file.css">
    </head>
    <body>
        <p>Belajar pengaplikasian border</p>
    </body>
</html>
```
## 3.1. Border-style

`border` sendiri memiliki banyak jenis property dan yang kita gunakan untuk mengatur jenis `border` adalah property `border-style`, property `border-style` juga memiliki beberapa value seperti :

- dotted
- dashes
- solid
- double 
- groove
- ridge
- inset
- outset
- none
- hidden

buatlah file.css dan implementasikan kode dibawah menggunakan value yang ada pada `border-style` :

```css
/* p{
    border-style: value;
} */

p{
    border-style: solid;
}
```

## 3.2. Border Width

Kita juga dapat mengatur lebarnya `border` yang kita buat menggunakan property `border-width`

```css
p {
  border-style: solid;
  border-width: 5px;
}
```

## 3.3. Border Color

Kita juga dapat mengubah warna `border` yang kita buat menggunakan property `border-color`

```css
p {
  border-style: solid;
  border-color: red;
}
```

## 4. Border Radius

Kita dapat menggunakan property `border-radius` untuk mengatur tingkat kelengkungan pada setiap ujung konten yang kita buat.

```css
p {
  border-style: solid;
  border-radius: 5px;
}
```

```
NOTE : untuk mengatur ukuran,warna,dan radius pada border kita perlu menambahkan property border-style agar perubahan border yang kita buat dapat ditampilkan.
```