# Component

![component](component-based.png)

## Penjelasan Component

**Component** merupakan sebuah bagian kecil dari suatu halaman yang apabila disatukan dengan component lain akan membentuk sebuah halaman utuh, pada contoh gambar diatas ada beberapa contoh component misalnya `Header`, `SearchBar`, `EmployeeList`, `EmployeeListItem`, `App` dan sebagainya. Masing - masing component kecil diatas memiliki logic dan perannya sendiri, yaitu :

1.  **Header** berperan untuk menampilkan judul halaman
2.  **SearchBar** berperan untuk melakukan pencarian
3.  **EmployeeList** berperan untuk menerima data daftar pegawai
4.  **EmployeeListItem** menerima data daftar pegawai dari `EmployeeList` dan merender tampilan perbaris
5.  **App** membungkus semua komponen tersebut

Kelebihan lain dari component yaitu **component bisa digunakan pada banyak halaman** tanpa mengganti struktur kodenya (**Reuseable**), misalnya component `searchBar` bisa digunakan untuk melakukan pencarian data apapun, sehingga bisa diterapkan di halaman apapun.

## Cara Membuat Component

Untuk membuat component dalam react, kita bisa menggunakan dua cara, yaitu menggunakan class atau menggunakan function

**Menggunakan class :**

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

membuat component dengan menggunakan class cocok diterapkan untuk component yang memiliki logic (smart component)

**Menggunakan function :**

```Javascript
const Header = () => {
  return (
    <h1>Judul Halaman</h1>
  )
}

export default Header
```

membuat component dengan menggunakan function cocok diterapkan untuk component yang tidak memiliki logic (dump component)

## Hal Yang Harus Dipelajari

Untuk memahami topik component, kita perlu memahami hal - hal berikut :

1.  **Membuat sebuah component :**
    https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc

2.  **Membuat multiple component :** https://www.youtube.com/watch?v=9wK4gHoOh1g
3.  **Component life cycle :** https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d
