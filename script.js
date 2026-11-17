
// THEORIVA LANGUAGE SWITCHER

const languageButtons = document.querySelectorAll(".lang-btn");

const translatableElements = document.querySelectorAll(
    "[data-en][data-id]"
);


function changeLanguage(language) {

    // Change the website language
    translatableElements.forEach((element) => {

        element.textContent = element.dataset[language];

    });

    // Update the active language button
    languageButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );

    });

    // Update the HTML language attribute
    document.documentElement.lang = language;

}


// Listen for language button clicks
languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});

// Set default language
changeLanguage("en");