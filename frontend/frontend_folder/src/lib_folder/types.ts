
export interface ButtonProps {
    id: string
    //colorButton: string 
}

export interface ButtonProps1 {
    id: string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    func: Function
}


export type Employee = {
    Id: string;
    name: string;
    gender: string;
    birthdate: number;
    position: string;
    salary: number;
};


export interface EmployeeRequest {
    name: string;
    gender: string;
    birthYear: number;
    position: string;
    salary: number,
}


