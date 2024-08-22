document.addEventListener("DOMContentLoaded", function () {
    // Check login status
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html';
    }

    // News content
    const newsContent = [
        {
            title: "Sports Day 2024",
            date: "2024-10-10",
            description: "Join us for our annual Sports Day event! There will be competitions, activities, and fun for the whole family."
        },
        {
            title: "New Facilities Opening",
            date: "2024-07-25",
            description: "We are excited to announce the opening of new sports facilities at our center."
        },
        {
            title: "Cross-Country 2024",
            date: "2024-11-10",
            description: "Registration is now open for the Cross-Country 2024. Register and participate in this exciting event."
        },
        {
            title: "Government Communique 2024",
            date: "2024-07-25",
            description: "In case of Cyclone Warning Class 2 or warning of Torrential Rainfall or related directive from the NATIONAL EMERGENCY OPERATIONS COMMAND (NEOC). All sports infrastructure and other recreational centres will be closed, until further notice."
        },
    ];

    const newsContainer = document.getElementById("news-content");

    newsContent.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.className = "list-group-item";
        newsItem.innerHTML = `<h5>${news.title}</h5><small>${news.date}</small><p>${news.description}</p>`;
        newsContainer.appendChild(newsItem);
    });

    // Read-Aloud Feature
    const speakText = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    };

    const readAloudButton = document.getElementById('toggle-read-aloud');
    readAloudButton.addEventListener('click', () => {
        const textContent = document.querySelector('main').innerText;
        speakText(textContent);
    });

    // Read-Aloud Highlighted Text
    document.addEventListener('mouseup', () => {
        const selection = window.getSelection();
        if (selection.toString().length > 0) {
            speakText(selection.toString());
        }
    });

    // Zoom Controls
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    zoomInButton.addEventListener('click', () => {
        document.body.style.fontSize = parseFloat(window.getComputedStyle(document.body).fontSize) + 2 + 'px';
    });

    zoomOutButton.addEventListener('click', () => {
        document.body.style.fontSize = Math.max(10, parseFloat(window.getComputedStyle(document.body).fontSize) - 2) + 'px';
    });

    // Language Selector
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (event) => {
        const language = event.target.value;
        if (language) {
            const googleTranslateFrame = document.querySelector('.skiptranslate');
            if (googleTranslateFrame) {
                googleTranslateFrame.style.display = 'none'; // Hide the Google Translate frame while switching languages
            }
            window.location.href = `?lang=${language}`;
        }
    });
});

// Google Translate Initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'fr,en'
    }, 'google_translate_element');
}