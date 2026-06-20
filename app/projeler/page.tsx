import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Portfolio Web Sitesi',
    description: 'Next.js, TypeScript ve Tailwind CSS ile oluşturulmuş responsive portföy web sitesi.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/SalihaKaraman/SalihaKrmn',
    demo: '#',
  },
  {
    id: 2,
    title: 'Todo Uygulaması',
    description: 'React kullanarak yapılmış state management ile görev yönetim uygulaması.',
    tags: ['React', 'JavaScript', 'localStorage'],
    link: 'https://github.com',
    demo: '#',
  },
  {
    id: 3,
    title: 'E-Ticaret Sitesi',
    description: 'Node.js backend ve React frontend ile tam stack e-ticaret uygulaması.',
    tags: ['Node.js', 'React', 'MongoDB', 'Express'],
    link: 'https://github.com',
    demo: '#',
  },
  {
    id: 4,
    title: 'Hava Durumu Uygulaması',
    description: 'API entegrasyonu ile gerçek zamanlı hava durumu bilgileri gösteren uygulama.',
    tags: ['React', 'API', 'Axios'],
    link: 'https://github.com',
    demo: '#',
  },
]

export default function Projeler() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Projelerim</h1>
          <p className="text-gray-600 mb-12">
            Geliştirdiğim bazı projeler ve deneyler. Daha fazlası için GitHub'ımı ziyaret et.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
