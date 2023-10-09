## ReactTemplate

# How to start use it?

Використовуйте цей репозиторій як шаблон для створення репозиторія свого проекта. Для цього нажми на
кнопку `«Use this template»` и вибери опцію `«Create a new repository»`.

На наступному кроці відкриється сторінка створення нового репозиторія. Заповни поле його імені,
переконайся що репозиторій публічний, після чого нажми кнопку `«Create repository from template»`.

Після того як репозиторій буде створений, необхідно перейти в налаштування створеного репозиторія на
вкладку `Settings` > `Actions` > `General`.

Проскролив сторінку до самого кінця, в секції `«Workflow permissions»` вибери опцію
`«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно для автоматизації процеса
деплоя проекту. Після того почнеться build проекту - якщо буде помилка при процесі Deploy - так і
повинно бути, тому що ви не скопіювали ще репозиторій собі і не зробили `1,2,4` пункта в секції
`How to configure your repo?`, `5 пункт` виконуємо тоді коли вже запушили зміни на GitHub і хочете
побачити живу сторінку.

## How to configure your repo?

1. Встанови базові залежності проекту командою `npm i`.
2. Онови залежності щоб точно бути впевненим що npm поставив всі залежності командою `npm update`.
3. Запусти режим розробки, виконавши команду `npm run d`.
4. Перейди в браузер по адресі яка тобі була згенерована. Ця сторінка буде автоматично
   перезапускатися після збереження змін в файлах проекту.
5. Необхідно в файлі `package.json` відредагувати поле `scripts/b`, а саме - `base=/ReactTemplate/`,
   замінивши `ReactTemplate` на назву свого репозиторія, и відправити зміни на GitHub. Наприклад:
   `base=/goit-react-hw-01-components/`
6. Тільки після того як ви відправили зміни на GitHub - необхідно зайти в налаштування
   GitHub-репозиторія (`Settings` > `Pages`) і вставити роздачу продакшн версії файлів з папки
   `/root` гілки `gh-pages`, якщо це не було зроблено автоматично.