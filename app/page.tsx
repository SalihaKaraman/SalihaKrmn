export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs text-violet-400 font-mono tracking-widest">✦ YENİ FIRSATLARA AÇIK</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Güvenilir <br/>Dijital Sistemler <br/>İnşa Etmek.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Performans odaklı backend mimarileri ve sezgisel geliştirici araçları yapılandırmaya odaklanmış bilgisayar bilimleri öğrencisi. Dağıtık sistemler ve modern UI'nin kesişimi keşfediyor.
              </p>
              <div className="flex gap-4 flex-wrap pt-4">
                <a
                  href="/projeler"
                  className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Çalışmalarımı Gör →
                </a>
                <a
                  href="/iletisim"
                  className="border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Konuşalım
                </a>
              </div>
            </div>
            
            {/* Code Snippet Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-slate-400 space-y-2">
                <div><span className="text-blue-400">class</span> <span className="text-yellow-300">Developer</span>:</div>
                <div className="ml-4"><span className="text-blue-400">def</span> <span className="text-green-400">__init__</span>(self):</div>
                <div className="ml-8">self.<span className="text-cyan-400">yetenekler</span> = [<span className="text-orange-400">"TypeScript"</span>, <span className="text-orange-400">"Bulut"</span>]</div>
                <div className="ml-8">self.<span className="text-cyan-400">odak</span> = <span className="text-orange-400">"yuksek_performans_bilisim"</span></div>
                <div className="ml-8"><span className="text-blue-400">return</span> yuksek_performans_bilisim(vizyon)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond the Syntax */}
        <section className="py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Sözdiziminin Ötesinde</h2>
            <p className="text-slate-300 leading-relaxed">
              Bilgisayar bilimine yolculuğum, oyun motorlarının gerçek zamanda binlerce varlığı nasıl yönettiği merakından başladı. Bugün, bu merak profesyonel bir çabaya dönüşmüştür - sistemler mühendisliğinin peşinde.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Eş zamanlı işlemlerde hata ayıklamadığımda, açık kaynak çekirdeklerine katkıda bulunabilir veya evim laboratuvarında Raspberry Pi kümelerini kurcalıyorum.
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-3xl font-bold text-violet-400">15+</div>
                <div className="text-sm text-slate-400">Açık kaynak</div>
                <div className="text-sm text-slate-400">Stajyer</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-400">50K+</div>
                <div className="text-sm text-slate-400">GitHub</div>
                <div className="text-sm text-slate-400">Yıldız</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
            <div className="font-mono text-sm text-slate-300">
              <div className="text-slate-500">$ whoami</div>
              <div className="text-green-400 mt-2">saliha@sistemler ~ %</div>
              <div className="text-slate-300 mt-4">Linux tutkunusu | Açık kaynak savunucusu</div>
              <div className="text-slate-300">Dağıtık sistemler meraklısı | Gerçek zamanlı uygulamalar</div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-white mb-12">Teknik Silah Deposu</h2>
          <div className="text-sm text-slate-400 mb-8">Sağlam yazılım inşa etmek için kullandığım araçlar ve teknolojiler.</div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">📝</div>
              <h3 className="font-bold text-white mb-3">Diller</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Python</div>
                <div>Java</div>
                <div>Dart</div>
                <div>HTML / CSS</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">🏗️</div>
              <h3 className="font-bold text-white mb-3">Altyapı</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Docker</div>
                <div>Firebase</div>
                <div>REST API</div>
                <div>Git & GitHub</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">💾</div>
              <h3 className="font-bold text-white mb-3">Veri & Analitik</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>SPSS</div>
                <div>Excel</div>
                <div>Google Sheets</div>
                <div>SQL</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">🎨</div>
              <h3 className="font-bold text-white mb-3">Tasarım & Araçlar</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Figma</div>
                <div>Tailwind CSS</div>
                <div>React</div>
                <div>Next.js</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Öne Çıkan Dağıtımlar</h2>
            <a href="/projeler" className="text-violet-400 hover:text-violet-300 text-sm font-semibold">Hepsini Gör →</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition group">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-cyan-900 group-hover:to-blue-900 transition flex items-center justify-center">
                <div className="text-6xl opacity-20">◆</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Flutter Mobil Uygulaması</h3>
                <p className="text-slate-400 text-sm mb-4">Flutter ve Firebase entegrasyonu ile mobil geliştirme</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Flutter</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Dart</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Firebase</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-slate-700 rounded-lg overflow-hidden hover:border-emerald-500 transition group">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-green-900 group-hover:to-emerald-900 transition flex items-center justify-center">
                <div className="text-6xl opacity-20">◆</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Web3 & Blockchain</h3>
                <p className="text-slate-400 text-sm mb-4">Blockchain teknolojisini ve Web 3.0 ekosistemini anlama</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Blockchain</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Web3</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Kripto</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
