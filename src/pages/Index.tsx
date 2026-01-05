import { Link } from "react-router-dom";
import { ArrowRight, Target, Palette, Globe, Compass, Layers, RefreshCw, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Kronica — Branding e Design Estratégico</title>
      <meta name="description" content="A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética — do posicionamento à aplicação." />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-8 animate-fade-in" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
              Branding e design estratégico para marcas que querem ser lembradas.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up delay-100">
              A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética — do posicionamento à aplicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Button asChild size="lg">
                <Link to="/servicos">
                  Ver serviços
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contato">Falar com a equipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* O que a Kronica Faz */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Três pilares para marcas consistentes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border/30 hover:border-border/60 transition-colors">
              <Target className="mb-6 text-foreground" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Estratégia de marca</h3>
              <p className="text-muted-foreground">
                Posicionamento, direção e clareza. Definição do que a marca representa antes de qualquer traço visual.
              </p>
            </div>

            <div className="p-8 border border-border/30 hover:border-border/60 transition-colors">
              <Palette className="mb-6 text-foreground" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Identidade visual</h3>
              <p className="text-muted-foreground">
                Sistema completo, não só logo. Paleta, tipografia, elementos e aplicações que funcionam em qualquer contexto.
              </p>
            </div>

            <div className="p-8 border border-border/30 hover:border-border/60 transition-colors">
              <Globe className="mb-6 text-foreground" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Presença digital</h3>
              <p className="text-muted-foreground">
                Consistência e aplicação. A marca traduzida para o digital com coerência e impacto visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Serviços em Destaque */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Serviços</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Soluções para cada momento da marca</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Compass, title: "Branding Estratégico", desc: "Posicionamento e direção criativa" },
              { icon: Palette, title: "Identidade Visual", desc: "Sistema visual completo" },
              { icon: RefreshCw, title: "Rebranding", desc: "Evolução de marca existente" },
              { icon: Instagram, title: "Gestão Visual Instagram", desc: "Consistência por 6 meses" },
            ].map((service, index) => (
              <div key={index} className="group p-6 border border-border/30 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <service.icon className="mb-4 group-hover:text-secondary-foreground transition-colors" size={28} strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/70 mb-4">{service.desc}</p>
                <Link 
                  to="/servicos" 
                  className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Método Kronica */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Processo</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Método Kronica</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Briefing aprofundado, objetivos claros e análise do cenário atual." },
              { step: "02", title: "Direção", desc: "Posicionamento, conceito criativo e referências visuais definidas." },
              { step: "03", title: "Construção", desc: "Identidade visual, sistema completo e peças-chave desenvolvidas." },
              { step: "04", title: "Implementação", desc: "Aplicações finais, guia de uso e suporte para o lançamento." },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-light text-border/50 mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border/30 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Marcas que contam histórias</h2>
            <div className="space-y-6 text-secondary-foreground/80 leading-relaxed">
              <p>
                A Kronica é um brand studio independente que acredita no poder das marcas. Elas são narrativas vivas, construídas no tempo, no detalhe e na coerência.
              </p>
              <p>
                Inspirados no conceito de crônica, criamos marcas como quem escreve histórias: com propósito, personalidade e intenção. Nada é genérico e nada é por acaso. Cada projeto é pensado para refletir a essência de quem está por trás da marca e sustentar um posicionamento claro e consistente.
              </p>
              <p>
                Trabalhamos de forma próxima, estratégica e autoral, unindo design e branding para construir marcas que fazem sentido, se diferenciam e permanecem.
              </p>
              <p>
                A Kronica existe para marcas que entendem que branding é construção contínua, que boas histórias não se contam em um único capítulo, mas se sustentam ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Pronto para dar clareza e presença à marca?
            </h2>
            <p className="text-muted-foreground mb-8">
              A conversa começa com uma troca simples. Sem compromisso, sem formulários intermináveis.
            </p>
            <Button asChild size="lg">
              <Link to="/contato">
                Entrar em contato
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
