'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import AllEmployeesTable from '@/app/Components/allEmployeesTableComponent';



// Employees
export default function Page() {
    const [_, setLoading] = useState(false)


    async function refresh() {
        try {
            setLoading(true)
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => { void refresh() }, [])


    return (
        <AllEmployeesTable />
    )
}

