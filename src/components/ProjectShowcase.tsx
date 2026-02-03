import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, 5);

  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-10 md:mb-12 border-b border-border/30 pb-4 sm:pb-6">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-1 sm:mb-2 block">
              Portfólio
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light">Trabalhos selecionados</h2>
          </div>
          <Link 
            to="/projetos"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            Ver todos
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Project - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to={`/projetos/${featuredProject.id}`}
            className="group block mb-6 sm:mb-10 md:mb-12"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={featuredProject.images.cover}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/70 mb-1 sm:mb-2 block">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-light text-foreground mb-1 sm:mb-2 truncate">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70 max-w-xl hidden sm:block line-clamp-2">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="p-2 sm:p-3 rounded-full border border-foreground/30 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground group-hover:text-background transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link 
                to={`/projetos/${project.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={project.images.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-400" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-end p-3 sm:p-4 md:p-5">
                    <div className="w-full">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/60 mb-0.5 sm:mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="text-sm sm:text-lg md:text-xl font-light text-foreground truncate">
                            {project.title}
                          </h3>
                        </div>
                        <div className="p-1.5 sm:p-2 rounded-full border border-foreground/20 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:group-hover:translate-x-0 sm:translate-x-2 flex-shrink-0">
                          <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
                        </div>
                      </div>
                      
                      {/* Tags - hidden on mobile for cleaner look */}
                      <div className="hidden sm:flex gap-2 mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 bg-foreground/10 backdrop-blur-sm rounded-full text-foreground/80"
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
          className="mt-8 sm:mt-10 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link 
            to="/projetos"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
          >
            <span className="text-xs sm:text-sm">Explorar portfólio completo</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;