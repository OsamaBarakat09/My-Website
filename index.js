// Scroll-to-top & scroll restoration
(function(){
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0,0);
  window.addEventListener('pageshow', ()=> window.scrollTo(0,0));
  window.addEventListener('beforeunload', ()=> window.scrollTo(0,0));
})();

// Theme toggle + year
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
if (themeBtn){
  themeBtn.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // if map exists, update streets tiles for theme
    if (typeof applyThemeTiles === 'function') applyThemeTiles();
  });
}
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================== DATA ==================
const data = {
  links: {
    email: 'Osamabarakat021@gmail.com',
    github: 'https://github.com/OsamaBarakat09',
    linkedin: 'https://www.linkedin.com/in/osama-barakat-9b1b511b8/',
    whatsapp: 'https://wa.me/201014198841'
  },
  projects: [
    {
      title: 'Forecasting stock market movement using sentiment analysis',
      blurb: 'Fine-tuned FinBERT + automated news/social pipelines to generate sentiment signals used in trading/risk models; supports backtests and integration into algorithmic strategies.',
      tags: ['FinBERT','Transformers','News API','Backtesting'],
      image: 'finbert-signals.jpg',
      link: 'https://github.com/OsamaBarakat09/Forecasting-Stock-Market-Movement-Using-Sentiment-Analysis'
    },
    {
      title: 'Identifying High-Value Customers for a Marketing Campaign',
      blurb: 'CLV/propensity modeling with logistic regression, random forests, and gradient boosting to prioritize offers and improve ROI with targeted segmentation.',
      tags: ['CLV','scikit-learn','XGBoost','Segmentation'],
      image: 'clv-segmentation.jpg',
      link: 'https://github.com/OsamaBarakat09/Identifying-High-Value-Customers-for-a-Marketing-Campaign'
    },
    {
      title: 'Optimize ad-spend across multiple social media platforms',
      blurb: 'Bayesian optimization + time-series effects (fatigue/seasonality) to dynamically allocate budgets across platforms (FB/TikTok/YouTube), lifting ROAS and lowering CPA.',
      tags: ['Bayesian Opt','Prophet','Dashboards'],
      image: 'budget-optimizer.jpg',
      link: 'https://github.com/OsamaBarakat09/Optimize-ad-spend-across-multiple-social-media-platforms'
    },
    {
      title: 'High Viewership with low conversion Rates',
      blurb: 'Funnel analytics to locate drop-offs, run A/B tests, refine CTAs, and orchestrate cross-platform journeys to convert traffic into qualified leads.',
      tags: ['A/B Testing','Attribution','Power BI'],
      image: 'funnel-abtest.jpg',
      link: 'https://github.com/OsamaBarakat09/High-Viewership-with-low-conversion-Rates'
    }
  ],

  experiences: [
    {
      role: 'Data Scientist', company: 'X_Advertising', location: 'Mansoura, Egypt', period: 'Jan 2024 – Present',
      bullets: [
        'Clean, preprocess, and analyze large multi-source datasets using Python (Pandas/NumPy) and SQL/NoSQL; deep EDA to uncover behavior patterns and campaign trends.',
        'Build predictive models for financial forecasting, recommender systems, and LTV; leverage TensorFlow/PyTorch and AutoML to accelerate iteration.',
        'Design and run A/B tests; ensure explainability with SHAP/LIME to align models with business goals.',
        'Own the full ML lifecycle: feature pipelines → training → evaluation → API deployment; optimize on AWS/GCP.',
        'Develop executive dashboards (Matplotlib/Seaborn/Power BI/Tableau) to democratize insights across teams.',
        'Operate with MLOps best practices (MLflow/Kubeflow) for experiment tracking and robust deployment.',
        'Apply LLMs for content optimization; prototype NLP/CV use cases that improve marketing efficiency.',
        'Mentor peers, communicate model behavior to stakeholders, and enforce data integrity and model reliability.'
      ]
    },
    {
      role: 'Quantitative Analyst', company: 'The Global Webs', location: 'Cairo, Egypt', period: 'Jul 2022 – Jan 2024',
      bullets: [
        'Applied statistical arbitrage and econometrics to pricing and segmentation problems.',
        'Forecasted with ARIMA/Prophet and Bayesian methods to guide cross-channel budget allocation.',
        'Analyzed high-frequency RTB/programmatic exchange data; adapted quant-finance techniques to ad markets.',
        'Ran conjoint and discrete choice models to decode preferences at scale.',
        'Built agent-based simulations and used game theory to anticipate auction dynamics.',
        'Stress-tested strategies with Monte Carlo; increased resilience under market fluctuations.',
        'Integrated alt-data (earnings-call sentiment, geospatial foot traffic) to uncover non-obvious signals.',
        'Used quantile regression and non-parametric statistics for skewed social data; validated funnels with SEM; explored neuromarketing signals.'
      ]
    },
    {
      role: 'Technical Instructor', company: 'Cisco (CNSC)', location: 'Cairo, Egypt', period: 'Feb 2024 – Jun 2024',
      bullets: [
        'Designed and delivered modules on data cleaning, feature engineering, ML pipelines, and statistical modeling.',
        'Worked across interdisciplinary teams (AI, cybersecurity, full-stack) to contextualize DS in broader systems.',
        'Built regression/ensemble prototypes linking theory to production; improved technical communication and pedagogy.'
      ]
    },
    {
      role: 'Apprenticeship (Forward Program)', company: 'McKinsey & Company', location: 'Cairo, Egypt', period: 'Nov 2023 – Apr 2024',
      bullets: [
        'Strengthened structured problem-solving and data fluency via case simulations and peer collaboration.',
        'Synthesized data-driven insights and communicated concise recommendations to non-technical stakeholders.',
        'Practiced adaptive thinking and digital transformation concepts; reinforced growth mindset.'
      ]
    },
    {
      role: 'Social Media Marketer', company: 'The Global Webs', location: 'Cairo, Egypt', period: 'Oct 2019 – Jul 2022 (2 years 10 months)',
      bullets: [
        'The Global Webs is a Marketing & Advertising company delivering strategies across Web Development, Digital Marketing, and business insight optimization (finance & sales).',
        'Owned end-to-end content strategy and execution to grow brand visibility and engagement across major platforms.',
        'Analyzed audience behavior and campaign performance to iterate quickly and hit objectives (traffic, conversions, loyalty).',
        'Collaborated with designers, copywriters, and data analysts to deliver cohesive, high-impact campaigns.',
        'Strategy Development — aligned social plans with broader marketing objectives; selected optimal platforms; ran competitor analysis to spot opportunities.',
        'Content Creation & Management — built content calendars; coordinated visuals/copy; leveraged trends (reels, challenges, memes) to boost reach.',
        'Audience Engagement — community management at scale; drove participation via polls, Q&A, contests, and interactive formats.',
        'Paid Advertising — designed and optimized Facebook/Instagram ad campaigns; managed budgets to maximize ROI; continuous A/B testing.',
        'Analytics & Reporting — tracked KPIs (reach, engagement, CTR, conversions) via platform insights and Google Analytics; delivered periodic reports.',
        'Collaboration — coordinated with content, SEO, and marketing teams; interfaced with clients on expectations, plans, and results when applicable.',
        'Market Awareness — stayed current on algorithm changes, new features, and emerging platforms to maintain competitive performance.',
        'Crisis Management — monitored reputation; addressed negative feedback promptly; implemented mitigation playbooks when needed.'
      ]
    }
  ],

  skills: [
    {cat:'Programming & Development', items:['Python','R','SQL','HTML','Bash','Git','Jupyter Notebook','RStudio','VS Code','GitHub','FastAPI','Flask','TensorFlow Serving','Docker','Kubernetes']},
    {cat:'Data Analytics & Business Intelligence', items:['Data Cleaning','Wrangling','Transformation','Validation','Automation','SQL/NoSQL','ETL Pipelines','Data Warehousing','Big Data','KPI Analysis','EDA','Ad-hoc Reporting','Descriptive Statistics','Inferential Statistics','Data-Driven Decision Making (DDDM)','A/B Testing','Causal Inference','Hypothesis Testing','Feature Engineering','Dimensionality Reduction (PCA, t-SNE, UMAP)','Time Series Cross-Validation','Outlier Detection']},
    {cat:'Machine Learning & AI', items:['Linear/Logistic Regression','Decision Trees','Random Forests','SVM','KNN','XGBoost','Naïve Bayes','Clustering','Ensemble Learning (Stacking/Voting)','Recommender Systems','Deep Learning','AutoML','Transfer Learning','Few-Shot/Zero-Shot','Model Explainability (SHAP/LIME)','Model Evaluation & Tuning','Imbalanced Classification (SMOTE)','Knowledge Graphs','Prompt Engineering','LLM Fine-Tuning (LoRA/PEFT)','RAG']},
    {cat:'Natural Language Processing (NLP)', items:['Text Preprocessing','Tokenization','Lemmatization','NER','Topic Modeling','Sentiment Analysis','Text Summarization','Text Classification','FinBERT','Transformers','Hugging Face','LLMs','Multi-modal AI','Social Listening Analytics']},
    {cat:'Time Series & Forecasting', items:['ARIMA','Prophet','Seasonal Decomposition','Trend Modeling','Anomaly Detection','Bayesian Inference','High-Frequency Forecasting','Quantile Regression']},
    {cat:'Visualization & Reporting', items:['Power BI','Tableau','Matplotlib','Seaborn','Executive Presentations','Dashboards','Visual Analytics','Report Automation','Storytelling']},
    {cat:'Statistics, Math & Quant', items:['Probability','Statistics','Linear Algebra','Calculus','Discrete Mathematics','Monte Carlo Simulation','Bayesian Inference','Structural Equation Modeling (SEM)','Game Theory','Optimization','Quantile Regression','Econometrics']},
    {cat:'Cloud & Data Engineering', items:['AWS (S3, Lambda)','GCP','API Integration','REST APIs','Web Scraping (BeautifulSoup, Selenium)','JSON','XML','CI/CD (GitHub Actions, GitLab CI)','Data Versioning (DVC)','Workflow Orchestration (Airflow, Prefect)','Real-time (Kafka, Spark Streaming)']},
    {cat:'Marketing & AdTech Analytics', items:['MMM','Customer Segmentation','CLV Prediction','Funnel Optimization','Attribution (First-Touch, Data-Driven)','Budget Allocation Algorithms','Conversion Rate Optimization','Uplift Modeling','Ad Fatigue Prediction','Programmatic Advertising','RTB','Neuromarketing','SEO','Hashtag Strategy','Behavioral Segmentation','Growth Metrics (CAC, MRR, Retention)']},
    {cat:'Tools & Platforms', items:['PostgreSQL','SQL Server','Excel','Office Suite','CRM Systems','OpenAI APIs/GPT','Cybersecurity Platforms (Cisco)','Canva']},
    {cat:'Soft Skills', items:['Strategic Thinking','Project Scoping','Cross-Functional Collaboration','Technical Communication','Mentorship','Teaching & Instruction','Agile Teamwork','Curiosity & Fast Learning','Systems Thinking','Design Thinking','Storytelling','Public Speaking','Business Acumen']}
  ],

  activities: [
    {title:'Technical Instructor — Cisco (CNSC)', period:'Feb 2024 – Jun 2024', desc:'AI & DS instruction: pipelines, modeling, statistics; hands-on projects.'},
    {title:'Forward Program — McKinsey & Company', period:'Nov 2023 – Apr 2024', desc:'Structured problem-solving, data fluency, and executive communication.'}
  ],
  certifications: [
    {name:'McKinsey Forward Program', issuer:'McKinsey & Company', year:'2024'},
    {name:'AI & Data Science Instruction Program', issuer:'Cisco (CNSC)', year:'2024'}
  ],
  education: [
    {school:'Politecnico di Milano', degree:'MSc Master of Science in Geoinformatics Engineering', period:'Feb 2026 – Now'},
    {school:'The Open University (UK)', degree:'B.S. Bachelor of Science in Data Science', period:'Feb 2021 – Dec 2024'},
    {school:'Arab Open University (EG)', degree:'B.S. Bachelor of Science in Data Science', period:'Feb 2021 – Dec 2024'}
  ],
  languages: [
    {name:'Arabic', level:'Native or bilingual proficiency'},
    {name:'English', level:'Professional working proficiency'},
    {name:'Italian', level:'Professional working proficiency'},
    {name:'German', level:'Elementary proficiency'}
  ]
};

