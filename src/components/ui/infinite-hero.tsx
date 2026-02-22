"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import ShaderHeroBackground from "./shader-hero-background";

const serviceOptions = [
{ label: "Tudo", value: "" },
{ label: "Identidade Visual", value: "Identidade Visual" },
{ label: "Branding", value: "Branding" },
{ label: "Rebranding", value: "Rebranding" },
{ label: "Social Media", value: "Social Media" },
{ label: "Impressos", value: "Impressos" }];


const industryOptions = [
{ label: "Todos", value: "" },
{ label: "Artes e Cultura", value: "Artes e Cultura" },
{ label: "Cívico e Setor Público", value: "Cívico e Setor Público" },
{ label: "Marcas de Consumo", value: "Marcas de Consumo" },
{ label: "Educação", value: "Educação" },
{ label: "Entretenimento", value: "Entretenimento" },
{ label: "Moda e Beleza", value: "Moda e Beleza" },
{ label: "Alimentos e Bebidas", value: "Alimentos e Bebidas" },
{ label: "Saúde", value: "Saúde" },
{ label: "Hotelaria e Viagens", value: "Hotelaria e Viagens" },
{ label: "Manufatura e Indústria", value: "Manufatura e Indústria" },
{ label: "Serviços Profissionais", value: "Serviços Profissionais" },
{ label: "Publicação e Editoração", value: "Publicação e Editoração" },
{ label: "Mercado Imobiliário", value: "Mercado Imobiliário" },
{ label: "Tecnologia", value: "Tecnologia" }];



interface InfiniteHeroProps {
  title?: string;
  subtitle?: string;
}

interface DropdownProps {
  options: {label: string;value: string;}[];
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ options, value, onChange, isOpen, onToggle, onClose }: DropdownProps) {
  const selectedLabel = options.find((o) => o.value === value)?.label || options[0].label;

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-1 font-medium text-foreground hover:opacity-70 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">

        {selectedLabel}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen &&
      <>
          <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={onClose}
          style={{ animation: 'fadeIn 0.2s ease-out' }} />

          <div
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl bg-background border border-border rounded-2xl shadow-2xl p-6"
          style={{
            animation: 'popupIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }}>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">Selecione uma opção</h3>
              <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90 active:scale-95">

                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {options.map((option, index) =>
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                onClose();
              }}
              className={`text-left px-4 py-3 text-sm rounded-lg border transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.97] ${
              value === option.value ?
              'bg-foreground text-background border-foreground font-medium shadow-lg' :
              'border-border hover:border-foreground/50 hover:bg-muted'}`
              }
              style={{
                animation: `slideUp 0.3s ease-out ${index * 0.03}s both`
              }}>

                  {option.label}
                </button>
            )}
            </div>
          </div>
        </>
      }
    </div>);

}

export default function InfiniteHero({
  title = "Marcas que contam histórias",
  subtitle = "Kronica Studio"
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
        scale: 0.95
      });
      gsap.set(pRef.current, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)"
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
          ease: "power4.out"
        },
        0.3
      ).
      to(
        pRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6
        },
        "-=0.5"
      ).
      to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

      // Continuous shimmer animation on title
      gsap.to(h1Ref.current, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1,
        delay: 1.5
      });
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden">

      {/* Video background */}
      <ShaderHeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1
            ref={h1Ref}
            className="tracking-tight sm:text-5xl lg:text-8xl py-2 text-6xl font-thin md:text-5xl text-slate-600"
            style={{
              backgroundImage: isDark ?
              "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #888888 50%, #ffffff 65%, #ffffff 100%)" :
              "linear-gradient(90deg, #111111 0%, #111111 35%, #999999 50%, #111111 65%, #111111 100%)",
              backgroundSize: "200% auto",
              backgroundPosition: "0% center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.15
            }}>

            {title}
          </h1>

          <p
            ref={pRef}
            className={`max-w-2xl text-base sm:text-lg md:text-xl px-2 ${isDark ? "text-white/70" : "text-black/60"}`}>

            {subtitle}
          </p>

          <div ref={ctaRef} className="mt-2 sm:mt-4 flex flex-col items-center gap-6 w-full max-w-3xl">
            {/* Search Bar with Dropdowns */}
            <div
              onClick={handleNavigate}
              className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md rounded-full cursor-pointer transition-colors flex-wrap justify-center ${
              isDark ?
              "bg-white/10 hover:bg-white/20 border border-white/10" :
              "bg-black/10 hover:bg-black/15 border border-black/10"}`
              }>

              <span className={`text-sm sm:text-base ${isDark ? "text-white/60" : "text-black/50"}`}>Criamos</span>
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
                  onClose={() => setServiceOpen(false)} />

              </div>
              <span className={`text-sm sm:text-base ${isDark ? "text-white/60" : "text-black/50"}`}>para</span>
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
                  onClose={() => setIndustryOpen(false)} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}