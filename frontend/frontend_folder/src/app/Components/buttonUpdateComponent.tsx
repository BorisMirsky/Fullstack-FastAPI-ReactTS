'use client'


import * as React from 'react';
import Button from '@mui/material/Button';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ButtonProps } from '@/lib_folder/types';
//import { getOneEmployee } from '@/lib_folder/api';
//import { spacing } from '@mui/system';
import { useRouter } from 'next/navigation';


export default function ButtonUpdate({ id }: ButtonProps) {
    const [_, setId] = useState<string>()
    const router = useRouter();


    useEffect(() => {
        if (id)
        {
            setId(id)
        }
    }, [id])   

    function handleClick() {
        console.log(id, 'Function ButtonUpdate');
    }


    return (
        <Button
            variant="contained"
            size="small"
            color="warning"  
            //onClick={() => router.push('/employee/id=' + id)}
            onClick={() => handleClick()}
            sx={{ ml: 2, mr: 2 }}
        >
            Update
            </Button>
    )
}

