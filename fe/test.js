const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = Math.ceil(Math.random() * 100);
};

const buttonRndInt = document.querySelector('#randomInt');

buttonRndInt.addEventListener('click', outputRandomInt);