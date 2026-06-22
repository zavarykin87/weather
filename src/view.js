export function renderButton() {
    const buttonEl = document.createElement('button');
    buttonEl.className = "btn";
    buttonEl.textContent = "Click me";
    return buttonEl;
}

export function hideElement(element) {
    element.style.display = "none";
}

export function showGreeting(message) {
    const greetingEl = document.createElement("p");
    greetingEl.className = "greet";
    greetingEl.textContent = message;
    return greetingEl;
}