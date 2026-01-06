// Helper function to get local image path
function getImagePath(recipeName) {
    const imageMap = {
        'Dry Fruits Laddu': 'Dry Fruits Laddu.png',
        'Coconut Burfi': 'Coconut Burfi.png',
        'Beetroot Halwa': 'Beetroot Halwa.png',
        'Lemon Rice (Flattened Rice)': 'Lemon Rice.png',
        'Curd Rice': 'Curd Rice.png',
        'Carrot Poriyal': 'Carrot Poriyal.png',
        'Sprout Salad': 'Sprout Salad.png',
        'Green (Spinach) Salad': 'Green (Spinach) Salad.png',
        // Fruit Salad: use the newly provided image.png
        'Fruit Salad': 'image.png',
        'Groundnut Salad': 'Groundnut Salad.png',
        'Tomato Chat': 'Tomato Chat.png',
        'Red Aval Payasam': 'Red Aval Payasam.png',
        'Elaneer Payasam': 'Elaneer Payasam.png',
        'Instant Mango Pickle': 'Instant Mango Pickle.png',
        'Gooseberry Pickle': 'Gooseberry Pickle.png',
        'Aloe Vera Juice': 'Aloe Vera Juice.png',
        'Pudina Juice': 'Pudina Juice.png',
        'Kulukki Sarbath': 'Kulukki Sarbath.png'
    };
    
    const imageName = imageMap[recipeName] || 'placeholder.png';
    return `images/${imageName}`;
}

