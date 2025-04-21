import "./style.scss";

const calculator = {
    input: document.getElementById("input-box"),
    buttons: document.querySelectorAll("button"),

    operations: {
        AC: () => (calculator.input.value = "0"),
        DE: () =>
            (calculator.input.value =
                calculator.input.value.slice(0, -1) || "0"),
        "=": () => {
            try {
                calculator.input.value = eval(calculator.input.value);
            } catch {
                calculator.input.value = "Error";
            }
        },
    },

    handleClick(button) {
        const value = button.textContent;
        const isNumber = !isNaN(value);

        if (this.operations[value]) {
            this.operations[value]();
            return;
        }

        this.input.value =
            this.input.value === "0" && isNumber
                ? value
                : this.input.value + value;
    },

    init() {
        this.buttons.forEach((button) =>
            button.addEventListener("click", () => this.handleClick(button))
        );
    },
};

calculator.init();
