# Pengenalan ORM
![pengenalan-orm.jpg](pengenalan-orm.jpg)

## Penjelasan ORM

**Object Relational Mapping** (ORM) adalah sebuah teknik untuk mengkonversi data antara objek model dan database berelasi.

## Permasalahan

SQL sangat sulit sekali untuk ditulis maupun dibaca, sehingga akan sering menimbulkan error, misalnya `SELECT * FROM film_list WHERE category="Horror"`.

## Solusi

Solusi dari permasalahan tersebut adalah dengan menggunakan **Object Relational Mapping** (ORM), dari contoh SQL di atas, kita dapat merpersingkatnya dengan ORM menjadi `film_list.where('category', 'Horror')`.

**Untuk lebih jelasnya silahkan lihat tutorial berikut** https://www.youtube.com/watch?v=dHQ-I7kr_SY