export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              <span className="text-violet-400">DEV_</span>PORTFOLIO
            </h3>
            <p className="text-slate-400 text-sm">
              Crafting digital systems with precision and creativity
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/hakkimda" className="hover:text-white transition">About</a></li>
              <li><a href="/projeler" className="hover:text-white transition">Projects</a></li>
              <li><a href="/iletisim" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Source Code</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <p className="text-slate-400 text-sm mb-4">
              Always interested in discussing technology and collaborations.
            </p>
            <a href="/iletisim" className="text-violet-400 hover:text-violet-300 text-sm font-mono">
              Get in touch →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4 text-slate-500 text-sm font-mono">
            <span>System Status: Operational</span>
            <span>•</span>
            <span>© 2024 Built with precision</span>
          </div>
          <div className="text-slate-600 text-xs">
            Designed & Built with Tailwind CSS & Next.js
          </div>
        </div>
      </div>
    </footer>
  )
}
