# Saliha Karaman - Portfolio

Modern web teknolojileriyle oluşturulmuş kişisel portföy web sitesi.

## 🚀 Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Stil yönetimi
- **FormSubmit** - İletişim formu

## 📁 Proje Yapısı

```
SalihaKrmn/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Anasayfa
│   ├── globals.css         # Global stiller
│   ├── hakkimda/           # Hakkımda sayfası
│   ├── projeler/           # Projeler sayfası
│   └── iletisim/           # İletişim sayfası
├── components/
│   ├── Header.tsx          # Header bileşeni
│   ├── Footer.tsx          # Footer bileşeni
│   └── ProjectCard.tsx     # Proje kartı bileşeni
├── public/                 # Statik dosyalar
├── package.json            # Bağımlılıklar
├── tsconfig.json           # TypeScript yapılandırması
├── tailwind.config.js      # Tailwind yapılandırması
├── next.config.js          # Next.js yapılandırması
└── postcss.config.js       # PostCSS yapılandırması
```

## 🛠️ Kurulum

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. http://localhost:3000 adresinde aç
```

## 📝 İletişim Formu Konfigürasyonu

`app/iletisim/page.tsx` dosyasında FormSubmit ayarlarını kendi e-posta adresine göre güncelle:

```typescript
action="https://formsubmit.co/senin-email@ornek.com"
```

## 🚀 Vercel'e Deploy

### Seçenek 1: GitHub'dan Otomatik Deploy

1. Vercel.com adresine git ve GitHub hesabına bağlan
2. Bu repo'yu seç
3. Deploy tıkla - otomatik yapı ve yayınlanır

### Seçenek 2: Manuel Deploy

```bash
npm install -g vercel
vercel
```

## 📦 Production Build

```bash
npm run build
npm run start
```

## 🎨 Özelleştirme

- **Renkler**: `tailwind.config.js` - theme bölümü
- **Font**: `app/globals.css` - font-family
- **İçerik**: Sayfaların `app/` klasöründeki dosyalarını düzenle

## 📄 Sayfalar

- `/` - Anasayfa
- `/hakkimda` - Hakkımda
- `/projeler` - Projelerim
- `/iletisim` - İletişim formu

## 📞 İletişim

- Email: [E-posta adresini ekle]
- GitHub: https://github.com/SalihaKaraman
- Twitter: [@twitter-handle](https://twitter.com)

## 📄 Lisans

MIT License

---

**Yapılan Tarih**: 2024
**Versiyon**: 1.0.0
