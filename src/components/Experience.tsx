import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "./AnimatedBackground";

const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Rosetta",
    period: "08/2025 — Atualmente",
    description:
      "Atuo como responsável pelo desenvolvimento técnico dos projetos, conciliando demandas de clientes com a construção de um produto próprio em fase avançada de desenvolvimento, sempre seguindo boas práticas de engenharia de software.",
    achievements: [
      "Desenvolvimento full stack utilizando React e Django REST",
      "Modelagem de banco de dados PostgreSQL",
      "Desenvolvimento de APIs REST",
      "Desenvolvimento de interfaces de usuário responsivas",
      "Testes unitários",
      "Implementação de soluções em produção",
    ],
  },
  {
    role: "Desenvolvedor RPA",
    company: "Influir",
    period: "03/2024 - 11/2024",
    description:
      "Fui responsável por analisar processos existentes, validar a aderência das automações ao fluxo real de negócio e desenvolver soluções automatizadas que reduzissem tempo de execução, identificassem falhas de processo e aumentassem a confiabilidade operacional.",
    achievements: [
      "Desenvolvimento de automações em Python, C# e JavaScript",
      "Implantação de soluções automatizadas",
      "Testes de automações",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Experiência
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Onde trabalhei
          </h3>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs font-normal">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}