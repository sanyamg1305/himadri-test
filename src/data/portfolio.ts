import type {
  BookEntry,
  ContactLink,
  LinkItem,
  Metric,
  ProjectCategory,
  ProjectEntry,
  SocialLink,
} from "@/types/portfolio";

export const navLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Media", href: "/media" },
];

export const profile = {
  name: "Himadri Jain",
  title: "Author, Digital Storyteller, and Content Strategist",
  location: "Mumbai, Maharashtra",
  phone: "+91 7470547077",
  email: "himadri.jain27@gmail.com",
  introduction:
    "Words were the first medium. Strategy taught them how to move. Himadri brings poetry, campaign thinking, brand sensitivity, and digital storytelling into one clear creative voice.",
  story:
    "Life often feels like a campaign to Himadri Jain. Every moment has an audience, every story needs the right placement, and timing changes everything. What began with poetry, books, and scripts has grown into social content, brand thinking, and platform-native storytelling that connects meaning with clarity.",
  heroImage: "/assets/images/portrait-cafe.jpeg",
  resumeHref:
    "https://drive.google.com/drive/folders/1vWIwk2lJW5-gUmrbdghSALLSlABAfFPN?usp=sharing",
  videoCvHref:
    "https://drive.google.com/drive/folders/191yfALUY9gav6BBQRnSdLVnHaDkF2zm6?usp=sharing",
};

export const skills = [
  "Brand Management",
  "Social Media Design",
  "Campaign Ideation",
  "Brand Strategy",
  "Writing",
  "Digital Storytelling",
  "Content Strategy",
  "Content Creation",
  "Creative Direction",
];

export const favoriteQuotes = [
  "Forgetting gives you space for new things.",
  "Too imaginative to stay still, too curious to stop learning.",
];

export const metrics: Metric[] = [
  {
    label: "Professional sprint",
    value: "Apr '25 - Aug '25",
    context: "Social media manager experience centered on strategy, brand building, and execution.",
  },
  {
    label: "Content volume",
    value: "100+",
    context: "Content pieces planned and shipped across organic and campaign work.",
  },
  {
    label: "Conversions",
    value: "50+",
    context: "Result-oriented performance in brand-building and content-led initiatives.",
  },
  {
    label: "Organic reach",
    value: "200K+",
    context: "Reach generated for IIDE Flea Mania 2025 in a single month of organic marketing.",
  },
];

export const experienceHighlights = [
  {
    title: "Social Media Manager",
    body: "Led content strategy, brand building, and organic growth with a multi-tool stack during a high-output 2025 professional stint.",
  },
  {
    title: "IIDE Online",
    body: "Managed LinkedIn ORM and posting, keeping communication aligned and audience interactions timely and consistent.",
  },
  {
    title: "Flea Mania 2025",
    body: "Headed marketing for the event and drove more than 200K organic reach through creative planning and execution.",
  },
];

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "campaign", label: "Campaigns" },
  { value: "social-strategy", label: "Social strategy" },
  { value: "production", label: "Production" },
  { value: "writing", label: "Writing" },
  { value: "paid-project", label: "Paid work" },
  { value: "personal", label: "Personal" },
];

