# Module Bundler

## :bookmark_tabs: Tujuan

- Mengulas Module bundler

## Penjelasan Module Bundler

**Module bundler** membantu kita dalam mengelolah file javascript beserta segala modul yang ada di dalamnya, dan kemudian file - file javascript tersebut akan di paketkan ke dalam sebuah file dengan ukuran yang lebih kecil.

Ilustrasinya seperti berikut :

![module bundler](webpack-roadmap.png)

Seperti yang kita lihat, disana terdapat banyak file javascript yang saling berkaitan satu sama lain, sehingga apabila tidak di bundler maka kita harus mengimport mereka satu per satu kedalam file HTML. Dengan dilakukan bundler, maka file - file javascript tersebut akan menjadi satu, dan kita cukup mengimport satu file tersebut kedalam HTML kita.

## Module Bundling Menggunakan Webpack

**Webpack** merupakan salah satu tool yang digunakan untuk melakukan bundling terhadap file - file javascript.

Selain sebagai module bundler, dengan berbagai loader dan plugin yang sudah disediakan untuk webpack, kita bisa menggunakan webpack untuk :

1.  Mengubah ES6 menjadi ES5
2.  Mengubah preprocessor CSS menjadi file CSS

Sehingga selain sebagai module bundler, webpack juga bisa menjadi task runner, tentu saja dengan bantuan loader dan pluginnya.

Webpack juga digunakan pada Framework Front-end seperti ReactJS, VueJS, Angular dan sejenisnya.

**Untuk mempelajari penggunaan webpack, silahkan kunjungi link berikut :**

https://www.youtube.com/playlist?list=PL4cUxeGkcC9iTQ3J5oa6orDIMQKKxl8dC
