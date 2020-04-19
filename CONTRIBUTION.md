# Panduan Kontribusi

## :scroll: Guideline Penulisan

Untuk menjaga agar format penulisan dan materi yang disampaikan sama. Silahkan ikuti [guideline penulisan](https://github.com/wrideveloper/miniclass-guideline)

## :bicyclist: Getting Started

Silahkan ikuti langkah - langkah berikut untuk mulai melakukan kontribusi

### 1. Clone Repository

Pastikan anda memiliki repository miniclass web di komputer anda. Jalankan perintah berikut untuk melakukan cloning repository ke komputer anda

```bash
$ git clone https://github.com/wrideveloper/miniclass-web.git
```

### 2. Membuat Branch Baru

Agar perubahan yang dibuat nantinya dapat direview, silahkan buat branch baru pada komputer anda berdasarkan nama perubahan yang akan dilakukan.

Jalankan perintah berikut untuk membuat branch baru pada komputer anda

```bash
$ git branch [nama-branch]
```

Setelah dibuat, silahkan pindah ke branch tersebut menggunakan perintah berikut

```bash
$ git checkout [nama-branch]
```

### 3. Lakukan Perubahan dan Kirim Perubahan Tersebut

Silahkan buat perubahan yang ingin anda lakukan berdasarkan issue yang diambil. Kemudian kirim perubahan tersebut menggunakan perintah berikut

```bash
$ git add .
$ git commit -m "ceritakan apa yang anda lakukan"
$ git push origin [nama-branch]
```

### 4. Membuat Pull Request

Silahkan buat pull request baru pada github dengan cara menakan tombol `New pull request`. Kemudian pilih branch `master` sebagai `base`. Dan `branch anda` sebagai `compare`. Tunggulah review dari kontributor lain. Apabila sudah diterima, maka perubahan yang ada pada branch pull request akan dipindahkan ke branch `master`.

## Kontribusi Ulang

Ada beberapa hal yang perlu dilakukan untuk mulai melakukan kontribusi ulang. Silahkan ikuti langkah - langkah berikut

### 1. Mengupdate Branch Master Setelah Pull Request Diterima

Setelah pull request diterima, maka perubahan yang ada pada branch pull request akan dipindahkan ke branch `master`. Namun branch `master` yang dimaksud disini adalah branch `master` yang ada di server github. Sedangkan branch master di komputer kita tidak akan menerima perubahan tersebut. Sehingga perlu di update manual

Pertama, pindah dulu dari branch pull request ke branch `master`

```bash
$ git checkout master
```

Kemudian, ambil perubahan yang ada pada branch `master` di server github ke branch `master` di komputer kita

```bash
$ git pull origin master
```

Sekarang perubahan yang ada di branch `master` di laptop kita, telah sama seperti yang ada di branch `master` server github.

### 2. Menghapus Branch Pull Request Sebelumnya

Karena perubahan yang dilakukan pada branch pull request sebelumnya sudah dimasukkan ke master, maka branch tersebut sudah tidak digunakan lagi. Sehingga bisa dihapus menggunakan perintah berikut

```bash
$ git branch -D [nama-branch]
```

### 3. Membuat Branch Baru

Sekarang, karena branch `master` sudah terupdate, dan branch pull request sebelumnya sudah dihapus. Kita bisa membuat branch baru untuk mulai melakukan kontribusi lagi.

Sebelum membuat branch baru, pastikan anda telah berada pada branch master terlebih dahulu. Sehingga commit yang ada pada branch baru, akan berdasarkan commit yang ada pada branch `master`

```bash
$ git checkout master
```

Kemudian, kita bisa membuat branch baru menggunakan perintah berikut.

```bash
$ git branch [nama-branch]
```

Langkah selanjutnya akan sama seperti langkah 3 pada _getting started_
