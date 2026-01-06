'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
//import { useEffect } from 'react';
import { ButtonProps } from '@/lib_folder/types';
import { useRouter } from 'next/navigation';


export default function ButtonUpdate({ id }: ButtonProps) {
    const router = useRouter();

    //useEffect(() => {
    //    console.log('from ButtonUpdate ', id)
    //}, [])   

    function handleClick() {
        router.push('/employee?id=' + id);
    }


    return (
        <Button
            variant="contained"
            size="small"
            color="warning"  
            onClick={() => handleClick()}
            sx={{ ml: 2, mr: 2 }}
        >
            Update
            </Button>
    )
}

