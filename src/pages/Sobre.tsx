import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sobre = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Layout>
      {/* SEO */}
      <title>Sobre a Kronica</title>
      <meta
        name="description"
        content="A Kronica é um estúdio de design que desenvolve soluções visuais do físico ao digital, com clareza estratégica e alto nível de refinamento." />


      {/* About Section */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            {/* Left - Title + Text */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                Sobre o estúdio
              </span>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-10 md:text-4xl">Filosofia de Design</h1>

              <div className="relative">
                <div
                  className={`space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[2000px]" : "max-h-[180px]"
                  }`}
                >
                  <p>
                    A Kronica é um estúdio de Branding e Design Estratégico que desenvolve soluções visuais do físico ao digital. Acreditamos que toda marca precisa de enredo, uma base que organize origem, propósito, personalidade e direção antes de qualquer escolha estética. Nosso design não foca apenas na forma, mas na capacidade de comunicar com clareza, construindo percepção e transformando ideias em sistemas visuais bem estruturados.
                  </p>
                  <p>
                    Nosso trabalho abrange identidade visual, branding e posicionamento, direção criativa, impressos, apresentações institucionais, sistemas para redes sociais e experiências digitais. Atuamos tanto na construção completa de marcas quanto no desenvolvimento de desdobramentos que fortalecem a comunicação e elevam o padrão visual de um negócio. Cada projeto é pensado como uma estrutura contínua, onde estratégia, narrativa e identidade caminham juntas para gerar consistência e presença.
                  </p>
                  <p>
                    Operando de forma independente e próxima, cada projeto é conduzido diretamente pela equipe responsável, garantindo envolvimento do diagnóstico ao conceito, da criação à aplicação final. Nosso método permite decisões mais precisas, processos bem direcionados e entregas com alto nível de refinamento. Com uma abordagem contemporânea e olhar estratégico, damos forma e significado a marcas que precisam ser levadas a sério.
                  </p>
                </div>

                {!expanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                )}

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  {expanded ? "Ler menos" : "Ler mais"}
                  {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Right - Approach + Stats */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                  Abordagem
                </span>

                <div className="space-y-0">
                  <div className="border-l-2 border-foreground pl-5 py-4">
                    <h3 className="text-base font-semibold mb-1">Estratégia</h3>
                    <p className="text-sm text-muted-foreground">
                      Diagnóstico aprofundado de contexto, mercado e posicionamento
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground pl-5 py-4">
                    <h3 className="text-base font-semibold mb-1">Colaboração</h3>
                    <p className="text-sm text-muted-foreground">
                      Parceria próxima com clientes em todas as etapas do processo
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground pl-5 py-4">
                    <h3 className="text-base font-semibold mb-1">Refinamento</h3>
                    <p className="text-sm text-muted-foreground">
                      Soluções visuais contemporâneas com alto nível de acabamento
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-0">
                <div className="border-t border-border pt-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                        Fundação
                      </span>
                      <span className="text-3xl md:text-4xl font-light">2026</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                        Projetos
                      </span>
                      <span className="text-3xl md:text-4xl font-light">10+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);
};

export default Sobre;