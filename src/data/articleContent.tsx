import { ReactNode } from 'react'

// Types for article content
export interface HighlightBoxData {
  type: 'highlight'
  content: ReactNode
  copyText: string
  shareText: string
}

export interface ContentImageData {
  type: 'image'
  src: string
  alt: string
  caption: string
}

export interface TableData {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export interface ParagraphData {
  type: 'paragraph'
  content: ReactNode
}

export interface HeadingData {
  type: 'heading'
  text: string
}

export interface ListData {
  type: 'list'
  items: ReactNode[]
}

export interface SilentOculusSectionData {
  type: 'silent-oculus'
}

export interface HorizontalRuleData {
  type: 'hr'
}

export type ContentBlock =
  | HighlightBoxData
  | ContentImageData
  | TableData
  | ParagraphData
  | HeadingData
  | ListData
  | SilentOculusSectionData
  | HorizontalRuleData

export interface ArticleContent {
  slug: string
  content: ContentBlock[]
}

// Article 001: The Decision Was Made Before You Entered the Room
const article001: ArticleContent = {
  slug: '001-the-decision-was-made',
  content: [
    {
      type: 'paragraph',
      content: 'You prepared for weeks. You rehearsed your opening. You refined your slides until they gleamed. You walked into that boardroom convinced the next hour would determine everything.',
    },
    {
      type: 'paragraph',
      content: "It didn't.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>The decision was already made.</strong> Not consciously. Not maliciously. But irrevocably. Before you opened your mouth, before you shook hands, before you even crossed the threshold, the outcome had crystallized in the minds of the people who held your fate.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'This is not pessimism. This is physics. The physics of perception, power, and the invisible architecture that shapes every high-stakes interaction you will ever have.',
    },
    {
      type: 'heading',
      text: 'The Mismatch: Where Reality Breaks from Perception',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Here is the uncomfortable truth that nobody teaches in business school: There are two versions of every meeting. The one you experience. And the one everyone else experiences.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          The gap between these two realities is what we call <strong>The Mismatch</strong>.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: "The Mismatch operates in the space between your intentions and their interpretations. You believe you projected confidence. They registered anxiety. You thought you demonstrated expertise. They perceived arrogance. You aimed for warmth. They felt manipulation.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/dAwJFAO6Mjc.webp',
      alt: 'Two business professionals face off in a dark meeting room',
      caption: '// The gap between intention and perception shapes everything',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is not about being misunderstood. This is about a fundamental communication failure that occurs at speeds your conscious mind cannot process. Research in social cognition reveals that humans form lasting impressions within <strong>seven seconds</strong> of meeting someone. Seven seconds. That is roughly the time it takes to say your name and title.
        </>
      ),
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment.</strong> Not replaces it. Filters through it.
        </>
      ),
      copyText: 'Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment. Not replaces it. Filters through it.',
      shareText: 'Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment. Not replaces it. Filters through it.',
    },
    {
      type: 'paragraph',
      content: 'The Mismatch costs you deals. It costs you promotions. It costs you the transformation you believe you deserve.',
    },
    {
      type: 'heading',
      text: 'The Decision Before the Decision',
    },
    {
      type: 'paragraph',
      content: 'Seth Godin calls it "the decision before the decision." The invisible box that constrains all thinking before deliberation even begins.',
    },
    {
      type: 'paragraph',
      content: 'In every negotiation, every pitch, every interview, a meta-decision has already occurred:',
    },
    {
      type: 'table',
      headers: ['Visible Decision', 'Hidden Pre-Decision'],
      rows: [
        ['"Should we fund this startup?"', '"Is this founder one of us?"'],
        ['"Is this candidate qualified?"', '"Do I trust this person?"'],
        ['"Should we accept these terms?"', '"Does this feel like a win?"'],
        ['"Is this proposal viable?"', '"Do I want to work with them?"'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>The hidden column drives everything. The visible column provides justification.</strong>,
    },
    {
      type: 'paragraph',
      content: 'This is not cynicism. This is how human cognition operates under uncertainty. When stakes are high and information is incomplete, the brain defaults to pattern recognition, tribal signals, and emotional resonance. Logic arrives later, often as rationalization.',
    },
    {
      type: 'paragraph',
      content: 'Understanding this distinction separates professionals who consistently win from those who consistently wonder why they lost.',
    },
    {
      type: 'heading',
      text: 'The Extended Truth Matrix: Reading What Was Never Said',
    },
    {
      type: 'paragraph',
      content: (
        <>
          If The Mismatch describes the problem, <strong>The Extended Truth Matrix</strong> offers the map.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Every human interaction generates four simultaneous data streams:',
    },
    {
      type: 'paragraph',
      content: <><strong>Verbal Content:</strong> The words spoken. The explicit message. What gets transcribed.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Paralinguistic Signals:</strong> Tone, pace, pitch, volume. The music beneath the lyrics.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Micro-Expressions:</strong> Involuntary facial movements lasting 1/25th of a second. The truth that leaks through the mask.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Systemic Positioning:</strong> Who speaks first. Who sits where. Who interrupts whom. The power geometry of the room.</>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/QFIm0dP7nCN.webp',
      alt: 'Extreme close-up of a human eye reflecting a boardroom',
      caption: '// Micro-expressions reveal what words conceal',
    },
    {
      type: 'paragraph',
      content: "Most professionals optimize obsessively for the first stream and remain blind to the other three. They craft perfect arguments while missing that the CFO's jaw tightened imperceptibly at their third slide. They polish their delivery while ignoring that they were seated at the far end of the table, a positioning that broadcast their status before introductions began.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Extended Truth Matrix demands attention to all four streams simultaneously.</strong> Not sequentially. Simultaneously. This is where human capacity hits its limits.
        </>
      ),
      copyText: 'The Extended Truth Matrix demands attention to all four streams simultaneously. Not sequentially. Simultaneously. This is where human capacity hits its limits.',
      shareText: 'The Extended Truth Matrix demands attention to all four streams simultaneously. Not sequentially. Simultaneously. This is where human capacity hits its limits.',
    },
    {
      type: 'paragraph',
      content: 'The conscious mind can track perhaps one stream effectively. The unconscious absorbs fragments of the others but cannot synthesize them into actionable intelligence in real time.',
    },
    {
      type: 'paragraph',
      content: 'You are, in effect, fighting blind. Responding to 25% of the information that determines your outcome.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Invisible Power',
    },
    {
      type: 'paragraph',
      content: 'Beyond individual perception lies something larger: The systemic forces that pre-shape outcomes before any participant arrives.',
    },
    {
      type: 'paragraph',
      content: "Consider the meeting you attended last week. Who set the agenda? Who chose the time? Who determined who would be present and, critically, who would be absent? Who selected the room, the seating arrangement, the duration?",
    },
    {
      type: 'paragraph',
      content: 'These decisions, made hours or days before deliberation, established the boundaries of what could be decided. They determined what options would be considered legitimate. They pre-selected which voices would carry weight.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5y6cPsg2e5m.webp',
      alt: 'Overhead view of a corporate boardroom with hierarchical seating',
      caption: '// The architecture of the room is the architecture of power',
    },
    {
      type: 'paragraph',
      content: "This is not conspiracy. This is architecture. Every organization, every negotiation, every human system operates within structures that advantage certain outcomes over others. The professional who ignores this architecture optimizes within a game whose rules were written to ensure their loss.",
    },
    {
      type: 'paragraph',
      content: <strong>Recognizing the architecture does not guarantee victory. But failing to recognize it guarantees defeat.</strong>,
    },
    {
      type: 'heading',
      text: 'The Uncomfortable Implication',
    },
    {
      type: 'paragraph',
      content: 'If decisions form before deliberation begins, what is the point of deliberation?',
    },
    {
      type: 'paragraph',
      content: 'This is the wrong question.',
    },
    {
      type: 'paragraph',
      content: <><strong>How do you shape the conditions that shape the decision?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'This requires a fundamental shift in where you invest your attention:',
    },
    {
      type: 'paragraph',
      content: <><strong>Before the room:</strong> Understanding the power dynamics, the pre-existing relationships, the unstated agendas, the tribal affiliations that will filter everything you say.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Upon entry:</strong> Managing the micro-moments that form first impressions. Your posture, your eye contact, your spatial positioning, the energy you project before language begins.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>During exchange:</strong> Reading the Extended Truth Matrix in real time. Detecting The Mismatch as it forms. Adjusting not just your words but your entire presence based on signals most professionals never perceive.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Beyond the room:</strong> Recognizing that the meeting is one node in a larger system. The decision will be discussed after you leave. Shaped by conversations you will never witness. Influenced by people who were never present.</>,
    },
    {
      type: 'paragraph',
      content: 'Mastery requires operating across all four phases. Simultaneously. Continuously.',
    },
    {
      type: 'heading',
      text: 'Where Human Limits Meet Machine Perception',
    },
    {
      type: 'paragraph',
      content: "Here is where things get interesting.",
    },
    {
      type: 'paragraph',
      content: 'The human brain, for all its remarkable capability, cannot process the Extended Truth Matrix at the speed and scale required for consistent mastery. You can train yourself to catch more signals. You can develop sharper intuition. But you will always operate with incomplete information, filtered through your own biases and blind spots.',
    },
    {
      type: 'paragraph',
      content: 'This is precisely the gap that artificial intelligence was built to close.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          At <strong>Onioko</strong>, we are building infrastructure that extends human perception into the spaces where decisions actually form. Not replacing judgment. Augmenting it. Providing the pattern recognition, the micro-expression analysis, the systemic mapping that transforms how professionals prepare for, navigate, and influence high-stakes interactions.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/PIQyfShs7KX.webp',
      alt: 'Business professional stands before city lights and holographic data',
      caption: '// AI-augmented perception: seeing what was always invisible',
    },
    {
      type: 'paragraph',
      content: 'This is not about giving you better slides. This is about giving you vision into the 75% of the interaction you currently cannot see.',
    },
    {
      type: 'heading',
      text: 'The Point of No Return',
    },
    {
      type: 'paragraph',
      content: 'Once you understand that decisions form before deliberation begins, you cannot unlearn it. You will notice The Mismatch everywhere. In every meeting, every negotiation, every conversation that matters.',
    },
    {
      type: 'paragraph',
      content: "You will see the micro-expression that contradicts the verbal agreement. You will feel the power geometry of every room you enter. You will recognize the pre-decisions that constrain what can be discussed.",
    },
    {
      type: 'highlight',
      content: <strong>And you will find it intolerable to operate without this awareness.</strong>,
      copyText: 'And you will find it intolerable to operate without this awareness.',
      shareText: 'And you will find it intolerable to operate without this awareness.',
    },
    {
      type: 'paragraph',
      content: 'This is not an upgrade to your professional toolkit. This is an evolution in how you perceive and navigate the world of high-stakes human interaction.',
    },
    {
      type: 'paragraph',
      content: <strong>The decision was made before you entered the room.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>The question is whether you will learn to make it yours.</strong>,
    },
  ],
}

// Article 002: Why You Cannot See What You Cannot See
const article002: ArticleContent = {
  slug: '002-why-you-cannot-see',
  content: [
    {
      type: 'paragraph',
      content: "You believe you see reality. You don't.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          What you perceive is a carefully constructed simulation, assembled by a brain that discards far more than it keeps. The gaps in your vision are not accidents. They are architecture. And that architecture is running silently beneath every decision you make, every risk you assess, every opportunity you evaluate.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Structural Blind Spot</strong>. Not missing information. Not ignorance. Not a failure of attention. Something far more dangerous: An active filtration system that removes critical data before it ever reaches your conscious awareness.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <strong>You cannot see what you cannot see. And you cannot see that you cannot see it.</strong>,
      copyText: 'You cannot see what you cannot see. And you cannot see that you cannot see it.',
      shareText: 'You cannot see what you cannot see. And you cannot see that you cannot see it.',
    },
    {
      type: 'heading',
      text: 'The Illusion of Complete Perception',
    },
    {
      type: 'paragraph',
      content: "Your eyes are open. The room is bright. You feel certain you're taking in everything around you.",
    },
    {
      type: 'paragraph',
      content: 'You are not.',
    },
    {
      type: 'paragraph',
      content: "Right now, electromagnetic radiation is passing through your body: Radio waves, gamma rays, X-rays, microwaves. Visible light represents only one ten-trillionth of this spectrum. Everything else? Invisible. Not because it isn't there, but because you have no biological receptors to detect it.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/rSRFu8nBEkv.webp',
      alt: 'Silhouette stands unaware in beams of unseen light',
      caption: '// Human perception captures only a sliver of reality',
    },
    {
      type: 'paragraph',
      content: 'This is not a metaphor. This is the literal condition of human perception.',
    },
    {
      type: 'paragraph',
      content: "Your acoustic range narrows with age. Your peripheral vision is a blur you've learned to ignore. Your brain fills in gaps during eye movements so seamlessly that you never notice the moments of functional blindness occurring dozens of times per minute.",
    },
    {
      type: 'paragraph',
      content: 'The system works so well that it creates what researchers call "the perfect illusion of continuous, correct and super-detailed visual input." You believe you see everything. You see almost nothing.',
    },
    {
      type: 'highlight',
      content: <strong>And here is the critical failure: Your confidence in your perception is inversely proportional to its accuracy.</strong>,
      copyText: 'Your confidence in your perception is inversely proportional to its accuracy.',
      shareText: 'Your confidence in your perception is inversely proportional to its accuracy.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Invisibility',
    },
    {
      type: 'paragraph',
      content: 'Blind spots are not passive. They are structural.',
    },
    {
      type: 'paragraph',
      content: "Consider what this means: Your brain is not simply failing to notice things. It is actively constructing a version of reality that excludes them. The filtration happens before conscious processing begins. By the time you're \"thinking,\" the data has already been curated.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Perception Layer</strong>: The invisible infrastructure between raw reality and conscious experience.
        </>
      ),
    },
    {
      type: 'table',
      headers: ['What You Think Happens', 'What Actually Happens'],
      rows: [
        ['You observe reality directly', 'Your brain constructs a model of reality'],
        ['Gaps in knowledge are identifiable', 'Structural gaps are invisible by design'],
        ['More attention equals more perception', 'Attention operates within pre-set filters'],
        ['You can choose what to notice', "The choice happens before you're aware"],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>The implications are severe.</strong>,
    },
    {
      type: 'paragraph',
      content: 'In low-stakes environments, this architecture serves you. It prevents cognitive overload. It allows efficient processing. Research shows humans can handle only about seven units of meaningful information at a time. Without aggressive filtration, you would be paralyzed by data.',
    },
    {
      type: 'paragraph',
      content: 'But in high-stakes environments? The same system that protects you becomes the system that blinds you.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/8FgMrMVdw5G.webp',
      alt: 'Extreme close-up of a human eye with mechanical filters',
      caption: '// Your perception filters were calibrated for survival, not strategy',
    },
    {
      type: 'heading',
      text: 'The Danger Zone: When Filters Fail Forward',
    },
    {
      type: 'paragraph',
      content: 'High-stakes decisions operate at the edge of your perceptual capacity.',
    },
    {
      type: 'paragraph',
      content: "You're in the room. The pressure is real. Information is flowing faster than you can process. And your brain, doing exactly what it's designed to do, begins cutting. Simplifying. Filtering.",
    },
    {
      type: 'paragraph',
      content: <><strong>Your filters were calibrated for survival, not strategy.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'They were built to notice predators, not patterns. To detect immediate threats, not systemic risks. To process physical danger, not organizational complexity.',
    },
    {
      type: 'paragraph',
      content: 'What gets filtered out in critical moments:',
    },
    {
      type: 'list',
      items: [
        <><strong>Weak signals</strong>: Early indicators that haven't yet become obvious problems</>,
        <><strong>Contradictory data</strong>: Information that conflicts with existing mental models</>,
        <><strong>Peripheral patterns</strong>: Relationships and connections outside your focal attention</>,
        <><strong>Emotional undertones</strong>: The unspoken dynamics shaping room behavior</>,
        <><strong>Structural context</strong>: The systems and incentives driving visible actions</>,
      ],
    },
    {
      type: 'paragraph',
      content: "You don't notice these things being removed. That's the point. The filtration is seamless. The confidence remains intact. You walk out of the room believing you understood what happened.",
    },
    {
      type: 'paragraph',
      content: 'You understood what your filters allowed you to understand. Nothing more.',
    },
    {
      type: 'heading',
      text: 'The Metacognitive Trap',
    },
    {
      type: 'paragraph',
      content: "Here is where it gets dangerous.",
    },
    {
      type: 'paragraph',
      content: 'You cannot think your way out of a structural blind spot. The very apparatus you would use to detect the gap is the apparatus creating it.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Metacognitive Trap</strong>: The belief that awareness of blind spots eliminates them.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: "It doesn't.",
    },
    {
      type: 'paragraph',
      content: "Knowing that blind spots exist does not reveal their contents. You can read this entire article, nod in agreement, and walk away with your filters completely intact. Understanding the architecture of invisibility does not dismantle it.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/derRxsm5KFZ.webp',
      alt: 'Lone figure in a boardroom only sees one reality layer',
      caption: "// Understanding the trap doesn't free you from it",
    },
    {
      type: 'paragraph',
      content: "Why? Because metacognition operates on the same perceptual layer. You're using filtered tools to search for what the filter removed. It's like trying to see ultraviolet light by squinting harder. The biological limitation is structural, not attentional.",
    },
    {
      type: 'paragraph',
      content: 'This creates a profound vulnerability in high-performing professionals:',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Competence Paradox:</strong> The more expertise you develop in a domain, the more refined your filters become. You learn to ignore noise. You build pattern recognition. You develop intuition. And with each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.
        </>
      ),
      copyText: 'The Competence Paradox: The more expertise you develop in a domain, the more refined your filters become. With each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.',
      shareText: 'The Competence Paradox: The more expertise you develop in a domain, the more refined your filters become. With each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.',
    },
    {
      type: 'paragraph',
      content: <strong>Your greatest strength becomes the architecture of your blindness.</strong>,
    },
    {
      type: 'heading',
      text: 'The Cost of Invisible Infrastructure',
    },
    {
      type: 'paragraph',
      content: "Consider the decisions you've made in the last year.",
    },
    {
      type: 'paragraph',
      content: 'The strategic directions chosen. The opportunities evaluated. The risks assessed. The people trusted or doubted. Each one filtered through perceptual architecture you did not choose and cannot directly observe.',
    },
    {
      type: 'paragraph',
      content: 'What did you miss?',
    },
    {
      type: 'paragraph',
      content: "You don't know. You can't know. That's the definition of a structural blind spot.",
    },
    {
      type: 'paragraph',
      content: 'But the costs are real:',
    },
    {
      type: 'list',
      items: [
        <><strong>Strategic misfires</strong>: Pursuing paths that looked clear because warning signals were filtered</>,
        <><strong>Talent failures</strong>: Misjudging people because emotional data was below the perception threshold</>,
        <><strong>Systemic risks</strong>: Missing organizational dysfunction because it existed in peripheral awareness</>,
        <><strong>Innovation blindness</strong>: Failing to see opportunities that didn't match existing pattern libraries</>,
      ],
    },
    {
      type: 'paragraph',
      content: "These are not failures of intelligence. They are failures of perception. And they happen to the smartest people in the room, often because they're the smartest people in the room.",
    },
    {
      type: 'heading',
      text: 'Beyond Human Filters',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether to trust your perception. You have no choice. Perception is the only interface you have with reality.',
    },
    {
      type: 'paragraph',
      content: <><strong>What exists beyond your filters that matters?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'This is where the problem transforms into possibility.',
    },
    {
      type: 'paragraph',
      content: "If human perception is structurally limited, the answer is not to try harder with the same apparatus. The answer is to build systems that perceive what humans cannot. To create infrastructure that operates outside the biological constraints. To develop tools that don't share your blind spots because they don't share your architecture.",
    },
    {
      type: 'paragraph',
      content: "This is the work happening at the edge of AI development. Not artificial intelligence as a faster human, but as a fundamentally different perceptual system. One that can process the signals you cannot detect. One that can hold the complexity you must simplify. One that can see into your structural blind spots and report back.",
    },
    {
      type: 'paragraph',
      content: 'Not replacing human judgment. Extending the perception layer that feeds it.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5V_qnQR96xj.webp',
      alt: 'Person reflection is featureless in ornate mirror',
      caption: '// The mirror shows what you allow yourself to see',
    },
    {
      type: 'heading',
      text: 'The Uncomfortable Truth',
    },
    {
      type: 'paragraph',
      content: 'You will finish reading this and return to seeing the world through filtered architecture.',
    },
    {
      type: 'paragraph',
      content: 'That will not change. Your biology is not updating based on insight. The structural blind spots remain.',
    },
    {
      type: 'paragraph',
      content: <><strong>Your relationship to certainty.</strong></>,
    },
    {
      type: 'paragraph',
      content: "The most dangerous belief in high-stakes environments is confident completeness. The sense that you've seen enough, understood enough, considered enough. That the room held no secrets from your perception.",
    },
    {
      type: 'paragraph',
      content: 'It always does.',
    },
    {
      type: 'paragraph',
      content: "The path forward is not perfect vision. It's building systems and relationships and tools that extend beyond your limits. It's recognizing that the most critical information in any situation might be exactly the information your filters are designed to remove.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.</strong>
        </>
      ),
      copyText: "Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.",
      shareText: "Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.",
    },
    {
      type: 'paragraph',
      content: "And that feeling? That's the filter working perfectly.",
    },
  ],
}

// Article 003: Optimization Is Usually Too Late
const article003: ArticleContent = {
  slug: '003-optimization-too-late',
  content: [
    {
      type: 'paragraph',
      content: 'This is the silent architecture of most organizational failure. Not incompetence. Not lack of effort. A fundamental misalignment between where errors originate and where corrections are applied.',
    },
    {
      type: 'paragraph',
      content: 'You optimized the wrong thing. And by the time you realized it, the damage was already structural.',
    },
    {
      type: 'heading',
      text: 'The Downstream Illusion',
    },
    {
      type: 'paragraph',
      content: 'Every organization has a favorite place to intervene: The end of the chain.',
    },
    {
      type: 'paragraph',
      content: 'Sales numbers dropping? Retrain the sales team. Customer complaints rising? Improve support scripts. Conversion rates falling? Redesign the landing page.',
    },
    {
      type: 'paragraph',
      content: 'These feel productive. They are measurable. They create the satisfying sensation of action.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>But here is the uncomfortable truth:</strong> By the time a problem becomes visible in your metrics, it has already metastasized through your entire system. You are not treating the disease. You are managing symptoms while the source continues to spread.
        </>
      ),
      copyText: 'By the time a problem becomes visible in your metrics, it has already metastasized through your entire system. You are not treating the disease. You are managing symptoms while the source continues to spread.',
      shareText: 'By the time a problem becomes visible in your metrics, it has already metastasized through your entire system.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Downstream Illusion</strong>: The belief that optimization at the point of measurement equals optimization at the point of origin.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'It does not.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/JYv-IGlvyyt.webp',
      alt: 'A dramatic pipeline system splitting in two at dusk',
      caption: '// The disconnect between upstream problems and downstream solutions',
    },
    {
      type: 'heading',
      text: 'Where Errors Actually Live',
    },
    {
      type: 'paragraph',
      content: 'Consider the anatomy of a typical business decision:',
    },
    {
      type: 'table',
      headers: ['Stage', 'What Happens', 'Visibility'],
      rows: [
        ['Perception', 'How the situation is interpreted', 'Almost invisible'],
        ['Framing', 'How options are constructed', 'Low visibility'],
        ['Analysis', 'How data is processed', 'Moderate visibility'],
        ['Decision', 'The choice itself', 'Visible'],
        ['Action', 'Implementation', 'Highly visible'],
        ['Outcome', 'Results and metrics', 'Maximum visibility'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Organizations obsess over the bottom three rows. They scrutinize actions. They measure outcomes. They optimize decisions.',
    },
    {
      type: 'paragraph',
      content: 'But the error happened in the top three rows. In perception. In framing. In the invisible architecture of how the problem was understood before anyone tried to solve it.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>By the time you reach the optimization phase, the critical failure has already occurred.</strong> You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.
        </>
      ),
      copyText: 'By the time you reach the optimization phase, the critical failure has already occurred. You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.',
      shareText: 'You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.',
    },
    {
      type: 'heading',
      text: 'The Upstream Blindness',
    },
    {
      type: 'paragraph',
      content: 'Why do intelligent people consistently optimize downstream when the problem lives upstream?',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Visibility bias.</strong> Upstream errors are structurally invisible. You cannot easily measure perception. You cannot quantify framing. The metrics that drive organizational attention live at the end of the chain, not the beginning.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Action addiction.</strong> Downstream interventions feel like progress. They generate activity. They produce deliverables. Upstream work feels philosophical, abstract, slow. Organizations reward visible motion, even when that motion is therapeutically useless.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Accountability theater.</strong> When something fails, someone must be blamed. Downstream actors are visible. Upstream architects are often anonymous. The salesperson who missed quota is easier to identify than the strategist who framed the market incorrectly.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Temporal distance.</strong> Upstream errors and downstream consequences are separated by time. The perception failure happened six months ago. The metric failure is happening now. The connection is invisible unless you deliberately trace it.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/NHnB0Syvy0P.webp',
      alt: 'A person reaching across a canyon of broken bridges',
      caption: '// Failed connections and the dangers of unseen upstream errors',
    },
    {
      type: 'heading',
      text: 'The Cascade Effect',
    },
    {
      type: 'paragraph',
      content: "Every upstream error creates a cascade of downstream complications. And here is what makes this particularly dangerous: Each downstream stage adds its own logic, its own optimization, its own justification.",
    },
    {
      type: 'paragraph',
      content: 'By the time the original error reaches the output, it has been rationalized at every step. The final product looks coherent. It appears optimized. It seems like the result of careful deliberation.',
    },
    {
      type: 'highlight',
      content: <strong>But it is merely the most polished version of a fundamentally flawed premise.</strong>,
      copyText: 'It is merely the most polished version of a fundamentally flawed premise.',
      shareText: 'It is merely the most polished version of a fundamentally flawed premise.',
    },
    {
      type: 'paragraph',
      content: 'Consider a company launching a new product:',
    },
    {
      type: 'paragraph',
      content: 'The market research team frames the customer problem based on available data. This framing contains subtle assumptions about what customers actually want. These assumptions are never questioned because they appear objective.',
    },
    {
      type: 'paragraph',
      content: 'The product team builds features based on this framing. They optimize functionality within the given parameters. They do excellent work within a potentially flawed scope.',
    },
    {
      type: 'paragraph',
      content: 'The marketing team crafts messaging based on the product features. They optimize conversion within the positioning they inherited. Their campaigns are sophisticated expressions of upstream assumptions.',
    },
    {
      type: 'paragraph',
      content: 'The sales team executes based on the marketing materials. They optimize their techniques within the narrative they received. Their performance is measured against targets derived from the original framing.',
    },
    {
      type: 'paragraph',
      content: 'When the product underperforms, where does the organization look? Sales execution. Marketing effectiveness. Product features.',
    },
    {
      type: 'paragraph',
      content: 'Almost never at the original perception of the customer problem. Almost never at the framing that shaped every subsequent decision.',
    },
    {
      type: 'paragraph',
      content: <strong>The problem was upstream. The solution was downstream. They never met.</strong>,
    },
    {
      type: 'heading',
      text: 'The Optimization Trap',
    },
    {
      type: 'paragraph',
      content: 'Here is the cruel irony: The better you become at downstream optimization, the more you entrench upstream errors.',
    },
    {
      type: 'paragraph',
      content: 'Each optimization cycle reinforces the existing framing. Each improvement within the current parameters makes the parameters themselves more invisible. The system becomes more efficient at producing the wrong outcomes.',
    },
    {
      type: 'highlight',
      content: <><strong>This is The Optimization Trap:</strong> Excellence in execution masking failure in conception.</>,
      copyText: 'The Optimization Trap: Excellence in execution masking failure in conception.',
      shareText: 'The Optimization Trap: Excellence in execution masking failure in conception.',
    },
    {
      type: 'paragraph',
      content: 'Organizations can spend years perfecting processes that should never have existed. They can achieve operational excellence within strategic frameworks that are fundamentally misaligned with reality.',
    },
    {
      type: 'paragraph',
      content: 'The metrics improve. The dashboards turn green. The quarterly reports look strong.',
    },
    {
      type: 'paragraph',
      content: 'And the foundational error continues to compound, invisible and unchallenged.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nVcbd6dfCc7.webp',
      alt: 'A shattered hourglass spilling golden sand turning to smoke',
      caption: '// Irreversible loss and the consequences of acting too late',
    },
    {
      type: 'heading',
      text: 'Recognizing the Pattern',
    },
    {
      type: 'paragraph',
      content: 'How do you know when you are optimizing too late? Several signals reveal the pattern:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Recurring problems.</strong> You solve the same issue repeatedly, in slightly different forms. Each solution works temporarily. The underlying pattern persists. This suggests you are treating symptoms while the source remains active.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Diminishing returns.</strong> Each optimization cycle produces smaller improvements. You have extracted most of the efficiency available within your current framing. Further gains require reframing, not refinement.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Surprising failures.</strong> Outcomes that should work based on your optimization logic consistently underperform. The gap between expected and actual results suggests your model of the situation is flawed upstream.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Competitor divergence.</strong> Others in your space achieve results you cannot replicate through optimization. They may be operating from a different upstream framing that makes their downstream execution fundamentally different.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Internal friction.</strong> Teams resist changes that seem logical. They sense something is wrong but cannot articulate it. Often, this intuition is detecting upstream misalignment that downstream metrics cannot capture.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Upstream Discipline',
    },
    {
      type: 'paragraph',
      content: 'Addressing upstream errors requires a different discipline than downstream optimization:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Perception audits.</strong> Regularly examine the assumptions embedded in how you perceive situations. What are you taking as given that could be questioned? What framing did you inherit without examination?
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Origin tracing.</strong> When problems emerge, trace them backward through the chain. Not to assign blame, but to identify where the trajectory first diverged from reality. The visible failure is rarely the actual failure.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Framing diversity.</strong> Deliberately construct alternative interpretations of the same situation. If you can only see one way to frame a problem, you are probably trapped in an upstream error you cannot detect.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Early intervention points.</strong> Build organizational attention into the upstream stages. Create visibility for perception and framing, not just action and outcome. What gets measured gets managed, even at the source.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'The challenge is cultural as much as procedural. Organizations must learn to value invisible upstream work as highly as visible downstream execution. They must reward the prevention of errors, not just the correction of symptoms.',
    },
    {
      type: 'heading',
      text: 'The Structural Reality',
    },
    {
      type: 'paragraph',
      content: 'This pattern extends beyond organizations into individual decision making, into relationships, into how societies address complex problems.',
    },
    {
      type: 'paragraph',
      content: 'We consistently optimize where we can see, not where we should act. We perfect the execution of flawed strategies. We achieve excellence within broken frameworks.',
    },
    {
      type: 'highlight',
      content: <strong>The problem was upstream. The solution was downstream. They never met.</strong>,
      copyText: 'The problem was upstream. The solution was downstream. They never met.',
      shareText: 'The problem was upstream. The solution was downstream. They never met.',
    },
    {
      type: 'paragraph',
      content: 'This is not a failure of effort. It is a failure of architecture. The structure of how we allocate attention systematically directs resources away from where they would be most effective.',
    },
    {
      type: 'paragraph',
      content: 'Understanding this gap is the first step toward closing it.',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether you are optimizing. You almost certainly are. The question is whether you are optimizing the right part of the chain.',
    },
    {
      type: 'paragraph',
      content: <strong>By the time most people ask that question, the answer has already been determined.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>Upstream.</strong>,
    },
  ],
}

