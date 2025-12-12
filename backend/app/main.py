import uvicorn
from model import *
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker
from fastapi import Depends, FastAPI, Body, Request, Query
from fastapi.responses import JSONResponse, FileResponse
from datetime import datetime
from pydantic import create_model
from fastapi.middleware.cors import CORSMiddleware
import uuid


app = FastAPI()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# сессия подключения к бд
SessionLocal = sessionmaker(autoflush=False, bind=engine)   # True\False ?

# определяем зависимость
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


"""
# Вспомогательная функция
def find_person(id_, db: Session = Depends(get_db)):
   people = db.query(Employee).all() 
   for person in people: 
        if person.id == id_:
           return person
   return None
"""


        
@app.get("/")
def root():
    #return FileResponse("public/index.html")
    return "project's root"


@app.get("/allEmployees")
def get_all_employees(db: Session = Depends(get_db)):
    #print('___allEmployees___')
    res = db.query(Employee).all()
    return res   


@app.get("/oneEmployee/{id_}")
def get_one_employee(id_, db: Session = Depends(get_db)):
    print('get_one_employee ', id_)
    empl = db.query(Employee).filter(Employee.Id == id_).first()
    if empl==None:  
        return JSONResponse(status_code=404, content={ "message": "Пользователь не найден"})
    result = {"status":"OK", "code":200, "content": empl}
    #print('get_one_employee name', empl.name)
    return result


@app.delete("/deleteEmployee") #/{id_}")
def delete_employee(db: Session = Depends(get_db)):     #id_,
    print('___deleteEmployee___')
    #client = db.query(Employee).filter(Employee.Id == id_).first()
    #if not client:  
    #    return JSONResponse(status_code=404, content={ "message": "Пользователь не найден"})
    #db.delete(client)
    #db.commit()


@app.post("/newEmployee/")
def create_employee(data = Body(), db: Session = Depends(get_db)):
    #print('create_employee', data)
    new_client = Employee()
    new_client.Id = str(uuid.uuid4())
    new_client.name = data["name"]
    new_client.position = data["position"]
    new_client.gender = data["gender"]
    new_client.salary = data["salary"]
    new_client.birthdate = data["birthYear"]
    db.add(new_client)
    db.commit() 
    db.refresh(new_client)
    result = {"status":"OK", "code":200, "content":new_client}
    return result


@app.patch("/patchEmployee/{id_}")
def put_employee(id_, data  = Body(), db: Session = Depends(get_db)):
    empl = db.query(Employee).filter(Employee.Id == id_).first()
    if empl==None:  
        return JSONResponse(status_code=404, content={ "message": "Пользователь не найден"})
    empl.position = data["position"]
    empl.salary = data["salary"]
    db.add(empl)
    db.commit()
    db.refresh(empl)
    result = {"status":"OK", "code":200, "employee": empl}
    return result



#http://127.0.0.1:8000/
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

       



    
