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
  // Named Quotes
  quotes: {
    proust: {
      words: { text: string; highlight?: boolean }[]
      author: string
    }
    nin: {
      words: { text: string; highlight?: boolean }[]
      author: string
    }
  }
  // Topics Section
  topics: {
    label: string
    title: string
    subtitle: string
    items: {
      perceptionReality: { title: string; description: string }
      blindSpots: { title: string; description: string }
      decisionErrors: { title: string; description: string }
      communicationMismatch: { title: string; description: string }
      powerSystems: { title: string; description: string }
      aiPerceptionLayer: { title: string; description: string }
    }
  }
  // Stats Section
  stats: {
    label: string
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
    label: string
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
    note: string
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
  // Illusions
  illusions: {
    rotatingSnakes: {
      title: string
      subtitle: string
      instruction: string
    }
    mullerLyer: {
      title: string
      subtitle: string
      instruction: string
      reveal: string
    }
    hermannGrid: {
      title: string
      subtitle: string
      whatsHappening: string
      instruction: string
    }
  }
  // Categories
  categories: {
    perceptionReality: string
    blindSpots: string
    decisionErrors: string
    communicationMismatch: string
    powerSystems: string
    aiPerceptionLayer: string
  }
  // Articles
  articles: {
    '001': {
      title: string
      subtitle: string
      excerpt: string
    }
    '002': {
      title: string
      subtitle: string
      excerpt: string
    }
    '003': {
      title: string
      subtitle: string
      excerpt: string
    }
    '004': {
      title: string
      subtitle: string
      excerpt: string
    }
    '005': {
      title: string
      subtitle: string
      excerpt: string
    }
    '006': {
      title: string
      subtitle: string
      excerpt: string
    }
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
    quotes: {
      proust: {
        words: [
          { text: '"The' },
          { text: 'real' },
          { text: 'voyage' },
          { text: 'of' },
          { text: 'discovery', highlight: true },
          { text: 'consists' },
          { text: 'not' },
          { text: 'in' },
          { text: 'seeking' },
          { text: 'new' },
          { text: 'landscapes,' },
          { text: 'but' },
          { text: 'in' },
          { text: 'having' },
          { text: 'new', highlight: true },
          { text: 'eyes."', highlight: true },
        ],
        author: 'MARCEL PROUST',
      },
      nin: {
        words: [
          { text: '"We' },
          { text: "don't" },
          { text: 'see' },
          { text: 'things' },
          { text: 'as' },
          { text: 'they' },
          { text: 'are,', highlight: true },
          { text: 'we' },
          { text: 'see' },
          { text: 'them' },
          { text: 'as' },
          { text: 'we', highlight: true },
          { text: 'are."', highlight: true },
        ],
        author: 'ANAÏS NIN',
      },
    },
    topics: {
      label: 'CORE TOPICS',
      title: 'What we explore',
      subtitle: 'Six domains where perception shapes reality before you even notice.',
      items: {
        perceptionReality: {
          title: 'Perception vs. Reality',
          description: 'What you see is not what is. The gap between signal and interpretation shapes everything that follows.',
        },
        blindSpots: {
          title: 'Blind Spots',
          description: 'The things you cannot see about what you cannot see. Structural invisibility is the most dangerous kind.',
        },
        decisionErrors: {
          title: 'Decision Errors',
          description: 'Why smart people make predictable mistakes. Systematic failure follows systematic patterns.',
        },
        communicationMismatch: {
          title: 'Communication Mismatch',
          description: 'When words say one thing and systems say another. The gap between signal and noise.',
        },
        powerSystems: {
          title: 'Power & Systems',
          description: 'How influence operates before it announces itself. The invisible architecture of control.',
        },
        aiPerceptionLayer: {
          title: 'AI as Perception Layer',
          description: 'Not a tool. A mirror. A filter. A fundamental shift in how we see and what we see.',
        },
      },
    },
    stats: {
      label: 'THE NUMBERS',
      title: 'The Perception Gap',
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
      label: 'FEATURED POSTS',
      title: 'Start here',
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
      note: '// JOIN FOUNDERS, EXECUTIVES, AND SYSTEM THINKERS',
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
    illusions: {
      rotatingSnakes: {
        title: 'The Rotating Snakes',
        subtitle: 'Stare at the center. Are the circles moving?',
        instruction: "What's happening: Your brain is interpreting static patterns as motion. The asymmetric luminance gradients trick your motion-detection neurons into firing. You're seeing movement that doesn't exist—a manufactured reality from unchanging pixels.",
      },
      mullerLyer: {
        title: 'The Müller-Lyer Illusion',
        subtitle: 'Which horizontal line is longer?',
        instruction: "What's happening: The lines are exactly the same length. But your visual system—trained by years of processing 3D environments—interprets the arrows as depth cues. You literally cannot see equal lengths even when you know they're equal.",
        reveal: 'REVEAL THE TRUTH',
      },
      hermannGrid: {
        title: 'The Hermann Grid',
        subtitle: "Focus on any white intersection. Do you see gray dots at the intersections you're NOT looking at?",
        whatsHappening: "What's happening",
        instruction: "You perceive dark spots at intersections you're not directly looking at, but they vanish when you focus on them. This is lateral inhibition—your retinal ganglion cells suppress signals from neighboring areas, creating phantom darkness where none exists. You're literally hallucinating in plain sight.",
      },
    },
    categories: {
      perceptionReality: 'Perception vs. Reality',
      blindSpots: 'Blind Spots',
      decisionErrors: 'Decision Errors',
      communicationMismatch: 'Communication Mismatch',
      powerSystems: 'Power & Systems',
      aiPerceptionLayer: 'AI as Perception Layer',
    },
    articles: {
      '001': {
        title: 'The Decision Was Made Before You Entered the Room',
        subtitle: 'On the forces that shape outcomes before deliberation begins.',
        excerpt: 'On the forces that shape outcomes before deliberation begins. Most decisions are not made in meetings.',
      },
      '002': {
        title: 'Why You Cannot See What You Cannot See',
        subtitle: 'Blind spots are not gaps in knowledge. They are structures in perception.',
        excerpt: 'Blind spots are not gaps in knowledge. They are structures in perception that shape everything you think you know.',
      },
      '003': {
        title: 'Optimization Is Usually Too Late',
        subtitle: 'The problem was upstream. The solution was downstream. They never met.',
        excerpt: 'The problem was upstream. The solution was downstream. They never met.',
      },
      '004': {
        title: "AI Doesn't Think for You. It Shapes What You Think About",
        subtitle: 'The difference between using a tool and being shaped by a Perception Layer.',
        excerpt: 'The difference between using a tool and being shaped by a Perception Layer.',
      },
      '005': {
        title: 'Your Blind Spot Has a Blind Spot',
        subtitle: "Second-order invisibility and why awareness isn't enough.",
        excerpt: "Second-order invisibility and why awareness isn't enough.",
      },
      '006': {
        title: "Elon Musk's #1 Rule: Never Trust What You Think You See",
        subtitle: 'An autopsy of high-stakes perception.',
        excerpt: 'An autopsy of high-stakes perception. Why 99.9995% of information never reaches your conscious mind.',
      },
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
    quotes: {
      proust: {
        words: [
          { text: '"Die' },
          { text: 'wahre' },
          { text: 'Entdeckungsreise' },
          { text: 'besteht' },
          { text: 'nicht' },
          { text: 'darin,' },
          { text: 'neue' },
          { text: 'Landschaften', highlight: true },
          { text: 'zu' },
          { text: 'suchen,' },
          { text: 'sondern' },
          { text: 'mit' },
          { text: 'neuen', highlight: true },
          { text: 'Augen', highlight: true },
          { text: 'zu' },
          { text: 'sehen."' },
        ],
        author: 'MARCEL PROUST',
      },
      nin: {
        words: [
          { text: '"Wir' },
          { text: 'sehen' },
          { text: 'die' },
          { text: 'Dinge' },
          { text: 'nicht' },
          { text: 'so,' },
          { text: 'wie', highlight: true },
          { text: 'sie' },
          { text: 'sind,', highlight: true },
          { text: 'wir' },
          { text: 'sehen' },
          { text: 'sie' },
          { text: 'so,' },
          { text: 'wie', highlight: true },
          { text: 'wir', highlight: true },
          { text: 'sind."' },
        ],
        author: 'ANAÏS NIN',
      },
    },
    topics: {
      label: 'KERNTHEMEN',
      title: 'Was wir erforschen',
      subtitle: 'Sechs Bereiche, in denen Wahrnehmung die Realität formt, bevor du es bemerkst.',
      items: {
        perceptionReality: {
          title: 'Wahrnehmung vs. Realität',
          description: 'Was du siehst, ist nicht was ist. Die Lücke zwischen Signal und Interpretation formt alles, was folgt.',
        },
        blindSpots: {
          title: 'Blinde Flecken',
          description: 'Die Dinge, die du nicht sehen kannst über das, was du nicht sehen kannst. Strukturelle Unsichtbarkeit ist die gefährlichste Art.',
        },
        decisionErrors: {
          title: 'Entscheidungsfehler',
          description: 'Warum kluge Menschen vorhersehbare Fehler machen. Systematisches Versagen folgt systematischen Mustern.',
        },
        communicationMismatch: {
          title: 'Kommunikations-Diskrepanz',
          description: 'Wenn Worte das Eine sagen und Systeme das Andere. Die Lücke zwischen Signal und Rauschen.',
        },
        powerSystems: {
          title: 'Macht & Systeme',
          description: 'Wie Einfluss wirkt, bevor er sich ankündigt. Die unsichtbare Architektur der Kontrolle.',
        },
        aiPerceptionLayer: {
          title: 'KI als Wahrnehmungsschicht',
          description: 'Kein Werkzeug. Ein Spiegel. Ein Filter. Eine fundamentale Verschiebung in dem, wie wir sehen und was wir sehen.',
        },
      },
    },
    stats: {
      label: 'DIE ZAHLEN',
      title: 'Die Wahrnehmungslücke',
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
      label: 'EMPFOHLENE BEITRÄGE',
      title: 'Hier starten',
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
      note: '// WERDE TEIL VON GRÜNDERN, FÜHRUNGSKRÄFTEN UND SYSTEMDENKERN',
    },
    footer: {
      rss: 'RSS',
      archive: 'Archiv',
      about: 'Über uns',
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
    illusions: {
      rotatingSnakes: {
        title: 'Die Rotierenden Schlangen',
        subtitle: 'Starre auf die Mitte. Bewegen sich die Kreise?',
        instruction: 'Was passiert: Dein Gehirn interpretiert statische Muster als Bewegung. Die asymmetrischen Helligkeitsgradienten täuschen deine Bewegungserkennungs-Neuronen. Du siehst Bewegung, die nicht existiert—eine konstruierte Realität aus unveränderlichen Pixeln.',
      },
      mullerLyer: {
        title: 'Die Müller-Lyer Illusion',
        subtitle: 'Welche horizontale Linie ist länger?',
        instruction: 'Was passiert: Die Linien sind exakt gleich lang. Aber dein visuelles System—trainiert durch Jahre der Verarbeitung von 3D-Umgebungen—interpretiert die Pfeile als Tiefenhinweise. Du kannst buchstäblich keine gleichen Längen sehen, selbst wenn du weißt, dass sie gleich sind.',
        reveal: 'WAHRHEIT ENTHÜLLEN',
      },
      hermannGrid: {
        title: 'Das Hermann-Gitter',
        subtitle: 'Fokussiere auf eine weiße Kreuzung. Siehst du graue Punkte an den Kreuzungen, die du NICHT anschaust?',
        whatsHappening: 'Was passiert',
        instruction: 'Du nimmst dunkle Flecken an Kreuzungen wahr, die du nicht direkt anschaust, aber sie verschwinden, wenn du sie fokussierst. Das ist laterale Hemmung—deine retinalen Ganglienzellen unterdrücken Signale aus benachbarten Bereichen und erzeugen Phantomdunkelheit, wo keine existiert. Du halluzinierst buchstäblich bei hellem Tageslicht.',
      },
    },
    categories: {
      perceptionReality: 'Wahrnehmung vs. Realität',
      blindSpots: 'Blinde Flecken',
      decisionErrors: 'Entscheidungsfehler',
      communicationMismatch: 'Kommunikations-Diskrepanz',
      powerSystems: 'Macht & Systeme',
      aiPerceptionLayer: 'KI als Wahrnehmungsschicht',
    },
    articles: {
      '001': {
        title: 'Die Entscheidung war gefallen, bevor du den Raum betreten hast',
        subtitle: 'Über die Kräfte, die Ergebnisse formen, bevor die Beratung beginnt.',
        excerpt: 'Über die Kräfte, die Ergebnisse formen, bevor die Beratung beginnt. Die meisten Entscheidungen werden nicht in Meetings getroffen.',
      },
      '002': {
        title: 'Warum du nicht sehen kannst, was du nicht sehen kannst',
        subtitle: 'Blinde Flecken sind keine Wissenslücken. Sie sind Strukturen in der Wahrnehmung.',
        excerpt: 'Blinde Flecken sind keine Wissenslücken. Sie sind Strukturen in der Wahrnehmung, die alles formen, was du zu wissen glaubst.',
      },
      '003': {
        title: 'Optimierung kommt meist zu spät',
        subtitle: 'Das Problem war stromaufwärts. Die Lösung war stromabwärts. Sie trafen sich nie.',
        excerpt: 'Das Problem war stromaufwärts. Die Lösung war stromabwärts. Sie trafen sich nie.',
      },
      '004': {
        title: 'KI denkt nicht für dich. Sie formt, worüber du nachdenkst',
        subtitle: 'Der Unterschied zwischen einem Werkzeug und einer Wahrnehmungsschicht.',
        excerpt: 'Der Unterschied zwischen einem Werkzeug und einer Wahrnehmungsschicht.',
      },
      '005': {
        title: 'Dein blinder Fleck hat einen blinden Fleck',
        subtitle: 'Unsichtbarkeit zweiter Ordnung und warum Bewusstsein nicht ausreicht.',
        excerpt: 'Unsichtbarkeit zweiter Ordnung und warum Bewusstsein nicht ausreicht.',
      },
      '006': {
        title: 'Elon Musks Regel Nr. 1: Vertraue nie dem, was du zu sehen glaubst',
        subtitle: 'Eine Autopsie der Hochrisiko-Wahrnehmung.',
        excerpt: 'Eine Autopsie der Hochrisiko-Wahrnehmung. Warum 99,9995% der Informationen nie dein Bewusstsein erreichen.',
      },
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
    quotes: {
      proust: {
        words: [
          { text: '"El' },
          { text: 'verdadero' },
          { text: 'viaje' },
          { text: 'de' },
          { text: 'descubrimiento', highlight: true },
          { text: 'no' },
          { text: 'consiste' },
          { text: 'en' },
          { text: 'buscar' },
          { text: 'nuevos' },
          { text: 'paisajes,' },
          { text: 'sino' },
          { text: 'en' },
          { text: 'tener' },
          { text: 'nuevos', highlight: true },
          { text: 'ojos."', highlight: true },
        ],
        author: 'MARCEL PROUST',
      },
      nin: {
        words: [
          { text: '"No' },
          { text: 'vemos' },
          { text: 'las' },
          { text: 'cosas' },
          { text: 'como' },
          { text: 'son,', highlight: true },
          { text: 'las' },
          { text: 'vemos' },
          { text: 'como' },
          { text: 'somos', highlight: true },
          { text: 'nosotros."', highlight: true },
        ],
        author: 'ANAÏS NIN',
      },
    },
    topics: {
      label: 'TEMAS PRINCIPALES',
      title: 'Lo que exploramos',
      subtitle: 'Seis dominios donde la percepción moldea la realidad antes de que lo notes.',
      items: {
        perceptionReality: {
          title: 'Percepción vs. Realidad',
          description: 'Lo que ves no es lo que es. La brecha entre la señal y la interpretación moldea todo lo que sigue.',
        },
        blindSpots: {
          title: 'Puntos Ciegos',
          description: 'Las cosas que no puedes ver sobre lo que no puedes ver. La invisibilidad estructural es el tipo más peligroso.',
        },
        decisionErrors: {
          title: 'Errores de Decisión',
          description: 'Por qué las personas inteligentes cometen errores predecibles. El fracaso sistemático sigue patrones sistemáticos.',
        },
        communicationMismatch: {
          title: 'Desajuste de Comunicación',
          description: 'Cuando las palabras dicen una cosa y los sistemas dicen otra. La brecha entre la señal y el ruido.',
        },
        powerSystems: {
          title: 'Poder y Sistemas',
          description: 'Cómo opera la influencia antes de anunciarse. La arquitectura invisible del control.',
        },
        aiPerceptionLayer: {
          title: 'IA como Capa de Percepción',
          description: 'No es una herramienta. Un espejo. Un filtro. Un cambio fundamental en cómo vemos y qué vemos.',
        },
      },
    },
    stats: {
      label: 'LOS NÚMEROS',
      title: 'La Brecha de Percepción',
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
      label: 'ARTÍCULOS DESTACADOS',
      title: 'Empieza aquí',
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
      note: '// ÚNETE A FUNDADORES, EJECUTIVOS Y PENSADORES SISTÉMICOS',
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
    illusions: {
      rotatingSnakes: {
        title: 'Las Serpientes Rotantes',
        subtitle: '¿Se están moviendo los círculos? Mira fijamente al centro.',
        instruction: 'Qué está pasando: Tu cerebro interpreta patrones estáticos como movimiento. Los gradientes de luminancia asimétricos engañan a tus neuronas de detección de movimiento. Estás viendo movimiento que no existe—una realidad fabricada de píxeles inmutables.',
      },
      mullerLyer: {
        title: 'La Ilusión de Müller-Lyer',
        subtitle: '¿Qué línea horizontal es más larga?',
        instruction: 'Qué está pasando: Las líneas tienen exactamente la misma longitud. Pero tu sistema visual—entrenado por años de procesar entornos 3D—interpreta las flechas como señales de profundidad. Literalmente no puedes ver longitudes iguales incluso cuando sabes que son iguales.',
        reveal: 'REVELAR LA VERDAD',
      },
      hermannGrid: {
        title: 'La Cuadrícula de Hermann',
        subtitle: '¿Ves puntos grises en las intersecciones que NO estás mirando?',
        whatsHappening: 'Qué está pasando',
        instruction: 'Percibes puntos oscuros en las intersecciones que no estás mirando directamente, pero desaparecen cuando te enfocas en ellos. Esto es inhibición lateral—tus células ganglionares retinales suprimen señales de áreas vecinas, creando oscuridad fantasma donde no existe ninguna. Literalmente estás alucinando a plena vista.',
      },
    },
    categories: {
      perceptionReality: 'Percepción vs. Realidad',
      blindSpots: 'Puntos Ciegos',
      decisionErrors: 'Errores de Decisión',
      communicationMismatch: 'Desajuste de Comunicación',
      powerSystems: 'Poder y Sistemas',
      aiPerceptionLayer: 'IA como Capa de Percepción',
    },
    articles: {
      '001': {
        title: 'La decisión ya estaba tomada antes de que entraras a la sala',
        subtitle: 'Sobre las fuerzas que moldean los resultados antes de que comience la deliberación.',
        excerpt: 'Sobre las fuerzas que moldean los resultados antes de que comience la deliberación. La mayoría de las decisiones no se toman en reuniones.',
      },
      '002': {
        title: 'Por qué no puedes ver lo que no puedes ver',
        subtitle: 'Los puntos ciegos no son lagunas de conocimiento. Son estructuras en la percepción.',
        excerpt: 'Los puntos ciegos no son lagunas de conocimiento. Son estructuras en la percepción que moldean todo lo que crees saber.',
      },
      '003': {
        title: 'La optimización suele llegar demasiado tarde',
        subtitle: 'El problema estaba río arriba. La solución estaba río abajo. Nunca se encontraron.',
        excerpt: 'El problema estaba río arriba. La solución estaba río abajo. Nunca se encontraron.',
      },
      '004': {
        title: 'La IA no piensa por ti. Moldea sobre qué piensas',
        subtitle: 'La diferencia entre usar una herramienta y ser moldeado por una Capa de Percepción.',
        excerpt: 'La diferencia entre usar una herramienta y ser moldeado por una Capa de Percepción.',
      },
      '005': {
        title: 'Tu punto ciego tiene un punto ciego',
        subtitle: 'Invisibilidad de segundo orden y por qué la conciencia no es suficiente.',
        excerpt: 'Invisibilidad de segundo orden y por qué la conciencia no es suficiente.',
      },
      '006': {
        title: 'La regla #1 de Elon Musk: Nunca confíes en lo que crees ver',
        subtitle: 'Una autopsia de la percepción de alto riesgo.',
        excerpt: 'Una autopsia de la percepción de alto riesgo. Por qué el 99,9995% de la información nunca llega a tu mente consciente.',
      },
    },
  },
}
