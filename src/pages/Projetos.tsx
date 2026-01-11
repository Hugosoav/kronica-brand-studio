import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";

const Projetos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <title>Projetos — Kronica</title>
      <meta name="description" content="Portfólio de projetos de branding e design da Kronica." />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in-up">
              Projetos
            </h1>
            <p className="text-lg text-primary/70 mb-12 animate-fade-in-up delay-100">
              Marcas que construímos com propósito, personalidade e intenção.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto animate-fade-in-up delay-200">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
              <Input
                type="text"
                placeholder="Buscar projeto ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-secondary/50 border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/projetos/${project.id}`}
                key={project.id}
                className="group cursor-pointer animate-fade-in-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.images.cover}
                    alt={project.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/60">{project.category}</p>
                  </div>
                  <span className="text-sm text-primary/40">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary/60">Nenhum projeto encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;