// ================== RENDERERS ==================
// === Projects ===
const projEl = document.getElementById('projectsGrid');
if (projEl) {
  data.projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';

    // Create main image (wrapped if there's a main link)
    const figure = `
      <figure class="media">
        ${
          p.link
            ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">
                 <img src="${p.image}" alt="Project thumbnail: ${p.title}" loading="lazy" decoding="async">
               </a>`
            : `<img src="${p.image}" alt="Project thumbnail: ${p.title}" loading="lazy" decoding="async">`
        }
      </figure>
    `;

    // Build optional actions (repo/demo)
    const actions = [];
    if (p.repo)
      actions.push(`<a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="btn">GitHub</a>`);
    if (p.demo)
      actions.push(`<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn">Live Demo</a>`);
    if (p.link && actions.length === 0)
      actions.push(`<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn">View Project</a>`);

    card.innerHTML = `
      ${figure}
      <div class="body">
        ${
          p.link
            ? `<h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a></h3>`
            : `<h3>${p.title}</h3>`
        }
        <p>${p.blurb}</p>
        <div class="meta">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        ${actions.length ? `<div class="actions">${actions.join('')}</div>` : ''}
      </div>
    `;

    projEl.appendChild(card);
  });
}

// Utilities for "Show more"
function applyShowMoreToContainer(selector, threshold, labelMore='Show more', labelLess='Show less'){
  const container = document.querySelector(selector);
  if (!container) return;
  const items = Array.from(container.children);
  if (items.length <= threshold) return;

  items.slice(threshold).forEach(el => el.classList.add('hidden'));

  const btn = document.createElement('button');
  btn.className = 'btn showmore';
  btn.type = 'button';
  btn.setAttribute('aria-expanded','false');
  btn.textContent = labelMore;
  container.after(btn);

  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    items.slice(threshold).forEach(el => el.classList.toggle('hidden', expanded));
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.textContent = expanded ? labelMore : labelLess;
  });
}

