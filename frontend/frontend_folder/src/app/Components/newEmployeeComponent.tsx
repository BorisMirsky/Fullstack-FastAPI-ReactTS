'use client'

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createEmployee } from '@/lib_folder/api';
import { EmployeeRequest } from '@/lib_folder/types';
import MenuItem from '@mui/material/MenuItem';



export default function NewEmployee () {
    //const router = useRouter();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [year, setYear] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleClear = () => {
        setName('');
        setGender(''); 
        setYear('');
        setPosition('');
        setSalary(''); 
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {  
        event.preventDefault();
        const request: EmployeeRequest = {
            name: name,
            gender: gender,
            birthYear: year,
            position: position,
            salary: salary
        }
        createEmployee(request);
        handleClear();
        //console.log('Form submitted:', { name, gender, year, position, salary });
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
            '& .MuiTextField-root': { ml: 5, mr:5, mt:5, width: '25ch' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            border: '3px solid #ccc',
            borderRadius: '8px',
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
      <Typography variant="h5" component="h2" gutterBottom>
        Новый сотрудник
            </Typography>

      <TextField
        label="Name"
        variant="outlined"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
            />

      <TextField
        label="Gender"
        variant="outlined"
        select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        fullWidth
        margin="normal"
            >
           {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
        </TextField>

        <TextField
            label="BirthYear"
            variant="outlined"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            fullWidth
            margin="normal"
        />

        <TextField
            label="Position"
            variant="outlined"
            select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            fullWidth
            margin="normal"
            >
                {positions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

        <TextField
            label="Salary"
            variant="outlined"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            fullWidth
            margin="normal"
        />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Создать
      </Button>
            </Box>

    )
}