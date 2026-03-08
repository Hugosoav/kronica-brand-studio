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
  brandStory?: {
    history: string;
    voiceTone: string;
    values?: string[];
  };
}


import carolineCover from "@/assets/projects/caroline-rossi/caroline-rossi-cover.jpg";
import caroline01 from "@/assets/projects/caroline-rossi/caroline-rossi-01.jpg";
import caroline02 from "@/assets/projects/caroline-rossi/caroline-rossi-02.jpg";
import caroline03 from "@/assets/projects/caroline-rossi/caroline-rossi-03.jpg";
import caroline04 from "@/assets/projects/caroline-rossi/caroline-rossi-04.jpg";
import caroline05 from "@/assets/projects/caroline-rossi/caroline-rossi-05.jpg";
import caroline06 from "@/assets/projects/caroline-rossi/caroline-rossi-06.jpg";
import caroline07 from "@/assets/projects/caroline-rossi/caroline-rossi-07.jpg";
import caroline08 from "@/assets/projects/caroline-rossi/caroline-rossi-08.jpg";

import pousadaCover from "@/assets/projects/pousada-da-mata/pousada-da-mata-cover.jpg";
import pousada01 from "@/assets/projects/pousada-da-mata/pousada-da-mata-01.jpg";
import pousada02 from "@/assets/projects/pousada-da-mata/pousada-da-mata-02.jpg";
import pousada03 from "@/assets/projects/pousada-da-mata/pousada-da-mata-03.jpg";
import pousada04 from "@/assets/projects/pousada-da-mata/pousada-da-mata-04.jpg";
import pousada05 from "@/assets/projects/pousada-da-mata/pousada-da-mata-05.jpg";
import pousada06 from "@/assets/projects/pousada-da-mata/pousada-da-mata-06.jpg";
import pousada07 from "@/assets/projects/pousada-da-mata/pousada-da-mata-07.jpg";
import pousada08 from "@/assets/projects/pousada-da-mata/pousada-da-mata-08.jpg";
import pousada09 from "@/assets/projects/pousada-da-mata/pousada-da-mata-09.jpg";


export const projects: Project[] = [
  {
    id: "pousada-da-mata",
    title: "Pousada Da Mata",
    category: "Rebranding",
    description: "Rebranding completo para pousada ecológica em Iriri, conectando natureza, conforto e identidade regional.",
    fullDescription: "Desenvolvemos o rebranding da Pousada Da Mata, uma pousada ecológica localizada em Iriri/ES. O projeto revitalizou a identidade visual da marca, traduzindo a essência do refúgio na natureza em uma linguagem visual contemporânea e acolhedora.",
    concept: "O conceito celebra a fauna e flora local, com o mico-leão como protagonista, símbolo de conexão com a mata. O arco solar e as folhas reforçam a ideia de amanhecer, renovação e vida. A paleta em tons terrosos (marrom, dourado e verde) transmite calor, acolhimento e pertencimento à natureza. A tipografia arredondada e acessível reflete a hospitalidade da pousada.",
    year: "2026",
    client: "Pousada Da Mata",
    services: ["Rebranding", "Design de Logo", "Identidade Visual", "Social Media", "Papelaria", "Aplicações"],
    images: {
      cover: pousada01,
      gallery: [pousada09, pousada02, pousadaCover, pousada04, pousada05, pousada06, pousada07, pousada08, pousada03]
    },
    tags: ["Hotelaria", "Natureza", "Rebranding", "Ecológico"],
    brandStory: {
      history: "Fundada em 1988, a Pousada Da Mata nasceu como um pequeno refúgio em meio à natureza de Iriri. Em 2002, sob nova gestão, a pousada passou por uma profunda reestruturação — um processo guiado pelo respeito ao ambiente, pelo crescimento orgânico da flora e pela preservação dos animais que habitam a região. Cada decisão foi tomada para que a natureza continuasse sendo protagonista. Agora, em 2025, a Pousada Da Mata se expande para um novo capítulo: além da hospedagem que já é referência em acolhimento e reconexão, o espaço cresce para receber eventos, celebrações e encontros — sempre mantendo a essência que a tornou especial: o equilíbrio entre conforto, simplicidade e a presença viva da mata.",
      voiceTone: "O tom de voz é acolhedor, sensorial e sereno. A comunicação evoca sensações: o som das folhas, o cheiro da mata, o calor do sol. O discurso é convidativo e intimista, como um convite sussurrado para desacelerar e se reconectar.",
      values: ["Reconexão", "Natureza", "Acolhimento", "Simplicidade", "Descanso"]
    }
  },
  {
    id: "caroline-rossi",
    title: "Caroline Rossi",
    category: "Identidade Visual",
    description: "Identidade visual sofisticada e atemporal para escritório de advocacia e assessoria jurídica.",
    fullDescription: "Desenvolvemos uma identidade visual elegante e marcante para Caroline Rossi, advogada especializada em assessoria jurídica. O projeto resultou em uma marca que transmite confiança, sofisticação e profissionalismo no universo jurídico.",
    concept: "O conceito central foi criar uma marca que equilibra tradição e contemporaneidade. O monograma CR combina as iniciais de forma orgânica e distintiva, enquanto a paleta em tons de verde petróleo e bege transmite seriedade e elegância. A tipografia serifada reforça a autoridade e o refinamento da marca.",
    year: "2026",
    client: "Caroline Rossi",
    services: ["Identidade Visual", "Design de Logo", "Papelaria", "Aplicações"],
    images: {
      cover: caroline02,
      gallery: [caroline01, caroline02, caroline03, caroline04, caroline05, caroline06, caroline07, caroline08]
    },
    tags: ["Advocacia", "Jurídico", "Identidade Visual"],
    brandStory: {
      history: "Caroline Rossi construiu sua trajetória no universo jurídico com foco em assessoria personalizada e atendimento humanizado. Após anos atuando em grandes escritórios, decidiu fundar seu próprio espaço, um ambiente onde o Direito encontra a empatia. A marca nasce da necessidade de traduzir essa abordagem única em uma identidade visual que inspire confiança e acolhimento.",
      voiceTone: "O tom de voz da marca é elegante, acessível e empático. A comunicação evita jargões jurídicos excessivos, priorizando clareza e proximidade. O discurso é sempre em terceira pessoa, transmitindo profissionalismo sem frieza, como uma conversa entre aliados.",
      values: ["Confiança", "Sofisticação", "Empatia", "Transparência", "Excelência"]
    }
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
