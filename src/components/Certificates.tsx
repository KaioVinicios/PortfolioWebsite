import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

const education = [
  {
    type: "education",
    title: "Bacharel em Ciência da Computação",
    institution: "Universidade Tiradentes",
    year: "01/2023 - 06/2027",
    description: "Foco em engenharia de software e fundamentos da computação. Graduação em andamento.",
  },
];

const certifications = [
  {
    type: "certification",
    title: "Supervised Machine Learning",
    institution: "Stanford Online",
    year: "2025",
    credentialUrl: "https://coursera.org/verify/CINSH6B1ZJGL",
  },
  {
    type: "certification",
    title: "GC Computing Foundations",
    institution: "Google Cloud",
    year: "2023",
    credentialUrl: "https://www.skills.google/public_profiles/52f8e364-5cbe-4e24-a81c-9d6b8643f6c1/",
  },
  {
    type: "certification",
    title: "Docker",
    institution: "Alura",
    year: "2024",
    credentialUrl: "https://cursos.alura.com.br/certificate/8a7c8cee-5820-4b10-aae6-bcee91ab232e",
  },
  {
    type: "certification",
    title: "Ver todas",
    institution: "Visualize o repositório completo",
    year: "Desde 2023",
    credentialUrl: "https://drive.google.com/drive/folders/16LoR8Few6JyMRGGk_yrQxGPqp__5FqkG?hl=pt-br",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Certificações
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Educação & Certificados
          </h3>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Educação
            </h4>
          </div>
          
          {education.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border-border/50 bg-card hover:border-border transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <Badge variant="outline" className="w-fit text-xs font-normal">
                      {item.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-muted-foreground" />
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Certificados
            </h4>
          </div>
          
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-border/50 bg-card hover:border-border transition-colors h-full group">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h5 className="font-medium leading-tight">{cert.title}</h5>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground grow">
                      {cert.institution}
                    </p>
                    <Badge variant="secondary" className="w-fit text-xs font-normal mt-3">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}