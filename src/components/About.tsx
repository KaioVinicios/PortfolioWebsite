import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  "React",
  "TypeScript",
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Google Cloud",
  "Docker",
  "Git",
  "Shadcn UI",
  "Tailwind CSS",
  "Framer Motion",
  "Selenium",
  "Playwright",
  "C#",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Sobre mim
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Um pouco sobre mim
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Sou Desenvolvedor Full Stack, com foco em back-end com Django REST Framework e front-end com React e TypeScript, atuando no desenvolvimento de aplicações web completas, seguras e bem estruturadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quando não estou programando, você me encontrará explorando novas tecnologias, contribuindo para projetos de código aberto ou compartilhando conhecimento por meio de redação técnica. Acredito no aprendizado contínuo e na escrita de código limpo e de fácil manutenção.
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-4">Stack que utilizo</p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Badge variant="secondary" className="text-sm font-normal">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}