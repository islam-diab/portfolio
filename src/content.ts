// All site copy lives here. Keep it in line with the CV
// (public/Islam-Salama-Diab.pdf).
import home from "./assets/citadel/home.webp";
import doctors from "./assets/citadel/doctors.webp";
import time from "./assets/citadel/time.webp";
import confirm from "./assets/citadel/confirm.webp";
import bookings from "./assets/citadel/bookings.webp";

export const links = {
  email: "islamdiab304@gmail.com",
  github: "https://github.com/islam-diab",
  linkedin: "https://www.linkedin.com/in/islamdiab07/",
  cv: `${import.meta.env.BASE_URL}Islam-Salama-Diab.pdf`,
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export type StoreLinks = { appStore?: string; googlePlay?: string; github?: string };

export const citadel = {
  name: "Citadel",
  kind: "Clinic booking app",
  where: "Duma Digital Solutions",
  year: "2026",
  summary:
    "Patients browse a clinic's departments and doctors, pick a free slot and book in a few taps, then track their bookings and loyalty points. I built the mobile app end to end as the only mobile developer, from the first screen to the store release.",
  facts: [
    ["Role", "Sole mobile developer"],
    ["Stack", "Flutter, BLoC, Dio, Firebase"],
    ["Platforms", "iOS and Android"],
  ],
  screens: [
    { src: home, label: "Home" },
    { src: doctors, label: "Doctors" },
    { src: time, label: "Pick a time" },
    { src: confirm, label: "Confirm" },
    { src: bookings, label: "My bookings" },
  ],
  links: {
    appStore: "https://apps.apple.com/app/id6805188806",
    googlePlay: play("com.citadeldev.citadel"),
  } as StoreLinks,
};

export type Project = {
  name: string;
  kind: string;
  where: string;
  text: string;
  stack: string;
  links: StoreLinks;
};

export const shipped: Project[] = [
  {
    name: "Houlda",
    kind: "Multi-brand food ordering",
    where: "Zakham Dev",
    text: "Customers pick a brand, then browse with category filters and local search. Cart, coupons and checkout, Google Maps branch routing, QR ordering from the table, and Tabby and MyFatoorah payments.",
    stack: "Flutter, BLoC, Google Maps",
    links: { appStore: "https://apps.apple.com/us/app/id6761376628", googlePlay: play("com.zakham.hulda_app") },
  },
  {
    name: "Falafina",
    kind: "Restaurant ordering",
    where: "Zakham Dev",
    text: "Menu, cart and order tracking for a restaurant, with the menu and orders served over REST APIs.",
    stack: "Flutter, Cubit, REST",
    links: {
      appStore: "https://apps.apple.com/sa/app/%D9%81%D9%84%D8%A7%D9%81%D9%8A%D9%86%D8%A7/id6747638023",
      googlePlay: play("com.zakham.falafina"),
    },
  },
  {
    name: "Zakham Invitations",
    kind: "Digital event invitations",
    where: "Zakham Dev",
    text: "Hosts design invitation cards with a QR code, send them on WhatsApp in one tap, and check guests in at the door by scanning.",
    stack: "Flutter, QR, WhatsApp",
    links: {
      appStore: "https://apps.apple.com/us/app/%D8%B2%D8%AE%D9%85-%D9%84%D9%84%D8%AF%D8%B9%D9%88%D8%A7%D8%AA/id6748680538",
      googlePlay: play("com.zakham.invitation"),
    },
  },
];

export const openSource: Project[] = [
  {
    name: "duo-adapt",
    kind: "Claude Code plugin",
    where: "Open source",
    text: "Adapts a Flutter app for tablets, foldables and iPhone Duo without touching the phone layout.",
    stack: "Flutter, responsive layout",
    links: { github: "https://github.com/islam-diab/duo-adapt" },
  },
  {
    name: "Guide My",
    kind: "Nearby places finder",
    where: "Personal project",
    text: "Find supermarkets, hospitals and other places nearby, add the ones that are missing, and open them in Google Maps.",
    stack: "Flutter, Google Maps",
    links: { github: "https://github.com/islam-diab/guide_my" },
  },
];

export const experience = [
  {
    period: "09/2026 — Now",
    role: "Flutter Developer",
    company: "Duma Digital Solutions",
    points: [
      "Built Citadel, a clinic booking app, end to end as the sole mobile developer. Live on the App Store and Google Play.",
      "BLoC, Dio for REST APIs, Firebase.",
    ],
  },
  {
    period: "03/2025 — 09/2026",
    role: "Flutter Developer",
    company: "Zakham Dev",
    points: [
      "Houlda: multi-brand food ordering with filters, search, coupons, checkout, Google Maps branch routing, QR dine-in, and Tabby and MyFatoorah payments.",
      "Falafina: restaurant ordering with menu, cart and order tracking over REST APIs.",
      "Zakham Invitations: QR event cards, one-tap WhatsApp sharing and QR guest check-in.",
    ],
  },
  {
    period: "02/2025 — 03/2025",
    role: "Flutter Developer (Contract)",
    company: "BayanatZ",
    points: ["Developed features for a task management app in Flutter."],
  },
];

export const skills: [string, string][] = [
  ["Core", "Flutter, Dart, OOP, Clean Architecture, responsive UI"],
  ["State", "BLoC / Cubit, Provider, GetX"],
  ["Data", "REST APIs, Dio, JSON, Firebase (Auth, Firestore, Cloud Messaging), local storage"],
  ["Integrations", "Google Maps, QR generation and scanning, Tabby, MyFatoorah, WhatsApp sharing"],
  ["Shipping", "Git, GitHub, App Store Connect, Google Play Console, Claude Code"],
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Higher Institute of Computer Science, City of Culture and Science, 6th of October City",
  period: "2018 — 2022",
};
