
const buttonEl = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
  };
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
   buttonEl.span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    buttonEl.span.textContent = counterValue;
  };
  
  buttonEl.sub.addEventListener("click", increment);
  buttonEl.add.addEventListener("click", decrement);