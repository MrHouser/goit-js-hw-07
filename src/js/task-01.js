// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов 
// li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст 
// заголовка элемента(тега h2) и количество элементов в категории(всех вложенных 
// в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll('ul#categories li.item');
const titlesRef = document.querySelectorAll('ul#categories li.item h2');

console.log(`Категорий в списке - ${categoriesRef.length}`);
titlesRef.forEach(title => {
    console.log(`Категория: ${title.textContent}`);
    console.log(`Элементов в категории - ${title.nextElementSibling.children.length}`);
});