function applyShowMoreInline(listEl, threshold, labelMore='Show more', labelLess='Show less'){
  if (!listEl) return;
  const items = Array.from(listEl.children);
  if (items.length <= threshold) return;

  items.slice(threshold).forEach(el=>el.classList.add('hidden'));

  const btn = document.createElement('button');
  btn.className='btn showmore';
  btn.type='button';
  btn.setAttribute('aria-expanded','false');
  btn.textContent=labelMore;
  listEl.after(btn);

  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    items.slice(threshold).forEach(el=>el.classList.toggle('hidden', expanded));
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.textContent = expanded ? labelMore : labelLess;
  });
}

// Skills (with per-panel Show more on long chip lists)
const skillsEl = document.getElementById('skillsGrid');
if (skillsEl){
  data.skills.forEach(g=>{
    const p = document.createElement('div');
    p.className='panel';
    p.innerHTML = `<h3>${g.cat}</h3><div class="chip-list">${g.items.map(i=>`<span class='chip'>${i}</span>`).join('')}</div>`;
    skillsEl.appendChild(p);
    applyShowMoreInline(p.querySelector('.chip-list'), 12, 'Show more', 'Show less');
  });
}

// Section-level "Show more"
applyShowMoreToContainer('#projectsGrid',   6, 'Show more projects',       'Show fewer');
applyShowMoreToContainer('#activitiesGrid', 3, 'Show more activities',     'Show fewer');
applyShowMoreToContainer('#certsBox',       3, 'Show more certifications', 'Show fewer');
applyShowMoreToContainer('#eduGrid',        2, 'Show more education',      'Show fewer');
applyShowMoreToContainer('#langGrid',       3, 'Show more languages',      'Show fewer');

