export type Language = 'en' | 'de' | 'es'

export interface Translations {
  // Navigation
  nav: {
    sequence: string
    topics: string
    featured: string
    posts: string
    subscribe: string
  }
  // Hero Section
  hero: {
    label: string
    tagline: string
    title: {
      line1: string
      highlight: string
      line2: string
    }
    subtitle: string
    cta: {
      explore: string
      subscribe: string
      blog: string
      sequence: string
    }
  }
  // Sequence Section
  sequence: {
    label: string
    title: string
    intervene: string
    steps: {
      perception: { title: string; desc: string }
      interpretation: { title: string; desc: string }
      decision: { title: string; desc: string }
      action: { title: string; desc: string }
    }
  }
  // Quote Section
  quote: {
    text: string
    attribution: string
  }
  // Topics Section
  topics: {
    label: string
    title: string
    subtitle: string
  }
  // Stats Section
  stats: {
    title: string
    items: {
      decisions: string
      bitsPerSecond: string
      conscious: string
      dailyDecisions: string
    }
  }
  // Featured Post Section
  featured: {
    label: string
    cta: string
  }
  // Library Section
  library: {
    title: string
  }
  // Posts Section
  posts: {
    label: string
    title: string
    readMore: string
  }
  // Subscribe Section
  subscribe: {
    title: string
    titleHighlight: string
    subtitle: string
    placeholder: string
    button: string
  }
  // Footer
  footer: {
    rss: string
    archive: string
    about: string
    copyright: string
  }
  // Article Page
  article: {
    continueReading: string
    author: {
      name: string
      bio: string
    }
  }
  // Common
  common: {
    copy: string
    share: string
    copied: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      sequence: 'The Sequence',
      topics: 'Topics',
      featured: 'Featured',
      posts: 'Archive',
      subscribe: 'Subscribe',
    },
    hero: {
      label: 'EXPANDING PERCEPTION',
      tagline: 'SEE WHAT OTHERS MISS',
      title: {
        line1: 'THE SIGNAL',
        highlight: 'ARRIVES',
        line2: 'BEFORE THE NOISE',
      },
      subtitle: 'Most interventions happen too late. We work at the perception layer—before interpretation, before decisions, before action. Where reality is shaped.',
      cta: {
        explore: 'EXPLORE',
        subscribe: 'SUBSCRIBE',
        blog: 'READ THE BLOG',
        sequence: 'UNDERSTAND THE SEQUENCE',
      },
    },
    sequence: {
      label: 'THE HUMAN DECISION SEQUENCE',
      title: 'Where most fail. Where we begin.',
      intervene: 'WE INTERVENE HERE',
      steps: {
        perception: { title: 'PERCEPTION', desc: 'What you see' },
        interpretation: { title: 'INTERPRETATION', desc: 'What you think it means' },
        decision: { title: 'DECISION', desc: 'What you choose' },
        action: { title: 'ACTION', desc: 'What you do' },
      },
    },
    quote: {
      text: 'The most dangerous blind spot is the one that makes you certain you see clearly.',
      attribution: 'THE UNBLIND PRINCIPLE',
    },
    topics: {
      label: 'CORE TOPICS',
      title: 'What we explore',
      subtitle: 'Six domains where perception shapes reality before you even notice.',
    },
    stats: {
      title: 'THE PERCEPTION GAP',
      items: {
        decisions: '% of decisions made unconsciously',
        bitsPerSecond: 'Million bits of info per second',
        conscious: 'Bits consciously processed',
        dailyDecisions: 'K daily decisions average',
      },
    },
    featured: {
      label: 'LATEST POST',
      cta: 'READ ARTICLE',
    },
    library: {
      title: 'THE PERCEPTION LIBRARY',
    },
    posts: {
      label: 'ALL POSTS',
      title: 'The full archive',
      readMore: 'READ MORE',
    },
    subscribe: {
      title: 'GET',
      titleHighlight: 'UNBLINDED',
      subtitle: "New posts delivered when they're ready. No spam. No fluff. Just signal.",
      placeholder: 'your@email.com',
      button: 'SUBSCRIBE',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archive',
      about: 'About',
      copyright: '© 2026 UNBLIND. All rights reserved.',
    },
    article: {
      continueReading: 'CONTINUE READING',
      author: {
        name: 'Juan Schubert',
        bio: "Founder of UNBLIND. Exploring perception, power, and the invisible forces that shape decisions before they're made.",
      },
    },
    common: {
      copy: 'Copy',
      share: 'Share',
      copied: 'Copied!',
    },
  },
  de: {
    nav: {
      sequence: 'Die Sequenz',
      topics: 'Themen',
      featured: 'Empfohlen',
      posts: 'Archiv',
      subscribe: 'Abonnieren',
    },
    hero: {
      label: 'WAHRNEHMUNG ERWEITERN',
      tagline: 'SIEH, WAS ANDERE ÜBERSEHEN',
      title: {
        line1: 'DAS SIGNAL',
        highlight: 'KOMMT',
        line2: 'VOR DEM RAUSCHEN',
      },
      subtitle: 'Die meisten Interventionen kommen zu spät. Wir arbeiten auf der Wahrnehmungsebene—vor der Interpretation, vor den Entscheidungen, vor dem Handeln. Wo Realität geformt wird.',
      cta: {
        explore: 'ERKUNDEN',
        subscribe: 'ABONNIEREN',
        blog: 'BLOG LESEN',
        sequence: 'DIE SEQUENZ VERSTEHEN',
      },
    },
    sequence: {
      label: 'DIE MENSCHLICHE ENTSCHEIDUNGSSEQUENZ',
      title: 'Wo die meisten scheitern. Wo wir beginnen.',
      intervene: 'HIER GREIFEN WIR EIN',
      steps: {
        perception: { title: 'WAHRNEHMUNG', desc: 'Was du siehst' },
        interpretation: { title: 'INTERPRETATION', desc: 'Was du denkst, dass es bedeutet' },
        decision: { title: 'ENTSCHEIDUNG', desc: 'Was du wählst' },
        action: { title: 'HANDLUNG', desc: 'Was du tust' },
      },
    },
    quote: {
      text: 'Der gefährlichste blinde Fleck ist der, der dich sicher macht, dass du klar siehst.',
      attribution: 'DAS UNBLIND PRINZIP',
    },
    topics: {
      label: 'KERNTHEMEN',
      title: 'Was wir erforschen',
      subtitle: 'Sechs Bereiche, in denen Wahrnehmung die Realität formt, bevor du es bemerkst.',
    },
    stats: {
      title: 'DIE WAHRNEHMUNGSLÜCKE',
      items: {
        decisions: '% der Entscheidungen unbewusst getroffen',
        bitsPerSecond: 'Millionen Bits Info pro Sekunde',
        conscious: 'Bits bewusst verarbeitet',
        dailyDecisions: 'K tägliche Entscheidungen',
      },
    },
    featured: {
      label: 'NEUESTER BEITRAG',
      cta: 'ARTIKEL LESEN',
    },
    library: {
      title: 'DIE WAHRNEHMUNGSBIBLIOTHEK',
    },
    posts: {
      label: 'ALLE BEITRÄGE',
      title: 'Das vollständige Archiv',
      readMore: 'WEITERLESEN',
    },
    subscribe: {
      title: 'WERDE',
      titleHighlight: 'UNBLINDED',
      subtitle: 'Neue Beiträge, wenn sie fertig sind. Kein Spam. Kein Füllmaterial. Nur Signal.',
      placeholder: 'deine@email.de',
      button: 'ABONNIEREN',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archiv',
      about: 'Über',
      copyright: '© 2026 UNBLIND. Alle Rechte vorbehalten.',
    },
    article: {
      continueReading: 'WEITERLESEN',
      author: {
        name: 'Juan Schubert',
        bio: 'Gründer von UNBLIND. Erforschung von Wahrnehmung, Macht und den unsichtbaren Kräften, die Entscheidungen formen, bevor sie getroffen werden.',
      },
    },
    common: {
      copy: 'Kopieren',
      share: 'Teilen',
      copied: 'Kopiert!',
    },
  },
  es: {
    nav: {
      sequence: 'La Secuencia',
      topics: 'Temas',
      featured: 'Destacados',
      posts: 'Archivo',
      subscribe: 'Suscribirse',
    },
    hero: {
      label: 'EXPANDIENDO LA PERCEPCIÓN',
      tagline: 'VE LO QUE OTROS NO VEN',
      title: {
        line1: 'LA SEÑAL',
        highlight: 'LLEGA',
        line2: 'ANTES DEL RUIDO',
      },
      subtitle: 'La mayoría de las intervenciones llegan demasiado tarde. Trabajamos en la capa de percepción—antes de la interpretación, antes de las decisiones, antes de la acción. Donde se forma la realidad.',
      cta: {
        explore: 'EXPLORAR',
        subscribe: 'SUSCRIBIRSE',
        blog: 'LEER EL BLOG',
        sequence: 'ENTENDER LA SECUENCIA',
      },
    },
    sequence: {
      label: 'LA SECUENCIA DE DECISIÓN HUMANA',
      title: 'Donde la mayoría falla. Donde comenzamos.',
      intervene: 'AQUÍ INTERVENIMOS',
      steps: {
        perception: { title: 'PERCEPCIÓN', desc: 'Lo que ves' },
        interpretation: { title: 'INTERPRETACIÓN', desc: 'Lo que crees que significa' },
        decision: { title: 'DECISIÓN', desc: 'Lo que eliges' },
        action: { title: 'ACCIÓN', desc: 'Lo que haces' },
      },
    },
    quote: {
      text: 'El punto ciego más peligroso es el que te hace creer que ves con claridad.',
      attribution: 'EL PRINCIPIO UNBLIND',
    },
    topics: {
      label: 'TEMAS PRINCIPALES',
      title: 'Lo que exploramos',
      subtitle: 'Seis dominios donde la percepción moldea la realidad antes de que lo notes.',
    },
    stats: {
      title: 'LA BRECHA DE PERCEPCIÓN',
      items: {
        decisions: '% de decisiones tomadas inconscientemente',
        bitsPerSecond: 'Millones de bits de info por segundo',
        conscious: 'Bits procesados conscientemente',
        dailyDecisions: 'K decisiones diarias promedio',
      },
    },
    featured: {
      label: 'ÚLTIMO ARTÍCULO',
      cta: 'LEER ARTÍCULO',
    },
    library: {
      title: 'LA BIBLIOTECA DE PERCEPCIÓN',
    },
    posts: {
      label: 'TODOS LOS ARTÍCULOS',
      title: 'El archivo completo',
      readMore: 'LEER MÁS',
    },
    subscribe: {
      title: 'OBTÉN',
      titleHighlight: 'UNBLINDED',
      subtitle: 'Nuevos artículos cuando estén listos. Sin spam. Sin relleno. Solo señal.',
      placeholder: 'tu@email.com',
      button: 'SUSCRIBIRSE',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archivo',
      about: 'Acerca de',
      copyright: '© 2026 UNBLIND. Todos los derechos reservados.',
    },
    article: {
      continueReading: 'CONTINUAR LEYENDO',
      author: {
        name: 'Juan Schubert',
        bio: 'Fundador de UNBLIND. Explorando la percepción, el poder y las fuerzas invisibles que moldean las decisiones antes de que se tomen.',
      },
    },
    common: {
      copy: 'Copiar',
      share: 'Compartir',
      copied: '¡Copiado!',
    },
  },
}
