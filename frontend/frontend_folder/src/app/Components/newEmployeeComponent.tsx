'use client'

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createEmployee } from '@/lib_folder/api';
import { EmployeeRequest, genders, positions } from '@/lib_folder/types';
import MenuItem from '@mui/material/MenuItem';
import ButtonToMain from '@/app/Components/buttonBackToMain';


export default function NewEmployee () {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [year, setYear] = useState<number | undefined>(0);
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState<number | undefined>(undefined);
    const [yearError, setYearError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [yearHelperText, setYearHelperText] = useState('');
    const [salaryHelperText, setSalaryHelperText] = useState('');

    function handleClear() {
        setName('');
        setGender(''); 
        setYear(undefined);
        setPosition('');
        setSalary(undefined); 
    };

    const handleBirthYear = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const year: number = parseInt(event.target.value);
        setYear(year);
        if (year < 1955) {
            setYearError(true); 
            setYearHelperText("too old");
        } else if (year > 2005) {
            setYearError(true); 
            setYearHelperText("too young");
        } else {
            setYearError(false);
            setYearHelperText("");
        }
    };

    const handleSalary = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const s: number = parseInt(event.target.value);
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
        setSalary(s);
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
        if (salaryError == true) {
            alert("Зарплата должна быть в рамках 50k - 500k")
        }
        else if (yearError == true) {
            alert("Год рождения должен быть в рамках 1955 - 2005")
        }
        else {
            createEmployee(request);
            handleClear();
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
      <Typography variant="h5" component="h2" gutterBottom>
        Новый сотрудник
      </Typography>

      <TextField
        required={true}
        label="Name"
        variant="outlined"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        size="small"
      />

    <TextField
        required={true}
        label="Gender"
        variant="outlined"
        select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
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
        required
        label="BirthYear"
        variant="outlined"
        type='number'
        value={year ?? 0}
        onChange={(e) => handleBirthYear(e)}
        error={yearError}
        fullWidth
        size="small"
        margin="normal"
        helperText={yearHelperText} 
        />

        <TextField
            required={true}
            label="Position"
            variant="outlined"
            select
            value={position}
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
            required={true}
            label="Salary"
            variant="outlined"
            type="number"
            value={salary ?? 0}
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
        Создать
    </Button>

    <ButtonToMain/>

    </Box>
    )
}