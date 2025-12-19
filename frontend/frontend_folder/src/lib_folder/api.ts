
import { EmployeeRequest } from '@/lib_folder/types';


export const getAllEmployees = async () => {
    const url: string = "http://127.0.0.1:8000/allEmployees";
    const response = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};


export const getEmployee = async (_id: string) => {
    const url = `http://127.0.0.1:8000/oneemployee?id=${_id}`;
    const response = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            console.log('getOneEmployee data: ', data);
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};


export const deleteEmployee = async (id: string) => {
    const url = `http://127.0.0.1:8000/deleteemployee/${id}`;
    await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'DELETE',
        },
        method: 'DELETE',
        mode: 'cors'
    });
};


export const createEmployee = async (emplRequest: EmployeeRequest) => {
    await fetch("http://127.0.0.1:8000/newEmployee/", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'POST',
        },
        mode: 'cors',
        body: JSON.stringify(emplRequest)
    }).catch(error => console.log("createEmployeeError: ", error));
};