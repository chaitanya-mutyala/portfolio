import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Campus Energy Monitoring System",
    description:
      "Real-time IoT energy monitoring system using ESP32 and industrial Modbus smart meters, featuring a secure React dashboard and low-latency cloud data pipeline.",
    image: "/projects/project1.png",
    tags: ["ESP32", "Modbus", "Firebase", "React", "IoT"],
    demoUrl: "https://energy-meter-realtime-visualization.vercel.app/",
    githubUrl: "https://github.com/chaitanya-mutyala/energy-meter-realtime-visualization",
  },
  {
    id: 2,
    title: "PassTheTorch – Placement Journey Platform",
    description:
      "A platform for students to share placement and GATE preparation journeys with structured content, search, and an AI-powered assistant for instant insights.",
    image: "/projects/project2.png",
    tags: ["React", "Appwrite", "TailwindCSS", "LLM", "Full Stack"],
    demoUrl: "https://pass-the-torch.vercel.app/",
    githubUrl: "https://github.com/chaitanya-mutyala/PassTheTorch",
  },
  {
    id: 3,
    title: "Battery SoH & RUL Prediction",
    description:
      "Machine learning project to predict battery State of Health and Remaining Useful Life using NASA degradation datasets and deep learning models.",
    image: "/projects/project3.png",
    tags: ["Python", "TensorFlow", "LSTM", "ML", "Data Analysis"],
    demoUrl: "https://github.com/chaitanya-mutyala/EE363/tree/main/25/08_209/code",
    githubUrl: "https://github.com/chaitanya-mutyala/EE363/tree/main/25/08_209/code",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my experience in software
          development, IoT systems, and machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chaitanya-mutyala/"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
