"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

export interface Translations {
  nav: {
    inicio: string;
    nosotros: string;
    servicios: string;
    contacto: string;
    cerrar: string;
    serviciosOfrecemos: string;
    metricas: string;
    valores: string;
    misionVision: string;
    integrantes: string;
    comoLoHacemos: string;
    certificaciones: string;
    acondicionamiento: string;
    consultoria: string;
    documentacion: string;
    formacion: string;
    embalajes: string;
    etiquetas: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  metrics: {
    anos: string;
    envios: string;
    clientes: string;
    capacitaciones: string;
  };
  valores: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    p1: string;
    pHighlight1: string;
    p2: string;
    pHighlight2: string;
    p3: string;
    pHighlight3: string;
    p4: string;
    cta: string;
  };
  services: {
    title: string;
    learnMore: string;
    modalSummaryTitle: string;
    modalHighlightsTitle: string;
    modalCtaTitle: string;
    modalCtaSubtitle: string;
    modalContactBtn: string;
    items: {
      id: number;
      title: string;
      badge: string;
      summary: string;
      highlights: string[];
    }[];
  };
  footer: {
    motto: string;
    linksTitle: string;
    contactTitle: string;
    addressTitle: string;
    address: string;
    copyright: string;
  };
  contactPage?: {
    title: string;
    subtitle: string;
  };
}

