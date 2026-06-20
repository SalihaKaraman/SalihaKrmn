export default function Hakkimda() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden aspect-square">
            <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-slate-900/50 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">Crafting Digital Ecosystems.</h1>
              <p className="text-slate-300 font-mono text-sm mb-4">system.init("Saliha") → </p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm">
              <div className="text-slate-400 space-y-2">
                <div><span className="text-blue-400"># Get wisdom, statement_id</span></div>
                <div><span className="text-green-400">MISSION:</span> To bridge the gap between abstract complexity and elegant utility.</div>
                <div className="text-slate-500">LENS: Engineering behind @beautiful_implementations</div>
                <div className="mt-4"><span className="text-blue-400"># Core Philosophy</span></div>
                <div>I believe in software that doesn't just work, but excels. I can't help but build systems that deliver real-world brilliance.</div>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="text-xs px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full border border-violet-700">5K+ Commits</span>
              <span className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">@saliha.com</span>
            </div>
          </div>
        </div>

        {/* The Personal Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">📖 The Personal Story</h2>
            <p className="text-slate-300 leading-relaxed">
              Matematik eğitimimle şekillenen analitik bakış açımı, bilgisayar bilimleri ve eğitim programları akademik yolculuğumla zenginleştiriyorum.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Akademiye doğru ilerlerken aynı zamanda yazılım ile uğraşarak öğrenmekten vazgeçmiyorum. Bu eğitimlerle kazandığım bilgileri aktarma ve farklı ihtiyaçlara yönelik çözümler geliştirme becerimi pekiştirmeye devam ediyor.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Aynı zamanda yazılım dünyasının dinamizmi ve eğitim sektörünün gelişimi ile kendimi sürekli güncel tutmaya çalışıyorum.
            </p>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-bold text-white mb-1">Güler Yüzlü Ekip Oyuncusu</h3>
                <p className="text-sm text-slate-400">Enerjim, iletişim becerim ve insanları yardımcı olmayı seviyorum</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-bold text-white mb-1">Hızlı Öğrenen</h3>
                <p className="text-sm text-slate-400">Yeni teknolojilere hızlı adaptasyon ve derinlemesine anlayış</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="font-bold text-white mb-1">Sürekli Gelişim</h3>
                <p className="text-sm text-slate-400">Güncel tutma ve yenilikçi düşünme isteği hiç durmuyor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Pedigree */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">🎓 Academic Pedigree</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-violet-500 pl-6 py-6 bg-slate-800/30 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">B.Sc. in Computer Science</h3>
              <p className="text-slate-400 text-sm mb-4">Global University of Technology</p>
              <div className="text-xs text-slate-500 mb-4">2021 - 2025</div>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">►</span> Data Structures & Algorithms
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">►</span> Distributed Systems
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">►</span> Cryptography
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">►</span> Machine Learning
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6 border border-violet-500/20">
              <h3 className="text-lg font-bold text-white mb-4">Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">◆</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Dean's List</p>
                    <p className="text-xs text-slate-500">Consecutive 3 Semesters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">◆</span>
                  <div>
                    <p className="text-white font-semibold text-sm">HackTü Poised 2023</p>
                    <p className="text-xs text-slate-500">1st Place • Hackathon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Verticals */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Personal Verticals</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-bold text-white mb-2">Problem Solving</h3>
              <p className="text-sm text-slate-400">Complex system troubleshooting & modular architectures</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-white mb-2">Team Synergy</h3>
              <p className="text-sm text-slate-400">Fluent in collaboration & agile methodologies</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="font-bold text-white mb-2">Photography</h3>
              <p className="text-sm text-slate-400">Capturing geometry & motion in digital art</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-bold text-white mb-2">Digital Art</h3>
              <p className="text-sm text-slate-400">Exploring generative design & UI/UX creativity</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">📜 Certifications & Education</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-800/30 rounded-r-lg p-6">
              <h3 className="font-bold text-white">Mobil Uygulama Geliştirme (60 Saat)</h3>
              <p className="text-sm text-violet-400">Kodluyoruz & Ford Otosan • Jan 2026</p>
              <p className="text-sm text-slate-400 mt-2">Flutter, Dart, Firebase ve modern mobile patterns</p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-800/30 rounded-r-lg p-6">
              <h3 className="font-bold text-white">Binance TR Teknolojide Kadın Akademisi</h3>
              <p className="text-sm text-violet-400">Binance TR & Wtech • 2025</p>
              <p className="text-sm text-slate-400 mt-2">Blockchain, Web 3.0, Dijital Finans Okuryazarlığı</p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-800/30 rounded-r-lg p-6">
              <h3 className="font-bold text-white">AI4Change Eğitim Programı (30 Saat)</h3>
              <p className="text-sm text-violet-400">2025</p>
              <p className="text-sm text-slate-400 mt-2">Yapay Zeka Etiksi & Machine Learning Temelleri</p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-800/30 rounded-r-lg p-6">
              <h3 className="font-bold text-white">Dijital Dünya & Siber Güvenlik</h3>
              <p className="text-sm text-violet-400">Wtech & Ford Otosan • Oct 2025</p>
              <p className="text-sm text-slate-400 mt-2">Veri Güvenliği & Güvenli Yazılım Geliştirme</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">TECHNICAL ARSENAL</h2>
          <div className="text-xs text-slate-500 mb-6">Primary Tooling</div>
          
          <div className="flex flex-wrap gap-2">
            {['Python', 'Java', 'Dart', 'HTML/CSS', 'React', 'Next.js', 'Firebase', 'Docker', 'Git', 'SPSS', 'Excel', 'Google Sheets'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded hover:border-violet-500 transition">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
