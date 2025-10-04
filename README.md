# Mini Calculator Project

Mini Calculator — proyek kalkulator kecil untuk portofolio dengan tampilan modern, tema gelap elegan, dan fitur history serta fungsi matematika (akar, sin, cos, tan).

## Fitur
- Operasi dasar: +, -, x, ÷, %
- Fungsi lanjutan: √, sin, cos, tan (trigonometri dalam derajat)
- History: panel history yang bisa ditampilkan/disembunyikan
- Desain: tema gelap, animasi lembut, tombol interaktif
- Keyboard support (Angka, + - / . %, Enter =, Backspace, Escape)

## Struktur project
- \`index.html\` — UI
- \`style.css\` — styling
- \`script.js\` — logika kalkulator
- \`package.json\` — script npm untuk menjalankan server lokal

## Cara menjalankan (lokal)
1. Pastikan Anda memiliki Node.js dan npm terinstall.
2. Install dependency:

\`\`\`bash
npm install
\`\`\`

3. Jalankan server:

\`\`\`bash
npm start    # menjalankan http-server di port 3000
# atau
npm run dev  # menjalankan http-server di port 3000 tanpa cache
\`\`\`

4. Buka browser ke \`http://localhost:3000\`.

## Pengembangan
- Edit file sumber di workspace lalu refresh browser.
- Jika ingin menggunakan live-reload, Anda bisa mengganti server atau menambahkan tooling seperti \`live-server\`.

## Keamanan
- Jangan menyimpan file berisi secret ke repo. Gunakan \`.env\` untuk environment lokal dan jangan commit file tersebut.
- Contoh file environment disediakan sebagai \`.env.example\`.

## Contoh .env
Lihat \`.env.example\` untuk variabel environment yang diperlukan.

## Lisensi
Jika ingin, tambahkan lisensi (mis. MIT).

---

Jika mau, saya bisa menambahkan screenshot ke README atau mengaktifkan GitHub Pages untuk demo.
