import { Briefcase, Code, Cpu, ExternalLink } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          The <span className="text-primary text-glow">Engineer</span> Behind the Code
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Bridging the gap between Hardware and Scalable Software.
            </h3>

            <p className="text-muted-foreground leading-relaxed text-lg">
              As an final year Electrical Engineering student at NIT Andhra Pradesh, I bring a unique perspective to software: a deep understanding of low-level systems combined with high-level application architecture. 
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in building **performant full-stack applications** and **IoT ecosystems**. With 700+ algorithmic challenges solved, I don't just write code that works—I write code optimized for scale and efficiency.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={import.meta.env.VITE_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all"
              >
                Resume <ExternalLink size={16} />
              </a>
              <a
                href="https://leetcode.com/u/chaitu_mutyala/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all"
              >
                LeetCode <Code size={16} />
              </a>
            </div>
          </div>

          {/* Impact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {[
              {
                icon: <Code className="text-primary" />,
                title: "Algorithms & Logic",
                desc: "Expertise in C++ and Data Structures. Focused on computational efficiency and memory optimization."
              },
              {
                icon: <Cpu className="text-primary" />,
                title: "Systems & IoT",
                desc: "Full-cycle IoT development: from ESP32 firmware to real-time Firebase analytics and React dashboards."
              },
              {
                icon: <Briefcase className="text-primary" />,
                title: "Engineering Mindset",
                desc: "End-to-end ownership. I build with the 'First Principles' approach inherited from my Electrical background."
              }
            ].map((card, i) => (
              <div key={i} className="gradient-border p-5 bg-card/50 backdrop-blur-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{card.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};