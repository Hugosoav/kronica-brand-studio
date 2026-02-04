import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 border-b border-border/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
              Portfólio
            </span>
            <h2 className="text-2xl md:text-3xl font-light">Trabalhos selecionados</h2>
          </div>
          <Link 
            to="/projetos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            Ver todos
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Project - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to={`/projetos/${featuredProject.id}`}
            className="group block mb-12"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={featuredProject.images.cover}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2 block">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-light text-white mb-2">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 max-w-xl hidden md:block">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="p-3 rounded-full border border-white/30 group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/projetos/${project.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={project.images.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Hover reveal effect */}
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="text-lg md:text-xl font-light text-white">
                            {project.title}
                          </h3>
                        </div>
                        <div className="p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            to="/projetos"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
          >
            <span className="text-sm">Explorar portfólio completo</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;