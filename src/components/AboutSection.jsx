import { Briefcase, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Development Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a final-year B.Tech student in Electrical and Electronics
              Engineering at NIT Andhra Pradesh, actively transitioning into
              software development. I have a strong foundation in Data
              Structures, Algorithms, and Object-Oriented Programming.
            </p>

            <p className="text-muted-foreground">
              I enjoy building scalable systems across full-stack web
              development, IoT-backed applications, and AI-assisted platforms.
              I have solved 700+ DSA problems and love turning real-world
              problems into clean, efficient software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
  <a href="#contact" className="cosmic-button">
    Get In Touch
  </a>

  <a
    href="https://drive.google.com/file/d/1AfGOKcmAdl0VYA9a5EDTjIx3H4gAY0AY/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    View CV
  </a>

  <a
    href="https://leetcode.com/u/chaitu_mutyala/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    LeetCode Profile
  </a>
</div>

          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Strong in DSA, problem-solving, and building efficient,
                    scalable applications using C++, Python, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack & IoT</h4>
                  <p className="text-muted-foreground">
                    Built real-time systems using React, Firebase, ESP32, and
                    cloud databases for monitoring and analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Ownership</h4>
                  <p className="text-muted-foreground">
                    Led projects end-to-end from system design and development
                    to deployment, testing, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
