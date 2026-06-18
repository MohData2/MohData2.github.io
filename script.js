/* ═══════════════════════════════════════════
   HELPERS DÉCORATION MODALES
   Géométrique pur — aucun emoji / texte culturel
═══════════════════════════════════════════ */

/* Sorbonne : sceau SVG + bande navy/or */
function hUniv(title, sub) {
  return `
<div class="modal-univ-header">
  <div class="modal-univ-seal">
    <svg viewBox="0 0 72 72" width="52" height="52">
      <circle cx="36" cy="36" r="34" fill="none" stroke="#c9a84c" stroke-width="1.4"/>
      <circle cx="36" cy="36" r="27" fill="none" stroke="#c9a84c" stroke-width=".6" stroke-dasharray="3 2.5"/>
      <text x="36" y="32" text-anchor="middle" font-size="6.5" fill="#c9a84c" font-family="Georgia,serif" font-weight="bold">SORBONNE</text>
      <text x="36" y="40" text-anchor="middle" font-size="5.5" fill="#c9a84c" font-family="Georgia,serif">PARIS NORD</text>
      <text x="36" y="51" text-anchor="middle" font-size="4.5" fill="rgba(201,168,76,.65)" font-family="Georgia,serif">IUT · SCIENCE DES DONNÉES</text>
    </svg>
  </div>
  <div class="modal-univ-meta">
    <strong>Université Sorbonne Paris Nord</strong>
    <span>Année universitaire 2024 – 2025</span>
    <span>Département Science des données</span>
  </div>
</div>
<div class="modal-inner ruled-lines ruled-univ">
  <h2>${title}</h2>
  <span class="modal-sub">${sub}</span>`;
}

function fUniv() {
  return `<div class="modal-footer-line"><span>BUT Science des données · Sorbonne Paris Nord</span><span>Mohammed · 2024–2025</span></div></div>`;
}

/* Maroc : bande rouge/vert + watermark zellige, sans texte culturel */
function hMaroc(title, sub) {
  return `
<div class="modal-maroc-header">
  <div class="modal-maroc-geo"></div>
  <div class="modal-maroc-bg">
    <strong>${title}</strong>
    <span>${sub}</span>
  </div>
</div>
<div class="modal-inner ruled-lines ruled-maroc">
  <h2>${title}</h2>
  <span class="modal-sub">${sub}</span>`;
}

function fMaroc() {
  return `<div class="modal-footer-line"><span>Mohammed</span><span>Passeport culturel</span></div></div>`;
}

/* Li helper */
function li(t) { return `<li>${t}</li>`; }

