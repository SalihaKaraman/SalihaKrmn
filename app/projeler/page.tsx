import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Flutter Mobile App',
    description: 'High-performance mobile application built with Flutter framework and Firebase integration for real-time data synchronization.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/SalihaKaraman/SalihaKrmn',
    demo: '#',
    image: '◆'
  },
  {
    id: 2,
    title: 'Web3 & Blockchain',
    description: 'Exploring blockchain technology and Web 3.0 ecosystem with smart contract development and decentralized finance protocols.',
    tags: ['Web3', 'Blockchain', 'Cryptocurrency'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 3,
    title: 'AI Model Training',
    description: 'Machine learning pipeline for training and deploying AI models with focus on ethical AI practices and data privacy.',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 4,
    title: 'Cyber Security Analysis',
    description: 'Security research and vulnerability analysis focusing on web application security and secure coding practices.',
    tags: ['Security', 'Python', 'Testing'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 5,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for analyzing complex datasets with SPSS integration and real-time visualizations.',
    tags: ['SPSS', 'Excel', 'Data Analysis'],
    link: 'https://github.com',
    demo: '#',
    image: '◆'
  },
  {
    id: 6,
    title: 'EdTech Platform',
    description: 'Educational technology platform built with Next.js for interactive learning using GeoGebra and Kahoot integrations.',
    tags: ['Next.js', 'React', 'Education'],
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
            <div className="text-xs text-violet-400 font-mono tracking-widest mb-4">PORTFOLIO ARCHIVE</div>
            <h1 className="text-5xl font-bold text-white mb-4">Selected Works.</h1>
            <p className="text-slate-300 mb-8 max-w-2xl">
              A collection of systems-level software, distributed applications, and experimental research projects focused on high-performance computing.
            </p>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-violet-900/50 text-violet-300 rounded-full text-sm border border-violet-700">all_projects</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">mobile_dev</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">backend_dev</span>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-violet-500 transition cursor-pointer">research</span>
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
                      Live Demo 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research & Recognition */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Research & Recognition</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-cyan-500 pl-6 py-6 bg-slate-800/30 rounded-r-lg p-6">
                <div className="text-sm text-slate-500 mb-2">2023</div>
                <h3 className="font-bold text-white text-lg mb-2">Latency Optimization in P2P Networks</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Undergraduate research thesis analyzing novel routing protocols for decentralized file-sharing systems. Published in the Journal of Computer Science.
                </p>
                <a href="#" className="text-cyan-400 text-xs font-mono hover:text-cyan-300">READ PAPER →</a>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-6 bg-slate-800/30 rounded-r-lg p-6">
                <div className="text-sm text-slate-500 mb-2">2024</div>
                <h3 className="font-bold text-white text-lg mb-2">Global Tech-Hack Runner Up</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Developed EcoChain, a blockchain-based carbon credit tracking system for local municipalities. Completed in 48 hours during international competition.
                </p>
                <a href="#" className="text-cyan-400 text-xs font-mono hover:text-cyan-300">PROJECT DECK →</a>
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
