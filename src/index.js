import "./style.css";
import { renderButton, hideElement, showGreeting } from "./view.js";
import { getMessage } from "./model.js";

function initApp() {

    const rootEl = document.createElement("div");
    rootEl.className = "root";
    document.body.appendChild(rootEl);

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
