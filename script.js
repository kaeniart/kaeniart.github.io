let translations = {};

function loadTranslations(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data;
            updateLanguage(lang); // Update language after loading
        })
        .catch(error => console.error('Error loading translation:', error));
}

function updateLanguage(lang) {
    const { title, navHome, navAbout, navContact, slide1Title, slide1Description, slide2Title, slide2Description, slide3Title, slide3Description, footerText } = translations[lang];

    document.getElementById('navbar-title').textContent = title;
    document.getElementById('nav-home').textContent = navHome;
    document.getElementById('nav-about').textContent = navAbout;
    document.getElementById('nav-contact').textContent = navContact;

    document.getElementById('slide1-title').textContent = slide1Title;
    document.getElementById('slide1-description').textContent = slide1Description;
    document.getElementById('slide2-title').textContent = slide2Title;
    document.getElementById('slide2-description').textContent = slide2Description;
    document.getElementById('slide3-title').textContent = slide3Title;
    document.getElementById('slide3-description').textContent = slide3Description;

    document.getElementById('footer-text').innerHTML = footerText;
}

// Initialize by loading English translations
loadTranslations('en');

// Language selector event listeners
document.querySelectorAll('.flag-icons').forEach(flag => {
    flag.addEventListener('click', () => {
        const lang = flag.getAttribute('data-lang');
        if (!translations[lang]) {
            loadTranslations(lang);
        } else {
            updateLanguage(lang);
        }
    });
});