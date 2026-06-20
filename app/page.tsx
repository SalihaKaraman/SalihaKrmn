export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs text-violet-400 font-mono tracking-widest">✦ AVAILABLE FOR NEW OPPORTUNITIES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Engineering Reliable <br/>Digital Systems.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Computer Science student focused on building performant backend architectures and intuitive developer tooling. Exploring the intersection of distributed systems and modern UI.
              </p>
              <div className="flex gap-4 flex-wrap pt-4">
                <a
                  href="/projeler"
                  className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  View Work →
                </a>
                <a
                  href="/iletisim"
                  className="border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Let's Talk
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
                <div className="ml-8">self.<span className="text-cyan-400">skills</span> = [<span className="text-orange-400">"TypeScript"</span>, <span className="text-orange-400">"Cloud"</span>]</div>
                <div className="ml-8">self.<span className="text-cyan-400">focus</span> = <span className="text-orange-400">"high-performance_computing"</span></div>
                <div className="ml-8"><span className="text-blue-400">return</span> high_performance_computing(vision)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond the Syntax */}
        <section className="py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Beyond the Syntax</h2>
            <p className="text-slate-300 leading-relaxed">
              My journey into computer science started with a curiosity for how gaming engines manage thousands of entities in real-time. Today, that curiosity has evolved into a professional pursuit of systems engineering.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not debugging concurrent processes, you can find me contributing to open-source kernels or tinkering with Raspberry Pi clusters in my home lab.
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-3xl font-bold text-violet-400">15+</div>
                <div className="text-sm text-slate-400">Open-source</div>
                <div className="text-sm text-slate-400">Internships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-400">50K+</div>
                <div className="text-sm text-slate-400">GitHub</div>
                <div className="text-sm text-slate-400">Stars</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
            <div className="font-mono text-sm text-slate-300">
              <div className="text-slate-500">$ whoami</div>
              <div className="text-green-400 mt-2">saliha@systems ~ %</div>
              <div className="text-slate-300 mt-4">Linux enthusiast | Open-source advocate</div>
              <div className="text-slate-300">Distributed systems fascinated | Real-time applications</div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-white mb-12">Technical Arsenal</h2>
          <div className="text-sm text-slate-400 mb-8">Tools and technologies I use to build robust software.</div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">📝</div>
              <h3 className="font-bold text-white mb-3">Languages</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Python</div>
                <div>Java</div>
                <div>Dart</div>
                <div>HTML / CSS</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">🏗️</div>
              <h3 className="font-bold text-white mb-3">Infrastructure</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Docker</div>
                <div>Firebase</div>
                <div>REST API</div>
                <div>Git & GitHub</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">💾</div>
              <h3 className="font-bold text-white mb-3">Data & Analytics</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>SPSS</div>
                <div>Excel</div>
                <div>Google Sheets</div>
                <div>SQL</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-violet-500 transition">
              <div className="text-2xl mb-4">🎨</div>
              <h3 className="font-bold text-white mb-3">Design & Tools</h3>
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
            <h2 className="text-4xl font-bold text-white">Featured Deployments</h2>
            <a href="/projeler" className="text-violet-400 hover:text-violet-300 text-sm font-semibold">View All →</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition group">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-cyan-900 group-hover:to-blue-900 transition flex items-center justify-center">
                <div className="text-6xl opacity-20">◆</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Flutter Mobile App</h3>
                <p className="text-slate-400 text-sm mb-4">Mobile development with Flutter and Firebase integration</p>
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
                <p className="text-slate-400 text-sm mb-4">Understanding blockchain technology and Web 3.0 ecosystem</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Blockchain</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Web3</span>
                  <span className="text-xs px-3 py-1 bg-slate-800 text-violet-400 rounded-full">Crypto</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
