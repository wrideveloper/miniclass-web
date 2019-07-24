# Higher Order Component

![higher order component](higher-order-component.png)

## 1. Apa Itu Higher Order Component

**Higher Order Component (HOC)** merupakan sebuah fungsi yang menerima component sebagai paramater dan mereturn component baru

```Javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

HOC biasa digunakan pada third-party library seperti Redux dan Relay

## 2. Manfaat Implementasi HOC

Bayangkan kita memiliki aplikasi yang mengharuskan kita membuat banyak component yang berbeda, walaupun semua component yang kita buat berbeda, namun ada beberapa logic yang sama yang harus dimiliki oleh semua component tersebut. Yang terjadi adalah kita harus membuat logic tersebut berulang kali setiap kita membuat component baru.

Dengan menggunakan HOC, kita bisa meletakkan logic tersebut kedalam HOC, kemudian semua component yang membutuhkan logic tersebut tinggal kita bungkus kedalam HOC.

## 3. Tutorial Impelementasi HOC

Untuk lebih memahami implementasi dari HOC, silahkan ikuti tutorial berikut :

**Youtube -** https://www.youtube.com/watch?v=LTunyI2Oyzw

**CSS Tricks -** https://css-tricks.com/what-are-higher-order-components-in-react/
