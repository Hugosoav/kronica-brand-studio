"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { projects } from "@/data/projects";

// Collect all project images for the hero slideshow
const heroImages = projects.flatMap(project => [
  project.images.cover,
  ...project.images.gallery.slice(0, 2) // Take cover + 2 gallery images per project
]).slice(0, 12); // Limit to 12 images total

const serviceOptions = [
  { label: "Tudo", value: "" },
  { label: "Identidade Visual", value: "Identidade Visual" },
  { label: "Branding", value: "Branding" },
  { label: "Rebranding", value: "Rebranding" },
  { label: "Social Media", value: "Social Media" },
  { label: "Impressos", value: "Impressos" },
  { label: "Websites", value: "Websites" },
];

const industryOptions = [
  { label: "Todos", value: "" },
  { label: "Artes e Cultura", value: "Artes e Cultura" },
  { label: "Cívico e Setor Público", value: "Cívico e Setor Público" },
  { label: "Marcas de Consumo", value: "Marcas de Consumo" },
  { label: "Educação", value: "Educação" },
  { label: "Entretenimento", value: "Entretenimento" },
  { label: "Moda e Beleza", value: "Moda e Beleza" },
  { label: "Finanças", value: "Finanças" },
  { label: "Alimentos e Bebidas", value: "Alimentos e Bebidas" },
  { label: "Saúde", value: "Saúde" },
  { label: "Hotelaria e Viagens", value: "Hotelaria e Viagens" },
  { label: "Manufatura e Indústria", value: "Manufatura e Indústria" },
  { label: "Serviços Profissionais", value: "Serviços Profissionais" },
  { label: "Publicação e Editoração", value: "Publicação e Editoração" },
  { label: "Mercado Imobiliário", value: "Mercado Imobiliário" },
  { label: "Tecnologia", value: "Tecnologia" },
  { label: "Transporte", value: "Transporte" },
];


interface InfiniteHeroProps {
  title?: string;
  subtitle?: string;
}

interface DropdownProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ options, value, onChange, isOpen, onToggle, onClose }: DropdownProps) {
  const selectedLabel = options.find(o => o.value === value)?.label || options[0].label;

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-1 font-medium text-foreground hover:opacity-70 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {selectedLabel}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm animate-fade-in" 
            onClick={onClose} 
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          />
          <div 
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl bg-background border border-border rounded-2xl shadow-2xl p-6"
            style={{ 
              animation: 'popupIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">Selecione uma opção</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90 active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {options.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    onClose();
                  }}
                  className={`text-left px-4 py-3 text-sm rounded-lg border transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.97] ${
                    value === option.value 
                      ? 'bg-foreground text-background border-foreground font-medium shadow-lg' 
                      : 'border-border hover:border-foreground/50 hover:bg-muted'
                  }`}
                  style={{ 
                    animation: `slideUp 0.3s ease-out ${index * 0.03}s both`,
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function InfiniteHero({
  title = "Marcas que contam histórias",
  subtitle = "Kronica Studio",
}: InfiniteHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextImageIndex((currentImageIndex + 1) % heroImages.length);
      
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleImageClick = useCallback((index: number) => {
    if (index === currentImageIndex) return;
    setIsTransitioning(true);
    setNextImageIndex(index);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 800);
  }, [currentImageIndex]);

  const handleNavigate = () => {
    const params = new URLSearchParams();
    if (selectedService) params.set("service", selectedService);
    if (selectedIndustry) params.set("industry", selectedIndustry);
    const query = params.toString();
    navigate(`/projetos${query ? `?${query}` : ""}`);
  };


  useGSAP(
    () => {
      gsap.set(h1Ref.current, {
        opacity: 0,
        y: 40,
        filter: "blur(12px)",
        scale: 0.95,
      });
      gsap.set(pRef.current, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)",
      });
      
      const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];
      if (ctas.length) gsap.set(ctas, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(
          h1Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          0.3,
        )
        .to(
          pRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
          },
          "-=0.5",
        )
        .to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

      // Continuous shimmer animation on title
      gsap.to(h1Ref.current, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1,
        delay: 1.5,
      });
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Image Background with Rotation */}
      <div className="absolute inset-0 z-0">
        {/* Current image */}
        <div
          className={`absolute inset-0 transition-all duration-800 ease-out ${
            isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Next image (preloaded underneath) */}
        <div
          className={`absolute inset-0 transition-all duration-800 ease-out ${
            isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: `url(${heroImages[nextImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Ken Burns subtle animation */}
        <div
          className="absolute inset-0 animate-[kenburns_20s_ease-in-out_infinite]"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isTransitioning ? 0 : 0.3,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient fade to content */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
        {/* Image indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {heroImages.slice(0, 6).map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImageIndex 
                  ? 'bg-foreground w-8' 
                  : 'bg-foreground/30 hover:bg-foreground/50 w-1.5'
              }`}
              aria-label={`Imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1
            ref={h1Ref}
            className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-7xl py-2"
            style={{
              background: "linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--foreground)) 40%, hsl(var(--muted-foreground)) 50%, hsl(var(--foreground)) 60%, hsl(var(--foreground)) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>

          <p
            ref={pRef}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl px-2"
          >
            {subtitle}
          </p>

          <div ref={ctaRef} className="mt-2 sm:mt-4 flex flex-col items-center gap-6 w-full max-w-3xl">
            {/* Search Bar with Dropdowns */}
            <div 
              onClick={handleNavigate}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-muted/80 backdrop-blur-sm rounded-full cursor-pointer hover:bg-muted transition-colors flex-wrap justify-center"
            >
              <span className="text-muted-foreground text-sm sm:text-base">Criamos</span>
              <div onClick={(e) => e.stopPropagation()}>
                <Dropdown
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  isOpen={serviceOpen}
                  onToggle={() => {
                    setServiceOpen(!serviceOpen);
                    setIndustryOpen(false);
                  }}
                  onClose={() => setServiceOpen(false)}
                />
              </div>
              <span className="text-muted-foreground text-sm sm:text-base">para</span>
              <div onClick={(e) => e.stopPropagation()}>
                <Dropdown
                  options={industryOptions}
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                  isOpen={industryOpen}
                  onToggle={() => {
                    setIndustryOpen(!industryOpen);
                    setServiceOpen(false);
                  }}
                  onClose={() => setIndustryOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
