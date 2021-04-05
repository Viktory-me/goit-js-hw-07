let fontEl = document.getElementById("font-size-control");
let textEl = document.getElementById("text");

fontEl.oninput = function() {
  textEl.style.fontSize = fontEl.value + "px";
};