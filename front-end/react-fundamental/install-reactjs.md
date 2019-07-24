# Install React JS

![Install](install.jpeg)

Hal yang pertama kali dilakukan untuk belajar react adalah menginstallnya kedalam proyek kita, terdapat dua cara untuk melakukan instalasi react, yaitu dengan cara `manual` atau menggunakan `create-react-app`

## 1. Install Manual

Ini merupakan cara standard apabila kita ingin menginstall react ke dalam proyek kita, sebagai frontend developer yang budiman harusnya kita paham bagaimana cara melakukan hal ini.

Untuk menginstall react, kita membutuhkan hal berikut :

1.  **Compiler** misalnya babel, digunakan untuk mengcompile JSX dan ECMAScript menjadi javascript yang dipahami oleh browser lama

2.  **Module Bundler** misalnya webpack, hal ini digunakan untuk menggabungkan beberapa package menjadi satu untuk mempercepat load time

3.  **React**, sudah jelas kita membutuhkannya

> Install manual seperti ini cocok diterapkan apabila kita ingin menambahkan react ke proyek kita sebelumnya

**Untuk lebih jelasnya silahkan lihat tutorial berikut :**

[How To Build Your Own React Boilerplate](https://dev.to/itzsaga/how-to-build-your-own-react-boilerplate-with-webpack-4--babel-7-510c?fbclid=IwAR0NAjeFOw4ERyJZ0JulXDMoqG_IdeM2sj7qxYVCWgncQcjuZE6JKq1UfiM)

## 2. Install dengan create-react-app

`create-react-app` merupakan tool buatan facebok yang berguna untuk membuat proyek berbasis react dengan mudah dan cepat, `create-react-app` akan menginstall seluruh dependency yang tadi sudah dijelaskan secara otomatis

```bash
# membuat aplikasi react bernama my-app
npx create-react-app my-app

# masuk ke folder my-app
cd my-app

# menjalankan aplikasi react
npm start
```

> create-react-app cocok diterapkan apabila kita ingin membuat proyek baru
