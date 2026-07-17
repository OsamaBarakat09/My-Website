/**
 * ============================================================================
 * 1. HIGH-LEVEL GLOBAL SYSTEM REGISTRIES & DATA DICTIONARIES
 * ============================================================================
 */

const SYSTEM_NAVIGATION_LINKS = [
    { label: "About", anchor: "#about" },
    { label: "Experience", anchor: "#experience" },
    { label: "Skills", anchor: "#skills" },
    { label: "Education", anchor: "#education" },
    { label: "Languages", anchor: "#languages" },
];


// AI_SOLUTIONS_DATA with this structure
const AI_SOLUTIONS_DATA = [
    {
        category: "FINANCIAL AI",
        title: "Financial Sentiment Analysis",
        href: "https://github.com/OsamaBarakat09?tab=repositories",
        description: "Predictive NLP engine parsing clickstream data and news telemetry metrics.",
        results: "Boosted portfolio performance by 15% and reduced manual research time by 40% via automated sentiment tagging."
    },
    {
        category: "MARKETING AI",
        title: "Customer Intelligence Engine",
        href: "https://github.com/Osama-Barakat",
        description: "Multi-touch telemetry attribution models tracking behavioral conversion pipelines.",
        results: "Optimized ROAS by 22% and reduced CPA by 14% over a 6-month cycle."
    }
];


const VALUE_CARDS_DATA = [
    {
        title: "SEO Audits & Strategy",
        body: "Formulating enterprise technical SEO blueprints, optimizing structural crawling pipelines, and building predictive keyword ranking matrix metrics.",
        tags: ["Technical SEO", "Semantic Web", "Core Web Vitals"]
    },
    {
        title: "Data-Driven Marketing",
        body: "Transforming ambiguous user tracking telemetry into highly actionable conversions using predictive multi-touch analytics modeling frameworks.",
        tags: ["Google Analytics 4", "Looker Studio", "Tag Manager"]
    },
    {
        title: "Automated Scraping",
        body: "Architecting high-throughput concurrent scraping configurations capable of bypassing sophisticated defensive tracking controls.",
        tags: ["Python Scrapy", "Selenium Grid", "Proxy Rotators"]
    },
    {
        title: "Web Performance Engineering",
        body: "Optimizing DOM structures, minimizing layout shifts, and tweaking image processing assets to lock down ideal 100% performance metrics.",
        tags: ["Next.js Optimization", "Edge Delivery", "Asset Caching"]
    }
];

const EXPERIENCE_DATA = [
    {
        id: "exp-massar",
        role: "SEO Specialist",
        company: "Massar",
        location: "Mansoura, Egypt",
        period: "Feb 2026 - Present",
        responsibilities: [
            "Architected comprehensive enterprise technical SEO overhaul schema structures, yielding a major boost in organic search visibility metrics.",
            "Formulated optimized international ranking initiatives, balancing cross-domain internal authority and language mapping protocols.",
            "Configured live custom analytics pipelines translating raw organic landing clickstreams directly into operational client reporting dashboards."
        ]
    },
    {
        id: "exp-xadv",
        role: "Data Scientist",
        company: "X_Advertising",
        location: "Mansoura, Egypt",
        period: "Jan 2024 - Nov 2025",
        responsibilities: [
            "Engineered predictive machine learning bidding infrastructure to systematically optimize budget distributions across highly complex multi-channel campaign matrices.",
            "Designed automated asynchronous pipeline workers to scrape, extract, and structure competitive landscape media arrays continuously.",
            "Deployed advanced customer lifetime value (CLV) retention algorithms using highly customized Python tracking pipelines."
        ]
    },
    {
        id: "exp-global-quant",
        role: "Quantitative Analyst",
        company: "The Global Webs",
        location: "Cairo, Egypt",
        period: "Jul 2022 - Jan 2024",
        responsibilities: [
            "Constructed algorithmic market trend and user interaction models to evaluate media asset pricing fluctuations across diverse advertising channels.",
            "Created regression validation matrices to evaluate traffic authenticity and eliminate digital asset traffic anomalies.",
            "Configured distributed internal data warehouses to aggregate click logs, speeding up pipeline query execution times."
        ]
    },
    {
        id: "exp-global-media",
        role: "Social Media Marketer",
        company: "The Global Webs",
        location: "Cairo, Egypt",
        period: "Oct 2019 - Jul 2022",
        responsibilities: [
            "Managed multi-channel cross-platform narrative campaigns, generating millions of verified organic customer impression matrices.",
            "Conducted comprehensive content structural A/B split validation runs to uncover optimal engagement profiles.",
            "Collaborated with creative cross-functional design layers to build high-performance lead generation landing matrices."
        ]
    }
];

const SKILLS_DATA = [
    {
        category: "Data Science & Automation",
        items: ["Python", "TensorFlow", "Scikit-Learn", "Pandas & NumPy", "Web Scraping (Scrapy/Selenium)", "SQL Data Modeling"]
    },
    {
        category: "SEO & Digital Growth",
        items: ["Technical SEO Architecture", "Google Analytics 4 (GA4)", "Search Console APIs", "Conversion Rate Optimization", "Semantic Schema Mapping"]
    },
    {
        category: "Web Engineering Stack",
        items: ["HTML5 Semantic Engine", "Advanced CSS Grid / Flexbox", "Vanilla JavaScript (ES6+)", "Responsive Component Design", "CI/CD Pipeline Operations"]
    }
];

