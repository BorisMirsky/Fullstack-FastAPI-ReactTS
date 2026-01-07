'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';


export default function ButtonToMain() {
    const router = useRouter();

    return (
        <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => router.push('/employees')}
            sx={{ ml: 5, mt: 5 }}
        >
            Вернуться к списку сотрудников
        </Button>
    )
}