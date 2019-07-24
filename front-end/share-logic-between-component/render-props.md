# Render Props

![render props](render-props.jpg)

## 1. Apa Itu Render Props

**Render props** merupakan teknik untuk mendistribusikan logic ke component menggunakan props yang diisi sebuah function, ada beberapa library yang menggunakan teknik ini, antara lain React Router dan Context API

```Javascript
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

Tujuan dari penggunaan teknik ini sama dengan higher order component, dimana kita membagikan logic component ke component lain tanpa perlu menulis ulang logic tersebut. Walaupun memiliki tujuan yang sama, render props dan HOC memiliki teknik yang berbeda untuk implementasinya, bahkan menurut [Michael Jackson](https://medium.com/@mjackson), penggunaan render props lebih baik daripada HOC

![render props tweet](render-props-tweet.png)

## 2. Referensi Belajar Render Props

Silahkan kunjungi link berikut untuk mempelajari lebih lanjut tentang render props :

**Dokumentasi -** https://reactjs.org/docs/render-props.html

**Tutorial -** https://www.youtube.com/watch?v=BcVAq3YFiuc

**Perbandingan HOC dan render props -** https://www.richardkotze.com/coding/hoc-vs-render-props-react
