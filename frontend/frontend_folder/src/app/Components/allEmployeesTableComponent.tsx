'use client'


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { Employee } from '@/lib_folder/types';
import { useEffect, useState } from 'react';
import { getAllEmployees } from '@/lib_folder/api';
import ButtonDelete from '@/app/Components/buttonDeleteComponent';
import ButtonUpdate from '@/app/Components/buttonUpdateComponent';
import { spacing } from '@mui/system';


const theme = {
    spacing: 8,
}



export default function AllEmployeesTable() {
    const [employees, setEmployees] = useState<Employee[]>([])

    async function refresh() {
        try {
            const empls: [] = await getAllEmployees();
            setEmployees(empls);
        } catch (e) {
            console.log("Error: ", e);
        } 
    }


    useEffect(() =>
    {
        void refresh()
    },
        [])


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650, m: 5 }}
                aria-label="simple table"
                style={{ width: 1000 }}
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Имя</StyledTableCell>
                        <StyledTableCell align="right">Год рождения</StyledTableCell>
                        <StyledTableCell align="right">Должность</StyledTableCell>
                        <StyledTableCell align="right">Зарплата</StyledTableCell>
                        <StyledTableCell align="right">  </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {employees.map((employee) => (
                        <StyledTableRow
                            key={employee.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row">{employee.name}</StyledTableCell>
                            <StyledTableCell align="right">{employee.birthdate}</StyledTableCell>
                            <StyledTableCell align="right">{employee.position}</StyledTableCell>
                            <StyledTableCell align="right">{employee.salary}</StyledTableCell>
                            <StyledTableCell align="right">
                                <ButtonDelete id={employee.Id} colorButton="error" />
                                <ButtonUpdate id={employee.Id} colorButton="warning" />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}