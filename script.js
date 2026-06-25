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
    <span>Année universitaire 2025 – 2026</span>
    <span>Département Science des données</span>
  </div>
</div>
<div class="modal-inner ruled-lines ruled-univ">
  <h2>${title}</h2>
  <span class="modal-sub">${sub}</span>`;
}
function fUniv() {
  return `<div class="modal-footer-line"><span>BUT Science des données · Sorbonne Paris Nord</span><span>2025–2026</span></div></div>`;
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
        <p>Étudiant en 2ème année de BUT Sciences des Données, une formation pluridisciplinaire qui me permet d'acquérir des compétences solides en statistiques, programmation, SQL, traitement et visualisation de données, ainsi qu'en gestion de projet et en communication scientifique.</p>
        <p>Je suis passionné depuis longtemps par les chiffres et la logique, surtout lorsqu'ils s'appliquent à des situations concrètes. Ce qui me caractérise aujourd'hui, c'est ma volonté de mobiliser ces compétences de manière rigoureuse et réfléchie pour comprendre, modéliser et résoudre des problématiques réelles.</p>
        <p>Je suis licencié à l'ESP 18. Cette année, j'assure le rôle d'éducateur de l'équipe U-16, avec qui nous avons décroché la montée en fin de saison, une fierté qui n'est pas rien.</p>
        <div class="photo-feuille">
          <div class="photo-slot main filled"><img src="images/IMG_6773.jpeg" alt="Mohammed"/></div>
          <div class="photo-slot filled"><img src="images/IMG_2757.jpeg" alt="Mohammed"/></div>
          <div class="photo-slot filled"><img src="images/IMG_0948.jpeg" alt="Mohammed"/></div>
        </div>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Ce que j'apprécie", h: hMaroc("Ce que j'apprécie dans ma formation","Formation BUT SD") + `
        <p>J'apprécie particulièrement l'équilibre entre théorie et pratique dans cette formation. Les enseignements sont approfondis sur le plan conceptuel, mais ils prennent tout leur sens à travers les Situations d'Apprentissage et d'Évaluation (SAE), qui nous placent en conditions quasi professionnelles.</p>
        <p>Ces projets concrets me permettent d'appliquer mes connaissances sur des cas réels et d'apprendre à travailler en équipe autour d'un objectif commun. J'y retrouve l'exigence, le sens du collectif et l'analyse de performance, autant de valeurs que je vis également en dehors de l'IUT, sur le terrain de football.</p>
        <p>Ce que j'apprécie aussi, c'est la diversité des compétences travaillées : statistiques, programmation, bases de données, visualisation, communication. La formation ne cloisonne pas les disciplines, elle les fait dialoguer, ce qui correspond exactement à la façon dont je conçois le travail d'un futur data analyst.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Adaptabilité", h: hMaroc("Adaptabilité et sens de l'organisation","Qualité 1 / 3 · utilise les flèches →") + `
        <p>En tant qu'éducateur sportif à l'ESP 18, j'ai appris à m'adapter rapidement aux imprévus : absences de dernière minute, conditions météo, changements de terrain ou de programme. Maintenir une organisation claire des séances tout en restant flexible sur le contenu est devenu un réflexe naturel.</p>
        <p>Cette capacité d'adaptation me sert aussi dans mes projets en BUT SD, où il faut souvent jongler entre plusieurs livrables, ajuster la méthode en cours de route selon les contraintes rencontrées, et rester efficace malgré l'incertitude. Que ce soit face à un groupe de joueurs ou à un jeu de données inattendu, j'ai appris à garder le cap sans me rigidifier.</p>
      ` + fMaroc() },
      { t:"Communication et équipe", h: hMaroc("Communication et travail en équipe","Qualité 2 / 3") + `
        <p>Le rôle d'éducateur m'a amené à gérer un groupe, à formuler des consignes claires, accessibles, et à trouver les bons mots pour motiver chaque joueur selon sa personnalité. J'échange également régulièrement avec d'autres éducateurs pour coordonner les séances, ajuster les objectifs collectifs et partager des retours constructifs.</p>
        <p>Cette expérience m'a permis de développer une communication adaptée à différents interlocuteurs : savoir parler à un groupe tout en écoutant les besoins individuels. Dans les SAE, cette qualité est essentielle : la réussite d'un projet collectif dépend souvent autant de la qualité de la communication que des compétences techniques de chacun.</p>
      ` + fMaroc() },
      { t:"Autonomie", h: hMaroc("Autonomie et prise d'initiative","Qualité 3 / 3") + `
        <p>Je suis capable de travailler seul de manière structurée et efficace. Par exemple, lors d'une SAE en science des données, j'ai pris l'initiative de traiter les données avec Power Query dans Excel, un outil que je maîtrise bien, sans attendre de consignes supplémentaires.</p>
        <p>Une fois les données nettoyées et structurées, j'ai utilisé Tableau pour créer des visualisations claires et interactives. Cette démarche personnelle a enrichi la restitution finale du groupe et m'a permis d'apporter une valeur ajoutée réelle, au-delà de ma simple contribution attendue.</p>
        <p>Cette autonomie se retrouve aussi dans ma vie d'éducateur : gérer une équipe, concevoir les séances, faire les bilans de match, tout cela se fait en grande partie de manière indépendante, avec un sens des responsabilités fort.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Objectifs académiques", h: hMaroc("Objectifs académiques","Court et moyen terme") + `
        <p>Je m'efforce de renforcer mes compétences techniques, en particulier en Python, en statistiques appliquées et en visualisation de données. Ces trois axes me semblent fondamentaux pour construire un profil solide en science des données.</p>
        <p>Je consacre du temps aux projets réalisés dans le cadre des SAE, qui me permettent de travailler sur des problématiques concrètes, en groupe, et de mobiliser les outils vus en cours dans des contextes proches du monde professionnel. En parallèle, je mène également des projets personnels qui me permettent d'explorer différentes sources de données et de m'exercer à leur traitement de manière autonome.</p>
        <p>Ces expériences variées m'aident à construire un profil polyvalent, capable de s'adapter à différents domaines d'application, tout en gardant un regard analytique et rigoureux. À moyen terme, je souhaite décrocher une alternance qui me permettra de mettre ces compétences au service d'une organisation réelle.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Objectifs professionnels", h: hMaroc("Objectifs professionnels","Vision carrière") + `
        <p>Je souhaite devenir data analyst dans le monde du sport, un domaine qui me passionne profondément. J'ai grandi avec le football, que je pratique en club depuis mon plus jeune âge. Aujourd'hui encore, je suis licencié à l'ESP 18, où j'assure le rôle d'éducateur sportif. L'année dernière, j'encadrais les U-12. Cette saison, j'ai pris en charge les U-16, avec qui nous avons décroché la montée en fin d'année.</p>
        <p>Le lien entre football et data me semble évident : comprendre un match, évaluer un joueur, identifier des tendances tactiques, tout cela peut être renforcé par une approche rigoureuse basée sur les données. C'est précisément à cette intersection que je veux exercer.</p>
        <p>À terme, je me vois travailler pour un club professionnel, une fédération ou une structure spécialisée dans l'analyse de la performance sportive, en contribuant à des décisions éclairées grâce à la data.</p>
      ` + fMaroc() }
    ]}
  ],

  /* ── 02 COMPÉTENCES ── */
  competences: [
    { pages: [{ t:"Python", h: hUniv("Python","Compétence technique") + `
        <p>J'utilise Python depuis le lycée, où j'ai suivi la spécialité NSI. Cette spécialité m'a permis d'acquérir de bonnes bases algorithmiques et de me familiariser avec la logique de programmation avant même d'entrer en BUT.</p>
        <p>Dans le cadre du BUT SD, j'ai approfondi mes compétences en l'utilisant pour le traitement et l'analyse de données : lecture et exploitation de fichiers de données structurés ou non, automatisation d'analyses répétitives, manipulation de DataFrames avec pandas. Python est aujourd'hui l'outil que j'utilise le plus naturellement pour aborder un problème de données.</p>
        <p>Je l'ai également utilisé lors de la BUST IT WEEK à la KU Leuven pour construire un modèle de Machine Learning et déployer une application Streamlit, ce qui m'a permis de mesurer la puissance de cet écosystème dans un contexte compétitif réel.</p>
        <div class="modal-pills"><span>NSI</span><span>Pandas</span><span>Traitement de données</span><span>Automatisation</span><span>Machine Learning</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"SQL", h: hUniv("SQL","Compétence technique") + `
        <p>Je maîtrise les requêtes de base ainsi que certaines requêtes plus avancées pour interroger des bases de données relationnelles : sélections filtrées, jointures multiples, agrégations, sous-requêtes et création de vues.</p>
        <p>Lors de différentes SAE, j'ai travaillé sur l'ensemble du cycle : conception d'un modèle entité-association, création des tables dans une base relationnelle, peuplement automatisé de la base avec des données réelles, puis exploitation via des requêtes pour produire des analyses et des visualisations.</p>
        <p>Cette approche bout en bout m'a permis de comprendre non seulement comment interroger une base, mais aussi comment la concevoir correctement dès le départ pour faciliter les analyses futures.</p>
        <div class="modal-pills"><span>Modèle entité-association</span><span>Jointures</span><span>Agrégations</span><span>Bases relationnelles</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Excel", h: hUniv("Excel","Compétence technique") + `
        <p>Je sais utiliser Excel pour organiser, nettoyer et analyser des données de manière efficace. Je maîtrise les fonctions avancées (RECHERCHEX, SI imbriqués, fonctions de texte, fonctions de date), les filtres dynamiques, les mises en forme conditionnelles et les tableaux croisés dynamiques.</p>
        <p>Dans plusieurs SAE, j'ai également utilisé Power Query pour importer, transformer et structurer des données brutes issues de sources hétérogènes, ainsi que Power Pivot pour modéliser les relations entre plusieurs tables et créer des mesures DAX.</p>
        <p>Lors de mon stage à l'UFCV, Excel a été mon outil central pendant plusieurs semaines, avec la création de tableaux de bord automatisés, de KPI et de macros VBA, ce qui m'a permis d'en approfondir la maîtrise dans un contexte professionnel réel.</p>
        <div class="modal-pills"><span>Power Query</span><span>Power Pivot</span><span>TCD</span><span>VBA</span><span>RECHERCHEX</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Tableau Desktop", h: hUniv("Tableau Desktop","Compétence technique") + `
        <p>J'ai appris à créer des tableaux de bord interactifs et des histoires de données avec Tableau Desktop. Cet outil m'a permis de rendre des résultats d'analyse plus accessibles et compréhensibles pour un public non technique, en privilégiant la clarté visuelle et la fluidité de navigation.</p>
        <p>Je l'ai utilisé notamment dans le cadre du concours national de datavisualisation INSEE, où l'enjeu était de raconter une histoire avec les données de manière percutante en un temps limité. Cet exercice m'a appris à faire des choix visuels forts et à structurer une narration autour des données.</p>
        <div class="modal-pills"><span>Dashboards</span><span>Storytelling</span><span>Concours INSEE</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"R", h: hUniv("R","Compétence technique") + `
        <p>J'ai utilisé R dans le cadre de plusieurs cours et SAE orientés statistiques. Ce langage m'a permis d'explorer des méthodes d'analyse que Python ne couvre pas aussi naturellement, notamment pour les tests statistiques, la régression, les séries temporelles et l'ACP.</p>
        <p>Travailler avec R m'a aussi appris à lire et interpréter des sorties statistiques détaillées, à comprendre les hypothèses sous-jacentes aux modèles et à produire des visualisations avec ggplot2. Cette complémentarité avec Python enrichit ma vision des outils disponibles selon les besoins d'une analyse.</p>
        <div class="modal-pills"><span>Statistiques</span><span>ggplot2</span><span>Régression</span><span>ACP</span><span>ARIMA</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Sphinx", h: hUniv("Sphinx","Compétence technique") + `
        <p>J'ai utilisé Sphinx pour concevoir et déployer un questionnaire dans le cadre d'une SAE. Cet outil m'a permis de structurer une enquête rigoureuse, de définir les types de questions adaptés à chaque variable (nominale, ordinale, numérique), et de paramétrer les sauts logiques entre les items.</p>
        <p>J'ai ensuite collecté les données directement sur le terrain, en allant à la rencontre des répondants, ce qui m'a donné une vision concrète des enjeux de représentativité et de biais de collecte. L'export et l'analyse des résultats ont ensuite été réalisés sous Excel.</p>
        <div class="modal-pills"><span>Conception de questionnaires</span><span>Collecte terrain</span><span>Analyse des résultats</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Analyse de données", h: hUniv("Analyse de données","Compétence transversale") + `
        <p>Je suis capable d'explorer un jeu de données de manière structurée : identifier les variables, évaluer leur qualité, détecter les valeurs aberrantes ou manquantes, et produire une analyse descriptive complète avant toute modélisation.</p>
        <p>J'ai appliqué ces compétences à des données très variées : données médicales (tumeurs), données sportives (UFC, matchs de football), données énergétiques européennes, données étudiantes, données commerciales lors de mon stage. Cette diversité m'a appris à adapter ma démarche selon le contexte et les enjeux de chaque analyse.</p>
        <p>Ce qui me tient particulièrement à cœur, c'est de ne pas se limiter à décrire les données, mais d'en extraire des interprétations utiles et de les relier à la problématique initiale.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Visualisation de données", h: hUniv("Visualisation de données","Compétence transversale") + `
        <p>J'accorde une grande importance à la lisibilité et à la pertinence des représentations graphiques. Chaque visualisation doit servir un propos précis : comparer, montrer une évolution, révéler une distribution ou illustrer une relation entre variables.</p>
        <p>Je sais adapter le type de graphique à la nature de l'analyse : histogrammes, boxplots, scatter plots, cartes, courbes, diagrammes en barres empilées, et j'utilise les outils appropriés selon les besoins : R avec ggplot2, Excel, Tableau Desktop ou encore Python avec matplotlib et seaborn.</p>
        <p>Lors du concours INSEE et de la BUST IT WEEK, j'ai mesuré l'importance de rendre une visualisation immédiatement compréhensible pour un jury, ce qui m'a conduit à soigner davantage le design et la hiérarchie visuelle de mes productions.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Gestion de projet", h: hUniv("Gestion de projet","Compétence transversale") + `
        <p>Les SAE m'ont permis de développer des compétences solides en gestion de projet. J'ai appris à répartir les rôles efficacement à l'aide d'outils comme la matrice RACI, à coordonner les contributions de chaque membre de l'équipe, à planifier les tâches sur un rétro-planning et à respecter les délais imposés.</p>
        <p>J'ai aussi appris à gérer les imprévus : une SAE ne se déroule jamais exactement comme prévu. Savoir recadrer les priorités, redistribuer le travail et maintenir la cohésion de l'équipe face aux difficultés fait partie intégrante de la compétence.</p>
        <p>Mon expérience d'éducateur sportif renforce également cette dimension : gérer un groupe de joueurs, organiser des séances hebdomadaires, préparer des matchs et analyser les performances demande une vraie rigueur de planification.</p>
        <div class="modal-pills"><span>Matrice RACI</span><span>Rétro-planning</span><span>Coordination</span><span>Gestion des imprévus</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Communication et vulgarisation", h: hUniv("Communication et vulgarisation","Compétence transversale") + `
        <p>Je m'efforce toujours de rendre mes analyses accessibles, que ce soit dans les rapports écrits ou lors des présentations orales. Adapter le niveau de technicité au public est pour moi une compétence à part entière : un directeur général n'a pas besoin de comprendre le détail d'une ACP pour en exploiter les conclusions.</p>
        <p>Cette capacité à vulgariser s'est renforcée lors de mon stage à l'UFCV, où j'ai développé une application Streamlit avec des explications en français compréhensibles par des non-statisticiens, et lors des soutenances orales devant jury, où il fallait convaincre autant que démontrer.</p>
        <p>Mon rôle d'éducateur sportif contribue également à cette compétence : expliquer un exercice à des jeunes de 12 ou 16 ans, adapter son discours selon l'âge et la maturité du groupe, c'est aussi une forme de vulgarisation.</p>
      ` + fUniv() }]},
    { pages: [{ t:"Streamlit", h: hUniv("Streamlit","Autre outil") + `
        <p>J'ai utilisé Streamlit pour créer des applications web interactives directement en Python, sans nécessiter de compétences en développement front-end. Cet outil m'a permis de déployer rapidement des dashboards et des outils d'exploration de données accessibles à des utilisateurs non techniques.</p>
        <p>Lors de mon stage à l'UFCV, j'ai développé une application Streamlit en 5 pages pour explorer une base de données commerciale : exploration univariée, croisements bivariés, profil client, analyse des prix et qualité des données. L'application détectait automatiquement le type des variables pour appliquer le test statistique approprié.</p>
        <p>J'ai également utilisé Streamlit lors de la BUST IT WEEK à Leuven, pour présenter les prédictions de notre modèle de Machine Learning à un jury international.</p>
        <div class="modal-pills"><span>Python</span><span>Applications web</span><span>Déploiement</span><span>Dashboard interactif</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"Shiny", h: hUniv("Shiny","Autre outil") + `
        <p>J'ai utilisé R Shiny pour développer des applications interactives permettant d'explorer des données dynamiquement. Shiny m'a permis de combiner la puissance statistique de R avec une interface utilisateur réactive, particulièrement adaptée pour présenter des résultats d'analyse à un public varié.</p>
        <p>Travailler avec Shiny m'a appris les principes de la programmation réactive et la logique serveur/UI propre à ce framework, ce qui facilite aujourd'hui la compréhension d'autres architectures d'applications web interactives.</p>
        <div class="modal-pills"><span>R</span><span>Programmation réactive</span><span>Applications interactives</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"LaTeX", h: hUniv("LaTeX","Autre outil") + `
        <p>J'ai appris à rédiger des documents scientifiques structurés avec LaTeX, notamment dans le cadre de rapports de SAE. LaTeX m'a permis de produire des rendus professionnels avec une mise en forme rigoureuse : équations numérotées, tableaux, figures, bibliographies automatiques et table des matières générée.</p>
        <p>Travailler avec LaTeX développe aussi une certaine rigueur dans la structuration de la pensée : séparer le fond de la forme oblige à bien organiser son contenu avant de se préoccuper de la mise en page.</p>
        <div class="modal-pills"><span>Rédaction scientifique</span><span>Rapports</span><span>Équations</span><span>Bibliographie</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"GitHub", h: hUniv("GitHub","Autre outil") + `
        <p>J'utilise GitHub pour versionner mes projets et collaborer efficacement en équipe. Git me permet de suivre l'évolution de mon code de manière traçable, de gérer des branches pour travailler sur des fonctionnalités en parallèle, de résoudre les conflits lors des fusions et de revenir sur des versions antérieures si nécessaire.</p>
        <p>Au-delà de l'aspect technique, GitHub me permet de documenter mes projets via les fichiers README et de les rendre accessibles dans un contexte académique ou professionnel, comme un prolongement naturel de mon portfolio.</p>
        <div class="modal-pills"><span>Versioning</span><span>Branches</span><span>Collaboration</span><span>README</span></div>
      ` + fUniv() }]},
    { pages: [{ t:"ACP", h: hUniv("ACP — Analyse en Composantes Principales","Méthode statistique avancée") + `
        <p>J'ai appliqué l'Analyse en Composantes Principales pour réduire la dimensionnalité de jeux de données complexes et en extraire les axes de variabilité principaux. Cette méthode permet de transformer un grand nombre de variables corrélées en un nombre réduit de composantes indépendantes, facilitant la visualisation et l'interprétation des données.</p>
        <p>Je l'ai notamment utilisée sur des données de combats UFC pour identifier les profils de combattants et les variables les plus discriminantes en termes de performance : frappe, takedowns, résistance, ratios de victoire. L'ACP m'a permis de visualiser des clusters de profils et d'interpréter les axes principaux en termes sportifs concrets.</p>
        <div class="modal-pills"><span>Réduction de dimension</span><span>Statistiques multivariées</span><span>Clustering</span><span>R</span></div>
      ` + fUniv() }]}
  ],

  /* ── 03 SAÉ ── */
  sae: [

    /* 0 — S107 Enquête · Analyser et Valoriser */
    { pages: [
      { t:"S107 — Contexte et démarche", h: hUniv("Mise en œuvre d'une enquête","S107 · Compétences : Analyser, Valoriser · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons réalisé une enquête complète, de la conception du questionnaire jusqu'à la présentation des résultats. L'objectif était d'appliquer une démarche statistique rigoureuse à une problématique concrète, en suivant toutes les étapes d'une enquête professionnelle.</p>
        <p>Nous avons utilisé <strong>Sphinx</strong> pour créer et diffuser le questionnaire, puis collecté les données directement sur le terrain. L'analyse des résultats a été effectuée sous <strong>Excel</strong> via des graphiques, des tableaux croisés et des statistiques descriptives. Le travail s'est conclu par une <strong>soutenance orale</strong> devant jury, au cours de laquelle nous avons présenté nos résultats et nos recommandations.</p>
        <p>Cette SAE couvre les compétences <strong>Analyser</strong> (traitement et interprétation des données collectées) et <strong>Valoriser</strong> (restitution orale et mise en forme des résultats pour un public cible).</p>
        <div class="modal-pills"><span>Sphinx</span><span>Excel</span><span>Statistiques descriptives</span><span>Oral</span><span>Analyser</span><span>Valoriser</span></div>
      ` + fUniv() },
      { t:"S107 — Bilan réflexif", h: hUniv("Bilan réflexif","S107 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases en statistiques descriptives, maîtrise d'Excel, première initiation à la conception de questionnaires.</p>
        <p><strong>Prise de conscience :</strong> Cette SAE m'a appris que concevoir une bonne enquête est bien plus exigeant qu'il n'y paraît. Chaque question doit être pensée en amont pour éviter les biais de formulation, les ambiguïtés ou les échelles mal calibrées.</p>
        <p><strong>Éléments déclencheurs :</strong> C'est en allant moi-même sur le terrain collecter les réponses que j'ai réalisé l'importance de l'ordre des questions et de la clarté des consignes. Certains répondants m'ont posé des questions auxquelles le questionnaire n'apportait pas de réponse évidente.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Acquisition de bonnes pratiques en méthodologie d'enquête, maîtrise de Sphinx, compétences en communication orale et capacité à synthétiser des résultats pour un public non spécialiste.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir l'analyse statistique (tests d'hypothèses, intervalles de confiance), améliorer la qualité des visualisations et gagner en fluidité lors des présentations orales.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 1 — S104 Production de données · Valoriser */
    { pages: [
      { t:"S104 — Contexte et démarche", h: hUniv("Apprendre en situation — production de données en entreprise","S104 · Compétence : Valoriser · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons analysé le fonctionnement d'une organisation à partir de ressources documentaires. L'objectif était de comprendre son contexte économique, étudier son modèle de création de valeur ainsi que son impact social, sociétal et environnemental.</p>
        <p>Ce travail nous a permis de mobiliser des compétences en recherche documentaire, analyse critique de sources et synthèse structurée. Le tout a été restitué sous deux formes complémentaires : un <strong>rapport écrit</strong> détaillé et une <strong>capsule vidéo</strong>, ce qui nous a amenés à adapter notre discours selon le format et le public visé.</p>
        <p>Cette SAE couvre la compétence <strong>Valoriser</strong> : savoir présenter et communiquer des résultats d'analyse sous des formes variées, adaptées aux attentes des destinataires.</p>
        <div class="modal-pills"><span>Analyse documentaire</span><span>Rapport</span><span>Capsule vidéo</span><span>Valoriser</span></div>
      ` + fUniv() },
      { t:"S104 — Bilan réflexif", h: hUniv("Bilan réflexif","S104 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Maîtrise des bases de la recherche d'information, sans expérience préalable d'analyse organisationnelle structurée.</p>
        <p><strong>Prise de conscience :</strong> Savoir chercher ne suffit pas. Il faut croiser les sources, les analyser de manière critique, distinguer les faits des interprétations, et synthétiser efficacement pour produire une restitution cohérente et honnête.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Meilleure organisation des idées, travail en équipe sur un projet complexe, capacité à produire deux livrables de formats très différents (rapport écrit et capsule vidéo) dans le même délai.")}
          ${li("<strong>Points de vigilance :</strong> Progresser dans l'interprétation fine des documents économiques et financiers pour en saisir les enjeux réels, au-delà des chiffres bruts.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 2 — S103 Tableau de bord · Analyser */
    { pages: [
      { t:"S103 — Contexte et démarche", h: hUniv("Préparation et synthèse d'un tableau de données","S103 · Compétence : Analyser · Semestre 1") + `
        <p>Dans le cadre de cette SAE, nous avons exploité un fichier de données regroupant les informations sur les étudiants de l'IUT, afin d'en extraire des analyses utiles pour le service communication. L'objectif était de construire un <strong>tableau de bord interactif</strong> permettant d'identifier des profils types d'étudiants selon leur lycée d'origine, leur spécialité de baccalauréat, leur département de résidence ou leur statut de boursier.</p>
        <p>Nous avons utilisé <strong>Power Query</strong> dans Excel pour importer, transformer et structurer les données brutes, puis créé des tableaux croisés dynamiques avec des segments et des filtres interactifs pour faciliter la navigation dans les résultats.</p>
        <p>Cette SAE couvre la compétence <strong>Analyser</strong> : explorer un jeu de données, en comprendre la structure, identifier les variables pertinentes et produire une analyse exploratoire documentée.</p>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>Tableau de bord</span><span>TCD</span><span>Analyser</span></div>
      ` + fUniv() },
      { t:"S103 — Bilan réflexif", h: hUniv("Bilan réflexif","S103 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases d'Excel, sans expérience préalable avec Power Query ni de tableau de bord construit à partir de données brutes.</p>
        <p><strong>Prise de conscience :</strong> L'importance de la qualité et de la structuration des données en amont. Un tableau de bord ne peut être lisible et fiable que si les données sur lesquelles il repose ont été correctement nettoyées et organisées.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Solides bases en préparation de données, automatisation du nettoyage avec Power Query, création de tableaux de bord interactifs et lisibles pour un public non technique.")}
          ${li("<strong>Points de vigilance :</strong> Progresser dans l'interprétation des données pour savoir quels croisements sont réellement pertinents selon les besoins métier, et ne pas se limiter à ce qui est techniquement faisable.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 3 — S204 Dataviz concours · Valoriser */
    { pages: [
      { t:"S204 — Contexte et démarche", h: hUniv("DATAVIZ — Concours National INSEE","S204 · Compétence : Valoriser · Semestre 2") + `
        <p>Le 22 mai 2025, dans le cadre de la SAÉ 204, j'ai participé au <strong>Concours National de Datavisualisation</strong> organisé à l'IUT de Villetaneuse en partenariat avec l'INSEE. Le thème portait sur l'analyse de la scolarisation des jeunes de 15 à 29 ans en France, à partir de données des recensements 2010 et 2021.</p>
        <p>En équipe, nous avons exploré les jeux de données mis à disposition (effectifs départementaux, flux entre départements) pour concevoir une <strong>infographie claire et percutante</strong>. Le format, les outils et la présentation graphique étaient entièrement libres, ce qui nous a demandé de faire des choix éditoriaux forts.</p>
        <p>Cette SAE couvre la compétence <strong>Valoriser</strong> : savoir construire une narration visuelle cohérente à partir de données brutes, et la présenter efficacement dans un contexte de compétition face à d'autres équipes.</p>
        <div class="modal-pills"><span>Tableau Desktop</span><span>Excel</span><span>Data storytelling</span><span>INSEE</span><span>Valoriser</span></div>
      ` + fUniv() },
      { t:"S204 — Bilan réflexif", h: hUniv("Bilan réflexif","S204 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Bases en Excel et Tableau Desktop, notions de datavisualisation et première expérience de travail en groupe sur des données publiques.</p>
        <p><strong>Prise de conscience :</strong> Un bon graphique ne suffit pas : il faut une histoire derrière. La sélection des indicateurs, l'ordre de présentation et le titre de chaque visuel sont aussi importants que la qualité technique de la visualisation elle-même.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Meilleure maîtrise de Tableau Desktop, capacité à simplifier des données complexes pour les rendre accessibles, et compréhension des enjeux du data storytelling dans un contexte compétitif.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la hiérarchie visuelle, améliorer la cohérence graphique d'un ensemble de visualisations, et gagner en autonomie sur des outils comme Power BI.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 4 — S203 Régression médicale · Analyser */
    { pages: [
      { t:"S203 — Contexte et démarche", h: hUniv("Régression sur données réelles","S203 · Compétence : Analyser · Semestre 2") + `
        <p>Dans le cadre de la SAÉ 203, nous avons étudié un jeu de données médicales afin d'identifier les caractéristiques permettant de distinguer les <strong>tumeurs bénignes des tumeurs malignes</strong>. À partir de mesures morphologiques extraites d'images médicales, nous avons préparé, exploré et visualisé les données, puis calculé des corrélations et construit des droites de séparation.</p>
        <p>Nous avons ensuite élaboré un <strong>indicateur global standardisé</strong> capable de séparer efficacement les deux groupes, illustrant ainsi la capacité des méthodes statistiques à contribuer à l'aide au diagnostic médical.</p>
        <p>Cette SAE couvre la compétence <strong>Analyser</strong> : mobiliser des méthodes statistiques adaptées pour répondre à une problématique réelle, interpréter les résultats et en évaluer la pertinence dans un contexte sensible.</p>
        <div class="modal-pills"><span>R</span><span>Régression</span><span>Statistiques</span><span>Visualisation</span><span>Analyser</span></div>
      ` + fUniv() },
      { t:"S203 — Bilan réflexif", h: hUniv("Bilan réflexif","S203 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de base en statistiques descriptives, manipulation de jeux de données et utilisation de R pour des analyses simples.</p>
        <p><strong>Prise de conscience :</strong> La qualité des données conditionne directement la qualité du modèle. Avant même de construire quoi que ce soit, il est indispensable de bien comprendre les variables disponibles, leurs distributions et leurs limites.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Compétences solides en exploration de données, sélection de variables pertinentes, création d'un indicateur synthétique et production de visualisations utiles pour l'aide au diagnostic.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la validation statistique des modèles et progresser sur les méthodes multivariées plus complexes pour aller au-delà de la régression simple.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 5 — S206 Transition énergétique · Traiter, Analyser, Valoriser */
    { pages: [
      { t:"S206 — Contexte et démarche", h: hUniv("Analyse de données, reporting et datavisualisation","S206 · Compétences : Traiter, Analyser, Valoriser · Semestre 2") + `
        <p>Dans le cadre de la SAÉ 206, notre équipe a conduit une étude approfondie de la <strong>transition énergétique en Europe</strong>, portant sur la consommation d'énergies renouvelables entre 1985 et 2023, à partir des données publiques d'Our World in Data.</p>
        <p>Le travail s'est articulé autour de plusieurs axes : comparaison des pays européens, évolution des différentes filières (hydroélectricité, éolien, solaire, bioénergie), étude des contraintes géographiques et formulation de recommandations à la Commission européenne. Nous avons mobilisé <strong>Power Query</strong> pour le nettoyage, des outils statistiques (moyenne, médiane, quartiles, écart-type, corrélation) et des visualisations adaptées à chaque type d'analyse.</p>
        <p>Cette SAE couvre les compétences <strong>Traiter</strong> (nettoyage et structuration des données), <strong>Analyser</strong> (statistiques descriptives et interprétation) et <strong>Valoriser</strong> (datavisualisation et recommandations à destination d'un décideur).</p>
        <div class="modal-pills"><span>Power Query</span><span>Excel</span><span>Data visualisation</span><span>Statistiques</span><span>Traiter</span><span>Analyser</span><span>Valoriser</span></div>
      ` + fUniv() },
      { t:"S206 — Bilan réflexif", h: hUniv("Bilan réflexif","S206 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Maîtrise des bases d'Excel et d'un outil de visualisation, notions en statistiques descriptives, intérêt pour l'analyse de données sur des sujets d'actualité.</p>
        <p><strong>Prise de conscience :</strong> Travailler sur un jeu de données réel, avec des valeurs manquantes, des unités hétérogènes et des structures différentes selon les pays, m'a appris que le travail de préparation représente souvent plus de la moitié de l'effort total d'une analyse.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Rigueur méthodologique renforcée, sens de l'interprétation des résultats dans un contexte géopolitique réel, capacité à formuler des recommandations opérationnelles à partir de données.")}
          ${li("<strong>Points de vigilance :</strong> Améliorer la maîtrise des outils d'automatisation sur des jeux de données de grande taille et progresser dans la gestion des données temporelles longues séries.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 6 — ACP UFC · Analyser */
    { pages: [
      { t:"ACP UFC — Contexte et démarche", h: hUniv("Analyse en Composantes Principales — UFC","SAE ACP · Compétence : Analyser · Semestre 2") + `
        <p>Dans le cadre de cette SAE, nous avons appliqué une <strong>Analyse en Composantes Principales (ACP)</strong> sur un jeu de données de combats UFC. L'objectif était d'identifier les variables les plus discriminantes pour expliquer les performances des combattants, et de réduire la dimensionnalité des données pour en faciliter l'interprétation.</p>
        <p>Nous avons travaillé sur des indicateurs tels que les statistiques de frappe, les takedowns, la résistance physique et les ratios de victoire par type de fin de combat. L'ACP nous a permis de visualiser des clusters de profils de combattants et d'identifier les axes de performance principaux, que nous avons interprétés en termes sportifs concrets.</p>
        <p>Cette SAE couvre la compétence <strong>Analyser</strong> : appliquer une méthode statistique avancée à des données complexes, interpréter les résultats et les relier à la problématique initiale.</p>
        <div class="modal-pills"><span>R</span><span>ACP</span><span>Statistiques multivariées</span><span>UFC</span><span>Analyser</span></div>
      ` + fUniv() },
      { t:"ACP UFC — Bilan réflexif", h: hUniv("Bilan réflexif","ACP UFC · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de statistiques descriptives et manipulation de données sous R, sans expérience préalable de l'ACP ni des méthodes multivariées.</p>
        <p><strong>Prise de conscience :</strong> L'ACP permet de révéler des structures cachées dans des données complexes et multidimensionnelles. Mais interpréter les axes principaux demande un vrai effort de contextualisation : les chiffres seuls ne suffisent pas, il faut les relier au domaine d'application.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Maîtrise du pipeline complet de l'ACP (standardisation, calcul des axes, cercle des corrélations, interprétation des contributions), et capacité à relier les résultats statistiques au contexte sportif de manière pertinente.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la sélection du nombre d'axes optimal, combiner l'ACP avec des méthodes de clustering (CAH, k-means) pour aller plus loin dans l'identification des profils.")}
        </ul>
      ` + fUniv() }
    ]},

    /* 7 — S303 ARIMA · Analyser, Valoriser */
    { pages: [
      { t:"S303 — Contexte et démarche", h: hUniv("Description et prévision de données temporelles","S303 · Compétences : Analyser, Valoriser · Semestre 3") + `
        <p>Dans le cadre de cette SAE, nous avons appliqué des modèles <strong>ARIMA</strong> pour prévoir l'évolution de séries temporelles. L'objectif était de maîtriser l'ensemble du pipeline de modélisation : analyse de stationnarité, identification des paramètres p, d et q, ajustement du modèle et évaluation des prévisions sur un horizon défini.</p>
        <p>Nous avons utilisé des tests statistiques (ADF, KPSS) pour valider la stationnarité des séries, comparé différentes configurations de modèles via les critères AIC et BIC, et évalué la qualité des prévisions à l'aide de métriques RMSE, MAE et MAPE.</p>
        <p>Cette SAE couvre les compétences <strong>Analyser</strong> (modélisation statistique des séries) et <strong>Valoriser</strong> (restitution des prévisions sous forme claire et interprétable pour un décideur).</p>
        <div class="modal-pills"><span>R</span><span>ARIMA</span><span>Séries temporelles</span><span>Prévision</span><span>Analyser</span><span>Valoriser</span></div>
      ` + fUniv() },
      { t:"S303 — Bilan réflexif", h: hUniv("Bilan réflexif","S303 · feuille 2 / 2") + `
        <p><strong>Niveau au préalable :</strong> Notions de statistiques et manipulation de R, sans expérience préalable de la modélisation de séries temporelles.</p>
        <p><strong>Prise de conscience :</strong> La modélisation temporelle exige une rigueur particulière. Chaque étape conditionne la suivante : une série non stationnaire mal traitée conduira à un modèle inadapté, quelles que soient les performances affichées sur les données d'entraînement.</p>
        <ul>
          ${li("<strong>Points positifs :</strong> Maîtrise du pipeline complet de modélisation ARIMA, bonne compréhension des métriques d'évaluation et de leur interprétation dans un contexte de prévision réel.")}
          ${li("<strong>Points de vigilance :</strong> Approfondir la gestion des saisonnalités complexes avec les modèles SARIMA, et explorer des alternatives comme Prophet ou les modèles d'état-espace pour des séries irrégulières.")}
        </ul>
      ` + fUniv() }
    ]}
  ],

 /* ── 04 PASSEPORT CULTUREL ── style MAROC */
  projets: [
    /* 0 — Semaine Internationale SPN */
    { pages: [
      { t:"Semaine Internationale — Contexte", h: hMaroc("Semaine Internationale","Sorbonne Paris Nord · feuille 1 / 3") + `
        <p>Dans le cadre de ma 2ème année de BUT Science des données à la <strong>Sorbonne Paris Nord</strong>, j'ai participé à une semaine internationale entièrement conduite en anglais, rassemblant des étudiants venus des quatre coins de l'Europe.</p>
        <p>L'objectif de cette semaine était de réaliser une <strong>SAÉ de data visualisation</strong> en équipe multiculturelle, confrontant différentes approches et méthodes au sein d'un groupe international. L'anglais était la seule langue autorisée, ce qui a rendu l'expérience encore plus immersive et formatrice.</p>
        <p>L'année précédente, c'est le <strong>professeur de nos homologues européens</strong> qui était venu à l'IUT nous dispenser un cours, renforçant ainsi les liens pédagogiques entre établissements partenaires.</p>
        <div class="modal-pills"><span>DataViz</span><span>Anglais</span><span>SAÉ</span><span>International</span></div>
      ` + fMaroc() },
      { t:"Semaine Internationale — Ce que j'en retiens", h: hMaroc("Ce que j'en retiens","Semaine Internationale · feuille 2 / 3") + `
        <ul>
          ${li("Travailler intégralement en anglais sur un projet data réel, du recueil des données jusqu'à la présentation finale devant un jury international.")}
          ${li("Collaborer avec des étudiants européens aux approches différentes, ce qui enrichit la réflexion, remet en question ses automatismes et ouvre de nouvelles perspectives méthodologiques.")}
          ${li("Comprendre que la data visualisation est un langage universel, capable de dépasser les barrières linguistiques et culturelles pour rendre une analyse accessible à tous.")}
          ${li("Renforcer ma confiance en mes capacités à m'exprimer et défendre mes idées dans un contexte international et compétitif, entièrement en anglais.")}
        </ul>
      ` + fMaroc() },
      { t:"Semaine Internationale — Photos", h: hMaroc("Moments de la semaine","Semaine Internationale · feuille 3 / 3") + `
        <p>Quelques souvenirs de cette semaine internationale à la Sorbonne Paris Nord.</p>
        <div class="photo-feuille">
          <div class="photo-slot main filled"><img src="images/IMG_3313.jpeg" alt="Semaine Internationale SPN"/></div>
          <div class="photo-slot filled"><img src="images/IMG_3328.jpeg" alt="Semaine Internationale SPN"/></div>
          <div class="photo-slot filled"><img src="images/IMG_3357.jpeg" alt="Semaine Internationale SPN"/></div>
        </div>
      ` + fMaroc() }
    ]},
    /* 1 — Éducateur de foot */
    { pages: [
      { t:"Éducateur de foot — Ma passion", h: hMaroc("Éducateur de football à l'ESP 18","Feuille 1 / 3 · utilise les flèches →") + `
        <p>Le football fait partie de ma vie depuis que j'ai l'âge de courir après un ballon. Licencié à l'<strong>ESP 18</strong>, je le pratique en compétition depuis mon plus jeune âge, et ce club est aujourd'hui bien plus qu'un endroit où je joue : c'est une communauté dans laquelle je m'investis pleinement.</p>
        <p>Depuis deux saisons, j'ai franchi un cap en devenant <strong>éducateur</strong>. L'année dernière, j'encadrais les <strong>U-12</strong>, une tranche d'âge qui m'a appris la patience, la pédagogie et l'art d'expliquer simplement des notions techniques à des enfants qui découvrent encore le jeu. Cette année, j'ai pris en charge les <strong>U-16</strong>, avec qui nous avons décroché la montée en fin de saison, une fierté collective que je garderai longtemps.</p>
        <p>Ce passage de joueur à éducateur m'a changé. On ne regarde plus le football de la même façon quand on est responsable d'un groupe : chaque match devient une occasion d'observer, d'analyser, d'ajuster.</p>
      ` + fMaroc() },
      { t:"Éducateur de foot — Football et data", h: hMaroc("Football et data : un lien naturel","Feuille 2 / 3") + `
        <p>Ce qui me passionne dans le football, c'est aussi tout ce qu'on peut en tirer avec les données. Comprendre un match ne se résume pas à regarder le score : il y a les statistiques de possession, les zones de pressing, les distances parcourues, les occasions créées, les duels remportés. La data raconte une histoire que les yeux seuls ne voient pas toujours.</p>
        <p>En tant qu'éducateur, je me retrouve naturellement à analyser les performances de mon équipe, à identifier les tendances collectives et les profils individuels. Même sans outil dédié, j'essaie de structurer mes observations pour en tirer des décisions sur les compositions, les exercices à travailler ou les ajustements tactiques à apporter.</p>
        <ul>
          ${li("Observer les données de match pour comprendre les forces et faiblesses collectives.")}
          ${li("Identifier les profils de joueurs grâce à leurs statistiques : pressing, passes décisives, taux de duel.")}
          ${li("Utiliser la data pour préparer les séances : si l'équipe perd beaucoup de ballons dans une zone précise, on cible cela à l'entraînement.")}
        </ul>
      ` + fMaroc() },
      { t:"Éducateur de foot — Photos", h: hMaroc("Sur le terrain","Feuille 3 / 3") + `
        <p>Quelques souvenirs de cette saison avec les U-16 de l'ESP 18 et de la montée décrochée en fin d'année.</p>
        <div class="photo-feuille">
          <div class="photo-slot main filled"><img src="images/FOOT_1.jpeg" alt="U-16 ESP 18"/></div>
          <div class="photo-slot filled"><img src="images/FOOT_2.jpeg" alt="U-16 ESP 18"/></div>
          <div class="photo-slot filled"><img src="images/FOOT_3.jpeg" alt="U-16 ESP 18"/></div>
        </div>
      ` + fMaroc() }
    ]},
    /* 2 — BUST IT WEEK Erasmus @ Leuven */
    { pages: [
      { t:"BUST IT WEEK — Contexte", h: hMaroc("BUST IT WEEK — KU Leuven, Belgique","Erasmus · Compétition internationale · feuille 1 / 3") + `
        <p>Dans le cadre d'un échange Erasmus, j'ai participé à la <strong>BUST IT WEEK</strong> organisée par la <strong>KU Leuven</strong> en Belgique, une compétition internationale regroupant des étudiants en data science d'universités européennes partenaires.</p>
        <p>Le défi : <strong>prédire le nombre de spectateurs</strong> attendus à un match sportif, à partir d'une base de données historique. L'enjeu était concret : aider le club à anticiper ses besoins en <strong>sécurité, restauration et logistique</strong> selon l'affluence estimée.</p>
        <p>Toute la semaine s'est déroulée entièrement en anglais, de l'analyse des données jusqu'à la présentation finale devant l'ensemble des équipes et un jury international.</p>
      ` + fMaroc() },
      { t:"BUST IT WEEK — Démarche technique", h: hMaroc("Démarche et modélisation","BUST IT WEEK · feuille 2 / 3") + `
        <ul>
          ${li("Exploration de la base historique : nettoyage, analyse des variables, étude des corrélations avec l'affluence observée.")}
          ${li("Identification des indicateurs les plus prédictifs : adversaire, météo, jour de la semaine, résultats récents, matchs à enjeu.")}
          ${li("Modélisation Machine Learning : une première pour notre équipe sur un cas réel en compétition, avec plusieurs algorithmes comparés.")}
          ${li("Développement d'une application interactive avec <strong>Streamlit</strong> pour visualiser les prédictions et permettre une exploration des données par l'utilisateur.")}
          ${li("Présentation finale en anglais devant toutes les équipes et le jury international de la KU Leuven.")}
        </ul>
        <div class="modal-pills"><span>Python</span><span>Machine Learning</span><span>Streamlit</span><span>Anglais</span><span>Erasmus</span></div>
      ` + fMaroc() },
      { t:"BUST IT WEEK — Ce que j'en retiens", h: hMaroc("Ce que j'en retiens","BUST IT WEEK · feuille 3 / 3") + `
        <p>Cette compétition a été une série de premières : première application du <strong>Machine Learning</strong> sur un cas professionnel réel, première utilisation de <strong>Streamlit</strong> pour déployer un outil interactif, et première présentation en anglais devant un jury international.</p>
        <p>Au-delà des compétences techniques, cette semaine m'a confirmé que la data science est capable de répondre à des problématiques concrètes dans des contextes multiculturels et compétitifs. Elle m'a aussi appris que travailler sous pression, avec des contraintes de temps fortes et dans une langue étrangère, est une compétence en soi.</p>
        <div class="photo-feuille">
  <div class="photo-slot main filled">
    <img src="images/IMG_2398.jpeg" alt="BUST IT WEEK — Leuven"/>
  </div>
  <div class="photo-slot filled">
    <img src="images/17170047-129b-4989-bb72-567439695a19.jpeg" alt="BUST IT WEEK — Leuven"/>
  </div>
  <div class="photo-slot filled">
    <img src="images/IMG_2147.jpeg" alt="BUST IT WEEK — Leuven"/>
  </div>
</div>
      ` + fMaroc() }
    ]}
  ],

  /* ── 05 STAGE ── */
  stage: [
    { pages: [
      { t:"Stage — Contexte et structure", h: hUniv("Chargé de projets en analyse et automatisation des données","Stage · UFCV · feuille 1 / 5") + `
        <p><strong>Chargé de projets en analyse et automatisation des données</strong> chez <strong>UFCV</strong> (Union Française des Centres de Vacances), Pantin (93), 44 jours, du 13 avril au 18 juin 2026.</p>
        <p>L'UFCV est une association nationale de jeunesse et d'éducation populaire à but non lucratif, reconnue d'utilité publique. En 2025 : 1 621 salariés, 6 500 bénévoles, 120 000 personnes accompagnées, 12 délégations régionales.</p>
        <p>J'ai intégré le pôle <strong>DAMAC</strong> (Direction des Activités, Marketing et Communication), en binôme avec un autre stagiaire. L'association ne disposait pas de pôle data dédié, ce qui m'a donné une réelle autonomie sur l'ensemble des missions.</p>
        <p><strong>Problématique guidant le stage :</strong> comment exploiter au mieux les données de l'association, en les rendant accessibles et compréhensibles pour tous, tout en automatisant un maximum de tâches répétitives ?</p>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>VBA</span><span>Python</span><span>Streamlit</span><span>Jedox</span></div>
      ` + fUniv() },

      { t:"Mission 1 — Tableaux de bord fréquentation", h: hUniv("Tableaux de bord de suivi de l'activité territoriale","Stage · feuille 2 / 5 · Encadrante : Mme Émeline ADANS") + `
        <p>Conception sous Excel de tableaux de bord de suivi de la fréquentation et de la facturation des activités territoriales, destinés à servir de maquette avant intégration dans <strong>Jedox</strong>.</p>
        <ul>
          ${li("<strong>Préparation des données :</strong> nettoyage et structuration avec Power Query (suppression des colonnes inutiles, conversion des champs, création de colonnes calculées, gestion des valeurs manquantes avec la mention 'non renseigné').")}
          ${li("<strong>12 KPI construits :</strong> jours de présence, absences justifiées et non justifiées, taux de présence par réservation et par inscription, âge moyen, quotient familial moyen.")}
          ${li("<strong>8 graphiques :</strong> répartitions par genre, catégorie d'âge, handicap, mode de règlement, lieu de résidence, top 5 des activités, avec 5 filtres interactifs.")}
          ${li("<strong>Macro VBA développée :</strong> détection automatique des individus avec un taux de présence ou d'absence supérieur à 100 % (cas de surprésence identifiés lors du nettoyage).")}
          ${li("<strong>Feuille descriptive :</strong> documentation de chaque indicateur, méthode de calcul, choix méthodologiques et limites observées.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>Power Query</span><span>VBA</span><span>TCD</span><span>KPI</span></div>
      ` + fUniv() },

      { t:"Mission 2 — Indicateurs de performance budgétaire", h: hUniv("Indicateurs de gestion et de performance budgétaire","Stage · feuille 3 / 5 · Encadrante : Mme Claire VERRAEST") + `
        <p>Analyse d'une base de données contenant le budget et le réalisé de l'association entre 2022 et 2026, pour produire des indicateurs de gestion destinés à être intégrés dans Jedox.</p>
        <ul>
          ${li("<strong>Consolidation :</strong> structuration des données via RECHERCHEX, fusion des bases budget et réalisé de structures différentes, allègement du fichier Excel.")}
          ${li("<strong>Analyse des tendances :</strong> évolution des charges, produits et marges sur la période 2022 à 2026, comparaison budget versus réalisé pour identifier les écarts significatifs.")}
          ${li("<strong>Analyse par activité :</strong> ratio charges sur produits, taux de maîtrise des charges, indicateurs relatifs permettant des comparaisons à la même échelle indépendamment de la taille des structures.")}
          ${li("<strong>KPI de note globale :</strong> indicateur synthétique combinant plusieurs KPI selon une pondération paramétrable, particulièrement apprécié par Mme Verraest pour sa lisibilité et sa flexibilité.")}
          ${li("<strong>Analyse complémentaire :</strong> part des trois charges principales dans le total des charges par région, pour évaluer la maîtrise des coûts à l'échelle territoriale.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>RECHERCHEX</span><span>KPI</span><span>Jedox</span></div>
      ` + fUniv() },

      { t:"Mission 3 — Documentation technique", h: hUniv("Documentation technique des fichiers existants","Stage · feuille 4 / 5 · Encadrant : M. Cyril GAFFET") + `
        <p>Documentation détaillée des fichiers Excel automatisés par un précédent stagiaire, utilisés par les équipes du service VIF (Veille, Innovation et Financement), afin de permettre leur compréhension et leur maintenance en autonomie.</p>
        <ul>
          ${li("Prise de connaissance approfondie des fichiers (raccourci, centralisé, VAO, VEJ) en s'appuyant sur le rapport du stagiaire précédent et les explications de M. Gaffet.")}
          ${li("Structuration de la documentation : page de garde, contexte, parties détaillées, glossaire et annexes.")}
          ${li("Description de chaque feuille, formule clé, tableau croisé dynamique et automatisation mise en place, avec des explications accessibles à un utilisateur non développeur.")}
          ${li("Retour positif de M. Gaffet sur la clarté et l'exhaustivité du travail rendu.")}
        </ul>
        <div class="modal-pills"><span>Excel</span><span>VBA</span><span>Documentation technique</span></div>
      ` + fUniv() },

      { t:"Mission 4 — Interface Streamlit et bilan", h: hUniv("Analyse commerciale et interface interactive — Bilan","Stage · feuille 5 / 5") + `
        <p>Analyse des variables d'une base de données commerciale liée aux séjours, et développement d'une interface interactive avec <strong>Streamlit (Python)</strong> pour rendre les analyses accessibles aux équipes sans compétences en programmation.</p>
        <ul>
          ${li("<strong>Enrichissement de la base :</strong> création de nouvelles variables dérivées, intégration de méthodes statistiques avancées (corrélation de Pearson, R², V de Cramér).")}
          ${li("<strong>Interface Streamlit en 5 pages :</strong> explorer une variable, croiser deux variables, profil client, analyse des prix, qualité des données.")}
          ${li("<strong>Détection automatique du type de variables</strong> pour appliquer le test statistique approprié, avec des explications en français compréhensibles par des non-statisticiens.")}
          ${li("<strong>Documentation complète :</strong> guide d'installation Python, utilisation de VS Code, lancement de l'application et résolution des problèmes fréquents.")}
        </ul>
        <p style="margin-top:16px"><strong>Ce que je retiens :</strong> ce stage confirme mon intérêt pour les métiers de la donnée au service des organisations, et tout particulièrement pour la question de l'accessibilité des outils d'analyse à des publics non techniques. Travailler en autonomie complète, sans pôle data dédié, m'a appris à prendre des initiatives et à documenter rigoureusement mon travail pour que les outils perdurent après mon départ.</p>
        <div class="modal-pills"><span>Python</span><span>Streamlit</span><span>Pandas</span><span>Scipy</span><span>Numpy</span></div>
      ` + fUniv() }
    ]}
  ],

  /* ── 06 BILAN ── */
  bilan: [
    { pages: [
      { t:"Ce dont je suis le plus fier", h: hMaroc("Ce dont je suis le plus fier","Bilan · feuille 1 / 2") + `
        <p>L'une de mes plus grandes fiertés est d'avoir été admis dans la formation BUT Sciences des Données. Dès Parcoursup, j'ai été retenu parmi plus de 6 000 candidats, ce qui m'a donné confiance en mes capacités à partir du premier jour. Par la suite, j'ai réussi les épreuves de sélection face à plus de 500 élèves pour valider mon admission définitive.</p>
        <p>Ce qui me rend encore plus fier, c'est de ne pas m'être arrêté à l'entrée dans la formation. Deux années d'investissement continu, de projets menés jusqu'au bout et de compétences construites sur des cas réels : c'est ce parcours dans sa globalité qui compte pour moi, pas seulement le point de départ.</p>
      ` + fMaroc() },
      { t:"Fierté — Engagement sportif", h: hMaroc("Mon engagement en tant qu'éducateur","Bilan · feuille 2 / 2") + `
        <p>En dehors du cadre scolaire, je suis également très fier de mon engagement en tant qu'éducateur sportif à l'ESP 18. L'année dernière, j'encadrais les <strong>U-12</strong>, une expérience qui m'a appris la patience et la pédagogie avec de très jeunes joueurs. Cette saison, j'ai pris en charge les <strong>U-16</strong>, avec qui nous avons décroché la montée en fin d'année.</p>
        <p>Accompagner ce groupe tout au long de la saison m'a permis de développer des qualités humaines essentielles : écoute active, gestion de groupe, pédagogie adaptée selon les âges et les profils, et motivation collective dans les moments difficiles.</p>
        <p>Ce qui me rend particulièrement fier, c'est non seulement le résultat sportif, mais aussi de voir mes joueurs progresser et exprimer clairement leur envie de me retrouver comme éducateur l'année suivante.</p>
      ` + fMaroc() }
    ]},
    { pages: [
      { t:"Objectifs — Court terme", h: hMaroc("Objectifs à court terme","Bilan · feuille 1 / 3 · utilise les flèches →") + `
        <p>Actuellement en 2ème année de BUT Sciences des Données, mon objectif à court terme est double : réussir ma formation avec sérieux et engagement, tout en préparant activement ma recherche d'alternance.</p>
        <p>Je construis progressivement mon profil LinkedIn pour valoriser mes projets et mes expériences, je prépare mes candidatures avec soin, et je reste curieux pour apprendre en dehors des cours, notamment à travers la pratique régulière de SQL et Python sur des projets personnels.</p>
        <p>L'alternance est pour moi un enjeu fort : elle me permettra de confronter mes compétences à un environnement professionnel réel, de comprendre les besoins concrets des organisations en matière de données, et de construire un réseau.</p>
      ` + fMaroc() },
      { t:"Objectifs — Moyen terme", h: hMaroc("Objectifs à moyen terme","Bilan · feuille 2 / 3") + `
        <p>À la suite de mon BUT Sciences des Données, je souhaite poursuivre mes études en intégrant un master spécialisé en data science avec une ouverture vers le domaine sportif. Parmi les formations qui m'intéressent figurent le Master STAPS spécialité Data Sport ou des masters en data science appliquée.</p>
        <p>À moyen terme, je veux approfondir des compétences qui me manquent encore : Machine Learning avancé, visualisation interactive, bases de données massives, et méthodes d'analyse de la performance sportive. Je veux aussi consolider ma pratique de l'anglais technique en data science.</p>
        <div class="modal-pills"><span>Python</span><span>SQL</span><span>Power BI</span><span>R</span><span>Machine Learning</span></div>
      ` + fMaroc() },
      { t:"Objectifs — Long terme", h: hMaroc("Objectifs à long terme","Bilan · feuille 3 / 3") + `
        <p>Dans une dizaine d'années, je me projette en tant que data analyst confirmé, spécialisé dans le domaine du sport. À terme, j'aimerais travailler pour un club sportif professionnel, une fédération ou une startup innovante dans l'analyse de la performance.</p>
        <p>Les missions que j'envisage : analyse des performances des joueurs, optimisation des stratégies d'équipe, prévention des blessures par la modélisation, analyse du comportement des fans et des données d'affluence. Mon expérience d'éducateur me donne une lecture du terrain que peu de data analysts possèdent, et c'est ce que je veux valoriser.</p>
        <p>À plus long terme, j'aimerais évoluer vers un poste à responsabilité : encadrer une équipe de data analysts ou piloter des projets de grande envergure liés à la donnée sportive, à l'intersection entre technologie, performance et stratégie.</p>
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

function setupPhotoSlots() {
  document.querySelectorAll(".photo-slot:not(.filled) input[type='file']").forEach(input => {
    input.addEventListener("change", function() {
      const file = this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const slot = this.closest(".photo-slot");
        slot.classList.add("filled");
        slot.innerHTML = `<img src="${e.target.result}" alt="Photo"/>`;
      };
      reader.readAsDataURL(file);
    });
  });
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
      setupPhotoSlots();
      body.classList.add(inClass);
      setTimeout(() => body.classList.remove(inClass), 300);
    }, 180);
  } else {
    body.innerHTML = pg.h;
    setupPhotoSlots();
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
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));
revEls.forEach(el => observer.observe(el));

document.querySelectorAll("nav a[href^='#'], a.btn-primary[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});
