import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logoBranco from "@/assets/logo-branco.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img src={logoBranco} alt="Kronica" className="h-6 mb-4" />
            <p className="text-sm text-secondary-foreground/70">
              Branding e design estratégico para marcas com propósito.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-secondary-foreground/50 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm hover:text-primary-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-primary-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-secondary-foreground/50 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-sm hover:text-primary-foreground transition-colors">
                  Branding Estratégico
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-primary-foreground transition-colors">
                  Identidade Visual
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-primary-foreground transition-colors">
                  Rebranding
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-primary-foreground transition-colors">
                  UX/UI Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-secondary-foreground/50 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kronicastudio@gmail.com"
                  className="text-sm hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  kronicastudio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5528999161275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Phone size={14} />
                  +55 (28) 99916-1275
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kronicastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Instagram size={14} />
                  @kronicastudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-secondary-foreground/50">
              © {currentYear} Kronica. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/kronicastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:kronicastudio@gmail.com"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/5528999161275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
