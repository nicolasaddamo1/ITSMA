import acond from "@/../assets/services photos/Acond y optm.webp"
import pelig from "@/../assets/services photos/Doc mercancias Peligr.webp"
import asesor from "@/../assets/services photos/consult y asesor.webp"
import embalajes from "@/../assets/services photos/embalajes.webp"
import etiq from "@/../assets/services photos/etiq y marc.webp"
import formacion from "@/../assets/services photos/formacion.webp"

export interface ServiceDetail {
    title: string;
    description: string;
    subtitle: string;
    subDescription: string;
    image: string;
    modalInfo: {
        intro?: string;
        sections: {
            title?: string;
            text?: string;
            items?: string[];
        }[];
        conclusion?: string;
    };
}

export const servicesDataES: ServiceDetail[] = [
    {
        title: "Acondicionamiento y Optimizacion de carga",
        description:
            "Preparamos tu carga para el transporte. Optimizamos el proceso para que funcione mejor. Acondicionar mercancías peligrosas no es simplemente embalar. Es comprender el producto, identificar sus riesgos, aplicar correctamente la normativa y asegurar que cada elemento de la carga esté preparado para el transporte correspondiente.",
        subtitle:
            "Nuestro trabajo no termina cuando la carga queda lista.",
        subDescription:
            "A través de herramientas y principios de Lean Manufacturing, analizamos cómo se desarrolla el proceso y detectamos oportunidades para ordenar, simplificar y optimizar la operación.",
        image: acond.src,
        modalInfo: {
            sections: [
                {
                    title: "Acondicionamiento de mercancías peligrosas",
                    text:
                        "En ITSMA nos involucramos en la operación de nuestros clientes, conocemos sus procesos, identificamos sus necesidades y desarrollamos soluciones adaptadas a cada realidad."
                },
                {
                    title: "Trabajamos en el acondicionamiento de mercancías peligrosas para transporte aéreo, terrestre y marítimo, considerando, entre otros aspectos:",
                    items: [
                        "Clasificación e identificación de la mercancía.",
                        "Selección y utilización adecuada de los embalajes.",
                        "Cantidades permitidas.",
                        "Compatibilidad entre sustancias.",
                        "Acondicionamiento interno de los productos.",
                        "Marcado y etiquetado.",
                        "Asesoramiento en la preparación de pallets, contenedores y unidades de transporte.",
                        "Cumplimiento de los requisitos aplicables según el modo de transporte."
                    ]
                },
                {
                    title: "Lean Manufacturing aplicado a la operación",
                    text:
                        "Nuestro trabajo no termina cuando la carga queda lista. A través de herramientas y principios de Lean Manufacturing, analizamos cómo se desarrolla el proceso y detectamos oportunidades para ordenar, simplificar y optimizar la operación."
                },
                {
                    title: "¿Qué buscamos mejorar?",
                    items: [
                        "Desperdicios.",
                        "Movimientos innecesarios.",
                        "Tiempos improductivos.",
                        "Errores.",
                        "Oportunidades de mejora."
                    ]
                },
                {
                    title: "Una solución adaptada a cada cliente",
                    text:
                        "El acondicionamiento puede realizarse directamente en las instalaciones del cliente, trabajando sobre su operación real y acompañando a su equipo en el proceso. Nuestro enfoque es prêt-à-porter: primero conocemos tu realidad, después analizamos tu necesidad y finalmente diseñamos la solución que mejor se adapta a tu operación."
                }
            ],
            conclusion:
                "El objetivo es lograr que la carga llegue al proceso de transporte correctamente acondicionada y preparada, minimizando rechazos, demoras, reprocesos y costos asociados a errores o incumplimientos. ¿Necesitás acondicionar una carga peligrosa? Contanos qué producto transportás, cómo está acondicionado actualmente y cuál es el modo de transporte. ITSMA analiza tu operación y desarrolla la solución que necesitás."
        }
    },
    {
        title: "Consultoría y Asesoramiento Integral",
        description:
            "Entendemos tu operación. Analizamos tus desafíos. Diseñamos la solución que necesitás. Las mercancías peligrosas forman parte de operaciones que requieren conocimiento técnico, cumplimiento normativo y decisiones correctas en cada etapa.",
        subtitle:
            "En ITSMA no trabajamos con respuestas estándar.",
        subDescription:
            "Nos involucramos en la realidad de cada empresa, conocemos su operación, analizamos sus procesos y acompañamos a nuestros clientes en la búsqueda de soluciones concretas, adaptadas a sus necesidades.",
        image: asesor.src,
        modalInfo: {
            intro:
                "En ITSMA no trabajamos con respuestas estándar. Nos involucramos en la realidad de cada empresa, conocemos su operación, analizamos sus procesos y acompañamos a nuestros clientes en la búsqueda de soluciones concretas, adaptadas a sus necesidades.",
            sections: [
                {
                    title: "¿En qué podemos ayudarte?",
                    text:
                        "Nuestro objetivo es transformar la complejidad de las mercancías peligrosas en una gestión más ordenada, eficiente y preparada para responder a las exigencias de cada operación."
                },
                {
                    title: "Interpretación y aplicación de normativa",
                    text:
                        "Analizamos los requisitos aplicables a cada operación y ayudamos a nuestros clientes a comprender cómo llevarlos correctamente a la práctica, considerando el modo de transporte y las características de la mercancía. Trabajamos con la normativa y los estándares aplicables al transporte aéreo, terrestre y marítimo, acompañando al cliente desde la interpretación hasta la implementación."
                },
                {
                    title: "Clasificación de mercancías peligrosas",
                    text:
                        "La clasificación de una mercancía peligrosa no es una clasificación comercial ni aduanera. Implica identificar los peligros que presenta una sustancia o artículo para determinar cómo debe ser manipulado, acondicionado, documentado y transportado. En ITSMA analizamos la información disponible y acompañamos al cliente en la correcta identificación y clasificación de sus mercancías."
                },
                {
                    title: "Consultorías específicas",
                    text:
                        "Desarrollamos intervenciones puntuales o integrales de acuerdo con la necesidad de cada cliente. Podemos trabajar sobre una operación determinada, un proceso, un depósito, un embarque, una necesidad documental, un proyecto de mejora o una situación que requiera análisis técnico especializado."
                },
                {
                    title: "Acompañamiento permanente",
                    text:
                        "Para las empresas que necesitan una relación de largo plazo, ITSMA puede brindar un esquema de acompañamiento continuo, convirtiéndose en un socio técnico para la gestión de mercancías peligrosas. La modalidad y el alcance se adaptan a la realidad y al nivel de necesidad de cada organización."
                },
                {
                    title: "¿Qué obtiene tu empresa?",
                    items: [
                        "Claridad para decidir.",
                        "Conocimiento para actuar.",
                        "Soluciones aplicables a la operación.",
                        "Reducción de riesgos.",
                        "Prevención de errores.",
                        "Mejora de procesos.",
                        "Prevención de demoras.",
                        "Soluciones que aporten valor real al negocio."
                    ]
                }
            ],
            conclusion:
                "Comprendemos tu realidad. Transformamos tus desafíos en soluciones. ¿Tenés una dificultad con una operación de mercancías peligrosas? Contanos qué necesitás. Vamos a tu planta, conocemos tu operación y desarrollamos junto a vos la solución que tu empresa necesita."
        }
    },
    {
        title: "Documentación de Mercancías Peligrosas",
        description:
            "En ITSMA desarrollamos, revisamos y optimizamos la documentación de mercancías peligrosas para operaciones aéreas, marítimas y terrestres. Analizamos cada embarque, verificamos la coherencia de la información y trabajamos para que la documentación acompañe correctamente a la carga durante toda la operación.",
        subtitle:
            "Contamos con documentación especial para cada tipo de operación:",
        subDescription:
            "Aérea | Terrestre | Marítima. No nos limitamos a completar formularios; analizamos la carga y verificamos que clasificación, embalaje, marcas, etiquetas y documentación sean coherentes entre sí.",
        image: pelig.src,
        modalInfo: {
            intro:
                "La documentación no es un trámite. Es parte de una operación bien gestionada.",
            sections: [
                {
                    title: "Transporte aéreo",
                    items: [
                        "DGD – Declaración del Expedidor de Mercancías Peligrosas.",
                        "e-DGD – Declaración Electrónica del Expedidor.",
                        "Guía Aérea (AWB) y documentación asociada, cuando corresponda."
                    ]
                },
                {
                    title: "Transporte marítimo",
                    items: [
                        "Documento de Transporte de Mercancías Peligrosas.",
                        "Formulario Multimodal de Mercancías Peligrosas – IMDG.",
                        "Certificado de Arrumazón del Contenedor/Vehículo.",
                        "Manifiesto de Mercancías Peligrosas, cuando corresponda."
                    ]
                },
                {
                    title: "Transporte terrestre",
                    items: [
                        "Documento de Transporte de Mercancías Peligrosas.",
                        "Declaración del Expedidor.",
                        "Ficha de Emergencia y documentación complementaria aplicable."
                    ]
                },
                {
                    title: "Nuestro diferencial",
                    text:
                        "No nos limitamos a completar formularios. Conocemos tu operación, analizamos la carga y verificamos que clasificación, embalaje, marcas, etiquetas y documentación sean coherentes entre sí."
                },
                {
                    title: "Una solución adaptada a tu operación",
                    text:
                        "Desde una DGD puntual hasta la gestión documental integral de una operación multimodal, en ITSMA desarrollamos la solución que realmente necesitás."
                }
            ],
            conclusion:
                "Identificamos oportunidades de mejora antes de que se conviertan en rechazos, demoras, reprocesos o costos innecesarios. Documentamos mejor. Ordenamos mejor. Operamos mejor. ¿Tenés un embarque, una operación o un proceso documental que necesitás resolver? Contanos qué necesitás. Nosotros analizamos tu operación y desarrollamos la solución."
        }
    },
    {
        title: "Formación desde el inicio",
        description:
            "En ITSMA creemos que el conocimiento sobre mercancías peligrosas debe comenzar desde el inicio de la formación profesional. Por eso desarrollamos manuales y programas de capacitación basados en competencias (CBTA) para instituciones y escuelas de formación aeronáutica.",
        subtitle:
            "Diseñamos contenidos adaptados a cada perfil profesional:",
        subDescription:
            "Pilotos | TCP | Personal de rampa | Despachantes de aeronaves. No se trata solamente de aprender normativa. Buscamos desarrollar competencias reales para reconocer riesgos, tomar decisiones y actuar correctamente en situaciones concretas.",
        image: formacion.src,
        modalInfo: {
            intro:
                "En ITSMA creemos que el conocimiento sobre mercancías peligrosas debe comenzar desde el inicio de la formación profesional. Por eso desarrollamos manuales y programas de capacitación basados en competencias (CBTA) para instituciones y escuelas de formación aeronáutica.",
            sections: [
                {
                    title: "Diseñamos contenidos adaptados a cada perfil profesional",
                    items: [
                        "✈️ Pilotos",
                        "👩‍✈️ TCP",
                        "🛫 Personal de rampa",
                        "📋 Despachantes de aeronaves"
                    ]
                },
                {
                    title: "Formación basada en competencias",
                    text:
                        "No se trata solamente de aprender normativa. Buscamos desarrollar competencias reales para reconocer riesgos, tomar decisiones y actuar correctamente en situaciones concretas."
                },
                {
                    title: "Manuales diseñados para enseñar",
                    text:
                        "Contenido técnico + formación por competencias + situaciones prácticas."
                }
            ],
            conclusion:
                "Formamos profesionales que sepan qué hacer cuando realmente importa."
        }
    },
    {
        title: "Embalajes 4G homologados",
        description:
            "En ITSMA ofrecemos cajas de cartón 4G homologadas para el transporte de mercancías peligrosas, acompañadas del asesoramiento necesario para elegir la solución adecuada para cada operación.",
        subtitle:
            "No todas las cargas necesitan la misma solución.",
        subDescription:
            "Elegí el embalaje adecuado para tu operación. En ITSMA te ayudamos a identificar qué embalaje corresponde según tu mercancía y el tipo de transporte. Tenemos el embalaje. Tenemos el conocimiento. Te ayudamos a elegir.",
        image: embalajes.src,
        modalInfo: {
            intro:
                "Soluciones de embalaje para mercancías peligrosas. En ITSMA ofrecemos cajas de cartón 4G homologadas para el transporte de mercancías peligrosas, acompañadas del asesoramiento necesario para elegir la solución adecuada para cada operación.",
            sections: [
                {
                    title: "Caja X30",
                    text:
                        "Caja de cartón 4G homologada para transporte aéreo, marítimo y carretero.",
                    items: [
                        "Grupos de Embalaje I, II y III",
                        "Tipo V",
                        "Incluye forro interno",
                        "Incluye precinto",
                        "Presentación: por unidad",
                        "Dimensiones: 35,8 × 35,8 × 37,3 cm (alto)"
                    ]
                },
                {
                    title: "Caja X7",
                    text:
                        "Caja de cartón 4G homologada para transporte aéreo y carretero.",
                    items: [
                        "Grupos de Embalaje I, II y III",
                        "Tipo V",
                        "Incluye forro interno",
                        "Incluye precinto",
                        "Presentación: por unidad",
                        "Dimensiones: 19 × 16 × 28 cm (alto)"
                    ]
                },
                {
                    title: "Elegí el embalaje adecuado para tu operación",
                    text:
                        "No todas las cargas necesitan la misma solución. En ITSMA te ayudamos a identificar qué embalaje corresponde según tu mercancía y el tipo de transporte."
                }
            ],
            conclusion:
                "Tenemos el embalaje. Tenemos el conocimiento. Te ayudamos a elegir. Consultanos por disponibilidad."
        }
    },
    {
        title: "Etiquetas y Marcas",
        description:
            "En ITSMA ofrecemos etiquetas, marcas y elementos de identificación para mercancías peligrosas, adaptados a las características de cada carga y al modo de transporte. Te ayudamos a identificar qué corresponde utilizar, cómo debe aplicarse y qué requisitos debe cumplir la carga antes de ser transportada.",
        subtitle:
            "No se trata solamente de entregar una etiqueta.",
        subDescription:
            "Analizamos tu operación para ayudarte a seleccionar las etiquetas y marcas que corresponden, evitando errores que puedan generar rechazos, demoras o reprocesos. Identificamos correctamente. Marcamos correctamente. Transportamos mejor.",
        image: etiq.src,
        modalInfo: {
            intro:
                "La identificación correcta también es parte de la seguridad.",
            sections: [
                {
                    title: "¿Qué ofrecemos?",
                    items: [
                        "Etiquetas de peligro por clase y división.",
                        "Etiquetas de manipulación.",
                        "Marcas de identificación.",
                        "Marcas de orientación.",
                        "Identificación específica según el tipo de mercancía.",
                        "Elementos de marcado para bultos, pallets y unidades de transporte.",
                        "Asesoramiento para la correcta identificación de la carga."
                    ]
                },
                {
                    title: "Nuestro diferencial",
                    text:
                        "Vendemos el insumo, pero también aportamos el conocimiento. Analizamos tu operación para ayudarte a seleccionar las etiquetas y marcas que corresponden, evitando errores que puedan generar rechazos, demoras o reprocesos."
                }
            ],
            conclusion:
                "Identificamos correctamente. Marcamos correctamente. Transportamos mejor. ¿Necesitás etiquetas o marcas para tus mercancías peligrosas? Contanos qué transportás y cómo lo transportás. Te ayudamos a encontrar la solución que necesitás."
        }
    }
];

