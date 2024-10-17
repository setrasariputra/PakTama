class PersonalityQuiz {
    constructor() {
        this.init();
    }

    init() {
        this.displayFooter();
    }

    displayFooter() {
        let footerHTML = '<div class="container">';
        footerHTML += '<span class="color-grey">© iPersonic</span> <a href="#">Personality Test</a> <a href="#">Career Test</a> <a href="#">Persönlichkeitstest</a> <a href="#">Berufstest</a> <a href="#">Privacy Policy</a> <a href="#">Felicitas Heyne</a> <a href="#">Impressum</a> <a href="#">Help & Contact</a> <span class="color-grey">iPersonic supports</span>';
        footerHTML += '<a href="#">Audiopedia Foundation</a>  <br /><br />';
        footerHTML += 'English | Deutsch | Español | Français | Português | 中文 | Русский | हिंदी | العربية | 日本語 | Bahasa Indonesia | Italiano | Svenska | Nederlands | עברית | Afrikaans | Bosanski | Català | Čeština | Hrvatski | Magyar | Română | Slovenski | Slovenský | Srpski | Български';
        footerHTML += '</div>';

        const footerContainer = document.querySelector(".footer-container");
        footerContainer.innerHTML = footerHTML;
    }
}

new PersonalityQuiz();