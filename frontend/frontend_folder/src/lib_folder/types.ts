
export interface ButtonProps {
    id?: string;
}

export interface ButtonProps1 {
    id?: string;
    stateChanger: () => void;
}


export const genders = [
    {
        value: 'female',
        label: 'female',
    },
    {
        value: 'male',
        label: 'male',
    }]


export const positions = [
    {
        value: 'clerk',
        label: 'clerk',
    },
    {
        value: 'vender',
        label: 'vender',
    },
    {
        value: 'manager',
        label: 'manager',
    },
    {
        value: 'boss',
        label: 'boss',
    },
    {
        value: 'whore',
        label: 'whore',
    }

]


export type Employee = {
    Id?: string;
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


export interface PatchEmployeeRequest {
    id?: string;
    position?: string;
    salary?: number,
}