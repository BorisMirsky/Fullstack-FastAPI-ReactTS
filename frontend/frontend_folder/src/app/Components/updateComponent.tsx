/* eslint-disable @typescript-eslint/no-unused-expressions */


'use client'

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Employee,  PatchEmployeeRequest, genders, positions } from '@/lib_folder/types';
import { patchEmployee, getEmployee } from '@/lib_folder/api';
import MenuItem from '@mui/material/MenuItem';
import ButtonToMain from '@/app/Components/buttonBackToMain';
import { Alert } from '@mui/material';



export default function UpdateEmployee({id, name, gender, birthdate }: Employee) {
    const [selectedPosition, setPosition] = useState<string|undefined>("");
    const [selectedSalary, setSalary] = useState<number|undefined>(0);
    const [salaryError, setSalaryError] = useState(false);
    const [salaryHelperText, setSalaryHelperText] = useState('');


    useEffect(() => {
        const getData = async () => {
            const response = await getEmployee(id!);
            setPosition(response.content.position);
            setSalary(response.content.salary);
        }
        getData();
    }, []);

    const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const request: PatchEmployeeRequest = {
            id: id,
            position: selectedPosition,
            salary: selectedSalary
        }
        if (salaryError == true) {
            alert("Выход за рамки '50k < Зарплата < 500k'");
        }
        else {
            patchEmployee(request);
        }
    };

    const handleSalary = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const s: number = parseInt(event.target.value);
        setSalary(s);
        if (s < 50000) {
            setSalaryError(true);
            setSalaryHelperText("not enough, increase more");
        } else if (s > 500000) {
            setSalaryError(true);
            setSalaryHelperText("too much");
        } else {
            setSalaryError(false);
            setSalaryHelperText("");
        }
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 5,
                m: 10,
                width: '20%',
                border: '3px solid #ccc',
                borderRadius: '8px',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >

            <Typography
                variant="h5"
                component="h3"
                gutterBottom
                align="center"
            >
                <p>Можно редактировать поля 'Должность' и 'Зарплата'</p>
            </Typography>
            <TextField
                variant="outlined"
                type="text"
                value={name ?? ""}
                fullWidth
                margin="normal"
                size="small"
                disabled
            />

            <TextField
                variant="outlined"
                value={gender ?? ""}
                disabled
                fullWidth
                size="small"
                margin="normal"
            >
                {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                variant="outlined"
                type='number'
                value={birthdate ?? ""}
                disabled
                fullWidth
                size="small"
                margin="normal"
            />

            <TextField
                variant="outlined"
                select
                value={selectedPosition ?? ""}
                onChange={handlePositionChange}
                fullWidth
                margin="normal"
                size="small"
            >
                {positions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                required={true}
                label="Salary"
                variant="outlined"
                type="number"
                value={selectedSalary ?? 0}
                onChange={(e) => handleSalary(e)}
                error={salaryError}
                fullWidth
                size="small"
                margin="normal"
                helperText={salaryHelperText} 
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
            >
                Сохранить
            </Button>

            <ButtonToMain />

        </Box>
    )
}