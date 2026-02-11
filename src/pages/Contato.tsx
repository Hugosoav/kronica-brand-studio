import Header from "@/components/Header";

import { ArrowUpRight } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 -z-10 bg-background" />
      <Header />
      <main className="flex-1 pt-16 flex flex-col">
        {/* SEO */}
        <title>Contato — Fale com a Kronica</title>
        <meta
          name="description"
          content="A equipe responde com próximos passos, prazos e direcionamento. Entre em contato com a Kronica." />


        {/* Contact Section */}
        <section className="flex-1 flex items-center py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12">
              {/* Left Column */}
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                  Entre em contato
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-16 text-foreground">
                  Vamos<br />criar algo<br />extraordinário
                </h1>

                <div className="space-y-10">
                  <a href="mailto:kronicastudio@gmail.com" className="group block">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                      Email
                    </span>
                    <span className="text-lg md:text-xl text-foreground flex items-center gap-2 group-hover:opacity-70 transition-opacity">
                      kronicastudio@gmail.com
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>

                  <a
                    href="https://wa.me/5528999161275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block">

                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                      WhatsApp
                    </span>
                    <span className="text-lg md:text-xl text-foreground flex items-center gap-2 group-hover:opacity-70 transition-opacity">
                      +55 (28) 99916-1275
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                    Siga-nos
                  </span>
                  <a
                    href="https://instagram.com/kronicastudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-lg md:text-xl text-foreground hover:opacity-70 transition-opacity">

                    Instagram
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="mt-16 md:mt-0">
                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground max-w-md">
                      Branding e design estratégico para marcas com propósito. Nosso processo começa pela escuta, compreendendo sua visão e traduzindo em soluções visuais que superam expectativas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>);

};

export default Contato;