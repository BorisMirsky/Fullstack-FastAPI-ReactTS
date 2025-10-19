'use client'


import * as React from 'react';
import Button from '@mui/material/Button';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ButtonProps } from '@/lib_folder/types';
import { deleteEmployee } from '@/lib_folder/api';
import { spacing } from '@mui/system';


const theme = {
    spacing: 8,
}

export default function ButtonDelete({ id, colorButton }: ButtonProps) {
    const [_, setId] = useState<string>()

    useEffect(() => {
        if (id) {
            setId(id)
        }
    }, [id])

    function handleClick() {
        deleteEmployee(id);
        console.log(id, 'Function ButtonDelete');
    }


    return (
        <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
                handleClick();
            }}
            sx={{ ml: 2, mr: 2 }}
        >
            Delete
        </Button>
    )
}