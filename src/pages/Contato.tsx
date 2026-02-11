import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
          content="A equipe responde com próximos passos, prazos e direcionamento. Entre em contato com a Kronica."
        />

        <div className="flex-1" />
        <Footer />
      </main>
    </div>
  );
};

export default Contato;
