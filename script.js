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

    let translations = {};

    function loadTranslations(lang) {
        fetch(`lang/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                translations[lang] = data;
                updateLanguage(lang); // Update language after loading
                updateFooterText(lang); // Update footer after loading
            })
            .catch(error => console.error('Error loading translation:', error));
    }

function updateLanguage(lang) {
	const { title, navHome, navAbout, slide1Title, slide1Description, slide2Title, slide2Description, slide3Title, slide3Description } = translations[lang];

	document.getElementById('navbar-title').textContent = title;
	document.getElementById('nav-home').textContent = navHome;
	document.getElementById('nav-about').textContent = navAbout;

	document.getElementById('slide1-title').textContent = slide1Title;
	document.getElementById('slide1-description').textContent = slide1Description;
	document.getElementById('slide2-title').textContent = slide2Title;
	document.getElementById('slide2-description').textContent = slide2Description;
	document.getElementById('slide3-title').textContent = slide3Title;
	document.getElementById('slide3-description').textContent = slide3Description;

	// Update the current language display
	document.getElementById('current-language').textContent = lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Français';
}

// Initialize by loading English translations
loadTranslations('en');


// Update footer text dynamically based on current year and translation
function updateFooterText(lang) {
	const year = new Date().getFullYear();
	const footerTemplate = translations[lang].footerText;
	const footerText = footerTemplate.replace("{{year}}", `2011-${currentYear}`);
	document.getElementById('footer-text').innerHTML = footerText;
}

// Language selector event listeners
document.querySelectorAll('.language-option').forEach(option => {
	option.addEventListener('click', () => {
		const lang = option.getAttribute('data-lang');
		if (!translations[lang]) {
			loadTranslations(lang);
		} else {
			updateLanguage(lang);
			updateFooterText(lang); // Update footer text for selected language
		}
	});
});