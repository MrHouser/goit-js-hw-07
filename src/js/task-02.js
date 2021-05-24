// В HTML есть пустой список`ul#ingredients`.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.

const listEl = document.querySelector('#ingredients');

const lis = ingredients.map(ing => {
    const li = document.createElement('li');
    li.textContent = ing;
    return li;
})

listEl.append(...lis);