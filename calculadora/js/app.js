const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "0";

function updateDisplay() {
  display.value = current;
}

buttons.forEach((btn) => {
  const value = btn.dataset.value;
  const action = btn.dataset.action;

  btn.addEventListener("click", () => {
    // Limpiar todo
    if (action === "clear") {
      current = "0";
      updateDisplay();
      return;
    }

    // Borrar último carácter
    if (action === "delete") {
      if (current.length === 1) {
        current = "0";
      } else {
        current = current.slice(0, -1);
      }
      updateDisplay();
      return;
    }

    // Resolver operación
    if (action === "equals") {
      try {
        // eval solo para ejemplo simple
        current = String(eval(current));
      } catch {
        current = "Error";
      }
      updateDisplay();
      return;
    }

    // Construir la expresión
    if (current === "0" && value !== ".") {
      current = value;
    } else {
      current += value;
    }
    updateDisplay();
  });
});
