/* Contenus de l'USTM : formations, partenaires, actualités, icônes
   (la variable s'appelle toujours ESM : nom technique hérité du modèle, utilisé partout) */
const ESM = {
  nom: "Université des Sciences et Techniques de Masuku",
  sigle: "USTM",
  slogan: "L'université publique scientifique et technique du Gabon",
  adresse: "Masuku, B.P. 901 Franceville (Haut-Ogooué) – Gabon",
  tels: [],                       // aucun numéro institutionnel publié : à compléter avec le Rectorat
  whatsapp: "",                   // vide → les boutons de contact renvoient vers la page Facebook du Rectorat
  messenger: "https://www.facebook.com/p/Infos-Rectorat-USTM-100064030231040/",
  email: "",                      // aucun e-mail institutionnel publié : à compléter avec le Rectorat
  facebook: "https://www.facebook.com/p/Infos-Rectorat-USTM-100064030231040/",
  groupe: "Ministère de l'Enseignement supérieur",
  agrement: "Université publique · créée par la loi du 29 janvier 1986",
};

const ICONS = {
  anchor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  brief:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a4 4 0 006 0zM18 7l-3 7a4 4 0 006 0z"/></svg>',
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7l5.7 5.7a8 8 0 11-11.4 0z"/></svg>',
  drill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l5 20M12 2L7 22M8.5 16h7M9.8 10h4.4M4 22h16"/></svg>',
  fish:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c3-5 9-6 13.5 0-4.5 6-10.5 5-13.5 0zM6.5 12L2 8v8z"/><circle cx="16" cy="11" r=".6" fill="currentColor"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1"/></svg>',
  ship:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M19.4 17L22 10.5 12 7 2 10.5 4.6 17M12 2v5M8 4h8"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  hand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l2 2a1 1 0 003-3M14 14l2.5 2.5a1 1 0 003-3l-3.88-3.88a3 3 0 00-4.24 0l-.88.88a1 1 0 11-3-3l2.81-2.81a5.79 5.79 0 017.06-.87l.47.28a2 2 0 001.42.25L21 4M21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 003-3M3 4h8"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20V2H6.5A2.5 2.5 0 004 4.5v15zM4 19.5A2.5 2.5 0 006.5 22H20v-5"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zm8.4-18.2A11.8 11.8 0 002.1 17.8L.4 24l6.3-1.7A11.8 11.8 0 0024 12c0-3.2-1.2-6.1-3.5-8.4z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
  mega:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 11-5.8-1.6"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
  inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>',
  out:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  dl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>',
  flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4.5 19a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 9V3M7.5 15h9"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6 2.4-.5 4.9-2 5.9-3"/></svg>',
  atom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5"/><path d="M20.2 20.2c2-2 0-7.4-4.5-11.9C11.2 3.8 5.8 1.8 3.8 3.8s0 7.4 4.5 11.9c4.5 4.5 9.9 6.5 11.9 4.5zM15.7 15.7c4.5-4.5 6.5-9.9 4.5-11.9s-7.4 0-11.9 4.5c-4.5 4.5-6.5 9.9-4.5 11.9s7.4 0 11.9-4.5z"/></svg>',
  cog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>',
  cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
};

