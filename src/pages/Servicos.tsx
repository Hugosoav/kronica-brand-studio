import { Link } from "react-router-dom";
import { ArrowRight, Compass, Palette, RefreshCw, Instagram, Layers, Clock, FileText, Printer } from "lucide-react";
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
      timeline: "1 a 3 semanas",
      cta: "Quero direcionar minha marca",
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      subtitle: "Sistema Completo",
      forWho: "Para marcas que precisam de um sistema visual coeso e aplicável em qualquer contexto.",
      includes: "Logo e variações, paleta de cores, tipografia, elementos gráficos, padrões e aplicações essenciais.",
      deliverables: "Brand board + arquivos finais + mini brand guide",
      timeline: "2 a 5 semanas",
      cta: "Quero uma identidade completa",
    },
    {
      icon: RefreshCw,
      title: "Rebranding",
      subtitle: "Evolução de marca",
      forWho: "Para marcas que precisam evoluir sem perder a essência, ou se reposicionar completamente.",
      includes: "Auditoria visual, ajustes de direção, evolução do sistema e plano de aplicação gradual.",
      deliverables: "Identidade atualizada + guia + orientação de implementação",
      timeline: "3 a 6 semanas",
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
      title: "Websites",
      subtitle: "Design & Desenvolvimento",
      forWho: "Para marcas que precisam de um site profissional sem contratar dois prestadores diferentes.",
      includes: "Layout personalizado, design responsivo, programação front-end e back-end, domínio, hospedagem e ativação do site.",
      deliverables: "Site funcional + painel de gestão + orientação de uso",
      timeline: "3 a 8 semanas",
      cta: "Quero meu site completo",
    },
    {
      icon: Printer,
      title: "Produção para Impressos",
      subtitle: "Material Gráfico",
      forWho: "Para marcas que precisam de materiais impressos com qualidade visual e coerência com a identidade.",
      includes: "Criação e diagramação de banners, folhetos, revistas, cartões de visita, catálogos e demais peças gráficas.",
      deliverables: "Arquivos finais para impressão (PDF, CMYK) + mockups de apresentação",
      timeline: "1 a 3 semanas",
      cta: "Quero materiais impressos",
    },
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>Serviços — Branding, Identidade e Presença Digital | Kronica</title>
      <meta name="description" content="Escolhas objetivas, entregáveis claros e um visual que sustenta o posicionamento. Conheça os serviços da Kronica." />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 animate-fade-in-up">
              Serviços da Kronica
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              Escolhas objetivas, entregáveis claros e um visual que sustenta o posicionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-4">
        <div className="editorial-line" />
      </div>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-6 pb-12 border-b border-border/30 last:border-0">
                {/* Left Column - Title */}
                <div>
                  <service.icon className="mb-3" size={28} strokeWidth={1.5} />
                  <h2 className="text-xl md:text-2xl font-semibold mb-1">{service.title}</h2>
                  <span className="text-muted-foreground text-sm">{service.subtitle}</span>
                </div>

                {/* Middle Column - Details */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Para quem</h4>
                      <p className="text-foreground text-sm">{service.forWho}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">O que inclui</h4>
                      <p className="text-foreground text-sm">{service.includes}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText size={16} className="mt-0.5 text-muted-foreground" />
                      <div>
                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-0.5">Entregáveis</h4>
                        <p className="text-foreground text-sm">{service.deliverables}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-0.5 text-muted-foreground" />
                      <div>
                        <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-0.5">Prazo estimado</h4>
                        <p className="text-foreground text-sm">{service.timeline}</p>
                      </div>
                    </div>
                    <Button asChild className="mt-2" size="sm">
                      <Link to="/contato">
                        {service.cta}
                        <ArrowRight className="ml-2" size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
