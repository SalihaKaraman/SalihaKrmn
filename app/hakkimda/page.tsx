export default function Hakkimda() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hakkımda</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kimim?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Merhaba, ben Saliha Karaman. Yazılım geliştirme ve web tasarımına tutkulu bir geliştirici.
              Modern web teknolojilerini öğrenip, kullanıcı deneyimini ön planda tutan projeler geliştirmeyi seviyorum.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Yeni teknolojileri öğrenmeyi, açık kaynak projelere katkı sağlamayı ve ekip halinde çalışmayı seviyorum.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tecrübem</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">Frontend Geliştirme</h3>
                <p className="text-gray-600 mt-1">React, Next.js ve modern CSS teknolojileri ile responsive ve performans odaklı arayüzler geliştiriyorum.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">Backend Geliştirme</h3>
                <p className="text-gray-600 mt-1">Node.js ve Express kullanarak RESTful API'ler ve backend servisleri geliştiriyorum.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">Veritabanı Yönetimi</h3>
                <p className="text-gray-600 mt-1">SQL ve NoSQL veritabanlarıyla çalışıyor, veri modellemesi ve optimizasyon yapıyorum.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Teknik Yetenekler</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>✓ JavaScript / TypeScript</li>
                <li>✓ React & Next.js</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ HTML5 & CSS3</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Node.js & Express</li>
                <li>✓ Git & GitHub</li>
                <li>✓ Vercel & Netlify</li>
                <li>✓ RESTful API Design</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
