const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Ganti simbol × dan ÷ dengan * dan / untuk perhitungan
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