const EDUCATION_DATA = [
    {
        degree: "Master of Science in Geoinformatics Engineering",
        institution: "Politecnico di Milano",
        location: "Milan, Italy",
        period: "Present"
    },
    {
        degree: "Bachelor of Science in Data Science",
        institution: "The Open University (UK) & Arab Open University (EG)",
        location: "Egypt",
        period: "2021 - 2024"
    }
];

const LANGUAGES_DATA = [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "C1" },
    { name: "Italian", proficiency: "B1" },
    { name: "Germany", proficiency: "A1" }
];

const CONTACT_DATA = [
    {
        type: "Email",
        value: "osamabarakat9@gmail.com",
        href: "mailto:osamabarakat9@gmail.com"
    },
    {
        type: "LinkedIn",
        value: "linkedin.com/in/osama-barakat",
        href: "https://www.linkedin.com/in/osama-barakat-9b1b511b8/"
    },
    {
        type: "GitHub",
        value: "github.com/Osama-Barakat",
        href: "https://github.com/Osama-Barakat"
    }
];

const METADATA_CONFIG = {
    title: "Osama Barakat | Data Scientist & Growth Architect",
    description: "Personal production engine showcasing data pipelines, advanced structural automation, technical web engineering metrics, and business optimization solutions.",
    branding: "Osama Barakat. All Rights Reserved.",
    footerLinks: [
        { label: "Privacy Blueprint", href: "#" },
        { label: "Terms of Compute", href: "#" }
    ]
};

const HERO_CONTENT_CONFIG = {
    title: "Decoding Complex Data. Accelerating Digital Growth.",
    description: "I bridge the gap between advanced analytical data science and growth architecture. Specializing in high-performance predictive engines, automated web scraping models, and deep enterprise technical SEO operations.",
    primaryCTA: { label: "Explore Architecture", anchor: "#about" },
    secondaryCTA: { label: "Review Experience", anchor: "#experience" }
};

const VALUE_SECTION_TEXT = {
    title: "Strategic Capabilities Blueprint",
    subtitle: "Architecting balanced, high-performance execution strategies across data collection, predictive processing, and technical conversion optimization metrics."
};

const CONTACT_SECTION_TEXT = {
    title: "Initialize Connection Protocol",
    subtitle: "Select an integration portal endpoint below to start a synchronization run regarding technical initiatives, analytical architectures, or career alignments."
};

/**
 * ============================================================================
 * 2. CENTRALLY ISOLATED THEME STATE MANAGEMENT MODULE (Application State)
 * ============================================================================
 */
class ApplicationThemeEngine {
    // ApplicationThemeEngine with OS sync
    constructor() {
        this.storageKey = "app-preferred-theme";
        // Check local storage, or fallback to system preference, or default to light
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.activeTheme = localStorage.getItem(this.storageKey) || (systemPrefersDark ? "dark" : "light");
        this.init();
        
        // Listen for OS-level changes in real-time
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            if (!localStorage.getItem(this.storageKey)) {
                this.activeTheme = e.matches ? "dark" : "light";
                this.init();
            }
        });
}

init() {
    document.documentElement.setAttribute("data-theme", this.activeTheme);
}
    toggle() {
        this.activeTheme = this.activeTheme === "light" ? "dark" : "light";
        localStorage.setItem(this.storageKey, this.activeTheme);
        document.documentElement.setAttribute("data-theme", this.activeTheme);
    }

    renderThemeToggleButton() {
    const actionsContainer = document.querySelector(".nav-actions");
    if (!actionsContainer) return;

    const shouldHaveButton = true; 
    let actionBtn = document.getElementById("ui-theme-toggle-trigger");

    if (!shouldHaveButton) {
        if (actionBtn) actionBtn.remove();
        return;
    }

    if (!actionBtn) {
        actionBtn = document.createElement("button");
        actionBtn.id = "ui-theme-toggle-trigger";
        actionBtn.className = "theme-btn";
        actionBtn.setAttribute("aria-label", "Toggle color scheme");
        
        const ctaBtn = document.getElementById("desktop-nav-cta-btn");
        
        if (ctaBtn) {
            actionsContainer.insertBefore(actionBtn, ctaBtn);
        } else {
            actionsContainer.appendChild(actionBtn);
        }
        
        actionBtn.addEventListener("click", () => this.toggle());
    }

    const lightModeIcon = `<svg ...><!-- icon --></svg>`;
    const darkModeIcon = `<svg ...><!-- icon --></svg>`;
    const newIcon = this.activeTheme === "light" ? darkModeIcon : lightModeIcon;
    
    if (actionBtn.innerHTML !== newIcon) {
        actionBtn.innerHTML = newIcon;
    }
}
}

/**
 * ============================================================================
 * 3. COMPONENT TEMPLATE COMPILATION FACTORIES (Template Engines)
 * ============================================================================
 */
