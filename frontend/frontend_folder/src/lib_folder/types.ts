
import { Dispatch, SetStateAction } from "react";

export interface ButtonProps {
    id: string
}

export interface ButtonProps1 {
    id: string
    stateChanger: Dispatch<SetStateAction<number>>
}


export type Employee = {
    id?: string;
    name?: string;
    gender?: string;
    birthdate?: number;
    position?: string;
    salary?: number;
};


export interface EmployeeRequest {
    name?: string;
    gender?: string;
    birthYear?: number;
    position?: string;
    salary?: number,
}
