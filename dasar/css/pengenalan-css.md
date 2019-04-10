# Pengenalan CSS

Cascading StyleSheet (CSS) merupakan bahasa `style sheet` yang berguna untuk membantu menyajikan dokumen yang ditulis dengan HTML. Apabila HTML hanya bisa menentukan struktur tampilannya, maka CSS dapat menentukan bagaimana gaya dari tampilan tersebut.

Apabila kita ingin membuat sebuah halaman web, maka kita akan menggunakan kombinasi dari HTML dan CSS agar tampilan web kita terstruktur dan indah

## Cara Penulisan

Cara penulisan CSS biasanya terlihat seperti ini

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

## Memasukkan CSS untuk HTML

Ada 4 metode untuk menyertakan CSS agar dapat mengubah layout HTML.

### 1. Embed HTML

Menulis css ke dalam head html menggunakan tag `style`

```html
<html>
  <head>
    <style>
      selector {
        property: value;
      }
    </style>
  </head>
</html>
```

### 2. Eksternal CSS

Memasukkan file css eksternal ke dalam html

```html
<html>
  <head>
    <link href="mystyles.css" rel="stylesheet" />
  </head>
</html>
```

### 3. Inline CSS

Menulis css langsung ke tag tertentu pada html

```css
    <tag style="color:orange background:yellow;">isi tag</tag>
```

## Selector

Setiap elemen HTML yang ada di halaman web dapat dimodifikasi ataupun dihias dengan CSS. Selector digunakan untuk memilih elemen html mana yang akan kita ubah stylingnya.

Bentuk umum selector seperti berikut:

```css
selector {
  property: value;
  property: value;
}
```

Ada beberapa cara untuk menyeleksi elemen dengan selector

### 1. Seleksi elemen berdasarkan id

```css
#nama-id {
  property: value;
}
```

### 2. Seleksi elemen berdasarkan class

```css
.nama-class {
  property: value;
}
```

### 3. Seleksi semua elemen

```css
* {
  property: value;
}
```

### 4. Seleksi elemen yang berada didalam elemen lain

```css
div p {
  property: value;
}
```

### 5. Seleksi link yang sedang di hover

```css
a:hover {
  property: value;
}
```

## Property

Setelah elemen dipilih, property dari style yang tersedia dapat diterapkan pada elemen tersebut. Nama properti diikuti dengan tanda titik dua (colon) (`:`) diikuti dengan nilai atau value yang ditutup dengan titik koma (`;`)

Properti umum yang bisa digunakan :

- `color`
- `font`
- `background`
- `border`
- `width dan height`
- `margin dan padding`
- `display`

## Komentar

Menambahkan Komentar pada CSS

```css
/* Komentar mabro  */
selector {
  property: value;
}
```
