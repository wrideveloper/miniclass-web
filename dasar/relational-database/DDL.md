# DDL

## 1. Penjelasan DDL

**Data Definition Language (DDL)** merupakan bahasa yang digunakan untuk mendefinisikan data.

## 2. Perintah - Perintah Pada DDL

### 2.1. Membuat Database

```sql
 CREATE DATABASE database_name
 ```

Berikut referensi untuk membuat database :
https://www.w3schools.com/sql/sql_create_db.asp

### 2.2. Menghapus Database

```sql
DROP DATABASE database_name;
```

Berikut referensi untuk menghapus database :
https://www.w3schools.com/sql/sql_drop_db.asp

### 2.3. Membuat Table

```sql
CREATE TABLE table_name (
 column1 datatype,
 column2 datatype,
 column3 datatype
);
```

Berikut referensi untuk membuat table :
https://www.w3schools.com/sql/sql_create_table.asp

### 2.4. Menghapus Table

```sql
DROP TABLE table_name;
```

Berikut referensi untuk menghapus table :
https://www.w3schools.com/sql/sql_drop_table.asp

### 2.5. Merubah Struktur Table

```sql
ALTER TABLE table_name ADD COLUMN column_name datatype

ALTER TABLE table_name DROP COLUMN column_name
```

Berikut referensi untuk merubah struktur table :
https://www.w3schools.com/sql/sql_alter.asp
