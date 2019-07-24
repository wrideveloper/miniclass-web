# Event

## 1. Handling Onclick Pada Button

Untuk melakukan handling event menggunakan react, caranya mirip seperti menggunakan javascript biasa, berikut contoh penerapan handling event pada component `Button` saat event `OnClick` terjadi

### 1.2. Membuat Component Button

```javascript
// Button.js

import React, { Component } from 'react'

class Button extends Component {
  render() {
    return <button>Klik Saya</button>
  }
}

export default Button
```

### 1.2. Membuat Method showMessage

```javascript
// Button.js

import React, { Component } from 'react'

class Button extends Component {
  // membuat method show message
  showMessage() {
    alert('hello world')
  }

  render() {
    return <button>Klik Saya</button>
  }
}

export default Button
```

### 1.3. Menjalankan Method Ketika OnClick

```javascript
// Button.js

import React, { Component } from 'react'

class Button extends Component {
  showMessage() {
    alert('hello world')
  }

  render() {
    // menjalankan method showMessage ketika onClick
    return <button onClick={showMessage}>Klik Saya</button>
  }
}

export default Button
```

## 2. Menggunakan `this` Saat Handling Event

### 2.1. Permasalahan

Disini kita akan mencoba merubah pesan yang ditampilkan pada method `showMessage` menggunakan props

```javascript
// Button.js

import React, { Component } from 'react'

class Button extends Component {
  // menggunakan props untuk merubah pesan
  showMessage() {
    alert(this.props.message)
  }

  render() {
    return <button onClick={showMessage}>Klik Saya</button>
  }
}

export default Button
```

Yang terjadi adalah saat component `Button` kita klik, maka akan terjadi error yang memberitahu bahwa `this undefined`, ini artinya dalam method `showMessage` kita tidak dapat mengakses `this`

### 2.2. Solusi

Agar kita dapat mengakses `this` dalam method `showMessage`, maka kita perlu merubah deklarasi method `showMessage` menggunakan `arrow function`

```javascript
// Button.js

import React, { Component } from 'react'

class Button extends Component {
  // menggunakan arrow function agar dapat mengakses this
  showMessage = () => {
    alert(this.props.message)
  }

  render() {
    return <button onClick={showMessage}>Klik Saya</button>
  }
}

export default Button
```
