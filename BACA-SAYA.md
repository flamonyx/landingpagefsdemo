# FastStart Online — Demo untuk Cloudflare Pages

Folder ni = versi **demo** (jalan dalam browser sahaja, tiada server). Data contoh disimpan
dalam browser setiap pelawat. Versi penuh (server Node.js, email sebenar, webhook) ada dalam
`faststart-fyp-live.zip` — **jangan upload yang tu ke Cloudflare Pages** dan jangan kongsi.

## 1. Tukar nama kau dulu (2 tempat)
- `index.html` → cari `[Nama Kau]` (2 tempat: tanda air pudar + tanda bawah kiri)
- `LICENSE.txt` → `[Nama Kau]` dan `[emel / telefon kau]`

## 2. Upload ke Cloudflare Pages
1. Log masuk dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets** (Direct Upload).
2. Nama projek: cth `faststart-demo` (jangan guna nama yang mudah diteka kalau tak nak orang jumpa).
3. Drag & drop **isi folder ni** (index.html, _headers, robots.txt, LICENSE.txt) → **Deploy**.
4. Siap: `https://faststart-demo.pages.dev`

## 3. Kunci supaya hanya lecturer boleh buka (Cloudflare Access — percuma ≤ 50 orang)
1. one.dash.cloudflare.com → **Zero Trust** → **Access** → **Applications** → **Add an application** → **Self-hosted**.
2. Domain: `faststart-demo.pages.dev` (dan `*.faststart-demo.pages.dev` untuk URL preview).
3. Policy: **Allow** → **Emails** → masukkan emel lecturer + emel kau.
4. Login method: **One-time PIN** (kod dihantar ke emel).
5. Sekarang sesiapa yang buka link kena masukkan emel yang dibenarkan dulu. Log akses (siapa buka, bila) ada dalam Zero Trust.

## Nota
- `robots.txt`, `_headers` & meta `noai` = **permintaan** kepada enjin carian / bot AI supaya tak index
  atau guna untuk latihan. Bot yang patuh akan ikut; ia tak boleh halang orang screenshot atau salin.
- Perlindungan sebenar: Cloudflare Access (siapa boleh buka) + kod server kekal dengan kau + bukti
  hak cipta (lihat jawapan dalam chat).

## 📱 Add to Home Screen (PWA)

Bila buka dari ikon home screen: **takde address bar / link kat bawah**, full skrin macam app. Double-tap & pinch **tak zoom**.

- **Android (Chrome):** buka link → menu ⋮ → **Add to Home screen / Install app**.
- **iPhone (Safari):** buka link → butang **Share** → **Add to Home Screen**. (Kena guna Safari. Chrome di iPhone pun boleh dalam iOS baru, tapi Safari paling selamat.)
- Kena guna link **https** (Cloudflare memang https). Buka guna IP/http biasa takkan jadi app.
- Kalau dah pernah add sebelum ni: **buang ikon lama**, buka link sekali, then add semula.

Fail berkaitan: `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`. Nak tukar ikon → ganti fail PNG tu (saiz sama).
