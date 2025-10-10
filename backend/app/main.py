import uvicorn
from model import *
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker
from fastapi import Depends, FastAPI, Body, Request, Query
from fastapi.responses import JSONResponse, FileResponse
from datetime import datetime
from pydantic import create_model


app = FastAPI()

# сессия подключения к бд
SessionLocal = sessionmaker(autoflush=False, bind=engine)   # True\False ?

# определяем зависимость
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#----------------------- api --------------------------------------#
        
@app.get("/")
def root():
    #return FileResponse("public/index.html")
    return"Start page"



@app.get("/api/allEmployees")
def get_all_employees(db: Session = Depends(get_db)):
    #print(db.query(Employee).all())
    return db.query(Employee).all()


@app.get("/api/oneEmployee/{id}")
def get_one_employee(id, db: Session = Depends(get_db)):
    content = ""
    client = db.query(Employee).filter(Employee.Id == id).first()
    if client==None:  
        return JSONResponse(status_code=404, content={ "message": "Пользователь не найден"})
    #client_parsed = row2dict(client)
    # '?currency=usd'
    #if currency:
    #    balance_usd = round( int(client_parsed['balance']) / current_dollar_rate, 3)
    #    content = "Клиент: {0}, Баланс в usd: {1}".format(client_parsed['name'], balance_usd)
    #else:
    #    content = "Клиент: {0}, Баланс в рублях: {1}".format(client_parsed['name'], client_parsed['balance'])
    result = {"status":"OK", "code":200, "content": content}
    return result
    #return db.query(Employee).all()


@app.post("/api/newEmployee")
def create_employee(data  = Body(), db: Session = Depends(get_db)):
    new_client = Employee()
    new_client.name = data["name"]
    new_client.position = data["position"]
    db.add(new_client)
    db.commit() 
    db.refresh(new_client)
    return new_client




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)













       
if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)