// Recipe Data
const recipes = [
    {
        id: 1,
        image: getImagePath('Dry Fruits Laddu'),
        name: { en: "Dry Fruits Laddu", te: "డ్రై ఫ్రూట్స్ లడ్డు", hi: "ड्राई फ्रूट्स लड्डू" },
        benefits: {
            en: ["Provides instant energy due to natural sugars from dates", "Rich in iron, calcium, and healthy fats", "Improves brain function and stamina", "Strengthens immunity"],
            te: ["ఖర్జూరాల నుండి సహజ చక్కెరల వల్ల తక్షణ శక్తిని అందిస్తుంది", "ఐరన్, కాల్షియం మరియు ఆరోగ్యకరమైన కొవ్వులు అధికంగా ఉంటాయి", "మెదడు పనితీరు మరియు శక్తిని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది"],
            hi: ["खजूर से प्राकृतिक शर्करा के कारण तुरंत ऊर्जा प्रदान करता है", "आयरन, कैल्शियम और स्वस्थ वसा से भरपूर", "मस्तिष्क कार्य और सहनशक्ति में सुधार करता है", "रोग प्रतिरोधक क्षमता को मजबूत करता है"]
        }
    },
    {
        id: 2,
        image: getImagePath('Coconut Burfi'),
        name: { en: "Coconut Burfi", te: "కొబ్బరి బర్ఫీ", hi: "नारियल बर्फी" },
        benefits: {
            en: ["Good source of healthy fats and fiber", "Improves digestion", "Provides quick energy", "Supports heart health when consumed in moderation"],
            te: ["ఆరోగ్యకరమైన కొవ్వులు మరియు ఫైబర్ యొక్క మంచి మూలం", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "త్వరిత శక్తిని అందిస్తుంది", "మితంగా తీసుకున్నప్పుడు గుండె ఆరోగ్యానికి తోడ్పడుతుంది"],
            hi: ["स्वस्थ वसा और फाइबर का अच्छा स्रोत", "पाचन में सुधार करता है", "त्वरित ऊर्जा प्रदान करता है", "संयमित मात्रा में सेवन करने पर हृदय स्वास्थ्य का समर्थन करता है"]
        }
    },
    {
        id: 3,
        image: getImagePath('Beetroot Halwa'),
        name: { en: "Beetroot Halwa", te: "బీట్రూట్ హల్వా", hi: "चुकंदर का हलवा" },
        benefits: {
            en: ["Improves blood circulation", "Increases hemoglobin levels", "Boosts stamina and endurance", "Supports liver detoxification"],
            te: ["రక్త ప్రసరణను మెరుగుపరుస్తుంది", "హిమోగ్లోబిన్ స్థాయిలను పెంచుతుంది", "శక్తి మరియు సహనశక్తిని పెంచుతుంది", "కాలేయ విషపూరితత్వానికి మద్దతు ఇస్తుంది"],
            hi: ["रक्त संचार में सुधार करता है", "हीमोग्लोबिन के स्तर को बढ़ाता है", "सहनशक्ति और धीरज बढ़ाता है", "लिवर डिटॉक्सिफिकेशन में मदद करता है"]
        }
    },
    {
        id: 4,
        image: getImagePath('Lemon Rice (Flattened Rice)'),
        name: { en: "Lemon Rice (Flattened Rice)", te: "నిమ్మకాయ అన్నం (అటుకులు)", hi: "नींबू चावल (पोहा)" },
        benefits: {
            en: ["Easy to digest and light on the stomach", "Lemon improves immunity and digestion", "Provides instant energy", "Prevents dehydration"],
            te: ["సులభంగా జీర్ణమవుతుంది మరియు కడుపుపై తేలికగా ఉంటుంది", "నిమ్మకాయ రోగనిరోధక శక్తి మరియు జీర్ణక్రియను మెరుగుపరుస్తుంది", "తక్షణ శక్తిని అందిస్తుంది", "నిర్జలీకరణను నివారిస్తుంది"],
            hi: ["पचाने में आसान और पेट पर हल्का", "नींबू प्रतिरक्षा और पाचन में सुधार करता है", "तुरंत ऊर्जा प्रदान करता है", "निर्जलीकरण को रोकता है"]
        }
    },
    {
        id: 5,
        image: getImagePath('Curd Rice'),
        name: { en: "Curd Rice", te: "పెరుగన్నం", hi: "दही चावल" },
        benefits: {
            en: ["Improves gut health due to probiotics", "Keeps the body cool", "Enhances digestion", "Strengthens immunity"],
            te: ["ప్రోబయోటిక్స్ వల్ల పేగు ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "శరీరాన్ని చల్లగా ఉంచుతుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది"],
            hi: ["प्रोबायोटिक्स के कारण आंत के स्वास्थ्य में सुधार करता है", "शरीर को ठंडा रखता है", "पाचन को बढ़ाता है", "रोग प्रतिरोधक क्षमता को मजबूत करता है"]
        }
    },
    {
        id: 6,
        image: getImagePath('Carrot Poriyal'),
        name: { en: "Carrot Poriyal", te: "క్యారెట్ పోరియల్", hi: "गाजर पोरियल" },
        benefits: {
            en: ["Rich in vitamin A for good eyesight", "Improves skin health", "Boosts immunity", "Aids digestion"],
            te: ["మంచి దృష్టి కోసం విటమిన్ A అధికంగా ఉంటుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది", "జీర్ణక్రియకు సహాయపడుతుంది"],
            hi: ["अच्छी दृष्टि के लिए विटामिन A से भरपूर", "त्वचा के स्वास्थ्य में सुधार करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है", "पाचन में सहायता करता है"]
        }
    },
    {
        id: 7,
        image: getImagePath('Sprout Salad'),
        name: { en: "Sprout Salad", te: "మొలకెత్తిన సలాడ్", hi: "अंकुरित सलाद" },
        benefits: {
            en: ["High in protein and fiber", "Supports muscle growth", "Improves digestion", "Helps in weight management"],
            te: ["ప్రోటీన్ మరియు ఫైబర్ అధికంగా ఉంటుంది", "కండరాల వృద్ధికి తోడ్పడుతుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "బరువు నిర్వహణలో సహాయపడుతుంది"],
            hi: ["प्रोटीन और फाइबर से भरपूर", "मांसपेशियों की वृद्धि में सहायक", "पाचन में सुधार करता है", "वजन प्रबंधन में मदद करता है"]
        }
    },
    {
        id: 8,
        image: getImagePath('Green (Spinach) Salad'),
        name: { en: "Green (Spinach) Salad", te: "ఆకు కూరల సలాడ్ (పాలకూర)", hi: "हरी (पालक) सलाद" },
        benefits: {
            en: ["Rich in iron and calcium", "Improves blood health", "Strengthens bones", "Boosts immunity"],
            te: ["ఐరన్ మరియు కాల్షియం అధికంగా ఉంటుంది", "రక్త ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "ఎముకలను బలపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది"],
            hi: ["आयरन और कैल्शियम से भरपूर", "रक्त स्वास्थ्य में सुधार करता है", "हड्डियों को मजबूत करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है"]
        }
    },
    {
        id: 9,
        image: getImagePath('Fruit Salad'),
        name: { en: "Fruit Salad", te: "పండ్ల సలాడ్", hi: "फल सलाद" },
        benefits: {
            en: ["Rich in vitamins and antioxidants", "Improves digestion", "Keeps the body hydrated", "Enhances skin health"],
            te: ["విటమిన్లు మరియు యాంటీఆక్సిడెంట్లు అధికంగా ఉంటాయి", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "శరీరాన్ని హైడ్రేటెడ్‌గా ఉంచుతుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది"],
            hi: ["विटामिन और एंटीऑक्सीडेंट से भरपूर", "पाचन में सुधार करता है", "शरीर को हाइड्रेटेड रखता है", "त्वचा के स्वास्थ्य को बढ़ाता है"]
        }
    },
    {
        id: 10,
        image: getImagePath('Groundnut Salad'),
        name: { en: "Groundnut Salad", te: "వేరుశెనగ సలాడ్", hi: "मूंगफली सलाद" },
        benefits: {
            en: ["Good source of plant protein", "Provides healthy fats", "Improves heart health", "Gives long-lasting energy"],
            te: ["మొక్కల ప్రోటీన్ యొక్క మంచి మూలం", "ఆరోగ్యకరమైన కొవ్వులను అందిస్తుంది", "గుండె ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "దీర్ఘకాలిక శక్తిని అందిస్తుంది"],
            hi: ["पौधा प्रोटीन का अच्छा स्रोत", "स्वस्थ वसा प्रदान करता है", "हृदय स्वास्थ्य में सुधार करता है", "लंबे समय तक ऊर्जा देता है"]
        }
    },
    {
        id: 11,
        image: getImagePath('Tomato Chat'),
        name: { en: "Tomato Chat", te: "టమాటా చాట్", hi: "टमाटर चाट" },
        benefits: {
            en: ["Rich in vitamin C and antioxidants", "Improves skin health", "Boosts immunity", "Aids digestion"],
            te: ["విటమిన్ C మరియు యాంటీఆక్సిడెంట్లు అధికంగా ఉంటాయి", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది", "జీర్ణక్రియకు సహాయపడుతుంది"],
            hi: ["विटामिन C और एंटीऑक्सीडेंट से भरपूर", "त्वचा के स्वास्थ्य में सुधार करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है", "पाचन में सहायता करता है"]
        }
    },
    {
        id: 12,
        image: getImagePath('Red Aval Payasam'),
        name: { en: "Red Aval Payasam", te: "ఎర్ర అటుకుల పాయసం", hi: "लाल पोहा खीर" },
        benefits: {
            en: ["Rich in iron and fiber", "Improves digestion", "Provides sustained energy", "Helps prevent anemia"],
            te: ["ఐరన్ మరియు ఫైబర్ అధికంగా ఉంటుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "నిరంతర శక్తిని అందిస్తుంది", "రక్తహీనతను నివారించడంలో సహాయపడుతుంది"],
            hi: ["आयरन और फाइबर से भरपूर", "पाचन में सुधार करता है", "निरंतर ऊर्जा प्रदान करता है", "एनीमिया को रोकने में मदद करता है"]
        }
    },
    {
        id: 13,
        image: getImagePath('Elaneer Payasam'),
        name: { en: "Elaneer Payasam", te: "ఎలనీర్ పాయసం", hi: "इलनीर पायसम" },
        benefits: {
            en: ["Natural coolant for the body", "Prevents dehydration", "Improves digestion", "Rich in electrolytes"],
            te: ["శరీరానికి సహజ శీతలకారిణి", "నిర్జలీకరణను నివారిస్తుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "ఎలక్ట్రోలైట్లు అధికంగా ఉంటాయి"],
            hi: ["शरीर के लिए प्राकृतिक शीतलक", "निर्जलीकरण को रोकता है", "पाचन में सुधार करता है", "इलेक्ट्रोलाइट्स से भरपूर"]
        }
    },
    {
        id: 14,
        image: getImagePath('Instant Mango Pickle'),
        name: { en: "Instant Mango Pickle", te: "ఇన్‌స్టంట్ మామిడి ఊరగాయ", hi: "इंस्टेंट आम का अचार" },
        benefits: {
            en: ["Improves appetite", "Aids digestion", "Rich in vitamin C", "Enhances taste and flavor"],
            te: ["ఆకలిని మెరుగుపరుస్తుంది", "జీర్ణక్రియకు సహాయపడుతుంది", "విటమిన్ C అధికంగా ఉంటుంది", "రుచి మరియు ఫ్లేవర్‌ను మెరుగుపరుస్తుంది"],
            hi: ["भूख में सुधार करता है", "पाचन में सहायता करता है", "विटामिन C से भरपूर", "स्वाद और फ्लेवर बढ़ाता है"]
        }
    },
    {
        id: 15,
        image: getImagePath('Gooseberry Pickle'),
        name: { en: "Gooseberry Pickle", te: "ఉసిరికాయ ఊరగాయ", hi: "आंवला अचार" },
        benefits: {
            en: ["Extremely rich in vitamin C", "Strengthens immunity", "Improves hair and skin health", "Supports digestion"],
            te: ["విటమిన్ C అత్యధికంగా ఉంటుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది", "జుట్టు మరియు చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "జీర్ణక్రియకు తోడ్పడుతుంది"],
            hi: ["विटामिन C से अत्यधिक समृद्ध", "रोग प्रतिरोधक क्षमता को मजबूत करता है", "बालों और त्वचा के स्वास्थ्य में सुधार करता है", "पाचन में सहायक"]
        }
    },
    {
        id: 16,
        image: getImagePath('Aloe Vera Juice'),
        name: { en: "Aloe Vera Juice", te: "కలబంద రసం", hi: "एलोवेरा जूस" },
        benefits: {
            en: ["Improves digestion", "Detoxifies the body", "Enhances skin health", "Boosts immunity"],
            te: ["జీర్ణక్రియను మెరుగుపరుస్తుంది", "శరీరాన్ని విషపూరితం చేస్తుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది"],
            hi: ["पाचन में सुधार करता है", "शरीर को डिटॉक्सीफाई करता है", "त्वचा के स्वास्थ्य को बढ़ाता है", "रोग प्रतिरोधक क्षमता बढ़ाता है"]
        }
    },
    {
        id: 17,
        image: getImagePath('Pudina Juice'),
        name: { en: "Pudina Juice", te: "పుదీనా రసం", hi: "पुदीना जूस" },
        benefits: {
            en: ["Improves digestion", "Relieves acidity", "Refreshes the body", "Supports respiratory health"],
            te: ["జీర్ణక్రియను మెరుగుపరుస్తుంది", "ఆమ్లత్వాన్ని తగ్గిస్తుంది", "శరీరాన్ని రిఫ్రెష్ చేస్తుంది", "శ్వాసకోశ ఆరోగ్యానికి తోడ్పడుతుంది"],
            hi: ["पाचन में सुधार करता है", "एसिडिटी से राहत देता है", "शरीर को तरोताजा करता है", "श्वसन स्वास्थ्य में सहायक"]
        }
    },
    {
        id: 18,
        image: getImagePath('Kulukki Sarbath'),
        name: { en: "Kulukki Sarbath", te: "కులుక్కి షర్బత్", hi: "कुलुक्की शर्बत" },
        benefits: {
            en: ["Refreshing summer drink", "Prevents dehydration", "Rich in vitamin C", "Boosts energy instantly"],
            te: ["రిఫ్రెషింగ్ వేసవి పానీయం", "నిర్జలీకరణను నివారిస్తుంది", "విటమిన్ C అధికంగా ఉంటుంది", "తక్షణంగా శక్తిని పెంచుతుంది"],
            hi: ["ताजगी देने वाला गर्मियों का पेय", "निर्जलीकरण को रोकता है", "विटामिन C से भरपूर", "तुरंत ऊर्जा बढ़ाता है"]
        }
    }
];

// Translations
const translations = {
    en: {
        selectLanguage: "Select Your Language",
        title: "Traditional Recipe Collection",
        subtitle: "Discover the health benefits of authentic Indian delicacies",
        benefits: "Health Benefits"
    },
    te: {
        selectLanguage: "మీ భాషను ఎంచుకోండి",
        title: "సంప్రదాయ వంటకాల సేకరణ",
        subtitle: "అసలైన భారతీయ వంటకాల ఆరోగ్య ప్రయోజనాలను కనుగొనండి",
        benefits: "ఆరోగ్య ప్రయోజనాలు"
    },
    hi: {
        selectLanguage: "अपनी भाषा चुनें",
        title: "पारंपरिक व्यंजन संग्रह",
        subtitle: "प्रामाणिक भारतीय व्यंजनों के स्वास्थ्य लाभ जानें",
        benefits: "स्वास्थ्य लाभ"
    }
};

// State
let selectedLanguage = null;

// DOM Elements
const languageSelection = document.getElementById('languageSelection');
const mainApp = document.getElementById('mainApp');
const selectLanguageText = document.getElementById('selectLanguageText');
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const recipesGrid = document.getElementById('recipesGrid');
const parallaxSection = document.getElementById('parallaxSection');

// Set parallax background - using a food-themed image
parallaxSection.style.backgroundImage = "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop')";

// Language Selection Handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        selectLanguage(lang);
    });
});

// Language Switcher Handlers
document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        selectLanguage(lang);
    });
});

