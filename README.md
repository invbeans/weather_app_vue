# Пет-проект "Погодное приложение"

## Описание проекта
Frontend-приложение для просмотра прогноза погоды.

### Возможности проекта
- Поиск населенного пункта по названию или части названия в поисковой строке
- Поиск погоды по координатам объекта. Происходит после выбора населенного пунта в предыдущем пункте
- Вывод информации о погоде: краткий прогноз на день, подробная информация на день, краткий прогноз на следующие два дня, почасовой прогноз

## Используемые технологии

### API
Для получения прогноза погоды используется сервис WeatherAPI.com через RapidAPI. Запросы приходят на следующие API:
- Search/Autocomplete API - для поиска населенного пункта по названию или части названия
- Realtime Weather API - для получения прогноза погоды на текущий день
- Forecast Weather API - для получения прогноза погоды на три дня, почасового прогноза на текущий день

### Стек технологий
- Vue.js
- Vuex
- Vue Router
- Axios
- Vue Device Detector
- Epic Spinners
- JavaScript, HTML, SCSS

## Скриншот приложения
![image](https://github.com/invbeans/weather_app_vue/assets/74315761/1a660ba9-4b54-4111-a8a5-820762ee06ae)

  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