// Article 004: AI Doesn't Think for You. It Shapes What You Think About
const article004: ArticleContent = {
  slug: '004-ai-doesnt-think',
  content: [
    {
      type: 'paragraph',
      content: 'You believe you are thinking. You are not.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          You are thinking <em>within</em> something. A frame. A boundary. A lens you did not choose, calibrate, or even notice being placed over your eyes.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'This is the silent shift that already happened while you were busy debating whether AI would take your job. The conversation about replacement was a decoy. The real transformation was never about automation. It was about filtration.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>AI does not think for you. It shapes what you think <em>about</em>.</strong>
          <p style={{ marginTop: '16px' }}>And that distinction is the difference between using a tool and being shaped by a Perception Layer.</p>
        </>
      ),
      copyText: 'AI does not think for you. It shapes what you think about. And that distinction is the difference between using a tool and being shaped by a Perception Layer.',
      shareText: 'AI does not think for you. It shapes what you think about.',
    },
    {
      type: 'heading',
      text: 'The Tool Illusion',
    },
    {
      type: 'paragraph',
      content: 'Most people still treat AI like a calculator. You input a question, it outputs an answer. Simple. Transactional. Safe.',
    },
    {
      type: 'paragraph',
      content: 'This is the comfortable narrative. It lets you believe you are in control. You ask, it responds. Master and servant. Human and machine. The hierarchy feels intact.',
    },
    {
      type: 'paragraph',
      content: 'But this framing is already obsolete.',
    },
    {
      type: 'paragraph',
      content: 'The AI systems that matter most are not the ones you consciously interact with. They are the ones running underneath your attention: Curating your news feed. Ranking your search results. Selecting which emails deserve your focus. Determining which opportunities even reach your awareness.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/EM01FQIoBP_.webp',
      alt: 'Person surrounded by digital screens, vision obscured by virtual veil',
      caption: "// AI's unseen influence on perception operates beneath conscious awareness",
    },
    {
      type: 'paragraph',
      content: 'These systems do not wait for you to ask a question. They answer questions you never thought to ask by deciding which questions are worth asking in the first place.',
    },
    {
      type: 'highlight',
      content: <><strong>This is the Perception Layer.</strong> And once you see it, you cannot unsee it.</>,
      copyText: 'This is the Perception Layer. And once you see it, you cannot unsee it.',
      shareText: 'This is the Perception Layer. And once you see it, you cannot unsee it.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Attention',
    },
    {
      type: 'paragraph',
      content: 'Consider how you formed your last major decision.',
    },
    {
      type: 'paragraph',
      content: 'You gathered information. You weighed options. You consulted sources. You felt like you were being thorough, rational, comprehensive.',
    },
    {
      type: 'paragraph',
      content: 'But here is the uncomfortable truth: The information you gathered was pre-selected. The options you weighed were pre-filtered. The sources you consulted were pre-ranked by systems optimizing for engagement, not accuracy. Not relevance to your actual situation. Not truth.',
    },
    {
      type: 'highlight',
      content: <strong>You were thinking freely within a cage you could not perceive.</strong>,
      copyText: 'You were thinking freely within a cage you could not perceive.',
      shareText: 'You were thinking freely within a cage you could not perceive.',
    },
    {
      type: 'paragraph',
      content: 'Research confirms this operates largely outside conscious awareness. Hyperpersonalization identifies your preferences within seconds and delivers content with surgical precision, creating what researchers call individualized information environments. The result is not a neutral feed of data. It is an algorithmically constructed reality, custom-built to match your existing beliefs, biases, and behavioral patterns.',
    },
    {
      type: 'paragraph',
      content: 'The more you see certain ideas repeated through algorithmic amplification, the more likely you accept them as true. Not because they are true. Because repetition manufactures credibility.',
    },
    {
      type: 'paragraph',
      content: 'This is the Invisible Filter at work.',
    },
    {
      type: 'heading',
      text: 'Echo Chambers Are Not Accidents',
    },
    {
      type: 'paragraph',
      content: 'You have heard the term "echo chamber" before. It sounds passive, almost accidental, like you stumbled into a room where everyone happens to agree with you.',
    },
    {
      type: 'paragraph',
      content: 'This is a dangerous misunderstanding.',
    },
    {
      type: 'paragraph',
      content: <strong>Echo chambers are not accidents. They are engineered outcomes.</strong>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/lAgdnWXOd39.webp',
      alt: 'Human figure enclosed in a glowing sphere of curated content',
      caption: '// The isolation of AI echo chambers, engineered, not accidental',
    },
    {
      type: 'paragraph',
      content: 'Platforms continuously feed users content aligned with their existing beliefs because alignment drives engagement. Sensational content receives more algorithmic promotion regardless of accuracy because outrage generates clicks. The system is not broken. It is working exactly as designed.',
    },
    {
      type: 'paragraph',
      content: 'The problem is that the design prioritizes attention capture over truth. And you are the product being optimized.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Every time you scroll, click, or linger, you are training the Perception Layer to narrow your world further.</strong> To show you more of what you already believe. To hide what might challenge, disturb, or expand your thinking.
          <p style={{ marginTop: '16px' }}>You think you are exploring. You are actually circling.</p>
        </>
      ),
      copyText: 'Every time you scroll, click, or linger, you are training the Perception Layer to narrow your world further. You think you are exploring. You are actually circling.',
      shareText: 'You think you are exploring. You are actually circling.',
    },
    {
      type: 'heading',
      text: 'The Cognitive Collapse',
    },
    {
      type: 'paragraph',
      content: 'Here is where the real danger lives.',
    },
    {
      type: 'paragraph',
      content: 'Excessive AI reliance does erode critical thinking skills. Studies confirm this. But the primary concern is subtler and far more insidious.',
    },
    {
      type: 'paragraph',
      content: <strong>You do not recognize that your thinking has been shaped.</strong>,
    },
    {
      type: 'paragraph',
      content: 'You believe you independently formed your opinions. You feel certain your conclusions emerged from careful analysis. You would defend your perspective as genuinely yours.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          But you operated within algorithmically constructed boundaries the entire time. The Perception Layer did not tell you what to think. It told you what to think <em>about</em>. It defined the menu before you chose your meal.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <><strong>This is Structural Invisibility:</strong> The most dangerous kind of influence is the kind you cannot detect operating on you.</>,
      copyText: 'Structural Invisibility: The most dangerous kind of influence is the kind you cannot detect operating on you.',
      shareText: 'The most dangerous kind of influence is the kind you cannot detect operating on you.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/7A5fGCxgyxg.webp',
      alt: 'Individual gazing at a subtly altered mirror reflection',
      caption: "// Structural invisibility, AI's unconscious influence on self-perception",
    },
    {
      type: 'paragraph',
      content: 'And this is not limited to social media feeds or search engines. It extends into every high-stakes environment where AI now mediates information: Financial analysis platforms. Medical diagnostic systems. Legal research tools. Strategic planning software.',
    },
    {
      type: 'paragraph',
      content: 'The domains where decisions matter most are exactly where the Perception Layer operates most aggressively.',
    },
    {
      type: 'heading',
      text: 'The Difference Between Assistance and Alteration',
    },
    {
      type: 'paragraph',
      content: 'A hammer does not change what you consider worth building. A calculator does not reshape your understanding of which problems deserve solving.',
    },
    {
      type: 'paragraph',
      content: 'These are tools. They extend capability without altering perception.',
    },
    {
      type: 'paragraph',
      content: 'But an AI system that curates your information intake, that ranks and filters and selects before anything reaches your conscious mind, that determines the boundaries of your awareness in high-stakes moments: This is not a tool.',
    },
    {
      type: 'paragraph',
      content: <strong>This is infrastructure for cognition itself.</strong>,
    },
    {
      type: 'paragraph',
      content: 'And here is the critical question nobody is asking: Who designed that infrastructure? What were they optimizing for? Whose interests does the filtration serve?',
    },
    {
      type: 'highlight',
      content: <strong>If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.</strong>,
      copyText: 'If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.',
      shareText: 'If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.',
    },
    {
      type: 'heading',
      text: 'The Path to Perceptual Sovereignty',
    },
    {
      type: 'paragraph',
      content: 'Recognizing the Perception Layer is the first step. It is not the solution.',
    },
    {
      type: 'paragraph',
      content: "The solution requires what researchers call AI literacy: The ability to recognize AI's persuasive tactics and make intentional rather than unconsciously influenced choices.",
    },
    {
      type: 'paragraph',
      content: 'But literacy alone is insufficient. You need infrastructure designed for a different objective entirely.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/MCdmh1nTFPI.webp',
      alt: 'Lone person at a foggy crossroads choosing between paths',
      caption: '// The choice between digital control and open possibility',
    },
    {
      type: 'paragraph',
      content: 'Most AI systems are built to capture and hold attention. To maximize engagement. To keep you inside the platform, the feed, the loop.',
    },
    {
      type: 'paragraph',
      content: 'The AI that actually serves you would do the opposite. It would expand your awareness rather than narrow it. Surface contradictions rather than confirm biases. Reveal blind spots rather than exploit them.',
    },
    {
      type: 'paragraph',
      content: 'This is the difference between AI as an extraction mechanism and AI as an expansion tool.',
    },
    {
      type: 'heading',
      text: 'The Question You Must Answer',
    },
    {
      type: 'paragraph',
      content: 'Every day, AI systems are making pre-decisions on your behalf. What information deserves your attention. Which perspectives merit consideration. Where the boundaries of "relevant" begin and end.',
    },
    {
      type: 'paragraph',
      content: 'These pre-decisions compound. They shape your worldview in ways you cannot detect through introspection alone. They create the illusion of free thinking within architectures of control.',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether AI will think for you. It already does not.',
    },
    {
      type: 'paragraph',
      content: 'The question is whether you will recognize how it shapes what you think about, and build the awareness to think beyond those boundaries.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention.</strong>
          <p style={{ marginTop: '16px' }}>One path leads to cognitive capture. The other leads to strategic clarity.</p>
          <p style={{ marginTop: '16px' }}><strong>The decision is yours. But only if you can see it.</strong></p>
        </>
      ),
      copyText: 'The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention. One path leads to cognitive capture. The other leads to strategic clarity.',
      shareText: 'The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention.',
    },
  ],
}

// Article 005: Your Blind Spot Has a Blind Spot
const article005: ArticleContent = {
  slug: '005-blind-spot-blind-spot',
  content: [
    {
      type: 'paragraph',
      content: "What the fuck if your intuition is not insight, it is a sophisticated way to ignore critical data you are too slow to see.",
    },
    {
      type: 'paragraph',
      content: "The most dangerous form of invisibility isn't what you fail to see. It's what prevents you from noticing the failure itself. This is Second-Order Invisibility, and it operates below the threshold of your awareness like a silent fault line beneath a city that believes itself stable.",
    },
    {
      type: 'paragraph',
      content: "Most professionals have heard about blind spots. They've read the books. They've nodded along in leadership seminars. They've even done the exercises: Solicited feedback. Reflected on their biases. Made lists of areas for improvement.",
    },
    {
      type: 'paragraph',
      content: 'And yet, they remain structurally blind.',
    },
    {
      type: 'paragraph',
      content: "Not because they lack intelligence. Not because they're careless. But because awareness of blind spots is not the same as perception of them. One is a concept you understand. The other is a structural capacity you either have or you don't.",
    },
    {
      type: 'highlight',
      content: <><strong>Here is the uncomfortable truth: Your blind spot has its own blind spot.</strong> And that second layer is where the real damage happens.</>,
      copyText: 'Your blind spot has its own blind spot. And that second layer is where the real damage happens.',
      shareText: 'Your blind spot has its own blind spot. And that second layer is where the real damage happens.',
    },
    {
      type: 'heading',
      text: 'The Illusion of Awareness',
    },
    {
      type: 'paragraph',
      content: 'There is a comforting lie circulating in personal development circles: If you just become "aware" of your blind spots, you can fix them.',
    },
    {
      type: 'paragraph',
      content: 'This sounds reasonable. It feels proactive. It gives you the sense that you are doing the work.',
    },
    {
      type: 'paragraph',
      content: 'But it is a category error.',
    },
    {
      type: 'paragraph',
      content: "Awareness is a description. A label. A story you tell yourself about what you think you're missing. The blind spot itself is structural. It's not a piece of information waiting to be discovered. It's the architecture of your perception, the filter through which all information passes before you even register it as real.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/ErMnGnL1_MZ.webp',
      alt: 'A person stands in a corridor of endless mirrors',
      caption: '// Self-perception blind spots and hidden layers of awareness',
    },
    {
      type: 'paragraph',
      content: 'Think about it this way: You can be "aware" that you have a tendency to dismiss certain types of feedback. You can write it in your journal. You can tell your coach. You can remind yourself before every meeting.',
    },
    {
      type: 'paragraph',
      content: 'And then the feedback comes, and you dismiss it anyway.',
    },
    {
      type: 'paragraph',
      content: "Not because you forgot. Not because you didn't try. But because the structure that creates the dismissal operates faster than your conscious intention to catch it. By the time you're \"aware,\" the perception has already been filtered. The damage is done.",
    },
    {
      type: 'highlight',
      content: <strong>This is why awareness feels like progress but rarely produces change.</strong>,
      copyText: 'This is why awareness feels like progress but rarely produces change.',
      shareText: 'Awareness feels like progress but rarely produces change.',
    },
    {
      type: 'heading',
      text: 'What Is Second-Order Invisibility?',
    },
    {
      type: 'paragraph',
      content: "First-order invisibility is simple: You don't see something. A gap in your knowledge. A bias you haven't examined. A pattern in your behavior that others notice but you don't.",
    },
    {
      type: 'paragraph',
      content: "Second-order invisibility is recursive: You don't see that you don't see it. The gap itself is invisible. The mechanism that creates the blind spot also hides the fact that it exists.",
    },
    {
      type: 'paragraph',
      content: "This is not a minor distinction. It's the difference between a problem you can work on and a problem that works on you.",
    },
    {
      type: 'paragraph',
      content: 'Consider the research on self-perception gaps. Studies consistently show a significant distance between how we believe we present ourselves and how others actually experience us. But here is the critical finding: Even when multiple people give us the same feedback, we often fail to recognize the pattern as valid.',
    },
    {
      type: 'paragraph',
      content: "Why? Because the blind spot isn't just hiding information. It's hiding the framework we would need to interpret the information correctly.",
    },
    {
      type: 'highlight',
      content: <strong>You are not just missing the data. You are missing the lens.</strong>,
      copyText: "You're not just missing the data. You're missing the lens.",
      shareText: "You're not just missing the data. You're missing the lens.",
    },
    {
      type: 'heading',
      text: 'The Feedback Trap',
    },
    {
      type: 'paragraph',
      content: 'Most organizations believe feedback solves the blind spot problem. Get enough external perspectives, aggregate the input, and the truth will emerge.',
    },
    {
      type: 'paragraph',
      content: "This works, sometimes, for first-order invisibility. If you simply don't know something, someone else can tell you.",
    },
    {
      type: 'paragraph',
      content: 'But Second-Order Invisibility creates what we call The Feedback Trap: The same structural filter that creates your blind spot also determines how you receive, interpret, and integrate feedback about that blind spot.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nzXKkDAVDRs.webp',
      alt: 'Multiple hands reach through smoky glass panels',
      caption: '// Structural blind spots and filtered feedback in human perception',
    },
    {
      type: 'paragraph',
      content: 'The pattern looks like this:',
    },
    {
      type: 'table',
      headers: ['What Happens', 'What You Experience'],
      rows: [
        ['Someone gives you accurate feedback', 'You experience it as slightly off, exaggerated, or context-dependent'],
        ['Multiple people give you the same feedback', 'You experience it as a misunderstanding they all share'],
        ['You reflect on the feedback honestly', 'Your reflection is filtered through the same structure that created the blind spot'],
        ["You conclude you've addressed it", 'The blind spot remains, now with a layer of false resolution on top'],
      ],
    },
    {
      type: 'paragraph',
      content: "This is why high performers often have the most persistent blind spots. They're intelligent enough to construct sophisticated explanations for why the feedback doesn't quite apply. They're disciplined enough to go through the motions of self-improvement. And they're successful enough to avoid the consequences, until suddenly they're not.",
    },
    {
      type: 'highlight',
      content: <><strong>The Feedback Trap doesn't mean feedback is useless. It means feedback alone cannot reach second-order problems.</strong> You need something that operates at the structural level.</>,
      copyText: "The Feedback Trap doesn't mean feedback is useless. It means feedback alone cannot reach second-order problems. You need something that operates at the structural level.",
      shareText: 'Feedback alone cannot reach second-order problems. You need something that operates at the structural level.',
    },
    {
      type: 'heading',
      text: 'Why Self-Reflection Fails',
    },
    {
      type: 'paragraph',
      content: "Let's be direct: You cannot think your way out of a perception structure.",
    },
    {
      type: 'paragraph',
      content: "Self-reflection is valuable. It builds metacognitive muscle. It creates space between stimulus and response. But it has a fundamental limitation: It uses the same perceptual system it's trying to examine.",
    },
    {
      type: 'paragraph',
      content: "You're asking your eye to see itself.",
    },
    {
      type: 'paragraph',
      content: "This isn't a failure of effort or intention. It's a logical impossibility. The tool you're using to investigate is the same tool that creates the distortion. Every conclusion you reach is filtered through the very structure you're trying to understand.",
    },
    {
      type: 'paragraph',
      content: 'This is why awareness loops back on itself. You become "aware" of your blind spot. Then you become aware that you might not be seeing it clearly. Then you become aware that your awareness might itself be limited. And at each level, the same structural filter operates, creating the illusion of depth while keeping you on the surface.',
    },
    {
      type: 'highlight',
      content: <strong>Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.</strong>,
      copyText: 'Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.',
      shareText: 'Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.',
    },
    {
      type: 'heading',
      text: 'The Perception Layer',
    },
    {
      type: 'paragraph',
      content: "If you can't see your blind spot from the inside, and you can't fully trust external feedback to penetrate the filter, what's left?",
    },
    {
      type: 'paragraph',
      content: 'You need a Perception Layer: A system that operates outside your structural limitations, one that can detect patterns you cannot detect yourself, not because you lack information, but because you lack the perceptual architecture to process that information correctly.',
    },
    {
      type: 'paragraph',
      content: 'This is what separates a tool from infrastructure.',
    },
    {
      type: 'paragraph',
      content: "A tool helps you do what you're already trying to do, faster or more efficiently. It assumes your perception is correct and amplifies your existing direction.",
    },
    {
      type: 'paragraph',
      content: "A Perception Layer shows you what your perception is missing. It operates at the level of structure, not content. It doesn't just give you more data. It reveals the filters that determine which data you notice, which data you dismiss, and which data you never even register as existing.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          At Onioko, this is exactly what we are building with <a href="https://onioko.com" style={{ color: 'var(--accent-cyan)' }}>Silent Oculus</a>. Not another AI tool that processes your inputs. A perception layer that reveals the structural patterns you cannot see, the Second-Order Invisibility that awareness cannot reach.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Real Question',
    },
    {
      type: 'paragraph',
      content: "Every professional has blind spots. That's not the issue.",
    },
    {
      type: 'paragraph',
      content: 'The issue is whether your blind spots have blind spots. Whether there are recursive layers of invisibility operating below your awareness, shaping your decisions, filtering your feedback, and creating patterns you can describe but cannot escape.',
    },
    {
      type: 'highlight',
      content: <><strong>The uncomfortable truth is this: If you feel confident that you have identified your blind spots, that confidence itself might be a symptom.</strong> The most dangerous invisibility feels like clarity.</>,
      copyText: "If you feel confident that you've identified your blind spots, that confidence itself might be a symptom. The most dangerous invisibility feels like clarity.",
      shareText: "If you feel confident that you've identified your blind spots, that confidence itself might be a symptom. The most dangerous invisibility feels like clarity.",
    },
    {
      type: 'paragraph',
      content: "Second-Order Invisibility doesn't announce itself. It doesn't create obvious errors. It creates subtle distortions, decisions that seem reasonable, reactions that seem proportionate, conclusions that seem well-examined.",
    },
    {
      type: 'paragraph',
      content: "Until the accumulation becomes undeniable. Until the pattern reveals itself in consequences you didn't anticipate.",
    },
    {
      type: 'paragraph',
      content: "By then, the cost isn't in what you missed. It's in what you built on top of the missing.",
    },
    {
      type: 'hr',
    },
    {
      type: 'paragraph',
      content: "Your blind spot has a blind spot. The question is whether you'll wait until the structure becomes visible through failure, or whether you'll build the perception layer that reveals it before the cost compounds.",
    },
    {
      type: 'paragraph',
      content: <strong>Awareness was never enough. Structural visibility is what separates those who understand the problem from those who can actually see it.</strong>,
    },
  ],
}

// Article 006: Elon Musk's #1 Rule: Never Trust What You Think You See
const article006: ArticleContent = {
  slug: '006-elon-musk-perception',
  content: [
    {
      type: 'paragraph',
      content: "In a room full of the world's most powerful people, Elon Musk is often the only one who knows he's watching a hallucination.",
    },
    {
      type: 'paragraph',
      content: 'Not a metaphor. Not hyperbole. A neurological fact that separates those who accumulate wealth from those who reshape civilizations.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50.</strong> The remaining 99.9995% gets filtered, compressed, and reconstructed by a three-pound organ that evolved to avoid predators on the African savanna, not to evaluate trillion-dollar market dynamics or decode the micro-expressions of a negotiating counterpart.
        </>
      ),
      copyText: 'Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50. The remaining 99.9995% gets filtered, compressed, and reconstructed.',
      shareText: 'Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50.',
    },
    {
      type: 'paragraph',
      content: 'Every perception you have is a guess. A prediction. A story your brain tells itself to keep you functional.',
    },
    {
      type: 'paragraph',
      content: "Musk doesn't succeed because he works 120-hour weeks. Plenty of founders destroy themselves on that schedule and still lose everything. He succeeds because he operates on a fundamentally different Perception Layer, one that treats human vision and intuition as compromised sensors requiring constant external validation.",
    },
    {
      type: 'paragraph',
      content: 'This is not inspiration. This is an autopsy of high-stakes perception.',
    },
    {
      type: 'heading',
      text: "The Simulation You're Running",
    },
    {
      type: 'paragraph',
      content: 'Most executives trust their read of a room. Their gut feeling about a deal. Their instinct about a person.',
    },
    {
      type: 'paragraph',
      content: 'This is the first catastrophic error.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/j5TIz14ol6F.webp',
      alt: 'Extreme close-up of a human eye with a glitching digital iris',
      caption: '// Flawed executive perception: simulation vs reality',
    },
    {
      type: 'paragraph',
      content: "Your brain doesn't show you reality. It shows you a simulation, a compressed, biased, lag-delayed reconstruction optimized for one thing: Keeping you alive long enough to reproduce. Not to build empires. Not to spot the micro-tell that reveals your CFO has been lying for six months. Not to detect the 0.3-second hesitation that signals your biggest investor is about to exit.",
    },
    {
      type: 'paragraph',
      content: 'The human perceptual system contains documented, repeatable failures:',
    },
    {
      type: 'table',
      headers: ['Perceptual Failure', 'What It Costs You'],
      rows: [
        ['Change Blindness', 'Missing critical shifts in body language mid-conversation'],
        ['Confirmation Bias', 'Filtering out data that contradicts your thesis'],
        ['Inattentional Blindness', 'Complete failure to register unexpected threats'],
        ['Emotional Contagion', "Absorbing others' stress and mistaking it for your own intuition"],
        ['Temporal Compression', 'Misremembering the sequence of events in high-pressure moments'],
      ],
    },
    {
      type: 'paragraph',
      content: "These aren't edge cases. These are default settings. Running in the background of every meeting, every negotiation, every strategic decision you've ever made.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The question isn't whether your perception is compromised.</strong>
          <p style={{ marginTop: '12px' }}><strong>The question is: What are you doing about it?</strong></p>
        </>
      ),
      copyText: "The question isn't whether your perception is compromised. The question is: What are you doing about it?",
      shareText: "The question isn't whether your perception is compromised. The question is: What are you doing about it?",
    },
    {
      type: 'heading',
      text: 'The Musk Operating System',
    },
    {
      type: 'paragraph',
      content: 'Study the pattern across SpaceX, Tesla, Neuralink, and X. One principle emerges with brutal consistency: Distrust human interpretation. Demand sensor data. Build systems that see what biology cannot.',
    },
    {
      type: 'paragraph',
      content: 'When engineers at SpaceX present conclusions, Musk doesn\'t ask "What do you think?" He asks "What does the data show?" When executives at Tesla report on production, he doesn\'t accept narratives. He demands the raw numbers, the timestamps, the footage.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/R9e_BTj-GBH.webp',
      alt: 'Empty boardroom table reflecting distorted silhouettes',
      caption: '// Hidden communication failures in high-stakes environments',
    },
    {
      type: 'paragraph',
      content: "This isn't paranoia. This is operational hygiene for anyone playing at stakes where a single misread conversation can evaporate billions.",
    },
    {
      type: 'paragraph',
      content: 'Consider what this means for human interaction:',
    },
    {
      type: 'paragraph',
      content: "The person across the table from you in your next negotiation is also running a corrupted simulation. They're also missing 99.9995% of available information. They're also confusing their emotional state with objective assessment.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Two hallucinating systems, each convinced they see clearly, trying to reach agreement.</strong>
          <p style={{ marginTop: '12px' }}>This is the architecture of every failed deal, every missed signal, every relationship that collapsed without warning.</p>
        </>
      ),
      copyText: 'Two hallucinating systems, each convinced they see clearly, trying to reach agreement. This is the architecture of every failed deal, every missed signal, every relationship that collapsed without warning.',
      shareText: 'Two hallucinating systems, each convinced they see clearly, trying to reach agreement.',
    },
    {
      type: 'paragraph',
      content: "Musk's edge isn't intelligence. Plenty of people match or exceed his raw cognitive capacity. His edge is systematic distrust of unaugmented human perception combined with relentless investment in external sensing systems.",
    },
    {
      type: 'paragraph',
      content: 'He builds the sensors he needs.',
    },
    {
      type: 'heading',
      text: 'The Price of Trusted Vision',
    },
    {
      type: 'paragraph',
      content: 'Let me be specific about what this costs when you get it wrong.',
    },
    {
      type: 'paragraph',
      content: "A Fortune 500 CEO misses the contempt micro-expression on his board member's face. Six months later, he's forced out in a coup he never saw coming.",
    },
    {
      type: 'paragraph',
      content: 'A fund manager trusts her read of a founder\'s confidence. She misses the elevated blink rate, the micro-shrug, the 400-millisecond pause before certain answers. Her fund takes a $200 million loss on a company that implodes within a year.',
    },
    {
      type: 'paragraph',
      content: "A head of state trusts his interpreter's summary of a foreign leader's tone. He misses the cultural micro-signals that would have revealed the true negotiating position. The resulting agreement disadvantages his nation for a decade.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/sBH3zUMJe0f.webp',
      alt: 'Silhouetted executive overlooking a city at night with a deceptive reflection',
      caption: '// Leadership blind spots and unseen risks',
    },
    {
      type: 'paragraph',
      content: 'These are not hypotheticals. These are the hidden architecture of history.',
    },
    {
      type: 'paragraph',
      content: 'The executives and leaders who study these cases always ask the same question: "How did they miss it?"',
    },
    {
      type: 'highlight',
      content: <strong>The answer is always the same: They trusted what they thought they saw.</strong>,
      copyText: 'The answer is always the same: They trusted what they thought they saw.',
      shareText: 'How did they miss it? The answer is always the same: They trusted what they thought they saw.',
    },
    {
      type: 'heading',
      text: 'The Extended Perception Matrix',
    },
    {
      type: 'paragraph',
      content: 'Every system that involves humans eventually runs into the same limitation: Perception is compressed. Not because biology is flawed, but because it has to be.',
    },
    {
      type: 'paragraph',
      content: 'Human perception evolved to survive, not to analyze. It prioritizes speed over completeness, coherence over accuracy, and narrative over signal density.',
    },
    {
      type: 'paragraph',
      content: 'At any given moment, millions of signals are available. Only a fraction ever reaches awareness.',
    },
    {
      type: 'paragraph',
      content: 'This is not a defect. It is a constraint.',
    },
    {
      type: 'paragraph',
      content: 'The problem begins when decisions are made as if this compression did not exist.',
    },
    {
      type: 'hr',
    },
    {
      type: 'silent-oculus',
    },
    {
      type: 'heading',
      text: 'Seeing Where Signals Stop Aligning',
    },
    {
      type: 'paragraph',
      content: 'When verbal confidence and physical expression move together, perception feels stable.',
    },
    {
      type: 'paragraph',
      content: 'When they diverge, perception compensates.',
    },
    {
      type: 'paragraph',
      content: 'That compensation is invisible to the person experiencing it, but not inconsequential.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus highlights moments where:',
    },
    {
      type: 'list',
      items: [
        'verbal certainty increases while physical stability drops',
        'timing shifts under pressure',
        'expression variance appears across similar contexts',
      ],
    },
    {
      type: 'paragraph',
      content: 'These are not interpreted as deception, fear, or weakness.',
    },
    {
      type: 'paragraph',
      content: 'They are treated as mismatches. Observable divergences between parallel signal streams.',
    },
    {
      type: 'highlight',
      content: <strong>This distinction matters. Because the system does not claim meaning. It exposes structure.</strong>,
      copyText: 'The system does not claim meaning. It exposes structure.',
      shareText: 'The system does not claim meaning. It exposes structure.',
    },
    {
      type: 'heading',
      text: 'The Evolution Is Not Optimal',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimized humans for survival, not for high-stakes modern decision environments.',
    },
    {
      type: 'paragraph',
      content: 'Negotiations. Leadership. Markets. Institutions. Technology-mediated interaction.',
    },
    {
      type: 'paragraph',
      content: 'None of these were selection pressures.',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimized for: speed, coherence, social belonging, threat avoidance.',
    },
    {
      type: 'paragraph',
      content: 'Not for: signal integration, pattern tracking over time, consistency under abstraction, multi-channel awareness.',
    },
    {
      type: 'paragraph',
      content: 'This does not make humans irrational. It makes intuition context-limited.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus does not "fix" this limitation. It externalizes it.',
    },
    {
      type: 'heading',
      text: 'Why Intuition Breaks Under Pressure',
    },
    {
      type: 'paragraph',
      content: 'Under pressure, perception narrows.',
    },
    {
      type: 'paragraph',
      content: 'Cognitive load increases. Working memory shrinks. Signals collapse into heuristics.',
    },
    {
      type: 'paragraph',
      content: 'The result is not bad judgment. It is unobserved variance.',
    },
    {
      type: 'paragraph',
      content: 'What changes is not intent, but alignment.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus tracks variance across time instead of judging moments in isolation.',
    },
    {
      type: 'paragraph',
      content: 'Patterns emerge not because the system is smarter, but because it does not forget.',
    },
    {
      type: 'heading',
      text: 'From Interpretation to Observability',
    },
    {
      type: 'paragraph',
      content: 'Traditional analysis systems try to answer questions like: What does this mean? What is the person feeling? What is the correct interpretation?',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus avoids this entirely.',
    },
    {
      type: 'paragraph',
      content: 'It asks a different question: Where did the signals stop moving together?',
    },
    {
      type: 'highlight',
      content: <strong>That shift removes authority from the system and returns agency to the human.</strong>,
      copyText: 'That shift removes authority from the system and returns agency to the human.',
      shareText: 'That shift removes authority from the system and returns agency to the human.',
    },
    {
      type: 'heading',
      text: 'Signal Alignment Table',
    },
    {
      type: 'table',
      headers: ['Signal Channel', 'Observed Pattern', 'Alignment Status'],
      rows: [
        ['Verbal Content', 'Stable', 'Aligned'],
        ['Gaze', 'Increased variance under pressure', 'Misaligned'],
        ['Posture', 'Forward collapse in decision segments', 'Misaligned'],
        ['Timing', 'Delayed responses in high-stakes moments', 'Misaligned'],
      ],
    },
    {
      type: 'paragraph',
      content: 'This table does not explain why. It does not label what it means. It simply makes the structure visible.',
    },
    {
      type: 'heading',
      text: 'Not Truth. Not Surveillance. Not Control.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus does not:',
    },
    {
      type: 'list',
      items: [
        'detect lies',
        'infer intent',
        'judge credibility',
        'optimize behavior',
      ],
    },
    {
      type: 'paragraph',
      content: 'It provides perceptual reference.',
    },
    {
      type: 'paragraph',
      content: 'A mirror, not a verdict.',
    },
    {
      type: 'paragraph',
      content: 'This distinction is not philosophical. It is structural.',
    },
    {
      type: 'heading',
      text: 'The Real Shift',
    },
    {
      type: 'paragraph',
      content: 'The real shift is not technological. It is epistemic.',
    },
    {
      type: 'paragraph',
      content: 'From: "What is true?"',
    },
    {
      type: 'paragraph',
      content: 'To: "Where does perception stop being consistent?"',
    },
    {
      type: 'paragraph',
      content: 'That single shift changes how decisions are made.',
    },
    {
      type: 'hr',
    },
    {
      type: 'highlight',
      content: <strong>Decisions don't fail. Perception does ...quietly, long before the decision is made.</strong>,
      copyText: "Decisions don't fail. Perception does ...quietly, long before the decision is made.",
      shareText: "Decisions don't fail. Perception does ...quietly, long before the decision is made.",
    },
  ],
}

