'use client'

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { EmployeeRequest } from '@/lib_folder/types';
import { Employee } from '@/lib_folder/types';
import MenuItem from '@mui/material/MenuItem';
import ButtonToMain from '@/app/Components/buttonBackToMain';


//data: Employee
export default function UpdateEmployee({name, gender, birthdate, position, salary }: Employee) {
    //const [, setName] = useState('');
    //const [, setGender] = useState('');
    //const [, setYear] = useState();
    //const [, setPosition] = useState('');
    //const [, setSalary] = useState();


    //function handleClear() {
    //    setName('');
    //    setGender('');
    //    setYear(2000);
    //    setPosition('');
    //    setSalary(50000);
    //};


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //const request: EmployeeRequest = {
        //    name: name,
        //    gender: gender,
        //    birthYear: year,
        //    position: position,
        //    salary: salary
        //}
        //handleClear();
    };

    const genders = [
        {
            value: 'female',
            label: 'female',
        },
        {
            value: 'male',
            label: 'male',
        }]

    const positions = [
        {
            value: 'clerk',
            label: 'clerk',
        },
        {
            value: 'vender',
            label: 'vender',
        },
        {
            value: 'manager',
            label: 'manager',
        },
        {
            value: 'boss',
            label: 'boss',
        },
        {
            value: 'whore',
            label: 'whore',
        }

    ]


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
                component="h2"
                gutterBottom
            >
                Редактировать данные
            </Typography>

            <TextField
                //label="Name"
                variant="outlined"
                type="text"
                value={name}
                //onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                size="small"
            />

            <TextField
                //label="Gender"
                variant="outlined"
                //select
                defaultValue="" 
                value={gender}
                //onChange={(e) => setGender(e.target.value)}
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
                //label="BirthYear"
                variant="outlined"
                type='number'
                value={birthdate}
                //onChange={(e) => setYear(parseInt(e.target.value))}
                fullWidth
                size="small"
                margin="normal"
                //InputProps={{ inputProps: { readOnly: true, min: 1955, max: 2007 } }}
            />

            <TextField
                //label="Position"
                variant="outlined"
                //select
                defaultValue=""
                value={position}
                //onChange={(e) => setPosition(e.target.value)}
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
                //label="Salary"
                variant="outlined"
                type="number"
                value={salary}
                //onChange={(e) => setSalary(parseInt(e.target.value))}
                fullWidth
                size="small"
                margin="normal"
                //InputProps={{ inputProps: { min: 50000, max: 5000000 } }}
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