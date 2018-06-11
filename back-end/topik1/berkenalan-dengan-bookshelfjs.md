# Bookshelf JS

**Bookshelf JS** merupakan Javascript ORM untuk Node.Js, Bookshelf JS sendiri dibangun di atas **Knex** SQL Query Builder.

### Lalu apakah itu **Knex**?? 
**Knex** adalah sebuah SQL Query Builder untuk Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.

### Nah trus apa itu **SQL Query Builder**?
**SQL Query Builder** adalah tools untuk mempermudah kita untuk membuat maupun menjalankan query database.

## Perbedaan ORM dan Query Builder
1. **Object Relational Mapping** (ORM)
    - Membuat model terlebih dahulu untuk setiap tabel
    - Syntax lebih singkat, misal `model.where('favorite_color', 'red')`

1. **SQL Query Builder**
    - Tanpa perlu membuat model
    - Syntax lebih rumit, misal `knex('model')    .where({ favorite_color: 'red' }).select('id')`

**Untuk Memahami lebih lanjut tentang Bookshelf JS dan Knex silahkan lihat tutorial berikut** https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f

**Bookshelf JS Documentation** http://bookshelfjs.org/

**Knex JS Documentation** https://knexjs.org/