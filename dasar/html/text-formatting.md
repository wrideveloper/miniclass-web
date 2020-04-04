# 1. Permasalahan

Mungkin sebelumnya kita sudah mencoba untuk membuat sebuah halaman website, tetapi dengan tampilan yang standard, bentuk dan jenis font yang biasa. Bisa kita bayangkan bagaimana sebuah website yang berisi banyak kata, kalimat, dan paragraph jika hanya menggunakan tampilan yang standard? Pasti sangat memusingkan untuk dibaca. Jadi bagaimana kita membuat Perbedaan dari sebuah Judul, paragraf, penulisan cetak tebal,miring dan bergaris bawah agar lebih mudah  di baca?

# 2. Penjelasan Materi

Dalam HTML ada beberapa format text yang sering digunakan, yaitu :

`h` = Format text untuk judul.

`p` = Format untuk membuat paragaf.

`b` = Format text bold/tebal.

`i`	 = Format text italic/miring.

`u` = Format text underline/garis bawah.

`s` = Format text garis tengah/mencoret text.

`mark` = Format text yang diberi tanda/seperti di stabilo.



# 3. Penjelasan Detail Materi

Cara Penulisan tag dalam syntax:

  ## 1. Heading `<h> ... </h>`
  
  Heading ini biasanya digunakan untuk bagian penting dalam sebuah web. Dan dalam Heading ini ada 6 tingkatan yaitu, `h1`,`h2`,`h3`,`h4`,`h5`,`h6`. Perbedaannya terdapat pada ukuran heading tersebut, semakin besar tag yang digunakan `h6` semakin kecil juga ukuran  teks terserbut.

  ```html
  <h1> heading digunakan untuk penulisan judul utama dari artikel </h1>

  <h2> heading ini biasa digunakan sebagai sub </h2>

  <h3> heading ini juga biasa digunakan sebagai sub </h3>

  <h4> heading ini digunakan tergantung dari pemrogram sendiri<h4>

  <h5> karena biasanya heading 4, 5, 6 digunakan </h5>

  <h6> untuk kepentingan sendiri – sendiri </h6>
  ```
  Output :
  ![heading](heading1.png)

  ## 2. Paragraph `<p> ... </p>`

  Paragraph digunakan seperti paragraph umumnya yaitu membuat dan memisahkan satu dan paragraph lainnya. Dan paragraph ada 4 jenis yaitu, paragraph rata kiri, paragraph rata kanan, paragraph rata tengah, dan paragraph rata kiri kanan.

  ```html
  <p> PARAGRAPH BIASA </p>

  <p align=”left”> RATA KIRI </p>

  <p align=”right”>RATA KANAN </p>

  <p align=”center”>RATA TENGAH</p>
  ```
  Output :
  ![paragraph](Paragraph1.png)

  ## 3. Styling Text
  Styling umum yang biasa kita lihat dan dapat digunakan antara lain Bold `b`, Italic `i`, Underline `u`, Strike-Through `s`, dan Highlight Text `mark`.

  ```html
  <b> contoh penulisan bold/cetak tebal</b>

  <i> contoh penulisan italic/cetak miring</i>

  <u> contoh penulisan underline/bergaris bawah</u>

  <s> contoh penulisan yang diberi garis tengah/text dicoret</s>

  <mark>contoh penulisan mark/yang diberi tanda seperti distabilo</mark>
  ```
  Output :
  ![style](styling1.png)


# 4. Contoh Kasus
```html
<h1>Hubungan kecanduan game online dengan keterampilan sosial remaja di 4 game centre di Kecamatan Klojen Kota Malang </h1>

<h3>Anhar, Rahmat (2014) Hubungan kecanduan game online dengan keterampilan sosial remaja di 4 game centre di Kecamatan Klojen Kota Malang. Undergraduate thesis, Universitas Islam Negeri Maulana Malik Ibrahim.</h3>
<center><h2>Abstract</h2></center>
<p align="left"> 
<b> INDONESIA: </b><br>

Masa remaja adalah masa dimana seseorang tumbuh dan berkembang untuk mencapai kedewasaan, dimana dalam prosesnya remaja melakukan penyesuaian sosial. Di zaman modern, interaksi sosial sebagai bentuk penyesuaian sosial yang dilakukan remaja tidak terbatas dalam dunia nyata saja, namun seiring dengan perkembangan ilmu pengetahuan dan teknologi yang semakin pesat membantu manusia untuk berinteraksi satu sama lain tanpa dibatasi oleh jarak dan waktu. </p>

<p align="center">
Salah satu program yang paling diminati oleh kalangan remaja saat ini adalah media game online. Seseorang yang terikat pada kebiasaan yang sangat kuat dan tidak bisa lepas untuk bermain game online dapat dikatakan bahwa orang tersebut telah Kecanduan game online, yang ditandai dengan adanya dorongan untuk melakukan secara terus menerus yang disertai penarikan diri, ketidak mampuan mengatur waktu, mempunyai masalah dengan pengaruh interpersonal dan kesehatan.</p>

<p align="right">
<u> ENGLISH: </u><br>

<i>Adolescence is a period where a person grow and develop to reach maturity, which in the process, adolescent made social adjustment. In modern times, social interaction as a form of social adjustment by adolescents is not limited in the real world, but along with the development of science and technology is increase rapidly helps people to interact with each other without being limited by time and distance. One of the programs most in demand by the media of today's teenagers are online games. Someone is bound to very strong habits that can not stop to play online games one can say that the person has been Addiction to online game, which is characterized by the urge to constantly accompanied by withdrawal, inability to manage time, have a problem with the influence interpersonal and health.</i></p>

<s> Keyword : Kecanduan Game Online; Keterampilan Sosial Remaja; Addiction To Online Games; Social Skills Teenagers </s><br>
<mark>URI: http://etheses.uin-malang.ac.id/id/eprint/5993</mark>
```
Output :
![studikasus](studikasusformatingtext.png)
  
