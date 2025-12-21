'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Employee } from '../../../lib_folder/types';
//import AllEmployeesTable from '@/app/Components/allEmployeesTableComponent';
import { getEmployee } from '@/lib_folder/api';
import { useSearchParams } from 'next/navigation';


// One Employee
export default function Page() {
    //const [loading, setLoading] = useState(false)
    const [empl, setEmpl] = useState<Employee>(); 
    //
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const id = params.toString().split("=")[1];
    //
    //async function refresh() {
    //    try {
    //        setLoading(true)
    //    } catch (e) {
    //        console.log("Error: ", e);
    //    } finally {
    //        setLoading(false)
    //    }
    //}


    //useEffect(() => { void refresh() }, [])

    useEffect(() => {
        const getEmpl = async () => {
            const responce = await getEmployee(id);
            //setLoading(false);
            setEmpl(responce);
        };
        getEmpl();
    });  


    return (
        <div>
        <div>One Employee</div>
            <div>id `${id}`</div>
            <div>empl?.name {empl?.name}</div>
            <div>{empl?.birthdate}</div>
        </div>
    )
}

