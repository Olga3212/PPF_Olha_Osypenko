// Diccionario central de textos traducibles (ejemplo, no definitivo).
// Fuente de verdad para ES/EN. Sin dependencias externas.

export const defaultLang = "es" as const;

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

const es = {
  meta: {
    title: "Astrorante — Restaurante (ejercicio educativo)",
    description:
      "Landing page de restaurante en español con Astro y Tailwind CSS 4. Réplica estructural con fines educativos.",
  },
  nav: {
    home: "Inicio",
    about: "Nosotros",
    menu: "Carta",
    reserve: "Reservar",
    openMenu: "Abrir menú de navegación",
    brandAria: "Astrorante — inicio",
    skipToContent: "Saltar al contenido",
    primary: "Navegación principal",
    mobile: "Navegación móvil",
  },
  hero: {
    eyebrow: "Restaurante de cocina de temporada",
    title: "Sabores que cuentan historias",
    description:
      "Platos de temporada con producto local en un comedor acogedor. Ejemplo de texto para el hero.",
    caption: "Fotografía panorámica del comedor del restaurante",
  },
  buttons: {
    about: "Nosotros",
    menu: "Ver carta",
    book: "Reservar mesa",
  },
  sections: {
    flexibleMenu: {
      eyebrow: "Carta de temporada",
      title: "Carta flexible",
      intro: "Una muestra de nuestra cocina, con platos de ejemplo.",
      items: [
        "Entrantes de temporada para compartir.",
        "Especiales del día y sugerencias del chef.",
        "Descripciones breves con ingredientes de ejemplo.",
      ],
      link: "Ver carta completa",
      imageLabel: "Fotografía de plato principal",
      imageCaption: "Fotografía de plato principal (ejemplo)",
    },
    visualEditing: {
      eyebrow: "El restaurante",
      title: "Un espacio acogedor",
      text: "Texto de ejemplo sobre el ambiente del restaurante y su sala principal.",
      link: "Conócenos",
      imageLabel: "Fotografía del interior del restaurante",
      imageCaption: "Interior del restaurante (ejemplo)",
    },
    lightning: {
      eyebrow: "En sala",
      title: "Servicio ágil",
      intro: "Texto de ejemplo sobre la experiencia en sala.",
      items: [
        "Atención cercana durante toda la velada.",
        "Tiempos de espera de ejemplo bien organizados.",
        "Ambiente tranquilo para conversar.",
      ],
      imageLabel: "Ambiente del restaurante",
      imageCaption: "Ambiente del restaurante (ejemplo)",
    },
    docs: {
      eyebrow: "Guía del restaurante",
      title: "Descubre más",
      intro: "Tres formas de conocer mejor Astrorante, con ejemplos breves.",
      cards: [
        {
          title: "Nuestra historia",
          desc: "Cómo empezó este restaurante de ejemplo y qué cocina nos inspira.",
          link: "Cómo empezamos",
        },
        {
          title: "El equipo",
          desc: "Quién está en cocina y en sala en este ejemplo educativo.",
          link: "Quién está en cocina",
        },
        {
          title: "Eventos privados",
          desc: "Cómo reservar para grupos con este ejemplo de contenido.",
          link: "Reserva para grupos",
        },
      ],
    },
    openSource: {
      eyebrow: "Reserva tu mesa",
      title: "Cocina abierta y honesta.",
      intro: "Texto de ejemplo sobre nuestra filosofía de cocina:",
      items: [
        "Producto local de ejemplo.",
        "Recetas adaptadas a cada temporada.",
        "Precios claros de ejemplo.",
      ],
      imageLabel: "Sala del restaurante",
      imageCaption: "Nuestra sala (ejemplo)",
    },
  },
  deals: {
    title: "Promociones sabrosas",
    subtitle: "Ejemplos de promociones semanales del restaurante.",
    items: [
      {
        name: "Tapas para dos",
        desc: "25% en tapas para dos, cada domingo (ejemplo).",
        price: "25 €",
      },
      {
        name: "Lunes de vermut",
        desc: "Cada lunes de 12:00 a 14:00 (ejemplo).",
        price: "4 €",
      },
      {
        name: "Jueves de vino",
        desc: "Cada jueves de 19:00 a 21:00 (ejemplo).",
        price: "3,50 €",
      },
    ],
  },
  footer: {
    tagline: "Restaurante de ejemplo para practicar Astro y Tailwind.",
    infoTitle: "Información",
    foodTitle: "Carta",
    hoursTitle: "Horario",
    closed: "Cerrado",
    copyright: "© 2026 Astrorante — Ejercicio educativo",
    address: "Calle Ejemplo 123, 07001 Palma, Illes Balears",
    email: "hola@ejemplo.es",
    phone: "+34 000 000 000",
    hours: [
      { day: "Lunes", time: "Cerrado" },
      { day: "Martes", time: "13:00 – 23:00" },
      { day: "Miércoles", time: "13:00 – 23:00" },
      { day: "Jueves", time: "13:00 – 23:00" },
      { day: "Viernes", time: "13:00 – 00:00" },
      { day: "Sábado", time: "13:00 – 00:00" },
      { day: "Domingo", time: "13:00 – 16:00" },
    ],
  },
  langSelector: {
    label: "Selector de idioma",
    es: "ES",
    en: "EN",
  },
} as const;

