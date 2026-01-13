import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FloatingCardGallery from "@/components/ui/floating-card-gallery";
import InfiniteHero from "@/components/ui/infinite-hero";
import { projects } from "@/data/projects";

const galleryCards = projects.map(p => ({
  title: p.title,
  description: p.description,
  fullDescription: p.fullDescription,
  category: p.category,
  image: p.images.cover,
  tags: p.tags
}));

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Kronica — Branding e Design Estratégico</title>
      <meta name="description" content="A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética — do posicionamento à aplicação." />

      {/* Hero Section */}
      <InfiniteHero 
        subtitle="Kronica Studio"
        primaryButtonText="Conhecer"
        primaryButtonLink="/sobre"
        secondaryButtonText="Ver projetos"
        secondaryButtonLink="/projetos"
      />

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold animate-fade-in-up">Projetos</h2>
            <p className="text-primary/60 mt-4 max-w-xl mx-auto animate-fade-in-up delay-100">
              Marcas que construímos com propósito, personalidade e intenção.
            </p>
          </div>

          <FloatingCardGallery 
            cards={galleryCards} 
            maxCards={6}
            accentColor="rgba(255, 255, 255, 0.1)"
          />

          <div className="text-center mt-8 animate-fade-in-up">
            <Button asChild size="lg" className="group">
              <Link to="/projetos">
                Ver todos os projetos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