export const servicesDataEN: ServiceDetail[] = [
    {
        title: "Cargo Conditioning and Optimization",
        description:
            "We prepare your cargo for transport. We optimize the process for maximum efficiency. Conditioning dangerous goods is more than just packing. It requires understanding the product, identifying risks, strictly applying standards, and ensuring every shipment element is fully compliant.",
        subtitle:
            "Our work does not end when the cargo is ready.",
        subDescription:
            "Applying Lean Manufacturing tools and principles, we analyze operational workflow and identify opportunities to organize, streamline, and optimize your operations.",
        image: acond.src,
        modalInfo: {
            sections: [
                {
                    title: "Dangerous Goods Conditioning",
                    text:
                        "At ITSMA, we integrate into our clients' operations, understand their workflows, identify specific needs, and develop tailored solutions for every scenario."
                },
                {
                    title: "We handle dangerous goods conditioning for air, ground, and ocean transport, covering:",
                    items: [
                        "Goods classification and identification.",
                        "Selection and compliant use of packaging.",
                        "Allowable quantity limits.",
                        "Chemical compatibility verification.",
                        "Internal product cushioning and containment.",
                        "Marking and labeling.",
                        "Advisory on pallets, containers, and transport unit preparation.",
                        "Full compliance with mode-specific transport requirements."
                    ]
                },
                {
                    title: "Lean Manufacturing applied to operations",
                    text:
                        "Our mission continues beyond packing. Using Lean Manufacturing methodology, we examine end-to-end procedures to minimize waste, eliminate delays, and enhance operational safety."
                },
                {
                    title: "What do we improve?",
                    items: [
                        "Material waste.",
                        "Unnecessary handling.",
                        "Downtime and delays.",
                        "Compliance errors.",
                        "Continuous improvement opportunities."
                    ]
                },
                {
                    title: "A tailored on-site solution",
                    text:
                        "Conditioning can take place directly at client facilities, working alongside your operational teams. Our ready-to-ship approach means we first assess your facility, analyze requirements, and engineer the optimal operational response."
                }
            ],
            conclusion:
                "Our goal is ensuring your cargo enters the transport stream properly conditioned and compliant, eliminating rejections, delays, and unexpected costs. Need dangerous goods conditioning? Contact us with your cargo details and transport mode. ITSMA will design the solution you need."
        }
    },
    {
        title: "Comprehensive Consulting & Technical Advisory",
        description:
            "We understand your operation. We analyze your challenges. We engineer the exact solution you need. Dangerous goods logistics demands specialized technical acumen, rigorous compliance, and precise decisions at every phase.",
        subtitle:
            "At ITSMA, we reject one-size-fits-all answers.",
        subDescription:
            "We engage directly with each organization, evaluate workflows, and deliver concrete, tailored solutions aligned with your commercial objectives.",
        image: asesor.src,
        modalInfo: {
            intro:
                "At ITSMA, we reject standardized answers. We immerse ourselves in each client's unique operational reality, evaluate processes, and deliver custom, actionable solutions.",
            sections: [
                {
                    title: "How can we assist you?",
                    text:
                        "Our mission is to transform the complexity of dangerous goods regulations into streamlined, safe, and robust operational workflows."
                },
                {
                    title: "Regulatory Interpretation & Implementation",
                    text:
                        "We review mode-specific regulations and guide your team on practical application, taking into account substance properties and supply chain requirements across air, road, and ocean transport."
                },
                {
                    title: "Dangerous Goods Classification",
                    text:
                        "Classifying hazardous cargo goes far beyond customs codes. It identifies hazards to dictate handling, packaging, documentation, and carriage rules. ITSMA provides certified expertise to ensure accurate classification."
                },
                {
                    title: "Targeted Consultancies",
                    text:
                        "We execute tailored interventions addressing specific warehouses, facilities, shipments, process optimizations, or specialized technical audits."
                },
                {
                    title: "Ongoing Technical Partnership",
                    text:
                        "For enterprises needing sustained support, ITSMA acts as an outsourced technical advisory partner for dangerous goods management, structured to fit your organization's cadence."
                },
                {
                    title: "What does your company gain?",
                    items: [
                        "Clarity for critical decision-making.",
                        "In-depth technical competence.",
                        "Practical, field-tested solutions.",
                        "Risk mitigation and incident prevention.",
                        "Error elimination.",
                        "Workflow efficiency.",
                        "Prevention of shipment delays.",
                        "Tangible commercial value."
                    ]
                }
            ],
            conclusion:
                "We understand your reality and turn operational challenges into dependable solutions. Facing a dangerous goods issue? Tell us what you need. We'll visit your plant and engineer the right outcome."
        }
    },
    {
        title: "Dangerous Goods Documentation",
        description:
            "At ITSMA, we prepare, audit, and optimize dangerous goods documentation for air, maritime, and highway logistics. We ensure thorough consistency between physical cargo, labels, and legal declarations throughout the transit journey.",
        subtitle:
            "We provide certified documentation for all transport modes:",
        subDescription:
            "Air | Road | Ocean. We don't just fill out paperwork; we examine the shipment to ensure that classification, packaging, marks, and declarations are completely coherent.",
        image: pelig.src,
        modalInfo: {
            intro:
                "Documentation is not mere bureaucracy; it is the cornerstone of safe, compliant multimodal transport.",
            sections: [
                {
                    title: "Air Transport",
                    items: [
                        "DGD – Dangerous Goods Declaration.",
                        "e-DGD – Electronic Shipper's Declaration.",
                        "Air Waybill (AWB) and supporting technical paperwork."
                    ]
                },
                {
                    title: "Maritime Transport",
                    items: [
                        "Dangerous Goods Transport Document.",
                        "Multimodal Dangerous Goods Form – IMDG.",
                        "Container / Vehicle Packing Certificate.",
                        "Dangerous Goods Manifest where required."
                    ]
                },
                {
                    title: "Road Transport",
                    items: [
                        "Dangerous Goods Shipping Document.",
                        "Shipper's Declaration.",
                        "Emergency Response Sheets and applicable transport permits."
                    ]
                },
                {
                    title: "Our Differentiator",
                    text:
                        "We go beyond administrative forms. We analyze your cargo to guarantee that UN specifications, packaging types, and transport manifests align flawlessly."
                },
                {
                    title: "Scalable Solutions",
                    text:
                        "From a single urgent DGD to end-to-end documentation management for complex multimodal operations, ITSMA delivers absolute reliability."
                }
            ],
            conclusion:
                "We identify compliance gaps before they turn into costly rejections, fines, or port delays. Better documentation. Tighter control. Seamless operations. Have a shipment to dispatch? Let us handle your documentation."
        }
    },
    {
        title: "Training from Scratch (CBTA)",
        description:
            "At ITSMA, we believe hazardous materials education must start from foundational professional training. We design Competency-Based Training and Assessment (CBTA) programs and manuals for aviation academies and corporate flight departments.",
        subtitle:
            "Curriculum tailored to each operational role:",
        subDescription:
            "Pilots | Cabin Crew | Ramp Operators | Flight Dispatchers. We don't just teach dry regulations; we build practical competence to evaluate risk, make decisions, and act decisively under real-world conditions.",
        image: formacion.src,
        modalInfo: {
            intro:
                "Knowledge of dangerous goods should begin from foundational education. We develop CBTA curricula and manuals for aviation institutes and operational training centers.",
            sections: [
                {
                    title: "Customized Content by Role",
                    items: [
                        "✈️ Flight Crew / Pilots",
                        "👩‍✈️ Cabin Crew",
                        "🛫 Ground Handling / Ramp Staff",
                        "📋 Flight Dispatchers"
                    ]
                },
                {
                    title: "Competency-Based Methodology",
                    text:
                        "Beyond memorizing regulations, our training instills situational awareness, risk assessment protocols, and confident emergency response."
                },
                {
                    title: "Instructional Manuals",
                    text:
                        "Rigorous technical specifications + competency frameworks + realistic case studies."
                }
            ],
            conclusion:
                "We train aviation professionals who know exactly what to do when safety counts."
        }
    },
    {
        title: "UN-Certified 4G Packaging",
        description:
            "At ITSMA, we supply UN-certified 4G corrugated cardboard packaging for hazardous materials, backed by specialized technical consulting to select the right specification for your supply chain.",
        subtitle:
            "Every hazardous commodity demands specific packaging.",
        subDescription:
            "Select the certified packaging your shipment requires. At ITSMA, we help you verify compliant packaging based on substance properties and transport mode. We supply the packaging. We bring the expertise. We help you choose.",
        image: embalajes.src,
        modalInfo: {
            intro:
                "Certified dangerous goods packaging solutions. We provide tested 4G boxes for air, maritime, and highway transport, supported by expert guidance for compliance.",
            sections: [
                {
                    title: "X30 Box",
                    text:
                        "UN 4G box certified for air, sea, and highway carriage.",
                    items: [
                        "Packing Groups I, II, and III",
                        "Type V",
                        "Inner protective liner included",
                        "Security seal included",
                        "Presentation: Individual unit",
                        "Dimensions: 35.8 × 35.8 × 37.3 cm (height)"
                    ]
                },
                {
                    title: "X7 Box",
                    text:
                        "UN 4G box certified for air and road transport.",
                    items: [
                        "Packing Groups I, II, and III",
                        "Type V",
                        "Inner protective liner included",
                        "Security seal included",
                        "Presentation: Individual unit",
                        "Dimensions: 19 × 16 × 28 cm (height)"
                    ]
                },
                {
                    title: "Choose the exact packaging for your cargo",
                    text:
                        "Different hazardous substances demand specific packaging standards. ITSMA ensures your packaging matches UN specifications and carrier requirements."
                }
            ],
            conclusion:
                "We provide tested packaging and specialized technical advice. Inquire for availability and unit specifications."
        }
    },
    {
        title: "Labels and Markings",
        description:
            "At ITSMA, we provide compliant hazard labels, handling marks, and identification supplies for dangerous goods, tailored to product hazards and transport mode requirements.",
        subtitle:
            "Supplying labels is only the starting point.",
        subDescription:
            "We audit your shipment to guide correct label and placard selection, preventing transit rejections, customs delays, and compliance fines. Correct identification. Proper marking. Safer logistics.",
        image: etiq.src,
        modalInfo: {
            intro:
                "Proper identification is an essential safeguard in hazardous cargo logistics.",
            sections: [
                {
                    title: "What do we provide?",
                    items: [
                        "Hazard warning labels by Class and Division.",
                        "Handling and orientation labels.",
                        "UN number identification marks.",
                        "Package and overpack orientation arrows.",
                        "Special substance markings.",
                        "Placards and panels for transport units and containers.",
                        "Technical advisory for compliant placement and sizing."
                    ]
                },
                {
                    title: "Our Technical Edge",
                    text:
                        "We deliver supplies backed by regulatory expertise, ensuring labels withstand international transport conditions and pass carrier audits without hesitation."
                }
            ],
            conclusion:
                "Accurate identification. Certified marking. Secure transport. Need hazardous labels or placards? Let us know what you're shipping and how it travels."
        }
    }
];

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export const processStepsES: ProcessStep[] = [
    { step: 1, title: "Asesoramiento", description: "Conocemos tus necesidades y encontramos la solución de embalaje adecuada." },
    { step: 2, title: "Preparación", description: "Seleccionamos los materiales y preparamos cada pedido con cuidado." },
    { step: 3, title: "Control de calidad", description: "Verificamos que cada embalaje cumpla con nuestros estándares de seguridad y resistencia." },
    { step: 4, title: "Embalaje", description: "Protegemos cada producto para que esté listo para su traslado." },
    { step: 5, title: "Despacho", description: "Coordinamos el envío para que tu pedido salga en tiempo y forma." },
    { step: 6, title: "Entrega", description: "Tu producto llega protegido y listo para ser recibido." },
];

export const processStepsEN: ProcessStep[] = [
    { step: 1, title: "Consulting", description: "We understand your needs and find the right packaging solution." },
    { step: 2, title: "Preparation", description: "We select the materials and prepare each order with care." },
    { step: 3, title: "Quality Control", description: "We verify that every package meets our safety and resistance standards." },
    { step: 4, title: "Packaging", description: "We protect each product so it is ready for transit." },
    { step: 5, title: "Dispatch", description: "We coordinate shipping so your order arrives on time and in proper condition." },
    { step: 6, title: "Delivery", description: "Your product arrives protected and ready to be received." },
];
