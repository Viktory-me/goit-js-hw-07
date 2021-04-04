
const btnEl = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
  };
  
let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
   btnEl.span.textContent = counterValue;
  };
  
const decrement = () => {
    counterValue -= 1;
  
    btnEl.span.textContent = counterValue;
  };
  
  btnEl.sub.addEventListener("click", increment);
  btnEl.add.addEventListener("click", decrement);