# Install React JS

![Install](install.jpeg)

Hal yang pertama kali dilakukan untuk belajar react adalah menginstallnya kedalam proyek kita, terdapat dua cara untuk melakukan instalasi react, yaitu dengan cara `manual` atau menggunakan `create-react-app`

## Install Manual

Ini merupakan cara standard apabila kita ingin menginstall react kedalam proyek kita, sebagai frontend developer yang budiman harusnya kita paham bagaimana cara melakukan hal ini.

Untuk menginstall react, kita membutuhkan hal berikut :

1.  **Compiler** misalnya babel, digunakan untuk mengcompile JSX dan ECMAScript menjadi javascript yang dipahami oleh browser lama

2.  **Module Bundler** misalnya webpack, hal ini digunakan untuk menggabungkan beberapa package menjadi satu untuk mempercepat load time

3.  **React**, sudah jelas kita membutuhkannya

> Install manual seperti ini cocok diterapkan apabila kita ingin menambahkan react ke proyek kita sebelumnya

**Untuk lebih jelasnya silahkan lihat tutorial berikut :**

**Medium -** https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

**Youtube -** https://www.youtube.com/watch?v=uextYhQGP6k

## Install dengan create-react-app

`create-react-app` merupakan tool buatan facebok yang berguna untuk membuat proyek berbasis react dengan mudah dan cepat, `create-react-app` akan menginstall seluruh dependency yang tadi sudah dijelaskan secara otomatis

```
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

> create-react-app cocok diterapkan apabila kita ingin membuat proyek baru