/* ═══════════════════════════════════════════
   DONNÉES MODALES
═══════════════════════════════════════════ */
const DATA = {

  /* ── 01 PRÉSENTATION ── style MAROC */
  presentation: [

    /* Carte 0 — Me présenter */
    { pages: [
      { t:"Me présenter", h: hMaroc("Qui suis-je ?","Présentation · feuille 1 / 2") + `
        <p>Je m'appelle <strong>Mohammed</strong>, étudiant en 2ᵉ année de BUT Science des données à l'Université Sorbonne Paris Nord. Marocain, Parisien, data enthusiast.</p>
        <p>[Complète ici : ville d'origine de ta famille, ton lycée, pourquoi la data…]</p>
      ` + fMaroc() },
      { t:"Mon parcours", h: hMaroc("Mon parcours","Présentation · feuille 2 / 2") + `
        <ul>
          ${li("[Bac obtenu, année, lycée]")}
          ${li("2023 — Entrée en BUT Science des données, Sorbonne Paris Nord")}
          ${li("2024 — 2ᵉ année, spécialisation [à compléter]")}
          ${li("2025 — Stage chez [entreprise]")}
          ${li("[Autre étape clé]")}
        </ul>
      ` + fMaroc() }
    ]},

    /* Carte 1 — Ce que j'apprécie */
    { pages: [
      { t:"Ce que j'apprécie", h: hMaroc("Ce que j'apprécie dans ma formation","Formation BUT SD · feuille 1 / 2") + `
        <p>La pluridisciplinarité — stats, programmation, bases de données, communication. Chaque SAÉ confronte la théorie à des cas réels.</p>
        <p>[Ajoute ici ce que tu apprécies vraiment : les profs, les projets, l'ambiance, les intervenants…]</p>
      ` + fMaroc() },
      { t:"Points forts", h: hMaroc("Points forts de la formation","Formation BUT SD · feuille 2 / 2") + `
        <ul>
          ${li("Les SAÉ : projets concrets liés au monde professionnel.")}
          ${li("La transversalité : stats, info, communication, gestion de projet.")}
          ${li("Les intervenants professionnels qui partagent leur expérience terrain.")}
          ${li("[À compléter avec ta propre expérience]")}
        </ul>
      ` + fMaroc() }
    ]},

    /* Carte 2 — Qualités — 1 feuille par qualité */
    { pages: [
      { t:"Curiosité", h: hMaroc("La curiosité","Qualité 1 / 4 · utilise les flèches →") + `
        <p>Toujours en veille — articles, conférences, nouveaux outils. [Donne un exemple concret : une techno apprise seul, un domaine exploré par intérêt…]</p>
        <ul>
          ${li("[Exemple : certification, MOOC, projet perso découvert par curiosité]")}
          ${li("[Domaine qui t'attire au-delà du programme]")}
        </ul>
      ` + fMaroc() },
      { t:"Rigueur", h: hMaroc("La rigueur","Qualité 2 / 4") + `
        <p>Je documente mon code, valide mes résultats, m'assure que mes analyses sont reproductibles.</p>
        <p>[Exemple : bug trouvé grâce à la rigueur, analyse recommencée, validation croisée imposée à toi-même…]</p>
      ` + fMaroc() },
      { t:"Collectif", h: hMaroc("Le sens du collectif","Qualité 3 / 4") + `
        <p>La data science est rarement un sport individuel. J'aime travailler en équipe, partager mes connaissances, écouter les autres.</p>
        <p>[Exemple : SAÉ en groupe, rôle dans l'équipe, désaccord résolu, aide apportée…]</p>
      ` + fMaroc() },
      { t:"Adaptabilité", h: hMaroc("L'adaptabilité","Qualité 4 / 4") + `
        <p>Les outils changent, les méthodes évoluent. Ce qui ne change pas : la logique de raisonnement.</p>
        <p>[Exemple : changement d'outil en cours de projet, nouvelle méthodo, passage Python/R selon le contexte…]</p>
      ` + fMaroc() }
    ]},

    /* Carte 3 — Objectifs académiques */
    { pages: [
      { t:"Objectifs académiques", h: hMaroc("Objectifs académiques","Court & moyen terme") + `
        <ul>
          ${li("Obtenir mon BUT Science des données avec mention.")}
          ${li("Intégrer un master ou une LP Data Science / IA sélectif.")}
          ${li("Approfondir le deep learning, le NLP et les méthodes bayésiennes.")}
          ${li("Participer à des compétitions académiques (Kaggle, data challenges).")}
          ${li("[Objectif supplémentaire personnel]")}
        </ul>
      ` + fMaroc() },
      { t:"Vision long terme", h: hMaroc("Vision long terme","Objectifs · feuille 2 / 2") + `
        <ul>
          ${li("[Objectif à 5 ans]")}
          ${li("[Objectif à 10 ans]")}
          ${li("[Rêve ou ambition — international, recherche, entrepreneuriat…]")}
        </ul>
      ` + fMaroc() }
    ]},

    /* Carte 4 — Objectifs pro */
    { pages: [
      { t:"Objectifs professionnels", h: hMaroc("Objectifs professionnels","Vision carrière") + `
        <ul>
          ${li("Trouver une alternance / stage dans une équipe data ambitieuse.")}
          ${li("Devenir Data Analyst ou Junior Data Scientist.")}
          ${li("Évoluer vers la modélisation prédictive et le MLOps.")}
          ${li("Contribuer à des projets à impact : santé, environnement, sport…")}
          ${li("[Ambition long terme à compléter]")}
        </ul>
      ` + fMaroc() }
    ]}
  ],

  /* ── 03 SAÉ ── style SORBONNE */
  sae: [
    /* 0 */ { pages: [
      { t:"SAÉ 1.01 — Contexte", h: hUniv("Exploration d'un jeu de données","SAÉ 1.01 · Compétence : Traiter · Semestre 1") + `
        <p>Analyse exploratoire d'un dataset public : nettoyage, stats descriptives et visualisations.</p>
        <p><strong>Problématique :</strong> [À compléter]</p>
        <div class="modal-pills"><span>Python</span><span>Pandas</span><span>Matplotlib</span><span>Seaborn</span></div>
      ` + fUniv() },
      { t:"SAÉ 1.01 — Démarche", h: hUniv("Démarche & résultats","SAÉ 1.01 · feuille 2 / 3") + `
        <ul>
          ${li("Source du dataset : [à compléter]")}
          ${li("Volumétrie : [nb lignes, nb colonnes]")}
          ${li("Étapes : valeurs manquantes, normalisation, corrélations")}
          ${li("Livrables : rapport PDF + notebook Jupyter commenté")}
        </ul>
      ` + fUniv() },
      { t:"SAÉ 1.01 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 1.01 · feuille 3 / 3") + `
        <ul>
          ${li("[Apprentissage technique principal]")}
          ${li("[Méthode ou outil découvert]")}
          ${li("[Difficulté surmontée]")}
        </ul>
        <a href="#" class="modal-link">Voir le notebook GitHub →</a>
      ` + fUniv() }
    ]},
    /* 1 */ { pages: [
      { t:"SAÉ 1.02 — Base de données", h: hUniv("Conception d'une base de données","SAÉ 1.02 · Compétence : Traiter · Semestre 1") + `
        <ul>
          ${li("Analyse du cahier des charges et identification des entités")}
          ${li("Schéma EA avec cardinalités")}
          ${li("Normalisation 3FN")}
          ${li("Implémentation PostgreSQL + requêtes complexes")}
        </ul>
        <div class="modal-pills"><span>SQL</span><span>Merise</span><span>PostgreSQL</span></div>
      ` + fUniv() },
      { t:"SAÉ 1.02 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 1.02 · feuille 2 / 2") + `
        <ul>
          ${li("[Point technique retenu sur la modélisation]")}
          ${li("[SQL avancé : ce que tu as découvert]")}
          ${li("[Travail en binôme : ce que tu en retiens]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 2 */ { pages: [
      { t:"SAÉ 1.03 — Collecte web", h: hUniv("Collecte et structuration web","SAÉ 1.03 · Compétence : Traiter · Semestre 1") + `
        <ul>
          ${li("Identification des sources de données")}
          ${li("Extraction avec BeautifulSoup / requests")}
          ${li("Nettoyage et normalisation")}
          ${li("Stockage SQLite + requêtes d'analyse")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>BeautifulSoup</span><span>SQL</span></div>
      ` + fUniv() },
      { t:"SAÉ 1.03 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 1.03 · feuille 2 / 2") + `
        <ul>
          ${li("[Apprentissage 1]")} ${li("[Apprentissage 2]")} ${li("[Difficulté ou surprise]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 3 */ { pages: [
      { t:"SAÉ 2.01 — Dashboard", h: hUniv("Dashboard interactif","SAÉ 2.01 · Compétence : Valoriser · Semestre 2") + `
        <ul>
          ${li("Définition des KPI avec le client fictif")}
          ${li("Maquettage de l'interface (wireframe)")}
          ${li("Développement R Shiny")}
          ${li("Tests utilisateurs et itérations")}
        </ul>
        <div class="modal-pills"><span>R</span><span>Shiny</span><span>ggplot2</span></div>
      ` + fUniv() },
      { t:"SAÉ 2.01 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 2.01 · feuille 2 / 2") + `
        <ul>
          ${li("[Point sur la dataviz et la lisibilité]")}
          ${li("[Point sur l'expérience utilisateur]")}
          ${li("[Retour du jury ou du client fictif]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 4 */ { pages: [
      { t:"SAÉ 2.02 — Statistiques", h: hUniv("Analyse statistique & rapport","SAÉ 2.02 · Compétence : Analyser · Semestre 2") + `
        <ul>
          ${li("Test du Chi-2, test de Student, ANOVA")}
          ${li("Analyse de la puissance statistique")}
          ${li("Rapport professionnel en LaTeX")}
          ${li("Présentation orale")}
        </ul>
        <div class="modal-pills"><span>R</span><span>Statistiques</span><span>LaTeX</span></div>
      ` + fUniv() },
      { t:"SAÉ 2.02 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 2.02 · feuille 2 / 2") + `
        <ul>
          ${li("[Tests d'hypothèses : ce que tu retiens]")}
          ${li("[Rédaction du rapport]")}
          ${li("[Présentation orale : ce que tu en retiens]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 5 */ { pages: [
      { t:"SAÉ 2.03 — ETL", h: hUniv("Pipeline de données (ETL)","SAÉ 2.03 · Compétence : Traiter · Semestre 2") + `
        <ul>
          ${li("Connexion et authentification à une API REST")}
          ${li("Extraction et pagination des données")}
          ${li("Transformation : nettoyage, typage, agrégation")}
          ${li("Chargement en base relationnelle")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>API REST</span><span>ETL</span><span>SQL</span></div>
      ` + fUniv() },
      { t:"SAÉ 2.03 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 2.03 · feuille 2 / 2") + `
        <ul>
          ${li("[Gestion des erreurs API]")}
          ${li("[Transformation des données]")}
          ${li("[Organisation du code ETL]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 6 */ { pages: [
      { t:"SAÉ 3.01 — ML supervisé", h: hUniv("Modèle prédictif supervisé","SAÉ 3.01 · Compétence : Modéliser · Semestre 3") + `
        <ul>
          ${li("Préparation : encodage, scaling, split")}
          ${li("Comparaison : Random Forest, SVM, XGBoost")}
          ${li("Optimisation par GridSearchCV")}
          ${li("Évaluation : accuracy, F1-score, ROC AUC")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>Scikit-learn</span><span>XGBoost</span></div>
      ` + fUniv() },
      { t:"SAÉ 3.01 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 3.01 · feuille 2 / 2") + `
        <ul>
          ${li("[Choix et comparaison des modèles]")}
          ${li("[Optimisation des hyperparamètres]")}
          ${li("[Interprétation des métriques]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 7 */ { pages: [
      { t:"SAÉ 3.02 — NLP", h: hUniv("Analyse de texte (NLP)","SAÉ 3.02 · Compétence : Analyser · Semestre 3") + `
        <ul>
          ${li("Prétraitement : tokenisation, stopwords, lemmatisation")}
          ${li("Analyse de sentiment (lexicale + ML)")}
          ${li("Topic modeling avec LDA")}
          ${li("Visualisation avec pyLDAvis")}
        </ul>
        <div class="modal-pills"><span>NLTK</span><span>spaCy</span><span>Gensim</span></div>
      ` + fUniv() },
      { t:"SAÉ 3.02 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 3.02 · feuille 2 / 2") + `
        <ul>
          ${li("[Prétraitement du texte]")} ${li("[Analyse de sentiment]")} ${li("[Topic modeling]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 8 */ { pages: [
      { t:"SAÉ 3.03 — Big Data", h: hUniv("Big Data & traitement distribué","SAÉ 3.03 · Compétence : Traiter · Semestre 3") + `
        <ul>
          ${li("Architecture Hadoop / HDFS")}
          ${li("DataFrames distribués avec PySpark")}
          ${li("Requêtes SQL sur Spark")}
          ${li("Dataset volumineux en environnement cluster")}
        </ul>
        <div class="modal-pills"><span>PySpark</span><span>Hadoop</span><span>Spark SQL</span></div>
      ` + fUniv() },
      { t:"SAÉ 3.03 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 3.03 · feuille 2 / 2") + `
        <ul>
          ${li("[Local vs distribué : quand choisir quoi]")}
          ${li("[Spark vs Pandas]")} ${li("[Contraintes et surprises]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 9 */ { pages: [
      { t:"SAÉ 4.01 — Cas entreprise", h: hUniv("Projet transversal — cas entreprise","SAÉ 4.01 · Compétence : Valoriser · Semestre 4") + `
        <ul>
          ${li("Recueil du besoin et cadrage du projet")}
          ${li("Collecte et préparation des données")}
          ${li("Modélisation et analyse")}
          ${li("Restitution devant jury professionnel")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>Gestion de projet</span></div>
      ` + fUniv() },
      { t:"SAÉ 4.01 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 4.01 · feuille 2 / 2") + `
        <ul>
          ${li("[Organisation du travail en équipe]")}
          ${li("[Communication avec le partenaire]")}
          ${li("[Présentation devant jury]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 10 */ { pages: [
      { t:"SAÉ 4.02 — Séries temporelles", h: hUniv("Séries temporelles","SAÉ 4.02 · Compétence : Modéliser · Semestre 4") + `
        <ul>
          ${li("Analyse de stationnarité (ADF, KPSS)")}
          ${li("ARIMA manuel + auto_arima")}
          ${li("Prophet pour les saisonnalités complexes")}
          ${li("Évaluation : RMSE, MAE, MAPE")}
        </ul>
        <div class="modal-pills"><span>Prophet</span><span>ARIMA</span><span>statsmodels</span></div>
      ` + fUniv() },
      { t:"SAÉ 4.02 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 4.02 · feuille 2 / 2") + `
        <ul>
          ${li("[Stationnarité et transformation]")}
          ${li("[Quand choisir ARIMA vs Prophet]")}
          ${li("[Interprétation des métriques de prévision]")}
        </ul>
      ` + fUniv() }
    ]},
    /* 11 */ { pages: [
      { t:"SAÉ 4.03 — Déploiement ML", h: hUniv("Déploiement d'un modèle ML","SAÉ 4.03 · Compétence : Modéliser · Semestre 4") + `
        <ul>
          ${li("Sérialisation du modèle avec joblib")}
          ${li("API REST avec FastAPI")}
          ${li("Interface web minimaliste")}
          ${li("Conteneurisation avec Docker")}
        </ul>
        <div class="modal-pills"><span>FastAPI</span><span>Docker</span><span>MLOps</span></div>
        <a href="#" class="modal-link">Voir le repo GitHub →</a>
      ` + fUniv() },
      { t:"SAÉ 4.03 — Apprentissages", h: hUniv("Ce que j'ai appris","SAÉ 4.03 · feuille 2 / 2") + `
        <ul>
          ${li("[Notebook → service en production]")}
          ${li("[Gestion des dépendances Docker]")}
          ${li("[Tests de l'API]")}
        </ul>
      ` + fUniv() }
    ]}
  ],

  /* ── 04 PASSEPORT CULTUREL ── style MAROC */
  projets: [
    /* 0 — Projet data */
    { pages: [
      { t:"Projet 1 — Contexte", h: hMaroc("Projet 1 — Titre","Projet data · feuille 1 / 2") + `
        <p>[Décris ton projet : ce que tu as construit, pourquoi, le contexte.]</p>
        <p>[L'idée t'est venue comment ? Quel problème voulais-tu résoudre ?]</p>
        <div class="modal-pills"><span>Python</span><span>Data</span></div>
      ` + fMaroc() },
      { t:"Projet 1 — Détails", h: hMaroc("Détails & apprentissages","Projet data · feuille 2 / 2") + `
        <ul>
          ${li("[Stack technique utilisée]")}
          ${li("[Défi principal rencontré]")}
          ${li("[Ce que tu en as appris]")}
          ${li("[Résultat ou impact]")}
        </ul>
        <a href="#" class="modal-link">Voir sur GitHub →</a>
      ` + fMaroc() }
    ]},
    /* 1 — Football */
    { pages: [
      { t:"Football — Passion", h: hMaroc("Ma passion pour le football","Feuille 1 / 3 · utilise les flèches →") + `
        <p>[Décris ta passion : depuis quand, comment tu le vis, quel rôle ça joue dans ta vie, clubs suivis, joueurs préférés…]</p>
        <p>Le football m'a appris [les valeurs que tu veux mentionner : collectif, résilience, tactique…].</p>
      ` + fMaroc() },
      { t:"Football — Maroc 2022", h: hMaroc("Maroc — Mondial Qatar 2022","Feuille 2 / 3") + `
        <p>Premier pays africain et arabe à atteindre les demi-finales d'une Coupe du Monde. Un parcours historique.</p>
        <p>[Décris ce que tu as ressenti, comment tu as vécu ce parcours, ce que ça représente pour toi personnellement…]</p>
      ` + fMaroc() },
      { t:"Football × Data", h: hMaroc("Football × Data","Feuille 3 / 3") + `
        <p>[As-tu utilisé la data pour analyser le foot ? xG, heat maps, stats de possession, modèles de prédiction…]</p>
        <ul>
          ${li("[Clubs ou équipes que tu suis et analyses]")}
          ${li("[Projet ou analyse data autour du foot]")}
          ${li("[Ton joueur ou coach préféré et pourquoi — tactiquement ou humainement]")}
        </ul>
      ` + fMaroc() }
    ]},
    /* 2 — Culture marocaine */
    { pages: [
      { t:"Racines marocaines", h: hMaroc("Mes racines marocaines","Feuille 1 / 3 · utilise les flèches →") + `
        <p>[Décris ton lien avec le Maroc : ville d'origine de ta famille, culture, langue, valeurs transmises…]</p>
        <p>Être biculturel m'a appris [ouverture d'esprit, langues, vision du monde, richesse des échanges…]</p>
      ` + fMaroc() },
      { t:"Ce qui m'inspire", h: hMaroc("Ce qui m'inspire","Feuille 2 / 3") + `
        <ul>
          ${li("[Musique : gnawa, chaabi, rap marocain, artiste que tu aimes…]")}
          ${li("[Architecture, villes : Fès, Marrakech, Casablanca, ta ville…]")}
          ${li("[Un auteur, un film, une série marocain·e qui compte pour toi]")}
          ${li("[Cuisine, traditions, fêtes…]")}
        </ul>
      ` + fMaroc() },
      { t:"Engagement & identité", h: hMaroc("Mon engagement","Feuille 3 / 3") + `
        <p>[Comment tu combines tes deux cultures au quotidien, dans tes études, dans ta vision professionnelle…]</p>
        <p>[As-tu un engagement associatif lié à ta culture, à l'intégration, à la jeunesse franco-marocaine ?]</p>
        <ul>
          ${li("[Engagement 1]")} ${li("[Engagement 2]")}
        </ul>
      ` + fMaroc() }
    ]}
  ]
};

/* ═══════════════════════════════════════════
   ÉTAT & DOM
═══════════════════════════════════════════ */
let grp = null, cIdx = 0, pIdx = 0;

const overlay  = document.getElementById("modalOverlay");
const body     = document.getElementById("modalBody");
const titleEl  = document.getElementById("modalTitle");
const infoEl   = document.getElementById("modalInfo");
const dotsEl   = document.getElementById("dotsEl");
const btnP     = document.getElementById("btnPrev");
const btnN     = document.getElementById("btnNext");
const btnClose = document.getElementById("modalClose");

function open(group, ci) {
  grp = group; cIdx = ci; pIdx = 0;
  render();
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function close() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
function render(dir = null) {
  const pages = DATA[grp][cIdx].pages;
  const pg    = pages[pIdx];
  const tot   = pages.length;
  titleEl.textContent = pg.t;

  /* Transition directionnelle */
  if (dir) {
    const outClass = dir === 'next' ? 'slide-out-right' : 'slide-out-left';
    const inClass  = dir === 'next' ? 'slide-in-right'  : 'slide-in-left';
    body.classList.add(outClass);
    setTimeout(() => {
      body.classList.remove(outClass);
      body.innerHTML = pg.h;
      body.classList.add(inClass);
      setTimeout(() => body.classList.remove(inClass), 300);
    }, 180);
  } else {
    body.innerHTML = pg.h;
  }

  infoEl.textContent  = tot > 1 ? `feuille ${pIdx+1} / ${tot}` : "";
  dotsEl.innerHTML    = "";
  if (tot > 1) pages.forEach((_,i) => {
    const d = document.createElement("span");
    d.className = "page-dot" + (i===pIdx?" active":"");
    dotsEl.appendChild(d);
  });
  btnP.disabled = pIdx === 0;
  btnN.disabled = pIdx === tot - 1;
}

btnN.addEventListener("click", () => { if (pIdx < DATA[grp][cIdx].pages.length-1) { pIdx++; render('next'); body.scrollTop=0; } });
btnP.addEventListener("click", () => { if (pIdx > 0) { pIdx--; render('prev'); body.scrollTop=0; } });
/* Fermeture : point rouge ET point jaune */
btnClose.addEventListener("click", close);
document.getElementById("modalMinimize").addEventListener("click", close);
overlay.addEventListener("click", e => { if (e.target===overlay) close(); });
document.addEventListener("keydown", e => {
  if (!overlay.classList.contains("open")) return;
  if (e.key==="Escape") close();
  if (e.key==="ArrowRight" && !btnN.disabled) btnN.click();
  if (e.key==="ArrowLeft"  && !btnP.disabled) btnP.click();
});

document.querySelectorAll(".mac-card").forEach(c => {
  c.addEventListener("click", () => {
    const g = c.dataset.group, i = parseInt(c.dataset.idx);
    if (g && DATA[g]?.[i]) open(g, i);
  });
});

/* ── Filtre SAÉ ── */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll("[data-group='sae']").forEach(c => {
      const show = f==="all" || c.dataset.comp===f;
      c.style.transition = "opacity .22s, transform .22s";
      if (show) { c.style.display=""; requestAnimationFrame(()=>{ c.style.opacity="1"; c.style.transform=""; }); }
      else { c.style.opacity="0"; c.style.transform="translateY(8px)"; setTimeout(()=>{ if (c.dataset.comp!==f&&f!=="all") c.style.display="none"; },240); }
    });
  });
});

/* ── Scroll reveal + snap animation + nav active ── */
const winScroll = document.querySelector(".window");
const sections  = document.querySelectorAll("section[id], footer[id]");
const navAs     = document.querySelectorAll("nav a");
const revEls    = document.querySelectorAll(".reveal");

/* IntersectionObserver sur le conteneur .window */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      /* Reveal général */
      if (e.target.classList.contains("reveal")) {
        e.target.classList.add("active");
      }
      /* Animation snap-in sur les sections */
      if (e.target.classList.contains("section")) {
        e.target.classList.remove("snapped");
        /* Force reflow pour relancer l'animation */
        void e.target.offsetWidth;
        e.target.classList.add("snapped");
      }
      /* Nav active */
      const id = e.target.getAttribute("id");
      if (id) {
        navAs.forEach(a => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--gold-l)" : "";
        });
      }
    }
  });
}, {
  root: winScroll,
  threshold: 0.3
});

sections.forEach(s => observer.observe(s));
revEls.forEach(el => observer.observe(el));

/* ── Nav links : défilement dans .window ── */
document.querySelectorAll("nav a[href^='#'], a.btn-primary[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