const translationsData: Record<Language, Translations> = {
  es: {
    nav: {
      inicio: "Inicio",
      nosotros: "Nosotros",
      servicios: "Servicios",
      contacto: "Contacto",
      cerrar: "Cerrar",
      serviciosOfrecemos: "Servicios que ofrecemos",
      metricas: "Métricas",
      valores: "Valores",
      misionVision: "Misión, Valor y Visión",
      integrantes: "Integrantes",
      comoLoHacemos: "¿Cómo lo hacemos?",
      certificaciones: "Certificaciones",
      acondicionamiento: "Acondicionamiento y Optimización",
      consultoria: "Consultoría y Asesoramiento",
      documentacion: "Documentación de Mercancías Peligrosas",
      formacion: "Formación desde el inicio",
      embalajes: "Embalajes 4G homologados",
      etiquetas: "Etiquetas y Marcas",
    },
    hero: {
      title: "SOLUCIONES INTEGRALES",
      subtitle: "EN MERCANCÍAS PELIGROSAS MULTIMODAL",
    },
    metrics: {
      anos: "Años",
      envios: "Envíos",
      clientes: "Clientes",
      capacitaciones: "Capacitaciones",
    },
    valores: {
      title: "Valores ITSMA",
      items: [
        {
          title: "Seguridad",
          description: "La seguridad es el principio que guía cada decisión, cada solución y cada relación que construimos.",
        },
        {
          title: "Integridad",
          description: "Actuamos con honestidad, transparencia y ética, haciendo siempre lo correcto, aun cuando nadie nos esté mirando.",
        },
        {
          title: "Cercanía",
          description: "Nos involucramos con nuestros clientes, conocemos su realidad y construimos relaciones basadas en confianza, respeto y acompañamiento.",
        },
        {
          title: "Adaptabilidad",
          description: "No creemos en soluciones estándar. Entendemos que cada empresa, cada operación y cada desafío son diferentes, y nos adaptamos para encontrar la respuesta adecuada.",
        },
        {
          title: "Excelencia",
          description: "Buscamos hacer las cosas bien, mejorar continuamente y superar las expectativas de nuestros clientes.",
        },
        {
          title: "Innovación",
          description: "Cuestionamos las formas tradicionales de hacer las cosas y buscamos nuevas maneras de generar valor, optimizar procesos y transformar desafíos en oportunidades.",
        },
        {
          title: "Compromiso",
          description: "Nos involucramos de verdad. Asumimos cada desafío de nuestros clientes como propio y trabajamos para que nuestras soluciones produzcan resultados concretos.",
        },
      ],
    },
    about: {
      title: "Nosotros",
      p1: "Somos una consultora joven, con ",
      pHighlight1: "experiencia y conocimiento",
      p2: " especializado en ",
      pHighlight2: "Mercancías Peligrosas.",
      p3: " Comprendemos la realidad de cada empresa, anticipamos sus desafíos y transformamos la complejidad en ",
      pHighlight3: "soluciones estratégicas,",
      p4: " seguras y a medida.",
      cta: "Conocé más de nosotros",
    },
    services: {
      title: "Servicios que ofrecemos",
      learnMore: "Saber más",
      modalSummaryTitle: "Resumen de Operación",
      modalHighlightsTitle: "Puntos Clave del Servicio:",
      modalCtaTitle: "¿Necesitás este servicio para tu empresa?",
      modalCtaSubtitle: "Analizamos tu operación y desarrollamos la solución en tu planta.",
      modalContactBtn: "Contactar",
      items: [
        {
          id: 1,
          title: "Acondicionamiento y Optimización de Carga",
          badge: "Operación en Planta",
          summary: "Preparamos tu carga de mercancías peligrosas para el transporte (aéreo, terrestre y marítimo) aplicando normativa estricta y principios de Lean Manufacturing directamente en tus instalaciones.",
          highlights: [
            "Clasificación, embalaje y etiquetado normativo",
            "Lean Manufacturing: reducción de tiempos y desperdicios",
            "Solución prêt-à-porter en planta del cliente",
          ],
        },
        {
          id: 2,
          title: "Consultoría y Asesoramiento Integral",
          badge: "Asesoría Técnica",
          summary: "Analizamos tu operación, interpretamos la normativa y desarrollamos soluciones a medida para una gestión segura y eficiente de mercancías peligrosas.",
          highlights: [
            "Interpretación de normativa aérea, marítima y terrestre",
            "Clasificación técnica de mercancías peligrosas",
            "Análisis y mejora de procesos operativos",
            "Acompañamiento técnico especializado y continuo",
          ],
        },
        {
          id: 3,
          title: "Documentación de Mercancías Peligrosas",
          badge: "Gestión Documental",
          summary: "Desarrollamos, revisamos y auditamos la documentación técnica para embarques multimodales, asegurando la coherencia entre carga, etiquetado y formularios legales.",
          highlights: [
            "Aéreo: DGD, e-DGD y AWB",
            "Marítimo: Formulario IMDG, Certificado de Arrumazón y Manifiesto de Mercancías Peligrosas",
            "Terrestre: Fichas de Emergencia, Declaraciones, Remito y Carta de Porte",
          ],
        },
        {
          id: 4,
          title: "Transporte Aéreo",
          badge: "Modo de Transporte",
          summary: "Marcado y etiquetado experto bajo reglamentación IATA/OACI. Verificación estricta de embalajes de uso aéreo, cantidades permitidas y etiquetado específico.",
          highlights: [
            "Cumplimiento normativo IATA / OACI",
            "Minimizar el rechazo de la carga",
            "Asesoramiento de envío",
          ],
        },
        {
          id: 5,
          title: "Transporte Marítimo",
          badge: "Modo de Transporte",
          summary: "Gestión especializada bajo el código IMDG para envíos de ultramar. Asesoramiento en bultos, pallets, contenedores y verificación de compatibilidad de sustancias.",
          highlights: [
            "Código IMDG y requisitos de ultramar",
            "Certificados de arrumazón e insumos",
            "Seguridad en contenedores y unidades",
          ],
        },
        {
          id: 6,
          title: "Transporte Terrestre",
          badge: "Modo de Transporte",
          summary: "Incorpora al ordenamiento argentino el régimen MERCOSUR para transporte terrestre de mercancías peligrosas y establece requisitos sobre documentación, marcado, etiquetado, rótulos y paneles. Basado en la Resolución SOyTN N.° 64/2022.",
          highlights: [
            "Documentación: remito y carta de porte",
            "Manifiesto de carga",
            "Ficha de emergencia",
            "Asesoramiento en selección de rótulos de riesgo, paneles de seguridad, ubicación y colocación",
          ],
        },
        {
          id: 7,
          title: "Etiquetas y Marcas",
          badge: "Insumos & Identificación",
          summary: "Proporcionamos etiquetas de peligro por clase, división y manipulación, junto con asesoramiento técnico para su correcta colocación y cumplimiento normativo.",
          highlights: [
            "Etiquetas de peligro y manipulación homologadas",
            "Marcas de orientación para bultos y pallets",
            "Asesoramiento para la selección adecuada",
          ],
        },
        {
          id: 8,
          title: "Formación desde el Inicio",
          badge: "Capacitación CBTA",
          summary: "Desarrollamos manuales y programas de capacitación por competencias (CBTA) para escuelas e instituciones aeronáuticas, adaptados a cada perfil profesional.",
          highlights: [
            "Manuales para Pilotos, TCP, Rampa y Despachantes",
            "Enfoque en competencias reales y gestión de riesgos",
            "Situaciones prácticas y toma de decisiones",
          ],
        },
        {
          id: 9,
          title: "Embalajes 4G homologados",
          badge: "Embalajes Homologados",
          summary: "Ofrecemos cajas de cartón 4G homologadas para el transporte aéreo, marítimo y carretero de mercancías peligrosas (Grupos I, II y III, Tipo V), acompañadas del asesoramiento técnico para elegir la opción adecuada.",
          highlights: [
            "Cajas X30 (aéreo, marítimo y carretero - 35,8×35,8×37,3 cm)",
            "Cajas X7 (aéreo y carretero - 19×16×28 cm)",
            "Homologación Grupos I, II y III con forro interno y precinto",
          ],
        },
      ],
    },
    footer: {
      motto: "Detrás de cada operación hay una empresa que confía en nosotros. Por eso, hacemos de cada desafío una solución.",
      linksTitle: "Enlaces",
      contactTitle: "Contacto",
      addressTitle: "Dirección",
      address: "Av. Córdoba 873 5° A (entre Suipacha y Esmeralda), CABA",
      copyright: "© 2025 ITSMA Soluciones Integrales. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      nosotros: "About Us",
      servicios: "Services",
      contacto: "Contact",
      cerrar: "Close",
      serviciosOfrecemos: "Services We Offer",
      metricas: "Metrics",
      valores: "Values",
      misionVision: "Mission, Values & Vision",
      integrantes: "Team Members",
      comoLoHacemos: "How We Do It",
      certificaciones: "Certifications",
      acondicionamiento: "Conditioning & Optimization",
      consultoria: "Consulting & Advisory",
      documentacion: "Dangerous Goods Documentation",
      formacion: "Training from Scratch",
      embalajes: "Approved 4G Packaging",
      etiquetas: "Labels & Markings",
    },
    hero: {
      title: "COMPREHENSIVE SOLUTIONS",
      subtitle: "IN MULTIMODAL DANGEROUS GOODS",
    },
    metrics: {
      anos: "Years",
      envios: "Shipments",
      clientes: "Clients",
      capacitaciones: "Trainings",
    },
    valores: {
      title: "ITSMA Values",
      items: [
        {
          title: "Safety",
          description: "Safety is the principle guiding every decision, every solution, and every relationship we build.",
        },
        {
          title: "Integrity",
          description: "We act with honesty, transparency, and ethics, always doing the right thing, even when no one is watching.",
        },
        {
          title: "Proximity",
          description: "We engage deeply with our clients, understand their reality, and build relationships founded on trust, respect, and close guidance.",
        },
        {
          title: "Adaptability",
          description: "We reject one-size-fits-all solutions. We recognize that every company, operation, and challenge is distinct, tailoring our approach accordingly.",
        },
        {
          title: "Excellence",
          description: "We pursue doing things right, continually improving, and exceeding our clients' expectations.",
        },
        {
          title: "Innovation",
          description: "We challenge traditional methods and discover new ways to deliver value, streamline operations, and turn challenges into opportunities.",
        },
        {
          title: "Commitment",
          description: "We are genuinely invested. We take ownership of our clients' challenges and work tirelessly so our solutions achieve tangible outcomes.",
        },
      ],
    },
    about: {
      title: "About Us",
      p1: "We are a dynamic consulting firm, backed by ",
      pHighlight1: "expertise and specialized knowledge",
      p2: " in ",
      pHighlight2: "Dangerous Goods.",
      p3: " We understand each company's reality, anticipate challenges, and transform complexity into ",
      pHighlight3: "strategic solutions,",
      p4: " safe and tailored to your needs.",
      cta: "Learn more about us",
    },
    services: {
      title: "Services We Offer",
      learnMore: "Learn More",
      modalSummaryTitle: "Operations Summary",
      modalHighlightsTitle: "Key Service Highlights:",
      modalCtaTitle: "Need this service for your company?",
      modalCtaSubtitle: "We assess your operation and deploy the custom solution directly at your plant.",
      modalContactBtn: "Contact Us",
      items: [
        {
          id: 1,
          title: "Cargo Conditioning and Optimization",
          badge: "On-Site Operations",
          summary: "We prepare your dangerous goods cargo for air, road, and maritime transport, adhering to strict international regulations and Lean Manufacturing principles directly at your facility.",
          highlights: [
            "Regulatory classification, packaging, and labeling",
            "Lean Manufacturing: waste and turnaround time reduction",
            "Ready-to-ship solution at the client's plant",
          ],
        },
        {
          id: 2,
          title: "Comprehensive Consulting & Advisory",
          badge: "Technical Advisory",
          summary: "We audit your operations, interpret complex regulations, and craft tailored solutions for safe and cost-effective dangerous goods management.",
          highlights: [
            "Air, ocean, and ground regulatory interpretation",
            "Technical classification of dangerous goods",
            "Operational process analysis and optimization",
            "Continuous specialized technical support",
          ],
        },
        {
          id: 3,
          title: "Dangerous Goods Documentation",
          badge: "Document Management",
          summary: "We prepare, review, and audit all technical documentation for multimodal shipments, ensuring complete consistency across cargo, labeling, and legal manifests.",
          highlights: [
            "Air: DGD, e-DGD, and AWB",
            "Maritime: IMDG Form, Packing Certificate, and Dangerous Goods Manifest",
            "Ground: Emergency Cards, Declarations, Consignment Notes, and Waybills",
          ],
        },
        {
          id: 4,
          title: "Air Transportation",
          badge: "Transport Mode",
          summary: "Expert marking and labeling compliant with IATA/ICAO regulations. Rigorous inspection of air packaging specifications, allowable quantities, and mandatory labeling.",
          highlights: [
            "Full IATA / ICAO regulatory compliance",
            "Mitigation of cargo rejection risks",
            "End-to-end shipment guidance",
          ],
        },
        {
          id: 5,
          title: "Maritime Transportation",
          badge: "Transport Mode",
          summary: "Specialized management under the IMDG code for ocean freight shipments. Advisory on packages, pallets, containers, and chemical compatibility verification.",
          highlights: [
            "IMDG Code and overseas shipping compliance",
            "Container packing certificates and supplies",
            "Enhanced security in freight units and containers",
          ],
        },
        {
          id: 6,
          title: "Ground Transportation",
          badge: "Transport Mode",
          summary: "Incorporates the MERCOSUR regime for overland dangerous goods transport under Argentine regulations, covering documentation, marking, labeling, placards, and panels. Based on Resolution SOyTN No. 64/2022.",
          highlights: [
            "Documentation: delivery receipt and consignment note",
            "Cargo manifest",
            "Emergency response sheet",
            "Advisory on hazard labels, safety panels, positioning, and application",
          ],
        },
        {
          id: 7,
          title: "Labels and Markings",
          badge: "Supplies & Identification",
          summary: "We supply certified hazard warning labels by class, division, and handling, together with technical guidance for proper placement and regulatory compliance.",
          highlights: [
            "Certified hazard and handling warning labels",
            "Orientation arrows for packages and pallets",
            "Expert advice on compliant label selection",
          ],
        },
        {
          id: 8,
          title: "Training from the Ground Up",
          badge: "CBTA Training",
          summary: "We author manuals and Competency-Based Training and Assessment (CBTA) programs for aviation schools and institutions, customized for each professional role.",
          highlights: [
            "Manuals for Pilots, Cabin Crew, Ramp, and Flight Dispatchers",
            "Focus on real-world competencies and risk management",
            "Hands-on case scenarios and decision making",
          ],
        },
        {
          id: 9,
          title: "Approved 4G Packaging",
          badge: "Certified Packaging",
          summary: "We supply UN-certified 4G corrugated boxes for air, maritime, and highway transport of hazardous substances (Groups I, II, and III, Type V), with complete technical support.",
          highlights: [
            "X30 Boxes (Air, Ocean, Road - 35.8×35.8×37.3 cm)",
            "X7 Boxes (Air and Road - 19×16×28 cm)",
            "Packing Group I, II, and III certification with inner liner and security seal",
          ],
        },
      ],
    },
    footer: {
      motto: "Behind every operation is a company that places its trust in us. That's why we turn every challenge into a reliable solution.",
      linksTitle: "Links",
      contactTitle: "Contact Us",
      addressTitle: "Address",
      address: "Av. Córdoba 873 5° A (between Suipacha & Esmeralda), CABA, Argentina",
      copyright: "© 2025 ITSMA Integrated Solutions. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: translationsData.es,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("itsma_language") as Language | null;
      if (savedLang === "es" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage unavailable or restricted
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("itsma_language", lang);
    } catch {
      // localStorage unavailable
    }
  };

  const value = {
    language,
    setLanguage,
    t: translationsData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
