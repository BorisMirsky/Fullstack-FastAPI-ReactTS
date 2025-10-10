from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import  Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm import DeclarativeBase
from fastapi import FastAPI
import uuid



SQLALCHEMY_DATABASE_URL = "sqlite:///../database/EmpoloyeesDB.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

 
Base = declarative_base()

class Employee(Base):
    __tablename__ = "people" 
    #id_ = Column(uuid.UUID, primary_key=True, index=True)
    Id = Column(String, primary_key=True, index=True)
    name = Column(String)
    gender = Column(String)
    birthdate = Column(Integer)
    position = Column(String)
    salary = Column(Integer)



SessionLocal = sessionmaker(autoflush=False, bind=engine)









