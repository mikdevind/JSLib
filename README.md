# MIKDevInd JavaScript Library

MIKDevInd adalah library JavaScript yang dirancang untuk membantu pengembang dalam membuat antarmuka pengguna yang lebih dinamis dan interaktif. Library ini dilengkapi dengan berbagai fitur seperti input dengan rekomendasi otomatis, tabel data interaktif, dan zoom gambar yang responsif.

---

## Fitur Utama

1. **TextInputRecommen**
   - Memberikan rekomendasi otomatis saat pengguna mengetik pada input teks.
   - Cocok digunakan untuk fitur pencarian dengan saran real-time.

2. **DataTable**
   - Membuat tabel data interaktif dengan fitur pencarian, penyortiran, dan paginasi.
   - Memungkinkan pengaturan jumlah baris yang ditampilkan per halaman.

3. **ImageZoom**
   - Menyediakan fitur zoom interaktif pada gambar.
   - Mendukung zoom dengan mouse dan gerakan multi-sentuh pada perangkat mobile.

---

## Cara Menggunakan

### 1. Instalasi

1. Unduh file library MIKDevInd dari repository ini.
2. Tambahkan file JavaScript dan CSS ke dalam proyek Anda:

```html
<script type="module" src="./MIKDevInd/main.js"></script>
<link rel="stylesheet" type="text/css" href="./MIKDevInd/css/Datatable.css">
```

### 2. Contoh Penggunaan Dasar

Berikut adalah contoh penggunaan fitur utama MIKDevInd:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modul MIKDevInd</title>
  <script type="module" src="./MIKDevInd/main.js"></script>
  <link rel="stylesheet" type="text/css" href="./MIKDevInd/css/Datatable.css">
</head>
<body>
  <h1>Modul MIKDevInd</h1>

  <!-- Input dengan rekomendasi otomatis -->
  <input type="text" id="inputNama" placeholder="Cari nama...">

  <!-- Tabel data interaktif -->
  <div id="datatables" class="datatables"></div>

  <!-- Gambar dengan fitur zoom -->
  <img src="./image1.jpg" alt="Gambar 1" class="zoomable-image" style="width: 100px">
  <img src="./image2.jpg" alt="Gambar 2" class="zoomable-image" style="width: 100px">

  <script>
    // Data rekomendasi untuk input teks
    const recommendations = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

    // Data untuk tabel
    const dataset = {
        "head": [
            {"name": "Nama"},
            {"name": "Email", "max": 50},
            {"name": "Nomor Telepon"},
            {"name": "Alamat"}
        ],
        "data": [
            {"Nama": "John Doe", "Email": "john.doe@example.com", "Nomor Telepon": "123456789", "Alamat": "Jl. Kebon Jeruk 1"},
            {"Nama": "Jane Smith", "Email": "jane.smith@example.com", "Nomor Telepon": "987654321", "Alamat": "Jl. Anggrek 2"},
            {"Nama": "Albert Einstein", "Email": "albert.einstein@example.com", "Nomor Telepon": "555444333", "Alamat": "Jl. Melati 3"}
        ]
    };

    // Inisialisasi fitur setelah DOM siap
    window.addEventListener('DOMContentLoaded', () => {
      new MIKDevInd.TextInputRecommen("#inputNama", recommendations);
      new MIKDevInd.DataTable("#datatables", dataset);
      new MIKDevInd.ImageZoom(".zoomable-image");
    });
  </script>
</body>
</html>
```

---

## Dokumentasi Lengkap

Silakan baca dokumentasi di masing-masing file JavaScript untuk memahami konfigurasi dan opsi tambahan:

- **TextInputRecommen**: Cara menyesuaikan saran otomatis.
- **DataTable**: Mengatur kolom, data, dan interaksi tabel.
- **ImageZoom**: Menyesuaikan tingkat zoom dan perilaku gambar.

---

## Kontribusi

Kami menerima kontribusi untuk pengembangan lebih lanjut library ini. Jangan ragu untuk membuat pull request atau melaporkan masalah melalui tab `Issues`.

---

## Lisensi

Library ini dirilis di bawah lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan proyek Anda.
