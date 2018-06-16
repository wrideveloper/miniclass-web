# Props

<img src="props.png" height="200">

`Props` merupakan suatu nilai yang diberikan kepada suatu component ketika component tersebut dibuat. Untuk lebih memahami apa itu props, maka kita perlu berangkat dari sebuah permasalahan

## Permasalahan

Misalnya kita memiliki component `Header` seperti dibawah ini :

```Javascript
import React, {Component} from 'react'

export default class Header extends Component {
  render () {
    <h1>Selamat Datang</h1>
  }
}
```

Component `Header` ini awalnya akan kita gunakan pada **halaman beranda**, maka dari itu kata - kata didalam component tersebut adalah **Selamat Datang**

Namun setelah membuat halaman baru, misalnya **halaman kontak**, kita ingin menggunakan component `Header` tersebut pada halaman kontak juga, namun kata - kata di dalamnya berbeda, misalnya **Selamat Datang di Halaman Kontak**

Namun kita tidak bisa melakukannya, karena kata - kata **Selamat Datang** di dalam component `Header` tidak bisa kita ubah, apabila kita ubah menjadi **Selamat Datang di Halaman Kontak** maka kata - kata tersebut juga akan diterapkan ke **halaman beranda**.

Solusi sementara yaitu dengan membuat component `Header` baru namun dengan kata - kata yang berbeda, misalnya untuk **halaman kontak** kita membuat component `Header` dengan kata **Selamat Datang di Halaman Kontak**, dan hal tersebut juga berlaku apabila kita ingin membuat halaman lain.

Intinya kita harus membuat component `Header` berulang kali sebanyak kita membuat halaman baru, dan hal ini jelas tidak efektif

## Solusi

Permasalahan di atas bisa kita pecahkan dengan menggunakan `props`, kita cukup membuat satu component `Header` namun dengan disisipi props didalamnya

```Javascript
import React, {Component} from 'react'

export default class Header extends Component {
  render () {
    <h1>{ this.props.title }</h1>
  }
}
```

Component `Header` yang kita buat diatas memiliki satu buah `props`, yaitu `title`, dan title ini bisa kita isi berbeda - beda sesuai kebutuhan

```Javascript
// pada halaman beranda
<Header title="Selamat Datang">

// pada halaman kontak
<Header title="Selamat Datang di Halaman Kontak">

// pada halaman X
<Header title="Selamat Datang di Halaman X">
```

## Kesimpulan

Dengan menggunakan `props` kita bisa membuat component kita reusable namun nilainya tetap dinamis

**Untuk mempelajari lebih dalam tentang `props` silahkan kunjungi link berikut :**

https://reactjs.org/docs/components-and-props.html