function selectLanguage(lang) {
    selectedLanguage = lang;
    
    // Hide language selection, show main app
    languageSelection.style.display = 'none';
    mainApp.classList.add('active');
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update content
    updateContent();
    renderRecipes();
}

function updateContent() {
    const t = translations[selectedLanguage];
    heroTitle.textContent = t.title;
    heroSubtitle.textContent = t.subtitle;
}

function renderRecipes() {
    recipesGrid.innerHTML = '';
    
    recipes.forEach((recipe, index) => {
        const card = document.createElement('article');
        card.className = 'recipe-card';
        // Fix: Set the attribute for CSS selector AND style
        card.setAttribute('data-animation-delay', (index * 50) + 'ms');
        card.style.animationDelay = `${index * 50}ms`;
        
        const t = translations[selectedLanguage];
        // Use encodeURIComponent to safely handle filenames with spaces
        const safeImagePath = recipe.image.split('/').map(part => encodeURIComponent(part)).join('/').replace('images%2F', 'images/'); // quick fix to keep 'images/' prefix unencoded but file encoded

        // actually getImagePath returns "images/File.png"
        // we want "images/File%20Name.png"
        const finalImage = recipe.image.replace(/images\/(.+)/, (match, p1) => 'images/' + encodeURIComponent(p1));

        card.innerHTML = `
            <div class="flex flex-col">
                <div class="recipe-image-container">
                    <img src="${finalImage}" alt="${recipe.name[selectedLanguage]}" draggable="false" 
                         oncontextmenu="return false;" onclick="event.preventDefault(); event.stopPropagation();"
                         onerror="this.onerror=null; this.src='images/placeholder.png';">
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name[selectedLanguage]}</h3>
                    <div>
                        <h4 class="benefits-label">${t.benefits}</h4>
                        <ul class="benefits-list">
                            ${recipe.benefits[selectedLanguage].map(benefit => `
                                <li class="benefit-item">
                                    <span class="benefit-bullet"></span>
                                    <span class="benefit-text">${benefit}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        recipesGrid.appendChild(card);
    });
}

// Prevent image dragging and right-click
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
});

