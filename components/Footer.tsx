export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Saliha Karaman</h3>
            <p className="text-gray-400">
              Yazılım geliştirici ve web tasarımcı
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Sayfalar</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Anasayfa</a></li>
              <li><a href="/hakkimda" className="hover:text-white transition">Hakkımda</a></li>
              <li><a href="/projeler" className="hover:text-white transition">Projelerim</a></li>
              <li><a href="/iletisim" className="hover:text-white transition">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Sosyal Medya</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Saliha Karaman. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
