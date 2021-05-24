// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChange = () => {
    spanEl.textContent = inputEl.value.trim();
    if (inputEl.value.trim() === '') {
        spanEl.textContent = 'незнакомец';
    }
        };
 
inputEl.addEventListener('input', onInputChange);