// Activities
const actEl = document.getElementById('activitiesGrid');
if (actEl){
  data.activities.forEach(a=>{
    const v = document.createElement('div');
    v.className='panel reveal tilt';
    v.innerHTML = `<h3>${a.title}</h3><p class='muted'>${a.period}</p><p>${a.desc}</p>`;
    actEl.appendChild(v);
  });
}

// Certifications
const certEl = document.getElementById('certsBox');
if (certEl){
  data.certifications.forEach(c=>{
    const d = document.createElement('div');
    d.className='cert reveal';
    d.innerHTML = `<strong>${c.name}</strong><div class='issuer'>${c.issuer} · ${c.year}</div>`;
    certEl.appendChild(d);
  });
}

// Education
const eduEl = document.getElementById('eduGrid');
if (eduEl){
  data.education.forEach(e=>{
    const d = document.createElement('div');
    d.className='panel reveal tilt';
    d.innerHTML = `<h3>${e.school}</h3><p class='muted'>${e.degree}${e.period ? ' · ' + e.period : ''}</p>`;
    eduEl.appendChild(d);
  });
}

// Languages
const langEl = document.getElementById('langGrid');
if (langEl){
  data.languages.forEach(l=>{
    const d = document.createElement('div');
    d.className='panel reveal tilt';
    d.innerHTML = `<h3>${l.name}</h3><p class='muted'>${l.level}</p>`;
    langEl.appendChild(d);
  });
}

