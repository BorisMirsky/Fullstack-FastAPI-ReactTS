'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';


export default function ButtonCreate() {
    const router = useRouter();


    return (
        <Button
            variant="contained"
            size="small"
            onClick={() => router.push('/newemployee')}
            sx={{ ml: 5, mt: 5, backgroundColor: 'blue'}} 
        >
            Создать сотрудника
        </Button>
    )
}