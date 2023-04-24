# Static CDN

Шаблон для создания хранилища ресурсов на статичных хостингах, вроде [Netlify](https://www.netlify.com/) и [Vercel](https://vercel.com/).

## Структура и настройка

1. Откройте файл `astro.config.mjs` в текстовом редакторе и замените переменную `site`на домен вашего сайта, например `https://your-website.netlify.com` (без слэша в конце).
2. Разместите файлы ваших ресурсов в папки в `./public/assets/`. Вы можете создать сколько угодно своих папок.

Проект настроен на размещение на [Netlify](https://www.netlify.com/) "одной кнопкой", инструкции для других хостингов смотрите в [документации Astro](https://docs.astro.build/en/guides/deploy/).

## Команды

Все команды запускаются из корня проекта через терминал:

| Команда            | Действие                                      |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Установка зависимостей                        |
| `pnpm run dev`     | Запуск локального сервера на `localhost:3000` |
| `pnpm run build`   | Компиляция статичного сайта в `./dist/`       |
| `pnpm run preview` | Предпросмотр сайта перед загрузкой на сервер  |

## Нужна помощь?

Тэгните **Phenomen#1337** на [Discord сервере Foundry VTT RU](https://discord.gg/Z2CXFy35WF).