const FORMATIONS = [
  // Faculté des Sciences
  {id:"chimie", niv:"fs", ic:"flask", t:"Chimie", d:"Chimie générale, organique et analytique, avec manipulations en laboratoire : comprendre la matière et ses transformations.", deb:["Technicien de laboratoire","Analyste","Enseignement et recherche","Industrie chimique et agroalimentaire"]},
  {id:"bio", niv:"fs", ic:"leaf", t:"Biologie", d:"Biologie cellulaire, génétique, biochimie, écologie : les sciences du vivant, de la cellule aux écosystèmes équatoriaux.", deb:["Biologiste","Technicien de laboratoire","Environnement et biodiversité","Enseignement et recherche"]},
  {id:"geo", niv:"fs", ic:"drill", t:"Géologie", d:"Géologie générale, minéralogie, cartographie et travaux de terrain : le sous-sol gabonais, ses roches et ses ressources.", deb:["Géologue","Prospection minière","Hydrogéologie","Bureaux d'études"]},
  {id:"mp", niv:"fs", ic:"atom", t:"Mathématiques – Physique", d:"Une formation scientifique solide en mathématiques et en physique, base de la recherche et des carrières scientifiques et techniques.", deb:["Enseignement","Recherche","Modélisation et calcul scientifique","Poursuite en master ou en école d'ingénieurs"]},
  {id:"pc", niv:"fs", ic:"drop", t:"Physico-chimie", d:"Physique et chimie réunies : propriétés de la matière, énergie, matériaux et méthodes d'analyse.", deb:["Technicien supérieur","Contrôle qualité","Énergie et matériaux","Enseignement et recherche"]},
  // École Polytechnique de Masuku
  {id:"sgi", niv:"epm", ic:"award", t:"Sciences générales de l'ingénieur", d:"Le tronc commun des études d'ingénieur : mathématiques appliquées, physique, mécanique, électricité et informatique.", deb:["Cycle ingénieur de l'EPM","Technicien supérieur","Bureaux d'études"]},
  {id:"gm", niv:"epm", ic:"cog", t:"Génie mécanique", d:"Conception, fabrication, maintenance et énergétique des systèmes mécaniques et industriels.", deb:["Ingénieur mécanicien","Maintenance industrielle","Mines et énergie","Bureaux d'études"]},
  {id:"ge", niv:"epm", ic:"bolt", t:"Génie électrique", d:"Électricité, électronique de puissance, automatismes et réseaux : produire, transporter et maîtriser l'énergie.", deb:["Ingénieur électricien","Énergie et réseaux","Automatisme industriel","Exploitation minière"]},
  {id:"gi", niv:"epm", ic:"cpu", t:"Génie informatique et télécommunications", d:"Programmation, réseaux, systèmes d'information et télécommunications : les compétences numériques au cœur de l'économie.", deb:["Ingénieur logiciel","Administrateur réseaux","Opérateurs de télécommunications","Cybersécurité"]},
  {id:"gc", niv:"epm", ic:"home", t:"Génie civil", d:"Bâtiment, travaux publics, géotechnique et matériaux : concevoir et construire les infrastructures du Gabon.", deb:["Ingénieur génie civil","Conducteur de travaux","BTP","Bureaux d'études"]},
  // INSAB
  {id:"pav", niv:"insab", ic:"leaf", t:"Productions animales et végétales", d:"Agronomie, élevage et cultures : accroître et sécuriser la production agricole du pays.", deb:["Ingénieur agronome","Conseiller agricole","Exploitations et projets agricoles"]},
  {id:"agro", niv:"insab", ic:"chart", t:"Agro-économie", d:"Économie rurale, gestion des exploitations et des filières agricoles, politiques de développement.", deb:["Gestionnaire de filière","Chargé de projets","Banques et organismes de développement"]},
  {id:"gab", niv:"insab", ic:"flask", t:"Génie alimentaire et biotechnologies", d:"Transformation et conservation des aliments, microbiologie, biotechnologies et contrôle qualité.", deb:["Ingénieur agroalimentaire","Contrôle qualité","Industries de transformation"]},
  // École doctorale
  {id:"ed", niv:"ed", ic:"cap", t:"Doctorat – École doctorale", d:"Préparation du doctorat au sein de l'École doctorale de l'université : encadrement de recherche, laboratoires et publications.", deb:["Enseignant-chercheur","Chercheur","Expert scientifique","Cadre de haut niveau"]},
];
const NIVEAUX = {
  fs:{l:"Sciences", c:"", full:"Faculté des Sciences"},
  epm:{l:"Polytechnique", c:"m", full:"École Polytechnique de Masuku (EPM)"},
  insab:{l:"INSAB", c:"c", full:"Institut national supérieur d'Agronomie et de Biotechnologies (INSAB)"},
  ed:{l:"Doctorat", c:"", full:"École doctorale"},
};

