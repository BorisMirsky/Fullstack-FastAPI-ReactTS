Как пользоваться



Убедиться, что стоят 2 пакета:
    pip install fastapi
    pip install "uvicorn[standard]"
Если нет, то ставить в виртуальное окружение (см ниже)


        Запустить виртуальное окружение
cd Fullstack-FastAPI-ReactTS\backend\my_virt\Scripts
activate


         Запуск локального сервера.
Перейти в папку проекта 'Fullstack-FastAPI-ReactTS\backend\app', 
выполнить в терминале команду 'uvicorn main:app --reload'.
Можно открыть по адресу http://127.0.0.1:8000/ и погонять скриптами из файла curl.txt.


         Запуск фронтенда
Переход в папку Fullstack-FastAPI-ReactTS\frontend.
Вызов консоли разработчика "ctrl + `". Выполнить команду 'npm run dev'
Приложение открыть по адресу http://localhost:3000.



