const portfolioData = {
  fr: {
    skip: "Aller au contenu principal",
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", certifications: "Attestations", contact: "Contact" },
    hero: {
      eyebrow: "Portfolio professionnel trilingue",
      title: "Étudiant en Réseaux & Sécurité Informatique",
      lead: "Je conçois, sécurise et analyse des environnements réseau à travers des laboratoires pratiques en cybersécurité, monitoring et administration système.",
      badge1: "Cybersécurité", badge2: "Réseaux Cisco", badge3: "Pentesting Web", badge4: "SOC & Monitoring",
      primary: "Voir mes projets", secondary: "Me contacter"
    },
    stats: { projects: "Projets réalisés", certs: "Attestations", languages: "Langues" },
    profile: { role: "Étudiant en Réseaux et Sécurité Informatique" },
    about: {
      eyebrow: "Profil", title: "Un profil orienté pratique, sécurité et infrastructure",
      p1: "Je suis étudiant en Réseaux et Sécurité Informatique, passionné par la cybersécurité, la protection des systèmes, l’analyse de vulnérabilités et l’administration réseau.",
      p2: "Mon objectif est de devenir ingénieur en cybersécurité spécialisé en pentesting et sécurisation d’infrastructures, avec une approche rigoureuse, documentée et professionnelle.",
      step1: "Laboratoires pratiques : DVWA, WebGoat, Burp Suite, OWASP ZAP.",
      step2: "Analyse réseau : Wireshark, DNS, HTTP, TLS et rapports d’incidents.",
      step3: "Infrastructure : VLAN, OSPF, RIP, DHCP, VTP et simulation Packet Tracer."
    },
    skills: { eyebrow: "Expertise", title: "Compétences techniques", subtitle: "Un socle solide pour intervenir sur les réseaux, systèmes, applications web et environnements de sécurité." },
    projects: { eyebrow: "Réalisations", title: "Projets sélectionnés", subtitle: "Des projets concrets montrant mes compétences en développement, réseau, cybersécurité et supervision.", searchLabel: "Recherche", searchPlaceholder: "Rechercher un projet...", all: "Tous", details: "Détails", github: "GitHub", noResult: "Aucun projet ne correspond à votre recherche." },
    certs: { eyebrow: "Crédibilité", title: "Attestations & formations" },
    exp: { eyebrow: "Expérience", title: "Stages effectués" },
    hobbies: { eyebrow: "Équilibre", title: "Hobbies & activités" },
    contact: { eyebrow: "Contact", title: "Discutons d’une collaboration, d’un stage ou d’un projet", subtitle: "Je suis disponible pour échanger autour de la cybersécurité, des réseaux et des projets web sécurisés." },
    form: { name: "Nom complet", email: "Adresse email", subject: "Sujet", message: "Message", submit: "Préparer l’email", required: "Veuillez remplir correctement les champs obligatoires.", success: "Votre message est prêt dans votre application email." },
    footer: { rights: "Tous droits réservés.", top: "Retour en haut" },
    filters: { dev: "Développement", network: "Réseau", cyber: "Cybersécurité", soc: "SOC" },
    skillsList: [
      { icon: "</>", title: "Développement Web", desc: "HTML5, CSS3, JavaScript et interfaces responsive.", value: 68 },
      { icon: "▦", title: "Réseaux", desc: "TCP/IP, VLAN, OSPF, RIP, DHCP, VTP et Packet Tracer.", value: 78 },
      { icon: "🛡", title: "Cybersécurité", desc: "Wireshark, Burp Suite, DVWA, WebGoat et OWASP ZAP.", value: 72 },
      { icon: "⌁", title: "Systèmes", desc: "Linux Kali, Ubuntu, Parrot et environnement Windows.", value: 66 }
    ],
    projectsList: [
      { id: "mortgage", cat: ["dev"], img: "assets/img/project-mortgage.jpg", title: "Calculateur de prêt hypothécaire", desc: "Application web pour calculer une mensualité selon le capital, le taux annuel et la durée du prêt.", long: "Projet front-end en HTML, CSS et JavaScript, avec validation des entrées et affichage clair du résultat pour améliorer l’expérience utilisateur.", detail: "https://www.linkedin.com/posts/activity-7368319088340783106-3uHG?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Calculateur-de-pr-t" },
      { id: "cisco", cat: ["network"], img: "assets/img/project-cisco.png", title: "TP Packet Tracer avancé", desc: "Configuration VLAN, OSPF, RIP, DHCP, VTP, redistribution de routes et tests de connectivité.", long: "Simulation réseau complète pour renforcer la compréhension des protocoles de routage, segmentation VLAN et services réseau.", detail: "https://github.com/issahassanyoussouf/Tp.git", github: "https://github.com/issahassanyoussouf/Tp.git" },
      { id: "dvwa", cat: ["cyber"], img: "assets/img/project-dvwa.png", title: "Laboratoire DVWA sur Kali Linux", desc: "Installation, configuration et exercices de pentesting web sur un environnement vulnérable contrôlé.", long: "Travaux pratiques sur XSS, SQLi, authentification et bonnes pratiques de sécurisation web, dans un contexte légal et pédagogique.", detail: "https://www.linkedin.com/posts/ugcPost-7358256563439976449-BAw2?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_01.git" },
      { id: "wireshark", cat: ["network", "cyber"], img: "assets/img/project-wireshark.png", title: "Analyse de trafic avec Wireshark", desc: "Capture et analyse DNS, HTTP et TLS, avec rapport d’incidents et recommandations.", long: "Projet d’analyse réseau orienté investigation, compréhension des flux et détection d’indices utiles pour la sécurité opérationnelle.", detail: "https://www.linkedin.com/posts/activity-7349256863961575424-BFlb?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Internship" },
      { id: "splunk", cat: ["soc", "cyber"], img: "assets/img/project-splunk.png", title: "Monitoring d’alertes avec Splunk", desc: "Analyse de journaux simulés, détection d’activités suspectes, classification et atténuation.", long: "Projet SOC basé sur Splunk pour rechercher, corréler et interpréter des événements de sécurité afin de produire des conclusions exploitables.", detail: "https://www.linkedin.com/posts/ugcPost-7360102931443974144-UGKs?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_02.git" },
      { id: "share", cat: ["dev", "cyber"], img: "assets/img/project-share.png", title: "Système de partage sécurisé", desc: "Application Flask pour transferts de fichiers sécurisés avec AES-256-GCM et authentification par jetons.", long: "Conception d’une solution web orientée sécurité, avec stockage protégé, contrôle d’accès et réflexion sur la confidentialité des données.", detail: "https://www.linkedin.com/posts/activity-7361144570258038785-zmdW?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_03.git" }
    ],
    certsList: [
      ["Développement Web — Organisation Internationale de la Francophonie", "En cours d’obtention"],
      ["Stage académique — Startech Academy", "Juin à août 2025"],
      ["Complete Ethical Hacking Course 2025 — Udemy", "Août 2025"],
      ["Cyber Security Internship — Future Interns", "Juillet à août 2025"],
      ["eCIR Prep — Netriders", "Juillet 2025"],
      ["Cybersecurity Intern — Redynox", "Juin à juillet 2025"],
      ["Cybersecurity Fundamentals — IBM", "Juin 2025"],
      ["Introduction to Cybersecurity — Cisco Networking Academy", "Juin 2025"],
      ["Cybersecurity Professional — Google", "Juin 2025"],
      ["Concepts de contrôle d’accès — ISC²", "Mai 2025"],
      ["XSS Exploits and Defenses — The Linux Foundation", "Avril 2025"],
      ["MOOC Cybersécurité — ANSSI", "Avril 2025"]
    ],
    expList: [
      { date: "Juin — Août 2025", title: "Stage académique chez Startech Academy", desc: "Mise en pratique du HTML, TCP/IP, VLAN, OSPF, RIP, DHCP, VTP, redistribution de routes et tests de connectivité." },
      { date: "Juillet — Août 2025", title: "Stagiaire en cybersécurité chez Future Interns", desc: "Tests de vulnérabilités web, monitoring d’alertes, gestion d’incidents simulés et conception d’un système de partage sécurisé." },
      { date: "Juin — Juillet 2025", title: "Stagiaire en cybersécurité chez Redynox", desc: "Introduction aux réseaux, analyse de trafic avec Wireshark, sécurité des applications web et analyse basique de vulnérabilités." }
    ],
    hobbiesList: [
      { icon: "⚽", title: "Football", desc: "Esprit d’équipe, discipline et endurance." },
      { icon: "📚", title: "Lecture", desc: "Poème, roman et science-fiction." },
      { icon: "🎮", title: "Jeux vidéo", desc: "Apprentissage, stratégie et logique." },
      { icon: "🚴", title: "Vélo / plein air", desc: "Activité physique et détente." }
    ]
  },
  en: {
    skip: "Skip to main content",
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", certifications: "Certificates", contact: "Contact" },
    hero: {
      eyebrow: "Professional trilingual portfolio",
      title: "Network & Information Security Student",
      lead: "I design, secure and analyze network environments through practical cybersecurity, monitoring and system administration labs.",
      badge1: "Cybersecurity", badge2: "Cisco Networks", badge3: "Web Pentesting", badge4: "SOC & Monitoring",
      primary: "View projects", secondary: "Contact me"
    },
    stats: { projects: "Completed projects", certs: "Certificates", languages: "Languages" },
    profile: { role: "Network and Information Security Student" },
    about: {
      eyebrow: "Profile", title: "A practical profile focused on security and infrastructure",
      p1: "I am a Network and Information Security student, passionate about cybersecurity, system protection, vulnerability analysis and network administration.",
      p2: "My goal is to become a cybersecurity engineer specialized in pentesting and infrastructure hardening, with a rigorous, documented and professional approach.",
      step1: "Hands-on labs: DVWA, WebGoat, Burp Suite and OWASP ZAP.",
      step2: "Network analysis: Wireshark, DNS, HTTP, TLS and incident reports.",
      step3: "Infrastructure: VLAN, OSPF, RIP, DHCP, VTP and Packet Tracer simulations."
    },
    skills: { eyebrow: "Expertise", title: "Technical skills", subtitle: "A strong foundation to work across networks, systems, web applications and security environments." },
    projects: { eyebrow: "Work", title: "Selected projects", subtitle: "Concrete projects showcasing my skills in development, networking, cybersecurity and monitoring.", searchLabel: "Search", searchPlaceholder: "Search a project...", all: "All", details: "Details", github: "GitHub", noResult: "No project matches your search." },
    certs: { eyebrow: "Credibility", title: "Certificates & training" },
    exp: { eyebrow: "Experience", title: "Internships" },
    hobbies: { eyebrow: "Balance", title: "Hobbies & activities" },
    contact: { eyebrow: "Contact", title: "Let’s discuss an internship, collaboration or project", subtitle: "I am available to exchange about cybersecurity, networking and secure web projects." },
    form: { name: "Full name", email: "Email address", subject: "Subject", message: "Message", submit: "Prepare email", required: "Please correctly complete the required fields.", success: "Your message is ready in your email application." },
    footer: { rights: "All rights reserved.", top: "Back to top" },
    filters: { dev: "Development", network: "Networking", cyber: "Cybersecurity", soc: "SOC" },
    skillsList: [
      { icon: "</>", title: "Web Development", desc: "HTML5, CSS3, JavaScript and responsive interfaces.", value: 68 },
      { icon: "▦", title: "Networking", desc: "TCP/IP, VLAN, OSPF, RIP, DHCP, VTP and Packet Tracer.", value: 78 },
      { icon: "🛡", title: "Cybersecurity", desc: "Wireshark, Burp Suite, DVWA, WebGoat and OWASP ZAP.", value: 72 },
      { icon: "⌁", title: "Systems", desc: "Kali Linux, Ubuntu, Parrot and Windows environments.", value: 66 }
    ],
    projectsList: [
      { id: "mortgage", cat: ["dev"], img: "assets/img/project-mortgage.jpg", title: "Mortgage loan calculator", desc: "Web app to calculate monthly payments based on principal, annual rate and loan duration.", long: "Front-end project built with HTML, CSS and JavaScript, including input validation and clear result display for a better user experience.", detail: "https://www.linkedin.com/posts/activity-7368319088340783106-3uHG?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Calculateur-de-pr-t" },
      { id: "cisco", cat: ["network"], img: "assets/img/project-cisco.png", title: "Advanced Packet Tracer lab", desc: "VLAN, OSPF, RIP, DHCP, VTP, route redistribution and connectivity testing.", long: "Complete network simulation to strengthen understanding of routing protocols, VLAN segmentation and network services.", detail: "https://github.com/issahassanyoussouf/Tp.git", github: "https://github.com/issahassanyoussouf/Tp.git" },
      { id: "dvwa", cat: ["cyber"], img: "assets/img/project-dvwa.png", title: "DVWA lab on Kali Linux", desc: "Installation, configuration and web pentesting exercises in a controlled vulnerable environment.", long: "Hands-on practice on XSS, SQL injection, authentication and web hardening best practices in a legal educational context.", detail: "https://www.linkedin.com/posts/ugcPost-7358256563439976449-BAw2?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_01.git" },
      { id: "wireshark", cat: ["network", "cyber"], img: "assets/img/project-wireshark.png", title: "Traffic analysis with Wireshark", desc: "DNS, HTTP and TLS capture analysis with incident reports and recommendations.", long: "Network investigation project focused on understanding traffic flows and detecting useful security indicators.", detail: "https://www.linkedin.com/posts/activity-7349256863961575424-BFlb?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Internship" },
      { id: "splunk", cat: ["soc", "cyber"], img: "assets/img/project-splunk.png", title: "Alert monitoring with Splunk", desc: "Simulated log analysis, suspicious activity detection, classification and mitigation.", long: "SOC-oriented Splunk project to search, correlate and interpret security events and produce actionable conclusions.", detail: "https://www.linkedin.com/posts/ugcPost-7360102931443974144-UGKs?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_02.git" },
      { id: "share", cat: ["dev", "cyber"], img: "assets/img/project-share.png", title: "Secure file sharing system", desc: "Flask application for secure file transfers with AES-256-GCM and token-based authentication.", long: "Security-oriented web solution with protected storage, access control and data confidentiality considerations.", detail: "https://www.linkedin.com/posts/activity-7361144570258038785-zmdW?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_03.git" }
    ],
    certsList: [
      ["Web Development — International Organisation of La Francophonie", "In progress"],
      ["Academic internship — Startech Academy", "June to August 2025"],
      ["Complete Ethical Hacking Course 2025 — Udemy", "August 2025"],
      ["Cyber Security Internship — Future Interns", "July to August 2025"],
      ["eCIR Prep — Netriders", "July 2025"],
      ["Cybersecurity Intern — Redynox", "June to July 2025"],
      ["Cybersecurity Fundamentals — IBM", "June 2025"],
      ["Introduction to Cybersecurity — Cisco Networking Academy", "June 2025"],
      ["Cybersecurity Professional — Google", "June 2025"],
      ["Access Control Concepts — ISC²", "May 2025"],
      ["XSS Exploits and Defenses — The Linux Foundation", "April 2025"],
      ["MOOC Cybersecurity — ANSSI", "April 2025"]
    ],
    expList: [
      { date: "June — August 2025", title: "Academic intern at Startech Academy", desc: "Hands-on practice with HTML, TCP/IP, VLAN, OSPF, RIP, DHCP, VTP, route redistribution and connectivity testing." },
      { date: "July — August 2025", title: "Cybersecurity intern at Future Interns", desc: "Web vulnerability testing, alert monitoring, simulated incident handling and secure sharing system design." },
      { date: "June — July 2025", title: "Cybersecurity intern at Redynox", desc: "Introduction to networks, Wireshark traffic analysis, web application security and basic vulnerability analysis." }
    ],
    hobbiesList: [
      { icon: "⚽", title: "Football", desc: "Team spirit, discipline and endurance." },
      { icon: "📚", title: "Reading", desc: "Poetry, novels and science fiction." },
      { icon: "🎮", title: "Video games", desc: "Learning, strategy and logic." },
      { icon: "🚴", title: "Cycling / outdoors", desc: "Physical activity and relaxation." }
    ]
  },
  ar: {
    skip: "الانتقال إلى المحتوى الرئيسي",
    nav: { home: "الرئيسية", about: "نبذة", skills: "المهارات", projects: "المشاريع", certifications: "الشهادات", contact: "تواصل" },
    hero: {
      eyebrow: "ملف أعمال احترافي بثلاث لغات",
      title: "طالب في الشبكات وأمن المعلومات",
      lead: "أصمم وأؤمّن وأحلل بيئات الشبكات عبر مختبرات عملية في الأمن السيبراني والمراقبة وإدارة الأنظمة.",
      badge1: "الأمن السيبراني", badge2: "شبكات سيسكو", badge3: "اختبار اختراق الويب", badge4: "المراقبة و SOC",
      primary: "عرض المشاريع", secondary: "تواصل معي"
    },
    stats: { projects: "مشاريع منجزة", certs: "شهادات", languages: "لغات" },
    profile: { role: "طالب في الشبكات وأمن المعلومات" },
    about: {
      eyebrow: "الملف الشخصي", title: "ملف عملي يركز على الأمن والبنية التحتية",
      p1: "أنا طالب في الشبكات وأمن المعلومات، مهتم بالأمن السيبراني وحماية الأنظمة وتحليل الثغرات وإدارة الشبكات.",
      p2: "هدفي أن أصبح مهندس أمن سيبراني متخصصًا في اختبار الاختراق وتأمين البنى التحتية، بمنهجية دقيقة وموثقة واحترافية.",
      step1: "مختبرات عملية: DVWA و WebGoat و Burp Suite و OWASP ZAP.",
      step2: "تحليل الشبكات: Wireshark و DNS و HTTP و TLS وتقارير الحوادث.",
      step3: "البنية التحتية: VLAN و OSPF و RIP و DHCP و VTP ومحاكاة Packet Tracer."
    },
    skills: { eyebrow: "الخبرة", title: "المهارات التقنية", subtitle: "أساس قوي للعمل على الشبكات والأنظمة وتطبيقات الويب وبيئات الأمن." },
    projects: { eyebrow: "الأعمال", title: "مشاريع مختارة", subtitle: "مشاريع عملية تُظهر مهاراتي في التطوير والشبكات والأمن السيبراني والمراقبة.", searchLabel: "بحث", searchPlaceholder: "ابحث عن مشروع...", all: "الكل", details: "التفاصيل", github: "GitHub", noResult: "لا يوجد مشروع مطابق لبحثك." },
    certs: { eyebrow: "المصداقية", title: "الشهادات والتكوين" },
    exp: { eyebrow: "الخبرة", title: "التدريبات" },
    hobbies: { eyebrow: "التوازن", title: "الهوايات والأنشطة" },
    contact: { eyebrow: "تواصل", title: "لنناقش تدريبًا أو تعاونًا أو مشروعًا", subtitle: "أنا متاح للتواصل حول الأمن السيبراني والشبكات ومشاريع الويب الآمنة." },
    form: { name: "الاسم الكامل", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة", submit: "تحضير البريد", required: "يرجى ملء الحقول المطلوبة بشكل صحيح.", success: "رسالتك جاهزة في تطبيق البريد الإلكتروني." },
    footer: { rights: "جميع الحقوق محفوظة.", top: "العودة للأعلى" },
    filters: { dev: "تطوير", network: "شبكات", cyber: "أمن سيبراني", soc: "SOC" },
    skillsList: [
      { icon: "</>", title: "تطوير الويب", desc: "HTML5 و CSS3 و JavaScript وواجهات متجاوبة.", value: 68 },
      { icon: "▦", title: "الشبكات", desc: "TCP/IP و VLAN و OSPF و RIP و DHCP و VTP و Packet Tracer.", value: 78 },
      { icon: "🛡", title: "الأمن السيبراني", desc: "Wireshark و Burp Suite و DVWA و WebGoat و OWASP ZAP.", value: 72 },
      { icon: "⌁", title: "الأنظمة", desc: "Linux Kali و Ubuntu و Parrot وبيئة Windows.", value: 66 }
    ],
    projectsList: [
      { id: "mortgage", cat: ["dev"], img: "assets/img/project-mortgage.jpg", title: "حاسبة القرض العقاري", desc: "تطبيق ويب لحساب الدفعة الشهرية حسب المبلغ وسعر الفائدة السنوي ومدة القرض.", long: "مشروع واجهة أمامية باستخدام HTML و CSS و JavaScript مع التحقق من المدخلات وعرض النتيجة بوضوح لتحسين تجربة المستخدم.", detail: "https://www.linkedin.com/posts/activity-7368319088340783106-3uHG?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Calculateur-de-pr-t" },
      { id: "cisco", cat: ["network"], img: "assets/img/project-cisco.png", title: "مختبر Packet Tracer متقدم", desc: "إعداد VLAN و OSPF و RIP و DHCP و VTP وإعادة توزيع المسارات واختبار الاتصال.", long: "محاكاة شبكة كاملة لتعزيز فهم بروتوكولات التوجيه وتقسيم VLAN وخدمات الشبكات.", detail: "https://github.com/issahassanyoussouf/Tp.git", github: "https://github.com/issahassanyoussouf/Tp.git" },
      { id: "dvwa", cat: ["cyber"], img: "assets/img/project-dvwa.png", title: "مختبر DVWA على Kali Linux", desc: "تثبيت وإعداد وتمارين اختبار اختراق الويب ضمن بيئة ضعيفة ومراقبة.", long: "تطبيقات عملية على XSS و SQLi والمصادقة وأفضل ممارسات تأمين تطبيقات الويب في سياق تعليمي قانوني.", detail: "https://www.linkedin.com/posts/ugcPost-7358256563439976449-BAw2?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_01.git" },
      { id: "wireshark", cat: ["network", "cyber"], img: "assets/img/project-wireshark.png", title: "تحليل المرور باستخدام Wireshark", desc: "التقاط وتحليل DNS و HTTP و TLS مع تقارير حوادث وتوصيات.", long: "مشروع تحليل شبكات موجه للتحقيق وفهم تدفقات المرور واكتشاف مؤشرات مفيدة للأمن.", detail: "https://www.linkedin.com/posts/activity-7349256863961575424-BFlb?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/Internship" },
      { id: "splunk", cat: ["soc", "cyber"], img: "assets/img/project-splunk.png", title: "مراقبة التنبيهات باستخدام Splunk", desc: "تحليل سجلات محاكاة، اكتشاف نشاط مشبوه، التصنيف والتخفيف.", long: "مشروع SOC قائم على Splunk للبحث والربط وتفسير أحداث الأمن وإنتاج نتائج قابلة للتنفيذ.", detail: "https://www.linkedin.com/posts/ugcPost-7360102931443974144-UGKs?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_02.git" },
      { id: "share", cat: ["dev", "cyber"], img: "assets/img/project-share.png", title: "نظام مشاركة ملفات آمن", desc: "تطبيق Flask لنقل الملفات بشكل آمن باستخدام AES-256-GCM ومصادقة بالرموز.", long: "حل ويب موجه للأمن مع تخزين محمي وتحكم في الوصول ومراعاة سرية البيانات.", detail: "https://www.linkedin.com/posts/activity-7361144570258038785-zmdW?utm_source=social_share_video_v2&utm_medium=android_app", github: "https://github.com/issahassanyoussouf/FUTURE_CS_03.git" }
    ],
    certsList: [
      ["تطوير الويب — المنظمة الدولية للفرنكوفونية", "قيد الإنجاز"],
      ["تدريب أكاديمي — Startech Academy", "يونيو إلى أغسطس 2025"],
      ["دورة الاختراق الأخلاقي الكاملة 2025 — Udemy", "أغسطس 2025"],
      ["تدريب الأمن السيبراني — Future Interns", "يوليو إلى أغسطس 2025"],
      ["تحضير eCIR — Netriders", "يوليو 2025"],
      ["متدرب أمن سيبراني — Redynox", "يونيو إلى يوليو 2025"],
      ["أساسيات الأمن السيبراني — IBM", "يونيو 2025"],
      ["مقدمة في الأمن السيبراني — Cisco Networking Academy", "يونيو 2025"],
      ["محترف الأمن السيبراني — Google", "يونيو 2025"],
      ["مفاهيم التحكم في الوصول — ISC²", "مايو 2025"],
      ["ثغرات XSS والدفاعات — The Linux Foundation", "أبريل 2025"],
      ["MOOC الأمن السيبراني — ANSSI", "أبريل 2025"]
    ],
    expList: [
      { date: "يونيو — أغسطس 2025", title: "متدرب أكاديمي في Startech Academy", desc: "تطبيق عملي لـ HTML و TCP/IP و VLAN و OSPF و RIP و DHCP و VTP وإعادة توزيع المسارات واختبار الاتصال." },
      { date: "يوليو — أغسطس 2025", title: "متدرب أمن سيبراني في Future Interns", desc: "اختبار ثغرات الويب، مراقبة التنبيهات، التعامل مع حوادث محاكاة وتصميم نظام مشاركة آمن." },
      { date: "يونيو — يوليو 2025", title: "متدرب أمن سيبراني في Redynox", desc: "مقدمة في الشبكات، تحليل المرور باستخدام Wireshark، أمن تطبيقات الويب وتحليل أساسي للثغرات." }
    ],
    hobbiesList: [
      { icon: "⚽", title: "كرة القدم", desc: "روح الفريق والانضباط والتحمل." },
      { icon: "📚", title: "القراءة", desc: "الشعر والروايات والخيال العلمي." },
      { icon: "🎮", title: "ألعاب الفيديو", desc: "تعلم واستراتيجية ومنطق." },
      { icon: "🚴", title: "الدراجة والهواء الطلق", desc: "نشاط بدني واسترخاء." }
    ]
  }
};

const state = {
  lang: localStorage.getItem('portfolio-lang') || 'fr',
  theme: localStorage.getItem('portfolio-theme') || 'dark',
  filter: 'all',
  search: ''
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function t(path) {
  return path.split('.').reduce((obj, key) => (obj || {})[key], portfolioData[state.lang]) || path;
}

function setLanguage(lang) {
  if (!portfolioData[lang]) return;
  state.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = lang === 'en'
    ? 'Issa Hassan Youssouf — Cybersecurity Portfolio'
    : lang === 'ar'
      ? 'عيسى حسن يوسف — ملف الأمن السيبراني'
      : 'Issa Hassan Youssouf — Portfolio Cybersécurité';
  applyTranslations();
  renderAll();
  $$('.lang-btn').forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
}

function applyTranslations() {
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

function setTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', state.theme);
  document.documentElement.dataset.theme = state.theme;
  $('.theme-btn__icon').textContent = state.theme === 'light' ? '☀' : '☾';
}

function renderSkills() {
  const grid = $('#skillsGrid');
  grid.innerHTML = portfolioData[state.lang].skillsList.map(skill => `
    <article class="skill-card reveal">
      <div class="skill-card__icon" aria-hidden="true">${escapeHtml(skill.icon)}</div>
      <h3>${escapeHtml(skill.title)}</h3>
      <p>${escapeHtml(skill.desc)}</p>
      <div class="progress" aria-label="${escapeHtml(skill.title)} ${skill.value}%"><span class="progress__bar" style="--value:${skill.value}%"></span></div>
    </article>
  `).join('');
}

function renderFilters() {
  const labels = portfolioData[state.lang].filters;
  const filters = ['all', 'dev', 'network', 'cyber', 'soc'];
  $('#projectFilters').innerHTML = filters.map(filter => `
    <button type="button" class="filter-btn ${state.filter === filter ? 'is-active' : ''}" data-filter="${filter}">
      ${filter === 'all' ? escapeHtml(t('projects.all')) : escapeHtml(labels[filter])}
    </button>
  `).join('');
}

function renderProjects() {
  const data = portfolioData[state.lang];
  const labels = data.filters;
  const search = state.search.trim().toLowerCase();
  const items = data.projectsList.filter(project => {
    const matchesFilter = state.filter === 'all' || project.cat.includes(state.filter);
    const content = `${project.title} ${project.desc} ${project.long}`.toLowerCase();
    return matchesFilter && (!search || content.includes(search));
  });

  $('#projectsGrid').innerHTML = items.length ? items.map(project => `
    <article class="project-card reveal" data-project-id="${project.id}">
      <img class="project-card__image" src="${project.img}" alt="${escapeHtml(project.title)}" loading="lazy">
      <div class="project-card__body">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.desc)}</p>
        <div class="project-card__tags">
          ${project.cat.map(cat => `<span class="tag">${escapeHtml(labels[cat])}</span>`).join('')}
        </div>
        <div class="project-card__actions">
          <button class="btn btn--primary btn--small" type="button" data-open-project="${project.id}">${escapeHtml(data.projects.details)}</button>
          <a class="btn btn--ghost btn--small" href="${project.github}" target="_blank" rel="noopener noreferrer">${escapeHtml(data.projects.github)}</a>
        </div>
      </div>
    </article>
  `).join('') : `<p class="empty-state">${escapeHtml(data.projects.noResult)}</p>`;
}

function renderCerts() {
  $('#certGrid').innerHTML = portfolioData[state.lang].certsList.map(([title, date]) => `
    <article class="cert-card reveal"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(date)}</span></article>
  `).join('');
}

function renderExperience() {
  $('#experienceList').innerHTML = portfolioData[state.lang].expList.map(item => `
    <article class="experience-card reveal">
      <div class="experience-card__date">${escapeHtml(item.date)}</div>
      <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p></div>
    </article>
  `).join('');
}

function renderHobbies() {
  $('#hobbyGrid').innerHTML = portfolioData[state.lang].hobbiesList.map(item => `
    <article class="hobby-card reveal"><span aria-hidden="true">${escapeHtml(item.icon)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p></article>
  `).join('');
}

function renderAll() {
  renderSkills();
  renderFilters();
  renderProjects();
  renderCerts();
  renderExperience();
  renderHobbies();
  observeReveals();
}

function openProject(projectId) {
  const project = portfolioData[state.lang].projectsList.find(item => item.id === projectId);
  if (!project) return;
  const labels = portfolioData[state.lang].filters;
  $('#modalBody').innerHTML = `
    <img src="${project.img}" alt="${escapeHtml(project.title)}">
    <p class="eyebrow">${project.cat.map(cat => escapeHtml(labels[cat])).join(' · ')}</p>
    <h2 id="modalTitle">${escapeHtml(project.title)}</h2>
    <p>${escapeHtml(project.long)}</p>
    <div class="project-card__actions">
      <a class="btn btn--primary" href="${project.detail}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('projects.details'))}</a>
      <a class="btn btn--ghost" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  `;
  const modal = $('#projectModal');
  if (typeof modal.showModal === 'function') {
    modal.showModal();
    document.body.classList.add('is-locked');
  }
}

let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  $$('.reveal').forEach(el => revealObserver.observe(el));
}

function setupNavigation() {
  const toggle = $('.nav__toggle');
  const menu = $('#navMenu');
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  $$('.nav__link').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  const sections = $$('main section[id]');
  const navLinks = $$('.nav__link');
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(section => navObserver.observe(section));
}

function setupForm() {
  $('#contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const subject = $('#subject').value.trim() || 'Portfolio contact';
    const message = $('#message').value.trim();
    const status = $('#formStatus');
    $$('.form-row', form).forEach(row => row.classList.remove('is-error'));
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !message) {
      if (!name) $('#name').closest('.form-row').classList.add('is-error');
      if (!validEmail) $('#email').closest('.form-row').classList.add('is-error');
      if (!message) $('#message').closest('.form-row').classList.add('is-error');
      status.textContent = t('form.required');
      status.className = 'form-status is-error';
      return;
    }
    const body = `${message}\n\n---\n${name}\n${email}`;
    window.location.href = `mailto:issahasyouf68@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = t('form.success');
    status.className = 'form-status is-success';
  });
}

function setupEvents() {
  $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
  $('#themeToggle').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  $('#projectSearch').addEventListener('input', event => {
    state.search = event.target.value;
    renderProjects();
    observeReveals();
  });
  document.addEventListener('click', event => {
    const filterBtn = event.target.closest('[data-filter]');
    if (filterBtn) {
      state.filter = filterBtn.dataset.filter;
      renderFilters();
      renderProjects();
      observeReveals();
    }
    const openBtn = event.target.closest('[data-open-project]');
    if (openBtn) openProject(openBtn.dataset.openProject);
  });
  $('#modalClose').addEventListener('click', () => {
    $('#projectModal').close();
    document.body.classList.remove('is-locked');
  });
  $('#projectModal').addEventListener('close', () => document.body.classList.remove('is-locked'));
  setupNavigation();
  setupForm();
}

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  setTheme(state.theme);
  setLanguage(state.lang);
  setupEvents();
});
