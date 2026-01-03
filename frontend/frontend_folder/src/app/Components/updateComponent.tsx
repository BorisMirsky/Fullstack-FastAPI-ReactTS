'use client'

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Employee,  PatchEmployeeRequest, genders, positions } from '@/lib_folder/types';
import { patchEmployee } from '@/lib_folder/api';
import MenuItem from '@mui/material/MenuItem';
import ButtonToMain from '@/app/Components/buttonBackToMain';



export default function UpdateEmployee({id, name, gender, birthdate, position, salary }: Employee) {
    const [selectedPosition, setPosition] = useState(position);
    const [selectedSalary, setSalary] = useState(salary);

    //useEffect(() => {
    //    //setPosition(position);
    //    console.log("name, gender, birthdate, position, salary", name, gender, birthdate, position, salary);
    //    //console.log('selectedPosition ', selectedPosition);
    //    //console.log('position ', position);
    //    //console.log('selectedSalary ', selectedSalary);
    //}, [selectedPosition, selectedSalary]);  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const request: PatchEmployeeRequest = {
            id: id,
            position: selectedPosition,
            salary: selectedSalary
        }
        patchEmployee(request);
        //console.log(name, gender, birthdate, selectedPosition, selectedSalary)
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
                component="h2"
                gutterBottom
            >
                Редактировать данные
            </Typography>

            <TextField
                variant="outlined"
                type="text"
                value={name ?? ""}
                fullWidth
                margin="normal"
                size="small"
                slotProps={{
                    htmlInput: {
                        readOnly: true, 
                    },
                }}
            />

            <TextField
                variant="outlined"
                value={gender ?? ""}
                slotProps={{
                    htmlInput: {
                        readOnly: true,
                    },
                }}
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
                slotProps={{
                    htmlInput: {
                        readOnly: true,
                    },
                }}
                fullWidth
                size="small"
                margin="normal"
            />

            <TextField
                variant="outlined"
                select
                //value={selectedPosition! ? selectedPosition : position}
                value={selectedPosition ?? ""}
                onChange={(e) => setPosition(e.target.value)}
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
                variant="outlined"
                type="number"
                value={selectedSalary ?? 0}
                onChange={(e) => setSalary(parseInt(e.target.value))}
                fullWidth
                size="small"
                margin="normal"
                InputProps={{ inputProps: { min: 50000, max: 5000000 } }}
                //slotProps={{input: {min: 50000, max: 5000000,},}}
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