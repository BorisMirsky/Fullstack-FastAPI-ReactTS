import uvicorn
from model import *
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker
from fastapi import Depends, FastAPI, Body, Request, Query
from fastapi.responses import JSONResponse, FileResponse
from datetime import datetime
from pydantic import create_model
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


origins = [
    #"http://localhost:5173",
    #"localhost:5173",
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


#----------------------- api --------------------------------------#
        
@app.get("/")
def root():
    #return FileResponse("public/index.html")
    return"Start page1"



@app.get("/allEmployees")
def get_all_employees(db: Session = Depends(get_db)):
    res = db.query(Employee).all()  
    return res  #.gender   

# /oneEmployee/FA246E13-3220-4568-807B-1B04BD70248C
# /oneEmployee/5E0F85A9-4ADA-49F7-8C81-556EE8F8826D
@app.get("/oneEmployee/{id_}") #5E0F85A9-4ADA-49F7-8C81-556EE8F8826D
def get_one_employee(id_, db: Session = Depends(get_db)):
    content = ""
    client = db.query(Employee).filter(Employee.Id == id_).first()
    if client==None:  
        return JSONResponse(status_code=404, content={ "message": "Пользователь не найден"})
    result = {"status":"OK", "code":200, "content": client}
    return result



@app.post("/newEmployee")
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

       



    
