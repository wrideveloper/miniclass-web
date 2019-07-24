# Styling Component

![styling-component](styling-component.png)

Ada beberapa metode untuk melakukan styling pada component react

## 1. CSS Stylesheet

Cara ini merupakan cara yang paling mudah, karena mirip dengan cara yang biasa kita lakukan. Kita bisa menggunakan file css biasa kemudian kita import ke component kita.

Pertama kita buat file css seperti biasa

```css
.DottedBox {
	margin: 40px;
	border: 5px dotted pink;
}

.DottedBox_content {
	font-size: 15px;
	text-align: center;
}
```

kemudian import file css tersebut ke component kita, sehingga semua styling yang ada di dalam file css tersebut akan diterapkan ke component tersebut berdasarkan `className` yang sesuai

```javascript
import React from 'react'
import './DottedBox.css'

const DottedBox = () => (
	<div className="DottedBox">
		<p className="DottedBox_content">Get started with CSS styling</p>
	</div>
)

export default DottedBox
```

## 2. Inline Styling

Dengan cara ini kita bisa menuliskan **styling secara langsung didalam component** kita, sehingga kita bisa fokus melihat tampilan component dan stylingnya dalam satu file.

```javascript
import React from 'react'

const divStyle = {
	margin: '40px',
	border: '5px solid pink'
}
const pStyle = {
	fontSize: '15px',
	textAlign: 'center'
}

const Box = () => (
	<div style={divStyle}>
		<p style={pStyle}>Get started with inline style</p>
	</div>
)

export default Box
```

## 3. Styled Component

Untuk menggunakan metode kita membutuhkan library bernama `styled-components`, kita bisa menginstallnya dengan menggunakan perintah

```
npm install --save styled-components
```

Kemudian kita bisa membuat component baru berdasarkan component yang sudah ada, misalnya kita akan membuat component `TodoComponent` berdasarkan component `div`

```javascript
const TodoComponent = styled.div`
	background-color: #44014c;
	width: 300px;
	min-height: 200px;
	margin: 30px auto;
	box-sizing: border-box;
`
```

Kemudian component `TodoComponent` tersebut bisa langsung kita gunakan

```javascript
class ToDoApp extends React.Component {
	// ...
	render() {
		return (
			<TodoComponent>
				<h2>ToDo</h2>
				<div>
					<Input onChange={this.handleChange} />
					<p>{this.state.error}</p>
					<ToDoList value={this.state.display} />
				</div>>
			</TodoComponent>
		)
	}
}
```

**Kelebihan** menggunakan cara ini adalah kita dapat membuat component baru berdasarkan component yang sudah ada dengan styling yang berbeda

**Kelebihan kedua** yaitu walaupun kita menuliskan styling css di dalam file javascript, tetapi penulisan syntax yang digunakan benar benar sama seperti file css biasa, bahkan kita bisa copy paste styling yang ada di file css lama kita secara langsung tanpa perlu melakukan perubahan syntax.

**Kelebihan yang terakhir** yaitu kita bisa dengan mudah membuat styling component menjadi dinamis berdasarkan props yang diberikan terhadap component tersebut.

Untuk mempelajari tentang `styled-components` lebih lanjut, silahkan kunjungi link berikut :
https://www.styled-components.com/docs/

## 4. Referensi

https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945
