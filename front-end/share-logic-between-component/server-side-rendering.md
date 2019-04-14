# Server Side Rendering

![server side rendering](server-side-rendering.png)

## Penjelasan Server Side Rendering

Sebelum membahas **server side rendering**, mari kita bahas dulu cara kerja react dalam merender component ke browser client.

![csr](csr.png)

Secara default, react menggunakan metode **CSR (Client Side Rendering)** untuk merender component ke browser client, artinya proses rendering halaman terjadi di browser client, server hanya mengirim sebuah layout HTML kosong, kemudian browser mendownload javascript dan merender halaman berdasarkan javascript tersebut.

**Bagaimana dengan SSR (Server Side Rendering) ?**

![ssr](ssr.png)

Dengan server side rendering, proses rendering halaman terjadi pada server, halaman yang telah selesai dirender oleh server akan dikirimkan ke browser client, sehingga sejak awal browser sudah menerima halaman utuh

Kita bisa mengkombinasikan react dan express untuk melakukan server side rendering. Biasanya kita juga menggunakan framework next js sebagai tambahan untuk mempercepat performa server side rendering

**Berikut referensi untuk mempelajari server side rendering :**

**Cara kerja SSR dan CSR -** https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d

**Membuat SSR dengan React dan Express -** https://css-tricks.com/server-side-react-rendering/

**Tutorial Next JS -** https://nextjs.org/learn/
