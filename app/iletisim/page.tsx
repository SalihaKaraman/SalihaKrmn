export default function Iletisim() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">İletişime Geç</h1>
          <p className="text-gray-600 mb-12">
            Bana ulaşmak mı istiyorsun? Formu doldur ve en kısa zamanda sana geri döneceğim.
          </p>

          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="ornek@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Konuyu belirt"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Mesajını yaz..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Mesajı Gönder
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
                your-email@example.com
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Social Media</h3>
              <div className="space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
