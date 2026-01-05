import { useState } from "react";
import { Mail, Phone, Instagram, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    marca: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, servico: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "A equipe da Kronica entrará em contato em breve.",
    });

    setFormData({
      nome: "",
      email: "",
      whatsapp: "",
      marca: "",
      servico: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (28) 99916-1275",
      href: "https://wa.me/5528999161275",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "kronicastudio@gmail.com",
      href: "mailto:kronicastudio@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@kronicastudio",
      href: "https://instagram.com/kronicastudio",
    },
    {
      icon: Calendar,
      title: "Agendar",
      value: "Marcar conversa",
      href: "https://wa.me/5528999161275",
    },
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>Contato — Fale com a Kronica</title>
      <meta name="description" content="A equipe responde com próximos passos, prazos e direcionamento. Entre em contato com a Kronica." />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="w-16 h-px bg-border/50 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
              Vamos conversar?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              A equipe responde com próximos passos, prazos e direcionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Form & Contacts */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="bg-background border-border/50 focus:border-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border/50 focus:border-foreground"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+55 11 99999-9999"
                      className="bg-background border-border/50 focus:border-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="marca">Nome da marca/negócio *</Label>
                    <Input
                      id="marca"
                      name="marca"
                      value={formData.marca}
                      onChange={handleChange}
                      required
                      className="bg-background border-border/50 focus:border-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servico">Serviço de interesse *</Label>
                  <Select value={formData.servico} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-background border-border/50 focus:border-foreground">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding Estratégico</SelectItem>
                      <SelectItem value="identidade">Identidade Visual</SelectItem>
                      <SelectItem value="rebranding">Rebranding</SelectItem>
                      <SelectItem value="instagram">Gestão Visual Instagram</SelectItem>
                      <SelectItem value="uxui">UX/UI Design</SelectItem>
                      <SelectItem value="outro">Outro / Não sei ainda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Conte sobre o objetivo, momento atual e prazo desejado..."
                    className="bg-background border-border/50 focus:border-foreground resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Cards */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Contatos rápidos</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactCards.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-6 border border-border/30 hover:bg-secondary hover:text-secondary-foreground transition-all group"
                  >
                    <contact.icon className="mb-4 group-hover:text-secondary-foreground" size={24} strokeWidth={1.5} />
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/70">
                      {contact.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Microcopy */}
              <div className="mt-12 p-8 bg-secondary text-secondary-foreground">
                <p className="text-sm text-secondary-foreground/70">
                  A equipe da Kronica atende de forma digital, com processo claro e alinhamentos objetivos. 
                  Projetos podem ser realizados para clientes de qualquer lugar do Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
