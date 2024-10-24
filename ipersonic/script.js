class PersonalityQuiz {
    constructor() {
        this.personalities = [
            {'fx': 'BBBB', 'url': '1.html', 'label': 'Idealis Penyelaras'},
            {'fx': 'ABBB', 'url': '2.html', 'label': 'Idealis Terlibat'},
            {'fx': 'ABAB', 'url': '3.html', 'label': 'Pemikir Dinamis'},
            {'fx': 'ABAA', 'url': '4.html', 'label': 'Pemikir Pendobrak'},
            {'fx': 'ABBA', 'url': '5.html', 'label': 'Idealis Spontan'},
            {'fx': 'AABA', 'url': '6.html', 'label': 'Pelaku Santai'},
            {'fx': 'AABB', 'url': '7.html', 'label': 'Realis Sosial'},
            {'fx': 'AAAB', 'url': '8.html', 'label': 'Relasi Bertekad'},
            {'fx': 'AAAA', 'url': '9.html', 'label': 'Pelaku Bersemangat'},
            {'fx': 'BAAA', 'url': '10.html', 'label': 'Pelaku Individualis'},
            {'fx': 'BABA', 'url': '11.html', 'label': 'Pelaku Peka'},
            {'fx': 'BABB', 'url': '12.html', 'label': 'Relasi Baik Hati'},
            {'fx': 'BAAB', 'url': '13.html', 'label': 'Realis Terpercaya'},
            {'fx': 'BBAB', 'url': '14.html', 'label': 'Pemikir Mandiri'},
            {'fx': 'BBAA', 'url': '15.html', 'label': 'Pemikir Analitis'},
            {'fx': 'BBBA', 'url': '16.html', 'label': 'Idealis Pemimpi'}
        ];

        this.quizOptions = [
            {
                1: "Saya agak ramah, membuka hati dan saya suka berada bersama-sama dengan orang lain.",
                2: "Saya membutuhkan banyak waktu untuk sendirian dan agak hati-hati untuk memulai hubungan baru."
            },
            {
                1: "Saya lebih suka bekerja praktis, menghasilkan hasil yang nyata.",
                2: "Saya lebih suka bekerja secara teori, mengembangkan ide-ide dan konsep baru."
            },
            {
                1: "Saya pintar dalam hal analisis dan logika dan ketika saya ragu, saya membiarkan diri saya dipandu oleh otak saya.",
                2: "Saya sangat sensitif dan emosional dan bila ragu, aku membiarkan diriku dibimbing oleh hati saya."
            },
            {
                1: "Saya orang yang fleksibel dan spontan, kadang-kadang agak kacau.",
                2: "Saya orang yang handal dan terorganisir dengan baik. Saya lebih memilih untuk merencanakan masa depan."
            },
        ];

        this.fxAnswer = '';

        this.init();
    }

    init() {
        this.displayDropdownTopMenu();
        this.displayFooter();
        this.displayQuizOptions()
    }

    displayDropdownTopMenu() {
        let personalityHTML = '<ul>';
        personalityHTML += '<ul>';
        // looping 
        for(let i = 0; i < this.personalities.length; i++) {
            personalityHTML += '<li><a href="'+this.personalities[i]['url']+'">'+this.personalities[i]['label']+'</a></li>';
        }
        personalityHTML += '</ul>';

        const personalityContainer = document.querySelector(".personality-container");
        personalityContainer.innerHTML = personalityHTML;
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

    displayQuizOptions() {
        // set totalAnswer
        let totalAnswer = this.fxAnswer.length;

        // container step
        let quizStepHTML = '<ul>';
        let stepActive = '';
        // looping quizOptions
        for(let i = 0; i < this.quizOptions.length; i++) {
            let numberStep = i + 1;
            stepActive = '';
            if(totalAnswer === i) {
                stepActive = 'active';
            }
            quizStepHTML += '<li class="'+stepActive+'">Langkah '+numberStep+'</li>';
        }
        quizStepHTML += '</ul>';

        const quizStepContainer = document.querySelector(".quiz-step");
        quizStepContainer.innerHTML = quizStepHTML;

        // container quiz options
        let quizOptionsHTML = '<div class="quiz-answer-option">';
        quizOptionsHTML += '<p class="lead-2 font-weight-lighter">'+this.quizOptions[totalAnswer][1]+'</p>';
        quizOptionsHTML += '<a href="#" class="btn btn-orange btn-md"><i class="fa fa-play icon-sm" aria-hidden="true"></i> Hal ini berlaku untuk saya</a>';
        quizOptionsHTML += '</div>';
        
        quizOptionsHTML += '<div class="quiz-answer-option">';
        quizOptionsHTML += '<p class="lead-2 font-weight-lighter">'+this.quizOptions[totalAnswer][2]+'</p>';
        quizOptionsHTML += '<a href="#" class="btn btn-orange btn-md"><i class="fa fa-play icon-sm" aria-hidden="true"></i> Hal ini berlaku untuk saya</a>';
        quizOptionsHTML += '</div>';

        const quizOptionsContainer = document.querySelector(".quiz-options");
        quizOptionsContainer.innerHTML = quizOptionsHTML;
    }
}

new PersonalityQuiz();