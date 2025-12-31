Как пользоваться



Убедиться, что стоят 2 пакета:
    pip install fastapi
    pip install "uvicorn[standard]"
Если нет, то ставить в виртуальное окружение (см ниже)
Можно так:
- зайти в Fullstack-FastAPI-ReactTS\backend
- pip install -r requirements.txt
Но смысла нет - нужны только 2 пакета выше.


        Запустить виртуальное окружение
cd Fullstack-FastAPI-ReactTS\backend\my_virt\Scripts
activate


         Запуск локального сервера.
Перейти в папку проекта 'Fullstack-FastAPI-ReactTS\backend\app', 
выполнить в терминале команду 'uvicorn main:app --reload'.
Можно открыть по адресу http://127.0.0.1:8000/ и погонять скриптами из файла curl.txt.


         Запуск idle из под виртального окружения
'python -m idlelib.idle'



         Запуск фронтенда
Переход в папку Fullstack-FastAPI-ReactTS\frontend.
Правая клавиша, выбрать Open with WS.
Вызов консоли разработчика "ctrl + `". Выполнить команды 'cd frontend_folder', 'npm run dev'
Приложение открыть по адресу http://localhost:3000.



                                todo

curl
-  getAll - ok
-  getOne - ok
-  delete - ok
-  patch -  ok
-  create - ok

frontend
-  getAll - ok
-  getOne -      не передаёт данные на страницу
-  delete -      удаляет но не обновляет страницу
-  patch -       сделать страницу
-  create - ok


Не должно быть постоянного обновления страницы одного юзера