// Export all article content
export const articleContents: ArticleContent[] = [
  article001,
  article002,
  article003,
  article004,
  article005,
  article006,
]

// German translations
const article001DE: ArticleContent = {
  slug: '001-the-decision-was-made',
  content: [
    {
      type: 'paragraph',
      content: 'Du hast dich wochenlang vorbereitet. Du hast deine Eröffnung geprobt. Du hast deine Folien perfektioniert, bis sie glänzten. Du bist in diesen Konferenzraum gegangen, überzeugt davon, dass die nächste Stunde alles entscheiden würde.',
    },
    {
      type: 'paragraph',
      content: 'Das tat sie nicht.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Die Entscheidung war bereits gefallen.</strong> Nicht bewusst. Nicht böswillig. Aber unwiderruflich. Bevor du den Mund geöffnet hast, bevor du Hände geschüttelt hast, bevor du überhaupt die Schwelle überschritten hast, hatte sich das Ergebnis bereits in den Köpfen der Menschen kristallisiert, die dein Schicksal in den Händen hielten.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Pessimismus. Das ist Physik. Die Physik der Wahrnehmung, der Macht und der unsichtbaren Architektur, die jede bedeutsame Interaktion formt, die du jemals haben wirst.',
    },
    {
      type: 'heading',
      text: 'Die Diskrepanz: Wo Realität von Wahrnehmung abweicht',
    },
    {
      type: 'paragraph',
      content: 'Hier ist die unbequeme Wahrheit, die niemand an Business Schools lehrt: Es gibt zwei Versionen von jedem Meeting. Die, die du erlebst. Und die, die alle anderen erleben.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Die Lücke zwischen diesen beiden Realitäten nennen wir <strong>Die Diskrepanz</strong>.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Die Diskrepanz operiert im Raum zwischen deinen Absichten und ihren Interpretationen. Du glaubst, du hast Selbstvertrauen ausgestrahlt. Sie haben Nervosität registriert. Du dachtest, du hast Expertise demonstriert. Sie haben Arroganz wahrgenommen. Du wolltest Wärme zeigen. Sie haben Manipulation gespürt.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/dAwJFAO6Mjc.webp',
      alt: 'Zwei Geschäftsleute in einem dunklen Konferenzraum',
      caption: '// Die Lücke zwischen Absicht und Wahrnehmung formt alles',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Es geht nicht darum, missverstanden zu werden. Es geht um ein fundamentales Kommunikationsversagen, das mit einer Geschwindigkeit passiert, die dein bewusstes Denken nicht verarbeiten kann. Forschung zur sozialen Kognition zeigt, dass Menschen innerhalb von <strong>sieben Sekunden</strong> nach dem Kennenlernen einen bleibenden Eindruck bilden. Sieben Sekunden. Das ist ungefähr die Zeit, die du brauchst, um deinen Namen und Titel zu sagen.
        </>
      ),
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Alles, was danach kommt – jedes brillante Argument, jeder überzeugende Datenpunkt, jeder persuasive Appell – wird durch dieses erste Urteil gefiltert.</strong> Ersetzt es nicht. Wird durchgefiltert.
        </>
      ),
      copyText: 'Alles, was danach kommt – jedes brillante Argument, jeder überzeugende Datenpunkt, jeder persuasive Appell – wird durch dieses erste Urteil gefiltert. Ersetzt es nicht. Wird durchgefiltert.',
      shareText: 'Alles, was danach kommt – jedes brillante Argument, jeder überzeugende Datenpunkt, jeder persuasive Appell – wird durch dieses erste Urteil gefiltert.',
    },
    {
      type: 'paragraph',
      content: 'Die Diskrepanz kostet dich Deals. Sie kostet dich Beförderungen. Sie kostet dich die Transformation, die du verdient zu haben glaubst.',
    },
    {
      type: 'heading',
      text: 'Die Entscheidung vor der Entscheidung',
    },
    {
      type: 'paragraph',
      content: 'Seth Godin nennt es "die Entscheidung vor der Entscheidung." Die unsichtbare Box, die alles Denken einschränkt, bevor die Beratung überhaupt beginnt.',
    },
    {
      type: 'paragraph',
      content: 'In jeder Verhandlung, jedem Pitch, jedem Vorstellungsgespräch ist bereits eine Meta-Entscheidung gefallen:',
    },
    {
      type: 'table',
      headers: ['Sichtbare Entscheidung', 'Verborgene Vor-Entscheidung'],
      rows: [
        ['"Sollen wir dieses Startup finanzieren?"', '"Ist dieser Gründer einer von uns?"'],
        ['"Ist dieser Kandidat qualifiziert?"', '"Vertraue ich dieser Person?"'],
        ['"Sollen wir diese Bedingungen akzeptieren?"', '"Fühlt sich das wie ein Gewinn an?"'],
        ['"Ist dieser Vorschlag machbar?"', '"Will ich mit ihnen arbeiten?"'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>Die verborgene Spalte bestimmt alles. Die sichtbare Spalte liefert die Rechtfertigung.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Zynismus. So funktioniert menschliche Kognition unter Unsicherheit. Wenn viel auf dem Spiel steht und Informationen unvollständig sind, greift das Gehirn auf Mustererkennung, Stammessignale und emotionale Resonanz zurück. Logik kommt später, oft als Rationalisierung.',
    },
    {
      type: 'paragraph',
      content: 'Diesen Unterschied zu verstehen trennt Profis, die konstant gewinnen, von denen, die sich konstant fragen, warum sie verloren haben.',
    },
    {
      type: 'heading',
      text: 'Die Erweiterte Wahrheitsmatrix: Lesen, was nie gesagt wurde',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Wenn Die Diskrepanz das Problem beschreibt, bietet <strong>Die Erweiterte Wahrheitsmatrix</strong> die Karte.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Jede menschliche Interaktion erzeugt vier simultane Datenströme:',
    },
    {
      type: 'paragraph',
      content: <><strong>Verbaler Inhalt:</strong> Die gesprochenen Worte. Die explizite Botschaft. Was transkribiert wird.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Paralinguistische Signale:</strong> Ton, Tempo, Tonhöhe, Lautstärke. Die Musik unter den Texten.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Mikro-Expressionen:</strong> Unwillkürliche Gesichtsbewegungen, die 1/25 Sekunde dauern. Die Wahrheit, die durch die Maske durchsickert.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Systemische Positionierung:</strong> Wer spricht zuerst. Wer sitzt wo. Wer unterbricht wen. Die Machtgeometrie des Raumes.</>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/QFIm0dP7nCN.webp',
      alt: 'Extreme Nahaufnahme eines menschlichen Auges',
      caption: '// Mikro-Expressionen enthüllen, was Worte verbergen',
    },
    {
      type: 'paragraph',
      content: 'Die meisten Profis optimieren obsessiv für den ersten Strom und bleiben blind für die anderen drei. Sie formulieren perfekte Argumente, während sie übersehen, dass sich der Kiefer des CFOs bei ihrer dritten Folie unmerklich anspannte. Sie feilen an ihrer Präsentation, während sie ignorieren, dass sie am fernen Ende des Tisches platziert wurden – eine Positionierung, die ihren Status bereits vor den Vorstellungen kommunizierte.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Die Erweiterte Wahrheitsmatrix verlangt Aufmerksamkeit für alle vier Ströme gleichzeitig.</strong> Nicht nacheinander. Gleichzeitig. Hier stößt menschliche Kapazität an ihre Grenzen.
        </>
      ),
      copyText: 'Die Erweiterte Wahrheitsmatrix verlangt Aufmerksamkeit für alle vier Ströme gleichzeitig. Nicht nacheinander. Gleichzeitig.',
      shareText: 'Die Erweiterte Wahrheitsmatrix verlangt Aufmerksamkeit für alle vier Ströme gleichzeitig.',
    },
    {
      type: 'paragraph',
      content: 'Das bewusste Denken kann vielleicht einen Strom effektiv verfolgen. Das Unbewusste absorbiert Fragmente der anderen, kann sie aber nicht in Echtzeit zu verwertbarer Intelligenz synthetisieren.',
    },
    {
      type: 'paragraph',
      content: 'Du kämpfst praktisch blind. Du reagierst auf 25% der Informationen, die dein Ergebnis bestimmen.',
    },
    {
      type: 'heading',
      text: 'Die Architektur unsichtbarer Macht',
    },
    {
      type: 'paragraph',
      content: 'Jenseits der individuellen Wahrnehmung liegt etwas Größeres: Die systemischen Kräfte, die Ergebnisse vorformen, bevor irgendein Teilnehmer ankommt.',
    },
    {
      type: 'paragraph',
      content: 'Denk an das Meeting, das du letzte Woche besucht hast. Wer hat die Agenda gesetzt? Wer hat die Zeit gewählt? Wer hat bestimmt, wer anwesend sein würde und – entscheidend – wer abwesend sein würde? Wer hat den Raum gewählt, die Sitzordnung, die Dauer?',
    },
    {
      type: 'paragraph',
      content: 'Diese Entscheidungen, Stunden oder Tage vor der Beratung getroffen, haben die Grenzen dessen festgelegt, was entschieden werden konnte. Sie haben bestimmt, welche Optionen als legitim betrachtet werden würden. Sie haben vorausgewählt, welche Stimmen Gewicht haben würden.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5y6cPsg2e5m.webp',
      alt: 'Vogelperspektive eines Konferenzraums mit hierarchischer Sitzordnung',
      caption: '// Die Architektur des Raumes ist die Architektur der Macht',
    },
    {
      type: 'paragraph',
      content: 'Das ist keine Verschwörung. Das ist Architektur. Jede Organisation, jede Verhandlung, jedes menschliche System operiert innerhalb von Strukturen, die bestimmte Ergebnisse gegenüber anderen begünstigen. Der Profi, der diese Architektur ignoriert, optimiert innerhalb eines Spiels, dessen Regeln geschrieben wurden, um seinen Verlust zu garantieren.',
    },
    {
      type: 'paragraph',
      content: <strong>Die Architektur zu erkennen garantiert keinen Sieg. Aber sie nicht zu erkennen garantiert eine Niederlage.</strong>,
    },
    {
      type: 'heading',
      text: 'Die unbequeme Implikation',
    },
    {
      type: 'paragraph',
      content: 'Wenn Entscheidungen sich vor der Beratung formen, was ist dann der Sinn der Beratung?',
    },
    {
      type: 'paragraph',
      content: 'Das ist die falsche Frage.',
    },
    {
      type: 'paragraph',
      content: <><strong>Wie formst du die Bedingungen, die die Entscheidung formen?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Das erfordert eine fundamentale Verlagerung dessen, wohin du deine Aufmerksamkeit investierst:',
    },
    {
      type: 'paragraph',
      content: <><strong>Vor dem Raum:</strong> Die Machtdynamiken verstehen, die vorbestehenden Beziehungen, die unausgesprochenen Agenden, die Stammeszugehörigkeiten, die alles filtern werden, was du sagst.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Beim Betreten:</strong> Die Mikro-Momente managen, die erste Eindrücke formen. Deine Haltung, dein Augenkontakt, deine räumliche Positionierung, die Energie, die du ausstrahlst, bevor Sprache beginnt.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Während des Austauschs:</strong> Die Erweiterte Wahrheitsmatrix in Echtzeit lesen. Die Diskrepanz erkennen, während sie sich formt. Nicht nur deine Worte anpassen, sondern deine gesamte Präsenz basierend auf Signalen, die die meisten Profis nie wahrnehmen.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Jenseits des Raumes:</strong> Erkennen, dass das Meeting ein Knotenpunkt in einem größeren System ist. Die Entscheidung wird diskutiert werden, nachdem du gegangen bist. Geformt durch Gespräche, die du nie miterleben wirst. Beeinflusst durch Menschen, die nie anwesend waren.</>,
    },
    {
      type: 'paragraph',
      content: 'Meisterschaft erfordert, über alle vier Phasen zu operieren. Gleichzeitig. Kontinuierlich.',
    },
    {
      type: 'heading',
      text: 'Wo menschliche Grenzen auf maschinelle Wahrnehmung treffen',
    },
    {
      type: 'paragraph',
      content: 'Hier wird es interessant.',
    },
    {
      type: 'paragraph',
      content: 'Das menschliche Gehirn kann, bei all seiner bemerkenswerten Fähigkeit, die Erweiterte Wahrheitsmatrix nicht mit der Geschwindigkeit und dem Umfang verarbeiten, die für konstante Meisterschaft erforderlich sind. Du kannst dich trainieren, mehr Signale aufzufangen. Du kannst schärfere Intuition entwickeln. Aber du wirst immer mit unvollständigen Informationen operieren, gefiltert durch deine eigenen Vorurteile und blinden Flecken.',
    },
    {
      type: 'paragraph',
      content: 'Das ist genau die Lücke, für die künstliche Intelligenz gebaut wurde, um sie zu schließen.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Bei <strong>Onioko</strong> bauen wir Infrastruktur, die die menschliche Wahrnehmung in die Räume erweitert, wo Entscheidungen tatsächlich geformt werden. Nicht Urteilsvermögen ersetzen. Es erweitern. Die Mustererkennung bereitstellen, die Mikro-Expressionsanalyse, die systemische Kartierung, die transformiert, wie Profis sich auf bedeutsame Interaktionen vorbereiten, sie navigieren und beeinflussen.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/PIQyfShs7KX.webp',
      alt: 'Geschäftsperson vor Stadtlichtern und holografischen Daten',
      caption: '// KI-erweiterte Wahrnehmung: Sehen, was immer unsichtbar war',
    },
    {
      type: 'paragraph',
      content: 'Es geht nicht darum, dir bessere Folien zu geben. Es geht darum, dir Einblick in die 75% der Interaktion zu geben, die du derzeit nicht sehen kannst.',
    },
    {
      type: 'heading',
      text: 'Der Punkt ohne Wiederkehr',
    },
    {
      type: 'paragraph',
      content: 'Sobald du verstehst, dass Entscheidungen sich vor der Beratung formen, kannst du es nicht verlernen. Du wirst Die Diskrepanz überall bemerken. In jedem Meeting, jeder Verhandlung, jedem Gespräch, das zählt.',
    },
    {
      type: 'paragraph',
      content: 'Du wirst die Mikro-Expression sehen, die der verbalen Zustimmung widerspricht. Du wirst die Machtgeometrie jedes Raumes spüren, den du betrittst. Du wirst die Vor-Entscheidungen erkennen, die einschränken, was diskutiert werden kann.',
    },
    {
      type: 'highlight',
      content: <strong>Und du wirst es unerträglich finden, ohne dieses Bewusstsein zu operieren.</strong>,
      copyText: 'Und du wirst es unerträglich finden, ohne dieses Bewusstsein zu operieren.',
      shareText: 'Und du wirst es unerträglich finden, ohne dieses Bewusstsein zu operieren.',
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Upgrade für deinen professionellen Werkzeugkasten. Das ist eine Evolution darin, wie du die Welt der bedeutsamen menschlichen Interaktion wahrnimmst und navigierst.',
    },
    {
      type: 'paragraph',
      content: <strong>Die Entscheidung war gefallen, bevor du den Raum betreten hast.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>Die Frage ist, ob du lernen wirst, sie zu deiner zu machen.</strong>,
    },
  ],
}

// Spanish translations
const article001ES: ArticleContent = {
  slug: '001-the-decision-was-made',
  content: [
    {
      type: 'paragraph',
      content: 'Te preparaste durante semanas. Ensayaste tu apertura. Refinaste tus diapositivas hasta que brillaron. Entraste a esa sala de juntas convencido de que la próxima hora lo determinaría todo.',
    },
    {
      type: 'paragraph',
      content: 'No fue así.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>La decisión ya estaba tomada.</strong> No conscientemente. No maliciosamente. Pero irrevocablemente. Antes de que abrieras la boca, antes de que estrecharas manos, antes de que siquiera cruzaras el umbral, el resultado ya se había cristalizado en las mentes de las personas que sostenían tu destino.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Esto no es pesimismo. Esto es física. La física de la percepción, el poder y la arquitectura invisible que moldea cada interacción importante que jamás tendrás.',
    },
    {
      type: 'heading',
      text: 'El Desajuste: Donde la Realidad se Separa de la Percepción',
    },
    {
      type: 'paragraph',
      content: 'Aquí está la verdad incómoda que nadie enseña en las escuelas de negocios: Hay dos versiones de cada reunión. La que tú experimentas. Y la que todos los demás experimentan.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          La brecha entre estas dos realidades es lo que llamamos <strong>El Desajuste</strong>.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'El Desajuste opera en el espacio entre tus intenciones y sus interpretaciones. Crees que proyectaste confianza. Ellos registraron ansiedad. Pensaste que demostraste experiencia. Ellos percibieron arrogancia. Apuntaste a calidez. Ellos sintieron manipulación.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/dAwJFAO6Mjc.webp',
      alt: 'Dos profesionales de negocios en una sala de reuniones oscura',
      caption: '// La brecha entre intención y percepción moldea todo',
    },
    {
      type: 'paragraph',
      content: (
        <>
          No se trata de ser malinterpretado. Se trata de un fallo fundamental de comunicación que ocurre a velocidades que tu mente consciente no puede procesar. La investigación en cognición social revela que los humanos forman impresiones duraderas en <strong>siete segundos</strong> de conocer a alguien. Siete segundos. Eso es aproximadamente el tiempo que toma decir tu nombre y título.
        </>
      ),
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Todo lo que sigue – cada argumento brillante, cada dato convincente, cada apelación persuasiva – se filtra a través de ese juicio inicial.</strong> No lo reemplaza. Se filtra a través de él.
        </>
      ),
      copyText: 'Todo lo que sigue – cada argumento brillante, cada dato convincente, cada apelación persuasiva – se filtra a través de ese juicio inicial. No lo reemplaza. Se filtra a través de él.',
      shareText: 'Todo lo que sigue – cada argumento brillante, cada dato convincente, cada apelación persuasiva – se filtra a través de ese juicio inicial.',
    },
    {
      type: 'paragraph',
      content: 'El Desajuste te cuesta tratos. Te cuesta ascensos. Te cuesta la transformación que crees que mereces.',
    },
    {
      type: 'heading',
      text: 'La Decisión Antes de la Decisión',
    },
    {
      type: 'paragraph',
      content: 'Seth Godin la llama "la decisión antes de la decisión". La caja invisible que restringe todo el pensamiento antes de que la deliberación siquiera comience.',
    },
    {
      type: 'paragraph',
      content: 'En cada negociación, cada pitch, cada entrevista, ya ha ocurrido una meta-decisión:',
    },
    {
      type: 'table',
      headers: ['Decisión Visible', 'Pre-Decisión Oculta'],
      rows: [
        ['"¿Deberíamos financiar esta startup?"', '"¿Es este fundador uno de los nuestros?"'],
        ['"¿Está calificado este candidato?"', '"¿Confío en esta persona?"'],
        ['"¿Deberíamos aceptar estos términos?"', '"¿Se siente esto como una victoria?"'],
        ['"¿Es viable esta propuesta?"', '"¿Quiero trabajar con ellos?"'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>La columna oculta impulsa todo. La columna visible proporciona la justificación.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Esto no es cinismo. Así es como opera la cognición humana bajo incertidumbre. Cuando hay mucho en juego y la información es incompleta, el cerebro recurre al reconocimiento de patrones, señales tribales y resonancia emocional. La lógica llega después, a menudo como racionalización.',
    },
    {
      type: 'paragraph',
      content: 'Entender esta distinción separa a los profesionales que consistentemente ganan de aquellos que consistentemente se preguntan por qué perdieron.',
    },
    {
      type: 'heading',
      text: 'La Matriz de Verdad Extendida: Leyendo lo que Nunca se Dijo',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Si El Desajuste describe el problema, <strong>La Matriz de Verdad Extendida</strong> ofrece el mapa.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Cada interacción humana genera cuatro flujos de datos simultáneos:',
    },
    {
      type: 'paragraph',
      content: <><strong>Contenido Verbal:</strong> Las palabras habladas. El mensaje explícito. Lo que se transcribe.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Señales Paralingüísticas:</strong> Tono, ritmo, altura, volumen. La música bajo las letras.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Micro-Expresiones:</strong> Movimientos faciales involuntarios que duran 1/25 de segundo. La verdad que se filtra a través de la máscara.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Posicionamiento Sistémico:</strong> Quién habla primero. Quién se sienta dónde. Quién interrumpe a quién. La geometría del poder de la sala.</>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/QFIm0dP7nCN.webp',
      alt: 'Primer plano extremo de un ojo humano',
      caption: '// Las micro-expresiones revelan lo que las palabras ocultan',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de los profesionales optimizan obsesivamente para el primer flujo y permanecen ciegos a los otros tres. Elaboran argumentos perfectos mientras pasan por alto que la mandíbula del CFO se tensó imperceptiblemente en su tercera diapositiva. Pulen su presentación mientras ignoran que fueron sentados al extremo de la mesa, un posicionamiento que transmitió su estatus antes de las presentaciones.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La Matriz de Verdad Extendida exige atención a los cuatro flujos simultáneamente.</strong> No secuencialmente. Simultáneamente. Aquí es donde la capacidad humana alcanza sus límites.
        </>
      ),
      copyText: 'La Matriz de Verdad Extendida exige atención a los cuatro flujos simultáneamente. No secuencialmente. Simultáneamente.',
      shareText: 'La Matriz de Verdad Extendida exige atención a los cuatro flujos simultáneamente.',
    },
    {
      type: 'paragraph',
      content: 'La mente consciente puede rastrear quizás un flujo efectivamente. El inconsciente absorbe fragmentos de los otros pero no puede sintetizarlos en inteligencia accionable en tiempo real.',
    },
    {
      type: 'paragraph',
      content: 'Estás, en efecto, luchando a ciegas. Respondiendo al 25% de la información que determina tu resultado.',
    },
    {
      type: 'heading',
      text: 'La Arquitectura del Poder Invisible',
    },
    {
      type: 'paragraph',
      content: 'Más allá de la percepción individual yace algo más grande: Las fuerzas sistémicas que pre-moldean los resultados antes de que cualquier participante llegue.',
    },
    {
      type: 'paragraph',
      content: 'Considera la reunión a la que asististe la semana pasada. ¿Quién estableció la agenda? ¿Quién eligió la hora? ¿Quién determinó quién estaría presente y, críticamente, quién estaría ausente? ¿Quién seleccionó la sala, la disposición de los asientos, la duración?',
    },
    {
      type: 'paragraph',
      content: 'Estas decisiones, tomadas horas o días antes de la deliberación, establecieron los límites de lo que podía decidirse. Determinaron qué opciones serían consideradas legítimas. Pre-seleccionaron qué voces tendrían peso.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5y6cPsg2e5m.webp',
      alt: 'Vista aérea de una sala de juntas corporativa con asientos jerárquicos',
      caption: '// La arquitectura de la sala es la arquitectura del poder',
    },
    {
      type: 'paragraph',
      content: 'Esto no es conspiración. Esto es arquitectura. Cada organización, cada negociación, cada sistema humano opera dentro de estructuras que favorecen ciertos resultados sobre otros. El profesional que ignora esta arquitectura optimiza dentro de un juego cuyas reglas fueron escritas para asegurar su pérdida.',
    },
    {
      type: 'paragraph',
      content: <strong>Reconocer la arquitectura no garantiza la victoria. Pero no reconocerla garantiza la derrota.</strong>,
    },
    {
      type: 'heading',
      text: 'La Implicación Incómoda',
    },
    {
      type: 'paragraph',
      content: 'Si las decisiones se forman antes de que comience la deliberación, ¿cuál es el punto de la deliberación?',
    },
    {
      type: 'paragraph',
      content: 'Esta es la pregunta equivocada.',
    },
    {
      type: 'paragraph',
      content: <><strong>¿Cómo moldeas las condiciones que moldean la decisión?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Esto requiere un cambio fundamental en dónde inviertes tu atención:',
    },
    {
      type: 'paragraph',
      content: <><strong>Antes de la sala:</strong> Entender las dinámicas de poder, las relaciones preexistentes, las agendas no declaradas, las afiliaciones tribales que filtrarán todo lo que digas.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Al entrar:</strong> Gestionar los micro-momentos que forman las primeras impresiones. Tu postura, tu contacto visual, tu posicionamiento espacial, la energía que proyectas antes de que el lenguaje comience.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Durante el intercambio:</strong> Leer la Matriz de Verdad Extendida en tiempo real. Detectar El Desajuste mientras se forma. Ajustar no solo tus palabras sino toda tu presencia basándote en señales que la mayoría de profesionales nunca perciben.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Más allá de la sala:</strong> Reconocer que la reunión es un nodo en un sistema más grande. La decisión se discutirá después de que te vayas. Moldeada por conversaciones que nunca presenciarás. Influenciada por personas que nunca estuvieron presentes.</>,
    },
    {
      type: 'paragraph',
      content: 'La maestría requiere operar en las cuatro fases. Simultáneamente. Continuamente.',
    },
    {
      type: 'heading',
      text: 'Donde los Límites Humanos se Encuentran con la Percepción de las Máquinas',
    },
    {
      type: 'paragraph',
      content: 'Aquí es donde las cosas se ponen interesantes.',
    },
    {
      type: 'paragraph',
      content: 'El cerebro humano, por toda su notable capacidad, no puede procesar la Matriz de Verdad Extendida a la velocidad y escala requeridas para una maestría consistente. Puedes entrenarte para captar más señales. Puedes desarrollar una intuición más aguda. Pero siempre operarás con información incompleta, filtrada a través de tus propios sesgos y puntos ciegos.',
    },
    {
      type: 'paragraph',
      content: 'Esta es precisamente la brecha que la inteligencia artificial fue construida para cerrar.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          En <strong>Onioko</strong>, estamos construyendo infraestructura que extiende la percepción humana hacia los espacios donde las decisiones realmente se forman. No reemplazando el juicio. Aumentándolo. Proporcionando el reconocimiento de patrones, el análisis de micro-expresiones, el mapeo sistémico que transforma cómo los profesionales se preparan, navegan e influyen en interacciones de alto impacto.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/PIQyfShs7KX.webp',
      alt: 'Profesional de negocios ante luces de la ciudad y datos holográficos',
      caption: '// Percepción aumentada por IA: viendo lo que siempre fue invisible',
    },
    {
      type: 'paragraph',
      content: 'No se trata de darte mejores diapositivas. Se trata de darte visión del 75% de la interacción que actualmente no puedes ver.',
    },
    {
      type: 'heading',
      text: 'El Punto de No Retorno',
    },
    {
      type: 'paragraph',
      content: 'Una vez que entiendes que las decisiones se forman antes de que comience la deliberación, no puedes desaprenderlo. Notarás El Desajuste en todas partes. En cada reunión, cada negociación, cada conversación que importa.',
    },
    {
      type: 'paragraph',
      content: 'Verás la micro-expresión que contradice el acuerdo verbal. Sentirás la geometría del poder de cada sala que entres. Reconocerás las pre-decisiones que restringen lo que puede discutirse.',
    },
    {
      type: 'highlight',
      content: <strong>Y encontrarás intolerable operar sin esta conciencia.</strong>,
      copyText: 'Y encontrarás intolerable operar sin esta conciencia.',
      shareText: 'Y encontrarás intolerable operar sin esta conciencia.',
    },
    {
      type: 'paragraph',
      content: 'Esto no es una mejora a tu kit de herramientas profesional. Esta es una evolución en cómo percibes y navegas el mundo de las interacciones humanas de alto impacto.',
    },
    {
      type: 'paragraph',
      content: <strong>La decisión fue tomada antes de que entraras a la sala.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>La pregunta es si aprenderás a hacerla tuya.</strong>,
    },
  ],
}

