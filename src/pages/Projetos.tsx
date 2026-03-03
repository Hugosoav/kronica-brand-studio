import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const Projetos = () => {

  return (
    <PageTransition>
      <Layout>
        <title>Projetos — Kronica</title>
        <meta name="description" content="Portfólio de projetos de branding e design da Kronica." />

        {/* Projects – organic masonry layout */}
        <section className="pt-24 pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                  className="break-inside-avoid"
                >
                  <Link
                    to={`/projetos/${project.id}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative overflow-hidden mb-3 rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <motion.img
                        src={project.images.cover}
                        alt={project.title}
                        className="w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-semibold group-hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Projetos;
