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

Silahkan buat pull request baru pada github dengan cara menakan tombol `New pull request`. Kemudian pilih branch `master` sebagai `base`. Dan `branch anda` sebagai `compare`. Tunggulah review dari kontributor lain. Apabila sudah diterima, maka pull request anda akan di merge ke master
