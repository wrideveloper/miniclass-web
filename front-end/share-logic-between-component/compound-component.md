# Compound Component

![compound component](compound-component.png)

## Apa Itu Compound Component

Compound Component berasal dari kata **compound** yang artinya gabungan, jadi compound component bisa diartikan sebagai **component yang dibentuk dari gabungan beberapa component**

Bisa dibayangkan compound component ini seperti tag `select` dan `option`, apabila dipisah keduanya tidak akan berguna, namun apabila digunakan bersama maka kita dapat membuat sebuah combobox yang utuh

Penggunaan compound component ini dapat membuat developer mudah mengcustomize component dengan mudah tanpa harus memiliki API yang banyak.

## Tutorial Implementasi Compound Component

Untuk lebih memahami konsep compound component kita harus melakukan impelementasi secara langsung, silahkan ikuti tutorial yang ada pada video berikut :

https://www.youtube.com/watch?v=hEGg-3pIHlE

## Compound Component + Context API

Setelah melihat video diatas, maka kita menyadari bahwa untuk melakukan passing state dari parent component ke child component, kita harus meggunakan `React.cloneElement()`, hal ini bisa dilakukan selama struktur element yang membangun component tidak berubah.

Untuk membuat pattern compound component yang tidak terpengaruh oleh struktur element, kita bisa menggunakan Context API yang disediakan oleh react versi 16.3 keatas (Context API yang baru)

Silahkan lihat tutorial berikut untuk mengetahui penggunaan compound component dengan context API :

https://itnext.io/using-advanced-design-patterns-to-create-flexible-and-reusable-react-components-part-2-react-3c5662b997ab
