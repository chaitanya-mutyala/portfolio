import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Data
  { name: "C++ (DSA)", category: "core", level: 90 },
  { name: "Python", category: "core", level: 85 },
  { name: "SQL", category: "core", level: 80 },
  { name: "JavaScript", category: "core", level: 80 },

  // Development
  { name: "ReactJS", category: "dev", level: 85 },
  { name: "FastAPI", category: "dev", level: 80 },
  { name: "Tailwind CSS", category: "dev", level: 85 },
  { name: "Appwrite", category: "dev", level: 75 },

  // AI & Systems
  { name: "TensorFlow / ML", category: "specialized", level: 75 },
  { name: "ESP32 / IoT", category: "specialized", level: 80 },
  { name: "Firebase", category: "specialized", level: 80 },
  { name: "Git / GitHub", category: "specialized", level: 85 },
];

const categories = ["all", "core", "dev", "specialized"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Competencies</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all capitalize text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-card p-5 rounded-xl border border-border group">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">{skill.name}</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};