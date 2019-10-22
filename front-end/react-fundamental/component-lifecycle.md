# Component Lifecycle

![component-lifecycle](reactjs.png)

## 1. Penjelasan Component Lifecycle

Komponen React memiliki alur hidup (lifecycle) selama berjalan di browser. Lifecycle Komponen ini berjalan diberbagai kondisi komponen tersebut. misal disaat komponen baru saja dibuat, baru selesai ter-render, atau telah keluar dari DOM (destroy). Lifecycle komponen dapat digambarkan dalam diagram berikut :

![](component-lifecycle.png)

Lifecycle dari komponen react sendiri banyak macamnya, tetapi disini hanya dijelaskan yang umum digunakan saja. Berikut antara lain daftar lifecycle dari react sesuai urutan:

1.  `constructor` 
2.  `componentWillMount`
3.  `render`
4.  `componentDidMount`
5.  `shouldComponentUpdate`
6.  `componentWillUpdate`
7.  `componentDidUpdate`
8.  `componentWillRecieveProps [deprecated]`
9.  `componentDidUpdate`

Kelebihan lain dari component yaitu component bisa digunakan pada banyak halaman tanpa mengganti struktur kodenya (Reuseable), misalnya component `SearchBar` bisa digunakan untuk melakukan pencarian data apapun, sehingga bisa diterapkan di halaman apapun.

## 2. Cara Membuat Component Lifecycle

Contoh pembuatan component lifecycle dalam react, yaitu :

### 2.1. Menggunakan class

```Javascript
import React, {Component} from 'react'

export default class Header extends Component {
  //constructor
  constructor(props){
      super(props)
      //Code disini biasanya digunakan untuk inisialisasi nilai awal state, sebagai contoh :
      state = {
          data: null
      }
  }

  //componentWillMount
  componentWillMount(){
    //Code disini akan berjalan setelah constructor, tetapi sebelum aplikasi di initial render  
  }

  //render
  render() {
    return (
      <h1>Judul Halaman</h1>
    )
  }

  componentDidMount(){
      //Code disini akan berjalan setelah aplikasi di render pertama kali,
      //Proses setState dapat dilakukan disini, walau begitu, proses tersebut akan mentrigger proses render sekali lagi (lihat diagram)
  }
}
```
