"use client"


import styles from "./page.module.css";
import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function HomePage() {
    const router = useRouter();


    return (
        < div className = { styles.page }>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <h3>CRUD операции с БД &apos;&apos;Сотрудники&apos;&apos;</h3>
                <br /> 
                <p >ФИО сгенерированы python библиотекой &apos;russian-names&apos;</p>
                <p >Все возможные совпадения с реальными людьми являются случайными</p>
                <br /><br /><br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/employees')}
                >
                    Поехали
                </Button>
                <br />
            </div>
            </div>
    );
};

