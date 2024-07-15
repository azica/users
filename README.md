# Users List App

## Описание

Приложение для отображения списка пользователей с возможностью поиска. Данные о
пользователях получаются с mock-API сервиса
[FakeStoreAPI](https://fakestoreapi.com). Приложение разработано на
[React](https://reactjs.org) с использованием
[TypeScript](https://www.typescriptlang.org). Для управления состоянием запросов
используется библиотека [React Query](https://react-query.tanstack.com) и для
стилизации [SCSS](https://sass-lang.com) - препроцессор CSS.

## Установка и запуск

### Требования

- [Node.js](https://nodejs.org) версии 14.x или выше
- npm или [Yarn](https://yarnpkg.com)

### Шаги для установки и запуска

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/users.git
cd users

# Установить зависимости
npm install
# или
yarn install

# Создать файл .env в корне проекта и добавить URL API
echo "VITE_API_URL=https://fakestoreapi.com" > .env

# Запустить приложение
npm run dev
# или
yarn dev

#### Структура проекта
src/
├── services/      # Модули для работы с API
├── components/    # React компоненты
├── hooks/         # Пользовательские хуки
├── pages/         # Страницы приложения
├── assets/        # Ресурсы, такие как иконки, изображения, шрифты
├── shared/        # Утилиты и вспомогательные функции
└── styles/        # Стилизация приложения
```

#### Контакты

Если у вас возникли вопросы или предложения, пожалуйста, свяжитесь со мной:
Email: azicakcl@gmail.com 
GitHub: azica
