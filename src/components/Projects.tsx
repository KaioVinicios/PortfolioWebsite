import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rosetta Landing Page",
    description:
      "Uma página inicial para uma empresa que presta serviços de apoio aos clientes em seus negócios.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Framer Motion", "Vite", "EmailJS"],
    github: "https://github.com/RosettaSolutions/RosettaLandingPage",
    live: "https://rosetta-solutions.com",
  },
  {
    title: "CryptoVault",
    description:
      "Um SAAS voltado para armazenamento de arquivos com criptografia avançada e recursos em blockchain.",
    tech: ["React", "TypeScript","Django REST", "Python","Tailwind CSS", "Shadcn UI" , "PostgreSQL", "WEB3", "Python", "Docker"],
    github: "https://github.com/RosettaSolutions/CryptoVaultFrontEnd",
    live: "https://cryptovault.rosetta-solutions.com",
  },
  {
    title: "Solução para Atos Capital",
    description:
      "Um dashboard para a empresa Atos Capital, que permite a visualização de dados de clientes além de uma integração DB | IA | WhatsApp para consultas personalizadas.",
    tech: ["React", "TypeScript", "Django REST", "Python", "Git", "Docker", "PostgreSQL", "Swagger", "Microsoft SQL Server", "Gemini API", "N8N", "Waha"],
    github: "https://github.com/KaioVinicios/AtosCapitalBackend",
    // live: "#",
    detail: "Há mais informações e imagens sobre esse projeto no meu LinkedIn > Experiência."
  },
  {
    title: "SafeNumber",
    description:
      "Solução criada para resolver um problema de segurança da Amadeus & Santos Advogados Associados, que permite a validação de números, contando com um painel administrativo para gerenciar os números internos e verificar relatórios de números maliciosos.",
    tech: ["Django REST", "Python", "React", "TypeScript", "Tailwind CSS", "Docker", "PostgreSQL", "Swagger"],
    // github: "https://github.com/Squad15-JotaNunes/ObraSpecAPI",
    live: "https://safe-number.com/amadeus-santos-advogados",
    detail: "Esse card não conta com link de GitHub pois se trata de uma solução privada."
  },
  {
    title: "ObraSpec API",
    description:
      "API realizada para JotaNunes construtora, que permite a criação de modo padronizável e escalável de requistos de obras, como também a geração automática de documentos.",
    tech: ["Django REST", "Python", "Git", "Docker", "PostgreSQL", "Swagger"],
    github: "https://github.com/Squad15-JotaNunes/ObraSpecAPI",
    // live: "#",
  },
  {
    title: "Apoio Fiel",
    description:
      "API criada e dedicada a uma ONG, visando auxiliar na gestão de doações e localização de animais de rua.",
    tech: ["Node.js", "Prisma", "Fastify", "TypeScript", "Docker", "Git", "Swagger"],
    github: "https://github.com/Apoio-Fiel",
    // live: "https://safe-number.com/amadeus-santos-advogados",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Projetos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Trabalhos selecionados
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full border-border/50 bg-card hover:border-border transition-colors group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live ? (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </a>
                        </Button>
                      ) : null}
                    </div>
                    {project.detail && (
                      <div>
                        <p className="text-xs text-muted-foreground mt-4">{project.detail}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}