const ElementCompilationFactory = {
    createNavigationItem(link, isMobile = false) {
        const item = document.createElement("li");
        if (isMobile) item.style.width = "100%";
        
        const anchor = document.createElement("a");
        anchor.href = link.anchor;
        anchor.className = "nav-link";
        anchor.textContent = link.label;
        
        if (isMobile) {
            anchor.style.display = "block";
            anchor.style.padding = "12px 0";
            anchor.style.fontSize = "18px";
        }
        
        item.appendChild(anchor);
        return item;
    },

    createValueCard(data, index) {
        const card = document.createElement("div");
        card.className = "panel-card value-swipe-card-modifier";
        card.setAttribute("data-slide-index", index);
        card.style.cssText = "display: flex; flex-direction: column; justify-content: center; height: 140px; text-align: left; padding: 24px; border-radius: 16px; margin-bottom: 0; cursor: pointer; transition: transform 0.25s ease, border-color 0.25s ease;";
        
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 16px; width: 100%;">
                <div style="flex: 1;">
                    <h3 class="panel-heading" style="font-size: 16px; margin: 0 0 4px 0; color: var(--text-primary); font-weight: 600;">${data.title}</h3>
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); letter-spacing: 0.5px;">Explore Blueprint &rarr;</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            let overlayPortal = document.getElementById("blueprint-modal-portal-overlay");
            if (!overlayPortal) {
                overlayPortal = document.createElement("div");
                overlayPortal.id = "blueprint-modal-portal-overlay";
                overlayPortal.className = "blueprint-modal-overlay-portal";
                document.body.appendChild(overlayPortal);
                
                overlayPortal.addEventListener("click", (e) => {
                    if (e.target === overlayPortal) {
                        overlayPortal.classList.remove("portal-visible");
                        document.body.style.overflow = "";
                    }
                });
            }

            // Inside your createValueCard method in index.js, 
// update the overlayPortal.innerHTML content to this:

overlayPortal.innerHTML = `
    <div class="blueprint-modal-content-card" style="max-width: 650px;">
        <div style="border-bottom: 1px solid var(--border-rgba); padding-bottom: 20px; margin-bottom: 24px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--brand-primary); letter-spacing: 1.2px; text-transform: uppercase;">Case Study</span>
            <h2 style="font-size: 26px; font-weight: 800; color: var(--text-primary); margin: 8px 0;">${data.title}</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
            <div>
                <h4 style="font-size: 12px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Challenge</h4>
                <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">${data.body}</p>
            </div>
            <div style="background: var(--bg-panel); padding: 16px; border-radius: 12px; border-left: 4px solid var(--status-success);">
                <h4 style="font-size: 12px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Key Metric</h4>
                <p style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${data.results}</p>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-rgba); padding-top: 20px;">
            <div style="display: flex; gap: 8px;">
                ${data.tags.map(tag => `<span class="chip" style="font-size: 12px;">${tag}</span>`).join("")}
            </div>
            <button id="close-blueprint-portal-btn" style="background: var(--brand-primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">Close</button>
        </div>
    </div>
`;

            document.body.style.overflow = "hidden";
            overlayPortal.classList.add("portal-visible");

            document.getElementById("close-blueprint-portal-btn").addEventListener("click", () => {
                overlayPortal.classList.remove("portal-visible");
                document.body.style.overflow = "";
            });
        });

        return card;
    },

    createAccordionItem(data) {
        const item = document.createElement("div");
        item.className = "accordion-item";
        item.id = data.id;

        item.innerHTML = `
            <button class="accordion-trigger" aria-expanded="false" aria-controls="${data.id}-panel">
                <span>${data.role} <span style="color:var(--text-muted); font-size:14px; font-weight:400;">at ${data.company}</span></span>
                <span class="accordion-icon">+</span>
            </button>
            <div id="${data.id}-panel" class="accordion-panel" role="region">
                <div class="accordion-body">
                    <div style="margin-bottom:12px; font-size:13px; color:var(--brand-primary); font-weight:600;">
                        <span>${data.location}</span> &bull; <span>${data.period}</span>
                    </div>
                    <ul>
                        ${data.responsibilities.map(resp => `<li style="margin-bottom:6px;">${resp}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
        return item;
    },

    createSkillCard(data) {
        const card = document.createElement("div");
        card.className = "panel-card skill-matrix-card interactive-skill-card-node";
        card.style.cssText = "display: flex; flex-direction: column; justify-content: center; height: 100px; text-align: left; padding: 20px; border-radius: 16px; margin-bottom: 0;";
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <h3 class="panel-heading" style="font-size:15px; margin: 0; color: var(--text-primary); font-weight: 600;">${data.category}</h3>
                <span style="font-size: 11px; font-weight:700; text-transform:uppercase; background: rgba(0,113,227,0.06); color: var(--brand-primary); padding: 4px 10px; border-radius: 20px; letter-spacing:0.5px;">View Stack &rarr;</span>
            </div>
        `;

        card.addEventListener("click", () => {
            let overlayPortal = document.getElementById("skills-modal-portal-overlay");
            if (!overlayPortal) {
                overlayPortal = document.createElement("div");
                overlayPortal.id = "skills-modal-portal-overlay";
                overlayPortal.className = "skills-modal-overlay-portal";
                document.body.appendChild(overlayPortal);
                
                overlayPortal.addEventListener("click", (e) => {
                    if (e.target === overlayPortal) {
                        overlayPortal.classList.remove("portal-visible");
                        document.body.style.overflow = "";
                    }
                });
            }

            overlayPortal.innerHTML = `
                <div class="skills-modal-content-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color, #e2e8f0); padding-bottom: 14px;">
                        <h3 style="font-size: 18px; margin: 0; font-weight: 700; color: var(--brand-primary);">${data.category}</h3>
                        <button id="close-skills-portal-btn" style="background: transparent; border: none; font-size: 22px; cursor: pointer; color: var(--text-muted); font-weight:300; padding:0; line-height:1;">&times;</button>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${data.items.map(skill => `<span class="chip skill-chip" style="font-size: 14px; padding: 6px 12px;">${skill}</span>`).join("")}
                    </div>
                </div>
            `;

            document.body.style.overflow = "hidden";
            overlayPortal.classList.add("portal-visible");

            document.getElementById("close-skills-portal-btn").addEventListener("click", () => {
                overlayPortal.classList.remove("portal-visible");
                document.body.style.overflow = "";
            });
        });

        return card;
    },

    createTimelineCard(data) {
        const card = document.createElement("div");
        card.className = "timeline-card";
        
        card.innerHTML = `
            <span class="timeline-badge">${data.period}</span>
            <h3 style="font-size:20px; font-weight:700; margin-bottom:8px;">${data.degree}</h3>
            <p style="color:var(--text-secondary); font-weight:500; font-size:15px;">${data.institution}</p>
            <p style="color:var(--text-muted); font-size:13px; margin-top:4px;">${data.location}</p>
        `;
        return card;
    },

    createLanguageCard(data) {
        const card = document.createElement("div");
        card.className = "lang-card";
        
        card.innerHTML = `
            <span class="lang-name">${data.name}</span>
            <span class="lang-badge">${data.proficiency}</span>
        `;
        return card;
    },

    createContactCard(data) {
        const anchor = document.createElement("a");
        anchor.href = data.href;
        anchor.className = "contact-channel-card";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.setAttribute("aria-label", `Connect via ${data.type}`);

        anchor.innerHTML = `
            <div class="channel-meta">
                <span class="channel-type">${data.type}</span>
                <span class="channel-details">${data.value}</span>
            </div>
            <div class="channel-arrow">&rarr;</div>
        `;
        return anchor;
    }
};

/**
 * ============================================================================
 * 4a. MOBILE DEVICE SLIDER MECHANICS (Strategic Capability Matrix Slider)
 * ============================================================================
 */
class MobileSliderOrchestrator {
    constructor(rootContainerId, dataArray) {
        this.root = document.getElementById(rootContainerId);
        this.data = dataArray;
        this.dotsContainerId = "value-slider-dots-indicator";
        this.resizeDebounceTimer = null;
        this.isMobileLayout = null; 
        
        if (this.root) this.init();
    }

    init() {
        this.evaluateLayoutState();
        window.addEventListener("resize", () => {
            clearTimeout(this.resizeDebounceTimer);
            this.resizeDebounceTimer = setTimeout(() => this.evaluateLayoutState(), 150);
        });
    }

    evaluateLayoutState() {
        const width = window.innerWidth;
        if (width <= 768) {
            if (this.isMobileLayout !== true) {
                this.isMobileLayout = true;
                this.buildMobileSliderView();
            }
        } else {
            if (this.isMobileLayout !== false) {
                this.isMobileLayout = false;
                this.buildDesktopGridView();
            }
        }
    }

    buildDesktopGridView() {
        this.root.className = "cards-grid";
        this.root.innerHTML = "";
        
        const dots = document.getElementById(this.dotsContainerId);
        if (dots) dots.remove();

        this.data.forEach((item, index) => {
            this.root.appendChild(ElementCompilationFactory.createValueCard(item, index));
        });
    }

    buildMobileSliderView() {
        this.root.className = "value-slider-track-mobile";
        this.root.innerHTML = "";

        this.data.forEach((item, index) => {
            this.root.appendChild(ElementCompilationFactory.createValueCard(item, index));
        });

        const dotsWrapper = document.createElement("div");
        dotsWrapper.id = this.dotsContainerId;
        this.root.parentNode.appendChild(dotsWrapper);

        this.data.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.className = `indicator-dot ${index === 0 ? "active" : ""}`;
            dot.setAttribute("data-target-index", index);
            dotsWrapper.appendChild(dot);
        });

        this.root.addEventListener("scroll", () => this.synchronizeSliderDots(), { passive: true });
    }

    synchronizeSliderDots() {
        const scrollLeft = this.root.scrollLeft;
        const width = this.root.clientWidth;
        const currentActiveIndex = Math.round(scrollLeft / (width * 0.85));

        const dots = document.querySelectorAll(`#${this.dotsContainerId} .indicator-dot`);
        dots.forEach((dot, index) => {
            if (index === currentActiveIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }
}

/**
 * ============================================================================
 * 4b. SCALABLE RESPONSIVE SKILLS MATRIX ENGINE (Apple-Inspired Accordion Grid)
 * ============================================================================
 */
class SkillsLayoutOrchestrator {
    constructor(rootId, dataArray) {
        this.root = document.getElementById(rootId);
        this.data = dataArray;
        this.resizeDebounceTimer = null;
        this.isMobileLayout = null;

        if (this.root) this.init();
    }

    init() {
        this.evaluateLayoutState();
        window.addEventListener("resize", () => {
            clearTimeout(this.resizeDebounceTimer);
            this.resizeDebounceTimer = setTimeout(() => this.evaluateLayoutState(), 150);
        });
    }

    evaluateLayoutState() {
        const width = window.innerWidth;
        if (width <= 768) {
            if (this.isMobileLayout !== true) {
                this.isMobileLayout = true;
                this.buildMobileDrawerView();
            }
        } else {
            if (this.isMobileLayout !== false) {
                this.isMobileLayout = false;
                this.buildDesktopGridView();
            }
        }
    }

    buildDesktopGridView() {
        this.root.innerHTML = "";
        this.root.style.cssText = "display: flex; flex-direction: column; gap: 16px;"; 

        const subHeaderBlock = document.createElement("div");
        subHeaderBlock.style.cssText = "margin-bottom: 8px; text-align: left;";
        subHeaderBlock.innerHTML = `
            <span style="font-size: 13px; font-weight: 600; text-transform: uppercase; color: var(--text-muted, #718096); letter-spacing: 1px; display:block; margin-bottom:4px;">TECHNICAL STACK</span>
            <h2 style="font-size: 24px; font-weight: 700; color: var(--text-primary, #1a202c); margin: 0;">Core Infrastructure</h2>
        `;
        this.root.appendChild(subHeaderBlock);

        this.data.forEach(skillSet => {
            this.root.appendChild(ElementCompilationFactory.createSkillCard(skillSet));
        });
    }

    buildMobileDrawerView() {
        this.root.innerHTML = "";
        this.root.style.cssText = "display: flex; flex-direction: column; gap: 12px; width: 100%; padding: 0 24px; margin-bottom: 40px;";

        const subHeaderBlock = document.createElement("div");
        subHeaderBlock.style.cssText = "margin-bottom: 8px; text-align: center;";
        subHeaderBlock.innerHTML = `
            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px; display:block; margin-bottom:4px;">TECHNICAL STACK</span>
            <h2 style="font-size: 22px; font-weight: 700; color: var(--text-primary); margin: 0;">Core Infrastructure Stack</h2>
        `;
        this.root.appendChild(subHeaderBlock);

        this.data.forEach((skillSet, index) => {
            const drawerItem = document.createElement("div");
            drawerItem.className = "skills-drawer-item";
            drawerItem.style.cssText = "border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; background: var(--bg-surface, #fff); overflow: hidden; transition: all 0.25s ease;";

            const trigger = document.createElement("button");
            trigger.className = "skills-drawer-trigger";
            trigger.setAttribute("aria-expanded", "false");
            trigger.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 18px; border: none; background: transparent; font-size: 15px; font-weight: 600; color: var(--text-primary); text-align: left; cursor: pointer;";
            
            trigger.innerHTML = `
                <span>${skillSet.category}</span>
                <span class="drawer-icon" style="font-size: 16px; font-weight: 300; transition: transform 0.2s ease; color: var(--brand-primary);">&rarr;</span>
            `;

            const panel = document.createElement("div");
            panel.className = "skills-drawer-panel";
            panel.style.cssText = "max-height: 0px; overflow: hidden; transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1); background: var(--bg-subtle, #f8fafc);";

            const innerBody = document.createElement("div");
            innerBody.style.cssText = "padding: 0 18px 18px 18px; display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px;";
            
            skillSet.items.forEach(skill => {
                const chip = document.createElement("span");
                chip.className = "chip skill-chip";
                chip.textContent = skill;
                innerBody.appendChild(chip);
            });

            panel.appendChild(innerBody);
            drawerItem.appendChild(trigger);
            drawerItem.appendChild(panel);
            this.root.appendChild(drawerItem);

            trigger.addEventListener("click", () => {
                const isOpened = drawerItem.classList.contains("drawer-open");
                
                this.root.querySelectorAll(".skills-drawer-item").forEach(item => {
                    item.classList.remove("drawer-open");
                    item.querySelector(".skills-drawer-panel").style.maxHeight = "0px";
                    item.querySelector(".drawer-icon").style.transform = "rotate(0deg)";
                    item.querySelector(".skills-drawer-trigger").setAttribute("aria-expanded", "false");
                });

                if (!isOpened) {
                    drawerItem.classList.add("drawer-open");
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    trigger.querySelector(".drawer-icon").style.transform = "rotate(90deg)";
                    trigger.setAttribute("aria-expanded", "true");
                }
            });
        });
    }
}

/**
 * ============================================================================
 * 4c. RESPONSIVE FEATURES MATRIX LAYOUT ENGINE (Inline Card / Mobile Sheet Overlay Container)
 * ============================================================================
 */
class FeaturedAIOrientedLayoutEngine {
    constructor(viewRootId, systemsArrayData) {
        this.viewRoot = document.getElementById(viewRootId);
        this.data = systemsArrayData;
        this.resizeDebounceTimer = null;
        this.isMobileLayout = null;

        if (this.viewRoot) this.init();
    }

    init() {
        this.evaluateViewportStateStructure();
        window.addEventListener("resize", () => {
            clearTimeout(this.resizeDebounceTimer);
            this.resizeDebounceTimer = setTimeout(() => this.evaluateViewportStateStructure(), 150);
        });
    }

    evaluateViewportStateStructure() {
        const width = window.innerWidth;
        if (width <= 768) {
            if (this.isMobileLayout !== true) {
                this.isMobileLayout = true;
                this.compileMobileModalControllerButton();
            }
        } else {
            if (this.isMobileLayout !== false) {
                this.isMobileLayout = false;
                this.compileDesktopStaticInlineCard();
            }
        }
    }

    generateSolutionsSubnodesMarkup() {
        let itemsHtml = "";
        this.data.forEach((solution, idx) => {
            const runtimeSeparator = idx > 0 ? `<div style="height:1px; background: var(--border-color, #e2e8f0); margin: 20px 0;"></div>` : "";
            itemsHtml += `
                ${runtimeSeparator}
                <div style="cursor: pointer; transition: opacity 0.2s;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); letter-spacing: 0.5px; display:block; margin-bottom:4px;">${solution.category}</span>
                    <h3 style="font-size: 17px; font-weight: 600; color: var(--text-primary); margin: 0 0 6px 0;">${solution.title}</h3>
                    <p style="font-size: 14px; color: var(--text-secondary); margin: 0 0 10px 0; line-height: 1.5;">${solution.description}</p>
                    <div style="background: rgba(14, 165, 233, 0.05); padding: 10px; border-radius: 8px; border-left: 3px solid var(--brand-primary);">
                        <span style="font-size: 11px; font-weight: 800; color: var(--text-primary); display: block; margin-bottom: 2px;">IMPACT:</span>
                        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">${solution.results}</p>
                    </div>
                    <a href="${solution.href}" target="_blank" style="display: inline-block; margin-top: 10px; font-size: 12px; color: var(--brand-primary); font-weight: 600;">View Repository &rarr;</a>
                </div>
            `;
        });
        return itemsHtml;
    }

    compileDesktopStaticInlineCard() {
        const persistentOverlay = document.getElementById("ai-modal-portal-overlay");
        if (persistentOverlay) persistentOverlay.remove();

        this.viewRoot.style.cssText = "display:block; width: 100%;";
        this.viewRoot.innerHTML = `
            <div class="panel-card" style="background: var(--bg-surface, #ffffff); border-radius: 20px; padding: 28px; border: 1px solid var(--border-color, #e2e8f0); text-align: left; height: 100%;">
                <div style="margin-bottom: 24px;">
                    <span style="font-size: 13px; font-weight: 600; text-transform: uppercase; color: var(--text-muted, #718096); letter-spacing: 1px; display:block; margin-bottom:4px;">FEATURED EXPERTISE</span>
                    <h2 style="font-size: 24px; font-weight: 700; color: var(--text-primary, #1a202c); margin: 0;">Explore My AI Solutions</h2>
                </div>
                ${this.generateSolutionsSubnodesMarkup()}
            </div>
        `;
    }

    compileMobileModalControllerButton() {
        this.viewRoot.style.cssText = "display: flex; justify-content: center; margin-bottom: 20px; padding: 0 24px; width: 100%;";
        this.viewRoot.innerHTML = `
            <button id="ai-modal-trigger-btn" style="display: inline-flex; align-items: center; justify-content: center; gap: 12px; background: var(--bg-surface, #ffffff); border: 1px solid var(--border-color, #e2e8f0); padding: 16px 24px; border-radius: 16px; font-weight: 600; color: var(--text-primary); cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.02); font-size: 15px; width: 100%;">
                <span style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(0,113,227,0.08); color: var(--brand-primary, #0071e3); border-radius: 10px;">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </span>
                <span>Explore My AI Solutions</span>
                <span style="color: var(--text-muted); font-size: 12px;">&rarr;</span>
            </button>
        `;

        let sharedOverlayPortalNode = document.getElementById("ai-modal-portal-overlay");
        if (!sharedOverlayPortalNode) {
            sharedOverlayPortalNode = document.createElement("div");
            sharedOverlayPortalNode.id = "ai-modal-portal-overlay";
            sharedOverlayPortalNode.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 2000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; display: flex; align-items: flex-end; justify-content: center;";
            
            sharedOverlayPortalNode.innerHTML = `
                <div id="ai-modal-bottom-sheet" style="width: 100%; max-width: 500px; background: var(--bg-surface, #ffffff); border-radius: 24px 24px 0 0; padding: 28px; box-shadow: 0 -8px 32px rgba(0,0,0,0.12); transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); text-align: left;">
                    <div style="display:flex; justify-content:space-between; align-items: flex-start; margin-bottom:24px;">
                        <div>
                            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted, #718096); letter-spacing: 1px; display:block; margin-bottom:4px;">FEATURED EXPERTISE</span>
                            <h2 style="font-size: 22px; font-weight: 700; color: var(--text-primary, #1a202c); margin: 0;">AI Solutions Matrix</h2>
                        </div>
                        <button id="ai-modal-close-trigger-btn" style="background: var(--bg-subtle, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-primary); font-size: 16px; font-weight: 300;">&times;</button>
                    </div>
                    <div style="max-height: 60vh; overflow-y: auto; padding-bottom: 12px;">
                        ${this.generateSolutionsSubnodesMarkup()}
                    </div>
                </div>
            `;
            document.body.appendChild(sharedOverlayPortalNode);
        }

        this.bindModalSystemInteractionTriggers();
    }

    bindModalSystemInteractionTriggers() {
        const launcherBtn = document.getElementById("ai-modal-trigger-btn");
        const dismissalBtn = document.getElementById("ai-modal-close-trigger-btn");
        const backdropContainer = document.getElementById("ai-modal-portal-overlay");
        const sheetNode = document.getElementById("ai-modal-bottom-sheet");

        if (!launcherBtn || !backdropContainer || !sheetNode) return;

        const invokeActivationSequence = () => {
            document.body.style.overflow = "hidden";
            backdropContainer.style.opacity = "1";
            backdropContainer.style.pointerEvents = "auto";
            sheetNode.style.transform = "translateY(0%)";
        };

        const invokeDeactivationSequence = () => {
            document.body.style.overflow = "";
            backdropContainer.style.opacity = "0";
            backdropContainer.style.pointerEvents = "none";
            sheetNode.style.transform = "translateY(100%)";
        };

        launcherBtn.addEventListener("click", invokeActivationSequence);
        if (dismissalBtn) dismissalBtn.addEventListener("click", invokeDeactivationSequence);
        backdropContainer.addEventListener("click", (e) => {
            if (e.target === backdropContainer) invokeDeactivationSequence();
        });
    }
}

/**
 * ============================================================================
 * 5. INTERACTIVE COMPONENT BEHAVIORAL CONTROLLERS (Interactive Modules)
 * ============================================================================
 */
class UIStateManager {
    static initNavigationSystem() {
        const desktopMenu = document.getElementById("desktop-primary-nav-menu");
        const mobileMenu = document.getElementById("mobile-nav-menu");
        const mobileTrigger = document.getElementById("mobile-menu-trigger");
        const mobileSheet = document.getElementById("mobile-navigation");
        const mobileOverlay = document.getElementById("mobile-nav-overlay");

        if (!desktopMenu || !mobileMenu) return;

        SYSTEM_NAVIGATION_LINKS.forEach(link => {
            desktopMenu.appendChild(ElementCompilationFactory.createNavigationItem(link, false));
            mobileMenu.appendChild(ElementCompilationFactory.createNavigationItem(link, true));
        });

        const toggleMobileMenuState = (forceClose = false) => {
            const isCurrentlyExpanded = mobileTrigger.getAttribute("aria-expanded") === "true";
            const targetExpandedState = forceClose ? false : !isCurrentlyExpanded;

            mobileTrigger.setAttribute("aria-expanded", String(targetExpandedState));
            mobileTrigger.classList.toggle("burger-active", targetExpandedState);
            mobileSheet.classList.toggle("visible", targetExpandedState);
            mobileOverlay.classList.toggle("visible", targetExpandedState);
            mobileSheet.setAttribute("aria-hidden", String(!targetExpandedState));
        };

        mobileTrigger.addEventListener("click", () => toggleMobileMenuState());
        mobileOverlay.addEventListener("click", () => toggleMobileMenuState(true));

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => toggleMobileMenuState(true));
        });
    }

    static initAccordionEngine() {
        const engineRoot = document.getElementById("experience-engine-viewport-root");
        if (!engineRoot) return;

        EXPERIENCE_DATA.forEach(exp => {
            engineRoot.appendChild(ElementCompilationFactory.createAccordionItem(exp));
        });

        const primaryItem = engineRoot.querySelector(".accordion-item");
        if (primaryItem) {
            primaryItem.classList.add("accordion-item--open");
            const trigger = primaryItem.querySelector(".accordion-trigger");
            const panel = primaryItem.querySelector(".accordion-panel");
            trigger.setAttribute("aria-expanded", "true");
            panel.style.maxHeight = panel.scrollHeight + "px";
            trigger.querySelector(".accordion-icon").textContent = "-";
        }

        engineRoot.addEventListener("click", (event) => {
            const trigger = event.target.closest(".accordion-trigger");
            if (!trigger) return;

            const currentItem = trigger.closest(".accordion-item");
            const currentPanel = currentItem.querySelector(".accordion-panel");
            const isOpened = currentItem.classList.contains("accordion-item--open");
            const dynamicIndicator = trigger.querySelector(".accordion-icon");

            const activeOpenSiblings = engineRoot.querySelectorAll(".accordion-item--open");
            activeOpenSiblings.forEach(sib => {
                sib.classList.remove("accordion-item--open");
                sib.querySelector(".accordion-panel").style.maxHeight = "0px";
                sib.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
                sib.querySelector(".accordion-icon").textContent = "+";
            });

            if (!isOpened) {
                currentItem.classList.add("accordion-item--open");
                currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
                trigger.setAttribute("aria-expanded", "true");
                dynamicIndicator.textContent = "-";
            }
        });
    }

    static initHeaderTransformationScrollObserver() {
        const header = document.getElementById("app-navigation");
        if (!header) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }, { passive: true });
    }

    static initActiveSectionScrollDetectionObserver() {
        const navigationalTargetLinks = document.querySelectorAll(".nav-menu .nav-link, #mobile-nav-menu .nav-link");
        const structuralSectionTargets = document.querySelectorAll("main > section, header, main, #education");

        const structuralIntersectionSettings = {
            root: null,
            rootMargin: "-25% 0px -65% 0px",
            threshold: 0
        };

        const intersectionProcessCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const dynamicAnchorTargetId = `#${entry.target.id}`;
                    navigationalTargetLinks.forEach(link => {
                        if (link.getAttribute("href") === dynamicAnchorTargetId) {
                            link.classList.add("active-nav-item");
                        } else {
                            link.classList.remove("active-nav-item");
                        }
                    });
                }
            });
        };

        const intersectionTrackingPipeline = new IntersectionObserver(intersectionProcessCallback, structuralIntersectionSettings);
        structuralSectionTargets.forEach(section => {
            if (section.id) intersectionTrackingPipeline.observe(section);
        });
    }
}