// Reveal + Tilt (reduced-motion aware)
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.card,.panel,.role').forEach(el=>el.classList.add('reveal'));

  if (!reduceMotion) {
    const revealObs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('show');
          revealObs.unobserve(e.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -10% 0px'});
    document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

    function attachTilt(el){
      el.addEventListener('mousemove', (ev)=>{
        const r = el.getBoundingClientRect();
        const x = (ev.clientX - r.left)/r.width - .5;
        const y = (ev.clientY - r.top)/r.height - .5;
        el.style.transform = `rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg)`;
      });
      el.addEventListener('mouseleave', ()=>{ el.style.transform=''; });
    }
    document.querySelectorAll('.card,.panel').forEach(el=>attachTilt(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));
  }
})();

// KPI count-up (reduced-motion aware)
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kpiEls = document.querySelectorAll('.kpi strong');
  if (reduceMotion) return;

  const metric = (s)=>{
    const m = String(s).trim().match(/^([0-9]+(?:\.[0-9]+)?)([a-zA-Z%+]+)?$/);
    return m ? {n:parseFloat(m[1]), suf:m[2]||''} : {n:0, suf:''};
  };
  function animateNumber(el){
    const {n,suf} = metric(el.textContent); const dur=900, t0=performance.now();
    const dec = (n % 1 !== 0) ? (String(n).split('.')[1]||'').length : 0;
    const fmt = (v)=> dec ? v.toFixed(dec) : Math.round(v).toString();
    const tick = (t)=>{
      const p=Math.min(1,(t-t0)/dur);
      const e=p<.95?1-Math.pow(1-p,2):1;
      el.textContent=fmt(n*e)+suf;
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const kpiObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ animateNumber(e.target); kpiObs.unobserve(e.target);} });
  }, {threshold:.5});
  kpiEls.forEach(el=>kpiObs.observe(el));
})();

// Active nav highlight
(function(){
  const sectionIds = ['about','projects','skills','experience','activities','certifications','education','languages','contact','locations'];
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = entry.target.id;
      const link = document.querySelector(`.nav a[href="#${id}"]`);
      if(!link) return;
      if(entry.isIntersecting){
        document.querySelectorAll('.nav a').forEach(a=>a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.1 });
  sectionIds.forEach(id=>{ const sec = document.getElementById(id); if(sec) io.observe(sec); });
})();

// ================== MAP (Leaflet) ==================
(function(){
  const mapEl = document.getElementById('map');
  if(!mapEl || typeof L === 'undefined') return;

  const opts = { noWrap:true, detectRetina:true, maxZoom:19 };

  // AFTER (valid)
const esriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { ...opts, attribution: 'Imagery © Esri, Maxar, Earthstar Geographics, and the GIS User Community' }
);
const lightStreets = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { ...opts, attribution: '© OpenStreetMap contributors · © CARTO' }
);
const darkStreets = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { ...opts, attribution: '© OpenStreetMap contributors · © CARTO' }
);


  const map = L.map('map', {
    zoomControl:true, scrollWheelZoom:true, attributionControl:true,
    worldCopyJump:true, maxBounds:[[-85,-180],[85,180]], maxBoundsViscosity:0.8
  });

  // Default base
  let currentBase = esriSat.addTo(map);

  // Markers
  const points = [
    {name:'Milan, Italy',     coords:[45.4642, 9.1900]},
    {name:'Cairo, Egypt',     coords:[30.0444, 31.2357]},
    {name:'Mansoura, Egypt',  coords:[31.0409, 31.3785]}
  ];
  const group = L.featureGroup(points.map(p => L.marker(p.coords).bindPopup(`<strong>${p.name}</strong>`))).addTo(map);
  map.fitBounds(group.getBounds(), { padding:[40, 40] });

  // Layer control
  const baseMaps = { 'Satellite': esriSat, 'Streets (Light)': lightStreets, 'Streets (Dark)': darkStreets };
  L.control.layers(baseMaps, {}, { position:'topright', collapsed:true }).addTo(map);
  L.control.scale({imperial:false}).addTo(map);

  // Theme-aware streets
  window.applyThemeTiles = function(){
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    if (currentBase === lightStreets || currentBase === darkStreets){
      const target = theme === 'light' ? lightStreets : darkStreets;
      if (currentBase !== target){
        map.removeLayer(currentBase);
        currentBase = target.addTo(map);
      }
    }
  };
})();




