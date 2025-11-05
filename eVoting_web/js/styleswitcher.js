/**
 * =====================================
 *  STYLE SWITCHER SCRIPT (Clean Version)
 * =====================================
 *  - Toggles color panel visibility
 *  - Allows user to switch between color themes dynamically
 *  - Saves and loads the selected theme using cookies
 */

jQuery(document).ready(function ($) {

    // Toggle color switcher panel visibility
    $('#show-panel').click(function () {
        const panel = $('.colors-switcher');
        const button = $(this);

        if (button.hasClass('show-panel')) {
            panel.css({ 'right': 0 });
            button.removeClass('show-panel').addClass('hide-panel');
        } else if (button.hasClass('hide-panel')) {
            panel.css({ 'right': '-100px' });
            button.removeClass('hide-panel').addClass('show-panel');
        }
    });

});


/**
 * Activates the selected stylesheet by title attribute
 * @param {string} title - The title of the stylesheet to activate
 */
function setActiveStyleSheet(title) {
    const links = document.getElementsByTagName("link");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute("rel").includes("style") && link.getAttribute("title")) {
            link.disabled = true;
            if (link.getAttribute("title") === title) {
                link.disabled = false;
            }
        }
    }
}

/**
 * Gets the currently active stylesheet title
 * @returns {string|null}
 */
function getActiveStyleSheet() {
    const links = document.getElementsByTagName("link");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute("rel").includes("style") &&
            link.getAttribute("title") &&
            !link.disabled) {
            return link.getAttribute("title");
        }
    }
    return null;
}

/**
 * Gets the preferred (default) stylesheet title
 * @returns {string|null}
 */
function getPreferredStyleSheet() {
    const links = document.getElementsByTagName("link");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute("rel").includes("style") &&
            !link.getAttribute("rel").includes("alt") &&
            link.getAttribute("title")) {
            return link.getAttribute("title");
        }
    }
    return null;
}

/**
 * Creates a cookie to store the theme preference
 * @param {string} name 
 * @param {string} value 
 * @param {number} days 
 */
function createCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

/**
 * Reads the saved cookie
 * @param {string} name
 * @returns {string|null}
 */
function readCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

// Load preferred or saved theme on page load
window.onload = function () {
    const cookie = readCookie("style");
    const title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);
};

// Save selected theme on page unload
window.onunload = function () {
    const title = getActiveStyleSheet();
    createCookie("style", title, 365); // Save for one year
};

// Apply saved theme immediately (in case of cached load)
const cookie = readCookie("style");
const title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
