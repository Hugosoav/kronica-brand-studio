import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logoBranco from "@/assets/logo-branco.png";
import logoPreto from "@/assets/logo-preto.png";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img 
              src={theme === "dark" ? logoBranco : logoPreto} 
              alt="Kronica" 
              className="h-5 mb-3" 
            />
            <p className="text-sm text-secondary-foreground/70">
              Branding e design estratégico para marcas com propósito.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-secondary-foreground/50 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-secondary-foreground/50 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-sm hover:text-foreground transition-colors">
                  Branding Estratégico
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-foreground transition-colors">
                  Identidade Visual
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-foreground transition-colors">
                  Rebranding
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-foreground transition-colors">
                  Websites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-secondary-foreground/50 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:kronicastudio@gmail.com"
                  className="text-sm hover:text-foreground transition-colors flex items-center gap-2"
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
                  className="text-sm hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Phone size={14} />
                  +55 (28) 99916 1275
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kronicastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Instagram size={14} />
                  @kronicastudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-secondary-foreground/50">
              © {currentYear} Kronica. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/kronicastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:kronicastudio@gmail.com"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/5528999161275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