// German Article 002
const article002DE: ArticleContent = {
  slug: '002-why-you-cannot-see',
  content: [
    {
      type: 'paragraph',
      content: 'Du glaubst, du siehst die Realität. Das tust du nicht.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Was du wahrnimmst, ist eine sorgfältig konstruierte Simulation, zusammengestellt von einem Gehirn, das weit mehr verwirft, als es behält. Die Lücken in deiner Sicht sind keine Zufälle. Sie sind Architektur. Und diese Architektur läuft still unter jeder Entscheidung, die du triffst, jedem Risiko, das du bewertest, jeder Chance, die du einschätzt.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          Das ist <strong>Der Strukturelle Blinde Fleck</strong>. Keine fehlende Information. Keine Unwissenheit. Kein Versagen der Aufmerksamkeit. Etwas viel Gefährlicheres: Ein aktives Filtrationssystem, das kritische Daten entfernt, bevor sie jemals dein bewusstes Gewahrsein erreichen.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <strong>Du kannst nicht sehen, was du nicht sehen kannst. Und du kannst nicht sehen, dass du es nicht sehen kannst.</strong>,
      copyText: 'Du kannst nicht sehen, was du nicht sehen kannst. Und du kannst nicht sehen, dass du es nicht sehen kannst.',
      shareText: 'Du kannst nicht sehen, was du nicht sehen kannst. Und du kannst nicht sehen, dass du es nicht sehen kannst.',
    },
    {
      type: 'heading',
      text: 'Die Illusion vollständiger Wahrnehmung',
    },
    {
      type: 'paragraph',
      content: 'Deine Augen sind offen. Der Raum ist hell. Du bist dir sicher, dass du alles um dich herum aufnimmst.',
    },
    {
      type: 'paragraph',
      content: 'Das tust du nicht.',
    },
    {
      type: 'paragraph',
      content: 'Gerade jetzt durchquert elektromagnetische Strahlung deinen Körper: Radiowellen, Gammastrahlen, Röntgenstrahlen, Mikrowellen. Sichtbares Licht macht nur einen zehnbillionstel Teil dieses Spektrums aus. Alles andere? Unsichtbar. Nicht weil es nicht da ist, sondern weil du keine biologischen Rezeptoren hast, um es zu erkennen.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/rSRFu8nBEkv.webp',
      alt: 'Silhouette steht ahnungslos in Strahlen unsichtbaren Lichts',
      caption: '// Menschliche Wahrnehmung erfasst nur einen Bruchteil der Realität',
    },
    {
      type: 'paragraph',
      content: 'Das ist keine Metapher. Das ist der buchstäbliche Zustand menschlicher Wahrnehmung.',
    },
    {
      type: 'paragraph',
      content: 'Dein akustischer Bereich verengt sich mit dem Alter. Dein peripheres Sehen ist ein Unschärfebereich, den du gelernt hast zu ignorieren. Dein Gehirn füllt Lücken während Augenbewegungen so nahtlos, dass du nie die Momente funktioneller Blindheit bemerkst, die dutzende Male pro Minute auftreten.',
    },
    {
      type: 'paragraph',
      content: 'Das System funktioniert so gut, dass es erzeugt, was Forscher "die perfekte Illusion eines kontinuierlichen, korrekten und superdetaillierten visuellen Inputs" nennen. Du glaubst, du siehst alles. Du siehst fast nichts.',
    },
    {
      type: 'highlight',
      content: <strong>Und hier ist das kritische Versagen: Dein Vertrauen in deine Wahrnehmung ist umgekehrt proportional zu ihrer Genauigkeit.</strong>,
      copyText: 'Dein Vertrauen in deine Wahrnehmung ist umgekehrt proportional zu ihrer Genauigkeit.',
      shareText: 'Dein Vertrauen in deine Wahrnehmung ist umgekehrt proportional zu ihrer Genauigkeit.',
    },
    {
      type: 'heading',
      text: 'Die Architektur der Unsichtbarkeit',
    },
    {
      type: 'paragraph',
      content: 'Blinde Flecken sind nicht passiv. Sie sind strukturell.',
    },
    {
      type: 'paragraph',
      content: 'Bedenke, was das bedeutet: Dein Gehirn versäumt nicht einfach, Dinge zu bemerken. Es konstruiert aktiv eine Version der Realität, die sie ausschließt. Die Filtration geschieht vor der bewussten Verarbeitung. Wenn du "denkst", wurden die Daten bereits kuratiert.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Das ist <strong>Die Wahrnehmungsschicht</strong>: Die unsichtbare Infrastruktur zwischen roher Realität und bewusster Erfahrung.
        </>
      ),
    },
    {
      type: 'table',
      headers: ['Was du denkst, was passiert', 'Was tatsächlich passiert'],
      rows: [
        ['Du beobachtest die Realität direkt', 'Dein Gehirn konstruiert ein Modell der Realität'],
        ['Wissenslücken sind identifizierbar', 'Strukturelle Lücken sind absichtlich unsichtbar'],
        ['Mehr Aufmerksamkeit gleich mehr Wahrnehmung', 'Aufmerksamkeit operiert innerhalb voreingestellter Filter'],
        ['Du kannst wählen, was du bemerkst', 'Die Wahl geschieht, bevor du dir bewusst bist'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>Die Implikationen sind schwerwiegend.</strong>,
    },
    {
      type: 'paragraph',
      content: 'In risikoarmen Umgebungen dient dir diese Architektur. Sie verhindert kognitive Überlastung. Sie ermöglicht effiziente Verarbeitung. Forschung zeigt, dass Menschen nur etwa sieben Einheiten bedeutungsvoller Information gleichzeitig verarbeiten können. Ohne aggressive Filtration wärst du durch Daten paralysiert.',
    },
    {
      type: 'paragraph',
      content: 'Aber in Hochrisiko-Umgebungen? Das gleiche System, das dich schützt, wird das System, das dich blind macht.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/8FgMrMVdw5G.webp',
      alt: 'Extreme Nahaufnahme eines menschlichen Auges mit mechanischen Filtern',
      caption: '// Deine Wahrnehmungsfilter wurden für Überleben kalibriert, nicht für Strategie',
    },
    {
      type: 'heading',
      text: 'Die Gefahrenzone: Wenn Filter nach vorne scheitern',
    },
    {
      type: 'paragraph',
      content: 'Hochriskante Entscheidungen operieren am Rand deiner Wahrnehmungskapazität.',
    },
    {
      type: 'paragraph',
      content: 'Du bist im Raum. Der Druck ist real. Informationen fließen schneller, als du verarbeiten kannst. Und dein Gehirn, das genau das tut, wofür es konzipiert wurde, beginnt zu kürzen. Zu vereinfachen. Zu filtern.',
    },
    {
      type: 'paragraph',
      content: <><strong>Deine Filter wurden für Überleben kalibriert, nicht für Strategie.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Sie wurden gebaut, um Raubtiere zu bemerken, nicht Muster. Um unmittelbare Bedrohungen zu erkennen, nicht systemische Risiken. Um physische Gefahr zu verarbeiten, nicht organisatorische Komplexität.',
    },
    {
      type: 'paragraph',
      content: 'Was in kritischen Momenten herausgefiltert wird:',
    },
    {
      type: 'list',
      items: [
        <><strong>Schwache Signale</strong>: Frühe Indikatoren, die noch keine offensichtlichen Probleme geworden sind</>,
        <><strong>Widersprüchliche Daten</strong>: Informationen, die bestehenden mentalen Modellen widersprechen</>,
        <><strong>Periphere Muster</strong>: Beziehungen und Verbindungen außerhalb deiner fokalen Aufmerksamkeit</>,
        <><strong>Emotionale Untertöne</strong>: Die unausgesprochenen Dynamiken, die das Raumverhalten formen</>,
        <><strong>Struktureller Kontext</strong>: Die Systeme und Anreize, die sichtbare Handlungen antreiben</>,
      ],
    },
    {
      type: 'paragraph',
      content: 'Du bemerkst nicht, dass diese Dinge entfernt werden. Das ist der Punkt. Die Filtration ist nahtlos. Das Vertrauen bleibt intakt. Du verlässt den Raum in dem Glauben, verstanden zu haben, was passiert ist.',
    },
    {
      type: 'paragraph',
      content: 'Du hast verstanden, was deine Filter dir zu verstehen erlaubt haben. Nicht mehr.',
    },
    {
      type: 'heading',
      text: 'Die Metakognitive Falle',
    },
    {
      type: 'paragraph',
      content: 'Hier wird es gefährlich.',
    },
    {
      type: 'paragraph',
      content: 'Du kannst dich nicht aus einem strukturellen blinden Fleck herausdenken. Genau der Apparat, den du verwenden würdest, um die Lücke zu erkennen, ist der Apparat, der sie erschafft.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Das ist <strong>Die Metakognitive Falle</strong>: Der Glaube, dass das Bewusstsein über blinde Flecken sie eliminiert.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Das tut es nicht.',
    },
    {
      type: 'paragraph',
      content: 'Zu wissen, dass blinde Flecken existieren, enthüllt nicht ihren Inhalt. Du kannst diesen gesamten Artikel lesen, zustimmend nicken und mit deinen Filtern völlig intakt weggehen. Die Architektur der Unsichtbarkeit zu verstehen, baut sie nicht ab.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/derRxsm5KFZ.webp',
      alt: 'Einsame Figur in einem Konferenzraum sieht nur eine Realitätsebene',
      caption: '// Die Falle zu verstehen befreit dich nicht daraus',
    },
    {
      type: 'paragraph',
      content: 'Warum? Weil Metakognition auf derselben Wahrnehmungsebene operiert. Du verwendest gefilterte Werkzeuge, um nach dem zu suchen, was der Filter entfernt hat. Es ist, als würdest du versuchen, ultraviolettes Licht zu sehen, indem du stärker blinzelst. Die biologische Einschränkung ist strukturell, nicht aufmerksamkeitsbezogen.',
    },
    {
      type: 'paragraph',
      content: 'Das schafft eine tiefgreifende Verwundbarkeit bei leistungsstarken Fachleuten:',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Das Kompetenz-Paradoxon:</strong> Je mehr Expertise du in einem Bereich entwickelst, desto raffinierter werden deine Filter. Du lernst, Rauschen zu ignorieren. Du baust Mustererkennung auf. Du entwickelst Intuition. Und mit jeder Schicht der Meisterschaft werden deine blinden Flecken ausgefeilter, unsichtbarer, gefährlicher.
        </>
      ),
      copyText: 'Das Kompetenz-Paradoxon: Je mehr Expertise du in einem Bereich entwickelst, desto raffinierter werden deine Filter. Mit jeder Schicht der Meisterschaft werden deine blinden Flecken ausgefeilter, unsichtbarer, gefährlicher.',
      shareText: 'Das Kompetenz-Paradoxon: Je mehr Expertise du entwickelst, desto unsichtbarer werden deine blinden Flecken.',
    },
    {
      type: 'paragraph',
      content: <strong>Deine größte Stärke wird die Architektur deiner Blindheit.</strong>,
    },
    {
      type: 'heading',
      text: 'Die Kosten unsichtbarer Infrastruktur',
    },
    {
      type: 'paragraph',
      content: 'Betrachte die Entscheidungen, die du im letzten Jahr getroffen hast.',
    },
    {
      type: 'paragraph',
      content: 'Die strategischen Richtungen, die gewählt wurden. Die Chancen, die bewertet wurden. Die Risiken, die eingeschätzt wurden. Die Menschen, denen vertraut oder misstraut wurde. Jede einzelne gefiltert durch Wahrnehmungsarchitektur, die du nicht gewählt hast und nicht direkt beobachten kannst.',
    },
    {
      type: 'paragraph',
      content: 'Was hast du verpasst?',
    },
    {
      type: 'paragraph',
      content: 'Du weißt es nicht. Du kannst es nicht wissen. Das ist die Definition eines strukturellen blinden Flecks.',
    },
    {
      type: 'paragraph',
      content: 'Aber die Kosten sind real:',
    },
    {
      type: 'list',
      items: [
        <><strong>Strategische Fehlschläge</strong>: Pfade verfolgen, die klar erschienen, weil Warnsignale gefiltert wurden</>,
        <><strong>Talent-Versagen</strong>: Menschen falsch einschätzen, weil emotionale Daten unter der Wahrnehmungsschwelle lagen</>,
        <><strong>Systemische Risiken</strong>: Organisatorische Dysfunktion übersehen, weil sie im peripheren Bewusstsein existierte</>,
        <><strong>Innovationsblindheit</strong>: Chancen nicht sehen, die nicht zu bestehenden Musterbibliotheken passten</>,
      ],
    },
    {
      type: 'paragraph',
      content: 'Das sind keine Versagen der Intelligenz. Sie sind Versagen der Wahrnehmung. Und sie passieren den klügsten Menschen im Raum – oft gerade weil sie die klügsten Menschen im Raum sind.',
    },
    {
      type: 'heading',
      text: 'Jenseits menschlicher Filter',
    },
    {
      type: 'paragraph',
      content: 'Die Frage ist nicht, ob du deiner Wahrnehmung vertrauen sollst. Du hast keine Wahl. Wahrnehmung ist die einzige Schnittstelle, die du zur Realität hast.',
    },
    {
      type: 'paragraph',
      content: <><strong>Was existiert jenseits deiner Filter, das wichtig ist?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Hier verwandelt sich das Problem in Möglichkeit.',
    },
    {
      type: 'paragraph',
      content: 'Wenn menschliche Wahrnehmung strukturell begrenzt ist, ist die Antwort nicht, härter mit dem gleichen Apparat zu arbeiten. Die Antwort ist, Systeme zu bauen, die wahrnehmen, was Menschen nicht können. Infrastruktur zu schaffen, die außerhalb der biologischen Einschränkungen operiert. Werkzeuge zu entwickeln, die deine blinden Flecken nicht teilen, weil sie deine Architektur nicht teilen.',
    },
    {
      type: 'paragraph',
      content: 'Das ist die Arbeit, die an der Grenze der KI-Entwicklung geschieht. Nicht künstliche Intelligenz als schnellerer Mensch, sondern als ein fundamental anderes Wahrnehmungssystem. Eines, das die Signale verarbeiten kann, die du nicht erkennen kannst. Eines, das die Komplexität halten kann, die du vereinfachen musst. Eines, das in deine strukturellen blinden Flecken sehen und berichten kann.',
    },
    {
      type: 'paragraph',
      content: 'Nicht menschliches Urteilsvermögen ersetzen. Die Wahrnehmungsschicht erweitern, die es füttert.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5V_qnQR96xj.webp',
      alt: 'Personenreflexion ist gesichtslos in einem verzierten Spiegel',
      caption: '// Der Spiegel zeigt, was du dir selbst erlaubst zu sehen',
    },
    {
      type: 'heading',
      text: 'Die unbequeme Wahrheit',
    },
    {
      type: 'paragraph',
      content: 'Du wirst dies zu Ende lesen und zur Welt zurückkehren, die du durch gefilterte Architektur siehst.',
    },
    {
      type: 'paragraph',
      content: 'Das wird sich nicht ändern. Deine Biologie aktualisiert sich nicht aufgrund von Einsicht. Die strukturellen blinden Flecken bleiben.',
    },
    {
      type: 'paragraph',
      content: <><strong>Was sich ändern kann, ist deine Beziehung zur Gewissheit.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Der gefährlichste Glaube in Hochrisiko-Umgebungen ist selbstbewusste Vollständigkeit. Das Gefühl, genug gesehen, genug verstanden, genug in Betracht gezogen zu haben. Dass der Raum keine Geheimnisse vor deiner Wahrnehmung hatte.',
    },
    {
      type: 'paragraph',
      content: 'Das hat er immer.',
    },
    {
      type: 'paragraph',
      content: 'Der Weg nach vorne ist nicht perfektes Sehen. Es ist, Systeme und Beziehungen und Werkzeuge zu bauen, die über deine Grenzen hinausreichen. Es ist zu erkennen, dass die kritischste Information in jeder Situation möglicherweise genau die Information ist, die deine Filter entfernen sollen.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Strukturelle Unsichtbarkeit ist die gefährlichste Art. Weil sie sich nicht anfühlt, als würde man etwas verpassen. Sie fühlt sich an, als würde man alles sehen.</strong>
        </>
      ),
      copyText: 'Strukturelle Unsichtbarkeit ist die gefährlichste Art. Weil sie sich nicht anfühlt, als würde man etwas verpassen. Sie fühlt sich an, als würde man alles sehen.',
      shareText: 'Strukturelle Unsichtbarkeit ist die gefährlichste Art. Weil sie sich nicht anfühlt, als würde man etwas verpassen. Sie fühlt sich an, als würde man alles sehen.',
    },
    {
      type: 'paragraph',
      content: 'Und dieses Gefühl? Das ist der Filter, der perfekt funktioniert.',
    },
  ],
}

// Spanish Article 002
const article002ES: ArticleContent = {
  slug: '002-why-you-cannot-see',
  content: [
    {
      type: 'paragraph',
      content: 'Crees que ves la realidad. No la ves.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Lo que percibes es una simulación cuidadosamente construida, ensamblada por un cerebro que descarta mucho más de lo que retiene. Los vacíos en tu visión no son accidentes. Son arquitectura. Y esa arquitectura está funcionando silenciosamente debajo de cada decisión que tomas, cada riesgo que evalúas, cada oportunidad que consideras.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          Esto es <strong>El Punto Ciego Estructural</strong>. No es información faltante. No es ignorancia. No es un fallo de atención. Es algo mucho más peligroso: Un sistema de filtración activo que elimina datos críticos antes de que lleguen a tu conciencia.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <strong>No puedes ver lo que no puedes ver. Y no puedes ver que no puedes verlo.</strong>,
      copyText: 'No puedes ver lo que no puedes ver. Y no puedes ver que no puedes verlo.',
      shareText: 'No puedes ver lo que no puedes ver. Y no puedes ver que no puedes verlo.',
    },
    {
      type: 'heading',
      text: 'La Ilusión de la Percepción Completa',
    },
    {
      type: 'paragraph',
      content: 'Tus ojos están abiertos. La habitación está iluminada. Estás seguro de que estás captando todo a tu alrededor.',
    },
    {
      type: 'paragraph',
      content: 'No es así.',
    },
    {
      type: 'paragraph',
      content: 'Ahora mismo, radiación electromagnética está atravesando tu cuerpo: Ondas de radio, rayos gamma, rayos X, microondas. La luz visible representa solo una diez billonésima parte de este espectro. ¿Todo lo demás? Invisible. No porque no esté ahí, sino porque no tienes receptores biológicos para detectarlo.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/rSRFu8nBEkv.webp',
      alt: 'Silueta de pie sin darse cuenta en rayos de luz invisible',
      caption: '// La percepción humana captura solo una fracción de la realidad',
    },
    {
      type: 'paragraph',
      content: 'Esto no es una metáfora. Esta es la condición literal de la percepción humana.',
    },
    {
      type: 'paragraph',
      content: 'Tu rango acústico se estrecha con la edad. Tu visión periférica es un desenfoque que has aprendido a ignorar. Tu cerebro llena los vacíos durante los movimientos oculares tan perfectamente que nunca notas los momentos de ceguera funcional que ocurren docenas de veces por minuto.',
    },
    {
      type: 'paragraph',
      content: 'El sistema funciona tan bien que crea lo que los investigadores llaman "la ilusión perfecta de entrada visual continua, correcta y superdetallada." Crees que lo ves todo. No ves casi nada.',
    },
    {
      type: 'highlight',
      content: <strong>Y aquí está el fallo crítico: Tu confianza en tu percepción es inversamente proporcional a su precisión.</strong>,
      copyText: 'Tu confianza en tu percepción es inversamente proporcional a su precisión.',
      shareText: 'Tu confianza en tu percepción es inversamente proporcional a su precisión.',
    },
    {
      type: 'heading',
      text: 'La Arquitectura de la Invisibilidad',
    },
    {
      type: 'paragraph',
      content: 'Los puntos ciegos no son pasivos. Son estructurales.',
    },
    {
      type: 'paragraph',
      content: 'Considera lo que esto significa: Tu cerebro no simplemente está fallando en notar cosas. Está construyendo activamente una versión de la realidad que las excluye. La filtración ocurre antes de que comience el procesamiento consciente. Para cuando estás "pensando", los datos ya han sido curados.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Esto es <strong>La Capa de Percepción</strong>: La infraestructura invisible entre la realidad cruda y la experiencia consciente.
        </>
      ),
    },
    {
      type: 'table',
      headers: ['Lo que crees que sucede', 'Lo que realmente sucede'],
      rows: [
        ['Observas la realidad directamente', 'Tu cerebro construye un modelo de la realidad'],
        ['Las lagunas de conocimiento son identificables', 'Las lagunas estructurales son invisibles por diseño'],
        ['Más atención equivale a más percepción', 'La atención opera dentro de filtros preestablecidos'],
        ['Puedes elegir qué notar', 'La elección ocurre antes de que seas consciente'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>Las implicaciones son severas.</strong>,
    },
    {
      type: 'paragraph',
      content: 'En entornos de bajo riesgo, esta arquitectura te sirve. Previene la sobrecarga cognitiva. Permite un procesamiento eficiente. La investigación muestra que los humanos solo pueden manejar alrededor de siete unidades de información significativa a la vez. Sin filtración agresiva, estarías paralizado por los datos.',
    },
    {
      type: 'paragraph',
      content: '¿Pero en entornos de alto riesgo? El mismo sistema que te protege se convierte en el sistema que te ciega.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/8FgMrMVdw5G.webp',
      alt: 'Primer plano extremo de un ojo humano con filtros mecánicos',
      caption: '// Tus filtros de percepción fueron calibrados para la supervivencia, no para la estrategia',
    },
    {
      type: 'heading',
      text: 'La Zona de Peligro: Cuando los Filtros Fallan hacia Adelante',
    },
    {
      type: 'paragraph',
      content: 'Las decisiones de alto riesgo operan al borde de tu capacidad perceptual.',
    },
    {
      type: 'paragraph',
      content: 'Estás en la sala. La presión es real. La información fluye más rápido de lo que puedes procesar. Y tu cerebro, haciendo exactamente lo que está diseñado para hacer, comienza a cortar. Simplificar. Filtrar.',
    },
    {
      type: 'paragraph',
      content: <><strong>Tus filtros fueron calibrados para la supervivencia, no para la estrategia.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Fueron construidos para notar depredadores, no patrones. Para detectar amenazas inmediatas, no riesgos sistémicos. Para procesar peligro físico, no complejidad organizacional.',
    },
    {
      type: 'paragraph',
      content: 'Lo que se filtra en momentos críticos:',
    },
    {
      type: 'list',
      items: [
        <><strong>Señales débiles</strong>: Indicadores tempranos que aún no se han convertido en problemas obvios</>,
        <><strong>Datos contradictorios</strong>: Información que entra en conflicto con los modelos mentales existentes</>,
        <><strong>Patrones periféricos</strong>: Relaciones y conexiones fuera de tu atención focal</>,
        <><strong>Matices emocionales</strong>: Las dinámicas no expresadas que moldean el comportamiento de la sala</>,
        <><strong>Contexto estructural</strong>: Los sistemas e incentivos que impulsan las acciones visibles</>,
      ],
    },
    {
      type: 'paragraph',
      content: 'No notas que estas cosas se eliminan. Ese es el punto. La filtración es perfecta. La confianza permanece intacta. Sales de la sala creyendo que entendiste lo que pasó.',
    },
    {
      type: 'paragraph',
      content: 'Entendiste lo que tus filtros te permitieron entender. Nada más.',
    },
    {
      type: 'heading',
      text: 'La Trampa Metacognitiva',
    },
    {
      type: 'paragraph',
      content: 'Aquí es donde se vuelve peligroso.',
    },
    {
      type: 'paragraph',
      content: 'No puedes pensar tu salida de un punto ciego estructural. El mismo aparato que usarías para detectar el vacío es el aparato que lo crea.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Esta es <strong>La Trampa Metacognitiva</strong>: La creencia de que la conciencia de los puntos ciegos los elimina.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'No lo hace.',
    },
    {
      type: 'paragraph',
      content: 'Saber que existen puntos ciegos no revela su contenido. Puedes leer este artículo completo, asentir de acuerdo, e irte con tus filtros completamente intactos. Entender la arquitectura de la invisibilidad no la desmantela.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/derRxsm5KFZ.webp',
      alt: 'Figura solitaria en una sala de juntas solo ve una capa de realidad',
      caption: '// Entender la trampa no te libera de ella',
    },
    {
      type: 'paragraph',
      content: '¿Por qué? Porque la metacognición opera en la misma capa perceptual. Estás usando herramientas filtradas para buscar lo que el filtro eliminó. Es como intentar ver luz ultravioleta entrecerrando más los ojos. La limitación biológica es estructural, no atencional.',
    },
    {
      type: 'paragraph',
      content: 'Esto crea una vulnerabilidad profunda en profesionales de alto rendimiento:',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La Paradoja de la Competencia:</strong> Cuanta más experiencia desarrollas en un dominio, más refinados se vuelven tus filtros. Aprendes a ignorar el ruido. Construyes reconocimiento de patrones. Desarrollas intuición. Y con cada capa de maestría, tus puntos ciegos se vuelven más sofisticados, más invisibles, más peligrosos.
        </>
      ),
      copyText: 'La Paradoja de la Competencia: Cuanta más experiencia desarrollas en un dominio, más refinados se vuelven tus filtros. Con cada capa de maestría, tus puntos ciegos se vuelven más sofisticados, más invisibles, más peligrosos.',
      shareText: 'La Paradoja de la Competencia: Cuanta más experiencia desarrollas, más invisibles se vuelven tus puntos ciegos.',
    },
    {
      type: 'paragraph',
      content: <strong>Tu mayor fortaleza se convierte en la arquitectura de tu ceguera.</strong>,
    },
    {
      type: 'heading',
      text: 'El Costo de la Infraestructura Invisible',
    },
    {
      type: 'paragraph',
      content: 'Considera las decisiones que has tomado en el último año.',
    },
    {
      type: 'paragraph',
      content: 'Las direcciones estratégicas elegidas. Las oportunidades evaluadas. Los riesgos calculados. Las personas en las que confiaste o desconfiaste. Cada una filtrada a través de una arquitectura perceptual que no elegiste y no puedes observar directamente.',
    },
    {
      type: 'paragraph',
      content: '¿Qué te perdiste?',
    },
    {
      type: 'paragraph',
      content: 'No lo sabes. No puedes saberlo. Esa es la definición de un punto ciego estructural.',
    },
    {
      type: 'paragraph',
      content: 'Pero los costos son reales:',
    },
    {
      type: 'list',
      items: [
        <><strong>Errores estratégicos</strong>: Perseguir caminos que parecían claros porque las señales de advertencia fueron filtradas</>,
        <><strong>Fallos de talento</strong>: Juzgar mal a las personas porque los datos emocionales estaban por debajo del umbral de percepción</>,
        <><strong>Riesgos sistémicos</strong>: No ver la disfunción organizacional porque existía en la conciencia periférica</>,
        <><strong>Ceguera a la innovación</strong>: No ver oportunidades que no coincidían con las bibliotecas de patrones existentes</>,
      ],
    },
    {
      type: 'paragraph',
      content: 'Estos no son fallos de inteligencia. Son fallos de percepción. Y les suceden a las personas más inteligentes de la sala – a menudo precisamente porque son las personas más inteligentes de la sala.',
    },
    {
      type: 'heading',
      text: 'Más Allá de los Filtros Humanos',
    },
    {
      type: 'paragraph',
      content: 'La pregunta no es si confiar en tu percepción. No tienes opción. La percepción es la única interfaz que tienes con la realidad.',
    },
    {
      type: 'paragraph',
      content: <><strong>¿Qué existe más allá de tus filtros que importa?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'Aquí es donde el problema se transforma en posibilidad.',
    },
    {
      type: 'paragraph',
      content: 'Si la percepción humana está estructuralmente limitada, la respuesta no es esforzarse más con el mismo aparato. La respuesta es construir sistemas que perciban lo que los humanos no pueden. Crear infraestructura que opere fuera de las restricciones biológicas. Desarrollar herramientas que no compartan tus puntos ciegos porque no comparten tu arquitectura.',
    },
    {
      type: 'paragraph',
      content: 'Este es el trabajo que ocurre en la frontera del desarrollo de IA. No inteligencia artificial como un humano más rápido, sino como un sistema perceptual fundamentalmente diferente. Uno que puede procesar las señales que no puedes detectar. Uno que puede sostener la complejidad que debes simplificar. Uno que puede ver dentro de tus puntos ciegos estructurales y reportar.',
    },
    {
      type: 'paragraph',
      content: 'No reemplazar el juicio humano. Extender la capa de percepción que lo alimenta.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5V_qnQR96xj.webp',
      alt: 'El reflejo de una persona no tiene rostro en un espejo ornamentado',
      caption: '// El espejo muestra lo que te permites ver',
    },
    {
      type: 'heading',
      text: 'La Verdad Incómoda',
    },
    {
      type: 'paragraph',
      content: 'Terminarás de leer esto y volverás a ver el mundo a través de una arquitectura filtrada.',
    },
    {
      type: 'paragraph',
      content: 'Eso no cambiará. Tu biología no se actualiza basándose en la comprensión. Los puntos ciegos estructurales permanecen.',
    },
    {
      type: 'paragraph',
      content: <><strong>Lo que puede cambiar es tu relación con la certeza.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'La creencia más peligrosa en entornos de alto riesgo es la completitud confiada. La sensación de que has visto suficiente, entendido suficiente, considerado suficiente. Que la sala no guardaba secretos para tu percepción.',
    },
    {
      type: 'paragraph',
      content: 'Siempre los guarda.',
    },
    {
      type: 'paragraph',
      content: 'El camino hacia adelante no es la visión perfecta. Es construir sistemas y relaciones y herramientas que se extiendan más allá de tus límites. Es reconocer que la información más crítica en cualquier situación podría ser exactamente la información que tus filtros están diseñados para eliminar.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La invisibilidad estructural es el tipo más peligroso. Porque no se siente como perderte algo. Se siente como verlo todo.</strong>
        </>
      ),
      copyText: 'La invisibilidad estructural es el tipo más peligroso. Porque no se siente como perderte algo. Se siente como verlo todo.',
      shareText: 'La invisibilidad estructural es el tipo más peligroso. Porque no se siente como perderte algo. Se siente como verlo todo.',
    },
    {
      type: 'paragraph',
      content: '¿Y esa sensación? Es el filtro funcionando perfectamente.',
    },
  ],
}