const en: typeof es = {
  meta: {
    title: "Astrorante — Restaurant (educational exercise)",
    description:
      "Sample restaurant landing page in English built with Astro and Tailwind CSS 4. Structural replica for learning purposes.",
  },
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    reserve: "Book a table",
    openMenu: "Open navigation menu",
    brandAria: "Astrorante — home",
    skipToContent: "Skip to content",
    primary: "Primary navigation",
    mobile: "Mobile navigation",
  },
  hero: {
    eyebrow: "Seasonal kitchen restaurant",
    title: "Flavours that tell stories",
    description:
      "Seasonal dishes with local produce in a cosy dining room. Sample hero copy.",
    caption: "Panoramic photograph of the restaurant dining room",
  },
  buttons: {
    about: "About us",
    menu: "View menu",
    book: "Book a table",
  },
  sections: {
    flexibleMenu: {
      eyebrow: "Seasonal menu",
      title: "Flexible menu",
      intro: "A sample of our kitchen, with example dishes.",
      items: [
        "Seasonal starters to share.",
        "Daily specials and chef's suggestions.",
        "Short descriptions with sample ingredients.",
      ],
      link: "View full menu",
      imageLabel: "Main dish photograph",
      imageCaption: "Sample main dish photograph",
    },
    visualEditing: {
      eyebrow: "The restaurant",
      title: "A welcoming space",
      text: "Sample copy about the restaurant atmosphere and its main dining room.",
      link: "Meet us",
      imageLabel: "Restaurant interior photograph",
      imageCaption: "Restaurant interior (sample)",
    },
    lightning: {
      eyebrow: "In the dining room",
      title: "Smooth service",
      intro: "Sample copy about the dining experience.",
      items: [
        "Friendly service throughout the evening.",
        "Well organised sample waiting times.",
        "Calm atmosphere for conversation.",
      ],
      imageLabel: "Restaurant ambience",
      imageCaption: "Restaurant ambience (sample)",
    },
    docs: {
      eyebrow: "Restaurant guide",
      title: "Discover more",
      intro: "Three ways to get to know Astrorante better, with short samples.",
      cards: [
        {
          title: "Our story",
          desc: "How this sample restaurant started and what cooking inspires us.",
          link: "How we started",
        },
        {
          title: "The team",
          desc: "Who is in the kitchen and dining room in this learning example.",
          link: "Who is in the kitchen",
        },
        {
          title: "Private events",
          desc: "How to book for groups with this sample content.",
          link: "Book for groups",
        },
      ],
    },
    openSource: {
      eyebrow: "Book your table",
      title: "Open and honest cooking.",
      intro: "Sample copy about our cooking philosophy:",
      items: [
        "Sample local produce.",
        "Recipes adapted to each season.",
        "Clear sample prices.",
      ],
      imageLabel: "Restaurant dining room",
      imageCaption: "Our dining room (sample)",
    },
  },
  deals: {
    title: "Tasty deals",
    subtitle: "Sample weekly restaurant promotions.",
    items: [
      {
        name: "Tapas for two",
        desc: "25% off tapas for two, every Sunday (sample).",
        price: "$25",
      },
      {
        name: "Vermouth Monday",
        desc: "Every Monday from 12pm to 2pm (sample).",
        price: "$4",
      },
      {
        name: "Wine Thursday",
        desc: "Every Thursday from 7pm to 9pm (sample).",
        price: "$3.50",
      },
    ],
  },
  footer: {
    tagline: "Sample restaurant to practise Astro and Tailwind.",
    infoTitle: "Information",
    foodTitle: "Menu",
    hoursTitle: "Opening hours",
    closed: "Closed",
    copyright: "© 2026 Astrorante — Educational exercise",
    address: "123 Example Street, 07001 Palma, Balearic Islands",
    email: "hello@example.com",
    phone: "+34 000 000 000",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "1pm – 11pm" },
      { day: "Wednesday", time: "1pm – 11pm" },
      { day: "Thursday", time: "1pm – 11pm" },
      { day: "Friday", time: "1pm – 12am" },
      { day: "Saturday", time: "1pm – 12am" },
      { day: "Sunday", time: "1pm – 4pm" },
    ],
  },
  langSelector: {
    label: "Language selector",
    es: "ES",
    en: "EN",
  },
} as const;

export const ui = { es, en } as const;

export type UITexts = typeof es;
export type UIKeys = keyof UITexts;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en" || first === "es") return first;
  return defaultLang;
}
