# Pengenalan JSX

![jsx](jsx.png)

## 1. Penjelasan JSX

**JSX** merupakan ekstensi javascript yang digunakan untuk mendeskripsikan bentuk dari component, kalau ada yang ingin tau bagaimana bentuk JSX, seperti inilah bentuknya :

```Javascript
const header = <h1>Hello, world!</h1>;
```

Syntax diatas bukanlah XML atau HTML, melainkan JSX, memang agak lucu. Pada script diatas kita membuat component header yang isinya adalah tag `h1`

## 2. Penjelasan JSX secara simpel

Secara simpel biasanya orang - orang menyebut JSX sebagai **_HTML di dalam javascript_**, namun disini ada perbedaan, biasanya kita meletakkan petik `'` kedalam tag misalnya `'<h1></h1>'` hal ini bertujuan agar tag tersebut menjadi `string` dan dapat dimasukkan ke sebuah variabel, tapi dengan JSX kita tidak membutuhkan petik tersebut sehingga dari segi penulisan lebih mudah

## 3. Tapi tunggu, menggabungkan logic dan view didalam satu file kan tidak bagus

![view-logic](view-logic.png)

Yah memang benar, dulunya sebelum mengenal konsep pemrograman lebih dalam pasti kita pernah menggabungkan logic aplikasi dengan tampilan seperti yang biasa kita lakukan apabila kita menggunakan PHP, dan hal tersebut benar - benar tidak bagus

Namun hal itu hanya terjadi apabila kita menggunakan **template based architecture**, dimana logic satu halaman kita letakkan di dalam satu file yang membuat kodingan kita susah dibaca.

Akan tetapi, dengan menggunakan **component based architecture**, menggabungkan tampilan dan logic kedalam component kecil merupakan hal yang baik, karena kita bisa fokus pada satu component yang berisi logic sekaligus tampilan dari componentnya, ditambah lagi dengan bantuan JSX yang dapat mempermudah penulisan tampilan component. Kita tidak akan kesusahan dalam mendebug satu component walaupun component tersebut berisi logic sekaligus tampilan, karena sekali lagi, yang kita debug hanya satu component kecil saja.

**Selengkapnya tentang JSX silahkan kunjungi link berikut :**

https://reactjs.org/docs/introducing-jsx.html

## 4. Lalu apa hubungan React dan JSX

Walaupun react dan JSX sama - sama buatan facebook, namun keduanya merupakan dua tool yang berbeda, namun benar - benar disarankan untuk menggunakan react bersama dengan JSX (react :heart: jsx)

Namun kita bisa menggunakan react tanpa JSX, karena memang dari awal keduanya adalah tool yang berbeda

**Untuk lebih jelasnya silahkan baca artikel berikut :**

https://reactjs.org/docs/react-without-jsx.html
