# Conditional Rendering

![conditional-rendering](conditional-rendering.png)

Dalam pembuatan suatu web, biasanya kita mengalami saat - saat dimana kita harus menampilkan suatu component berdasarkan kondisi tertentu. Misalnya tombol login akan ditampilkan jika user belum login, kalau sudah login maka tombol login tidak akan ditampilkan lagi.

Dalam react, kita bisa melakukan hal tersebut, biasanya hal ini disebut dengan `conditional rendering`

## Menggunakan If Else

Ini merupakan cara paling dasar untuk melakukan conditional rendering

```javascript
render () {
  if (condition) {
    return (<Component />)
  } else {
    return (<AnotherComponent />)
  }
}
```

## Menyembunyikan Component dengan NULL

Dengan mereturn null maka kita tidak akan merender apapun

```javascript
render () {
  if (condition) {
    return (<Component />)
  } else {
    return null
  }
}
```

## Menggunakan Method

Menulis if else dalam satu render() method akan membuatnya tidak rapi, kita bisa memecahnya kedalam beberapa method

```javascript
renderButton {
  if (condition)
    return <Button/>
  else
    return null
}

renderText {
  if (condition)
    return <Text/>
  else
    return null
}

render () {
  return (
    {this.renderButton()}
    {this.renderText()}
  )
}
```

## Menggunakan Ternary Operator

Apabila menggunakan if else dirasa terlalu banyak memakan baris kode, maka dengan ternary operator kita hanya membutuhkan satu baris kode

```javascript
render () {
  { condition ? <Component/> : <AnotherComponent/> }
}
```

**Untuk mempelajari lebih lanjut tentang conditional rendering silahkan kunjungi link berikut :**

https://reactjs.org/docs/conditional-rendering.html
