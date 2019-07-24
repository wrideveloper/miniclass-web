# DML

## 1. Penjelasan DML

**Data Manipulation Language (DML)** merupakan bahasa yang digunakan untuk memanipulasi data.

## 2. Perintah - Perintah Pada DML

### 2.1. Mengambil Record Table

```sql
SELECT column1, column2, column3 FROM table_name
```

Berikut link untuk referensi :
https://www.w3schools.com/sql/sql_select.asp

### 2.2. Mengisi Record Table

```sql
INSERT INTO table_name SET
  column1 = value1,
  column2 = value2,
  column3 = value3
```

Berikut link untuk referensi :
https://www.w3schools.com/sql/sql_insert.asp

### 2.3. Memodifikasi Informasi Pada Table

```sql
UPDATE table_name SET
  column1 = value1,
  column2 = value2,
  column3 = value3
WHERE primary_column = value_id
```

Berikut link untuk referensi :
https://www.w3schools.com/sql/sql_update.asp

### 2.4. Menghapus Record Pada Table

```sql
DELETE FROM table_name WHERE primary_column = value_id
```

Berikut link untuk referensi :
https://www.w3schools.com/sql/sql_delete.asp
