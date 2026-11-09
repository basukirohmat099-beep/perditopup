# Panduan Deploy

ZIP ini sudah memiliki `index.html` di root agar lolos pemeriksaan arsip yang mensyaratkan file tersebut.

## Deploy aplikasi lengkap (disarankan: Vercel)
Project ini adalah React + TanStack Start, bukan situs HTML statis.
- Framework preset: Vite / TanStack Start (atau Other jika terdeteksi otomatis)
- Install command: `npm install`
- Build command: `npm run build`
- Jangan mengatur `index.html` sebagai satu-satunya halaman aplikasi statis.
- Jangan menghapus `src/`, `server/`, `migrations/`, `scripts/`, atau `package.json`.

## Catatan
`index.html` di root merupakan fallback kompatibilitas untuk pemeriksaan ZIP / hosting statis sederhana. Fitur aplikasi server-side memerlukan proses build dan runtime Node.js. Deploy statis langsung hanya akan menampilkan halaman informasi, bukan menjalankan fitur server-side.
