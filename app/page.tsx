export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Saliha Karaman</h1>
          <p className="text-xl text-gray-600 mb-8">
            Yazılım geliştirici ve web tasarımcı. Modern teknolojilerle ilginç projeler geliştiriyorum.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/projeler"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Projelerime Bak
            </a>
            <a
              href="/iletisim"
              className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              İletişime Geç
            </a>
          </div>
        </section>

        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Yetenekler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Backend</h3>
              <p className="text-gray-600">Node.js, Express, REST API, Veritabanı</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Araçlar</h3>
              <p className="text-gray-600">Git, GitHub, Vercel, Docker</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
