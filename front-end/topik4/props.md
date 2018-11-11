# Props

<img src="props.png" height="200">

`Props` merupakan suatu nilai yang diberikan kepada suatu component ketika component tersebut dibuat. Untuk lebih memahami apa itu props, maka kita perlu berangkat dari sebuah permasalahan

## Permasalahan

Misalnya kita memiliki component `Header` seperti dibawah ini :

```Javascript
import React, {Component} from 'react'

export default class Header extends Component {
  render () {
    <h1>Halaman Beranda</h1>
  }
}
```

Dalam react kita dapat membuat sebuah component yang dapat digunakan berkali - kali di banyak halaman. Misalnya component header diatas dapat kita gunakan di halaman apapun, baik itu di halaman beranda ataupun di halaman lain.

Namun masalahnya adalah teks yang ada di dalam component header tersebut adalah `Halaman Beranda`, dan teks tersebut tidak akan cocok apabila diterapkan ke halaman lain

## Solusi

Permasalahan di atas bisa kita pecahkan dengan menggunakan `props`, kita cukup membuat satu component `Header` namun dengan disisipi props di dalamnya

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
<Header title="Halaman Beranda">

// pada halaman kontak
<Header title="Halaman Kontak">

// pada halaman X
<Header title="Halaman X">
```

## Tipe Props

<!-- TODO: materi proptypes -->

## Kesimpulan

Dengan menggunakan `props` kita bisa membuat component kita reusable namun nilainya tetap dinamis

**Untuk mempelajari lebih dalam tentang `props` silahkan kunjungi link berikut :**

https://reactjs.org/docs/components-and-props.html
