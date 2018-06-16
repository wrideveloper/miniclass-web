# DML

**Data Manipulation Language (DML)** merupakan bahasa yang digunakan untuk memanipulasi data.

- **Mengambil Record Table**

  ```sql
  SELECT column1, column2, column3 FROM table_name
  ```

  Berikut link untuk referensi :

  https://www.w3schools.com/sql/sql_select.asp

- **Mengisi Record Table**

  ```sql
  INSERT INTO table_name SET
    column1 = value1,
    column2 = value2,
    column3 = value3
  ```

  Berikut link untuk referensi :

  https://www.w3schools.com/sql/sql_insert.asp

- **Memodifikasi Informasi Pada Table**

  ```sql
  UPDATE table_name SET
    column1 = value1,
    column2 = value2,
    column3 = value3
  WHERE primary_column = value_id
  ```

  Berikut link untuk referensi :

  https://www.w3schools.com/sql/sql_update.asp

- **Menghapus Record Pada Table**

  ```sql
  DELETE FROM table_name WHERE primary_column = value_id
  ```

  Berikut link untuk referensi :

  https://www.w3schools.com/sql/sql_delete.asp
