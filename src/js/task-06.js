// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.


// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

const inputEl = document.querySelector('#validation-input');

const onFocusLost = event => {
    if (event.currentTarget.value.length === parseInt(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', onFocusLost);