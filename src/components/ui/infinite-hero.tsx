"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
}

function ShaderBackground({
  vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
    gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform sampler2D iChannel0;

    #define STEP 256
    #define EPS .001

    float smin( float a, float b, float k )
    {
        float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
        return mix( b, a, h ) - k*h*(1.0-h);
    }

    const mat2 m = mat2(.8,.6,-.6,.8);

    float noise( in vec2 x )
    {
      return sin(1.5*x.x)*sin(1.5*x.y);
    }

    float fbm6( vec2 p )
    {
        float f = 0.0;
        f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
        f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
        f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
        f += 0.015625*(0.5+0.5*noise( p ));
        return f/0.96875;
    }


    mat2 getRot(float a)
    {
        float sa = sin(a), ca = cos(a);
        return mat2(ca,-sa,sa,ca);
    }


    vec3 _position;

    float sphere(vec3 center, float radius)
    {
        return distance(_position,center) - radius;
    }

    float swingPlane(float height)
    {
        vec3 pos = _position + vec3(0.,0.,u_time * 5.5);
        float def =  fbm6(pos.xz * .25) * 0.5;
        
        float way = pow(abs(pos.x) * 34. ,2.5) *.0000125;
        def *= way;
        
        float ch = height + def;
        return max(pos.y - ch,0.);
    }

    float map(vec3 pos)
    {
        _position = pos;
        
        float dist;
        dist = swingPlane(0.);
        
        float sminFactor = 5.25;
        dist = smin(dist,sphere(vec3(0.,-15.,80.),60.),sminFactor);
        return dist;
    }


    vec3 getNormal(vec3 pos)
    {
        vec3 nor = vec3(0.);
        vec3 vv = vec3(0.,1.,-1.)*.01;
        nor.x = map(pos + vv.zxx) - map(pos + vv.yxx);
        nor.y = map(pos + vv.xzx) - map(pos + vv.xyx);
        nor.z = map(pos + vv.xxz) - map(pos + vv.xxy);
        nor /= 2.;
        return normalize(nor);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = (fragCoord.xy-.5*u_resolution.xy)/u_resolution.y;
        
        vec3 rayOrigin = vec3(uv + vec2(0.,6.), -1. );
        
        vec3 rayDir = normalize(vec3(uv , 1.));
        
        rayDir.zy = getRot(.15) * rayDir.zy;
        
        vec3 position = rayOrigin;
        
        
        float curDist;
        int nbStep = 0;
        
        for(; nbStep < STEP;++nbStep)
        {
            curDist = map(position + (texture(iChannel0, position.xz) - .5).xyz * .005);
            
            if(curDist < EPS)
                break;
            position += rayDir * curDist * .5;
        }
        
        float f;
                
        float dist = distance(rayOrigin,position);
        f = dist /(98.);
        f = float(nbStep) / float(STEP);
        
        f *= .9;
        vec3 col = vec3(f);
                
        fragColor = vec4(col,1.0);
    }
    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
  uniforms = {},
  className = "w-full h-full",
}: ShaderBackgroundProps) {
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...uniforms,
    }),
    [uniforms],
  );

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
        />
      </Canvas>
    </div>
  );
}

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
        className="inline-flex items-center gap-1 font-medium text-foreground hover:opacity-70 transition-opacity"
      >
        {selectedLabel}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md" onClick={onClose} />
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl bg-background border border-border rounded-2xl shadow-2xl p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">Selecione uma opção</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    onClose();
                  }}
                  className={`text-left px-4 py-3 text-sm rounded-lg border transition-all hover:border-foreground/50 hover:bg-muted ${
                    value === option.value 
                      ? 'bg-foreground text-background border-foreground font-medium' 
                      : 'border-border'
                  }`}
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
  title = "Design com narrativa",
  subtitle = "Kronica Studio",
}: InfiniteHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  const handleNavigate = () => {
    const params = new URLSearchParams();
    if (selectedService) params.set("service", selectedService);
    if (selectedIndustry) params.set("industry", selectedIndustry);
    const query = params.toString();
    navigate(`/projetos${query ? `?${query}` : ""}`);
  };


  useGSAP(
    () => {
      gsap.set(bgRef.current, { filter: "blur(28px)" });
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
      tl.to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0)
        .to(
          h1Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
          0.4,
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
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <ShaderBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1
            ref={h1Ref}
            className="text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-7xl"
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
