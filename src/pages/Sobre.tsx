import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Sobre = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Sobre a Kronica — Marcas com Enredo</title>
      <meta name="description" content="A Kronica é um estúdio de design que constrói marcas a partir de narrativa, estratégia e consistência. Cada projeto é desenvolvido em capítulos." />

      {/* Hero Editorial */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              Sobre o estúdio
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-6 animate-fade-in-up">
              Marcas com enredo.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-100">
              A Kronica é um estúdio de design contemporâneo que constrói marcas e sistemas visuais a partir de narrativa, estratégia e consistência. Cada projeto é desenvolvido como um livro, com início, desenvolvimento e continuidade.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border/30" />
      </div>

      {/* Como a Kronica trabalha + O que constrói - Combinado */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Método
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-4">
              Como a Kronica trabalha
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada projeto da Kronica segue uma estrutura narrativa. Não é um processo genérico de "briefing, criação e entrega", é uma construção em capítulos, onde cada etapa prepara a próxima.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {/* Prólogo */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-light text-muted-foreground/30">01</span>
                <div>
                  <h3 className="text-lg font-semibold">Prólogo</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Origem</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Antes de criar, a equipe escuta. Entende o cenário, mapeia o contexto e identifica o ponto de partida. É aqui que se define o que a marca precisa ser e o que ela nunca deve parecer.
              </p>
            </div>

            {/* Capítulos */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-light text-muted-foreground/30">02</span>
                <div>
                  <h3 className="text-lg font-semibold">Capítulos</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Direção + Forma</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com a direção definida, começa a construção. Estratégia vira sistema. Conceito vira identidade. Cada elemento é pensado para conversar com o todo: nome, símbolo, tipografia, cor, tom de voz.
              </p>
            </div>

            {/* Epílogo */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-light text-muted-foreground/30">03</span>
                <div>
                  <h3 className="text-lg font-semibold">Epílogo</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Continuidade</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Uma marca não termina na entrega. A Kronica desenvolve sistemas replicáveis, feitos para crescer. Guias, templates, desdobramentos, tudo pensado para manter a consistência ao longo do tempo.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-border/30 mb-12 md:mb-16">
            <p className="text-sm text-muted-foreground italic">
              "Moral da história: marca boa não é a mais bonita, é a que faz sentido."
            </p>
          </div>

          {/* O que a Kronica constrói */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Atuação
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-3">
                O que a Kronica constrói
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed mb-8">
                A Kronica não se limita à criação de marcas. É um estúdio multidisciplinar de design que trabalha em diferentes frentes, sempre mantendo o mesmo fio narrativo.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Branding & Identidade</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Construção de marcas do zero ou reposicionamento de marcas existentes. Estratégia, naming, identidade visual completa.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Sistemas de Design</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Criação de sistemas visuais escaláveis, pensados para manter consistência em qualquer aplicação ou canal.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Digital & Interfaces</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Design de sites, landing pages e experiências digitais que traduzem a marca para o ambiente online.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Campanhas & Produção</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direção de arte para campanhas, peças de comunicação e produção contínua de conteúdo visual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border/30" />
      </div>

      {/* Parcerias com Agências */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Parcerias
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-3">
                Para agências
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base leading-relaxed">
                A Kronica também atua como parceira de agências, sendo o braço de design, branding e direção de arte para projetos que exigem profundidade visual e consistência.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para agências de publicidade, comunicação ou marketing que precisam de um estúdio de confiança para executar campanhas, criar sistemas visuais ou dar suporte contínuo em produção, a Kronica oferece a mesma qualidade e rigor aplicados aos projetos próprios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A dinâmica é simples: a agência mantém o relacionamento com o cliente, e a Kronica entra como extensão criativa, com entregas consistentes, prazos respeitados e comunicação direta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assinatura Conceitual - CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/50 mb-6 block">
              Epílogo
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-secondary-foreground">
              Direção. Narrativa. Sistema.
            </h2>
            <p className="text-secondary-foreground/70 mb-8 leading-relaxed">
              Se a sua marca precisa de mais do que um logo, precisa de enredo, a Kronica pode ajudar a construir esse capítulo.
            </p>
            <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link to="/contato">
                Iniciar uma conversa
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
