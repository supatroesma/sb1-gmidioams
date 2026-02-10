export type Language = 'es' | 'en' | 'zh';

export interface Translations {
  header: {
    about: string;
    practices: string;
    whyUs: string;
    process: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credentials: {
      experience: string;
      maritimeLaw: string;
      international: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
  };
  practices: {
    title: string;
    subtitle: string;
    areas: {
      maritime: {
        title: string;
        description: string;
      };
      corporate: {
        title: string;
        description: string;
      };
      international: {
        title: string;
        description: string;
      };
      compliance: {
        title: string;
        description: string;
      };
      disputes: {
        title: string;
        description: string;
      };
    };
  };
  whyUs: {
    title: string;
    subtitle: string;
    reasons: {
      strategic: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
      personalized: {
        title: string;
        description: string;
      };
      international: {
        title: string;
        description: string;
      };
      rigor: {
        title: string;
        description: string;
      };
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      analysis: {
        title: string;
        description: string;
      };
      strategy: {
        title: string;
        description: string;
      };
      execution: {
        title: string;
        description: string;
      };
      followup: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      matter: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      address: string;
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
    };
    privacy: string;
  };
  footer: {
    description: string;
    practicesTitle: string;
    contactTitle: string;
    rights: string;
    legal: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      about: 'Quiénes Somos',
      practices: 'Áreas de Práctica',
      whyUs: 'PorQué Elegirnos',
      process: 'Proceso',
      contact: 'Contacto',
    },
    hero: {
      title: 'Asesoría Legal Estratégica en Derecho Marítimo y Corporativo',
      subtitle: 'Consultoría legal especializada para empresas y armadores en jurisdicción panameña. Experiencia comprobada en operaciones marítimas internacionales y cumplimiento regulatorio.',
      ctaPrimary: 'Solicitar Consulta',
      ctaSecondary: 'Contactar al Equipo Legal',
      credentials: {
        experience: 'Más de 15 años en derecho marítimo',
        maritimeLaw: 'Especializados en Registro de Buques',
        international: 'Asistencia Legal Multinacional',
      },
    },
    about: {
      title: 'Quiénes Somos',
      subtitle: 'Firma legal especializada en derecho marítimo y corporativo internacional',
      description: [
        'Global Maritime Consultants Group Panama es una firma de abogados con enfoque legal-consultivo establecida en la República de Panamá, con sólida trayectoria en la prestación de servicios jurídicos especializados a empresas locales e internacionales.',
        'Nuestro grupo está conformado por profesionales con experiencia comprobada en derecho marítimo, corporativo, comercial y regulatorio. Trabajamos con armadores, operadores logísticos, inversionistas extranjeros y corporaciones que requieren asesoría legal estratégica en jurisdicción panameña.',
        'Nuestro enfoque combina rigor técnico, visión comercial y conocimiento profundo del marco legal marítimo de Panamá. Ofrecemos soluciones jurídicas estructuradas, predecibles y alineadas con los objetivos estratégicos de nuestros clientes.',
      ],
    },
    practices: {
      title: 'Áreas de Práctica',
      subtitle: 'Servicios legales especializados para operaciones corporativas y marítimas',
      areas: {
        maritime: {
          title: 'Derecho Marítimo y Portuario',
          description: 'Registro y abanderamiento de buques, hipotecas navales, contratos de fletamento, compraventa de naves, y cumplimiento de normativa marítima internacional.',
        },
        corporate: {
          title: 'Derecho Corporativo y Comercial',
          description: 'Constitución de sociedades, estructuración corporativa, fusiones y adquisiciones, contratos comerciales, y gobierno corporativo en jurisdicción panameña.',
        },
        international: {
          title: 'Consultoría Legal Internacional',
          description: 'Asesoría a clientes extranjeros en inversiones en Panamá, planificación estructural transfronteriza, y coordinación con asesores legales en múltiples jurisdicciones.',
        },
        compliance: {
          title: 'Cumplimiento Regulatorio',
          description: 'Programas de cumplimiento normativo, políticas AML/CFT, revisión de contratos bajo estándares internacionales, y gestión de riesgos legales y regulatorios.',
        },
        disputes: {
          title: 'Resolución de Conflictos',
          description: 'Litigio comercial y marítimo, arbitraje nacional e internacional, negociación y mediación de controversias, y representación ante autoridades administrativas.',
        },
      },
    },
    whyUs: {
      title: 'Por Qué Elegirnos',
      subtitle: 'Ventajas competitivas basadas en experiencia y método',
      reasons: {
        strategic: {
          title: 'Enfoque Estratégico',
          description: 'Entendemos que cada operación legal tiene implicaciones comerciales. Nuestra asesoría integra análisis jurídico con visión de negocio.',
        },
        experience: {
          title: 'Experiencia Comprobada',
          description: 'Trayectoria sólida en derecho marítimo panameño y transacciones corporativas internacionales. Conocemos los procedimientos y las autoridades competentes.',
        },
        personalized: {
          title: 'Atención Personalizada',
          description: 'Cada cliente recibe un servicio adaptado a sus necesidades específicas, con comunicación directa y seguimiento puntual de cada asunto.',
        },
        international: {
          title: 'Visión Internacional',
          description: 'Capacidad para coordinar con asesores en otras jurisdicciones y comprender contextos legales transnacionales. Atención a clientes en múltiples idiomas.',
        },
        rigor: {
          title: 'Rigurosidad Legal',
          description: 'Trabajo meticuloso, revisión exhaustiva de documentación, y cumplimiento estricto de plazos y formalidades legales en cada gestión.',
        },
      },
    },
    process: {
      title: 'Proceso de Trabajo',
      subtitle: 'Metodología estructurada para resultados predecibles',
      steps: {
        analysis: {
          title: 'Análisis',
          description: 'Revisión detallada de la situación legal y comercial del cliente. Identificación de riesgos, oportunidades y requisitos regulatorios aplicables.',
        },
        strategy: {
          title: 'Estrategia',
          description: 'Diseño de la ruta legal más eficiente. Definición de plazos, costos estimados y alternativas disponibles. Plan de acción claro y fundamentado.',
        },
        execution: {
          title: 'Ejecución',
          description: 'Implementación de la estrategia legal acordada. Preparación de documentación, gestión ante autoridades, y coordinación con terceros cuando sea necesario.',
        },
        followup: {
          title: 'Seguimiento',
          description: 'Monitoreo continuo del asunto hasta su conclusión. Comunicación constante con el cliente y ajustes tácticos según evolución del caso.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Solicite una consulta legal confidencial',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        company: 'Empresa',
        matter: 'Asunto legal',
        message: 'Mensaje',
        submit: 'Enviar Consulta',
      },
      info: {
        title: 'Información de Contacto',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        address: 'Dirección',
        addressLine1: 'Edificio Francesco Molon Tower',
        addressLine2: 'Piso 9, Oficina B',
        addressLine3: 'Ciudad de Panamá, República de Panamá',
      },
      privacy: 'Todas las comunicaciones son tratadas con estricta confidencialidad profesional. Responderemos a su consulta a la brevedad posible.',
    },
    footer: {
      description: 'Asesoría legal estratégica en derecho marítimo, corporativo e internacional para empresas y armadores en jurisdicción panameña.',
      practicesTitle: 'Áreas de Práctica',
      contactTitle: 'Contacto',
      rights: 'Global Maritime Consultants Group Panama. Todos los derechos reservados.',
      legal: 'Aviso Legal',
      privacy: 'Privacidad',
      terms: 'Términos de Uso',
    },
  },
  en: {
    header: {
      about: 'About Us',
      practices: 'Practice Areas',
      whyUs: 'Why Choose Us',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      title: 'Strategic Legal Advisory in Maritime and Corporate Law',
      subtitle: 'Specialized legal consulting for companies and shipowners under Panamanian jurisdiction. Proven experience in international maritime operations and regulatory compliance.',
      ctaPrimary: 'Request Consultation',
      ctaSecondary: 'Contact Legal Team',
      credentials: {
        experience: 'Over 15 years in maritime law',
        maritimeLaw: 'Specialized in Vessel Registration',
        international: 'Multinational Legal Assistance',
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Law firm specialized in international maritime and corporate law',
      description: [
        'Global Maritime Consultants Group Panama is a law firm with a legal-advisory focus established in the Republic of Panama, with a solid track record in providing specialized legal services to local and international companies.',
        'Our group is composed of professionals with proven experience in maritime, corporate, commercial, and regulatory law. We work with shipowners, logistics operators, foreign investors, and corporations requiring strategic legal advisory under Panamanian jurisdiction.',
        'Our approach combines technical rigor, commercial vision, and in-depth knowledge of Panama\'s maritime legal framework. We offer structured, predictable legal solutions aligned with our clients\' strategic objectives.',
      ],
    },
    practices: {
      title: 'Practice Areas',
      subtitle: 'Specialized legal services for corporate and maritime operations',
      areas: {
        maritime: {
          title: 'Maritime and Port Law',
          description: 'Vessel registration and flagging, ship mortgages, charter party agreements, vessel sale and purchase, and compliance with international maritime regulations.',
        },
        corporate: {
          title: 'Corporate and Commercial Law',
          description: 'Company incorporation, corporate structuring, mergers and acquisitions, commercial contracts, and corporate governance under Panamanian jurisdiction.',
        },
        international: {
          title: 'International Legal Consulting',
          description: 'Advisory to foreign clients on investments in Panama, cross-border structural planning, and coordination with legal advisors in multiple jurisdictions.',
        },
        compliance: {
          title: 'Regulatory Compliance',
          description: 'Regulatory compliance programs, AML/CFT policies, contract review under international standards, and legal and regulatory risk management.',
        },
        disputes: {
          title: 'Dispute Resolution',
          description: 'Commercial and maritime litigation, national and international arbitration, dispute negotiation and mediation, and representation before administrative authorities.',
        },
      },
    },
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'Competitive advantages based on experience and methodology',
      reasons: {
        strategic: {
          title: 'Strategic Approach',
          description: 'We understand that every legal operation has commercial implications. Our advisory integrates legal analysis with business vision.',
        },
        experience: {
          title: 'Proven Experience',
          description: 'Solid track record in Panamanian maritime law and international corporate transactions. We know the procedures and competent authorities.',
        },
        personalized: {
          title: 'Personalized Attention',
          description: 'Each client receives a service tailored to their specific needs, with direct communication and timely follow-up on every matter.',
        },
        international: {
          title: 'International Vision',
          description: 'Ability to coordinate with advisors in other jurisdictions and understand transnational legal contexts. Client service in multiple languages.',
        },
        rigor: {
          title: 'Legal Rigor',
          description: 'Meticulous work, exhaustive documentation review, and strict compliance with deadlines and legal formalities in every procedure.',
        },
      },
    },
    process: {
      title: 'Work Process',
      subtitle: 'Structured methodology for predictable results',
      steps: {
        analysis: {
          title: 'Analysis',
          description: 'Detailed review of the client\'s legal and commercial situation. Identification of risks, opportunities, and applicable regulatory requirements.',
        },
        strategy: {
          title: 'Strategy',
          description: 'Design of the most efficient legal route. Definition of timelines, estimated costs, and available alternatives. Clear and well-founded action plan.',
        },
        execution: {
          title: 'Execution',
          description: 'Implementation of the agreed legal strategy. Preparation of documentation, management before authorities, and coordination with third parties when necessary.',
        },
        followup: {
          title: 'Follow-up',
          description: 'Continuous monitoring of the matter until completion. Constant communication with the client and tactical adjustments according to case evolution.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Request a confidential legal consultation',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        company: 'Company',
        matter: 'Legal matter',
        message: 'Message',
        submit: 'Submit Inquiry',
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        addressLine1: 'Francesco Molon Tower Building',
        addressLine2: 'Floor 9, Office B',
        addressLine3: 'Panama City, Republic of Panama',
      },
      privacy: 'All communications are treated with strict professional confidentiality. We will respond to your inquiry as soon as possible.',
    },
    footer: {
      description: 'Strategic legal advisory in maritime, corporate, and international law for companies and shipowners under Panamanian jurisdiction.',
      practicesTitle: 'Practice Areas',
      contactTitle: 'Contact',
      rights: 'Global Maritime Consultants Group Panama. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy',
      terms: 'Terms of Use',
    },
  },
  zh: {
    header: {
      about: '关于我们',
      practices: '业务领域',
      whyUs: '选择我们',
      process: '工作流程',
      contact: '联系我们',
    },
    hero: {
      title: '海事与企业法律战略咨询服务',
      subtitle: '专为巴拿马司法管辖区内的企业和船东提供专业法律咨询。在国际海事运营和监管合规方面拥有丰富经验。',
      ctaPrimary: '申请咨询',
      ctaSecondary: '联系法律团队',
      credentials: {
        experience: '超过15年海事法经验',
        maritimeLaw: '专注于船舶注册',
        international: '跨国法律协助',
      },
    },
    about: {
      title: '关于我们',
      subtitle: '专注于国际海事与企业法的专业律师事务所',
      description: [
        'Global Maritime Consultants Group Panama是一家以法律咨询为核心的律师事务所，总部设在巴拿马共和国，在为本地和国际企业提供专业法律服务方面拥有坚实的业绩记录。',
        '我们的团队由在海事法、企业法、商法和监管法方面拥有丰富经验的专业人士组成。我们为船东、物流运营商、外国投资者以及需要在巴拿马司法管辖区内获得战略法律咨询的企业提供服务。',
        '我们的方法结合了技术严谨性、商业视野和对巴拿马海事法律框架的深入了解。我们提供结构化、可预测且与客户战略目标一致的法律解决方案。',
      ],
    },
    practices: {
      title: '业务领域',
      subtitle: '为企业和海事运营提供专业法律服务',
      areas: {
        maritime: {
          title: '海事与港口法',
          description: '船舶注册和挂旗、船舶抵押、租船合同、船舶买卖以及国际海事法规合规。',
        },
        corporate: {
          title: '企业与商业法',
          description: '在巴拿马司法管辖区内提供公司设立、企业架构、并购、商业合同和公司治理服务。',
        },
        international: {
          title: '国际法律咨询',
          description: '为外国客户在巴拿马投资提供咨询、跨境结构规划以及与多个司法管辖区法律顾问的协调服务。',
        },
        compliance: {
          title: '监管合规',
          description: '监管合规计划、反洗钱/反恐怖融资政策、国际标准合同审查以及法律和监管风险管理。',
        },
        disputes: {
          title: '争议解决',
          description: '商业和海事诉讼、国内和国际仲裁、争议谈判和调解以及在行政机构前的代理服务。',
        },
      },
    },
    whyUs: {
      title: '选择我们的理由',
      subtitle: '基于经验和方法的竞争优势',
      reasons: {
        strategic: {
          title: '战略性方法',
          description: '我们理解每一项法律操作都具有商业影响。我们的咨询将法律分析与商业视野相结合。',
        },
        experience: {
          title: '经验丰富',
          description: '在巴拿马海事法和国际企业交易方面拥有坚实的业绩记录。我们熟悉程序和主管当局。',
        },
        personalized: {
          title: '个性化服务',
          description: '每位客户都能获得根据其具体需求定制的服务，享有直接沟通和对每项事务的及时跟进。',
        },
        international: {
          title: '国际视野',
          description: '能够与其他司法管辖区的顾问协调并理解跨国法律环境。提供多语言客户服务。',
        },
        rigor: {
          title: '法律严谨性',
          description: '工作细致、文件审查详尽，在每项程序中严格遵守截止日期和法律手续。',
        },
      },
    },
    process: {
      title: '工作流程',
      subtitle: '结构化方法确保可预测的结果',
      steps: {
        analysis: {
          title: '分析',
          description: '详细审查客户的法律和商业状况。识别风险、机会和适用的监管要求。',
        },
        strategy: {
          title: '策略',
          description: '设计最有效的法律路径。确定时间表、预估成本和可用替代方案。制定清晰且有充分依据的行动计划。',
        },
        execution: {
          title: '执行',
          description: '实施商定的法律策略。准备文件、在主管当局前办理手续，必要时与第三方协调。',
        },
        followup: {
          title: '跟进',
          description: '持续监控事务直至完成。与客户保持持续沟通，并根据案件进展进行战术调整。',
        },
      },
    },
    contact: {
      title: '联系我们',
      subtitle: '申请保密法律咨询',
      form: {
        name: '全名',
        email: '电子邮箱',
        phone: '电话',
        company: '公司',
        matter: '法律事项',
        message: '留言',
        submit: '提交咨询',
      },
      info: {
        title: '联系信息',
        phone: '电话',
        email: '电子邮箱',
        address: '地址',
        addressLine1: 'Francesco Molon Tower大楼',
        addressLine2: '9楼B办公室',
        addressLine3: '巴拿马城，巴拿马共和国',
      },
      privacy: '所有通信均受到严格的专业保密处理。我们将尽快回复您的咨询。',
    },
    footer: {
      description: '为巴拿马司法管辖区内的企业和船东提供海事、企业和国际法律战略咨询服务。',
      practicesTitle: '业务领域',
      contactTitle: '联系我们',
      rights: 'Global Maritime Consultants Group Panama. 版权所有。',
      legal: '法律声明',
      privacy: '隐私政策',
      terms: '使用条款',
    },
  },
};
