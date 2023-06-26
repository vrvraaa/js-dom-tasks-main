# Манипулирование DOM-деревом

## Задание

Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) внутри элемента `<div>` и оборачивает текст в параграф. Переводы строк и отступы изменяться не должны.

```html
<body>
  <p>Boom</p>
   text
   <div>Bam</div>
</body>
```
```js
prettify(document);
console.log(document.body.innerHTML);
```
```html
<body>
   <p>Boom</p>
   text
   <div><p>Bam</p></div>
 </body>
```

## Алгоритм

1. Выберите все нужные узлы по тегу.
2. Обойдите каждый выбранный узел, найдите в его дочерних узлах (`childNodes`) текстовые узлы и замените их на новые узлы, содержащие тег `<p>`.

## Подсказки

- Очистка строки от пробельных символов: [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim).
- Замена узлов [node.replaceWith()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)
- Проверка текстовых узлов: `node instanceof Text`.