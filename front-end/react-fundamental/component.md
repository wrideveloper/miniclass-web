# Component

![component](component-based.png)

## 1. Penjelasan Component

Component merupakan sebuah bagian kecil dari suatu halaman yang apabila disatukan dengan component lain akan membentuk sebuah halaman utuh, pada contoh gambar diatas ada beberapa contoh component misalnya `Header`, `SearchBar`, `EmployeeList`, `EmployeeListItem`, `App` dan sebagainya. Masing - masing component kecil diatas memiliki logic dan perannya sendiri, yaitu :

1.  `Header` berperan untuk menampilkan judul halaman
2.  `SearchBar` berperan untuk melakukan pencarian
3.  `EmployeeList` berperan untuk menerima data daftar pegawai
4.  `EmployeeListItem` menerima data daftar pegawai dari `EmployeeList` dan merender tampilan perbaris
5.  `App` membungkus semua komponen tersebut

Kelebihan lain dari component yaitu component bisa digunakan pada banyak halaman tanpa mengganti struktur kodenya (Reuseable), misalnya component `SearchBar` bisa digunakan untuk melakukan pencarian data apapun, sehingga bisa diterapkan di halaman apapun.

## 2. Cara Membuat Component

Untuk membuat component dalam react, kita bisa menggunakan tiga cara, yaitu :

### 2.1. Menggunakan class

```Javascript
import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <h1>Judul Halaman</h1>
    )
  }
}
```

### 2.2. Menggunakan function

```Javascript
const Header = () => {
  return (
    <h1>Judul Halaman</h1>
  )
}

export default Header
```

## 3. Membuat Component Header

Disini kita akan membuat component `Header` yang digunakan untuk memberikan judul pada suatu halaman

### 3.1. Membuat Component

Pertama kita perlu membuat component `Header` terlebih dahulu, buatlah file `Header.js` pada direktori `src/components`, direktori ini merupakan direktori yang biasa digunakan untuk meletakkan component - component yang kita buat

```javascript
// Header.js

import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Halaman Beranda</h1>
        <p>selamat datang di website kami</p>
      </div>
    )
  }
}

export default Header
```

### 3.2. Import Component

Setelah component `Header` selesai dibuat, maka selanjutnya tinggal kita import ke `App`

```javascript
// App.js

import React, { Component } from 'react'

// import component Header
import Header from './components/Header'

class App extends Component {
  render() {
    // menggunakan component Header
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App
```
