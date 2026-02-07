import { useState } from "react";
import { Mail, Phone, Instagram, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
const Contato = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    marca: "",
    servico: "",
    mensagem: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      servico: value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Mensagem enviada!",
      description: "A equipe da Kronica entrará em contato em breve."
    });
    setFormData({
      nome: "",
      email: "",
      whatsapp: "",
      marca: "",
      servico: "",
      mensagem: ""
    });
    setIsSubmitting(false);
  };
  const contactCards = [{
    icon: Phone,
    title: "WhatsApp",
    value: "+55 (28) 99916-1275",
    href: "https://wa.me/5528999161275"
  }, {
    icon: Mail,
    title: "E-mail",
    value: "kronicastudio@gmail.com",
    href: "mailto:kronicastudio@gmail.com"
  }, {
    icon: Instagram,
    title: "Instagram",
    value: "@kronicastudio",
    href: "https://instagram.com/kronicastudio"
  }, {
    icon: Calendar,
    title: "Agendar",
    value: "Marcar conversa",
    href: "https://wa.me/5528999161275"
  }];
  return <Layout>
      {/* SEO */}
      <title>Contato — Fale com a Kronica</title>
      <meta name="description" content="A equipe responde com próximos passos, prazos e direcionamento. Entre em contato com a Kronica." />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 animate-fade-in-up">O que vamos construir?</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              A equipe responde com próximos passos, prazos e direcionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-4">
        <div className="editorial-line" />
      </div>

      {/* Form & Contacts */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="bg-background border-border/50 focus:border-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background border-border/50 focus:border-foreground" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                    <Input id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+55 11 99999 9999" className="bg-background border-border/50 focus:border-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="marca">Nome da marca/negócio *</Label>
                    <Input id="marca" name="marca" value={formData.marca} onChange={handleChange} required className="bg-background border-border/50 focus:border-foreground" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="servico">Serviço de interesse *</Label>
                  <Select value={formData.servico} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-background border-border/50 focus:border-foreground">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="identidade">Identidade Visual</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="rebranding">Rebranding</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="impressos">Produção para Impressos</SelectItem>
                      <SelectItem value="outro">Outro / Não sei ainda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required rows={4} placeholder="Conte sobre o objetivo, momento atual e prazo desejado..." className="bg-background border-border/50 focus:border-foreground resize-none" />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Enviando..." : <>
                      Enviar mensagem
                      <Send className="ml-2" size={16} />
                    </>}
                </Button>
              </form>
            </div>

            {/* Contact Cards */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Contatos rápidos</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {contactCards.map((contact, index) => <a key={index} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="p-4 border border-border/30 hover:bg-secondary hover:text-secondary-foreground transition-all group">
                    <contact.icon className="mb-3 group-hover:text-secondary-foreground" size={20} strokeWidth={1.5} />
                    <h3 className="font-semibold text-sm mb-0.5">{contact.title}</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-secondary-foreground/70">
                      {contact.value}
                    </p>
                  </a>)}
              </div>

              {/* Microcopy */}
              <div className="mt-8 p-6 bg-secondary text-secondary-foreground">
                <p className="text-sm text-secondary-foreground/70">
                  A equipe da Kronica atende de forma digital, com processo claro e alinhamentos objetivos. Projetos podem ser realizados para clientes de qualquer lugar do Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contato;