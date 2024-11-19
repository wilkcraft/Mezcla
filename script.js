const button = document.getElementById('reveal-fact');
const fact = document.getElementById('fact');

const originalText = "Click the button to reveal a fun fact!";
const funFact = "Both JavaScript and Python were named after unrelated things: JavaScript after Java, and Python after Monty Python!";

button.addEventListener('click', () => {
  if (fact.textContent === originalText) {
    fact.textContent = funFact;
  } else {
    fact.textContent = originalText;
  }
});
