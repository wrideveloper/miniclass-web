# State

Setelah mempelajari props, maka disini kita akan belajar tentang state

## Masalah

Sebelumnya kita sudah mengenal props, props merupakan nilai yang diberikan kepada suatu component ketika component tersebut dibuat. Setelah props diterima, maka component tersebut tidak bisa mengubah nilai yang ada di dalam props.

Namun terkadang suatu component perlu melakukan update pada data yang dimilikinya, entah data itu didapat dari props ataupun sumber lain.

## Solusi

State merupakan data suatu component yang boleh diubah. Nilai dari state ditentukan sendiri oleh suatu component, berbeda dengan props yang datanya didapatkan melalui component lain.

Setelah nilai dari state diinisialisasi oleh suatu component, maka nilai dari state tersebut bisa diubah - ubah oleh component itu sendiri.

## Hubungan State dan Component

![state](state.jpg)

State dan component memiliki keterkaitan satu sama lain, yaitu :

1.  Component akan menginisialisasi nilai dari state yang dimilikinya
2.  User akan mentrigger event untuk mengaupdate nilai dari state
3.  Saat nilai dari state berubah, maka component yang memiliki state tersebut akan dirender ulang dengan nilai dari state yang sudah terupdate.

## Cara Menginsialisasi State

Terdapat beberapa cara untuk menginsialisasi state di dalam component, hal ini tergantung pada bagaimana kita membuat component

#### 1. Apabila Kita Membuat Component Menggunakan Class

Kita bisa membuat state dengan meletakkan state tersebut sebagai **atribute** suatu class

```Javascript
import React, {Component} from 'react'

export default class MyComponent extends Component {

  state = {
    namaState1: 'nilai state',
    namaState2: 5
  }

  render() {
    return <div>My Component</div>
  }
}
```

Kita juga bisa membuat state di dalam **constructor** class

```Javascript
import React, {Component} from 'react'

export default class MyComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      namaState1: 'nilai state',
      namaState2: 5
    }
  }

  render() {
    return <div>My Component</div>
  }
}
```

#### 2. Apabila kita membuat component menggunakan React.createClass

Kita bisa membuat state dengan menggunakan method `getInitialState()`

```Javascript
import React from 'react'

var MyComponent = React.createClass({
  getInitialState() {
    return {
      state1: 'state1 val',
      state2: 2
    }
  },
});

export default MyComponent
```

## Cara Mengupdate State

Untuk mengupdate state kita menggunakan method `setState()`

```Javascript
this.setState({
  state1: value,
  state2: value
})
```

Setelah kita menjalankan `setState()` maka component tersebut akan langsung dirender ulang secara otomatis

## Contoh Kasus Penggunaan State

Untuk memahami konsep state, kita akan membuat aplikasi timer sederhana, silahkan kunjungi link berikut :

https://github.com/wrideveloper/react-timer
