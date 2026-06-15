import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Campus Energy Monitoring & Load Forecasting",
    description:
      "IoT energy management platform deployed at NIT Andhra Pradesh using ESP32, Modbus smart meters, Firebase, and FastAPI. Processes 100+ days of energy data from two campus buildings and provides real-time monitoring and ML-based load forecasting.",
    image: "/projects/project1.png",
    tags: ["ESP32", "Modbus RTU", "Firebase", "FastAPI", "React", "ML"],
    demoUrl: "https://energy-meter-realtime-visualization.vercel.app/",
    githubUrl:
      "https://github.com/chaitanya-mutyala/energy-meter-realtime-visualization",
  },

  {
    id: 2,
    title: "SplitCalsi",
    description:
      "Modern expense-sharing platform inspired by Splitwise with group management, debt simplification, settlements, and real-time balance tracking powered by Supabase.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "Supabase", "PostgreSQL", "Full Stack"],
    demoUrl: "https://splitcalsi.vercel.app",
    githubUrl: "https://github.com/chaitanya-mutyala/splitcalsi",
  },

  {
    id: 3,
    title: "Mini RAG Chatbot",
    description:
      "Retrieval-Augmented Generation chatbot using FAISS vector search, Sentence Transformers embeddings, and OpenRouter LLMs to generate grounded responses from uploaded documents.",
    image: "/projects/project3.png",
    tags: ["Python", "RAG", "FAISS", "LLM", "NLP"],
    demoUrl: "https://rag-chatbot-chai.streamlit.app/",
    githubUrl: "https://github.com/chaitanya-mutyala/rag",
  },

  {
    id: 4,
    title: "Battery SoH & RUL Prediction",
    description:
      "Machine learning project for Battery State of Health (SoH) and Remaining Useful Life (RUL) estimation using NASA battery degradation datasets with preprocessing, feature engineering, and forecasting models.",
    image: "/projects/project4.png",
    tags: ["Python", "LSTM", "Time Series", "Forecasting"],
    demoUrl:
      "https://github.com/chaitanya-mutyala/EE363/tree/main/25/08_209/code",
    githubUrl:
      "https://github.com/chaitanya-mutyala/EE363/tree/main/25/08_209/code",
  },

  {
    id: 5,
    title: "PassTheTorch",
    description:
      "Community platform where students share placement and GATE preparation journeys, featuring structured stories, search capabilities, and AI-assisted insights for future aspirants.",
    image: "/projects/project5.png",
    tags: ["React", "Firebase", "AI", "Tailwind", "Full Stack"],
    demoUrl: "https://pass-the-torch.vercel.app/",
    githubUrl: "https://github.com/chaitanya-mutyala/PassTheTorch",
  },

  {
    id: 6,
    title: "Ambati Vari Tea Podi",
    description:
      "Production-ready e-commerce platform featuring guest checkout, Firebase authentication, live order management, inventory controls, and a secure admin dashboard.",
    image: "/projects/project6.png",
    tags: ["React", "Firebase", "E-Commerce", "Tailwind"],
    demoUrl: "https://tea-powder-eight.vercel.app/",
    githubUrl: "https://github.com/chaitanya-mutyala/tea-powder",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Projects spanning IoT, full-stack development, machine learning, and
          AI applications, built to solve real-world problems and deployed for
          active use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col min-h-[320px]">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-6">
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

        <div className="text-center mt-14">
          <a
            href="https://github.com/chaitanya-mutyala"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

