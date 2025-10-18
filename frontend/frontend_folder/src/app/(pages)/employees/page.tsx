'use client'

//import React from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import { getAllEmployees } from '@/lib/api'
import type { Employee } from '@/lib/types'





// Employees
export default function Page() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [loading, setLoading] = useState(false)


    
    async function refresh() {
        try {
            setLoading(true)
            const empls: [] = await getAllEmployees();
            setEmployees(empls);
            console.log("empls: ", empls);
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => { void refresh() }, [])


    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell align="right">Год рождения</TableCell>
                        <TableCell align="right">Должность</TableCell>
                        <TableCell align="right">Зарплата</TableCell>
                        <TableCell align="right"> ___666___ </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {employees.map((employee) => (
                        <TableRow
                            key={employee.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{employee.name}</TableCell>
                            <TableCell align="right">{employee.birthdate}</TableCell>
                            <TableCell align="right">{employee.position}</TableCell>
                            <TableCell align="right">{employee.salary}</TableCell>
                            <TableCell align="right">две кнопки</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

