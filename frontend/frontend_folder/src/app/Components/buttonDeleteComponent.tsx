'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
//import { useEffect } from 'react';
import { deleteEmployee } from '@/lib_folder/api';
import type { ButtonProps1 } from '@/lib_folder/types';


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function ButtonDelete({ id, stateChanger }: ButtonProps1) {
    //useEffect(() => {
    //    console.log('from ButtonDelete ', id)
    //}, [])  

    const handleClick = async () => {
        alert("Уверены в удалении?");
        await deleteEmployee(id);
        stateChanger();
    };

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
    );
}


