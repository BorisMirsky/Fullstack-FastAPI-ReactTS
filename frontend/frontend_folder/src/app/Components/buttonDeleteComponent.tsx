'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { deleteEmployee } from '@/lib_folder/api';
import type { ButtonProps1 } from '@/lib_folder/types';


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function ButtonDelete({ id, stateChanger }: ButtonProps1) {
    const [_, setId] = useState<string>();

    useEffect(() => {
        if (id) {
            setId(id);
        }
    }, [id]);


    const handleClick = async () => {
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


