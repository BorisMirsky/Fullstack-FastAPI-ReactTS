'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Employee } from '../../../lib_folder/types';
//import AllEmployeesTable from '@/app/Components/allEmployeesTableComponent';



// One Employee
export default function Page() {
    const [loading, setLoading] = useState(false)
    const [eml, setEmpl] = useState<Employee>();


    //useEffect(() => {
    //    const getEmpl = async () => {
    //        const responce = await getOneOrder(id);
    //        setLoading(false);
    //        setOrder(responce);
    //        const role = localStorage.getItem("role") || "";
    //        setCurrentRole(role);
    //    };
    //    getOrder();
    //});    


    return (
        <div>One Employee</div>
    )
}

