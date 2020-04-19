# 1. Permasalahan

Terkadang dalam membuat halaman web kita tidak mengetahui batas dari konten yang kita buat pada halaman web, salah satu cara untuk mengetahui batas konten yang telah kita buat kita dapat menggunakan `border`. 

# 2. Pengertian
 `border` merupakan salah satu jenis dari property css yang biasa digunakan untuk memberi batasan pada konten yang kita buat pada halaman website.

# 3. Contoh Kasus

disini kita akan membuat halaman website untuk melihat bagaimana border bekerja pada content yang kita buat.

Buat file.html dan isikan kode dibawah :
```html
<html>
    <head>
        <title>Belajar Border</title>
        <link rel="stylesheet" href="./file.css">
    </head>
    <body>
    <!-- disni kita akan menggunakan sebuah paragraf -->
    <!-- dimana nanti content yang ada pada paragraf akan diberi border -->
        <p>Belajar pengaplikasian border</p>
    </body>
</html>
```
## 3.1. Border-style

`border` sendiri memiliki banyak jenis property dan yang kita gunakan untuk mengatur jenis `border` adalah property `border-style`, property `border-style` juga memiliki beberapa value seperti :

- dotted
- dashed
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

/* dengan menambahkan properti boder-style pada <p> maka pada tampilan yang kita buat akan terlihat bordernya dalam bentuk garis */
```

### Hasil dari script :

![Alternate text](https://user-images.githubusercontent.com/36991049/77546860-122e2d80-6edf-11ea-9386-f2a16c788a5e.PNG)


## 3.2. Border Width

Kita juga dapat mengatur lebarnya `border` yang kita buat menggunakan property `border-width`

```css
p {
  border-style: solid;
  border-width: 15px;
}

/* dengan menggunakan border-width: 15px maka border yang kita buat akan terlihat lebih tebal */
```

### Hasil dari script :

![Alternate text](https://user-images.githubusercontent.com/36991049/77548120-afd62c80-6ee0-11ea-97c9-e082edf0ed4c.PNG)

## 3.3. Border Color

Kita juga dapat mengubah warna `border` yang kita buat menggunakan property `border-color`

```css
p {
  border-style: solid;
  border-color: red;
}

/*  dengan menambahkan border-color : red maka border yang kita buat akan berwarna merah */
```

### Hasil dari script :

![Alternate text](https://user-images.githubusercontent.com/36991049/77549891-fcbb0280-6ee2-11ea-8645-f846be4457a7.PNG)

## 4. Border Radius

Kita dapat menggunakan property `border-radius` untuk mengatur tingkat kelengkungan pada setiap ujung konten yang kita buat.

```css
p {
  border-style: solid;
  border-radius: 15px;
}

/* dengan menambahkan border-radius : 15px maka pada bagian ujung border akan terdapat lengkungan sebesar 15px */
```

### Hasil dari script :

![Alternate text](https://user-images.githubusercontent.com/36991049/77551894-718f3c00-6ee5-11ea-8d86-8c4011b124eb.PNG)
