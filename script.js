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

  /* ── 01 PRÉSENTATION ── */
  presentation: [
    { pages: [
      { t:"Me présenter", h: hMaroc("Qui suis-je ?","Présentation") + `
        <p>Étudiant en 2ème année de BUT Sciences des Données, une formation pluridisciplinaire qui me permet d'acquérir des compétences solides en statistiques, programmation, SQL, traitement et visualisation de données, mais aussi en gestion de projet et en communication scientifique.</p>
        <p>Je suis passionné depuis longtemps par les chiffres et la logique, surtout lorsqu'ils s'appliquent à des situations concrètes. Ce qui me caractérise aujourd'hui, c'est ma volonté de mobiliser ces compétences de manière rigoureuse et réfléchie pour comprendre, modéliser et résoudre des problématiques réelles.</p>
        <p>Je suis licencié à l'ESP 18. Cette année, je suis coach de l'équipe U-16, avec qui nous avons décroché la montée — une fierté qui n'est pas rien.</p>
        <div class="photo-feuille">
          <div class="photo-slot main filled"><img src="images/IMG_6773.jpeg" alt="Mohammed"/></div>
          <div class="photo-slot filled"><img src="images/IMG_2757.jpeg" alt="Mohammed"/></div>
          <div class="photo-slot filled"><img src="images/IMG_2759.jpeg" alt="Mohammed"/></div>
        </div>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Ce que j'apprécie", h: hMaroc("Ce que j'apprécie dans ma formation","Formation BUT SD") + `
        <p>J'apprécie particulièrement l'équilibre entre théorie et pratique dans cette formation. Les enseignements sont approfondis sur le plan conceptuel, mais ils prennent tout leur sens à travers les Situations d'Apprentissage et d'Évaluation (SAE), qui nous placent en conditions quasi-professionnelles.</p>
        <p>Ces projets concrets me permettent d'appliquer mes connaissances sur des cas réels et d'apprendre à travailler en équipe autour d'un objectif clair. J'y retrouve l'exigence, le sens du collectif et l'analyse de performance, autant de choses que je vis aussi en dehors de l'IUT.</p>
      ` + fMaroc() }
    ]},
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
    { pages: [
      { t:"Objectifs académiques", h: hMaroc("Objectifs académiques","Court & moyen terme") + `
        <p>Je m'efforce de renforcer mes compétences techniques, en particulier en Python, en statistiques appliquées et en visualisation de données.</p>
        <p>Je consacre du temps aux projets réalisés dans le cadre des SAE, qui me permettent de travailler sur des problématiques concrètes, en groupe, et de mobiliser les outils vus en cours. En parallèle, je mène également des projets personnels, qui me permettent d'explorer différentes sources de données et de m'exercer à leur traitement de manière autonome.</p>
        <p>Ces expériences variées m'aident à construire un profil polyvalent, capable de s'adapter à différents domaines d'application, tout en gardant un regard analytique et rigoureux.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Objectifs professionnels", h: hMaroc("Objectifs professionnels","Vision carrière") + `
        <p>Je souhaite devenir data analyst dans le monde du sport, un domaine qui me passionne profondément. J'ai grandi avec le football, que je pratique en club depuis mon plus jeune âge. Aujourd'hui encore, je suis licencié à l'ESP 18, où je suis coach de l'équipe U-16 cette année — avec qui nous avons décroché la montée.</p>
        <p>Le lien avec l'analyse de données me semble évident : comprendre un match, évaluer un joueur, identifier des tendances, tout cela peut être renforcé par une approche rigoureuse basée sur les données.</p>
      ` + fMaroc() }
    ]}
  ],

  /* ── 02 COMPÉTENCES ── */
  competences: [
    { pages: [{ t:"Python", h: hUniv("Python","Compétence technique") + `
        <p>J'utilise Python depuis le lycée, où j'ai suivi la spécialité NSI. Cela m'a permis d'acquérir de bonnes bases et de devenir à l'aise avec ce langage.</p>
        <p>Dans le cadre du BUT SD, j'ai approfondi mes compétences en l'utilisant pour le traitement et l'analyse de données. Par exemple, dans une SAE, j'ai utilisé Python pour lire et exploiter des fichiers de données, et automatiser les analyses pour répondre à la problématique posée.</p>
        <div class="modal-pills"><span>NSI</span><span>Traitement de données</span><span>Automatisation</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"SQL", h: hUniv("SQL","Compétence technique") + `
        <p>Je maîtrise les requêtes de base et certaines requêtes plus avancées pour interroger des bases de données relationnelles.</p>
        <p>Lors de différentes SAE, j'ai d'abord conçu un modèle entité-association, que j'ai utilisé pour créer les tables dans une base de données, puis peuplé celle-ci automatiquement avec des données pour pouvoir l'exploiter.</p>
        <div class="modal-pills"><span>Modèle entité-association</span><span>Bases relationnelles</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Excel", h: hUniv("Excel","Compétence technique") + `
        <p>Je sais utiliser Excel pour organiser, nettoyer et analyser des données. Je maîtrise les fonctions avancées, les filtres et les tableaux croisés dynamiques.</p>
        <p>Dans une SAE, j'ai également utilisé Power Query pour importer et transformer des données, et Power Pivot pour modéliser les relations entre plusieurs tables.</p>
        <div class="modal-pills"><span>Power Query</span><span>Power Pivot</span><span>TCD</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Tableau Desktop", h: hUniv("Tableau Desktop","Compétence technique") + `
        <p>J'ai appris à créer des tableaux de bord interactifs et des histoires avec Tableau, ce qui m'a permis de rendre des résultats d'analyse plus accessibles et compréhensibles pour un public non technique.</p>
        <div class="modal-pills"><span>Dashboards</span><span>Storytelling</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"R", h: hUniv("R","Compétence technique") + `
        <p>J'ai utilisé R dans le cadre de cours et d'exercices orientés statistiques. Cela m'a permis d'expérimenter d'autres méthodes d'analyse et d'enrichir ma vision des outils disponibles.</p>
        <div class="modal-pills"><span>Statistiques</span><span>Visualisation</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Sphinx", h: hUniv("Sphinx","Compétence technique") + `
        <p>J'ai utilisé Sphinx pour créer un questionnaire dans le cadre d'une SAE. Cet outil m'a permis de concevoir une enquête, de collecter des données réelles par moi-même en allant sur le terrain, et de mieux comprendre les réponses pour les analyser ensuite.</p>
        <div class="modal-pills"><span>Enquêtes</span><span>Collecte terrain</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Analyse de données", h: hUniv("Analyse de données","Compétence transversale") + `
        <p>Je suis capable d'explorer un jeu de données, d'en extraire les informations pertinentes et de produire une interprétation structurée et rigoureuse. J'ai appliqué ces compétences à différents jeux de données, aussi bien numériques que textuels.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Visualisation de données", h: hUniv("Visualisation de données","Compétence transversale") + `
        <p>J'accorde une grande importance à la lisibilité des représentations graphiques. Je sais adapter les types de graphiques au type d'analyse, et j'utilise des outils comme R, Excel ou Tableau selon le besoin.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Gestion de projet", h: hUniv("Gestion de projet","Compétence transversale") + `
        <p>Les SAE m'ont permis de développer des compétences en gestion de projet. J'ai appris à répartir les rôles efficacement avec des outils comme la matrice RACI, à coordonner les équipes, à planifier les tâches et à respecter les délais.</p>
        <div class="modal-pills"><span>Matrice RACI</span><span>Coordination</span><span>Planification</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Communication & vulgarisation", h: hUniv("Communication et vulgarisation","Compétence transversale") + `
        <p>Je m'efforce toujours de rendre mes analyses accessibles, notamment dans les rapports ou lors des présentations orales. Je m'adapte au public et structure mes idées pour faciliter la compréhension, même pour un auditoire non spécialiste.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Streamlit", h: hUniv("Streamlit","Autre outil") + `
        <p>J'ai utilisé Streamlit pour créer des applications web interactives directement en Python, sans avoir besoin de compétences en développement front-end. Cet outil m'a permis de déployer rapidement des dashboards et des outils d'exploration de données.</p>
        <div class="modal-pills"><span>Python</span><span>Applications web</span><span>Déploiement</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Shiny", h: hUniv("Shiny","Autre outil") + `
        <p>J'ai utilisé R Shiny pour développer des applications interactives permettant d'explorer des données dynamiquement, en combinant la puissance statistique de R avec une interface utilisateur réactive.</p>
        <div class="modal-pills"><span>R</span><span>Applications interactives</span><span>Dataviz</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"LaTeX", h: hUniv("LaTeX","Autre outil") + `
        <p>J'ai appris à rédiger des documents scientifiques structurés avec LaTeX, notamment dans le cadre de rapports de SAE. LaTeX m'a permis de produire des rendus professionnels avec une mise en forme rigoureuse.</p>
        <div class="modal-pills"><span>Rédaction scientifique</span><span>Rapports</span><span>Mise en forme</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"GitHub", h: hUniv("GitHub","Autre outil") + `
        <p>J'utilise GitHub pour versionner mes projets et collaborer efficacement en équipe. Git me permet de suivre l'évolution de mon code, de gérer les branches et les fusions, et de partager mes projets dans un contexte professionnel ou académique.</p>
        <div class="modal-pills"><span>Versioning</span><span>Collaboration</span><span>Open source</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"ACP", h: hUniv("ACP — Analyse en Composantes Principales","Autre outil · Méthode statistique") + `
        <p>J'ai appliqué l'Analyse en Composantes Principales pour réduire la dimensionnalité de jeux de données complexes et en extraire les axes de variabilité principaux, notamment sur des données de combats UFC.</p>
        <div class="modal-pills"><span>Réduction de dimension</span><span>Statistiques multivariées</span><span>R / Python</span></div>
      ` + fUniv() }]}
  ],

  /* ── 03 SAÉ ── */
  sae: [

    /* 0 — S106 Enquête · Analyser */
    { pages: [
      { t:"S106 — Contexte & démarche", h: hUniv("Mise en œuvre d'une enquête","S106 · Compétence : Analyser · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons réalisé une enquête complète, de la conception du questionnaire jusqu'à l'analyse des résultats. L'objectif était d'appliquer une démarche statistique rigoureuse à un cas concret.</p>
        <p>Nous avons utilisé <strong>Sphinx</strong> pour créer et partager le questionnaire sur le terrain, garantissant une collecte structurée et fiable. L'analyse des résultats a été effectuée sous <strong>Excel</strong> avec des graphiques, tableaux croisés et statistiques descriptives. Le travail s'est conclu par une <strong>soutenance orale</strong>.</p>
        <div class="modal-pills"><span>Sphinx</span><span>Excel</span><span>Statistiques descriptives</span><span>Oral</span></div>
      ` + fUniv() },
      { t:"S106 — Bilan réflexif", h: hUniv("Bilan réflexif","S106 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases en statistiques descriptives, maîtrise d'Excel, initiation à la conception de questionnaires.</p>
        <p><strong>Prise de conscience :</strong> Cette SAE m'a appris à concevoir une enquête, analyser des données et présenter clairement les résultats avec les bons outils.</p>
        <p><strong>Éléments déclencheurs :</strong> J'ai évolué en pratiquant chaque étape : créer un questionnaire, manipuler des données, et présenter des résultats de façon claire et professionnelle.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Acquisition de bonnes pratiques en méthodologie d'enquête, maîtrise des outils de collecte et d'analyse, compétences en communication orale.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir l'analyse statistique avancée, améliorer les visuels et gagner en aisance à l'oral.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 1 — S104 Production de données · Traiter */
    { pages: [
      { t:"S104 — Contexte & démarche", h: hUniv("Apprendre en situation — production de données en entreprise","S104 · Compétence : Traiter · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons analysé le fonctionnement d'une organisation à partir de ressources documentaires. L'objectif était de comprendre son contexte, étudier son modèle économique ainsi que son impact social, sociétal et environnemental.</p>
        <p>Ce travail nous a permis de mobiliser des compétences en recherche d'information, analyse de documents et synthèse critique, tout en apprenant à rédiger un rapport détaillé et à préparer une restitution via une <strong>capsule vidéo</strong>.</p>
        <div class="modal-pills"><span>Analyse documentaire</span><span>Rapport</span><span>Capsule vidéo</span></div>
      ` + fUniv() },
      { t:"S104 — Bilan réflexif", h: hUniv("Bilan réflexif","S104 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Maîtrise des bases de la recherche d'information, mais pas d'expérience d'analyse organisationnelle structurée.</p>
        <p><strong>Prise de conscience :</strong> Savoir chercher ne suffit pas — il faut croiser les sources, les analyser de manière critique et les synthétiser efficacement.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Meilleure organisation des idées, travail en équipe sur un projet complexe, restitution via capsule vidéo et rapport écrit.")}
          ${li("<strong>Points de vigilance :</strong> Progresser dans l'interprétation fine des documents, notamment pour en saisir les enjeux économiques ou sociétaux en profondeur.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 2 — S103 Tableau de bord · Traiter */
    { pages: [
      { t:"S103 — Contexte & démarche", h: hUniv("Préparation et synthèse d'un tableau de données","S103 · Compétence : Traiter · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons exploité un fichier de données regroupant les informations sur les étudiants de l'IUT afin d'en extraire des analyses utiles pour le service communication. L'objectif était de construire un <strong>tableau de bord interactif</strong> permettant d'identifier des profils types d'étudiants (lycée d'origine, spécialité de bac, département, boursiers).</p>
        <p>Nous avons utilisé <strong>Power Query</strong> dans Excel pour importer, transformer et structurer les données, avec des segments, filtres dynamiques et graphes croisés dynamiques pour faciliter la navigation.</p>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>Tableau de bord</span><span>TCD</span></div>
      ` + fUniv() },
      { t:"S103 — Bilan réflexif", h: hUniv("Bilan réflexif","S103 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases d'Excel, mais pas d'expérience avec Power Query ni de tableau de bord structuré à partir de données brutes.</p>
        <p><strong>Prise de conscience :</strong> L'importance de la structuration des données et de leur mise en forme propre pour permettre une analyse claire et pertinente.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Solides bases en préparation de données, automatisation avec Power Query, création de tableaux de bord clairs et interactifs.")}
          ${li("<strong>Points de vigilance :</strong> Progresser dans l'interprétation des données pour savoir quels croisements sont réellement pertinents pour les besoins métier.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 3 — S204 Dataviz concours · Valoriser */
    { pages: [
      { t:"S204 — Contexte & démarche", h: hUniv("DATAVIZ — Concours National INSEE","S204 · Compétence : Valoriser · Semestre 2") + `
        <p>Le 22 mai 2025, dans le cadre de la SAÉ 2-04, j'ai participé au <strong>Concours National de Datavisualisation</strong> organisé à l'IUT de Villetaneuse en partenariat avec l'INSEE. Le thème portait sur l'analyse de la scolarisation des jeunes de 15 à 29 ans en France, à partir de données des recensements 2010 et 2021.</p>
        <p>En équipe, nous avons exploré les jeux de données (effectifs départementaux, flux entre départements) pour concevoir une <strong>infographie claire et percutante</strong>. Le format, les outils et la présentation graphique étaient entièrement libres.</p>
        <div class="modal-pills"><span>Tableau Desktop</span><span>Excel</span><span>Data storytelling</span><span>INSEE</span></div>
      ` + fUniv() },
      { t:"S204 — Bilan réflexif", h: hUniv("Bilan réflexif","S204 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases en Excel ou Tableau Desktop, notions de datavisualisation et première expérience en travail de groupe.</p>
        <p><strong>Prise de conscience :</strong> L'importance de structurer une analyse et de choisir les bons outils pour bien faire passer un message avec les données.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Meilleure maîtrise des outils de visualisation, capacité à simplifier des données complexes pour les rendre compréhensibles.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir le data storytelling et gagner en autonomie sur des outils plus avancés comme Power BI. Progresser sur certaines visualisations Tableau Desktop.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 4 — S203 Régression médicale · Modéliser */
    { pages: [
      { t:"S203 — Contexte & démarche", h: hUniv("Régression sur données réelles","S203 · Compétence : Modéliser · Semestre 2") + `
        <p>Dans le cadre de la SAÉ 203, nous avons étudié un jeu de données médicales afin d'identifier les caractéristiques discriminant les <strong>tumeurs bénignes des tumeurs malignes</strong>. À partir de mesures morphologiques extraites d'images médicales, nous avons préparé, exploré et visualisé les données, calculé des corrélations et des droites de séparation.</p>
        <p>Nous avons ensuite construit un <strong>indicateur global standardisé</strong> capable de séparer efficacement les deux groupes, illustrant la capacité des méthodes statistiques à guider le diagnostic médical.</p>
        <div class="modal-pills"><span>R</span><span>Régression</span><span>Statistiques</span><span>Visualisation</span></div>
      ` + fUniv() },
      { t:"S203 — Bilan réflexif", h: hUniv("Bilan réflexif","S203 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de base en statistiques descriptives, manipulation de jeux de données et utilisation de R.</p>
        <p><strong>Prise de conscience :</strong> L'importance de la qualité des données et comment les statistiques permettent de prendre des décisions éclairées, notamment dans un contexte médical.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Compétences solides en exploration de données, sélection de variables pertinentes, création d'outils visuels et statistiques utiles pour l'aide au diagnostic.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la validation statistique et affiner les compétences en modélisation prédictive. Progresser sur les analyses multivariées complexes.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 5 — S206 Transition énergétique · Analyser */
    { pages: [
      { t:"S206 — Contexte & démarche", h: hUniv("Analyse de données, reporting et data visualisation","S206 · Compétence : Analyser · Semestre 2") + `
        <p>Dans le cadre de la SAÉ 206, notre équipe a conduit une étude approfondie de la <strong>transition énergétique en Europe</strong>, sur la consommation d'énergies renouvelables entre 1985 et 2023, à partir des données publiques d'Our World in Data.</p>
        <p>Le travail s'est articulé autour de la comparaison des pays européens, l'évolution des filières (hydroélectricité, éolien, solaire, bioénergie) et l'étude des contraintes géographiques. Nous avons mobilisé <strong>Power Query</strong>, des outils statistiques (moyenne, médiane, quartiles, écart-type, corrélation) et des visualisations adaptées (courbes, diagrammes, cartes).</p>
        <div class="modal-pills"><span>Power Query</span><span>Excel</span><span>Data visualisation</span><span>Statistiques</span></div>
      ` + fUniv() },
      { t:"S206 — Bilan réflexif", h: hUniv("Bilan réflexif","S206 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Maîtrise des bases d'Excel et d'un outil de visualisation, notions en statistiques descriptives, curiosité pour l'analyse de données.</p>
        <p><strong>Prise de conscience :</strong> En apprenant à nettoyer, analyser et visualiser des jeux de données complexes ainsi qu'à en tirer des conclusions utiles et des recommandations concrètes.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Rigueur méthodologique, sens de l'interprétation des résultats, capacité à créer des visuels adaptés et à rédiger des synthèses opérationnelles.")}
          ${li("<strong>Points de vigilance :</strong> Améliorer la maîtrise des outils d'automatisation et la gestion de jeux de données de très grande taille.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 6 — ACP UFC · Analyser */
    { pages: [
      { t:"ACP UFC — Contexte & démarche", h: hUniv("Analyse en Composantes Principales — UFC","SAE ACP · Compétence : Analyser · Semestre 2") + `
        <p>Dans le cadre de cette SAE, nous avons appliqué une <strong>Analyse en Composantes Principales (ACP)</strong> sur un jeu de données de combats UFC. L'objectif était d'identifier les variables les plus discriminantes pour expliquer les performances des combattants et de réduire la dimensionnalité des données pour en faciliter l'interprétation.</p>
        <p>Nous avons travaillé sur des indicateurs tels que les statistiques de frappe, les takedowns, la résistance physique et les ratios de victoire. L'ACP nous a permis de visualiser des clusters de profils de combattants et d'identifier les axes de performance principaux.</p>
        <div class="modal-pills"><span>R</span><span>ACP</span><span>Statistiques multivariées</span><span>UFC</span></div>
      ` + fUniv() },
      { t:"ACP UFC — Bilan réflexif", h: hUniv("Bilan réflexif","ACP UFC · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de statistiques descriptives et manipulation de données sous R, sans expérience préalable de l'ACP.</p>
        <p><strong>Prise de conscience :</strong> L'ACP permet de révéler des structures cachées dans des données complexes et multidimensionnelles — une compétence clé en data science.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Maîtrise des étapes de l'ACP (standardisation, calcul des axes, interprétation des contributions), capacité à relier les résultats statistiques au contexte sportif.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir l'interprétation des composantes et la sélection du nombre d'axes optimal. Combiner l'ACP avec d'autres méthodes de clustering.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 7 — ARIMA · Modéliser */
    { pages: [
      { t:"ARIMA — Contexte & démarche", h: hUniv("Modélisation par séries temporelles — ARIMA","SAE Séries temporelles · Compétence : Modéliser · Semestre 2") + `
        <p>Dans le cadre de cette SAE, nous avons appliqué des modèles <strong>ARIMA</strong> pour prévoir l'évolution de séries temporelles sur des données économiques ou environnementales. L'objectif était de maîtriser les étapes de la modélisation : analyse de stationnarité, identification des paramètres p, d, q, ajustement et évaluation des prévisions.</p>
        <p>Nous avons utilisé des tests statistiques (ADF, KPSS) pour valider la stationnarité, comparé différentes configurations de modèles et évalué les prévisions via des métriques RMSE, MAE et MAPE.</p>
        <div class="modal-pills"><span>R</span><span>ARIMA</span><span>Séries temporelles</span><span>Prévision</span></div>
      ` + fUniv() },
      { t:"ARIMA — Bilan réflexif", h: hUniv("Bilan réflexif","ARIMA · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de statistiques et manipulation de R, sans expérience préalable de la modélisation de séries temporelles.</p>
        <p><strong>Prise de conscience :</strong> La modélisation temporelle exige une rigueur particulière : chaque étape (stationnarité, identification, validation) conditionne la qualité des prévisions.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Maîtrise du pipeline complet de modélisation ARIMA, bonne compréhension des métriques d'évaluation et de leur interprétation en contexte réel.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la gestion des saisonnalités complexes (SARIMA) et explorer des alternatives comme Prophet pour les données irrégulières.")}
        </ul>
      ` + fUniv() }
    ]}
  ],

 /* ── 04 PASSEPORT CULTUREL ── style MAROC */
  projets: [
    /* 0 — Semaine Internationale SPN */
    { pages: [
      { t:"Semaine Internationale — Contexte", h: hMaroc("Semaine Internationale","Sorbonne Paris Nord · feuille 1 / 2") + `
        <p>Dans le cadre de ma 2ème année de BUT Science des données à la <strong>Sorbonne Paris Nord</strong>, j'ai participé à une semaine internationale entièrement conduite en anglais, rassemblant des étudiants venus des quatre coins de l'Europe.</p>
        <p>L'objectif de cette semaine était de réaliser une <strong>SAÉ de data visualisation</strong> en équipe multiculturelle, confrontant différentes approches et méthodes au sein d'un groupe international. L'anglais était la seule langue autorisée, ce qui a rendu l'expérience encore plus immersive et formatrice.</p>
        <p>L'année précédente, c'est le <strong>professeur de nos homologues européens</strong> qui était venu à l'IUT nous dispenser un cours, renforçant ainsi les liens pédagogiques entre établissements partenaires.</p>
        <div class="modal-pills"><span>DataViz</span><span>Anglais</span><span>SAÉ</span><span>International</span></div>
      ` + fMaroc() },
      { t:"Semaine Internationale — Ce que j'en retiens", h: hMaroc("Ce que j'en retiens","Semaine Internationale · feuille 2 / 2") + `
        <ul>
          ${li("Travailler intégralement en anglais sur un projet data réel, du recueil des données à la présentation finale.")}
          ${li("Collaborer avec des étudiants européens aux approches différentes, ce qui enrichit la réflexion et ouvre de nouvelles perspectives.")}
          ${li("Comprendre que la data visualisation est un langage universel, capable de dépasser les barrières linguistiques et culturelles.")}
          ${li("[Ajoute ici d'autres apprentissages ou moments marquants de cette semaine]")}
        </ul>
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
    /* 2 — BUST IT WEEK Erasmus @ Leuven */
    { pages: [
      { t:"BUST IT WEEK — Contexte", h: hMaroc("BUST IT WEEK — KU Leuven, Belgique","Erasmus · Compétition internationale · feuille 1 / 3") + `
        <p>Dans le cadre d'un échange Erasmus, j'ai participé à la <strong>BUST IT WEEK</strong> organisée par la <strong>KU Leuven</strong> en Belgique, une compétition internationale regroupant des étudiants en data science d'universités européennes partenaires.</p>
        <p>Le défi : <strong>prédire le nombre de spectateurs</strong> attendus à un match sportif, à partir d'une base de données historique. L'enjeu était concret — aider le club à anticiper ses besoins en <strong>sécurité, en restauration et en logistique</strong> selon l'affluence estimée.</p>
        <p>Toute la semaine s'est déroulée entièrement en anglais, de l'analyse des données à la présentation finale devant l'ensemble des équipes et un jury international.</p>
      ` + fMaroc() },
      { t:"BUST IT WEEK — Démarche technique", h: hMaroc("Démarche & modélisation","BUST IT WEEK · feuille 2 / 3") + `
        <ul>
          ${li("Exploration de la base historique : nettoyage, analyse des variables, corrélations avec l'affluence.")}
          ${li("Identification des indicateurs les plus prédictifs : adversaire, météo, jour de la semaine, résultats récents, matchs importants…")}
          ${li("Modélisation Machine Learning — une première pour notre équipe sur un cas réel en compétition.")}
          ${li("Développement d'une application interactive avec <strong>Streamlit</strong> pour visualiser les prédictions et explorer les données.")}
          ${li("Présentation finale en anglais devant toutes les équipes et le jury international de la KU Leuven.")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>Machine Learning</span><span>Streamlit</span><span>Anglais</span><span>Erasmus</span></div>
      ` + fMaroc() },
      { t:"BUST IT WEEK — Ce que j'en retiens", h: hMaroc("Ce que j'en retiens","BUST IT WEEK · feuille 3 / 3") + `
        <p>Cette compétition a été une série de premières : première application du <strong>Machine Learning</strong> sur un cas professionnel réel, première utilisation de <strong>Streamlit</strong> pour déployer un outil interactif, et première présentation en anglais devant un jury international.</p>
        <p>Au-delà des compétences techniques, cette semaine m'a confirmé que la data science est capable de répondre à des problématiques concrètes dans des contextes multiculturels et compétitifs.</p>
        <div class="photo-feuille">
          <div class="photo-slot main filled">
            <img src="images/IMG_2398.jpeg" alt="BUST IT WEEK — Leuven"/>
          </div>
          <div class="photo-slot">
            <input type="file" accept="image/*" title="Ajouter une photo">
            <div class="photo-inner"><p style="font-size:1.6rem;margin:0">+</p><span>Photo 2</span></div>
          </div>
          <div class="photo-slot">
            <input type="file" accept="image/*" title="Ajouter une photo">
            <div class="photo-inner"><p style="font-size:1.6rem;margin:0">+</p><span>Photo 3</span></div>
          </div>
        </div>
      ` + fMaroc() }
    ]}
  ],

  /* ── 05 STAGE ── */
  stage: [
    { pages: [
      { t:"Stage — Contexte & structure", h: hUniv("Chargé de projets en analyse et automatisation des données","Stage · UFCV · feuille 1 / 5") + `
        <p><strong>Chargé de projets en analyse et automatisation des données</strong> chez <strong>UFCV</strong> (Union Française des Centres de Vacances) — Pantin (93) · 44 jours · 13 avril au 18 juin 2026.</p>
        <p>L'UFCV est une association nationale de jeunesse et d'éducation populaire à but non lucratif, reconnue d'utilité publique. En 2025 : 1 621 salariés, 6 500 bénévoles, 120 000 personnes accompagnées, 12 délégations régionales.</p>
        <p>J'ai intégré le pôle <strong>DAMAC</strong> (Direction des Activités, Marketing et Communication), en binôme avec un autre stagiaire. L'association ne disposait pas de pôle data dédié, ce qui m'a donné une réelle autonomie sur l'ensemble des missions.</p>
        <p><strong>Problématique guidant le stage :</strong> comment exploiter au mieux les données de l'association, en les rendant accessibles et compréhensibles pour tous, tout en automatisant un maximum de tâches ?</p>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>VBA</span><span>Python</span><span>Streamlit</span><span>Jedox</span></div>
      ` + fUniv() },

      { t:"Mission 1 — Tableaux de bord fréquentation", h: hUniv("Tableaux de bord de suivi de l'activité territoriale","Stage · feuille 2 / 5 · Encadrante : Mme Émeline ADANS") + `
        <p>Conception sous Excel de tableaux de bord de suivi de la fréquentation et de la facturation des activités territoriales, destinés à servir de maquette avant intégration dans <strong>Jedox</strong>.</p>
        <ul>
          ${li("<strong>Préparation des données :</strong> nettoyage et structuration avec Power Query (suppression des colonnes inutiles, conversion des champs, création de colonnes calculées, gestion des valeurs manquantes avec \"non renseigné\").")}
          ${li("<strong>12 KPI construits :</strong> jours de présence, absences justifiées/non justifiées, taux de présence par réservation et par inscription, âge moyen, quotient familial moyen.")}
          ${li("<strong>8 graphiques :</strong> répartitions par genre, catégorie d'âge, handicap, mode de règlement, lieu de résidence, top 5 des activités — avec 5 filtres interactifs.")}
          ${li("<strong>Macro VBA développée :</strong> détection automatique des individus avec un taux de présence/absence supérieur à 100 % (cas de surprésence identifiés lors du nettoyage).")}
          ${li("<strong>Feuille descriptive :</strong> documentation de chaque indicateur, méthode de calcul, choix méthodologiques et limites observées.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>VBA</span><span>TCD</span><span>KPI</span></div>
      ` + fUniv() },

      { t:"Mission 2 — Indicateurs de performance budgétaire", h: hUniv("Indicateurs de gestion et de performance budgétaire","Stage · feuille 3 / 5 · Encadrante : Mme Claire VERRAEST") + `
        <p>Analyse d'une base de données contenant le budget et le réalisé de l'association entre 2022 et 2026, pour produire des indicateurs de gestion destinés à être intégrés dans Jedox.</p>
        <ul>
          ${li("<strong>Consolidation :</strong> structuration des données via RECHERCHEX, fusion des bases budget/réalisé de structures différentes, allègement du fichier Excel.")}
          ${li("<strong>Analyse des tendances :</strong> évolution des charges, produits et marges sur 2022–2026, comparaison budget/réalisé pour identifier les écarts.")}
          ${li("<strong>Analyse par activité :</strong> ratio charges/produits, taux de maîtrise des charges — indicateurs relatifs permettant des comparaisons à la même échelle indépendamment de la taille.")}
          ${li("<strong>KPI de note globale :</strong> indicateur synthétique combinant plusieurs KPI selon une pondération paramétrable, particulièrement apprécié par Mme Verraest.")}
          ${li("<strong>Analyse complémentaire :</strong> part des trois charges principales dans le total des charges par région, pour évaluer la maîtrise des coûts.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>RECHERCHEX</span><span>KPI</span><span>Jedox</span></div>
      ` + fUniv() },

      { t:"Mission 3 — Documentation technique", h: hUniv("Documentation technique des fichiers existants","Stage · feuille 4 / 5 · Encadrant : M. Cyril GAFFET") + `
        <p>Documentation détaillée des fichiers Excel automatisés par un précédent stagiaire (Thierno), utilisés par les équipes du service VIF (Veille, Innovation et Financement), afin de permettre leur compréhension et maintenance autonome.</p>
        <ul>
          ${li("Prise de connaissance des fichiers (raccourci, centralisé, VAO, VEJ) en s'appuyant sur le rapport de stage de Thierno et les explications de M. Gaffet.")}
          ${li("Structuration de la documentation : page de garde, contexte, parties détaillées, glossaire et annexes.")}
          ${li("Description de chaque feuille, formule clé, tableau croisé dynamique et automatisation mise en place.")}
          ${li("Retour positif de M. Gaffet sur le travail rendu.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>VBA</span><span>Documentation</span></div>
      ` + fUniv() },

      { t:"Mission 4 — Interface Streamlit & bilan", h: hUniv("Analyse commerciale et interface interactive — Bilan","Stage · feuille 5 / 5") + `
        <p>Analyse des variables d'une base de données commerciale liée aux séjours, et développement d'une interface interactive avec <strong>Streamlit (Python)</strong> pour rendre les analyses accessibles aux équipes sans compétences en programmation.</p>
        <ul>
          ${li("<strong>Enrichissement de la base :</strong> création de nouvelles variables dérivées, intégration de méthodes statistiques avancées (corrélation de Pearson, R², V de Cramér).")}
          ${li("<strong>Interface Streamlit en 5 pages :</strong> explorer une variable, croiser deux variables, profil client, analyse des prix, qualité des données.")}
          ${li("<strong>Détection automatique du type de variables</strong> pour appliquer le test statistique approprié, avec explications en français compréhensibles par des non-statisticiens.")}
          ${li("<strong>Documentation complète :</strong> installation Python, utilisation VS Code, lancement de l'application, résolution des problèmes fréquents.")}
        </ul>
        <p style="margin-top:16px"><strong>Ce que je retiens :</strong> ce stage confirme mon intérêt pour les métiers de la donnée au service des organisations, et tout particulièrement pour la question de l'accessibilité des outils d'analyse à des publics non techniques.</p>
        <div class="modal-pills"><span>Python</span><span>Streamlit</span><span>Pandas</span><span>Scipy</span><span>Numpy</span></div>
      ` + fUniv() }
    ]}
  ],

  /* ── 06 BILAN ── */
  bilan: [
    { pages: [
      { t:"Ce dont je suis le plus fier", h: hMaroc("Ce dont je suis le plus fier","Bilan · feuille 1 / 2") + `
        <p>L'une de mes plus grandes fiertés est d'avoir été admis dans la formation BUT Sciences des Données. Dès Parcoursup, j'ai été retenu parmi plus de 6 000 candidats, ce qui a renforcé ma motivation et ma confiance en mes capacités. Par la suite, j'ai réussi les épreuves de sélection face à plus de 500 élèves pour valider mon admission définitive.</p>
      ` + fMaroc() },
      { t:"Fierté — Engagement sportif", h: hMaroc("Mon engagement en tant que coach","Bilan · feuille 2 / 2") + `
        <p>En dehors du cadre scolaire, je suis également très fier de mon engagement en tant que coach sportif. Accompagner mon équipe U-16 tout au long de la saison m'a permis de développer des qualités humaines essentielles comme l'écoute, la gestion de groupe, la pédagogie et la motivation collective.</p>
        <p>Ce qui me rend particulièrement fier, c'est d'avoir décroché la montée avec eux, mais aussi de voir mes joueurs progresser et exprimer clairement leur envie de me retrouver comme coach l'année suivante.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Objectifs — Court terme", h: hMaroc("Objectifs à court terme","Bilan · feuille 1 / 3 · utilise les flèches →") + `
        <p>Actuellement en 2ème année de BUT Sciences des Données, mon objectif à court terme est double : réussir ma formation avec sérieux et engagement, tout en préparant activement ma recherche d'alternance.</p>
        <p>C'est pourquoi je suis déjà pleinement investi dans ma recherche. Je construis progressivement un LinkedIn pour valoriser mes projets, je prépare mes candidatures avec attention, et je reste curieux et motivé pour apprendre en dehors des cours, notamment à travers la pratique régulière de SQL et Python.</p>
      ` + fMaroc() },
      { t:"Objectifs — Moyen terme", h: hMaroc("Objectifs à moyen terme","Bilan · feuille 2 / 3") + `
        <p>À la suite de mon BUT Sciences des Données, je souhaite poursuivre mes études en intégrant un master spécialisé en data science ou en lien direct avec l'analyse de données pour le sport. Parmi les formations qui m'intéressent figurent le Master STAPS spécialité Data Sport, ou des Masters en data science avec une ouverture vers des projets sportifs.</p>
        <div class="modal-pills"><span>Python</span><span>SQL</span><span>Power BI</span><span>R</span></div>
      ` + fMaroc() },
      { t:"Objectifs — Long terme", h: hMaroc("Objectifs à long terme","Bilan · feuille 3 / 3") + `
        <p>Dans une dizaine d'années, je me projette en tant que data analyst confirmé, spécialisé dans le domaine du sport. À terme, j'aimerais travailler pour un club sportif professionnel, une fédération ou une startup innovante : analyse des performances des joueurs, optimisation des stratégies d'équipe, prévention des blessures, analyse du comportement des fans.</p>
        <p>À plus long terme, j'aimerais évoluer vers un poste à responsabilité, en encadrant une équipe de data analysts ou en pilotant des projets de grande envergure liés à la donnée sportive.</p>
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
  infoEl.textContent = tot > 1 ? `feuille ${pIdx+1} / ${tot}` : "";
  dotsEl.innerHTML = "";
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
      if (id) navAs.forEach(a => { a.style.color = a.getAttribute("href") === `#${id}` ? "var(--gold-l)" : ""; });
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
