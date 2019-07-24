# Pengenalan ORM

![pengenalan-orm.jpg](pengenalan-orm.jpg)

## 1. Permasalahan

Masalah yang sering dialami oleh developer ketika melakukan perubahan data pada database yaitu melakukan kesalahan dalam penulisan query SQL, hal ini wajar karena SQL memiliki aturan sendiri dalam penulisan syntaxnya

## 2. Penjelasan ORM

ORM merupakan suatu teknik untuk mengubah tabel pada database menjadi objek yang mudah digunakan, dimana objek tersebut akan memiliki properti yang sama dengan field yang dimiliki oleh tabel tersebut

Dengan ORM kita hanya perlu mendefinisikan sebuah objek dan menuliskan field apa saja yang dimiliki oleh objek tersebut, misalnya kita akan membuat objek `biodata`, maka field yang dimiliki adalah `id`, `nama`, dan `alamat`, setelah itu kita bisa menggunakan objek tersebut untuk melakukan CRUD tanpa menuliskan query SQL sama sekali

## 3. Penerapan ORM dengan Sequelize

Sequelize merupakan ORM yang mensupport berbagai macam database seperti `msyql`, `mssql`, `postgresql` dan lain - lain, berikut langkah - langkah untuk menggunakan sequalize

### 3.1. Install Sequelize

```bash
# Menginstall sequalize
npm install --save sequelize

# Install package tambahan berdasarkan jenis database
npm install --save pg pg-hstore # postgresql
npm install --save mysql2 # mysql
npm install --save sqlite3 # sqlite
npm install --save tedious # mssql
```

### 3.2. Mengoneksikan Sequelize ke Database

```javascript
// config/db.js

const Sequelize = require("sequelize")

const sequalize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql" | "sqlite" | "postgres" | "mssql",

  // SQLite only
  storage: "path/to/database.sqlite"
})

module.exports = sequalize
```

### 3.3. Membuat Model

```javascript
// models/Biodata.js

const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const Biodata = sequelize.define(
  "biodata",
  {
    id_biodata: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: Sequelize.STRING(100)
    },
    alamat: {
      type: Sequelize.STRING(150)
    }
  },
  { timestamps: false }
)

module.exports = Biodata
```

### 3.4. Menggunakan Model pada Controller

```javascript
// controllers/biodataController.js

const Biodata = require("../model/Biodata")

module.exports = {
  index: function(req, res) {
    Biodata.findAll().then(function(rows) {
      res.render("biodata/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("biodata/create")
  },

  store: function(req, res) {
    Biodata.create(req.body).then(function() {
      res.redirect("/biodata")
    })
  },

  edit: function(req, res) {
    Biodata.findByPrimary(req.params.id).then(function(row) {
      res.render("biodata/edit", { data: row })
    })
  },

  update: function(req, res) {
    Biodata.findByPrimary(req.params.id).then(function(row) {
      row.update(req.body)
      res.redirect("/biodata")
    })
  },

  destroy: function(req, res) {
    Biodata.findByPrimary(req.params.id).then(function(row) {
      row.destroy()
      res.redirect("/biodata")
    })
  }
}
```
