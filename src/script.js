// model
const model = {
    getMessage() {
        return "Hello, World!";
    }
}

// view
const view = {

    renderButton() {
        let button = document.querySelector("#button");
        if (!button) {
            button = document.createElement('button');
            button.id = "button";
            button.textContent = "Click me";
            document.body.append(button);
            return button;
        }
        return button
    },

    hideElement(element) {
        element.style.display = "none";
    },

    showGreeting(message) {
        const greetingElement = document.createElement('p');
        greetingElement.textContent = message;
        document.body.append(greetingElement);
    },

}

// controller
const controller = {
    init() {
        const button = view.renderButton();
        button.addEventListener("click", () => {
            const message = model.getMessage();
            view.hideElement(button);
            view.showGreeting(message);
        })
    },
}

controller.init();