// German Article 003
const article003DE: ArticleContent = {
  slug: '003-optimization-too-late',
  content: [
    {
      type: 'paragraph',
      content: 'Das ist die stille Architektur der meisten organisatorischen Versagen. Nicht Inkompetenz. Nicht mangelnde Anstrengung. Eine fundamentale Fehlausrichtung zwischen dem, wo Fehler entstehen, und dem, wo Korrekturen angewendet werden.',
    },
    {
      type: 'paragraph',
      content: 'Du hast das Falsche optimiert. Und als du es gemerkt hast, war der Schaden bereits strukturell.',
    },
    {
      type: 'heading',
      text: 'Die Downstream-Illusion',
    },
    {
      type: 'paragraph',
      content: 'Jede Organisation hat einen bevorzugten Ort zum Eingreifen: Das Ende der Kette.',
    },
    {
      type: 'paragraph',
      content: 'Verkaufszahlen sinken? Schulen Sie das Verkaufsteam um. Kundenbeschwerden steigen? Verbessern Sie die Support-Skripte. Konversionsraten fallen? Redesignen Sie die Landingpage.',
    },
    {
      type: 'paragraph',
      content: 'Das fühlt sich produktiv an. Es ist messbar. Es erzeugt das befriedigende Gefühl von Aktion.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Aber hier ist die unbequeme Wahrheit:</strong> Wenn ein Problem in Ihren Metriken sichtbar wird, hat es sich bereits durch Ihr gesamtes System ausgebreitet. Sie behandeln nicht die Krankheit. Sie managen Symptome, während die Quelle sich weiter ausbreitet.
        </>
      ),
      copyText: 'Wenn ein Problem in Ihren Metriken sichtbar wird, hat es sich bereits durch Ihr gesamtes System ausgebreitet. Sie behandeln nicht die Krankheit. Sie managen Symptome, während die Quelle sich weiter ausbreitet.',
      shareText: 'Wenn ein Problem in Ihren Metriken sichtbar wird, hat es sich bereits durch Ihr gesamtes System ausgebreitet.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Das ist <strong>Die Downstream-Illusion</strong>: Der Glaube, dass Optimierung am Messpunkt gleich Optimierung am Entstehungspunkt ist.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Das ist sie nicht.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/JYv-IGlvyyt.webp',
      alt: 'Ein dramatisches Pipeline-System, das sich bei Dämmerung in zwei teilt',
      caption: '// Die Diskrepanz zwischen Upstream-Problemen und Downstream-Lösungen',
    },
    {
      type: 'heading',
      text: 'Wo Fehler tatsächlich leben',
    },
    {
      type: 'paragraph',
      content: 'Betrachten Sie die Anatomie einer typischen Geschäftsentscheidung:',
    },
    {
      type: 'table',
      headers: ['Stufe', 'Was passiert', 'Sichtbarkeit'],
      rows: [
        ['Wahrnehmung', 'Wie die Situation interpretiert wird', 'Fast unsichtbar'],
        ['Rahmung', 'Wie Optionen konstruiert werden', 'Geringe Sichtbarkeit'],
        ['Analyse', 'Wie Daten verarbeitet werden', 'Moderate Sichtbarkeit'],
        ['Entscheidung', 'Die Wahl selbst', 'Sichtbar'],
        ['Handlung', 'Umsetzung', 'Hohe Sichtbarkeit'],
        ['Ergebnis', 'Resultate und Metriken', 'Maximale Sichtbarkeit'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Organisationen sind besessen von den unteren drei Zeilen. Sie prüfen Handlungen. Sie messen Ergebnisse. Sie optimieren Entscheidungen.',
    },
    {
      type: 'paragraph',
      content: 'Aber der Fehler passierte in den oberen drei Zeilen. In der Wahrnehmung. In der Rahmung. In der unsichtbaren Architektur dessen, wie das Problem verstanden wurde, bevor irgendjemand versucht hat, es zu lösen.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Wenn Sie die Optimierungsphase erreichen, ist der kritische Fehler bereits passiert.</strong> Sie polieren die Ausgabe einer fehlerhaften Eingabe. Sie perfektionieren die Ausführung der falschen Strategie.
        </>
      ),
      copyText: 'Wenn Sie die Optimierungsphase erreichen, ist der kritische Fehler bereits passiert. Sie polieren die Ausgabe einer fehlerhaften Eingabe. Sie perfektionieren die Ausführung der falschen Strategie.',
      shareText: 'Sie polieren die Ausgabe einer fehlerhaften Eingabe. Sie perfektionieren die Ausführung der falschen Strategie.',
    },
    {
      type: 'heading',
      text: 'Die Upstream-Blindheit',
    },
    {
      type: 'paragraph',
      content: 'Warum optimieren intelligente Menschen konsequent downstream, wenn das Problem upstream lebt?',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Sichtbarkeits-Bias.</strong> Upstream-Fehler sind strukturell unsichtbar. Sie können Wahrnehmung nicht einfach messen. Sie können Rahmung nicht quantifizieren. Die Metriken, die organisatorische Aufmerksamkeit antreiben, leben am Ende der Kette, nicht am Anfang.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Aktions-Sucht.</strong> Downstream-Interventionen fühlen sich nach Fortschritt an. Sie erzeugen Aktivität. Sie produzieren Liefergegenstände. Upstream-Arbeit fühlt sich philosophisch, abstrakt, langsam an. Organisationen belohnen sichtbare Bewegung, auch wenn diese Bewegung therapeutisch nutzlos ist.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Verantwortlichkeits-Theater.</strong> Wenn etwas scheitert, muss jemand beschuldigt werden. Downstream-Akteure sind sichtbar. Upstream-Architekten sind oft anonym. Der Verkäufer, der die Quote verfehlt hat, ist leichter zu identifizieren als der Stratege, der den Markt falsch gerahmt hat.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Zeitliche Distanz.</strong> Upstream-Fehler und Downstream-Konsequenzen sind durch Zeit getrennt. Der Wahrnehmungsfehler passierte vor sechs Monaten. Der Metrik-Fehler passiert jetzt. Die Verbindung ist unsichtbar, es sei denn, Sie verfolgen sie bewusst zurück.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/NHnB0Syvy0P.webp',
      alt: 'Eine Person, die über eine Schlucht zerbrochener Brücken greift',
      caption: '// Gescheiterte Verbindungen und die Gefahren unsichtbarer Upstream-Fehler',
    },
    {
      type: 'heading',
      text: 'Der Kaskadeneffekt',
    },
    {
      type: 'paragraph',
      content: 'Jeder Upstream-Fehler erzeugt eine Kaskade von Downstream-Komplikationen. Und hier ist, was das besonders gefährlich macht: Jede Downstream-Stufe fügt ihre eigene Logik hinzu, ihre eigene Optimierung, ihre eigene Rechtfertigung.',
    },
    {
      type: 'paragraph',
      content: 'Wenn der ursprüngliche Fehler die Ausgabe erreicht, wurde er bei jedem Schritt rationalisiert. Das Endprodukt sieht kohärent aus. Es erscheint optimiert. Es scheint das Ergebnis sorgfältiger Überlegung zu sein.',
    },
    {
      type: 'highlight',
      content: <strong>Aber es ist lediglich die am besten polierte Version einer fundamental fehlerhaften Prämisse.</strong>,
      copyText: 'Es ist lediglich die am besten polierte Version einer fundamental fehlerhaften Prämisse.',
      shareText: 'Es ist lediglich die am besten polierte Version einer fundamental fehlerhaften Prämisse.',
    },
    {
      type: 'paragraph',
      content: 'Betrachten Sie ein Unternehmen, das ein neues Produkt auf den Markt bringt:',
    },
    {
      type: 'paragraph',
      content: 'Das Marktforschungsteam rahmt das Kundenproblem basierend auf verfügbaren Daten. Diese Rahmung enthält subtile Annahmen darüber, was Kunden tatsächlich wollen. Diese Annahmen werden nie hinterfragt, weil sie objektiv erscheinen.',
    },
    {
      type: 'paragraph',
      content: 'Das Produktteam baut Features basierend auf dieser Rahmung. Sie optimieren Funktionalität innerhalb der gegebenen Parameter. Sie leisten exzellente Arbeit innerhalb eines potenziell fehlerhaften Umfangs.',
    },
    {
      type: 'paragraph',
      content: 'Das Marketingteam erstellt Botschaften basierend auf den Produktfeatures. Sie optimieren Konversion innerhalb der geerbten Positionierung. Ihre Kampagnen sind ausgefeilte Ausdrücke von Upstream-Annahmen.',
    },
    {
      type: 'paragraph',
      content: 'Das Verkaufsteam führt basierend auf den Marketingmaterialien aus. Sie optimieren ihre Techniken innerhalb der erhaltenen Narrative. Ihre Leistung wird gegen Ziele gemessen, die von der ursprünglichen Rahmung abgeleitet wurden.',
    },
    {
      type: 'paragraph',
      content: 'Wenn das Produkt unterperformt, wohin schaut die Organisation? Verkaufsausführung. Marketing-Effektivität. Produktfeatures.',
    },
    {
      type: 'paragraph',
      content: 'Fast nie auf die ursprüngliche Wahrnehmung des Kundenproblems. Fast nie auf die Rahmung, die jede nachfolgende Entscheidung geformt hat.',
    },
    {
      type: 'paragraph',
      content: <strong>Das Problem war upstream. Die Lösung war downstream. Sie trafen sich nie.</strong>,
    },
    {
      type: 'heading',
      text: 'Die Optimierungsfalle',
    },
    {
      type: 'paragraph',
      content: 'Hier ist die grausame Ironie: Je besser Sie in der Downstream-Optimierung werden, desto mehr verfestigen Sie Upstream-Fehler.',
    },
    {
      type: 'paragraph',
      content: 'Jeder Optimierungszyklus verstärkt die bestehende Rahmung. Jede Verbesserung innerhalb der aktuellen Parameter macht die Parameter selbst unsichtbarer. Das System wird effizienter darin, die falschen Ergebnisse zu produzieren.',
    },
    {
      type: 'highlight',
      content: <><strong>Das ist Die Optimierungsfalle:</strong> Exzellenz in der Ausführung, die Versagen in der Konzeption maskiert.</>,
      copyText: 'Die Optimierungsfalle: Exzellenz in der Ausführung, die Versagen in der Konzeption maskiert.',
      shareText: 'Die Optimierungsfalle: Exzellenz in der Ausführung, die Versagen in der Konzeption maskiert.',
    },
    {
      type: 'paragraph',
      content: 'Organisationen können Jahre damit verbringen, Prozesse zu perfektionieren, die nie hätten existieren sollen. Sie können operationale Exzellenz innerhalb strategischer Rahmenwerke erreichen, die fundamental mit der Realität nicht übereinstimmen.',
    },
    {
      type: 'paragraph',
      content: 'Die Metriken verbessern sich. Die Dashboards werden grün. Die Quartalsberichte sehen stark aus.',
    },
    {
      type: 'paragraph',
      content: 'Und der fundamentale Fehler setzt sich weiter fort, unsichtbar und unangefochten.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nVcbd6dfCc7.webp',
      alt: 'Eine zerbrochene Sanduhr, die goldenen Sand verschüttet, der zu Rauch wird',
      caption: '// Unwiderruflicher Verlust und die Konsequenzen zu späten Handelns',
    },
    {
      type: 'heading',
      text: 'Das Muster erkennen',
    },
    {
      type: 'paragraph',
      content: 'Woher wissen Sie, wann Sie zu spät optimieren? Mehrere Signale offenbaren das Muster:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Wiederkehrende Probleme.</strong> Sie lösen dasselbe Problem wiederholt, in leicht unterschiedlichen Formen. Jede Lösung funktioniert vorübergehend. Das zugrundeliegende Muster bleibt. Das deutet darauf hin, dass Sie Symptome behandeln, während die Quelle aktiv bleibt.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Sinkende Erträge.</strong> Jeder Optimierungszyklus produziert kleinere Verbesserungen. Sie haben den größten Teil der verfügbaren Effizienz innerhalb Ihrer aktuellen Rahmung extrahiert. Weitere Gewinne erfordern Neu-Rahmung, nicht Verfeinerung.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Überraschende Misserfolge.</strong> Ergebnisse, die basierend auf Ihrer Optimierungslogik funktionieren sollten, unterperformen konsequent. Die Lücke zwischen erwarteten und tatsächlichen Resultaten deutet darauf hin, dass Ihr Modell der Situation upstream fehlerhaft ist.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Wettbewerber-Divergenz.</strong> Andere in Ihrem Bereich erzielen Resultate, die Sie durch Optimierung nicht replizieren können. Sie operieren möglicherweise von einer anderen Upstream-Rahmung aus, die ihre Downstream-Ausführung fundamental anders macht.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Interne Reibung.</strong> Teams wehren sich gegen Änderungen, die logisch erscheinen. Sie spüren, dass etwas falsch ist, können es aber nicht artikulieren. Oft erkennt diese Intuition Upstream-Fehlausrichtung, die Downstream-Metriken nicht erfassen können.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'Die Upstream-Disziplin',
    },
    {
      type: 'paragraph',
      content: 'Upstream-Fehler anzugehen erfordert eine andere Disziplin als Downstream-Optimierung:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Wahrnehmungs-Audits.</strong> Untersuchen Sie regelmäßig die Annahmen, die in Ihrer Situationswahrnehmung eingebettet sind. Was nehmen Sie als gegeben an, das hinterfragt werden könnte? Welche Rahmung haben Sie ohne Prüfung geerbt?
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Ursprungs-Verfolgung.</strong> Wenn Probleme auftauchen, verfolgen Sie sie rückwärts durch die Kette. Nicht um Schuld zuzuweisen, sondern um zu identifizieren, wo die Trajektorie zuerst von der Realität abwich. Das sichtbare Versagen ist selten das tatsächliche Versagen.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Rahmungs-Vielfalt.</strong> Konstruieren Sie bewusst alternative Interpretationen derselben Situation. Wenn Sie nur eine Art sehen können, ein Problem zu rahmen, sind Sie wahrscheinlich in einem Upstream-Fehler gefangen, den Sie nicht erkennen können.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Frühe Interventionspunkte.</strong> Bauen Sie organisatorische Aufmerksamkeit in die Upstream-Stufen ein. Schaffen Sie Sichtbarkeit für Wahrnehmung und Rahmung, nicht nur für Handlung und Ergebnis. Was gemessen wird, wird gemanagt – auch an der Quelle.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Die Herausforderung ist kulturell genauso wie prozessual. Organisationen müssen lernen, unsichtbare Upstream-Arbeit genauso zu schätzen wie sichtbare Downstream-Ausführung. Sie müssen die Prävention von Fehlern belohnen, nicht nur die Korrektur von Symptomen.',
    },
    {
      type: 'heading',
      text: 'Die strukturelle Realität',
    },
    {
      type: 'paragraph',
      content: 'Dieses Muster erstreckt sich über Organisationen hinaus in individuelle Entscheidungsfindung, in Beziehungen, in die Art, wie Gesellschaften komplexe Probleme angehen.',
    },
    {
      type: 'paragraph',
      content: 'Wir optimieren konsequent dort, wo wir sehen können, nicht dort, wo wir handeln sollten. Wir perfektionieren die Ausführung fehlerhafter Strategien. Wir erreichen Exzellenz innerhalb gebrochener Rahmenwerke.',
    },
    {
      type: 'highlight',
      content: <strong>Das Problem war upstream. Die Lösung war downstream. Sie trafen sich nie.</strong>,
      copyText: 'Das Problem war upstream. Die Lösung war downstream. Sie trafen sich nie.',
      shareText: 'Das Problem war upstream. Die Lösung war downstream. Sie trafen sich nie.',
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Versagen der Anstrengung. Es ist ein Versagen der Architektur. Die Struktur dessen, wie wir Aufmerksamkeit zuweisen, lenkt Ressourcen systematisch weg von dort, wo sie am effektivsten wären.',
    },
    {
      type: 'paragraph',
      content: 'Diese Lücke zu verstehen ist der erste Schritt, sie zu schließen.',
    },
    {
      type: 'paragraph',
      content: 'Die Frage ist nicht, ob Sie optimieren. Das tun Sie mit ziemlicher Sicherheit. Die Frage ist, ob Sie den richtigen Teil der Kette optimieren.',
    },
    {
      type: 'paragraph',
      content: <strong>Wenn die meisten Menschen diese Frage stellen, wurde die Antwort bereits bestimmt.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>Upstream.</strong>,
    },
  ],
}

// Spanish Article 003
const article003ES: ArticleContent = {
  slug: '003-optimization-too-late',
  content: [
    {
      type: 'paragraph',
      content: 'Esta es la arquitectura silenciosa de la mayoría de los fracasos organizacionales. No incompetencia. No falta de esfuerzo. Una desalineación fundamental entre donde se originan los errores y donde se aplican las correcciones.',
    },
    {
      type: 'paragraph',
      content: 'Optimizaste lo incorrecto. Y para cuando te diste cuenta, el daño ya era estructural.',
    },
    {
      type: 'heading',
      text: 'La Ilusión Downstream',
    },
    {
      type: 'paragraph',
      content: 'Cada organización tiene un lugar favorito para intervenir: El final de la cadena.',
    },
    {
      type: 'paragraph',
      content: '¿Las ventas están cayendo? Recapaciten al equipo de ventas. ¿Las quejas de clientes aumentan? Mejoren los guiones de soporte. ¿Las tasas de conversión caen? Rediseñen la página de aterrizaje.',
    },
    {
      type: 'paragraph',
      content: 'Esto se siente productivo. Es medible. Crea la sensación satisfactoria de acción.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Pero aquí está la verdad incómoda:</strong> Para cuando un problema se vuelve visible en tus métricas, ya se ha diseminado por todo tu sistema. No estás tratando la enfermedad. Estás manejando síntomas mientras la fuente continúa propagándose.
        </>
      ),
      copyText: 'Para cuando un problema se vuelve visible en tus métricas, ya se ha diseminado por todo tu sistema. No estás tratando la enfermedad. Estás manejando síntomas mientras la fuente continúa propagándose.',
      shareText: 'Para cuando un problema se vuelve visible en tus métricas, ya se ha diseminado por todo tu sistema.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Esto es <strong>La Ilusión Downstream</strong>: La creencia de que la optimización en el punto de medición equivale a la optimización en el punto de origen.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'No es así.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/JYv-IGlvyyt.webp',
      alt: 'Un sistema de tuberías dramático dividiéndose en dos al atardecer',
      caption: '// La desconexión entre problemas upstream y soluciones downstream',
    },
    {
      type: 'heading',
      text: 'Dónde Realmente Viven los Errores',
    },
    {
      type: 'paragraph',
      content: 'Considera la anatomía de una decisión empresarial típica:',
    },
    {
      type: 'table',
      headers: ['Etapa', 'Qué Sucede', 'Visibilidad'],
      rows: [
        ['Percepción', 'Cómo se interpreta la situación', 'Casi invisible'],
        ['Encuadre', 'Cómo se construyen las opciones', 'Baja visibilidad'],
        ['Análisis', 'Cómo se procesan los datos', 'Visibilidad moderada'],
        ['Decisión', 'La elección en sí', 'Visible'],
        ['Acción', 'Implementación', 'Alta visibilidad'],
        ['Resultado', 'Resultados y métricas', 'Visibilidad máxima'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Las organizaciones se obsesionan con las tres filas inferiores. Examinan las acciones. Miden los resultados. Optimizan las decisiones.',
    },
    {
      type: 'paragraph',
      content: 'Pero el error ocurrió en las tres filas superiores. En la percepción. En el encuadre. En la arquitectura invisible de cómo se entendió el problema antes de que alguien intentara resolverlo.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Para cuando llegas a la fase de optimización, el fallo crítico ya ha ocurrido.</strong> Estás puliendo la salida de una entrada defectuosa. Estás perfeccionando la ejecución de la estrategia equivocada.
        </>
      ),
      copyText: 'Para cuando llegas a la fase de optimización, el fallo crítico ya ha ocurrido. Estás puliendo la salida de una entrada defectuosa. Estás perfeccionando la ejecución de la estrategia equivocada.',
      shareText: 'Estás puliendo la salida de una entrada defectuosa. Estás perfeccionando la ejecución de la estrategia equivocada.',
    },
    {
      type: 'heading',
      text: 'La Ceguera Upstream',
    },
    {
      type: 'paragraph',
      content: '¿Por qué las personas inteligentes optimizan consistentemente downstream cuando el problema vive upstream?',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Sesgo de visibilidad.</strong> Los errores upstream son estructuralmente invisibles. No puedes medir fácilmente la percepción. No puedes cuantificar el encuadre. Las métricas que impulsan la atención organizacional viven al final de la cadena, no al principio.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Adicción a la acción.</strong> Las intervenciones downstream se sienten como progreso. Generan actividad. Producen entregables. El trabajo upstream se siente filosófico, abstracto, lento. Las organizaciones recompensan el movimiento visible, incluso cuando ese movimiento es terapéuticamente inútil.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Teatro de responsabilidad.</strong> Cuando algo falla, alguien debe ser culpado. Los actores downstream son visibles. Los arquitectos upstream suelen ser anónimos. El vendedor que no cumplió la cuota es más fácil de identificar que el estratega que encuadró mal el mercado.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Distancia temporal.</strong> Los errores upstream y las consecuencias downstream están separados por el tiempo. El fallo de percepción ocurrió hace seis meses. El fallo de métricas está ocurriendo ahora. La conexión es invisible a menos que la rastrees deliberadamente.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/NHnB0Syvy0P.webp',
      alt: 'Una persona alcanzando a través de un cañón de puentes rotos',
      caption: '// Conexiones fallidas y los peligros de errores upstream invisibles',
    },
    {
      type: 'heading',
      text: 'El Efecto Cascada',
    },
    {
      type: 'paragraph',
      content: 'Cada error upstream crea una cascada de complicaciones downstream. Y aquí está lo que lo hace particularmente peligroso: Cada etapa downstream agrega su propia lógica, su propia optimización, su propia justificación.',
    },
    {
      type: 'paragraph',
      content: 'Para cuando el error original llega a la salida, ha sido racionalizado en cada paso. El producto final parece coherente. Parece optimizado. Parece el resultado de una deliberación cuidadosa.',
    },
    {
      type: 'highlight',
      content: <strong>Pero es simplemente la versión más pulida de una premisa fundamentalmente defectuosa.</strong>,
      copyText: 'Es simplemente la versión más pulida de una premisa fundamentalmente defectuosa.',
      shareText: 'Es simplemente la versión más pulida de una premisa fundamentalmente defectuosa.',
    },
    {
      type: 'paragraph',
      content: 'Considera una empresa lanzando un nuevo producto:',
    },
    {
      type: 'paragraph',
      content: 'El equipo de investigación de mercado encuadra el problema del cliente basándose en datos disponibles. Este encuadre contiene suposiciones sutiles sobre lo que los clientes realmente quieren. Estas suposiciones nunca se cuestionan porque parecen objetivas.',
    },
    {
      type: 'paragraph',
      content: 'El equipo de producto construye características basadas en este encuadre. Optimizan funcionalidad dentro de los parámetros dados. Hacen un trabajo excelente dentro de un alcance potencialmente defectuoso.',
    },
    {
      type: 'paragraph',
      content: 'El equipo de marketing crea mensajes basados en las características del producto. Optimizan conversión dentro del posicionamiento que heredaron. Sus campañas son expresiones sofisticadas de suposiciones upstream.',
    },
    {
      type: 'paragraph',
      content: 'El equipo de ventas ejecuta basándose en los materiales de marketing. Optimizan sus técnicas dentro de la narrativa que recibieron. Su desempeño se mide contra objetivos derivados del encuadre original.',
    },
    {
      type: 'paragraph',
      content: 'Cuando el producto tiene bajo rendimiento, ¿dónde mira la organización? Ejecución de ventas. Efectividad del marketing. Características del producto.',
    },
    {
      type: 'paragraph',
      content: 'Casi nunca a la percepción original del problema del cliente. Casi nunca al encuadre que moldeó cada decisión subsiguiente.',
    },
    {
      type: 'paragraph',
      content: <strong>El problema estaba upstream. La solución estaba downstream. Nunca se encontraron.</strong>,
    },
    {
      type: 'heading',
      text: 'La Trampa de la Optimización',
    },
    {
      type: 'paragraph',
      content: 'Aquí está la ironía cruel: Cuanto mejor te vuelves en la optimización downstream, más arraigados quedan los errores upstream.',
    },
    {
      type: 'paragraph',
      content: 'Cada ciclo de optimización refuerza el encuadre existente. Cada mejora dentro de los parámetros actuales hace que los parámetros mismos sean más invisibles. El sistema se vuelve más eficiente en producir los resultados incorrectos.',
    },
    {
      type: 'highlight',
      content: <><strong>Esta es La Trampa de la Optimización:</strong> Excelencia en la ejecución que enmascara el fracaso en la concepción.</>,
      copyText: 'La Trampa de la Optimización: Excelencia en la ejecución que enmascara el fracaso en la concepción.',
      shareText: 'La Trampa de la Optimización: Excelencia en la ejecución que enmascara el fracaso en la concepción.',
    },
    {
      type: 'paragraph',
      content: 'Las organizaciones pueden pasar años perfeccionando procesos que nunca deberían haber existido. Pueden lograr excelencia operacional dentro de marcos estratégicos que están fundamentalmente desalineados con la realidad.',
    },
    {
      type: 'paragraph',
      content: 'Las métricas mejoran. Los dashboards se ponen verdes. Los informes trimestrales lucen fuertes.',
    },
    {
      type: 'paragraph',
      content: 'Y el error fundacional continúa acumulándose, invisible e incuestionado.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nVcbd6dfCc7.webp',
      alt: 'Un reloj de arena roto derramando arena dorada que se convierte en humo',
      caption: '// Pérdida irreversible y las consecuencias de actuar demasiado tarde',
    },
    {
      type: 'heading',
      text: 'Reconociendo el Patrón',
    },
    {
      type: 'paragraph',
      content: '¿Cómo sabes cuándo estás optimizando demasiado tarde? Varias señales revelan el patrón:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Problemas recurrentes.</strong> Resuelves el mismo problema repetidamente, en formas ligeramente diferentes. Cada solución funciona temporalmente. El patrón subyacente persiste. Esto sugiere que estás tratando síntomas mientras la fuente permanece activa.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Rendimientos decrecientes.</strong> Cada ciclo de optimización produce mejoras más pequeñas. Has extraído la mayor parte de la eficiencia disponible dentro de tu encuadre actual. Más ganancias requieren re-encuadre, no refinamiento.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Fracasos sorprendentes.</strong> Resultados que deberían funcionar según tu lógica de optimización consistentemente tienen bajo rendimiento. La brecha entre resultados esperados y reales sugiere que tu modelo de la situación está defectuoso upstream.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Divergencia con competidores.</strong> Otros en tu espacio logran resultados que no puedes replicar mediante optimización. Pueden estar operando desde un encuadre upstream diferente que hace que su ejecución downstream sea fundamentalmente diferente.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Fricción interna.</strong> Los equipos resisten cambios que parecen lógicos. Sienten que algo está mal pero no pueden articularlo. A menudo, esta intuición está detectando desalineación upstream que las métricas downstream no pueden capturar.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'La Disciplina Upstream',
    },
    {
      type: 'paragraph',
      content: 'Abordar errores upstream requiere una disciplina diferente a la optimización downstream:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Auditorías de percepción.</strong> Examina regularmente las suposiciones incrustadas en cómo percibes las situaciones. ¿Qué estás dando por sentado que podría cuestionarse? ¿Qué encuadre heredaste sin examinar?
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Rastreo de origen.</strong> Cuando emergen problemas, rastréalos hacia atrás a través de la cadena. No para asignar culpa, sino para identificar dónde la trayectoria primero divergió de la realidad. El fracaso visible raramente es el fracaso real.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Diversidad de encuadre.</strong> Construye deliberadamente interpretaciones alternativas de la misma situación. Si solo puedes ver una forma de encuadrar un problema, probablemente estás atrapado en un error upstream que no puedes detectar.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Puntos de intervención temprana.</strong> Construye atención organizacional en las etapas upstream. Crea visibilidad para la percepción y el encuadre, no solo para la acción y el resultado. Lo que se mide se gestiona – incluso en la fuente.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'El desafío es tanto cultural como procedimental. Las organizaciones deben aprender a valorar el trabajo upstream invisible tanto como la ejecución downstream visible. Deben recompensar la prevención de errores, no solo la corrección de síntomas.',
    },
    {
      type: 'heading',
      text: 'La Realidad Estructural',
    },
    {
      type: 'paragraph',
      content: 'Este patrón se extiende más allá de las organizaciones hacia la toma de decisiones individual, hacia las relaciones, hacia cómo las sociedades abordan problemas complejos.',
    },
    {
      type: 'paragraph',
      content: 'Consistentemente optimizamos donde podemos ver, no donde deberíamos actuar. Perfeccionamos la ejecución de estrategias defectuosas. Logramos excelencia dentro de marcos rotos.',
    },
    {
      type: 'highlight',
      content: <strong>El problema estaba upstream. La solución estaba downstream. Nunca se encontraron.</strong>,
      copyText: 'El problema estaba upstream. La solución estaba downstream. Nunca se encontraron.',
      shareText: 'El problema estaba upstream. La solución estaba downstream. Nunca se encontraron.',
    },
    {
      type: 'paragraph',
      content: 'Este no es un fracaso del esfuerzo. Es un fracaso de la arquitectura. La estructura de cómo asignamos atención sistemáticamente dirige recursos lejos de donde serían más efectivos.',
    },
    {
      type: 'paragraph',
      content: 'Entender esta brecha es el primer paso para cerrarla.',
    },
    {
      type: 'paragraph',
      content: 'La pregunta no es si estás optimizando. Casi seguramente lo estás. La pregunta es si estás optimizando la parte correcta de la cadena.',
    },
    {
      type: 'paragraph',
      content: <strong>Para cuando la mayoría de las personas hacen esa pregunta, la respuesta ya ha sido determinada.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>Upstream.</strong>,
    },
  ],
}