export const projects: ProjectEntry[] = [
  {
    slug: "flea-mania-anthem",
    title: "Flea Mania Anthem",
    category: "campaign",
    role: "Writer, AI audio shaper, and video director",
    summary:
      "A hero content piece built to capture event energy through music, story, and visual direction rather than feeling like a conventional campaign asset.",
    contribution: [
      "Wrote the anthem lyrics and shaped the sonic direction with ElevenLabs-assisted audio.",
      "Directed the final video as a central creative artifact for Flea Mania.",
      "Used storytelling and movement to make the event feel communal and emotionally charged.",
    ],
    outcomes: [
      "Created a memorable signature asset for the event.",
      "Showed cross-medium storytelling across words, sound, and video.",
    ],
    tools: ["Creative direction", "Lyrics", "AI audio", "Video production"],
    image: "/assets/images/project-flea-mania.jpeg",
    video: "/assets/videos/flea-mania-anthem.mp4",
    featured: true,
  },
  {
    slug: "netflix-passport",
    title: "Netflix Passport",
    category: "campaign",
    role: "Concept developer, writer, director, and editor",
    summary:
      "A playful ad campaign concept that reframed dubbing and subtitles as a passport to global stories, supported by pseudo social media extensions.",
    contribution: [
      "Imagined the campaign idea and wrote ad concepts around accessibility and global content discovery.",
      "Shot, directed, and edited three video ads that translated the idea into motion.",
      "Extended the concept into posts and stories to simulate a playful social world around the campaign.",
    ],
    outcomes: [
      "Turned a media insight into a platform-ready campaign thought.",
      "Demonstrated scripting, filming, and multi-format creative execution.",
    ],
    tools: ["Campaign ideation", "Scripting", "Direction", "Editing"],
    image: "/assets/images/project-netflix.jpeg",
    video: "/assets/videos/netflix-passport.mp4",
    hrefs: [
      {
        label: "View campaign folder",
        href: "https://drive.google.com/drive/folders/1PS-TNQwWjLIcvVSy9LP7CdYz4B1fKK9Y?usp=sharing",
      },
    ],
    featured: true,
  },
  {
    slug: "amul-butter-spec-ad",
    title: "Amul Butter Spec Ad",
    category: "production",
    role: "Script assistant and direction support",
    summary:
      "A spec commercial experiment focused on breaking and reinterpreting the iconic Amul voice while preserving recall and storytelling clarity.",
    contribution: [
      "Supported scripting and direction for a spec ad exploring brand tonality and execution.",
      "Balanced creative freedom with recognizability inside a legacy brand language.",
      "Translated a familiar brand tone into a fresh filmed treatment.",
    ],
    tools: ["Brand tonality", "Script support", "Direction"],
    image: "/assets/images/project-mentos.jpeg",
    video: "/assets/videos/amul-spec-ad.mp4",
    featured: true,
  },
  {
    slug: "mentos-spec-ad",
    title: "Mentos Spec Ad",
    category: "production",
    role: "Writer, editor, and producer",
    summary:
      "A high-energy TV ad concept designed for concise storytelling and instant brand recall through punchy visual rhythm.",
    contribution: [
      "Scripted the ad around short-form impact and fast memory hooks.",
      "Edited and produced the final spec film for a tighter, more energetic payoff.",
      "Focused the message on speed, clarity, and brand distinctiveness.",
    ],
    tools: ["Scripting", "Editing", "Production"],
    image: "/assets/images/project-netflix.jpeg",
    video: "/assets/videos/mentos-spec-ad.mp4",
  },
  {
    slug: "diwali-organic-social",
    title: "Diwali Organic Social Campaign",
    category: "social-strategy",
    role: "Strategist and content planner",
    summary:
      "An organic festive campaign shaped around cultural relevance, influencer collaboration, and format choices that fit platform behavior.",
    contribution: [
      "Built a content strategy around Diwali-specific audience behavior and cultural cues.",
      "Planned multiple content formats and influencer collaboration points.",
      "Aligned the campaign with long-term engagement rather than isolated posting.",
    ],
    outcomes: [
      "Created a sharper festive content framework for organic performance.",
    ],
    tools: ["Content strategy", "Platform planning", "Influencer collaboration"],
    image: "/assets/images/project-writing-poster.jpeg",
    hrefs: [
      {
        label: "Canva concept board",
        href: "https://www.canva.com/design/DAGutyLirGI/HfwGH0xYPXe6Scra4G_fZg/edit?utm_content=DAGutyLirGI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    slug: "hero-hub-hygiene",
    title: "Hero, Hub, and Hygiene Strategy",
    category: "social-strategy",
    role: "Framework designer and planner",
    summary:
      "A structured content strategy built to support long-term visibility and engagement with a clear framework for content cadence and purpose.",
    contribution: [
      "Mapped content roles across hero, hub, and hygiene layers.",
      "Defined content formats and planning logic to support consistency over time.",
      "Used the framework to connect strategy with repeatable execution.",
    ],
    tools: ["Planning", "Framework design", "Brand visibility"],
    image: "/assets/images/project-etoile.png",
    hrefs: [
      {
        label: "Canva framework board",
        href: "https://www.canva.com/design/DAGtOkh_otY/vuRakkKpSdk9BhHllb5sjg/edit?utm_content=DAGtOkh_otY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    slug: "ifp-writing",
    title: "IFP Writing and 50-Hour Challenge",
    category: "writing",
    role: "Writer and on-ground script supervisor",
    summary:
      "A fast-paced writing chapter that mixed on-ground script supervision, SFX collaboration, and high-pressure original writing recognized by the jury.",
    contribution: [
      "Supervised scripts during on-ground shoots and supported SFX creation.",
      "Worked in a quick-turn environment where creative instincts needed fast execution.",
      "Completed a 50-hour writing challenge that earned jury acknowledgment.",
    ],
    outcomes: ["Built credibility in live creative collaboration and fast writing under pressure."],
    tools: ["Writing", "Script supervision", "SFX collaboration"],
    image: "/assets/images/project-writing-poster.jpeg",
    hrefs: [{ label: "Watch the writing feature", href: "https://youtu.be/AYR48x0fMsc?si=z0djYZvhyDZahyUn" }],
    featured: true,
  },
  {
    slug: "podcast-and-poetry",
    title: "Podcast and Poetry Writing",
    category: "paid-project",
    role: "Podcast writer and poet",
    summary:
      "Created four podcast episode scripts and ten original poems for a conversational, reflective show while protecting tone and emotional cadence.",
    contribution: [
      "Wrote scripted podcast episodes that matched the host's voice and rhythm.",
      "Produced original poems designed for reflective listening contexts.",
      "Balanced branded structure with intimate, human storytelling.",
    ],
    tools: ["Podcast scripting", "Poetry", "Tone of voice"],
    image: "/assets/images/project-etoile.png",
    hrefs: [
      {
        label: "Open Instagram",
        href: "https://www.instagram.com/talkswithabhii/?hl=en",
      },
    ],
  },
  {
    slug: "reel-jockey-and-cream-centre",
    title: "Reel Jockey and Cream Centre",
    category: "paid-project",
    role: "Reel scriptwriter and content writer",
    summary:
      "Platform-native content work across an RJ-led Instagram page and a restaurant account, with ideation, planning, and concise storytelling at the center.",
    contribution: [
      "Wrote reel scripts for Reel Jockey with punchy, relatable storytelling.",
      "Contributed content ideation, planning, and creative direction for Cream Centre Ahmedabad.",
      "Built copy around audience attention spans and social-native hooks.",
    ],
    tools: ["Scriptwriting", "Content ideation", "Creative direction"],
    image: "/assets/images/project-flea-mania.jpeg",
    hrefs: [
      { label: "Reel Jockey", href: "https://www.instagram.com/reel.jockey/?hl=en" },
      { label: "Cream Centre", href: "https://www.instagram.com/creamcentrerestaurant/?hl=en" },
    ],
  },
  {
    slug: "etoile-and-one-percent-better",
    title: "ETOILE and 1% Better",
    category: "personal",
    role: "Magazine co-creator, podcast host, and editor",
    summary:
      "Two self-driven properties that show Himadri's independent creative voice, one in visual editorial form and one in audio-first personal growth storytelling.",
    contribution: [
      "Co-created the ETOILE magazine project using Canva and Adobe Illustrator.",
      "Led content development while collaborating on the publication's design and layout.",
      "Created, hosted, recorded, and edited the 1% Better podcast around self-improvement and habit-building.",
    ],
    tools: ["Magazine design", "Podcast production", "Content development"],
    image: "/assets/images/project-etoile.png",
    hrefs: [
      {
        label: "Listen on Spotify",
        href: "https://open.spotify.com/show/7tR1X8PBC9CXBbsfrxg21L?si=86ba34b5eb374230",
      },
      {
        label: "Open magazine assets",
        href: "https://drive.google.com/drive/folders/1M4L-RuhPP0BbjZx5mgDKUrz0tnBmBEex?usp=sharing",
      },
    ],
  },
];

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@himadriwrites",
    href: "https://www.instagram.com/himadriwrites/?hl=en",
    summary:
      "Poetry, reflections, and creative thoughts built from ordinary moments that deserve a second look.",
  },
  {
    label: "YouTube",
    handle: "@himadrijain27",
    href: "https://www.youtube.com/@himadrijain27",
    summary:
      "Videos about special days, conversations, learning, and creativity told in an honest and thoughtful voice.",
  },
  {
    label: "LinkedIn",
    handle: "Himadri Jain",
    href: "https://www.linkedin.com/in/himadrijain/",
    summary:
      "Content, storytelling, and digital strategy insights designed to help brands and individuals connect meaningfully.",
  },
];

export const books: BookEntry[] = [
  {
    title: "Sky Within",
    description:
      "A poetry collection exploring inner landscapes of emotion, silence, and self-reflection.",
    image: "/assets/images/book-sky-within.jpeg",
    href: "https://www.amazon.in/Poetry-book-Within-Himadri-Jain/dp/9368687307",
  },
  {
    title: "Imprints of Life",
    description:
      "A reflective blend of poetry and prose capturing the moments that shape who we become.",
    image: "/assets/images/book-imprints-of-life.jpeg",
    href: "https://www.amazon.in/gp/product/9361850016/ref=ewc_pr_img_2?smid=A15DBATYR506U3&psc=1",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: "tel:+917470547077" },
  { label: "Location", value: profile.location, href: "https://maps.google.com/?q=Mumbai,Maharashtra" },
  { label: "Resume", value: "Drive folder", href: profile.resumeHref },
];

export const videoCv = {
  src: "/assets/videos/video-cv.mp4",
  title: "Video CV",
  quote: "Take your time scrolling. Hope you enjoy exploring how these ideas found their way into real work.",
};
