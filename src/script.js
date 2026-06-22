import { renderButton, hideElement, showGreeting } from "./view.js";
import { getMessage } from "./model.js";

function initApp() {

    const rootEl = document.getElementById('root');
    if (!rootEl) {
        console.error("Root element not found");
        return;
    }

    const buttonEl = renderButton();
    rootEl.appendChild(buttonEl);

    buttonEl.addEventListener("click", () => {
        hideElement(buttonEl);
        const greeting = getMessage();
        const greetingEl = showGreeting(greeting);
        rootEl.appendChild(greetingEl);
    })
}

initApp();