// Mobile magical menu toggle
(function () {
  const toggle = document.querySelector('.nav-toggle.magic');
  const panel  = document.getElementById('mobileMenu');
  if (!toggle || !panel) return;

  panel.setAttribute('aria-hidden', 'true');

  function openMenu(){
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    const first = panel.querySelector('a, button');
    if (first) first.focus({ preventScroll: true });
  }
  function closeMenu(){
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    setTimeout(()=>{ panel.hidden = true; }, 200);
  }

  toggle.addEventListener('click', ()=>{
    const open = toggle.getAttribute('aria-expanded') === 'true';
    open ? closeMenu() : openMenu();
  });

  panel.addEventListener('click', (e)=>{
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
  });

  // Hard close when switching to desktop
  const mq = window.matchMedia('(min-width: 769px)');
  mq.addEventListener('change', e => { if (e.matches) closeMenu(); });
})();




// Backdrop controller for mobile menu
(function(){
  const panel = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  if (!panel || !backdrop) return;

  function syncBackdrop(){
    const open = panel.getAttribute('aria-hidden') === 'false' && !panel.hidden;
    backdrop.hidden = !open;
  }
  // Watch menu state changes (from your existing toggle code)
  const mo = new MutationObserver(syncBackdrop);
  mo.observe(panel, { attributes: true, attributeFilter: ['hidden', 'aria-hidden'] });
  syncBackdrop();

  // Tap backdrop to close the menu
  backdrop.addEventListener('click', ()=>{
    const toggle = document.querySelector('.nav-toggle.magic');
    if (toggle && toggle.getAttribute('aria-expanded') === 'true') toggle.click();
    else {
      panel.setAttribute('aria-hidden','true');
      panel.hidden = true;
      document.body.classList.remove('menu-open');
      syncBackdrop();
    }
  });
})();



// ========== Contact form → mailto (no server) ==========
(function(){
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus'); // optional
  const submitBtn = document.getElementById('cf-submit');  // optional

  if (!form) return;

  function showStatus(ok, msg){
    if (!statusBox) return;
    statusBox.textContent = msg;
    statusBox.className = 'form-status show ' + (ok ? 'ok' : 'err');
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name    = (document.getElementById('cf-name')    || {}).value?.trim() || '';
    const email   = (document.getElementById('cf-email')   || {}).value?.trim() || '';
    const subject = (document.getElementById('cf-subject') || {}).value?.trim() || 'Portfolio contact';
    const message = (document.getElementById('cf-message') || {}).value?.trim() || '';

    if (!name || !email || !message){
      showStatus(false, 'Please fill in name, email, and message.');
      return;
    }

    const to = 'Osamabarakat021@gmail.com';
    const body =
`Name: ${name}
Email: ${email}

${message}`;

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Visual feedback (optional)
    if (submitBtn){ submitBtn.disabled = true; submitBtn.textContent = 'Opening email…'; }

    // Open the user's email app with a prefilled draft
    window.location.href = mailto;

    // Restore button text after a moment (in case mail app doesn’t take focus)
    setTimeout(()=>{
      if (submitBtn){ submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
      showStatus(true, 'If your email app didn’t open, please email me at ' + to);
    }, 1200);
  });
})();
