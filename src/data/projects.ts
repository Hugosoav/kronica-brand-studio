export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  concept: string;
  year: string;
  client?: string;
  services: string[];
  images: {
    cover: string;
    gallery: string[];
  };
  tags: string[];
}

import polis01 from "@/assets/projects/polis/polis-01.jpg";
import polis02 from "@/assets/projects/polis/polis-02.jpg";
import polis03 from "@/assets/projects/polis/polis-03.jpg";
import polis04 from "@/assets/projects/polis/polis-04.jpg";
import polis05 from "@/assets/projects/polis/polis-05.jpg";
import polis06 from "@/assets/projects/polis/polis-06.jpg";
import polis07 from "@/assets/projects/polis/polis-07.jpg";
import polis08 from "@/assets/projects/polis/polis-08.jpg";
import polisCover from "@/assets/projects/polis/polis-cover.jpg";

export const projects: Project[] = [
  {
    id: "polis-engenharia",
    title: "Pólis Engenharia",
    category: "Identidade Visual",
    description: "Logo simétrico e forte que representa solidez e estrutura para empresa de construção.",
    fullDescription: "Desenvolvemos uma identidade visual robusta e marcante para a Pólis Engenharia, uma empresa do setor de construção civil. O projeto resultou em uma marca que transmite confiança, estabilidade e profissionalismo.",
    concept: "O conceito central foi criar um logo simétrico e forte, representando solidez e estrutura. As formas geométricas precisas refletem a engenharia e a construção, enquanto o elemento triangular adiciona dinamismo e remete ao ícone de uma casa ou telhado. A paleta em tons de azul escuro e laranja transmite profissionalismo e energia.",
    year: "2024",
    client: "Pólis Engenharia",
    services: ["Identidade Visual", "Design de Logo", "Aplicações"],
    images: {
      cover: polisCover,
      gallery: [polis01, polis02, polis03, polis04, polis05, polis06, polis07, polis08]
    },
    tags: ["Construção", "Engenharia", "Identidade Visual"]
  },
  {
    id: "cafe-origem",
    title: "Café Origem",
    category: "Branding Completo",
    description: "Identidade completa para cafeteria artesanal com foco em origens únicas.",
    fullDescription: "Desenvolvemos uma identidade visual que reflete a jornada do grão até a xícara. O projeto incluiu logo, paleta de cores terrosas, tipografia artesanal e sistema de embalagens.",
    concept: "A essência do Café Origem está na valorização da procedência. Cada grão conta uma história, e nossa missão foi traduzir essa narrativa em uma identidade visual autêntica e memorável. Trabalhamos com texturas orgânicas e uma paleta que evoca a terra, o calor e a tradição do café.",
    year: "2024",
    client: "Café Origem",
    services: ["Branding", "Identidade Visual", "Design de Embalagens", "Papelaria"],
    images: {
      cover: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop"
      ]
    },
    tags: ["Branding", "Identidade Visual", "Embalagens"]
  },
  {
    id: "studio-arte",
    title: "Studio Arte",
    category: "Identidade Visual",
    description: "Rebranding para estúdio de design com proposta minimalista e contemporânea.",
    fullDescription: "O Studio Arte precisava de uma identidade que comunicasse sofisticação e criatividade. Criamos um sistema visual flexível que se adapta a diferentes aplicações.",
    concept: "Minimalismo e versatilidade foram os pilares deste projeto. A identidade foi construída sobre formas geométricas puras que podem ser combinadas de infinitas maneiras, refletindo a natureza criativa e adaptável do estúdio.",
    year: "2024",
    client: "Studio Arte",
    services: ["Rebranding", "Design de Logo", "Sistema Visual", "Guidelines"],
    images: {
      cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
      ]
    },
    tags: ["Rebranding", "Design", "Minimalismo"]
  },
  {
    id: "minimal-store",
    title: "Minimal Store",
    category: "Rebranding",
    description: "E-commerce de moda sustentável com estética clean e atemporal.",
    fullDescription: "A Minimal Store é uma marca de moda sustentável que valoriza a simplicidade. O projeto envolveu desde o naming até a presença digital completa.",
    concept: "Sustentabilidade e atemporalidade guiaram cada decisão de design. A paleta neutra e as formas limpas refletem a filosofia da marca: menos é mais. Cada elemento foi pensado para transmitir consciência e elegância.",
    year: "2023",
    client: "Minimal Store",
    services: ["Branding", "E-commerce Design", "Fotografia de Produto", "Social Media"],
    images: {
      cover: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ]
    },
    tags: ["E-commerce", "Moda", "Sustentabilidade"]
  },
  {
    id: "nova-arquitetura",
    title: "Nova Arquitetura",
    category: "Branding Completo",
    description: "Escritório de arquitetura com foco em projetos residenciais de alto padrão.",
    fullDescription: "Uma identidade que traduz precisão e sofisticação. O sistema visual utiliza linhas geométricas e uma paleta neutra que reflete a estética dos projetos do escritório.",
    concept: "Arquitetura é a arte de criar espaços que inspiram. Nossa abordagem foi construir uma identidade tão precisa quanto os projetos do escritório, usando proporções áureas e uma estética que remete ao modernismo brasileiro.",
    year: "2023",
    client: "Nova Arquitetura",
    services: ["Branding", "Identidade Visual", "Sinalização", "Material Institucional"],
    images: {
      cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop"
      ]
    },
    tags: ["Arquitetura", "Premium", "Identidade Visual"]
  },
  {
    id: "jardim-botanico",
    title: "Jardim Botânico",
    category: "Identidade Visual",
    description: "Identidade para espaço verde urbano focado em educação ambiental.",
    fullDescription: "Projeto que une natureza e design. A identidade traz elementos orgânicos e uma paleta verde vibrante que conecta visitantes ao propósito educativo do espaço.",
    concept: "A natureza foi nossa principal fonte de inspiração. Desenvolvemos uma linguagem visual que celebra a biodiversidade, usando padrões baseados em folhagens e uma tipografia que remete ao movimento orgânico das plantas.",
    year: "2023",
    client: "Jardim Botânico Municipal",
    services: ["Identidade Visual", "Sinalização", "Material Educativo", "Merchandising"],
    images: {
      cover: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=600&fit=crop"
      ]
    },
    tags: ["Natureza", "Educação", "Branding"]
  },
  {
    id: "tech-solutions",
    title: "Tech Solutions",
    category: "Presença Digital",
    description: "Startup de tecnologia com presença digital moderna e inovadora.",
    fullDescription: "Uma marca tech que comunica inovação sem perder a humanidade. O projeto incluiu branding completo e diretrizes para presença digital em múltiplas plataformas.",
    concept: "Tecnologia a serviço das pessoas. Fugimos dos clichês do setor tech e criamos uma identidade que transmite confiança e acessibilidade, provando que inovação pode ser humana e acolhedora.",
    year: "2024",
    client: "Tech Solutions",
    services: ["Branding", "UI/UX Design", "Website", "Apresentações"],
    images: {
      cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
      ]
    },
    tags: ["Tecnologia", "Digital", "Startup"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
