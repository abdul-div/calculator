var inpDisplay = document.getElementById("inp-display");
function btnHandler(num) {
  inpDisplay.value += num;
}
function clearAll() {
  inpDisplay.value = "";
}
function calculate() {
  var result = eval(inpDisplay.value);
  inpDisplay.value = result;
}
