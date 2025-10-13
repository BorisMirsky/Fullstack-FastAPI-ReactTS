
"use client"

import React from 'react';
import styles from "./page.module.css";
//import { Button } from '@material-ui/core';
//import { Button } from '@mui/material';
//import Button from '@material-ui/core/Button';
import { useRouter } from 'next/navigation';



export default function Home() {
    const router = useRouter();


  return (
    <div className={styles.page}>
      <main className={styles.main}>
              <div>
                  <h2>Список сотрудников</h2>
                  <br/>
                  <h3>Fast API, SQL, React, NextJS, Typescript, antd</h3>
                  <br />
                  <h4>CRUD операции и другая функциональность</h4>
                  <br/>
                  <br />
                  <p>

                      <button
                          onClick={() => router.push('/all_employees')}
                          style={{ flex: 1 }}
                      >
                          Go
                      </button>
                  </p>
        </div>
      </main>
      <footer className={styles.footer}>       
      </footer>
    </div>
  );
}
