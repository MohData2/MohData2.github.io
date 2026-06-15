/* ═══════════════════════════════════════════════════════════════
   HELPERS — DÉCORATION DES PAGES
   univHeader  → style Sorbonne Paris Nord (bleu + doré)
   marocHeader → style Maroc / data / foot (vert + rouge, sans drapeau)
═══════════════════════════════════════════════════════════════ */

/* ── SORBONNE : sceau SVG + lignes réglées dorées ── */
function univHeader(title, sub) {
  return `
  <div class="page-deco univ-deco">
    <div class="deco-seal">
      <svg viewBox="0 0 80 80" width="56" height="56" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="none" stroke="#c9a84c" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="30" fill="none" stroke="#c9a84c" stroke-width="0.7" stroke-dasharray="3 2"/>
        <text x="40" y="34" text-anchor="middle" font-size="7" fill="#c9a84c" font-family="Georgia,serif" font-weight="bold">SORBONNE</text>
        <text x="40" y="43" text-anchor="middle" font-size="5.8" fill="#c9a84c" font-family="Georgia,serif">PARIS NORD</text>
        <text x="40" y="55" text-anchor="middle" font-size="5" fill="#c9a84c" font-family="Georgia,serif">✦ IUT ✦</text>
      </svg>
    </div>
    <div class="deco-meta">
      <span class="deco-label">Université Sorbonne Paris Nord</span>
      <span class="deco-date">Année universitaire 2024 – 2025</span>
      <span class="deco-dept">Département Science des données</span>
    </div>
  </div>
  <div class="ruled-content">
    <h2>${title}</h2>
    <span class="modal-num">${sub}</span>`;
}

function univFooter() {
  return `</div>
  <div class="page-footer-line">
    <span>BUT Science des données</span>
    <span>Mohammed · 2024–2025</span>
  </div>`;
}

/* ── MAROC / DATA / FOOT : décoration géométrique arabesque + data ── */
function marocHeader(title, sub) {
  return `
  <div class="page-deco maroc-deco">
    <div class="maroc-ornament">
      <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
        <!-- Étoile géométrique façon zellige marocain -->
        <polygon points="32,4 37,22 55,22 41,33 46,51 32,40 18,51 23,33 9,22 27,22"
                 fill="none" stroke="#2e7d52" stroke-width="1.4"/>
        <polygon points="32,10 36,23 49,23 39,31 43,44 32,36 21,44 25,31 15,23 28,23"
                 fill="none" stroke="#c0392b" stroke-width="0.7" opacity="0.6"/>
        <circle cx="32" cy="32" r="6" fill="none" stroke="#2e7d52" stroke-width="1"/>
        <!-- Mini icône data au centre -->
        <text x="32" y="36" text-anchor="middle" font-size="7" fill="#c0392b">⬡</text>
      </svg>
    </div>
    <div class="deco-meta">
      <span class="deco-label maroc-label">Passeport culturel</span>
      <span class="deco-date maroc-sub">${sub}</span>
      <span class="deco-dept maroc-tags">🇲🇦 Maroc · ⚽ Football · 📊 Data</span>
    </div>
  </div>
  <div class="ruled-content maroc-ruled">
    <h2>${title}</h2>`;
}

