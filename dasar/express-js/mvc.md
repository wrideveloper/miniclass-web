# Konsep MVC

## 1. Penjelasan MVC

MVC (Model - View - Controller) merupakan teknik untuk memecah file menjadi tiga jenis yang memiliki tugas dan peran masing - masing, ketiga jenis file tersebut yaitu

### 1.1. Model

Model merupakan file yang berguna sebagai jembatan untuk berkomunikasi langsung dengan database, file ini lah yang nantinya akan mengeksekusi query untuk mendapatkan atau merubah data pada database

```javascript
// models/Biodata.js

module.exports = {
  get: function(con, callback) {
    con.query('SELECT * FROM biodata', callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM biodata WHERE id_biodata = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}' 
      WHERE id_biodata = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM biodata WHERE id_biodata = ${id}`, callback)
  }
}
```

### 1.2. Controller

Controller disini bertugas untuk menerima data dari model dan meneruskannya ke view (tampilan), selain itu controller juga bertugas meneruskan inputan user ke model untuk merubah data pada database

```javascript
// controllers/biodataController.js

const Biodata = require('../model/Biodata')

module.exports = {
  index: function(req, res) {
    Biodata.get(req.con, function(err, rows) {
      res.send({ data: rows })
    })
  },

  show: function(req, res) {
    Biodata.getById(req.con, req.params.id, function(err, rows) {
      res.send({ data: rows[0] })
    })
  },

  store: function(req, res) {
    Biodata.create(req.con, req.body, function(err) {
      res.send({ success: true })
    })
  },

  update: function(req, res) {
    Biodata.update(req.con, req.body, req.params.id, function(err) {
      res.send({ success: true })
    })
  },

  destroy: function(req, res) {
    Biodata.destroy(req.con, req.params.id, function(err) {
      res.send({ success: true })
    })
  }
}
```