/**
 * ============================================================================
 * 6. INITIALIZATION PIPELINE INTERFACES & RUNTIME SYSTEM INITIALIZERS
 * ============================================================================
 */
class MainApplicationRuntimeEngine {
    static compileMetadataSystemMetrics() {
        document.getElementById("meta-title").textContent = METADATA_CONFIG.title;
        document.getElementById("meta-desc").setAttribute("content", METADATA_CONFIG.description);
        document.getElementById("nav-brand-title").textContent = "Osama Barakat";
        document.getElementById("nav-brand-subtitle").textContent = "DATA SCIENTIST";
        document.getElementById("current-year-token").textContent = String(new Date().getFullYear());
        document.getElementById("footer-branding-token").textContent = METADATA_CONFIG.branding;

        const footerLinksContainer = document.getElementById("footer-links-viewport-root");
        if (footerLinksContainer) {
            METADATA_CONFIG.footerLinks.forEach(link => {
                const el = document.createElement("a");
                el.href = link.href;
                el.textContent = link.label;
                el.style.color = "inherit";
                el.style.textDecoration = "none";
                footerLinksContainer.appendChild(el);
            });
        }
    }

    static compileFunctionalLayoutViews() {
        const heroRoot = document.getElementById("hero-layout-viewport-root");
        if (heroRoot) {
            heroRoot.innerHTML = `
                <div style="max-width: 860px;">
                    <h1 class="hero-title">${HERO_CONTENT_CONFIG.title}</h1>
                    <p class="hero-desc">${HERO_CONTENT_CONFIG.description}</p>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                        <a href="${HERO_CONTENT_CONFIG.primaryCTA.anchor}" class="btn btn--primary">${HERO_CONTENT_CONFIG.primaryCTA.label}</a>
                        <a href="${HERO_CONTENT_CONFIG.secondaryCTA.anchor}" class="btn btn--ghost">${HERO_CONTENT_CONFIG.secondaryCTA.label}</a>
                    </div>
                </div>
            `;
        }

        document.getElementById("value-section-title").textContent = VALUE_SECTION_TEXT.title;
        document.getElementById("value-section-subtitle").textContent = VALUE_SECTION_TEXT.subtitle;

        const expIntroRoot = document.getElementById("experience-intro-viewport-root");
        if (expIntroRoot) {
            expIntroRoot.innerHTML = `
                <div style="position: sticky; top: 120px;">
                    <span class="chip" style="color:var(--brand-primary); margin-bottom:16px;">Professional Timeline</span>
                    <h2 class="section-title" style="margin-bottom:16px;">Enterprise Operational Experience</h2>
                    <p class="section-subtitle" style="margin-bottom:24px;">Deploying data architecture and automation systems across high-throughput production frameworks to optimize workflow scale metrics.</p>
                    <a href="#contact" class="btn btn--primary">Request Technical Case Studies</a>
                </div>
            `;
        }

        new FeaturedAIOrientedLayoutEngine("ai-solutions-viewport-root", AI_SOLUTIONS_DATA);
        new SkillsLayoutOrchestrator("skills-matrix-viewport-root", SKILLS_DATA);

        const eduRoot = document.getElementById("education-engine-viewport-root");
        if (eduRoot) {
            EDUCATION_DATA.forEach(edu => {
                eduRoot.appendChild(ElementCompilationFactory.createTimelineCard(edu));
            });
        }

        const langRoot = document.getElementById("languages-matrix-viewport-root");
        if (langRoot) {
            LANGUAGES_DATA.forEach(lang => {
                langRoot.appendChild(ElementCompilationFactory.createLanguageCard(lang));
            });
        }

        document.getElementById("contact-section-title").textContent = CONTACT_SECTION_TEXT.title;
        document.getElementById("contact-section-subtitle").textContent = CONTACT_SECTION_TEXT.subtitle;
        const contactRoot = document.getElementById("contact-channels-viewport-root");
        if (contactRoot) {
            CONTACT_DATA.forEach(channel => {
                contactRoot.appendChild(ElementCompilationFactory.createContactCard(channel));
            });
        }
    }

    static initializeSystemCoreInfrastructure() {
        this.compileMetadataSystemMetrics();
        this.compileFunctionalLayoutViews();
        this.initPerformanceMonitor();
        new ApplicationThemeEngine();
        new MobileSliderOrchestrator("value-cards-viewport-root", VALUE_CARDS_DATA);
        
        UIStateManager.initNavigationSystem();
        UIStateManager.initAccordionEngine();
        UIStateManager.initHeaderTransformationScrollObserver();
        UIStateManager.initActiveSectionScrollDetectionObserver();
    }

    static initPerformanceMonitor() {
    // Basic observer for Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("Performance LCP:", Math.round(lastEntry.startTime) + "ms");
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => MainApplicationRuntimeEngine.initializeSystemCoreInfrastructure());
} else {
    MainApplicationRuntimeEngine.initializeSystemCoreInfrastructure();
}


