import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getProjectById, projects } from "@/data/projects";

const ProjetoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Projeto não encontrado</h1>
            <Button asChild>
              <Link to="/projetos">Voltar aos projetos</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <Layout>
      <title>{`${project.title} — Kronica`}</title>
      <meta name="description" content={project.description} />

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 -ml-4 text-primary/60 hover:text-primary"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar
          </Button>

          <div className="max-w-4xl">
            <span className="text-sm text-primary/50 uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-2 mb-6 animate-fade-in-up">
              {project.title}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed animate-fade-in-up delay-100">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="overflow-hidden rounded-lg animate-fade-in-up delay-200">
            <img
              src={project.images.cover}
              alt={project.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Conceito</h2>
              <p className="text-primary/70 leading-relaxed text-lg">
                {project.concept}
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm text-primary/50 uppercase tracking-wider mb-2">Cliente</h3>
                <p className="text-primary">{project.client || project.title}</p>
              </div>
              <div>
                <h3 className="text-sm text-primary/50 uppercase tracking-wider mb-2">Ano</h3>
                <p className="text-primary">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-primary/50 uppercase tracking-wider mb-2">Serviços</h3>
                <ul className="space-y-1">
                  {project.services.map((service, index) => (
                    <li key={index} className="text-primary/80">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Galeria</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary/50 text-primary/70 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-24 border-t border-primary/10 pt-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projetos/${prevProject.id}`}
                className="group flex items-center gap-3 text-primary/60 hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-xs uppercase tracking-wider block">Anterior</span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projetos/${nextProject.id}`}
                className="group flex items-center gap-3 text-primary/60 hover:text-primary transition-colors text-right"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider block">Próximo</span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetoDetalhe;
