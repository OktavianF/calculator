# Calculator Project

Ringkasan
- Aplikasi kalkulator sederhana berbasis DOM (HTML/CSS/JS).
- UI di-define di `index.html`; logika ada di `index.js`.

Struktur proyek
- `index.html` — markup dan tombol kalkulator.
- `index.css` — gaya (opsional, disertakan di proyek).
- `index.js` — logika kalkulator (event handling, parsing, perhitungan).

Cara menjalankan
1. Buka file `index.html` di browser (double-click atau dari terminal):

```bash
open index.html
```

2. Klik tombol angka dan operator; hasil muncul di layar tampilan.

Intisari implementasi (`index.js`)
- Script dibungkus `DOMContentLoaded` untuk memastikan DOM siap.
- Listener terpasang pada container tombol (`.calculator__keys`) dan memakai `e.target.closest('button')` supaya klik elemen anak (span/text) tetap dianggap tombol.
- Tombol operator, decimal, clear, dan calculate diidentifikasi lewat atribut `data-action` pada tombol.
- Tampilan di-update via `element.textContent` (bukan variabel lokal) supaya perubahan terlihat di layar.
- State sementara disimpan di `data-*` pada elemen `.calculator` (mis. `firstValue`, `operator`, `previousKeyType`).

Fungsi perhitungan
- `calculate(n1, operator, n2)` menerima dua angka (string) dan operator (`add`, `subtract`, `multiply`, `divide`) lalu mengembalikan hasil numerik.

Tips debugging singkat
- Jika tombol tidak merespon: periksa bahwa selectors `.calculator`, `.calculator__keys`, dan `.calculator__display` ada di `index.html`.
- Jika klik pada teks tombol tidak terdeteksi: pastikan `closest('button')` dipakai.
- Jika hasil `NaN` atau kosong: cek apakah `firstValue` / `operator` tersimpan di `calculator.dataset` sebelum melakukan `calculate()`.

Perlu diperluas
- Menambahkan keyboard input handling.
- Menambahkan history/undo.

Jika mau, saya bisa:
- menambahkan unit test sederhana, atau
- menambahkan dukungan keyboard.

---
Dokumentasi lengkap fungsi ada di `index.js`.
