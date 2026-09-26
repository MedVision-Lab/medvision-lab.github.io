function getTranslation(object, path) {

    const parts = path.split(".");

    let value = object;

    for (const part of parts) {

        if (!value || value[part] === undefined) {
            return null;
        }

        value = value[part];
    }

    return value;
}



function applyLanguage(language) {

    const translations =
        window.TRANSLATIONS?.[language];

    if (!translations) {
        return;
    }



    // =========================
    // Static translations
    // =========================

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const value =
                getTranslation(
                    translations,
                    key
                );

            if (value) {

                element.textContent =
                    value;

            }

        });



    // =========================
    // Dynamic YAML text
    // =========================

    document
        .querySelectorAll("[data-lang-en]")
        .forEach(element => {

            const value =
                element.dataset[
                    "lang" +
                    language.charAt(0).toUpperCase() +
                    language.slice(1)
                ];

            if (value) {

                element.textContent =
                    value;

            }

        });



    document.documentElement.lang =
        language;


    localStorage.setItem(
        "medvision-language",
        language
    );

}



const languageSelect =
    document.getElementById(
        "languageSelect"
    );


const savedLanguage =
    localStorage.getItem(
        "medvision-language"
    ) || "en";


if (languageSelect) {

    languageSelect.value =
        savedLanguage;


    languageSelect.addEventListener(
        "change",
        function () {

            applyLanguage(
                this.value
            );

        }
    );

}


applyLanguage(savedLanguage);



const yearElement =
    document.getElementById(
        "currentYear"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}