function marocFooter(tag = "") {
  return `</div>
  <div class="page-footer-line maroc-footer">
    <span>${tag}</span>
    <span>Mohammed</span>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════
   DONNÉES — TOUTES LES CARTES ET LEURS FEUILLES
═══════════════════════════════════════════════════════════════ */
const MODAL_DATA = {

  /* ══════════════════════════════════════════════
     01 — PRÉSENTATION  → style MAROC
  ══════════════════════════════════════════════ */
  presentation: [

    /* Carte 0 — Me présenter */
    { pages: [
      { title: "Mohammed — Bonjour", html: `
        ${marocHeader("Qui suis-je ?", "Présentation · Feuille 1 / 2")}
        <p>Je m'appelle <strong>Mohammed</strong>, étudiant en 2ᵉ année de BUT Science des données à l'Université Sorbonne Paris Nord. Marocain, Parisien, data enthusiast — trois identités qui se complètent.</p>
        <p>Passionné par la donnée, le football et la culture marocaine, je construis un parcours qui me ressemble : rigoureux dans l'analyse, curieux dans la vie.</p>
        <p>[Complète ici : ville d'origine de ta famille, ton lycée, pourquoi la data…]</p>
        ${marocFooter("🇲🇦 × 📊")}
      `},
      { title: "Mohammed — Mon parcours", html: `
        ${marocHeader("Mon parcours", "Présentation · Feuille 2 / 2")}
        <ul>
          <li>[Bac obtenu, année, lycée]</li>
          <li>2023 — Entrée en BUT Science des données, Sorbonne Paris Nord</li>
          <li>2024 — 2ᵉ année, spécialisation [à compléter]</li>
          <li>2025 — Stage chez [entreprise]</li>
          <li>[Autre étape importante de ton parcours]</li>
        </ul>
        ${marocFooter("Parcours")}
      `}
    ]},

    /* Carte 1 — Ce que j'apprécie */
    { pages: [
      { title: "Ce que j'apprécie dans ma formation", html: `
        ${marocHeader("Ce que j'apprécie", "Formation BUT SD · Feuille 1 / 2")}
        <p>La pluridisciplinarité — stats, programmation, bases de données, communication. Chaque SAÉ confronte la théorie à des cas réels, comme un match de foot : la théorie tactique ne suffit pas, il faut la mettre en pratique.</p>
        <p>[Ajoute ici ce que tu apprécies vraiment dans ton IUT : les profs, les projets, l'ambiance…]</p>
        ${marocFooter("Formation")}
      `},
      { title: "Points forts de la formation", html: `
        ${marocHeader("Points forts", "Formation BUT SD · Feuille 2 / 2")}
        <ul>
          <li>Les SAÉ : projets concrets liés au monde professionnel.</li>
          <li>La transversalité : stats, info, communication, gestion de projet.</li>
          <li>Les intervenants professionnels qui partagent leur expérience terrain.</li>
          <li>[Ce que tu apprécies vraiment, à compléter]</li>
        </ul>
        ${marocFooter("Formation")}
      `}
    ]},

    /* Carte 2 — Mes qualités — 1 feuille par qualité */
    { pages: [
      { title: "Curiosité", html: `
        ${marocHeader("La curiosité", "Qualité 1 / 4 · ← → pour naviguer")}
        <p>Toujours en train de lire des articles, regarder des conférences, tester de nouveaux outils. Comme en foot où on analyse les matchs des autres pour progresser, je fais une veille constante en data science.</p>
        <p>[Donne un exemple concret de ta curiosité : une techno que tu as apprise seul, un domaine que tu explores…]</p>
        ${marocFooter("Qualité")}
      `},
      { title: "Rigueur", html: `
        ${marocHeader("La rigueur", "Qualité 2 / 4")}
        <p>Je documente mon code, valide mes résultats, m'assure que mes analyses sont reproductibles. La rigueur, c'est aussi savoir douter de ses propres résultats — comme un arbitre qui vérifie avant de siffler.</p>
        <p>[Donne un exemple : un bug que tu as trouvé grâce à la rigueur, une analyse que tu as dû recommencer…]</p>
        ${marocFooter("Qualité")}
      `},
      { title: "Sens du collectif", html: `
        ${marocHeader("Le sens du collectif", "Qualité 3 / 4")}
        <p>Comme dans une équipe de foot, la data science est rarement un sport individuel. J'aime travailler en équipe, partager mes connaissances, écouter les autres.</p>
        <p>[Exemple de travail en équipe : une SAÉ, un projet de groupe, une expérience associative…]</p>
        ${marocFooter("Qualité")}
      `},
      { title: "Adaptabilité", html: `
        ${marocHeader("L'adaptabilité", "Qualité 4 / 4")}
        <p>Les outils changent, les méthodes évoluent. Ce qui ne change pas, c'est la logique de raisonnement. Je m'adapte aux environnements et aux contraintes sans perdre l'objectif de vue.</p>
        <p>[Exemple : passage Python/R, changement d'outil en cours de projet, nouvelle méthodo imposée…]</p>
        ${marocFooter("Qualité")}
      `}
    ]},

    /* Carte 3 — Objectifs académiques */
    { pages: [
      { title: "Objectifs académiques", html: `
        ${marocHeader("Objectifs académiques", "Court & moyen terme · Feuille 1 / 2")}
        <ul>
          <li>Obtenir mon BUT Science des données avec mention.</li>
          <li>Intégrer un master ou une LP Data Science / IA sélectif.</li>
          <li>Approfondir le deep learning, le NLP et les méthodes bayésiennes.</li>
          <li>Participer à des compétitions académiques (Kaggle, data challenges).</li>
        </ul>
        ${marocFooter("Académique")}
      `},
      { title: "Vision long terme", html: `
        ${marocHeader("Vision long terme", "Objectifs · Feuille 2 / 2")}
        <p>[Ta vision à plus long terme : spécialisation, secteur, international, recherche…]</p>
        <ul>
          <li>[Objectif à 5 ans]</li>
          <li>[Objectif à 10 ans]</li>
          <li>[Rêve ou ambition]</li>
        </ul>
        ${marocFooter("Académique")}
      `}
    ]},

    /* Carte 4 — Objectifs professionnels */
    { pages: [
      { title: "Objectifs professionnels", html: `
        ${marocHeader("Objectifs professionnels", "Vision carrière")}
        <ul>
          <li>Trouver une alternance / stage dans une équipe data ambitieuse.</li>
          <li>Devenir Data Analyst ou Junior Data Scientist.</li>
          <li>Évoluer vers la modélisation prédictive et le MLOps.</li>
          <li>Contribuer à des projets à impact : santé, environnement, sport…</li>
          <li>À terme, animer une équipe data et transmettre mes compétences.</li>
        </ul>
        ${marocFooter("Professionnel")}
      `}
    ]}
  ],

  /* ══════════════════════════════════════════════
     02 — COMPÉTENCES  → style SORBONNE
  ══════════════════════════════════════════════ */
  /* pas de modal sur cette section — skill blocks directs */

  /* ══════════════════════════════════════════════
     03 — SAÉ  → style SORBONNE
  ══════════════════════════════════════════════ */
  sae: [

    /* 0 — SAÉ 1.01 */
    { pages: [
      { title: "SAÉ 1.01 — Contexte", html: `
        ${univHeader("Exploration d'un jeu de données", "SAÉ 1.01 · Compétence : Traiter · Semestre 1")}
        <p>Analyse exploratoire d'un dataset public : nettoyage, statistiques descriptives et premières visualisations.</p>
        <p><strong>Problématique :</strong> [Décris la question à laquelle tu devais répondre avec les données.]</p>
        <div class="modal-pills"><span>Python</span><span>Pandas</span><span>Matplotlib</span><span>Seaborn</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 1.01 — Démarche", html: `
        ${univHeader("Démarche & résultats", "SAÉ 1.01 · Feuille 2 / 3")}
        <ul>
          <li>Source du dataset : [à compléter]</li>
          <li>Volumétrie : [nb lignes, nb colonnes]</li>
          <li>Étapes clés : valeurs manquantes, normalisation, corrélations</li>
          <li>Livrables : rapport PDF + notebook Jupyter commenté</li>
        </ul>
        ${univFooter()}
      `},
      { title: "SAÉ 1.01 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 1.01 · Feuille 3 / 3")}
        <p>[Décris ici ce que cette SAÉ t'a apporté : compétences techniques, méthodologiques, relationnelles…]</p>
        <ul>
          <li>[Apprentissage technique principal]</li>
          <li>[Méthode ou outil découvert]</li>
          <li>[Difficulté surmontée]</li>
        </ul>
        <a href="#" class="modal-link">Voir le notebook sur GitHub →</a>
        ${univFooter()}
      `}
    ]},

    /* 1 — SAÉ 1.02 */
    { pages: [
      { title: "SAÉ 1.02 — Base de données", html: `
        ${univHeader("Conception d'une base de données", "SAÉ 1.02 · Compétence : Traiter · Semestre 1")}
        <p>Modélisation entité-association, passage au modèle relationnel et implémentation SQL. Travail en binôme.</p>
        <ul>
          <li>Analyse du cahier des charges et identification des entités</li>
          <li>Schéma EA avec cardinalités</li>
          <li>Normalisation 3FN</li>
          <li>Implémentation PostgreSQL + requêtes complexes</li>
        </ul>
        <div class="modal-pills"><span>SQL</span><span>Merise</span><span>PostgreSQL</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 1.02 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 1.02 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages : modélisation, SQL avancé, travail en binôme…]</p>
        <ul>
          <li>[Point technique retenu]</li>
          <li>[Difficulté rencontrée et solution]</li>
          <li>[Compétence développée]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 2 — SAÉ 1.03 */
    { pages: [
      { title: "SAÉ 1.03 — Collecte web", html: `
        ${univHeader("Collecte et structuration web", "SAÉ 1.03 · Compétence : Traiter · Semestre 1")}
        <p>Scraping de données depuis des sites publics, nettoyage et stockage structuré en base de données.</p>
        <ul>
          <li>Identification des sources de données</li>
          <li>Extraction avec BeautifulSoup / requests</li>
          <li>Nettoyage et normalisation</li>
          <li>Stockage SQLite + requêtes d'analyse</li>
        </ul>
        <div class="modal-pills"><span>Python</span><span>BeautifulSoup</span><span>SQL</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 1.03 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 1.03 · Feuille 2 / 2")}
        <p>[À compléter avec ton retour d'expérience sur cette SAÉ.]</p>
        <ul>
          <li>[Apprentissage 1]</li>
          <li>[Apprentissage 2]</li>
          <li>[Difficulté ou surprise]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 3 — SAÉ 2.01 */
    { pages: [
      { title: "SAÉ 2.01 — Dashboard", html: `
        ${univHeader("Dashboard interactif", "SAÉ 2.01 · Compétence : Valoriser · Semestre 2")}
        <p>Tableau de bord pour présenter des KPI à des non-spécialistes. Enjeu : rendre les données lisibles pour un public non technique.</p>
        <ul>
          <li>Définition des KPI avec le "client" fictif</li>
          <li>Maquettage de l'interface (wireframe)</li>
          <li>Développement R Shiny</li>
          <li>Tests utilisateurs et itérations</li>
        </ul>
        <div class="modal-pills"><span>R</span><span>Shiny</span><span>ggplot2</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 2.01 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 2.01 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur la visualisation et la communication de données.]</p>
        <ul>
          <li>[Point sur la dataviz]</li>
          <li>[Point sur l'expérience utilisateur]</li>
          <li>[Retour du "client" fictif]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 4 — SAÉ 2.02 */
    { pages: [
      { title: "SAÉ 2.02 — Analyse statistique", html: `
        ${univHeader("Analyse statistique & rapport", "SAÉ 2.02 · Compétence : Analyser · Semestre 2")}
        <p>Tests d'hypothèses, intervalles de confiance, rapport d'analyse pour un client fictif.</p>
        <ul>
          <li>Test du Chi-2, test de Student, ANOVA</li>
          <li>Analyse de la puissance statistique</li>
          <li>Rapport professionnel en LaTeX</li>
          <li>Présentation orale</li>
        </ul>
        <div class="modal-pills"><span>R</span><span>Statistiques</span><span>LaTeX</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 2.02 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 2.02 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur les tests statistiques et la communication des résultats.]</p>
        <ul>
          <li>[Point sur les tests d'hypothèses]</li>
          <li>[Rédaction du rapport]</li>
          <li>[Présentation orale : ce que tu en retiens]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 5 — SAÉ 2.03 */
    { pages: [
      { title: "SAÉ 2.03 — Pipeline ETL", html: `
        ${univHeader("Pipeline de données (ETL)", "SAÉ 2.03 · Compétence : Traiter · Semestre 2")}
        <p>Mise en place d'un pipeline ETL : extraction API, transformation et chargement en entrepôt.</p>
        <ul>
          <li>Connexion et authentification à une API REST</li>
          <li>Extraction et pagination des données</li>
          <li>Transformation : nettoyage, typage, agrégation</li>
          <li>Chargement en base relationnelle</li>
        </ul>
        <div class="modal-pills"><span>Python</span><span>API REST</span><span>ETL</span><span>SQL</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 2.03 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 2.03 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur les pipelines de données et les API.]</p>
        <ul>
          <li>[Gestion des erreurs API]</li>
          <li>[Transformation des données]</li>
          <li>[Organisation du code ETL]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 6 — SAÉ 3.01 */
    { pages: [
      { title: "SAÉ 3.01 — Modèle supervisé", html: `
        ${univHeader("Modèle prédictif supervisé", "SAÉ 3.01 · Compétence : Modéliser · Semestre 3")}
        <p>Entraînement et évaluation d'un modèle de classification sur un dataset métier avec optimisation des hyperparamètres.</p>
        <ul>
          <li>Préparation des données (encodage, scaling, split)</li>
          <li>Comparaison : Random Forest, SVM, XGBoost</li>
          <li>Optimisation par GridSearchCV</li>
          <li>Évaluation : accuracy, F1-score, ROC AUC</li>
        </ul>
        <div class="modal-pills"><span>Python</span><span>Scikit-learn</span><span>XGBoost</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 3.01 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 3.01 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur le machine learning supervisé.]</p>
        <ul>
          <li>[Choix et comparaison des modèles]</li>
          <li>[Optimisation des hyperparamètres]</li>
          <li>[Interprétation des métriques]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 7 — SAÉ 3.02 */
    { pages: [
      { title: "SAÉ 3.02 — NLP", html: `
        ${univHeader("Analyse de texte (NLP)", "SAÉ 3.02 · Compétence : Analyser · Semestre 3")}
        <p>Traitement d'un corpus de textes : tokenisation, analyse de sentiment et modélisation de sujets (LDA).</p>
        <ul>
          <li>Prétraitement : tokenisation, stopwords, lemmatisation</li>
          <li>Analyse de sentiment (lexicale + ML)</li>
          <li>Topic modeling avec LDA</li>
          <li>Visualisation avec pyLDAvis</li>
        </ul>
        <div class="modal-pills"><span>Python</span><span>NLTK</span><span>spaCy</span><span>Gensim</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 3.02 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 3.02 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur le NLP.]</p>
        <ul>
          <li>[Prétraitement du texte]</li>
          <li>[Analyse de sentiment]</li>
          <li>[Topic modeling et interprétation]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 8 — SAÉ 3.03 */
    { pages: [
      { title: "SAÉ 3.03 — Big Data", html: `
        ${univHeader("Big Data & traitement distribué", "SAÉ 3.03 · Compétence : Traiter · Semestre 3")}
        <p>Introduction à Spark pour le traitement de volumes importants, manipulation de DataFrames distribués.</p>
        <ul>
          <li>Architecture Hadoop / HDFS</li>
          <li>DataFrames distribués avec PySpark</li>
          <li>Requêtes SQL sur Spark</li>
          <li>Traitement d'un dataset volumineux en cluster</li>
        </ul>
        <div class="modal-pills"><span>PySpark</span><span>Hadoop</span><span>Spark SQL</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 3.03 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 3.03 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur le Big Data et les architectures distribuées.]</p>
        <ul>
          <li>[Différence traitement local vs distribué]</li>
          <li>[Spark vs Pandas : quand utiliser quoi]</li>
          <li>[Contraintes et surprises]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 9 — SAÉ 4.01 */
    { pages: [
      { title: "SAÉ 4.01 — Projet transversal", html: `
        ${univHeader("Projet transversal — cas entreprise", "SAÉ 4.01 · Compétence : Valoriser · Semestre 4")}
        <p>Réponse en équipe à une problématique réelle posée par un partenaire professionnel.</p>
        <ul>
          <li>Recueil du besoin et cadrage du projet</li>
          <li>Collecte et préparation des données</li>
          <li>Modélisation et analyse</li>
          <li>Restitution devant un jury professionnel</li>
        </ul>
        <div class="modal-pills"><span>Python</span><span>Gestion de projet</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 4.01 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 4.01 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur la gestion de projet et la relation client.]</p>
        <ul>
          <li>[Organisation du travail en équipe]</li>
          <li>[Communication avec le partenaire]</li>
          <li>[Présentation devant un jury]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 10 — SAÉ 4.02 */
    { pages: [
      { title: "SAÉ 4.02 — Séries temporelles", html: `
        ${univHeader("Séries temporelles", "SAÉ 4.02 · Compétence : Modéliser · Semestre 4")}
        <p>Prévision de données temporelles avec ARIMA / Prophet, appliqué à des données économiques ou météo.</p>
        <ul>
          <li>Analyse de stationnarité (ADF, KPSS)</li>
          <li>ARIMA manuel + auto_arima</li>
          <li>Prophet pour les saisonnalités complexes</li>
          <li>Évaluation : RMSE, MAE, MAPE</li>
        </ul>
        <div class="modal-pills"><span>Prophet</span><span>ARIMA</span><span>statsmodels</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 4.02 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 4.02 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur les séries temporelles.]</p>
        <ul>
          <li>[Stationnarité et transformation]</li>
          <li>[Choix entre ARIMA et Prophet]</li>
          <li>[Interprétation des métriques de prévision]</li>
        </ul>
        ${univFooter()}
      `}
    ]},

    /* 11 — SAÉ 4.03 */
    { pages: [
      { title: "SAÉ 4.03 — Déploiement ML", html: `
        ${univHeader("Déploiement d'un modèle ML", "SAÉ 4.03 · Compétence : Modéliser · Semestre 4")}
        <p>API REST pour exposer un modèle ML, interface web et conteneurisation Docker.</p>
        <ul>
          <li>Sérialisation du modèle avec joblib</li>
          <li>API REST avec FastAPI</li>
          <li>Interface web minimaliste (HTML/JS)</li>
          <li>Conteneurisation avec Docker</li>
        </ul>
        <div class="modal-pills"><span>FastAPI</span><span>Docker</span><span>MLOps</span></div>
        ${univFooter()}
      `},
      { title: "SAÉ 4.03 — Ce que j'ai appris", html: `
        ${univHeader("Ce que j'ai appris", "SAÉ 4.03 · Feuille 2 / 2")}
        <p>[Décris ici tes apprentissages sur le déploiement et le MLOps.]</p>
        <ul>
          <li>[Passage du notebook au service en production]</li>
          <li>[Gestion des dépendances avec Docker]</li>
          <li>[Tests de l'API]</li>
        </ul>
        <a href="#" class="modal-link">Voir le repo GitHub →</a>
        ${univFooter()}
      `}
    ]}
  ],

  /* ══════════════════════════════════════════════
     04 — PASSEPORT CULTUREL  → style MAROC
  ══════════════════════════════════════════════ */
  projets: [

    /* Carte 0 — Projet data perso */
    { pages: [
      { title: "Projet data personnel", html: `
        ${marocHeader("Projet 1 — Titre de ton projet", "Projet perso · Feuille 1 / 2")}
        <p>[Décris ici ton premier projet perso data : ce que tu as construit, pourquoi, le contexte.]</p>
        <p>[L'idée t'est venue comment ? Quel problème voulais-tu résoudre ?]</p>
        <div class="modal-pills"><span>Python</span><span>Data</span></div>
        ${marocFooter("📊 Projet data")}
      `},
      { title: "Détails & apprentissages", html: `
        ${marocHeader("Détails & apprentissages", "Projet 1 · Feuille 2 / 2")}
        <ul>
          <li>[Stack technique utilisée]</li>
          <li>[Défi principal rencontré]</li>
          <li>[Ce que tu en as appris]</li>
          <li>[Résultat ou impact]</li>
        </ul>
        <a href="#" class="modal-link">Voir sur GitHub →</a>
        ${marocFooter("📊 Projet data")}
      `}
    ]},

    /* Carte 1 — Football */
    { pages: [
      { title: "Ma passion pour le football", html: `
        ${marocHeader("Ma passion pour le football", "Passeport culturel · Feuille 1 / 3")}
        <p>[Décris ici ta passion pour le foot : depuis quand, comment tu le vis, quel rôle ça joue dans ta vie…]</p>
        <p>Le football m'a appris [les valeurs que tu veux mentionner : travail d'équipe, résilience, tactique, dépassement de soi…].</p>
        ${marocFooter("⚽ Football")}
      `},
      { title: "Le Maroc au Mondial 2022", html: `
        ${marocHeader("Maroc — Mondial Qatar 2022", "Passeport culturel · Feuille 2 / 3")}
        <p>Premier pays africain et arabe à atteindre les demi-finales d'un Mondial. Un parcours historique qui a marqué des millions de personnes.</p>
        <p>[Décris ce que tu as ressenti, comment tu as vécu ce parcours, ce que ça représente pour toi…]</p>
        ${marocFooter("⚽ 🇲🇦")}
      `},
      { title: "Football & data — une passion croisée", html: `
        ${marocHeader("Football × Data", "Passeport culturel · Feuille 3 / 3")}
        <p>[As-tu déjà utilisé la data pour analyser le foot ? Expected Goals (xG), heat maps, stats de possession… C'est ici l'endroit parfait pour le mentionner.]</p>
        <ul>
          <li>[Clubs ou équipes que tu suis]</li>
          <li>[Analyse ou projet data autour du foot]</li>
          <li>[Ton joueur ou entraîneur préféré et pourquoi]</li>
        </ul>
        ${marocFooter("⚽ 📊")}
      `}
    ]},

    /* Carte 2 — Culture marocaine */
    { pages: [
      { title: "Mes racines marocaines", html: `
        ${marocHeader("Mes racines marocaines", "Passeport culturel · Feuille 1 / 3")}
        <p>[Décris ici ton lien avec le Maroc : ville d'origine de ta famille, culture, langue, valeurs transmises…]</p>
        <p>Être biculturel m'a appris [ouverture d'esprit, langues, vision du monde, richesse des échanges…]</p>
        ${marocFooter("🇲🇦 Maroc")}
      `},
      { title: "Ce qui m'inspire dans la culture marocaine", html: `
        ${marocHeader("Ce qui m'inspire", "Passeport culturel · Feuille 2 / 3")}
        <ul>
          <li>🍵 Le thé à la menthe — symbole d'hospitalité et de partage</li>
          <li>🎵 [Musique : gnawa, chaabi, rap marocain, artiste que tu aimes…]</li>
          <li>🏛️ [Architecture, villes : Fès, Marrakech, Casablanca, ta ville…]</li>
          <li>📚 [Un auteur, un film, une série marocain·e qui compte pour toi]</li>
        </ul>
        ${marocFooter("🇲🇦 Culture")}
      `},
      { title: "Biculturalisme & engagement", html: `
        ${marocHeader("Mon engagement", "Passeport culturel · Feuille 3 / 3")}
        <p>[Comment tu combines tes deux cultures au quotidien, dans tes études, dans ta vision professionnelle…]</p>
        <p>[As-tu un engagement associatif lié à ta culture, à l'intégration, à la jeunesse franco-marocaine ?]</p>
        ${marocFooter("🇲🇦 🇫🇷")}
      `}
    ]}
  ],

  /* ══════════════════════════════════════════════
     06 — BILAN  → style MAROC
  ══════════════════════════════════════════════ */
  bilan: [
    /* Note : la section bilan n'a pas de cartes cliquables dans le HTML actuel.
       Ces données sont prêtes si tu veux les ajouter plus tard. */
  ]
};

/* ═══════════════════════════════════════════════════════════════
   ÉTAT
═══════════════════════════════════════════════════════════════ */
let currentGroup   = null;
let currentCardIdx = 0;
let currentPageIdx = 0;

/* DOM */
const overlay    = document.getElementById("modalOverlay");
const modalBody  = document.getElementById("modalBody");
const modalTitle = document.getElementById("modalTitle");
const modalInfo  = document.getElementById("modalNavInfo");
const dotsEl     = document.getElementById("modalDotsIndicator");
const btnPrev    = document.getElementById("modalPrev");
const btnNext    = document.getElementById("modalNext");
const btnClose   = document.getElementById("modalClose");

/* ── Ouvrir ── */
function openModal(group, cardIdx) {
  currentGroup   = group;
  currentCardIdx = cardIdx;
  currentPageIdx = 0;

  /* Injecter les CSS vars de la section parente dans la modal */
  const sec = document.getElementById(group);
  const win = document.getElementById("modalWin");
  if (sec) {
    const s = getComputedStyle(sec);
    ["--sec-accent","--sec-pill-bg","--sec-pill-border"].forEach(v =>
      win.style.setProperty(v, s.getPropertyValue(v).trim())
    );
  }

  renderModal();
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Rendu — affiche la feuille courante ── */
function renderModal() {
  const pages = MODAL_DATA[currentGroup][currentCardIdx].pages;
  const page  = pages[currentPageIdx];
  const total = pages.length;

  modalTitle.textContent = page.title;
  modalBody.innerHTML    = page.html;

  /* Info feuille */
  modalInfo.textContent = total > 1 ? `feuille ${currentPageIdx + 1} / ${total}` : "";

  /* Points indicateurs */
  dotsEl.innerHTML = "";
  if (total > 1) {
    pages.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "page-dot" + (i === currentPageIdx ? " active" : "");
      dotsEl.appendChild(d);
    });
  }

  /* Boutons */
  btnPrev.disabled = currentPageIdx === 0;
  btnNext.disabled = currentPageIdx === total - 1;
}

/* ── Navigation feuilles ← → ── */
btnNext.addEventListener("click", () => {
  if (currentPageIdx < MODAL_DATA[currentGroup][currentCardIdx].pages.length - 1) {
    currentPageIdx++;
    renderModal();
    modalBody.scrollTop = 0;
  }
});

btnPrev.addEventListener("click", () => {
  if (currentPageIdx > 0) {
    currentPageIdx--;
    renderModal();
    modalBody.scrollTop = 0;
  }
});

/* Fermeture */
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => {
  if (!overlay.classList.contains("open")) return;
  if (e.key === "Escape")                        closeModal();
  if (e.key === "ArrowRight" && !btnNext.disabled) btnNext.click();
  if (e.key === "ArrowLeft"  && !btnPrev.disabled) btnPrev.click();
});

/* ── Clic sur une carte ── */
document.querySelectorAll(".mac-card").forEach(card => {
  card.addEventListener("click", () => {
    const group = card.dataset.group;
    const idx   = parseInt(card.dataset.idx);
    if (group && MODAL_DATA[group]?.[idx]) openModal(group, idx);
  });
});

/* ── Filtre SAÉ par compétence BUT ── */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll("[data-group='sae']").forEach(card => {
      const show = filter === "all" || card.dataset.comp === filter;
      card.style.transition = "opacity .25s, transform .25s";
      if (show) {
        card.style.display = "";
        requestAnimationFrame(() => { card.style.opacity="1"; card.style.transform=""; });
      } else {
        card.style.opacity="0"; card.style.transform="translateY(8px)";
        setTimeout(() => {
          if (card.dataset.comp !== filter && filter !== "all") card.style.display="none";
        }, 260);
      }
    });
  });
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll(".reveal");
function checkReveal() {
  const t = window.innerHeight * .88;
  revealEls.forEach(el => { if (el.getBoundingClientRect().top < t) el.classList.add("active"); });
}
window.addEventListener("scroll", checkReveal, { passive: true });
checkReveal();

/* ── Tilt 3D fenêtre ── */
const winEl = document.querySelector(".window");
document.addEventListener("mousemove", e => {
  if (window.innerWidth < 960 || overlay.classList.contains("open")) return;
  const cx = e.clientX/window.innerWidth - .5, cy = e.clientY/window.innerHeight - .5;
  winEl.style.transform = `perspective(1400px) rotateX(${-cy*3}deg) rotateY(${cx*3}deg)`;
});
document.addEventListener("mouseleave", () => {
  winEl.style.transform = "perspective(1400px) rotateX(0) rotateY(0)";
});

/* ── Nav active ── */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks  = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navLinks.forEach(a => { a.style.color = a.getAttribute("href") === `#${cur}` ? "var(--gold-light)" : ""; });
}, { passive: true });
