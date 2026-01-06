'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Employee } from '../../../lib_folder/types';
import UpdateEmployee from '@/app/Components/updateComponent';
import { getEmployee } from '@/lib_folder/api';
import { useSearchParams } from 'next/navigation';


export default function Page() {
    const [empl, setEmpl] = useState<Employee>();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const id = params.toString().split("=")[1];

    useEffect(() => {
        const getEmpl = async () => {
            const responce = await getEmployee(id);
            setEmpl(responce.content);
        };
        getEmpl();
    }, [id, empl?.position, empl?.salary]);  


    return (
        <div>
            <div>
                <UpdateEmployee
                    id={id}
                    name={empl?.name}
                    gender={empl?.gender}
                    birthdate={empl?.birthdate}
                />
            </div>
        </div>
    )
}

