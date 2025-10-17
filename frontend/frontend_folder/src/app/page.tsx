"use client"

import styles from "./page.module.css";
import React from 'react';
import { Button } from '@mui/material';
export default function HomePage() {   
    return (
        <div className={styles.main}
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            }}>
            <main className={styles.main}>
                main
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary">
                    Material-UI Button
                </Button>
            <br/>
            </main>
        </div>);
};

