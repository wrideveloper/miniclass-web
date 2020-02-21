# Layouting

Untuk membuat desain website yang rapi, kita perlu belajar melakukan layouting menggunakan CSS. Untuk melakukan hal tersebut kita dapat menggunakan property `display` untuk menentukan layout suatu elemen, ada beberapa jenis layout yang bisa kita gunakan, yaitu `block`, `inline`, `inline-block`, dan `flexbox`

## 1. Block

Block merupakan layout default yang diterapkan ke beberapa elemen seperti `div`, `ul`, `ol`, `p`, `h1` dan sebagainya. Ciri khas dari layout ini yaitu selalu membuat baris sendiri

![block-layout](block-layout.png)

## 2. Inline

Inline merupakan layout default yang diterapkan ke beberapa elemen seperti `span`, `b`, `i` dan sebagainya. Ciri khas dari layout ini yaitu mengikuti baris yang sudah ada

![inline](inline-layout.png)

Apabila kita memberikan `margin` dan `padding` terhadap inline layout, maka ia hanya akan mendorong elemen disekitarnya secara horizontal dan tidak secara vertical

![inline-padding](inline-padding.png)

## 3. Inline Block

Inline block mirip dengan inline, yaitu akan selalu mengikuti baris yang sudah ada. Namun apabila kita memberikan `margin` dan `padding`, maka ia akan mendorong elemen disekitarnya secara horizontal dan juga vertical

![inline-block-level](inline-block-layout.png)

## 4. Flexbox

Flexbox (Flexible Box) merupakan cara terbaru untuk melakukan layouting pada web yang mendukung design responsive

![flexbox-layout](flexbox-layout.png)

### 4.1 Cara Menggunakan Flexbox

Sebelum belajar menggunakan flexbox, perlu diketahui ada dua istilah yang akan sering disebutkan saat menggunakan flexbox, yaitu `container` dan `item`

<img src="./container.svg" width="500">
<img src="./items.svg" width="500">

Dari gambar diatas, dapat disimpulkan bahwa `container` merupakan elemen yang membungkus `item`

#### 4.1.1 Mengaktifkan Flexbox

Untuk mengaktifkan flexbox, maka tambahkan `display: flexbox` pada `container`

```html
<!-- index.html -->
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
/* index.css */
.container {
  display: flex; /* mengaktifkan flexbox */
}

/* berikan width dan height pada item agar hasilnya terlihat */
.item {
  width: 100px;
  height: 100px;
}
```

Maka secara otomatis, semua `item` yang berada di dalam `container` akan berjajar kesamping

#### 4.1.2 Mengatur Align Secara Horizontal

Untuk mengatur align atau perataan secara horizontal, gunakan `justify-content` pada container

```html
<!-- index.html -->
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
/* index.css */
.container {
  display: flex;
  justify-content: center; /* mengatur layout agar ke tengah secara horizontal */
}

.item {
  width: 100px;
  height: 100px;
}
```

Berikut beberapa pilihan yang dapat digunakan pada `justify content`

<img src="./justify-content.svg" width="300">

#### 4.1.2 Mengatur Align Secara Vertikal

Untuk mengatur align atau perataan secara vertikal, gunakan `align-items` pada container

```html
<!-- index.html -->
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
/* index.css */
.container {
  display: flex;
  align-items: center; /* mengatur layout agar ke tengah secara vertikal */
  height: 800px; /* pastikan tinggi container lebih tinggi daripada item */
}

.item {
  width: 100px;
  height: 100px;
}
```

Berikut beberapa pilihan yang dapat digunakan pada `align-items`

<img src="./align-items.svg" width="300">

### 4.2 Referensi Materi Flexbox

Beberapa referensi untuk belajar layouting dengan flexbox :

1. [Dasar CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
2. [Cheatsheet flexbox](flexboxsheet.png)
