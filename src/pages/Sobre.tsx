import Layout from "@/components/Layout";

const Sobre = () => {
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

              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>A Kronica é um estúdio de design especializado na criação de marcas e materiais gráficos para o físico e o digital. Atuando como um estúdio independente, cada projeto que construímos é tratado de forma exclusiva, com participação ativa do cliente integrada ao processo.</p>
                <p>Nossa premissa surgiu da ideia de que marcas precisam ser lembradas não apenas pela estética, mas pelas histórias que carregam: como surgiram e como devem ser lembradas.</p>
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
                    <p className="text-sm text-muted-foreground">Parceria próxima com clientes durante as etapas do processo

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
    </Layout>);};

export default Sobre;