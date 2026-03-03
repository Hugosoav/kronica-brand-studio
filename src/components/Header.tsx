import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import logoBranco from "@/assets/logo-branco.png";
import { projects } from "@/data/projects";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <MagneticButton strength={0.15}>
              <Link to="/" className="flex items-center">
                <motion.img
                  src={logoBranco}
                  alt="Kronica"
                  className="h-5 md:h-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                />
              </Link>
            </MagneticButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-sm font-medium transition-colors hover:text-foreground group py-1"
                >
                  <span className={isActive(link.href) ? "text-foreground" : "text-muted-foreground"}>
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-foreground"
                    initial={false}
                    animate={{ width: isActive(link.href) ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center gap-1">
              <MagneticButton strength={0.2}>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Buscar projetos"
                >
                  <Search size={20} />
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar projetos"
              >
                <Search size={18} />
              </Button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden pt-4 pb-2 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-sm font-medium py-3 block transition-colors hover:text-foreground hover:pl-2 ${
                          isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Search Command Dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Buscar projeto ou categoria..." />
        <CommandList>
          <CommandEmpty>Nenhum projeto encontrado.</CommandEmpty>
          <CommandGroup heading="Projetos">
            {projects.map((project) => (
              <CommandItem
                key={project.id}
                value={`${project.title} ${project.category}`}
                onSelect={() => {
                  navigate(`/projetos/${project.id}`);
                  setSearchOpen(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={project.images.cover}
                    alt={project.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{project.title}</p>
                    <p className="text-xs text-muted-foreground">{project.category}</p>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Header;
