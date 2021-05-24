// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterEl = document.querySelector('#value');
const decreaseEl = document.querySelector('[data-action="decrement"]');
const increaseEl = document.querySelector('[data-action="increment"]');



let counterValue = parseInt(counterEl.textContent);


const increment = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};

decreaseEl.addEventListener('click', decrement);
increaseEl.addEventListener('click', increment);