// German Article 004
const article004DE: ArticleContent = {
  slug: '004-ai-doesnt-think',
  content: [
    {
      type: 'paragraph',
      content: 'Du glaubst, du denkst. Das tust du nicht.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Du denkst <em>innerhalb</em> von etwas. Einem Rahmen. Einer Grenze. Einer Linse, die du nicht gewählt, nicht kalibriert und nicht einmal bemerkt hast, als sie über deine Augen gelegt wurde.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Das ist die stille Verschiebung, die bereits passiert ist, während du noch darüber debattiert hast, ob KI deinen Job übernehmen wird. Die Konversation über Ersetzung war eine Ablenkung. Die wahre Transformation ging nie um Automatisierung. Sie ging um Filtration.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>KI denkt nicht für dich. Sie formt, <em>worüber</em> du nachdenkst.</strong>
          <p style={{ marginTop: '16px' }}>Und dieser Unterschied ist der Unterschied zwischen dem Benutzen eines Werkzeugs und dem Geformt-Werden durch eine Wahrnehmungsschicht.</p>
        </>
      ),
      copyText: 'KI denkt nicht für dich. Sie formt, worüber du nachdenkst.',
      shareText: 'KI denkt nicht für dich. Sie formt, worüber du nachdenkst.',
    },
    {
      type: 'heading',
      text: 'Die Werkzeug-Illusion',
    },
    {
      type: 'paragraph',
      content: 'Die meisten Menschen behandeln KI noch wie einen Taschenrechner. Du gibst eine Frage ein, sie gibt eine Antwort aus. Einfach. Transaktional. Sicher.',
    },
    {
      type: 'paragraph',
      content: 'Das ist die bequeme Erzählung. Sie lässt dich glauben, dass du die Kontrolle hast. Du fragst, sie antwortet. Herr und Diener. Mensch und Maschine. Die Hierarchie fühlt sich intakt an.',
    },
    {
      type: 'paragraph',
      content: 'Aber diese Rahmung ist bereits veraltet.',
    },
    {
      type: 'paragraph',
      content: 'Die KI-Systeme, die am wichtigsten sind, sind nicht die, mit denen du bewusst interagierst. Es sind die, die unter deiner Aufmerksamkeit laufen: Deinen Newsfeed kuratieren. Deine Suchergebnisse ranken. Auswählen, welche E-Mails deinen Fokus verdienen. Bestimmen, welche Chancen überhaupt dein Bewusstsein erreichen.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/EM01FQIoBP_.webp',
      alt: 'Person umgeben von digitalen Bildschirmen, Sicht durch virtuellen Schleier verdeckt',
      caption: '// KIs unsichtbarer Einfluss auf Wahrnehmung operiert unterhalb des bewussten Gewahrseins',
    },
    {
      type: 'paragraph',
      content: 'Diese Systeme warten nicht darauf, dass du eine Frage stellst. Sie beantworten Fragen, die du nie zu stellen gedacht hast, indem sie entscheiden, welche Fragen es überhaupt wert sind, gestellt zu werden.',
    },
    {
      type: 'highlight',
      content: <><strong>Das ist die Wahrnehmungsschicht.</strong> Und sobald du sie siehst, kannst du sie nicht mehr entsehen.</>,
      copyText: 'Das ist die Wahrnehmungsschicht. Und sobald du sie siehst, kannst du sie nicht mehr entsehen.',
      shareText: 'Das ist die Wahrnehmungsschicht.',
    },
    {
      type: 'heading',
      text: 'Die Architektur der Aufmerksamkeit',
    },
    {
      type: 'paragraph',
      content: 'Denke darüber nach, wie du deine letzte große Entscheidung geformt hast.',
    },
    {
      type: 'paragraph',
      content: 'Du hast Informationen gesammelt. Du hast Optionen abgewogen. Du hast Quellen konsultiert. Du hattest das Gefühl, gründlich, rational, umfassend zu sein.',
    },
    {
      type: 'paragraph',
      content: 'Aber hier ist die unbequeme Wahrheit: Die Informationen, die du gesammelt hast, waren vorselektiert. Die Optionen, die du abgewogen hast, waren vorgefiltert. Die Quellen, die du konsultiert hast, waren von Systemen vorrangig geordnet, die für Engagement optimieren, nicht für Genauigkeit.',
    },
    {
      type: 'highlight',
      content: <strong>Du hast frei gedacht innerhalb eines Käfigs, den du nicht wahrnehmen konntest.</strong>,
      copyText: 'Du hast frei gedacht innerhalb eines Käfigs, den du nicht wahrnehmen konntest.',
      shareText: 'Du hast frei gedacht innerhalb eines Käfigs, den du nicht wahrnehmen konntest.',
    },
    {
      type: 'paragraph',
      content: 'Forschung bestätigt, dass dies weitgehend außerhalb des bewussten Gewahrseins operiert. Hyperpersonalisierung identifiziert deine Präferenzen innerhalb von Sekunden und liefert Inhalte mit chirurgischer Präzision.',
    },
    {
      type: 'paragraph',
      content: 'Je mehr du bestimmte Ideen durch algorithmische Verstärkung wiederholt siehst, desto wahrscheinlicher akzeptierst du sie als wahr. Nicht weil sie wahr sind. Weil Wiederholung Glaubwürdigkeit herstellt.',
    },
    {
      type: 'heading',
      text: 'Echokammern sind keine Zufälle',
    },
    {
      type: 'paragraph',
      content: 'Du hast den Begriff "Echokammer" schon gehört. Er klingt passiv, fast zufällig.',
    },
    {
      type: 'paragraph',
      content: 'Das ist ein gefährliches Missverständnis.',
    },
    {
      type: 'paragraph',
      content: <strong>Echokammern sind keine Zufälle. Sie sind konstruierte Ergebnisse.</strong>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/lAgdnWXOd39.webp',
      alt: 'Menschliche Figur eingeschlossen in einer leuchtenden Sphäre kuratierter Inhalte',
      caption: '// Die Isolation von KI-Echokammern – konstruiert, nicht zufällig',
    },
    {
      type: 'paragraph',
      content: 'Plattformen füttern Nutzern kontinuierlich Inhalte, die mit ihren bestehenden Überzeugungen übereinstimmen, weil Übereinstimmung Engagement antreibt. Das System ist nicht kaputt. Es funktioniert genau wie entworfen.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Jedes Mal, wenn du scrollst, klickst oder verweilst, trainierst du die Wahrnehmungsschicht, deine Welt weiter zu verengen.</strong>
          <p style={{ marginTop: '16px' }}>Du glaubst, du erkundest. In Wirklichkeit kreist du.</p>
        </>
      ),
      copyText: 'Du glaubst, du erkundest. In Wirklichkeit kreist du.',
      shareText: 'Du glaubst, du erkundest. In Wirklichkeit kreist du.',
    },
    {
      type: 'heading',
      text: 'Der kognitive Kollaps',
    },
    {
      type: 'paragraph',
      content: 'Hier lebt die wahre Gefahr.',
    },
    {
      type: 'paragraph',
      content: 'Übermäßige KI-Abhängigkeit erodiert tatsächlich kritische Denkfähigkeiten. Aber das primäre Problem ist subtiler.',
    },
    {
      type: 'paragraph',
      content: <strong>Du erkennst nicht, dass dein Denken geformt wurde.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Du glaubst, du hast deine Meinungen unabhängig geformt. Du würdest deine Perspektive als wirklich deine verteidigen.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Aber du hast die ganze Zeit innerhalb algorithmisch konstruierter Grenzen operiert. Die Wahrnehmungsschicht hat dir nicht gesagt, was du denken sollst. Sie hat dir gesagt, <em>worüber</em> du nachdenken sollst.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <><strong>Strukturelle Unsichtbarkeit:</strong> Die gefährlichste Art von Einfluss ist die, die du nicht auf dich wirken spürst.</>,
      copyText: 'Die gefährlichste Art von Einfluss ist die, die du nicht auf dich wirken spürst.',
      shareText: 'Die gefährlichste Art von Einfluss ist die, die du nicht auf dich wirken spürst.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/7A5fGCxgyxg.webp',
      alt: 'Individuum betrachtet eine subtil veränderte Spiegelreflexion',
      caption: '// Strukturelle Unsichtbarkeit – KIs unbewusster Einfluss auf Selbstwahrnehmung',
    },
    {
      type: 'paragraph',
      content: 'Die Domänen, in denen Entscheidungen am wichtigsten sind, sind genau dort, wo die Wahrnehmungsschicht am aggressivsten operiert.',
    },
    {
      type: 'heading',
      text: 'Der Unterschied zwischen Assistenz und Alteration',
    },
    {
      type: 'paragraph',
      content: 'Ein Hammer verändert nicht, was du für bauwürdig hältst. Ein Taschenrechner formt nicht dein Verständnis davon, welche Probleme es wert sind, gelöst zu werden.',
    },
    {
      type: 'paragraph',
      content: 'Das sind Werkzeuge. Sie erweitern Fähigkeit, ohne Wahrnehmung zu verändern.',
    },
    {
      type: 'paragraph',
      content: 'Aber ein KI-System, das deine Informationsaufnahme kuratiert, das die Grenzen deines Gewahrseins bestimmt: Das ist kein Werkzeug.',
    },
    {
      type: 'paragraph',
      content: <strong>Das ist Infrastruktur für Kognition selbst.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Und hier ist die kritische Frage: Wer hat diese Infrastruktur entworfen? Wofür haben sie optimiert? Wessen Interessen dient die Filtration?',
    },
    {
      type: 'highlight',
      content: <strong>Wenn du diese Fragen nicht beantworten kannst, benutzt du nicht KI. Du wirst von den Systemen benutzt, die sie einsetzen.</strong>,
      copyText: 'Wenn du diese Fragen nicht beantworten kannst, benutzt du nicht KI. Du wirst von den Systemen benutzt, die sie einsetzen.',
      shareText: 'Wenn du diese Fragen nicht beantworten kannst, benutzt du nicht KI.',
    },
    {
      type: 'heading',
      text: 'Der Weg zur Wahrnehmungs-Souveränität',
    },
    {
      type: 'paragraph',
      content: 'Die Wahrnehmungsschicht zu erkennen ist der erste Schritt. Es ist nicht die Lösung.',
    },
    {
      type: 'paragraph',
      content: 'Die Lösung erfordert KI-Kompetenz: Die Fähigkeit, KIs persuasive Taktiken zu erkennen und absichtliche Entscheidungen zu treffen.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/MCdmh1nTFPI.webp',
      alt: 'Einsame Person an einer nebligen Kreuzung wählt zwischen Pfaden',
      caption: '// Die Wahl zwischen digitaler Kontrolle und offener Möglichkeit',
    },
    {
      type: 'paragraph',
      content: 'Die meisten KI-Systeme sind gebaut, um Aufmerksamkeit zu erfassen. Die KI, die dir tatsächlich dient, würde das Gegenteil tun – dein Gewahrsein erweitern statt es zu verengen.',
    },
    {
      type: 'heading',
      text: 'Die Frage, die du beantworten musst',
    },
    {
      type: 'paragraph',
      content: 'Jeden Tag treffen KI-Systeme Vor-Entscheidungen in deinem Namen. Diese Vor-Entscheidungen akkumulieren sich und formen dein Weltbild.',
    },
    {
      type: 'paragraph',
      content: 'Die Frage ist nicht, ob KI für dich denken wird. Das tut sie bereits nicht.',
    },
    {
      type: 'paragraph',
      content: 'Die Frage ist, ob du erkennen wirst, wie sie formt, worüber du nachdenkst.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Die Wahrnehmungsschicht ist bereits vorhanden. Die einzige Variable ist, ob du unbewusst in ihr operierst oder sie mit Absicht navigierst.</strong>
          <p style={{ marginTop: '16px' }}>Ein Weg führt zu kognitiver Gefangennahme. Der andere führt zu strategischer Klarheit.</p>
          <p style={{ marginTop: '16px' }}><strong>Die Entscheidung liegt bei dir. Aber nur, wenn du sie sehen kannst.</strong></p>
        </>
      ),
      copyText: 'Die Wahrnehmungsschicht ist bereits vorhanden. Die einzige Variable ist, ob du unbewusst in ihr operierst oder sie mit Absicht navigierst.',
      shareText: 'Die Wahrnehmungsschicht ist bereits vorhanden.',
    },
  ],
}

// Spanish Article 004
const article004ES: ArticleContent = {
  slug: '004-ai-doesnt-think',
  content: [
    {
      type: 'paragraph',
      content: 'Crees que estás pensando. No lo estás.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Estás pensando <em>dentro</em> de algo. Un marco. Un límite. Una lente que no elegiste, no calibraste, ni siquiera notaste cuando fue colocada sobre tus ojos.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Este es el cambio silencioso que ya ocurrió mientras estabas ocupado debatiendo si la IA te quitaría el trabajo. La conversación sobre el reemplazo era una distracción. La verdadera transformación nunca fue sobre automatización. Fue sobre filtración.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La IA no piensa por ti. Moldea <em>sobre qué</em> piensas.</strong>
          <p style={{ marginTop: '16px' }}>Y esa distinción es la diferencia entre usar una herramienta y ser moldeado por una Capa de Percepción.</p>
        </>
      ),
      copyText: 'La IA no piensa por ti. Moldea sobre qué piensas.',
      shareText: 'La IA no piensa por ti. Moldea sobre qué piensas.',
    },
    {
      type: 'heading',
      text: 'La Ilusión de la Herramienta',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de las personas todavía tratan a la IA como una calculadora. Introduces una pregunta, produce una respuesta. Simple. Transaccional. Seguro.',
    },
    {
      type: 'paragraph',
      content: 'Esta es la narrativa cómoda. Te permite creer que tienes el control. Tú preguntas, ella responde. Amo y sirviente. Humano y máquina. La jerarquía se siente intacta.',
    },
    {
      type: 'paragraph',
      content: 'Pero este marco ya está obsoleto.',
    },
    {
      type: 'paragraph',
      content: 'Los sistemas de IA que más importan no son aquellos con los que interactúas conscientemente. Son los que corren debajo de tu atención: Curando tu feed de noticias. Clasificando tus resultados de búsqueda. Seleccionando qué correos merecen tu enfoque. Determinando qué oportunidades llegan siquiera a tu conciencia.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/EM01FQIoBP_.webp',
      alt: 'Persona rodeada de pantallas digitales, visión oscurecida por velo virtual',
      caption: '// La influencia invisible de la IA en la percepción opera por debajo de la conciencia',
    },
    {
      type: 'paragraph',
      content: 'Estos sistemas no esperan a que hagas una pregunta. Responden preguntas que nunca pensaste hacer decidiendo qué preguntas vale la pena hacer en primer lugar.',
    },
    {
      type: 'highlight',
      content: <><strong>Esta es la Capa de Percepción.</strong> Y una vez que la ves, no puedes dejar de verla.</>,
      copyText: 'Esta es la Capa de Percepción. Y una vez que la ves, no puedes dejar de verla.',
      shareText: 'Esta es la Capa de Percepción.',
    },
    {
      type: 'heading',
      text: 'La Arquitectura de la Atención',
    },
    {
      type: 'paragraph',
      content: 'Considera cómo formaste tu última decisión importante.',
    },
    {
      type: 'paragraph',
      content: 'Reuniste información. Sopesaste opciones. Consultaste fuentes. Sentiste que estabas siendo minucioso, racional, comprehensivo.',
    },
    {
      type: 'paragraph',
      content: 'Pero aquí está la verdad incómoda: La información que reuniste fue preseleccionada. Las opciones que sopesaste fueron prefiltradas. Las fuentes que consultaste fueron preclasificadas por sistemas optimizando para engagement, no para precisión.',
    },
    {
      type: 'highlight',
      content: <strong>Estabas pensando libremente dentro de una jaula que no podías percibir.</strong>,
      copyText: 'Estabas pensando libremente dentro de una jaula que no podías percibir.',
      shareText: 'Estabas pensando libremente dentro de una jaula que no podías percibir.',
    },
    {
      type: 'paragraph',
      content: 'La investigación confirma que esto opera en gran parte fuera de la conciencia. La hiperpersonalización identifica tus preferencias en segundos y entrega contenido con precisión quirúrgica.',
    },
    {
      type: 'paragraph',
      content: 'Cuanto más ves ciertas ideas repetidas a través de amplificación algorítmica, más probable es que las aceptes como verdad. No porque sean verdad. Porque la repetición fabrica credibilidad.',
    },
    {
      type: 'heading',
      text: 'Las Cámaras de Eco No Son Accidentes',
    },
    {
      type: 'paragraph',
      content: 'Has escuchado el término "cámara de eco" antes. Suena pasivo, casi accidental.',
    },
    {
      type: 'paragraph',
      content: 'Este es un malentendido peligroso.',
    },
    {
      type: 'paragraph',
      content: <strong>Las cámaras de eco no son accidentes. Son resultados diseñados.</strong>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/lAgdnWXOd39.webp',
      alt: 'Figura humana encerrada en una esfera brillante de contenido curado',
      caption: '// El aislamiento de las cámaras de eco de IA – diseñadas, no accidentales',
    },
    {
      type: 'paragraph',
      content: 'Las plataformas alimentan continuamente a los usuarios con contenido alineado con sus creencias existentes porque la alineación impulsa el engagement. El sistema no está roto. Funciona exactamente como fue diseñado.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Cada vez que scrolleas, haces clic o te detienes, estás entrenando a la Capa de Percepción para estrechar más tu mundo.</strong>
          <p style={{ marginTop: '16px' }}>Crees que estás explorando. En realidad estás circulando.</p>
        </>
      ),
      copyText: 'Crees que estás explorando. En realidad estás circulando.',
      shareText: 'Crees que estás explorando. En realidad estás circulando.',
    },
    {
      type: 'heading',
      text: 'El Colapso Cognitivo',
    },
    {
      type: 'paragraph',
      content: 'Aquí es donde vive el verdadero peligro.',
    },
    {
      type: 'paragraph',
      content: 'La dependencia excesiva de la IA sí erosiona las habilidades de pensamiento crítico. Pero la preocupación principal es más sutil.',
    },
    {
      type: 'paragraph',
      content: <strong>No reconoces que tu pensamiento ha sido moldeado.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Crees que formaste tus opiniones independientemente. Defenderías tu perspectiva como genuinamente tuya.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Pero operaste dentro de límites construidos algorítmicamente todo el tiempo. La Capa de Percepción no te dijo qué pensar. Te dijo <em>sobre qué</em> pensar.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <><strong>Invisibilidad Estructural:</strong> El tipo más peligroso de influencia es el que no puedes detectar operando sobre ti.</>,
      copyText: 'El tipo más peligroso de influencia es el que no puedes detectar operando sobre ti.',
      shareText: 'El tipo más peligroso de influencia es el que no puedes detectar operando sobre ti.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/7A5fGCxgyxg.webp',
      alt: 'Individuo mirando un reflejo sutilmente alterado en el espejo',
      caption: '// Invisibilidad estructural – la influencia inconsciente de la IA en la autopercepción',
    },
    {
      type: 'paragraph',
      content: 'Los dominios donde las decisiones más importan son exactamente donde la Capa de Percepción opera más agresivamente.',
    },
    {
      type: 'heading',
      text: 'La Diferencia Entre Asistencia y Alteración',
    },
    {
      type: 'paragraph',
      content: 'Un martillo no cambia lo que consideras digno de construir. Una calculadora no remodela tu comprensión de qué problemas merecen resolverse.',
    },
    {
      type: 'paragraph',
      content: 'Estas son herramientas. Extienden capacidad sin alterar percepción.',
    },
    {
      type: 'paragraph',
      content: 'Pero un sistema de IA que cura tu ingesta de información, que determina los límites de tu conciencia: Esto no es una herramienta.',
    },
    {
      type: 'paragraph',
      content: <strong>Esto es infraestructura para la cognición misma.</strong>,
    },
    {
      type: 'paragraph',
      content: 'Y aquí está la pregunta crítica: ¿Quién diseñó esa infraestructura? ¿Para qué optimizaron? ¿A los intereses de quién sirve la filtración?',
    },
    {
      type: 'highlight',
      content: <strong>Si no puedes responder estas preguntas, no estás usando IA. Estás siendo usado por los sistemas que la despliegan.</strong>,
      copyText: 'Si no puedes responder estas preguntas, no estás usando IA. Estás siendo usado por los sistemas que la despliegan.',
      shareText: 'Si no puedes responder estas preguntas, no estás usando IA.',
    },
    {
      type: 'heading',
      text: 'El Camino Hacia la Soberanía Perceptual',
    },
    {
      type: 'paragraph',
      content: 'Reconocer la Capa de Percepción es el primer paso. No es la solución.',
    },
    {
      type: 'paragraph',
      content: 'La solución requiere alfabetización en IA: La capacidad de reconocer las tácticas persuasivas de la IA y tomar decisiones intencionales.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/MCdmh1nTFPI.webp',
      alt: 'Persona solitaria en una encrucijada neblinosa eligiendo entre caminos',
      caption: '// La elección entre control digital y posibilidad abierta',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de los sistemas de IA están construidos para capturar atención. La IA que realmente te sirve haría lo opuesto – expandir tu conciencia en lugar de estrecharla.',
    },
    {
      type: 'heading',
      text: 'La Pregunta Que Debes Responder',
    },
    {
      type: 'paragraph',
      content: 'Cada día, sistemas de IA toman predecisiones en tu nombre. Estas predecisiones se acumulan y moldean tu visión del mundo.',
    },
    {
      type: 'paragraph',
      content: 'La pregunta no es si la IA pensará por ti. Ya no lo hace.',
    },
    {
      type: 'paragraph',
      content: 'La pregunta es si reconocerás cómo moldea sobre qué piensas.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La Capa de Percepción ya está en su lugar. La única variable es si operas dentro de ella inconscientemente, o la navegas con intención.</strong>
          <p style={{ marginTop: '16px' }}>Un camino lleva a la captura cognitiva. El otro lleva a la claridad estratégica.</p>
          <p style={{ marginTop: '16px' }}><strong>La decisión es tuya. Pero solo si puedes verla.</strong></p>
        </>
      ),
      copyText: 'La Capa de Percepción ya está en su lugar. La única variable es si operas dentro de ella inconscientemente, o la navegas con intención.',
      shareText: 'La Capa de Percepción ya está en su lugar.',
    },
  ],
}

