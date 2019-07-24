# Props

<img src="props.png" height="200">

## 1. Penjelasan Props

`Props` merupakan suatu nilai yang diberikan kepada suatu component ketika component tersebut dibuat. Untuk lebih memahami apa itu props, maka kita perlu berangkat dari sebuah permasalahan

## 2. Permasalahan

Sebelumnya, kita sudah membuat component `Header` seperti dibawah ini :

```Javascript
// Header.js

import React, {Component} from 'react'

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

Dalam react kita dapat membuat sebuah component yang dapat digunakan berkali - kali pada banyak halaman. Misalnya component `Header` diatas dapat kita gunakan di halaman apapun, baik itu di halaman beranda maupun di halaman lain.

Namun masalahnya adalah teks yang ada di dalam component `Header` tersebut adalah `Halaman Beranda`, dan teks tersebut tidak akan cocok apabila diterapkan ke halaman lain

## 3. Solusi

Permasalahan di atas bisa kita pecahkan dengan menggunakan `props`, kita cukup membuat satu component `Header` namun dengan disisipi props di dalamnya

```Javascript
// Header.js

import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Header
```

Component `Header` yang kita buat diatas sekarang memiliki duah buah `props`, yaitu `title` dan `description` yang bisa kita isi sesuai kebutuhan

```Javascript
// pada halaman beranda
<Header title="Halaman Beranda" description="selamat datang di website kami">

// pada halaman kontak
<Header title="Halaman Kontak" description="hubungi kami apabila ada saran atau keluhan">

// pada halaman X
<Header title="Halaman X" description="deskripsi halaman x">
```

## 4. Tipe Props

Untuk menentukan suatu tipe pada props kita bisa menggunakan library bernama `prop-types`

```
npm install --save prop-types
```

Kemudian kita import pada component yang ingin kita beri props

```javascript
import PropTypes from 'prop-types'
```

Kemudian baru bisa kita gunakan seperti berikut

```javascript
import React from 'react'
import PropTypes from 'prop-types'

class MyComponent extends React.Component {
  render() {
    // ... do things with the props
  }
}

MyComponent.propTypes = {
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  requiredString: PropTypes.string.isRequired
}
```

### 4.1. Tipe Dasar

| Tipe     | Contoh        | Kelas            |
| -------- | ------------- | ---------------- |
| String   | 'hello'       | PropTypes.string |
| Number   | 10, 0.1       | PropTypes.number |
| Boolean  | true / false  | PropTypes.bool   |
| Function | console.log() | PropTypes.func   |
| Symbol   | Symbol('msg') | PropTypes.symbol |
| Object   | {name: 'aka'} | PropTypes.object |

### 4.2. Tipe Collection

| Tipe               | Contoh          | Penjelasan                |
| ------------------ | --------------- | ------------------------- |
| Array              | []              | PropTypes.array           |
| Array Berisi Angka | [1, 2, 3]       | PropTypes.arrayOf([type]) |
| Enum               | ['Red', 'Blue'] | PropTypes.arrayOf([arr])  |

### 4.3. Tipe Object

| Tipe          | Contoh        | Penjelasan           |
| ------------- | ------------- | -------------------- |
| Object        | {name: 'aka'} | PropTypes.object     |
| Number object | {count: 42}   | PropTypes.objectOf() |
| Instance      | new Message() | PropTypes.objectOf() |
| Object shape  | {name: 'aka'} | PropTypes.shape()    |

### 4.4. Tipe Element

| Tipe    | Contoh        | Penjelasan        |
| ------- | ------------- | ----------------- |
| Element | `<Element />` | PropTypes.element |

## 5. Kesimpulan

Dengan menggunakan `props` kita bisa membuat component kita reusable namun nilainya tetap dinamis

**Untuk mempelajari lebih dalam tentang `props` silahkan kunjungi link berikut :**

https://reactjs.org/docs/components-and-props.html

https://www.npmjs.com/package/prop-types
