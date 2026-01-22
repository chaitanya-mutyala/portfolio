import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Open to internships, full-time SDE roles, and meaningful collaborations.
          Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Email */}
          <a
            href="mailto:chaitanyamutyala456@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">
              chaitanyamutyala456@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chaitanya-mutyala-6b89a9250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Linkedin className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/chaitanya-mutyala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Github className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