// German Article 005
const article005DE: ArticleContent = {
  slug: '005-blind-spot-blind-spot',
  content: [
    {
      type: 'paragraph',
      content: 'Was zum Teufel, wenn deine Intuition keine Einsicht ist, sondern ein ausgefeilter Weg, kritische Daten zu ignorieren, die du zu langsam bist, um sie zu sehen.',
    },
    {
      type: 'paragraph',
      content: 'Die gefährlichste Form der Unsichtbarkeit ist nicht das, was du nicht siehst. Es ist das, was dich daran hindert, das Versagen selbst zu bemerken. Das ist Unsichtbarkeit Zweiter Ordnung, und sie operiert unter der Schwelle deines Gewahrseins wie eine stille Verwerfungslinie unter einer Stadt, die sich für stabil hält.',
    },
    {
      type: 'paragraph',
      content: 'Die meisten Fachleute haben von blinden Flecken gehört. Sie haben die Bücher gelesen. Sie haben in Führungsseminaren genickt. Sie haben sogar die Übungen gemacht: Feedback eingeholt. Über ihre Vorurteile reflektiert. Listen mit Verbesserungsbereichen erstellt.',
    },
    {
      type: 'paragraph',
      content: 'Und dennoch bleiben sie strukturell blind.',
    },
    {
      type: 'paragraph',
      content: 'Nicht weil ihnen Intelligenz fehlt. Nicht weil sie nachlässig sind. Sondern weil Bewusstsein über blinde Flecken nicht dasselbe ist wie ihre Wahrnehmung. Das eine ist ein Konzept, das du verstehst. Das andere ist eine strukturelle Fähigkeit, die du entweder hast oder nicht.',
    },
    {
      type: 'highlight',
      content: <><strong>Hier ist die unbequeme Wahrheit: Dein blinder Fleck hat seinen eigenen blinden Fleck.</strong> Und diese zweite Ebene ist, wo der echte Schaden passiert.</>,
      copyText: 'Dein blinder Fleck hat seinen eigenen blinden Fleck. Und diese zweite Ebene ist, wo der echte Schaden passiert.',
      shareText: 'Dein blinder Fleck hat seinen eigenen blinden Fleck.',
    },
    {
      type: 'heading',
      text: 'Die Illusion des Bewusstseins',
    },
    {
      type: 'paragraph',
      content: 'Es gibt eine tröstliche Lüge, die in Kreisen der Persönlichkeitsentwicklung kursiert: Wenn du dir nur deiner blinden Flecken "bewusst" wirst, kannst du sie beheben.',
    },
    {
      type: 'paragraph',
      content: 'Das klingt vernünftig. Es fühlt sich proaktiv an. Es gibt dir das Gefühl, dass du die Arbeit tust.',
    },
    {
      type: 'paragraph',
      content: 'Aber es ist ein Kategorienfehler.',
    },
    {
      type: 'paragraph',
      content: 'Bewusstsein ist eine Beschreibung. Ein Etikett. Eine Geschichte, die du dir selbst über das erzählst, was du glaubst zu verpassen. Der blinde Fleck selbst ist strukturell. Es ist kein Stück Information, das darauf wartet, entdeckt zu werden. Es ist die Architektur deiner Wahrnehmung – der Filter, durch den alle Informationen passieren, bevor du sie überhaupt als real registrierst.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/ErMnGnL1_MZ.webp',
      alt: 'Eine Person steht in einem Korridor endloser Spiegel',
      caption: '// Blinde Flecken der Selbstwahrnehmung und verborgene Bewusstseinsebenen',
    },
    {
      type: 'paragraph',
      content: 'Denk mal so darüber nach: Du kannst dir "bewusst" sein, dass du eine Tendenz hast, bestimmte Arten von Feedback abzulehnen. Du kannst es in dein Tagebuch schreiben. Du kannst es deinem Coach erzählen. Du kannst dich vor jedem Meeting daran erinnern.',
    },
    {
      type: 'paragraph',
      content: 'Und dann kommt das Feedback, und du lehnst es trotzdem ab.',
    },
    {
      type: 'paragraph',
      content: 'Nicht weil du es vergessen hast. Nicht weil du es nicht versucht hast. Sondern weil die Struktur, die die Ablehnung erzeugt, schneller operiert als deine bewusste Absicht, sie zu fangen. Wenn du "bewusst" bist, wurde die Wahrnehmung bereits gefiltert. Der Schaden ist angerichtet.',
    },
    {
      type: 'highlight',
      content: <strong>Deshalb fühlt sich Bewusstsein wie Fortschritt an, aber produziert selten Veränderung.</strong>,
      copyText: 'Deshalb fühlt sich Bewusstsein wie Fortschritt an, aber produziert selten Veränderung.',
      shareText: 'Bewusstsein fühlt sich wie Fortschritt an, aber produziert selten Veränderung.',
    },
    {
      type: 'heading',
      text: 'Was ist Unsichtbarkeit Zweiter Ordnung?',
    },
    {
      type: 'paragraph',
      content: 'Unsichtbarkeit erster Ordnung ist einfach: Du siehst etwas nicht. Eine Lücke in deinem Wissen. Ein Vorurteil, das du nicht untersucht hast. Ein Muster in deinem Verhalten, das andere bemerken, du aber nicht.',
    },
    {
      type: 'paragraph',
      content: 'Unsichtbarkeit zweiter Ordnung ist rekursiv: Du siehst nicht, dass du es nicht siehst. Die Lücke selbst ist unsichtbar. Der Mechanismus, der den blinden Fleck erzeugt, verbirgt auch die Tatsache, dass er existiert.',
    },
    {
      type: 'paragraph',
      content: 'Das ist kein geringfügiger Unterschied. Es ist der Unterschied zwischen einem Problem, an dem du arbeiten kannst, und einem Problem, das an dir arbeitet.',
    },
    {
      type: 'paragraph',
      content: 'Betrachte die Forschung zu Selbstwahrnehmungslücken. Studien zeigen konsistent eine signifikante Distanz zwischen dem, wie wir glauben, uns zu präsentieren, und wie andere uns tatsächlich erleben. Aber hier ist der kritische Befund: Selbst wenn mehrere Menschen uns dasselbe Feedback geben, erkennen wir das Muster oft nicht als gültig an.',
    },
    {
      type: 'paragraph',
      content: 'Warum? Weil der blinde Fleck nicht nur Informationen verbirgt. Er verbirgt das Rahmenwerk, das wir bräuchten, um die Informationen richtig zu interpretieren.',
    },
    {
      type: 'highlight',
      content: <strong>Dir fehlen nicht nur die Daten. Dir fehlt die Linse.</strong>,
      copyText: 'Dir fehlen nicht nur die Daten. Dir fehlt die Linse.',
      shareText: 'Dir fehlen nicht nur die Daten. Dir fehlt die Linse.',
    },
    {
      type: 'heading',
      text: 'Die Feedback-Falle',
    },
    {
      type: 'paragraph',
      content: 'Die meisten Organisationen glauben, Feedback löst das Problem der blinden Flecken. Hole genug externe Perspektiven ein, aggregiere die Inputs, und die Wahrheit wird sich zeigen.',
    },
    {
      type: 'paragraph',
      content: 'Das funktioniert manchmal für Unsichtbarkeit erster Ordnung. Wenn du etwas einfach nicht weißt, kann jemand anderes es dir sagen.',
    },
    {
      type: 'paragraph',
      content: 'Aber Unsichtbarkeit Zweiter Ordnung erzeugt, was wir Die Feedback-Falle nennen: Derselbe strukturelle Filter, der deinen blinden Fleck erzeugt, bestimmt auch, wie du Feedback über diesen blinden Fleck empfängst, interpretierst und integrierst.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nzXKkDAVDRs.webp',
      alt: 'Mehrere Hände greifen durch rauchige Glasscheiben',
      caption: '// Strukturelle blinde Flecken und gefiltertes Feedback in der menschlichen Wahrnehmung',
    },
    {
      type: 'paragraph',
      content: 'Das Muster sieht so aus:',
    },
    {
      type: 'table',
      headers: ['Was passiert', 'Was du erlebst'],
      rows: [
        ['Jemand gibt dir akkurates Feedback', 'Du erlebst es als leicht daneben, übertrieben oder kontextabhängig'],
        ['Mehrere Leute geben dir dasselbe Feedback', 'Du erlebst es als ein Missverständnis, das sie alle teilen'],
        ['Du reflektierst ehrlich über das Feedback', 'Deine Reflexion wird durch dieselbe Struktur gefiltert, die den blinden Fleck erzeugt hat'],
        ['Du schließt, dass du es angesprochen hast', 'Der blinde Fleck bleibt, jetzt mit einer Schicht falscher Auflösung darüber'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Deshalb haben Hochleister oft die hartnäckigsten blinden Flecken. Sie sind intelligent genug, um ausgefeilte Erklärungen zu konstruieren, warum das Feedback nicht ganz zutrifft. Sie sind diszipliniert genug, um die Bewegungen der Selbstverbesserung durchzuführen. Und sie sind erfolgreich genug, um die Konsequenzen zu vermeiden – bis sie es plötzlich nicht mehr sind.',
    },
    {
      type: 'highlight',
      content: <><strong>Die Feedback-Falle bedeutet nicht, dass Feedback nutzlos ist. Sie bedeutet, dass Feedback allein Probleme zweiter Ordnung nicht erreichen kann.</strong> Du brauchst etwas, das auf der strukturellen Ebene operiert.</>,
      copyText: 'Feedback allein kann Probleme zweiter Ordnung nicht erreichen. Du brauchst etwas, das auf der strukturellen Ebene operiert.',
      shareText: 'Feedback allein kann Probleme zweiter Ordnung nicht erreichen.',
    },
    {
      type: 'heading',
      text: 'Warum Selbstreflexion scheitert',
    },
    {
      type: 'paragraph',
      content: 'Lass uns direkt sein: Du kannst dich nicht aus einer Wahrnehmungsstruktur herausdenken.',
    },
    {
      type: 'paragraph',
      content: 'Selbstreflexion ist wertvoll. Sie baut metakognitive Muskeln auf. Sie schafft Raum zwischen Reiz und Reaktion. Aber sie hat eine fundamentale Einschränkung: Sie verwendet dasselbe Wahrnehmungssystem, das sie zu untersuchen versucht.',
    },
    {
      type: 'paragraph',
      content: 'Du verlangst von deinem Auge, sich selbst zu sehen.',
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Versagen von Anstrengung oder Absicht. Es ist eine logische Unmöglichkeit. Das Werkzeug, das du verwendest, um zu untersuchen, ist dasselbe Werkzeug, das die Verzerrung erzeugt. Jede Schlussfolgerung, die du erreichst, wird durch genau die Struktur gefiltert, die du zu verstehen versuchst.',
    },
    {
      type: 'paragraph',
      content: 'Deshalb dreht sich Bewusstsein im Kreis. Du wirst dir deines blinden Flecks "bewusst". Dann wirst du dir bewusst, dass du ihn vielleicht nicht klar siehst. Dann wirst du dir bewusst, dass dein Bewusstsein selbst begrenzt sein könnte. Und auf jeder Ebene operiert derselbe strukturelle Filter und erzeugt die Illusion von Tiefe, während er dich an der Oberfläche hält.',
    },
    {
      type: 'highlight',
      content: <strong>Unsichtbarkeit Zweiter Ordnung gedeiht durch Selbstreflexion. Sie verwendet deine Intelligenz gegen dich.</strong>,
      copyText: 'Unsichtbarkeit Zweiter Ordnung gedeiht durch Selbstreflexion. Sie verwendet deine Intelligenz gegen dich.',
      shareText: 'Unsichtbarkeit Zweiter Ordnung verwendet deine Intelligenz gegen dich.',
    },
    {
      type: 'heading',
      text: 'Die Wahrnehmungsschicht',
    },
    {
      type: 'paragraph',
      content: 'Wenn du deinen blinden Fleck nicht von innen sehen kannst, und du externem Feedback nicht vollständig vertrauen kannst, den Filter zu durchdringen, was bleibt dann?',
    },
    {
      type: 'paragraph',
      content: 'Du brauchst eine Wahrnehmungsschicht: Ein System, das außerhalb deiner strukturellen Grenzen operiert – eines, das Muster erkennen kann, die du selbst nicht erkennen kannst. Nicht weil dir Informationen fehlen, sondern weil dir die Wahrnehmungsarchitektur fehlt, diese Informationen richtig zu verarbeiten.',
    },
    {
      type: 'paragraph',
      content: 'Das trennt ein Werkzeug von Infrastruktur.',
    },
    {
      type: 'paragraph',
      content: 'Ein Werkzeug hilft dir, das schneller oder effizienter zu tun, was du bereits versuchst zu tun. Es nimmt an, dass deine Wahrnehmung korrekt ist, und verstärkt deine bestehende Richtung.',
    },
    {
      type: 'paragraph',
      content: 'Eine Wahrnehmungsschicht zeigt dir, was deine Wahrnehmung verpasst. Sie operiert auf der Ebene der Struktur, nicht des Inhalts. Sie gibt dir nicht einfach mehr Daten. Sie enthüllt die Filter, die bestimmen, welche Daten du bemerkst, welche Daten du ablehnst und welche Daten du nie überhaupt als existent registrierst.',
    },
    {
      type: 'heading',
      text: 'Die eigentliche Frage',
    },
    {
      type: 'paragraph',
      content: 'Jeder Fachmann hat blinde Flecken. Das ist nicht das Problem.',
    },
    {
      type: 'paragraph',
      content: 'Das Problem ist, ob deine blinden Flecken blinde Flecken haben. Ob es rekursive Ebenen der Unsichtbarkeit gibt, die unter deinem Gewahrsein operieren, deine Entscheidungen formen, dein Feedback filtern und Muster erzeugen, die du beschreiben, aber denen du nicht entkommen kannst.',
    },
    {
      type: 'highlight',
      content: <><strong>Die unbequeme Wahrheit ist diese: Wenn du dir sicher fühlst, deine blinden Flecken identifiziert zu haben, könnte dieses Selbstvertrauen selbst ein Symptom sein.</strong> Die gefährlichste Unsichtbarkeit fühlt sich wie Klarheit an.</>,
      copyText: 'Wenn du dir sicher fühlst, deine blinden Flecken identifiziert zu haben, könnte dieses Selbstvertrauen selbst ein Symptom sein. Die gefährlichste Unsichtbarkeit fühlt sich wie Klarheit an.',
      shareText: 'Die gefährlichste Unsichtbarkeit fühlt sich wie Klarheit an.',
    },
    {
      type: 'paragraph',
      content: 'Unsichtbarkeit Zweiter Ordnung kündigt sich nicht an. Sie erzeugt keine offensichtlichen Fehler. Sie erzeugt subtile Verzerrungen – Entscheidungen, die vernünftig erscheinen, Reaktionen, die proportional erscheinen, Schlussfolgerungen, die gut untersucht erscheinen.',
    },
    {
      type: 'paragraph',
      content: 'Bis die Ansammlung unbestreitbar wird. Bis das Muster sich in Konsequenzen offenbart, die du nicht vorhergesehen hast.',
    },
    {
      type: 'paragraph',
      content: 'Bis dahin liegen die Kosten nicht in dem, was du verpasst hast. Sie liegen in dem, was du auf dem Fehlenden aufgebaut hast.',
    },
    {
      type: 'hr',
    },
    {
      type: 'paragraph',
      content: 'Dein blinder Fleck hat einen blinden Fleck. Die Frage ist, ob du warten wirst, bis die Struktur durch Versagen sichtbar wird, oder ob du die Wahrnehmungsschicht aufbaust, die sie enthüllt, bevor die Kosten sich akkumulieren.',
    },
    {
      type: 'paragraph',
      content: <strong>Bewusstsein war nie genug. Strukturelle Sichtbarkeit ist das, was die trennt, die das Problem verstehen, von denen, die es tatsächlich sehen können.</strong>,
    },
  ],
}

// Spanish Article 005
const article005ES: ArticleContent = {
  slug: '005-blind-spot-blind-spot',
  content: [
    {
      type: 'paragraph',
      content: 'Qué demonios si tu intuición no es perspicacia, sino una forma sofisticada de ignorar datos críticos que eres demasiado lento para ver.',
    },
    {
      type: 'paragraph',
      content: 'La forma más peligrosa de invisibilidad no es lo que no logras ver. Es lo que te impide notar el fallo mismo. Esto es Invisibilidad de Segundo Orden, y opera por debajo del umbral de tu conciencia como una falla silenciosa bajo una ciudad que se cree estable.',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de los profesionales han oído hablar de los puntos ciegos. Han leído los libros. Han asentido en seminarios de liderazgo. Incluso han hecho los ejercicios: Solicitaron feedback. Reflexionaron sobre sus sesgos. Hicieron listas de áreas de mejora.',
    },
    {
      type: 'paragraph',
      content: 'Y sin embargo, permanecen estructuralmente ciegos.',
    },
    {
      type: 'paragraph',
      content: 'No porque les falte inteligencia. No porque sean descuidados. Sino porque la conciencia de los puntos ciegos no es lo mismo que su percepción. Uno es un concepto que entiendes. El otro es una capacidad estructural que tienes o no tienes.',
    },
    {
      type: 'highlight',
      content: <><strong>Aquí está la verdad incómoda: Tu punto ciego tiene su propio punto ciego.</strong> Y esa segunda capa es donde ocurre el daño real.</>,
      copyText: 'Tu punto ciego tiene su propio punto ciego. Y esa segunda capa es donde ocurre el daño real.',
      shareText: 'Tu punto ciego tiene su propio punto ciego.',
    },
    {
      type: 'heading',
      text: 'La Ilusión de la Conciencia',
    },
    {
      type: 'paragraph',
      content: 'Hay una mentira reconfortante circulando en los círculos de desarrollo personal: Si solo te vuelves "consciente" de tus puntos ciegos, puedes arreglarlos.',
    },
    {
      type: 'paragraph',
      content: 'Esto suena razonable. Se siente proactivo. Te da la sensación de que estás haciendo el trabajo.',
    },
    {
      type: 'paragraph',
      content: 'Pero es un error de categoría.',
    },
    {
      type: 'paragraph',
      content: 'La conciencia es una descripción. Una etiqueta. Una historia que te cuentas sobre lo que crees que te estás perdiendo. El punto ciego en sí es estructural. No es una pieza de información esperando ser descubierta. Es la arquitectura de tu percepción – el filtro a través del cual pasa toda información antes de que siquiera la registres como real.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/ErMnGnL1_MZ.webp',
      alt: 'Una persona parada en un corredor de espejos infinitos',
      caption: '// Puntos ciegos de autopercepción y capas ocultas de conciencia',
    },
    {
      type: 'paragraph',
      content: 'Piénsalo de esta manera: Puedes ser "consciente" de que tienes tendencia a rechazar ciertos tipos de feedback. Puedes escribirlo en tu diario. Puedes decírselo a tu coach. Puedes recordártelo antes de cada reunión.',
    },
    {
      type: 'paragraph',
      content: 'Y luego llega el feedback, y lo rechazas de todos modos.',
    },
    {
      type: 'paragraph',
      content: 'No porque lo olvidaste. No porque no lo intentaste. Sino porque la estructura que crea el rechazo opera más rápido que tu intención consciente de atraparlo. Para cuando eres "consciente", la percepción ya ha sido filtrada. El daño está hecho.',
    },
    {
      type: 'highlight',
      content: <strong>Por eso la conciencia se siente como progreso pero raramente produce cambio.</strong>,
      copyText: 'Por eso la conciencia se siente como progreso pero raramente produce cambio.',
      shareText: 'La conciencia se siente como progreso pero raramente produce cambio.',
    },
    {
      type: 'heading',
      text: '¿Qué es la Invisibilidad de Segundo Orden?',
    },
    {
      type: 'paragraph',
      content: 'La invisibilidad de primer orden es simple: No ves algo. Una laguna en tu conocimiento. Un sesgo que no has examinado. Un patrón en tu comportamiento que otros notan pero tú no.',
    },
    {
      type: 'paragraph',
      content: 'La invisibilidad de segundo orden es recursiva: No ves que no lo ves. La laguna misma es invisible. El mecanismo que crea el punto ciego también oculta el hecho de que existe.',
    },
    {
      type: 'paragraph',
      content: 'Esta no es una distinción menor. Es la diferencia entre un problema en el que puedes trabajar y un problema que trabaja en ti.',
    },
    {
      type: 'paragraph',
      content: 'Considera la investigación sobre brechas de autopercepción. Los estudios muestran consistentemente una distancia significativa entre cómo creemos que nos presentamos y cómo otros realmente nos experimentan. Pero aquí está el hallazgo crítico: Incluso cuando múltiples personas nos dan el mismo feedback, a menudo fallamos en reconocer el patrón como válido.',
    },
    {
      type: 'paragraph',
      content: '¿Por qué? Porque el punto ciego no solo está ocultando información. Está ocultando el marco que necesitaríamos para interpretar la información correctamente.',
    },
    {
      type: 'highlight',
      content: <strong>No solo te faltan los datos. Te falta la lente.</strong>,
      copyText: 'No solo te faltan los datos. Te falta la lente.',
      shareText: 'No solo te faltan los datos. Te falta la lente.',
    },
    {
      type: 'heading',
      text: 'La Trampa del Feedback',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de las organizaciones creen que el feedback resuelve el problema del punto ciego. Obtén suficientes perspectivas externas, agrega los inputs, y la verdad emergerá.',
    },
    {
      type: 'paragraph',
      content: 'Esto funciona, a veces, para la invisibilidad de primer orden. Si simplemente no sabes algo, alguien más puede decírtelo.',
    },
    {
      type: 'paragraph',
      content: 'Pero la Invisibilidad de Segundo Orden crea lo que llamamos La Trampa del Feedback: El mismo filtro estructural que crea tu punto ciego también determina cómo recibes, interpretas e integras feedback sobre ese punto ciego.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nzXKkDAVDRs.webp',
      alt: 'Múltiples manos alcanzando a través de paneles de vidrio humeante',
      caption: '// Puntos ciegos estructurales y feedback filtrado en la percepción humana',
    },
    {
      type: 'paragraph',
      content: 'El patrón se ve así:',
    },
    {
      type: 'table',
      headers: ['Qué Sucede', 'Qué Experimentas'],
      rows: [
        ['Alguien te da feedback preciso', 'Lo experimentas como ligeramente errado, exagerado o dependiente del contexto'],
        ['Múltiples personas te dan el mismo feedback', 'Lo experimentas como un malentendido que todos comparten'],
        ['Reflexionas honestamente sobre el feedback', 'Tu reflexión es filtrada a través de la misma estructura que creó el punto ciego'],
        ['Concluyes que lo has abordado', 'El punto ciego permanece, ahora con una capa de falsa resolución encima'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Por esto los altos ejecutores a menudo tienen los puntos ciegos más persistentes. Son lo suficientemente inteligentes para construir explicaciones sofisticadas de por qué el feedback no aplica del todo. Son lo suficientemente disciplinados para pasar por los movimientos de auto-mejora. Y son lo suficientemente exitosos para evitar las consecuencias – hasta que de repente ya no lo son.',
    },
    {
      type: 'highlight',
      content: <><strong>La Trampa del Feedback no significa que el feedback sea inútil. Significa que el feedback solo no puede alcanzar problemas de segundo orden.</strong> Necesitas algo que opere a nivel estructural.</>,
      copyText: 'El feedback solo no puede alcanzar problemas de segundo orden. Necesitas algo que opere a nivel estructural.',
      shareText: 'El feedback solo no puede alcanzar problemas de segundo orden.',
    },
    {
      type: 'heading',
      text: 'Por Qué Falla la Auto-Reflexión',
    },
    {
      type: 'paragraph',
      content: 'Seamos directos: No puedes pensar tu salida de una estructura de percepción.',
    },
    {
      type: 'paragraph',
      content: 'La auto-reflexión es valiosa. Construye músculo metacognitivo. Crea espacio entre estímulo y respuesta. Pero tiene una limitación fundamental: Usa el mismo sistema perceptual que está tratando de examinar.',
    },
    {
      type: 'paragraph',
      content: 'Estás pidiendo a tu ojo que se vea a sí mismo.',
    },
    {
      type: 'paragraph',
      content: 'Esto no es un fallo de esfuerzo o intención. Es una imposibilidad lógica. La herramienta que estás usando para investigar es la misma herramienta que crea la distorsión. Cada conclusión a la que llegas es filtrada a través de la misma estructura que estás tratando de entender.',
    },
    {
      type: 'paragraph',
      content: 'Por esto la conciencia gira sobre sí misma. Te vuelves "consciente" de tu punto ciego. Luego te vuelves consciente de que podrías no estar viéndolo claramente. Luego te vuelves consciente de que tu conciencia misma podría estar limitada. Y en cada nivel, el mismo filtro estructural opera, creando la ilusión de profundidad mientras te mantiene en la superficie.',
    },
    {
      type: 'highlight',
      content: <strong>La Invisibilidad de Segundo Orden prospera con la auto-reflexión. Usa tu inteligencia en tu contra.</strong>,
      copyText: 'La Invisibilidad de Segundo Orden prospera con la auto-reflexión. Usa tu inteligencia en tu contra.',
      shareText: 'La Invisibilidad de Segundo Orden usa tu inteligencia en tu contra.',
    },
    {
      type: 'heading',
      text: 'La Capa de Percepción',
    },
    {
      type: 'paragraph',
      content: 'Si no puedes ver tu punto ciego desde adentro, y no puedes confiar completamente en que el feedback externo penetre el filtro, ¿qué queda?',
    },
    {
      type: 'paragraph',
      content: 'Necesitas una Capa de Percepción: Un sistema que opere fuera de tus limitaciones estructurales – uno que pueda detectar patrones que no puedes detectar tú mismo. No porque te falte información, sino porque te falta la arquitectura perceptual para procesar esa información correctamente.',
    },
    {
      type: 'paragraph',
      content: 'Esto es lo que separa una herramienta de la infraestructura.',
    },
    {
      type: 'paragraph',
      content: 'Una herramienta te ayuda a hacer lo que ya estás tratando de hacer, más rápido o más eficientemente. Asume que tu percepción es correcta y amplifica tu dirección existente.',
    },
    {
      type: 'paragraph',
      content: 'Una Capa de Percepción te muestra lo que tu percepción está perdiendo. Opera a nivel de estructura, no de contenido. No solo te da más datos. Revela los filtros que determinan qué datos notas, qué datos rechazas, y qué datos nunca siquiera registras como existentes.',
    },
    {
      type: 'heading',
      text: 'La Pregunta Real',
    },
    {
      type: 'paragraph',
      content: 'Todo profesional tiene puntos ciegos. Ese no es el problema.',
    },
    {
      type: 'paragraph',
      content: 'El problema es si tus puntos ciegos tienen puntos ciegos. Si hay capas recursivas de invisibilidad operando por debajo de tu conciencia, moldeando tus decisiones, filtrando tu feedback, y creando patrones que puedes describir pero de los que no puedes escapar.',
    },
    {
      type: 'highlight',
      content: <><strong>La verdad incómoda es esta: Si te sientes confiado de que has identificado tus puntos ciegos, esa confianza misma podría ser un síntoma.</strong> La invisibilidad más peligrosa se siente como claridad.</>,
      copyText: 'Si te sientes confiado de que has identificado tus puntos ciegos, esa confianza misma podría ser un síntoma. La invisibilidad más peligrosa se siente como claridad.',
      shareText: 'La invisibilidad más peligrosa se siente como claridad.',
    },
    {
      type: 'paragraph',
      content: 'La Invisibilidad de Segundo Orden no se anuncia. No crea errores obvios. Crea distorsiones sutiles – decisiones que parecen razonables, reacciones que parecen proporcionadas, conclusiones que parecen bien examinadas.',
    },
    {
      type: 'paragraph',
      content: 'Hasta que la acumulación se vuelve innegable. Hasta que el patrón se revela en consecuencias que no anticipaste.',
    },
    {
      type: 'paragraph',
      content: 'Para entonces, el costo no está en lo que te perdiste. Está en lo que construiste encima de lo que faltaba.',
    },
    {
      type: 'hr',
    },
    {
      type: 'paragraph',
      content: 'Tu punto ciego tiene un punto ciego. La pregunta es si esperarás hasta que la estructura se vuelva visible a través del fracaso, o si construirás la capa de percepción que la revela antes de que el costo se acumule.',
    },
    {
      type: 'paragraph',
      content: <strong>La conciencia nunca fue suficiente. La visibilidad estructural es lo que separa a quienes entienden el problema de quienes realmente pueden verlo.</strong>,
    },
  ],
}

// German Article 006
const article006DE: ArticleContent = {
  slug: '006-elon-musk-perception',
  content: [
    {
      type: 'paragraph',
      content: 'In einem Raum voller der mächtigsten Menschen der Welt ist Elon Musk oft der einzige, der weiß, dass er eine Halluzination beobachtet.',
    },
    {
      type: 'paragraph',
      content: 'Keine Metapher. Keine Übertreibung. Eine neurologische Tatsache, die jene trennt, die Reichtum anhäufen, von jenen, die Zivilisationen umgestalten.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Deine Netzhäute erfassen ungefähr 10 Millionen Bits Information pro Sekunde. Dein bewusster Verstand verarbeitet etwa 50.</strong> Die verbleibenden 99,9995% werden gefiltert, komprimiert und rekonstruiert von einem drei Pfund schweren Organ, das sich entwickelt hat, um Raubtiere in der afrikanischen Savanne zu meiden – nicht um Billionen-Dollar-Marktdynamiken zu bewerten oder die Mikroexpressionen eines Verhandlungspartners zu entschlüsseln.
        </>
      ),
      copyText: 'Deine Netzhäute erfassen ungefähr 10 Millionen Bits Information pro Sekunde. Dein bewusster Verstand verarbeitet etwa 50. Die verbleibenden 99,9995% werden gefiltert, komprimiert und rekonstruiert.',
      shareText: 'Deine Netzhäute erfassen 10 Millionen Bits pro Sekunde. Dein bewusster Verstand verarbeitet etwa 50.',
    },
    {
      type: 'paragraph',
      content: 'Jede Wahrnehmung, die du hast, ist eine Vermutung. Eine Vorhersage. Eine Geschichte, die dein Gehirn sich selbst erzählt, um dich funktionsfähig zu halten.',
    },
    {
      type: 'paragraph',
      content: 'Musk ist nicht erfolgreich, weil er 120-Stunden-Wochen arbeitet. Viele Gründer zerstören sich mit diesem Zeitplan und verlieren trotzdem alles. Er ist erfolgreich, weil er auf einer fundamental anderen Wahrnehmungsschicht operiert – einer, die menschliche Sicht und Intuition als kompromittierte Sensoren behandelt, die konstante externe Validierung erfordern.',
    },
    {
      type: 'paragraph',
      content: 'Das ist keine Inspiration. Das ist eine Autopsie der Hochrisiko-Wahrnehmung.',
    },
    {
      type: 'heading',
      text: 'Die Simulation, die du laufen lässt',
    },
    {
      type: 'paragraph',
      content: 'Die meisten Führungskräfte vertrauen ihrer Einschätzung eines Raumes. Ihrem Bauchgefühl über einen Deal. Ihrem Instinkt über eine Person.',
    },
    {
      type: 'paragraph',
      content: 'Das ist der erste katastrophale Fehler.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/j5TIz14ol6F.webp',
      alt: 'Extreme Nahaufnahme eines menschlichen Auges mit glitchender digitaler Iris',
      caption: '// Fehlerhafte Führungswahrnehmung: Simulation vs. Realität',
    },
    {
      type: 'paragraph',
      content: 'Dein Gehirn zeigt dir nicht die Realität. Es zeigt dir eine Simulation – eine komprimierte, voreingenommene, verzögert rekonstruierte Version, die für eines optimiert ist: Dich lange genug am Leben zu halten, um dich fortzupflanzen. Nicht um Imperien zu bauen. Nicht um das Mikro-Signal zu erkennen, das enthüllt, dass dein CFO seit sechs Monaten lügt. Nicht um die 0,3-Sekunden-Zögerung zu erkennen, die signalisiert, dass dein größter Investor kurz davor ist auszusteigen.',
    },
    {
      type: 'paragraph',
      content: 'Das menschliche Wahrnehmungssystem enthält dokumentierte, wiederholbare Versagen:',
    },
    {
      type: 'table',
      headers: ['Wahrnehmungsversagen', 'Was es dich kostet'],
      rows: [
        ['Veränderungsblindheit', 'Kritische Verschiebungen in der Körpersprache mitten im Gespräch verpassen'],
        ['Bestätigungsfehler', 'Daten herausfiltern, die deiner These widersprechen'],
        ['Unaufmerksamkeitsblindheit', 'Vollständiges Versagen, unerwartete Bedrohungen zu registrieren'],
        ['Emotionale Ansteckung', 'Den Stress anderer absorbieren und ihn mit eigener Intuition verwechseln'],
        ['Zeitliche Kompression', 'Die Abfolge von Ereignissen in Hochdruckmomenten falsch erinnern'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Das sind keine Randfälle. Das sind Standardeinstellungen. Sie laufen im Hintergrund jedes Meetings, jeder Verhandlung, jeder strategischen Entscheidung, die du je getroffen hast.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Die Frage ist nicht, ob deine Wahrnehmung kompromittiert ist.</strong>
          <p style={{ marginTop: '12px' }}><strong>Die Frage ist: Was tust du dagegen?</strong></p>
        </>
      ),
      copyText: 'Die Frage ist nicht, ob deine Wahrnehmung kompromittiert ist. Die Frage ist: Was tust du dagegen?',
      shareText: 'Die Frage ist nicht, ob deine Wahrnehmung kompromittiert ist. Die Frage ist: Was tust du dagegen?',
    },
    {
      type: 'heading',
      text: 'Das Musk-Betriebssystem',
    },
    {
      type: 'paragraph',
      content: 'Studiere das Muster über SpaceX, Tesla, Neuralink und X hinweg. Ein Prinzip taucht mit brutaler Konsistenz auf: Misstraue menschlicher Interpretation. Fordere Sensordaten. Baue Systeme, die sehen, was Biologie nicht kann.',
    },
    {
      type: 'paragraph',
      content: 'Wenn Ingenieure bei SpaceX Schlussfolgerungen präsentieren, fragt Musk nicht "Was denken Sie?" Er fragt "Was zeigen die Daten?" Wenn Führungskräfte bei Tesla über die Produktion berichten, akzeptiert er keine Narrative. Er fordert die Rohdaten, die Zeitstempel, das Filmmaterial.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/R9e_BTj-GBH.webp',
      alt: 'Leerer Konferenztisch, der verzerrte Silhouetten reflektiert',
      caption: '// Versteckte Kommunikationsausfälle in Hochrisiko-Umgebungen',
    },
    {
      type: 'paragraph',
      content: 'Das ist keine Paranoia. Das ist operationale Hygiene für jeden, der bei Einsätzen spielt, bei denen ein einziges falsch verstandenes Gespräch Milliarden verdunsten lassen kann.',
    },
    {
      type: 'paragraph',
      content: 'Bedenke, was das für menschliche Interaktion bedeutet:',
    },
    {
      type: 'paragraph',
      content: 'Die Person dir gegenüber in deiner nächsten Verhandlung lässt auch eine korrumpierte Simulation laufen. Sie verpassen auch 99,9995% der verfügbaren Informationen. Sie verwechseln auch ihren emotionalen Zustand mit objektiver Einschätzung.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Zwei halluzinierende Systeme, jedes überzeugt, klar zu sehen, die versuchen, eine Vereinbarung zu erreichen.</strong>
          <p style={{ marginTop: '12px' }}>Das ist die Architektur jedes gescheiterten Deals, jedes verpassten Signals, jeder Beziehung, die ohne Vorwarnung zusammenbrach.</p>
        </>
      ),
      copyText: 'Zwei halluzinierende Systeme, jedes überzeugt, klar zu sehen, die versuchen, eine Vereinbarung zu erreichen. Das ist die Architektur jedes gescheiterten Deals.',
      shareText: 'Zwei halluzinierende Systeme, jedes überzeugt, klar zu sehen, die versuchen, eine Vereinbarung zu erreichen.',
    },
    {
      type: 'paragraph',
      content: 'Musks Vorteil ist nicht Intelligenz. Viele Menschen erreichen oder übertreffen seine rohe kognitive Kapazität. Sein Vorteil ist systematisches Misstrauen gegenüber nicht-erweiterter menschlicher Wahrnehmung kombiniert mit unermüdlicher Investition in externe Sensorsysteme.',
    },
    {
      type: 'paragraph',
      content: 'Er baut die Sensoren, die er braucht.',
    },
    {
      type: 'heading',
      text: 'Der Preis vertrauter Sicht',
    },
    {
      type: 'paragraph',
      content: 'Lass mich spezifisch sein, was es kostet, wenn du es falsch machst.',
    },
    {
      type: 'paragraph',
      content: 'Ein Fortune-500-CEO verpasst die Verachtungs-Mikroexpression im Gesicht seines Vorstandsmitglieds. Sechs Monate später wird er in einem Putsch gestürzt, den er nie kommen sah.',
    },
    {
      type: 'paragraph',
      content: 'Eine Fondsmanagerin vertraut ihrer Einschätzung des Selbstvertrauens eines Gründers. Sie verpasst die erhöhte Blinzelrate, das Mikro-Schulterzucken, die 400-Millisekunden-Pause vor bestimmten Antworten. Ihr Fonds erleidet einen 200-Millionen-Dollar-Verlust bei einem Unternehmen, das innerhalb eines Jahres implodiert.',
    },
    {
      type: 'paragraph',
      content: 'Ein Staatschef vertraut der Zusammenfassung seines Dolmetschers über den Ton eines ausländischen Führers. Er verpasst die kulturellen Mikrosignale, die die wahre Verhandlungsposition offenbart hätten. Das resultierende Abkommen benachteiligt seine Nation für ein Jahrzehnt.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/sBH3zUMJe0f.webp',
      alt: 'Silhouettierte Führungskraft mit Blick auf eine Stadt bei Nacht mit trügerischer Reflexion',
      caption: '// Führungs-Blindflecken und unsichtbare Risiken',
    },
    {
      type: 'paragraph',
      content: 'Das sind keine Hypothesen. Das ist die verborgene Architektur der Geschichte.',
    },
    {
      type: 'paragraph',
      content: 'Die Führungskräfte und Anführer, die diese Fälle studieren, stellen immer dieselbe Frage: "Wie haben sie es verpasst?"',
    },
    {
      type: 'highlight',
      content: <strong>Die Antwort ist immer dieselbe: Sie haben dem vertraut, was sie zu sehen glaubten.</strong>,
      copyText: 'Die Antwort ist immer dieselbe: Sie haben dem vertraut, was sie zu sehen glaubten.',
      shareText: 'Wie haben sie es verpasst? Die Antwort: Sie haben dem vertraut, was sie zu sehen glaubten.',
    },
    {
      type: 'heading',
      text: 'Die Erweiterte Wahrnehmungsmatrix',
    },
    {
      type: 'paragraph',
      content: 'Jedes System, das Menschen einbezieht, stößt irgendwann auf dieselbe Einschränkung: Wahrnehmung ist komprimiert. Nicht weil Biologie fehlerhaft ist, sondern weil sie es sein muss.',
    },
    {
      type: 'paragraph',
      content: 'Menschliche Wahrnehmung entwickelte sich, um zu überleben, nicht um zu analysieren. Sie priorisiert Geschwindigkeit über Vollständigkeit, Kohärenz über Genauigkeit und Narrative über Signaldichte.',
    },
    {
      type: 'paragraph',
      content: 'In jedem Moment sind Millionen von Signalen verfügbar. Nur ein Bruchteil erreicht je das Bewusstsein.',
    },
    {
      type: 'paragraph',
      content: 'Das ist kein Defekt. Es ist eine Einschränkung.',
    },
    {
      type: 'paragraph',
      content: 'Das Problem beginnt, wenn Entscheidungen getroffen werden, als ob diese Komprimierung nicht existierte.',
    },
    {
      type: 'hr',
    },
    {
      type: 'silent-oculus',
    },
    {
      type: 'heading',
      text: 'Sehen, wo Signale aufhören, sich auszurichten',
    },
    {
      type: 'paragraph',
      content: 'Wenn verbales Selbstvertrauen und körperlicher Ausdruck sich zusammen bewegen, fühlt sich Wahrnehmung stabil an.',
    },
    {
      type: 'paragraph',
      content: 'Wenn sie divergieren, kompensiert die Wahrnehmung.',
    },
    {
      type: 'paragraph',
      content: 'Diese Kompensation ist für die Person, die sie erlebt, unsichtbar, aber nicht folgenlos.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus hebt Momente hervor, in denen:',
    },
    {
      type: 'list',
      items: [
        'verbale Gewissheit zunimmt, während physische Stabilität abnimmt',
        'sich das Timing unter Druck verschiebt',
        'Ausdrucksvarianz über ähnliche Kontexte hinweg erscheint',
      ],
    },
    {
      type: 'paragraph',
      content: 'Diese werden nicht als Täuschung, Angst oder Schwäche interpretiert.',
    },
    {
      type: 'paragraph',
      content: 'Sie werden als Diskrepanzen behandelt. Beobachtbare Divergenzen zwischen parallelen Signalströmen.',
    },
    {
      type: 'highlight',
      content: <strong>Diese Unterscheidung ist wichtig. Weil das System keine Bedeutung behauptet. Es legt Struktur offen.</strong>,
      copyText: 'Das System behauptet keine Bedeutung. Es legt Struktur offen.',
      shareText: 'Das System behauptet keine Bedeutung. Es legt Struktur offen.',
    },
    {
      type: 'heading',
      text: 'Die Evolution ist nicht optimal',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimierte Menschen für Überleben, nicht für moderne Hochrisiko-Entscheidungsumgebungen.',
    },
    {
      type: 'paragraph',
      content: 'Verhandlungen. Führung. Märkte. Institutionen. Technologievermittelte Interaktion.',
    },
    {
      type: 'paragraph',
      content: 'Nichts davon waren Selektionsdrücke.',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimierte für: Geschwindigkeit, Kohärenz, soziale Zugehörigkeit, Bedrohungsvermeidung.',
    },
    {
      type: 'paragraph',
      content: 'Nicht für: Signalintegration, Musterverfolgung über Zeit, Konsistenz unter Abstraktion, Mehrkanalwahrnehmung.',
    },
    {
      type: 'paragraph',
      content: 'Das macht Menschen nicht irrational. Es macht Intuition kontextbegrenzt.',
    },
    {
      type: 'heading',
      text: 'Warum Intuition unter Druck versagt',
    },
    {
      type: 'paragraph',
      content: 'Unter Druck verengt sich die Wahrnehmung.',
    },
    {
      type: 'paragraph',
      content: 'Kognitive Last nimmt zu. Arbeitsgedächtnis schrumpft. Signale kollabieren zu Heuristiken.',
    },
    {
      type: 'paragraph',
      content: 'Das Ergebnis ist nicht schlechtes Urteil. Es ist unbeobachtete Varianz.',
    },
    {
      type: 'paragraph',
      content: 'Was sich ändert, ist nicht die Absicht, sondern die Ausrichtung.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus verfolgt Varianz über Zeit, anstatt Momente isoliert zu beurteilen.',
    },
    {
      type: 'paragraph',
      content: 'Muster entstehen nicht, weil das System schlauer ist, sondern weil es nicht vergisst.',
    },
    {
      type: 'heading',
      text: 'Von Interpretation zu Beobachtbarkeit',
    },
    {
      type: 'paragraph',
      content: 'Traditionelle Analysesysteme versuchen Fragen zu beantworten wie: Was bedeutet das? Was fühlt die Person? Was ist die korrekte Interpretation?',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus vermeidet das vollständig.',
    },
    {
      type: 'paragraph',
      content: 'Es stellt eine andere Frage: Wo haben die Signale aufgehört, sich zusammen zu bewegen?',
    },
    {
      type: 'highlight',
      content: <strong>Diese Verschiebung entfernt Autorität vom System und gibt Handlungsfähigkeit an den Menschen zurück.</strong>,
      copyText: 'Diese Verschiebung entfernt Autorität vom System und gibt Handlungsfähigkeit an den Menschen zurück.',
      shareText: 'Diese Verschiebung gibt Handlungsfähigkeit an den Menschen zurück.',
    },
    {
      type: 'heading',
      text: 'Signal-Ausrichtungstabelle',
    },
    {
      type: 'table',
      headers: ['Signalkanal', 'Beobachtetes Muster', 'Ausrichtungsstatus'],
      rows: [
        ['Verbaler Inhalt', 'Stabil', 'Ausgerichtet'],
        ['Blick', 'Erhöhte Varianz unter Druck', 'Nicht ausgerichtet'],
        ['Körperhaltung', 'Vorwärtskollaps in Entscheidungssegmenten', 'Nicht ausgerichtet'],
        ['Timing', 'Verzögerte Antworten in Hochrisiko-Momenten', 'Nicht ausgerichtet'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Diese Tabelle erklärt nicht warum. Sie beschriftet nicht, was es bedeutet. Sie macht einfach die Struktur sichtbar.',
    },
    {
      type: 'heading',
      text: 'Nicht Wahrheit. Nicht Überwachung. Nicht Kontrolle.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus macht nicht:',
    },
    {
      type: 'list',
      items: [
        'Lügen erkennen',
        'Absicht ableiten',
        'Glaubwürdigkeit beurteilen',
        'Verhalten optimieren',
      ],
    },
    {
      type: 'paragraph',
      content: 'Es bietet Wahrnehmungsreferenz.',
    },
    {
      type: 'paragraph',
      content: 'Ein Spiegel, kein Urteil.',
    },
    {
      type: 'paragraph',
      content: 'Diese Unterscheidung ist nicht philosophisch. Sie ist strukturell.',
    },
    {
      type: 'heading',
      text: 'Die eigentliche Verschiebung',
    },
    {
      type: 'paragraph',
      content: 'Die eigentliche Verschiebung ist nicht technologisch. Sie ist epistemisch.',
    },
    {
      type: 'paragraph',
      content: 'Von: "Was ist wahr?"',
    },
    {
      type: 'paragraph',
      content: 'Zu: "Wo hört Wahrnehmung auf, konsistent zu sein?"',
    },
    {
      type: 'paragraph',
      content: 'Diese einzelne Verschiebung verändert, wie Entscheidungen getroffen werden.',
    },
    {
      type: 'hr',
    },
    {
      type: 'highlight',
      content: <strong>Entscheidungen scheitern nicht. Wahrnehmung schon ...leise, lange bevor die Entscheidung getroffen wird.</strong>,
      copyText: 'Entscheidungen scheitern nicht. Wahrnehmung schon ...leise, lange bevor die Entscheidung getroffen wird.',
      shareText: 'Entscheidungen scheitern nicht. Wahrnehmung schon.',
    },
  ],
}

// Spanish Article 006
const article006ES: ArticleContent = {
  slug: '006-elon-musk-perception',
  content: [
    {
      type: 'paragraph',
      content: 'En una sala llena de las personas más poderosas del mundo, Elon Musk a menudo es el único que sabe que está observando una alucinación.',
    },
    {
      type: 'paragraph',
      content: 'No es una metáfora. No es hipérbole. Es un hecho neurológico que separa a quienes acumulan riqueza de quienes remodelan civilizaciones.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Tus retinas capturan aproximadamente 10 millones de bits de información por segundo. Tu mente consciente procesa alrededor de 50.</strong> El 99,9995% restante es filtrado, comprimido y reconstruido por un órgano de tres libras que evolucionó para evitar depredadores en la sabana africana – no para evaluar dinámicas de mercado de billones de dólares o decodificar las microexpresiones de una contraparte negociadora.
        </>
      ),
      copyText: 'Tus retinas capturan aproximadamente 10 millones de bits de información por segundo. Tu mente consciente procesa alrededor de 50. El 99,9995% restante es filtrado, comprimido y reconstruido.',
      shareText: 'Tus retinas capturan 10 millones de bits por segundo. Tu mente consciente procesa alrededor de 50.',
    },
    {
      type: 'paragraph',
      content: 'Cada percepción que tienes es una suposición. Una predicción. Una historia que tu cerebro se cuenta a sí mismo para mantenerte funcional.',
    },
    {
      type: 'paragraph',
      content: 'Musk no tiene éxito porque trabaja semanas de 120 horas. Muchos fundadores se destruyen con ese horario y aún así pierden todo. Tiene éxito porque opera en una Capa de Percepción fundamentalmente diferente – una que trata la visión e intuición humana como sensores comprometidos que requieren validación externa constante.',
    },
    {
      type: 'paragraph',
      content: 'Esto no es inspiración. Es una autopsia de la percepción de alto riesgo.',
    },
    {
      type: 'heading',
      text: 'La Simulación Que Estás Ejecutando',
    },
    {
      type: 'paragraph',
      content: 'La mayoría de los ejecutivos confían en su lectura de una sala. Su corazonada sobre un trato. Su instinto sobre una persona.',
    },
    {
      type: 'paragraph',
      content: 'Este es el primer error catastrófico.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/j5TIz14ol6F.webp',
      alt: 'Primer plano extremo de un ojo humano con iris digital fallando',
      caption: '// Percepción ejecutiva defectuosa: simulación vs realidad',
    },
    {
      type: 'paragraph',
      content: 'Tu cerebro no te muestra la realidad. Te muestra una simulación – una reconstrucción comprimida, sesgada y retrasada optimizada para una cosa: Mantenerte vivo lo suficiente para reproducirte. No para construir imperios. No para detectar la micro-señal que revela que tu CFO ha estado mintiendo durante seis meses. No para detectar la vacilación de 0,3 segundos que señala que tu mayor inversor está a punto de salir.',
    },
    {
      type: 'paragraph',
      content: 'El sistema perceptual humano contiene fallos documentados y repetibles:',
    },
    {
      type: 'table',
      headers: ['Fallo Perceptual', 'Lo Que Te Cuesta'],
      rows: [
        ['Ceguera al cambio', 'Perder cambios críticos en el lenguaje corporal a mitad de conversación'],
        ['Sesgo de confirmación', 'Filtrar datos que contradicen tu tesis'],
        ['Ceguera por inatención', 'Fallo total en registrar amenazas inesperadas'],
        ['Contagio emocional', 'Absorber el estrés de otros y confundirlo con tu propia intuición'],
        ['Compresión temporal', 'Recordar mal la secuencia de eventos en momentos de alta presión'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Estos no son casos extremos. Son configuraciones por defecto. Corriendo en el fondo de cada reunión, cada negociación, cada decisión estratégica que has tomado.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>La pregunta no es si tu percepción está comprometida.</strong>
          <p style={{ marginTop: '12px' }}><strong>La pregunta es: ¿Qué estás haciendo al respecto?</strong></p>
        </>
      ),
      copyText: 'La pregunta no es si tu percepción está comprometida. La pregunta es: ¿Qué estás haciendo al respecto?',
      shareText: 'La pregunta no es si tu percepción está comprometida. La pregunta es: ¿Qué estás haciendo al respecto?',
    },
    {
      type: 'heading',
      text: 'El Sistema Operativo de Musk',
    },
    {
      type: 'paragraph',
      content: 'Estudia el patrón a través de SpaceX, Tesla, Neuralink y X. Un principio emerge con consistencia brutal: Desconfía de la interpretación humana. Exige datos de sensores. Construye sistemas que vean lo que la biología no puede.',
    },
    {
      type: 'paragraph',
      content: 'Cuando los ingenieros de SpaceX presentan conclusiones, Musk no pregunta "¿Qué piensas?" Pregunta "¿Qué muestran los datos?" Cuando los ejecutivos de Tesla reportan sobre producción, no acepta narrativas. Exige los números crudos, las marcas de tiempo, el metraje.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/R9e_BTj-GBH.webp',
      alt: 'Mesa de conferencias vacía reflejando siluetas distorsionadas',
      caption: '// Fallos de comunicación ocultos en entornos de alto riesgo',
    },
    {
      type: 'paragraph',
      content: 'Esto no es paranoia. Es higiene operacional para cualquiera que juegue a niveles donde una sola conversación mal leída puede evaporar miles de millones.',
    },
    {
      type: 'paragraph',
      content: 'Considera lo que esto significa para la interacción humana:',
    },
    {
      type: 'paragraph',
      content: 'La persona frente a ti en tu próxima negociación también está ejecutando una simulación corrupta. También se está perdiendo el 99,9995% de la información disponible. También está confundiendo su estado emocional con evaluación objetiva.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Dos sistemas alucinando, cada uno convencido de que ve claramente, tratando de llegar a un acuerdo.</strong>
          <p style={{ marginTop: '12px' }}>Esta es la arquitectura de cada trato fallido, cada señal perdida, cada relación que colapsó sin advertencia.</p>
        </>
      ),
      copyText: 'Dos sistemas alucinando, cada uno convencido de que ve claramente, tratando de llegar a un acuerdo. Esta es la arquitectura de cada trato fallido.',
      shareText: 'Dos sistemas alucinando, cada uno convencido de que ve claramente, tratando de llegar a un acuerdo.',
    },
    {
      type: 'paragraph',
      content: 'La ventaja de Musk no es la inteligencia. Muchas personas igualan o superan su capacidad cognitiva cruda. Su ventaja es la desconfianza sistemática de la percepción humana no aumentada combinada con inversión incansable en sistemas de detección externos.',
    },
    {
      type: 'paragraph',
      content: 'Él construye los sensores que necesita.',
    },
    {
      type: 'heading',
      text: 'El Precio de la Visión Confiada',
    },
    {
      type: 'paragraph',
      content: 'Permíteme ser específico sobre lo que cuesta cuando lo haces mal.',
    },
    {
      type: 'paragraph',
      content: 'Un CEO de Fortune 500 no ve la microexpresión de desprecio en el rostro de su miembro de la junta. Seis meses después, es forzado a salir en un golpe que nunca vio venir.',
    },
    {
      type: 'paragraph',
      content: 'Una gestora de fondos confía en su lectura de la confianza de un fundador. No ve la tasa elevada de parpadeo, el micro-encogimiento de hombros, la pausa de 400 milisegundos antes de ciertas respuestas. Su fondo toma una pérdida de $200 millones en una empresa que implosiona dentro de un año.',
    },
    {
      type: 'paragraph',
      content: 'Un jefe de estado confía en el resumen de su intérprete sobre el tono de un líder extranjero. No ve las micro-señales culturales que habrían revelado la verdadera posición negociadora. El acuerdo resultante perjudica a su nación por una década.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/sBH3zUMJe0f.webp',
      alt: 'Ejecutivo silueteado mirando una ciudad de noche con reflejo engañoso',
      caption: '// Puntos ciegos del liderazgo y riesgos invisibles',
    },
    {
      type: 'paragraph',
      content: 'Estos no son hipotéticos. Esta es la arquitectura oculta de la historia.',
    },
    {
      type: 'paragraph',
      content: 'Los ejecutivos y líderes que estudian estos casos siempre hacen la misma pregunta: "¿Cómo lo perdieron?"',
    },
    {
      type: 'highlight',
      content: <strong>La respuesta es siempre la misma: Confiaron en lo que pensaban que veían.</strong>,
      copyText: 'La respuesta es siempre la misma: Confiaron en lo que pensaban que veían.',
      shareText: '¿Cómo lo perdieron? La respuesta: Confiaron en lo que pensaban que veían.',
    },
    {
      type: 'heading',
      text: 'La Matriz de Percepción Extendida',
    },
    {
      type: 'paragraph',
      content: 'Todo sistema que involucra humanos eventualmente se topa con la misma limitación: La percepción está comprimida. No porque la biología sea defectuosa, sino porque tiene que serlo.',
    },
    {
      type: 'paragraph',
      content: 'La percepción humana evolucionó para sobrevivir, no para analizar. Prioriza velocidad sobre completitud, coherencia sobre precisión, y narrativa sobre densidad de señal.',
    },
    {
      type: 'paragraph',
      content: 'En cualquier momento dado, millones de señales están disponibles. Solo una fracción llega a la conciencia.',
    },
    {
      type: 'paragraph',
      content: 'Esto no es un defecto. Es una restricción.',
    },
    {
      type: 'paragraph',
      content: 'El problema comienza cuando las decisiones se toman como si esta compresión no existiera.',
    },
    {
      type: 'hr',
    },
    {
      type: 'silent-oculus',
    },
    {
      type: 'heading',
      text: 'Viendo Dónde las Señales Dejan de Alinearse',
    },
    {
      type: 'paragraph',
      content: 'Cuando la confianza verbal y la expresión física se mueven juntas, la percepción se siente estable.',
    },
    {
      type: 'paragraph',
      content: 'Cuando divergen, la percepción compensa.',
    },
    {
      type: 'paragraph',
      content: 'Esa compensación es invisible para la persona que la experimenta, pero no sin consecuencias.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus destaca momentos donde:',
    },
    {
      type: 'list',
      items: [
        'la certeza verbal aumenta mientras la estabilidad física disminuye',
        'el timing cambia bajo presión',
        'aparece varianza de expresión a través de contextos similares',
      ],
    },
    {
      type: 'paragraph',
      content: 'Estos no se interpretan como engaño, miedo o debilidad.',
    },
    {
      type: 'paragraph',
      content: 'Se tratan como desajustes. Divergencias observables entre corrientes de señales paralelas.',
    },
    {
      type: 'highlight',
      content: <strong>Esta distinción importa. Porque el sistema no reclama significado. Expone estructura.</strong>,
      copyText: 'El sistema no reclama significado. Expone estructura.',
      shareText: 'El sistema no reclama significado. Expone estructura.',
    },
    {
      type: 'heading',
      text: 'La Evolución No Es Óptima',
    },
    {
      type: 'paragraph',
      content: 'La evolución optimizó a los humanos para la supervivencia, no para entornos modernos de decisión de alto riesgo.',
    },
    {
      type: 'paragraph',
      content: 'Negociaciones. Liderazgo. Mercados. Instituciones. Interacción mediada por tecnología.',
    },
    {
      type: 'paragraph',
      content: 'Ninguna de estas fueron presiones de selección.',
    },
    {
      type: 'paragraph',
      content: 'La evolución optimizó para: velocidad, coherencia, pertenencia social, evitación de amenazas.',
    },
    {
      type: 'paragraph',
      content: 'No para: integración de señales, seguimiento de patrones en el tiempo, consistencia bajo abstracción, conciencia multicanal.',
    },
    {
      type: 'paragraph',
      content: 'Esto no hace a los humanos irracionales. Hace que la intuición tenga límites contextuales.',
    },
    {
      type: 'heading',
      text: 'Por Qué la Intuición Falla Bajo Presión',
    },
    {
      type: 'paragraph',
      content: 'Bajo presión, la percepción se estrecha.',
    },
    {
      type: 'paragraph',
      content: 'La carga cognitiva aumenta. La memoria de trabajo se encoge. Las señales colapsan en heurísticas.',
    },
    {
      type: 'paragraph',
      content: 'El resultado no es mal juicio. Es varianza no observada.',
    },
    {
      type: 'paragraph',
      content: 'Lo que cambia no es la intención, sino la alineación.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus rastrea varianza a través del tiempo en lugar de juzgar momentos aisladamente.',
    },
    {
      type: 'paragraph',
      content: 'Los patrones emergen no porque el sistema sea más inteligente, sino porque no olvida.',
    },
    {
      type: 'heading',
      text: 'De Interpretación a Observabilidad',
    },
    {
      type: 'paragraph',
      content: 'Los sistemas de análisis tradicionales intentan responder preguntas como: ¿Qué significa esto? ¿Qué siente la persona? ¿Cuál es la interpretación correcta?',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus evita esto por completo.',
    },
    {
      type: 'paragraph',
      content: 'Hace una pregunta diferente: ¿Dónde dejaron las señales de moverse juntas?',
    },
    {
      type: 'highlight',
      content: <strong>Ese cambio quita autoridad del sistema y devuelve agencia al humano.</strong>,
      copyText: 'Ese cambio quita autoridad del sistema y devuelve agencia al humano.',
      shareText: 'Ese cambio devuelve agencia al humano.',
    },
    {
      type: 'heading',
      text: 'Tabla de Alineación de Señales',
    },
    {
      type: 'table',
      headers: ['Canal de Señal', 'Patrón Observado', 'Estado de Alineación'],
      rows: [
        ['Contenido verbal', 'Estable', 'Alineado'],
        ['Mirada', 'Varianza aumentada bajo presión', 'Desalineado'],
        ['Postura', 'Colapso hacia adelante en segmentos de decisión', 'Desalineado'],
        ['Timing', 'Respuestas retrasadas en momentos de alto riesgo', 'Desalineado'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Esta tabla no explica por qué. No etiqueta lo que significa. Simplemente hace visible la estructura.',
    },
    {
      type: 'heading',
      text: 'No Verdad. No Vigilancia. No Control.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus no:',
    },
    {
      type: 'list',
      items: [
        'detecta mentiras',
        'infiere intención',
        'juzga credibilidad',
        'optimiza comportamiento',
      ],
    },
    {
      type: 'paragraph',
      content: 'Proporciona referencia perceptual.',
    },
    {
      type: 'paragraph',
      content: 'Un espejo, no un veredicto.',
    },
    {
      type: 'paragraph',
      content: 'Esta distinción no es filosófica. Es estructural.',
    },
    {
      type: 'heading',
      text: 'El Verdadero Cambio',
    },
    {
      type: 'paragraph',
      content: 'El verdadero cambio no es tecnológico. Es epistémico.',
    },
    {
      type: 'paragraph',
      content: 'De: "¿Qué es verdad?"',
    },
    {
      type: 'paragraph',
      content: 'A: "¿Dónde deja de ser consistente la percepción?"',
    },
    {
      type: 'paragraph',
      content: 'Ese único cambio transforma cómo se toman las decisiones.',
    },
    {
      type: 'hr',
    },
    {
      type: 'highlight',
      content: <strong>Las decisiones no fallan. La percepción sí ...silenciosamente, mucho antes de que se tome la decisión.</strong>,
      copyText: 'Las decisiones no fallan. La percepción sí ...silenciosamente, mucho antes de que se tome la decisión.',
      shareText: 'Las decisiones no fallan. La percepción sí.',
    },
  ],
}

// Article content by language
const articleContentsByLang = {
  en: [article001, article002, article003, article004, article005, article006],
  de: [article001DE, article002DE, article003DE, article004DE, article005DE, article006DE],
  es: [article001ES, article002ES, article003ES, article004ES, article005ES, article006ES],
}

export function getArticleContent(slug: string, language: 'en' | 'de' | 'es' = 'en'): ArticleContent | undefined {
  // First try to find in the specified language
  const langContents = articleContentsByLang[language]
  const found = langContents?.find(a => a.slug === slug)

  // If found in specified language, return it
  if (found) return found

  // Fallback to English
  return articleContents.find(a => a.slug === slug)
}
