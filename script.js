/* ═══════════════════════════════════════════
   HELPERS DÉCORATION MODALES
═══════════════════════════════════════════ */

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
  return `<div class="modal-footer-line"><span>BUT Science des données · Sorbonne Paris Nord</span><span>2024–2025</span></div></div>`;
}

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
  return `<div class="modal-footer-line"><span>Passeport culturel</span></div></div>`;
}

function li(t) { return `<li>${t}</li>`; }

/* ═══════════════════════════════════════════
   DONNÉES MODALES
═══════════════════════════════════════════ */
const DATA = {

  /* ── 01 PRÉSENTATION ── style MAROC */
  presentation: [

    /* Carte 0 — Me présenter */
    { pages: [
      { t:"Me présenter", h: hMaroc("Qui suis-je ?","Présentation") + `
        <p>Étudiant en 2ème année de BUT Sciences des Données, une formation pluridisciplinaire qui me permet d'acquérir des compétences solides en statistiques, programmation, SQL, traitement et visualisation de données, mais aussi en gestion de projet et en communication scientifique.</p>
        <p>Je suis passionné depuis longtemps par les chiffres et la logique, surtout lorsqu'ils s'appliquent à des situations concrètes. Ce qui me caractérise aujourd'hui, c'est ma volonté de mobiliser ces compétences de manière rigoureuse et réfléchie pour comprendre, modéliser et résoudre des problématiques réelles.</p>
        <p>Je suis licencié à l'ESP 18. Cette année, je suis coach de l'équipe U-16, avec qui nous avons décroché la montée — une fierté qui n'est pas rien.</p>
      ` + `
      <div class="photo-feuille">
  <div class="photo-slot main filled">
    <img src="images/IMG_6773.jpeg" alt="Mohammed"/>
  </div>
  <div class="photo-slot filled">
    <img src="images/IMG_2757.jpeg" alt="Mohammed"/>
  </div>
  <div class="photo-slot filled">
    <img src="images/IMG_2759.jpeg" alt="Mohammed"/>
  </div>
</div>
      ` + fMaroc() }
    ]},

    /* Carte 1 — Ce que j'apprécie */
    { pages: [
      { t:"Ce que j'apprécie", h: hMaroc("Ce que j'apprécie dans ma formation","Formation BUT SD") + `
        <p>J'apprécie particulièrement l'équilibre entre théorie et pratique dans cette formation. Les enseignements sont approfondis sur le plan conceptuel, mais ils prennent tout leur sens à travers les Situations d'Apprentissage et d'Évaluation (SAE), qui nous placent en conditions quasi-professionnelles.</p>
        <p>Ces projets concrets me permettent d'appliquer mes connaissances sur des cas réels et d'apprendre à travailler en équipe autour d'un objectif clair. J'y retrouve l'exigence, le sens du collectif et l'analyse de performance, autant de choses que je vis aussi en dehors de l'IUT.</p>
      ` + fMaroc() }
    ]},

    /* Carte 2 — Qualités */
    { pages: [
      { t:"Adaptabilité", h: hMaroc("Adaptabilité et sens de l'organisation","Qualité 1 / 3 · utilise les flèches →") + `
        <p>En tant que coach de l'équipe U-16 à l'ESP 18, j'ai appris à m'adapter rapidement aux imprévus (absences, météo, changements de dernière minute) tout en gardant une organisation claire des séances et des objectifs de progression.</p>
        <p>Cette capacité à m'adapter et à planifier efficacement me sert aussi dans mes projets en BUT SD, où il faut souvent jongler entre plusieurs livrables et ajuster la méthode selon les contraintes.</p>
      ` + fMaroc() },
      { t:"Communication & équipe", h: hMaroc("Communication et travail en équipe","Qualité 2 / 3") + `
        <p>Le rôle de coach m'a amené à gérer un groupe, à donner des consignes claires et à motiver les joueurs, tout en écoutant leurs besoins. J'échange aussi régulièrement avec d'autres coachs pour coordonner les entraînements, ajuster les objectifs et partager des retours.</p>
        <p>Cette expérience m'a permis de développer une bonne communication, aussi bien au sein d'un groupe qu'entre collègues, ce qui est essentiel également dans les SAE où la réussite dépend de la coordination entre les membres du groupe.</p>
      ` + fMaroc() },
      { t:"Autonomie", h: hMaroc("Autonomie et prise d'initiative","Qualité 3 / 3") + `
        <p>Je suis capable de travailler seul de manière efficace. Par exemple, lors d'une SAE en science des données, j'ai pris l'initiative de traiter les données avec Power Query dans Excel, un outil que je maîtrise bien.</p>
        <p>Une fois les données nettoyées et structurées, j'ai utilisé Tableau pour créer des visualisations claires et interactives. Cette démarche personnelle a permis d'enrichir la restitution finale du groupe, sans attendre de consignes supplémentaires.</p>
      ` + fMaroc() }
    ]},

    /* Carte 3 — Objectifs académiques */
    { pages: [
      { t:"Objectifs académiques", h: hMaroc("Objectifs académiques","Court & moyen terme") + `
        <p>Je m'efforce de renforcer mes compétences techniques, en particulier en Python, en statistiques appliquées et en visualisation de données.</p>
        <p>Je consacre du temps aux projets réalisés dans le cadre des SAE, qui me permettent de travailler sur des problématiques concrètes, en groupe, et de mobiliser les outils vus en cours. En parallèle, je mène également des projets personnels, qui me permettent d'explorer différentes sources de données et de m'exercer à leur traitement de manière autonome.</p>
        <p>Ces expériences variées m'aident à construire un profil polyvalent, capable de s'adapter à différents domaines d'application, tout en gardant un regard analytique et rigoureux.</p>
      ` + fMaroc() }
    ]},

    /* Carte 4 — Objectifs professionnels */
    { pages: [
      { t:"Objectifs professionnels", h: hMaroc("Objectifs professionnels","Vision carrière") + `
        <p>Je souhaite devenir data analyst dans le monde du sport, un domaine qui me passionne profondément. J'ai grandi avec le football, que je pratique en club depuis mon plus jeune âge. Aujourd'hui encore, je suis licencié à l'ESP 18, où je suis coach de l'équipe U-16 cette année — avec qui nous avons décroché la montée.</p>
        <p>Le lien avec l'analyse de données me semble évident : comprendre un match, évaluer un joueur, identifier des tendances, tout cela peut être renforcé par une approche rigoureuse basée sur les données. C'est d'ailleurs ce qui motive mon objectif de devenir data analyst dans le sport.</p>
      ` + fMaroc() }
    ]}
  ],

  /* ── 02 COMPÉTENCES ── style SORBONNE */
  competences: [
    /* 0 — Python */
    { pages: [
      { t:"Python", h: hUniv("Python","Compétence technique") + `
        <p>J'utilise Python depuis le lycée, où j'ai suivi la spécialité NSI. Cela m'a permis d'acquérir de bonnes bases et de devenir à l'aise avec ce langage.</p>
        <p>Dans le cadre du BUT SD, j'ai approfondi mes compétences en l'utilisant pour le traitement et l'analyse de données. Par exemple, dans une SAE, j'ai utilisé Python pour lire et exploiter des fichiers de données, et automatiser les analyses pour répondre à la problématique posée.</p>
        <div class="modal-pills"><span>NSI</span><span>Traitement de données</span><span>Automatisation</span></div>
      ` + fUniv() }
    ]},
    /* 1 — SQL */
    { pages: [
      { t:"SQL", h: hUniv("SQL","Compétence technique") + `
        <p>Je maîtrise les requêtes de base et certaines requêtes plus avancées pour interroger des bases de données relationnelles.</p>
        <p>Lors de différentes SAE, j'ai d'abord conçu un modèle entité-association, que j'ai utilisé pour créer les tables dans une base de données, puis peuplé celle-ci automatiquement avec des données pour pouvoir l'exploiter. Cela m'a permis de réaliser des analyses et des visualisations à partir des données.</p>
        <p>Dans un autre projet, j'ai conçu et interrogé une base de données existante afin d'extraire des informations structurées pertinentes pour répondre à une problématique donnée.</p>
        <div class="modal-pills"><span>Modèle entité-association</span><span>Bases relationnelles</span></div>
      ` + fUniv() }
    ]},
    /* 2 — Excel */
    { pages: [
      { t:"Excel", h: hUniv("Excel","Compétence technique") + `
        <p>Je sais utiliser Excel pour organiser, nettoyer et analyser des données. Je maîtrise les fonctions avancées, les filtres et les tableaux croisés dynamiques.</p>
        <p>Dans une SAE, j'ai également utilisé Power Query pour importer et transformer des données, et Power Pivot pour modéliser les relations entre plusieurs tables. Ces outils m'ont permis de créer un tableau de bord complet et interactif, facilitant l'analyse et la synthèse des résultats.</p>
        <div class="modal-pills"><span>Power Query</span><span>Power Pivot</span><span>TCD</span></div>
      ` + fUniv() }
    ]},
    /* 3 — Tableau Desktop */
    { pages: [
      { t:"Tableau Desktop", h: hUniv("Tableau Desktop","Compétence technique") + `
        <p>J'ai appris à créer des tableaux de bord interactifs et des histoires avec Tableau, ce qui m'a permis de rendre des résultats d'analyse plus accessibles et compréhensibles pour un public non technique.</p>
        <div class="modal-pills"><span>Dashboards</span><span>Storytelling</span></div>
      ` + fUniv() }
    ]},
    /* 4 — R */
    { pages: [
      { t:"R", h: hUniv("R","Compétence technique") + `
        <p>J'ai utilisé R dans le cadre de cours et d'exercices orientés statistiques. Cela m'a permis d'expérimenter d'autres méthodes d'analyse et d'enrichir ma vision des outils disponibles.</p>
        <div class="modal-pills"><span>Statistiques</span><span>Visualisation</span></div>
      ` + fUniv() }
    ]},
    /* 5 — Sphinx */
    { pages: [
      { t:"Sphinx", h: hUniv("Sphinx","Compétence technique") + `
        <p>J'ai utilisé Sphinx pour créer un questionnaire dans le cadre d'une SAE. Cet outil m'a permis de concevoir une enquête, de collecter des données réelles par moi-même en allant sur le terrain, et de mieux comprendre les réponses pour les analyser ensuite.</p>
        <div class="modal-pills"><span>Enquêtes</span><span>Collecte terrain</span></div>
      ` + fUniv() }
    ]},
    /* 6 — Analyse de données */
    { pages: [
      { t:"Analyse de données", h: hUniv("Analyse de données","Compétence transversale") + `
        <p>Je suis capable d'explorer un jeu de données, d'en extraire les informations pertinentes et de produire une interprétation structurée et rigoureuse. J'ai appliqué ces compétences à différents jeux de données, aussi bien numériques que textuels.</p>
      ` + fUniv() }
    ]},
    /* 7 — Visualisation de données */
    { pages: [
      { t:"Visualisation de données", h: hUniv("Visualisation de données","Compétence transversale") + `
        <p>J'accorde une grande importance à la lisibilité des représentations graphiques. Je sais adapter les types de graphiques au type d'analyse, et j'utilise des outils comme R, Excel ou Tableau selon le besoin.</p>
      ` + fUniv() }
    ]},
    /* 8 — Gestion de projet */
    { pages: [
      { t:"Gestion de projet", h: hUniv("Gestion de projet","Compétence transversale") + `
        <p>Les SAE m'ont permis de développer des compétences en gestion de projet. J'ai appris à répartir les rôles efficacement avec des outils comme la matrice RACI, à coordonner les équipes, à planifier les tâches et à respecter les délais.</p>
        <p>J'ai aussi su gérer les imprévus et adapter les plannings lorsque nécessaire. À plusieurs reprises, j'ai tenu un rôle de coordination, en assurant la circulation des informations et le suivi des objectifs. Ces expériences m'ont permis de développer une vision globale et de travailler efficacement en équipe.</p>
        <div class="modal-pills"><span>Matrice RACI</span><span>Coordination</span><span>Planification</span></div>
      ` + fUniv() }
    ]},
    /* 9 — Communication et vulgarisation */
    { pages: [
      { t:"Communication & vulgarisation", h: hUniv("Communication et vulgarisation","Compétence transversale") + `
        <p>Je m'efforce toujours de rendre mes analyses accessibles, notamment dans les rapports ou lors des présentations orales. Je m'adapte au public et structure mes idées pour faciliter la compréhension, même pour un auditoire non spécialiste.</p>
      ` + fUniv() }
    ]},
    /* 10 — Streamlit */
    { pages: [
      { t:"Streamlit", h: hUniv("Streamlit","Autre outil") + `
        <p>J'ai utilisé Streamlit pour créer des applications web interactives directement en Python, sans avoir besoin de compétences en développement front-end. Cet outil m'a permis de déployer rapidement des dashboards et des outils d'exploration de données, en rendant mes analyses accessibles à travers une interface simple et intuitive.</p>
        <div class="modal-pills"><span>Python</span><span>Applications web</span><span>Déploiement</span></div>
      ` + fUniv() }
    ]},
    /* 11 — Shiny */
    { pages: [
      { t:"Shiny", h: hUniv("Shiny","Autre outil") + `
        <p>J'ai utilisé R Shiny pour développer des applications interactives permettant d'explorer des données dynamiquement. Shiny m'a permis de combiner la puissance statistique de R avec une interface utilisateur réactive, idéale pour présenter des résultats d'analyse de manière visuelle et accessible.</p>
        <div class="modal-pills"><span>R</span><span>Applications interactives</span><span>Dataviz</span></div>
      ` + fUniv() }
    ]},
    /* 12 — LaTeX */
    { pages: [
      { t:"LaTeX", h: hUniv("LaTeX","Autre outil") + `
        <p>J'ai appris à rédiger des documents scientifiques structurés avec LaTeX, notamment dans le cadre de rapports de SAE. LaTeX m'a permis de produire des rendus professionnels avec une mise en forme rigoureuse : équations, tableaux, bibliographies et numérotation automatique, selon les standards académiques.</p>
        <div class="modal-pills"><span>Rédaction scientifique</span><span>Rapports</span><span>Mise en forme</span></div>
      ` + fUniv() }
    ]},
    /* 13 — GitHub */
    { pages: [
      { t:"GitHub", h: hUniv("GitHub","Autre outil") + `
        <p>J'utilise GitHub pour versionner mes projets et collaborer efficacement en équipe. Git me permet de suivre l'évolution de mon code, de gérer les branches et les fusions, et de revenir sur des versions antérieures si nécessaire. GitHub me sert aussi à documenter mes projets et à les partager dans un contexte professionnel ou académique.</p>
        <div class="modal-pills"><span>Versioning</span><span>Collaboration</span><span>Open source</span></div>
      ` + fUniv() }
    ]},
    /* 14 — ACP */
    { pages: [
      { t:"ACP", h: hUniv("ACP — Analyse en Composantes Principales","Autre outil · Méthode statistique") + `
        <p>J'ai appliqué l'Analyse en Composantes Principales (ACP) pour réduire la dimensionnalité de jeux de données complexes et en extraire les axes de variabilité principaux. Cette méthode m'a permis de visualiser des structures cachées dans les données et de faciliter leur interprétation, notamment pour identifier des groupes ou des tendances dans des datasets multivariés.</p>
        <div class="modal-pills"><span>Réduction de dimension</span><span>Statistiques multivariées</span><span>R / Python</span></div>
      ` + fUniv() }
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
        <p>Conception d'un modèle entité-association puis création des tables dans une base de données, peuplée automatiquement afin d'être exploitée pour des analyses et visualisations.</p>
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
        <p>Création d'un tableau de bord complet et interactif avec Power Query et Power Pivot dans Excel, facilitant l'analyse et la synthèse des résultats.</p>
        <ul>
          ${li("Définition des KPI avec le client fictif")}
          ${li("Maquettage de l'interface (wireframe)")}
          ${li("Développement R Shiny / Excel")}
          ${li("Tests utilisateurs et itérations")}
        </ul>
        <div class="modal-pills"><span>R</span><span>Shiny</span><span>Power Query</span><span>Power Pivot</span></div>
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
        <p>Je pratique le football en club depuis mon plus jeune âge. Aujourd'hui encore, je suis licencié à l'ESP 18, où je suis coach de l'équipe U-16 cette année — avec qui nous avons décroché la montée, une fierté qui n'est pas rien — un rôle qui me pousse à observer, évaluer et améliorer les performances, à l'échelle individuelle comme collective.</p>
        <p>[Décris ce que le football t'a appris : collectif, résilience, tactique, clubs suivis, joueurs préférés…]</p>
      ` + fMaroc() },
      { t:"Football — Maroc 2022", h: hMaroc("Maroc — Mondial Qatar 2022","Feuille 2 / 3") + `
        <p>Premier pays africain et arabe à atteindre les demi-finales d'une Coupe du Monde. Un parcours historique.</p>
        <p>[Décris ce que tu as ressenti, comment tu as vécu ce parcours, ce que ça représente pour toi personnellement…]</p>
      ` + fMaroc() },
      { t:"Football × Data", h: hMaroc("Football × Data","Feuille 3 / 3") + `
        <p>Le lien entre football et analyse de données me semble évident : comprendre un match, évaluer un joueur, identifier des tendances, tout cela peut être renforcé par une approche rigoureuse basée sur les données. C'est d'ailleurs ce qui motive mon objectif de devenir data analyst dans le sport.</p>
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
  ],

  /* ── 05 STAGE ── style SORBONNE */
  stage: [
    { pages: [
      { t:"Intitulé du poste — Contexte", h: hUniv("Intitulé du poste","Stage · feuille 1 / 4") + `
        <p><strong>[Ton intitulé de poste]</strong> chez <strong>[Nom de l'entreprise]</strong> — [Ville] · [Durée]</p>
        <p>[Décris ici le contexte : type de structure (startup, grand groupe, ESN…), taille de l'équipe data, ton positionnement dans l'équipe.]</p>
        <p>[En quoi cette expérience s'inscrit dans ton parcours data et tes objectifs professionnels, notamment vers le data analyst sport ?]</p>
      ` + fUniv() },
      { t:"Missions réalisées", h: hUniv("Missions réalisées","Stage · feuille 2 / 4") + `
        <ul>
          ${li("[Mission 1 — ce que tu as fait concrètement, outils utilisés, résultats]")}
          ${li("[Mission 2 — livrable produit, responsabilité]")}
          ${li("[Mission 3 — outil ou technique mis en œuvre sur le terrain]")}
          ${li("[Mission 4 — collaboration transverse, relation avec d'autres équipes]")}
          ${li("[Mission 5 — si applicable]")}
        </ul>
      ` + fUniv() },
      { t:"Stack & outils utilisés", h: hUniv("Stack technique","Stage · feuille 3 / 4") + `
        <p>[Décris les outils, langages et technologies utilisés pendant le stage.]</p>
        <div class="modal-pills"><span>[Python]</span><span>[SQL]</span><span>[Tableau / Power BI]</span><span>[Autre outil]</span></div>
        <p style="margin-top:18px">[Ce que tu as découvert ou approfondi pendant le stage que tu ne connaissais pas avant.]</p>
      ` + fUniv() },
      { t:"Ce que j'ai appris", h: hUniv("Ce que j'ai appris","Stage · feuille 4 / 4") + `
        <ul>
          ${li("[Compétence technique principale acquise]")}
          ${li("[Compétence professionnelle — communication, gestion de projet, relation client…]")}
          ${li("[Découverte du monde de l'entreprise — culture, fonctionnement, rythme…]")}
          ${li("[Ce que tu ferais différemment si tu recommençais]")}
          ${li("[En quoi ce stage confirme ou réoriente tes objectifs professionnels]")}
        </ul>
      ` + fUniv() }
    ]}
  ],

  /* ── 06 BILAN ── style MAROC */
  bilan: [
    /* Carte 0 — Ce dont je suis le plus fier */
    { pages: [
      { t:"Ce dont je suis le plus fier", h: hMaroc("Ce dont je suis le plus fier","Bilan · feuille 1 / 2") + `
        <p>L'une de mes plus grandes fiertés est d'avoir été admis dans la formation BUT Sciences des Données. Dès Parcoursup, j'ai été retenu parmi plus de 6 000 candidats, ce qui a renforcé ma motivation et ma confiance en mes capacités. Par la suite, j'ai réussi les épreuves de sélection face à plus de 500 élèves pour valider mon admission définitive. Être choisi dans un cursus aussi sélectif est pour moi une reconnaissance importante de mon travail, de ma rigueur et de mon intérêt sincère pour les sciences des données.</p>
      ` + fMaroc() },
      { t:"Fierté — Engagement sportif", h: hMaroc("Mon engagement en tant que coach","Bilan · feuille 2 / 2") + `
        <p>En dehors du cadre scolaire, je suis également très fier de mon engagement en tant que coach sportif. Accompagner mon équipe U-16 tout au long de la saison m'a permis de développer des qualités humaines essentielles comme l'écoute, la gestion de groupe, la pédagogie et la motivation collective.</p>
        <p>Ce qui me rend particulièrement fier, c'est d'avoir décroché la montée avec eux, mais aussi de voir mes joueurs progresser, prendre confiance, et exprimer clairement leur envie de me retrouver comme coach l'année suivante. Leur reconnaissance et leur engagement sont une vraie source de motivation pour moi, et cette expérience m'aide autant sur le plan personnel que dans mon développement professionnel.</p>
      ` + fMaroc() }
    ]},

    /* Carte 1 — Objectifs (3 feuilles) */
    { pages: [
      { t:"Objectifs — Court terme", h: hMaroc("Objectifs à court terme","Bilan · feuille 1 / 3 · utilise les flèches →") + `
        <p>Actuellement en 2ème année de BUT Sciences des Données, mon objectif à court terme est double : réussir ma formation avec sérieux et engagement, tout en préparant activement ma recherche d'alternance.</p>
        <p>L'alternance représente pour moi bien plus qu'un simple rythme d'apprentissage : c'est une véritable opportunité de m'immerger dans le monde professionnel, de mettre en pratique les compétences techniques acquises en cours, et d'acquérir une expérience concrète dans le domaine de l'analyse de données.</p>
        <p>C'est pourquoi je suis déjà pleinement investi dans ma recherche. Je construis progressivement un LinkedIn pour valoriser mes projets, je prépare mes candidatures avec attention, et je reste curieux et motivé pour apprendre en dehors des cours, notamment à travers la pratique régulière de langages comme SQL et Python.</p>
      ` + fMaroc() },
      { t:"Objectifs — Moyen terme", h: hMaroc("Objectifs à moyen terme","Bilan · feuille 2 / 3") + `
        <p>À la suite de mon BUT Sciences des Données, je souhaite poursuivre mes études en intégrant un master spécialisé en data science, en statistique appliquée, ou en lien direct avec l'analyse de données pour le sport. Parmi les formations qui m'intéressent figurent par exemple le Master STAPS spécialité Data Sport, ou des Masters en data science avec une ouverture vers des projets sportifs.</p>
        <p>Durant cette période, je souhaite également multiplier les expériences professionnelles, à travers des stages, alternances ou projets en entreprise. Mon objectif est d'arriver sur le marché de l'emploi avec un profil complet : solide techniquement, capable de comprendre les enjeux métiers, et déjà expérimenté sur le terrain.</p>
        <div class="modal-pills"><span>Python</span><span>SQL</span><span>Power BI</span><span>R</span></div>
      ` + fMaroc() },
      { t:"Objectifs — Long terme", h: hMaroc("Objectifs à long terme","Bilan · feuille 3 / 3") + `
        <p>Dans une dizaine d'années, je me projette en tant que data analyst confirmé, spécialisé dans le domaine du sport. Passionné depuis toujours par le sport, et aujourd'hui fortement intéressé par les données et leur impact dans les prises de décision, je souhaite associer ces deux centres d'intérêt dans ma carrière.</p>
        <p>À terme, j'aimerais travailler pour un club sportif professionnel, une fédération, une entreprise spécialisée dans l'analyse de la performance, ou encore une startup innovante développant des outils technologiques pour le sport : analyse des performances des joueurs, optimisation des stratégies d'équipe, prévention des blessures, analyse du comportement des fans.</p>
        <p>À plus long terme, j'aimerais également évoluer vers un poste à responsabilité, en encadrant une équipe de data analysts ou en pilotant des projets de grande envergure liés à la donnée sportive.</p>
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

/* ── Scroll reveal + nav active ── */
const winScroll = document.querySelector(".window");
const sections  = document.querySelectorAll("section[id], footer[id]");
const navAs     = document.querySelectorAll("nav a");
const revEls    = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      if (e.target.classList.contains("reveal")) e.target.classList.add("active");
      if (e.target.classList.contains("section") && !e.target.classList.contains("snapped")) e.target.classList.add("snapped");
      const id = e.target.getAttribute("id");
      if (id) {
        navAs.forEach(a => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--gold-l)" : "";
        });
      }
    }
  });
}, { root: winScroll, threshold: 0.3 });

sections.forEach(s => observer.observe(s));
revEls.forEach(el => observer.observe(el));

document.querySelectorAll("nav a[href^='#'], a.btn-primary[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});
