interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  demo: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 min-h-[56px]">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kod
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-200 text-gray-900 py-2 rounded hover:bg-gray-300 transition"
        >
          Demo
        </a>
      </div>
    </div>
  )
}