const PARTENAIRES = [
  {n:"Agence universitaire de la Francophonie", s:"Réseau francophone", c:"#1f5fcc"},
  {n:"Association des universités africaines", s:"Réseau panafricain", c:"#22a05a"},
  {n:"Ministère de l'Enseignement supérieur", s:"Tutelle · Gabon", c:"#0b2f6b"},
  {n:"École Polytechnique de Masuku", s:"Composante de l'USTM", c:"#cf8a00"},
];

const ACTUS = [
  {img:"campus-portail", cat:"Campus", t:"L'entrée du campus de Masuku", d:"Aux portes de Franceville, le campus de l'USTM accueille les étudiants des sciences, de l'ingénierie et de l'agronomie."},
  {img:"batiment-rectorat", cat:"L'université", t:"Un campus aux couleurs de l'université", d:"Bâtiments jaunes, stèle aux lettres colorées : l'identité visuelle de l'USTM se reconnaît dès l'arrivée sur le campus."},
  {img:"batiment-jaune", cat:"Infrastructures", t:"Rénovation des campus : 3 milliards FCFA pour l'USTM", d:"En août 2026, le Chef de l'État a annoncé une enveloppe de 3 milliards FCFA pour la réhabilitation et la modernisation de l'université."},
  {img:"stele-ustm", cat:"Identité", t:"La stèle USTM", d:"Les lettres de l'USTM, en bleu, jaune et vert, accueillent les visiteurs au cœur du campus."},
  {img:"pilier-logo", cat:"Campus", t:"Le portail de l'université", d:"Le pilier d'entrée porte le sigle de l'université : le point de départ de chaque journée d'étude."},
  {img:"arbre-campus", cat:"Vie de campus", t:"Un campus arboré", d:"Grands arbres, espaces ouverts et allées : le cadre de vie des étudiants de Masuku."},
];

const GALERIE = [
  {img:"campus-portail", cat:"campus", t:"L'entrée du campus de Masuku"},
  {img:"batiment-rectorat", cat:"campus", t:"Bâtiments du campus"},
  {img:"pilier-logo", cat:"identite", t:"Le pilier d'entrée et le sigle USTM"},
  {img:"stele-ustm", cat:"identite", t:"La stèle USTM"},
  {img:"batiment-jaune", cat:"campus", t:"Un bâtiment aux couleurs de l'université"},
  {img:"arbre-campus", cat:"vie", t:"Le campus sous les grands arbres"},
];

/* Espace numérique : les 3 profils, leurs avantages et un compte de démonstration chacun
   (les comptes ne s'affichent que si ESM_CONFIG.showDemo n'est pas à false) */
const ESPACES = [
  {role:"etudiant", ic:"cap", t:"Étudiants", s:"Suivre sa scolarité", c:"#1f5fcc",
   pts:["Notes et moyennes en temps réel","Bulletin imprimable et rang","Emploi du temps, examens et annonces"],
   demo:{login:"USTM26-015", pwd:"ustm2026", nom:"Davy Mapangou · Ingénieur 2 GIT"}},
  {role:"enseignant", ic:"edit", t:"Enseignants", s:"Gérer ses classes", c:"#cf8a00",
   pts:["Saisie des notes, moyennes automatiques","Statistiques de classe et export","Mon planning, examens, annonces et messagerie"],
   demo:{login:"p.ndong", pwd:"prof2026", nom:"M. Paul Ndong"}},
  {role:"admin", ic:"shield", t:"Scolarité", s:"Piloter l'établissement", c:"#0b2f6b",
   pts:["Pré-inscriptions reçues en ligne","Résultats et classements par classe","Planning : emploi du temps et événements"],
   demo:{login:"scolarite", pwd:"admin2026", nom:"Service Scolarité"}},
];
