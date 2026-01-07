'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import NewEmployee from '@/app/Components/newEmployeeComponent';


export default function Page() {
    const [ , setLoading] = useState(false)


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
        <div>
        <NewEmployee />
        </div>
    )
}

