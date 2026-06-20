import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Flutter Mobil Uygulaması',
    description: 'Flutter framework ile yapılandırılmış yüksek performanslı mobil uygulama ve gerçek zamanlı veri senkronizasyonu için Firebase entegrasyonu.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/SalihaKaraman/SalihaKrmn',
    demo: '#',
    image: '◆'
  },
  {
    id: 2,
    title: 'Web3 & Blockchain',
    description: 'Blockchain teknolojisi ve Web 3.0 ekosistemini akıllı sözleşme geliştirme ve merkezi olmayan finans protokolleriyle keşfetme.',
    tags: ['Web3', 'Blockchain', 'Cryptocurrency'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 3,
    title: 'Yapay Zeka Model Eğitimi',
    description: 'Etik yapay zeka uygulamaları ve veri gizliliğine odaklanarak yapay zeka modellerini eğitme ve dağıtma için makine öğrenmesi işlem hattı.',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 4,
    title: 'Siber Güvenlik Analizi',
    description: 'Web uygulaması güvenliği ve güvenli kodlama uygulamalarına odaklanarak güvenlik araştırması ve zafiyet analizi.',
    tags: ['Güvenlik', 'Python', 'Test'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 5,
    title: 'Veri Analitik Panosu',
    description: 'SPSS entegrasyonu ve gerçek zamanlı görselleştirmelerle karmaşık veri setlerini analiz etmek için interaktif pano.',
    tags: ['SPSS', 'Excel', 'Veri Analizi'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 6,
    title: 'EdTech Platformu',
    description: 'GeoGebra ve Kahoot entegrasyonları kullanarak etkileşimli öğrenme için Next.js ile yapılandırılmış eğitim teknolojisi platformu.',
    tags: ['Next.js', 'React', 'Eğitim'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
]

export default function Projeler() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-xs text-violet-400 font-mono tracking-widest mb-4">PORTFÖY ARŞİVİ</div>
            <h1 className="text-5xl font-bold text-white mb-4">Seçili Çalışmalar.</h1>
            <p className="text-slate-300 mb-8 max-w-2xl">
              Yüksek performanslı bilişime odaklanmış sistem seviyesi yazılım, dağıtık uygulamalar ve deneysel araştırma projelerinin koleksiyonu.
            </p>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-violet-900/50 text-violet-300 rounded-full text-sm border border-violet-700">tumProje</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">mobilGelis</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">backendGelis</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">arastirma</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-violet-500 transition group">
                <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-violet-900 group-hover:to-slate-800 transition flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition">◆</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 min-h-[48px] line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-slate-700">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-slate-400 hover:text-violet-400 text-sm font-mono">
                      <> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-slate-400 hover:text-violet-400 text-sm font-mono">
                      Canlı Demo 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research & Recognition */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Araştırma & Tanınma</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-cyan-500 pl-6 py-6 bg-slate-800/30 rounded-r-lg p-6">
                <div className="text-sm text-slate-500 mb-2">2023</div>
                <h3 className="font-bold text-white text-lg mb-2">P2P Ağlarında Gecikme Optimizasyonu</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Merkezi olmayan dosya paylaşım sistemleri için yeni yönlendirme protokollerini analiz eden lisans üstü araştırma tezi. Bilgisayar Bilimleri Dergisinde yayınlandı.
                </p>
                <a href="#" className="text-cyan-400 text-xs font-mono hover:text-cyan-300">MAKALEYİ OKU →</a>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-6 bg-slate-800/30 rounded-r-lg p-6">
                <div className="text-sm text-slate-500 mb-2">2024</div>
                <h3 className="font-bold text-white text-lg mb-2">Global Tech-Hack İkincilik</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Yerel belediyeler için blokzincir tabanlı karbon kredi izleme sistemi EcoChain geliştirdim. Uluslararası yarışmada 48 saat içinde tamamlandı.
                </p>
                <a href="#" className="text-cyan-400 text-xs font-mono hover:text-cyan-300">PROJE SUNUMU →</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Have a Technical Challenge?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always looking for complex projects to build. Let's discuss your engineering needs and explore how we can collaborate.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/iletisim" className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Book a Consultation
              </a>
              <a href="#" className="border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
                Get in Touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
