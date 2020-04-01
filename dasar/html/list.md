# List

## 1. Permasalahan

  Pada pembuatan website, biasanya kita butuh menampilkan data dalam bentuk list untuk mempermudah pembacaan. Misalnya pada website media sosial, kita dapat menampilkan daftar user yang sedang online menggunakan list. Namun, pada HTML kita tidak bisa langsung membuat list menggunakan text. contohnya seperti berikut :

  ```html
- item 1 [enter]
- item 2 [enter]
- item 3 [enter]    
  ```

  kode di atas jika ditampilkan di web browser maka hasilnya akan seperti berikut:

  ![Permasalahan-list](studiKasusList.jpg)


## 2. Solusi

  Oleh karena itu dengan adanya permasalahan di atas maka kita bisa menggunakan kombinasi dari tag `<ol/>`, `<ul/>` dan `<li/>`.

## 3. Penjelasan List HTML
  
  List digunakan untuk menampilkan kumpulkan text dalam bentuk daftar (list), ada dua jenis list, yaitu berurutan (ordered list), dan tidak berurutan (unordered list). 

  ### 3.1 Ordered List 
      
 Ordered list merupakan list yang berurutan, sehingga setiap itemnya akan diberi nomor urut, untuk membuat ordered list kita dapat menggunakan tag `ol`, contohnya seperti berikut :
  
 ```html
<ol>
  <li>Bulbasaur</li>
  <li>Charmeleon</li>
</ol>
```

disana juga terdapat tag `li` yang digunakan untuk membuat list item, sehingga untuk setiap item pada list tersebut perlu kita bungkus dengan tag `li`.

Contoh tampilan Ordered List :


![ordered-list](orderedList.jpg)

  ### 3.2 Unordered List

  Unordered list merupakan list yang tidak berurutan, sehingga setiap item pada list tersebut tidak diberikan nomor urut, untuk membuat unordered list kita dapat menggunakan tag `ul`, contohnya seperti berikut :

```html
<ul>
  <li>Pikachu</li>
  <li>Raichu</li>
</ul>
```

Disana juga terdapat tag `li` yang digunakan untuk membuat list item, sehingga untuk setiap item pada list tersebut perlu kita bungkus dengan tag `li`.


Contoh tampilan Unordered List :  
![unordered-list](unorderedList.jpg)


## 4. Contoh Kasus


Dari materi di atas sudah dijelaskan ringkasan mengenai list, untuk lebih memahami lagi, mari kita mencoba untuk membuat website sederhana untuk menampilkan list menu favorit. 


Pada pembuatan website yang akan kita buat yang perlu ditampilkan adalah hobi, makanan, lagu, dan film. Misalkan Untuk hobi dan makanan menggunakan tag `<ol/>` sedangkan lagu dan film menggunakan tag `<ul/>` 


 ```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
	<title>Belajar list</title>
</head>
<body>
	<h1>List Favorit</h1>
	<h3>Hobi</h3>
	<ol>
		<li>Ngoding</li>
		<li>Game</li>
	</ol>
	<h3>Makanan</h3>
	<ol>
		<li>Nasi Goreng</li>
		<li>Ayam Bakar</li>
	</ol>
	<h3>Lagu</h3>
	<ul>
		<li>Make You Mine (Put Your Hand in Mine)</li>
		<li>Imagine Dragons-Bad Liar</li>
	</ul>
	<h3>Film</h3>
	<ul>
		<li>The Matriks (1999)</li>
		<li>Who Am I (2014)</li>
	</ul>
</body>

</html>
```



  ![Latihan list](latihanList.jpg)








