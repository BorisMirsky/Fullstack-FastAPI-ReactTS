'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Employee } from '../../../lib_folder/types';
//import AllEmployeesTable from '@/app/Components/allEmployeesTableComponent';
import UpdateEmployee from '@/app/Components/updateComponent';
import { getEmployee } from '@/lib_folder/api';
import { useSearchParams } from 'next/navigation';


// One Employee
export default function Page() {
    const [empl, setEmpl] = useState<Employee>(); 
    //
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const id = params.toString().split("=")[1];

    useEffect(() => {
        const getEmpl = async () => {
            const responce = await getEmployee(id);
            setEmpl(responce.content);
        };
        getEmpl();
    });  


    return (
        <div>
        <div>One Employee</div>
            <div>id `${id}`</div>
            <div>empl?.name {empl?.name}</div>
            <div>{empl?.birthdate}</div>
            <div><UpdateEmployee data={empl} /></div>
        </div>
    )
}

