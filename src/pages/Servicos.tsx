import { Link } from "react-router-dom";
import { ArrowRight, Compass, Palette, RefreshCw, Instagram, Layers, Clock, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Servicos = () => {
  const services = [
    {
      icon: Compass,
      title: "Branding Estratégico",
      subtitle: "Posicionamento & Direção",
      forWho: "Para marcas em criação ou reposicionamento que precisam de clareza antes do visual.",
      includes: "Diagnóstico, proposta de valor, definição de público, tom de voz, conceito e direção visual.",
      deliverables: "Documento de estratégia + guia de direção criativa",
      timeline: "1–3 semanas",
      cta: "Quero direcionar minha marca",
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      subtitle: "Sistema Completo",
      forWho: "Para marcas que precisam de um sistema visual coeso e aplicável em qualquer contexto.",
      includes: "Logo e variações, paleta de cores, tipografia, elementos gráficos, padrões e aplicações essenciais.",
      deliverables: "Brand board + arquivos finais + mini brand guide",
      timeline: "2–5 semanas",
      cta: "Quero uma identidade completa",
    },
    {
      icon: RefreshCw,
      title: "Rebranding",
      subtitle: "Evolução de marca",
      forWho: "Para marcas que precisam evoluir sem perder a essência, ou se reposicionar completamente.",
      includes: "Auditoria visual, ajustes de direção, evolução do sistema e plano de aplicação gradual.",
      deliverables: "Identidade atualizada + guia + orientação de implementação",
      timeline: "3–6 semanas",
      cta: "Quero evoluir minha marca",
    },
    {
      icon: Instagram,
      title: "Gestão Visual para Instagram",
      subtitle: "Contrato 6 meses",
      forWho: "Para marcas que precisam de consistência visual no Instagram sem depender de designers avulsos.",
      includes: "Direção criativa, padronização visual, templates, guias de composição e check-ins mensais.",
      deliverables: "Kit de templates + guideline + acompanhamento contínuo",
      timeline: "Contrato de 6 meses",
      cta: "Quero consistência no Instagram",
    },
    {
      icon: Layers,
      title: "UX/UI & Interfaces",
      subtitle: "Design de Produto",
      forWho: "Para produtos digitais que precisam de interfaces funcionais e visualmente coerentes.",
      includes: "Wireframes, UI kit base, protótipo de páginas-chave e handoff para desenvolvimento.",
      deliverables: "Protótipo navegável + assets essenciais",
      timeline: "2–6 semanas",
      cta: "Quero desenhar meu produto",
    },
  ];

  const formats = [
    {
      title: "Essencial",
      desc: "Direção estratégica + base visual para marcas que estão começando.",
    },
    {
      title: "Completo",
      desc: "Branding + identidade visual + aplicações. O pacote mais procurado.",
    },
    {
      title: "Contínuo",
      desc: "Gestão visual por 6 meses para marcas que precisam de consistência.",
    },
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>Serviços — Branding, Identidade e Presença Digital | Kronica</title>
      <meta name="description" content="Escolhas objetivas, entregáveis claros e um visual que sustenta o posicionamento. Conheça os serviços da Kronica." />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
              Serviços da Kronica
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              Escolhas objetivas, entregáveis claros e um visual que sustenta o posicionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-8 pb-16 border-b border-border/30 last:border-0">
                {/* Left Column - Title */}
                <div>
                  <service.icon className="mb-4" size={32} strokeWidth={1.5} />
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2">{service.title}</h2>
                  <span className="text-muted-foreground">{service.subtitle}</span>
                </div>

                {/* Middle Column - Details */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Para quem</h4>
                      <p className="text-foreground">{service.forWho}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">O que inclui</h4>
                      <p className="text-foreground">{service.includes}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <FileText size={18} className="mt-1 text-muted-foreground" />
                      <div>
                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Entregáveis</h4>
                        <p className="text-foreground text-sm">{service.deliverables}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="mt-1 text-muted-foreground" />
                      <div>
                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Prazo estimado</h4>
                        <p className="text-foreground text-sm">{service.timeline}</p>
                      </div>
                    </div>
                    <Button asChild className="mt-4">
                      <Link to="/contato">
                        {service.cta}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Como Contratar */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Processo</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Como contratar</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Envio de briefing", desc: "Você compartilha informações sobre a marca, objetivos e momento atual." },
              { step: "02", title: "Diagnóstico + proposta", desc: "A equipe analisa e envia uma proposta objetiva com escopo, prazo e valores." },
              { step: "03", title: "Cronograma + início", desc: "Com tudo alinhado, o projeto começa com datas e entregas definidas." },
            ].map((item, index) => (
              <div key={index} className="p-8 border border-border/30">
                <div className="text-4xl font-light text-border/50 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Formatos */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Formatos</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Opções de contratação</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {formats.map((format, index) => (
              <div key={index} className="p-8 bg-secondary text-secondary-foreground">
                <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                <p className="text-secondary-foreground/70 text-sm">{format.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Valores sob consulta — a equipe recomenda o formato ideal após o briefing.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Send className="mx-auto mb-6" size={32} strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Receber uma proposta objetiva
            </h2>
            <p className="text-secondary-foreground/70 mb-8">
              Sem compromisso. A equipe analisa e responde com direcionamento, prazo e valores.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link to="/contato">
                Solicitar proposta
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
