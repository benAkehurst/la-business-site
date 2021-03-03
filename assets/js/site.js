function makeDate() {
  const dateElement = document.querySelector('#currentYear');
  const dateFormatted = new Date().getFullYear();
  dateElement.innerText = dateFormatted;
}

// Add methods here to be called on site init
function init() {
  makeDate();
}

init();
