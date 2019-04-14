# Form

Form digunakan untuk menerima data dari inputan user, biasanya diterapkan pada form login, pendaftaran, transaksi, dan sebagainya.

## Form

Untuk mulai membuat form, kita perlu membungkusnya menggunakan tag `form`, nantinya semua inputan akan kita masukkan ke dalam tag ini

```html
<form>
  <!-- input form ada disini -->
</form>
```

## Input

Untuk menerima inputan dari user, kita bisa menggunakan tag `input` untuk menampilkan input text, checkbox, radio, button, dan lain lain

```html
<form>
  <input type="text" />

  <input type="checkbox" />

  <input type="radio" />

  <input type="button" />
</form>
```

## Label

Label digunakan untuk memberikan label pada inputan yang kita buat, sehingga user tau data apa yang perlu dimasukkan

```html
<form>
  <label for="username">username</label>
  <input type="text" id="username" />

  <label for="password">password</label>
  <input type="password" id="password" />
</form>
```

disini kita perlu memberikan `id` pada `input` yang kita buat, kemudian kita tinggal menambahkan attribut `for` pada label yang mengacu pada id input yang telah dibuat, sehingga apabila label tersebut kita klik maka cursor akan langsung fokus ke input yang terkait
