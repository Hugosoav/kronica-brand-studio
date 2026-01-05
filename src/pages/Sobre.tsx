import { Link } from "react-router-dom";
import { ArrowRight, Check, Eye, Sparkles, Lightbulb, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const Sobre = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Sobre a Kronica — Estratégia com Estética</title>
      <meta name="description" content="A equipe da Kronica atua entre branding e design para construir marcas com personalidade, clareza e consistência." />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
              Estratégia com estética.<br />Design com direção.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              A equipe da Kronica atua entre branding e design para construir marcas com personalidade, clareza e consistência.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Quem é a Kronica */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Quem somos</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Sobre a Kronica</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                A Kronica é um estúdio de branding e design estratégico. A equipe trabalha com marcas em diferentes momentos: criação do zero, evolução ou reposicionamento completo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O foco está em tornar a comunicação visual coerente com o objetivo de cada negócio. Não se trata apenas de "deixar bonito", mas de criar sistemas que funcionam — no digital e no físico, no dia a dia e nas grandes apresentações.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto parte de um processo claro: diagnóstico, direção, construção e implementação. Assim, as entregas têm intenção e racional — não são apenas questão de gosto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A Kronica valoriza relações transparentes, comunicação objetiva e entregas que realmente fazem diferença para quem as recebe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Valores */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Valores</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">O que guia o trabalho</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Clareza", desc: "Comunicação direta, sem ruído. O essencial sempre em primeiro lugar." },
              { icon: Check, title: "Consistência", desc: "Sistemas que funcionam em qualquer contexto, não peças soltas." },
              { icon: Sparkles, title: "Elegância funcional", desc: "Beleza com propósito. Estética que resolve, não apenas decora." },
              { icon: Lightbulb, title: "Criatividade com método", desc: "Ideias fundamentadas em processo, não em impulso." },
            ].map((value, index) => (
              <div key={index} className="p-8 bg-secondary text-secondary-foreground">
                <value.icon className="mb-6" size={28} strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Por que a Kronica</h2>
              <p className="text-muted-foreground">
                A equipe acredita que bom design nasce de boas perguntas. Por isso, cada projeto começa com escuta e termina com entregas que fazem sentido no mundo real.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Método bem definido e entregáveis claros desde o início",
                "Sistema visual pensado para aplicação — digital e físico",
                "Direção criativa com racional, não apenas opinião",
                "Processo leve com checkpoints e alinhamento constante",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-border/30 last:border-0">
                  <Compass className="mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Perguntas comuns</h2>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/30 px-6">
                <AccordionTrigger className="text-left">
                  A Kronica atende quais tipos de negócio?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A equipe trabalha com empresas de diferentes portes e segmentos — startups, consultorias, marcas pessoais, e-commerces e prestadores de serviço. O fator comum é a busca por uma comunicação visual mais coerente e profissional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/30 px-6">
                <AccordionTrigger className="text-left">
                  Como funciona o processo e os prazos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cada projeto segue 4 etapas: diagnóstico, direção, construção e implementação. Os prazos variam de acordo com o escopo, mas a equipe compartilha cronograma detalhado antes de iniciar qualquer trabalho.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/30 px-6">
                <AccordionTrigger className="text-left">
                  A equipe faz apenas logotipo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. A Kronica trabalha com sistemas visuais completos — logo, paleta, tipografia, elementos gráficos e aplicações. O objetivo é entregar uma identidade consistente, não apenas uma marca isolada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/30 px-6">
                <AccordionTrigger className="text-left">
                  Quais entregáveis fazem parte do projeto?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende do escopo contratado, mas geralmente incluem: documento de estratégia, brand board, arquivos finais em diversos formatos, mini brand guide e orientações de aplicação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border/30 px-6">
                <AccordionTrigger className="text-left">
                  O atendimento é online?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. Todo o processo acontece de forma digital, com reuniões por videoconferência, documentos compartilhados e comunicação via e-mail ou WhatsApp. Prático e eficiente para qualquer lugar do Brasil.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Se fizer sentido, a equipe envia próximos passos e uma proposta.
            </h2>
            <p className="text-secondary-foreground/70 mb-8">
              Sem compromisso. Uma conversa para entender o momento e as necessidades da marca.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link to="/contato">
                Falar com a Kronica
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
