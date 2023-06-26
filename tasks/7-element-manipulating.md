# Управление узлами DOM

## Задание

Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. Изначально названия всех классов написаны в стиле kebab-case, а при нормализации нужно изменить их названия на стиль camelCase: `text-center` => `textCenter`.

Попробуйте решить эту задачу без использования регулярных выражений.

## Примеры

```html
<body>
    <div class="text-center row-b">Bam</div>
</body>
```
```js
normalize(document);
console.log(document.body.innerHTML);
```
```html
<body>
    <div class="textCenter rowB">Bam</div>
</body>
```

## Подсказки

- Самый простой способ найти все элементы в документе — это `document.body.getElementsByTagName('*')`.
- Приведение к camelCase [https://lodash.com/docs#camelCase](https://lodash.com/docs#camelCase).
- Замена классов [replace](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace) у объекта `classList`.