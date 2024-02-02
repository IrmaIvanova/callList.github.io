
import React, { useState, useEffect, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import Box from "@mui/material/Box/Box"
import { PaperBox } from './CallList.styled'

function createData(
    type: any,
    time: any,
    collegue: any,
    call: any,
    source: any,
    rating: any,
    duration: any,
) {
    return { type, time, collegue, call, source, rating, duration };
}




export const CallList = ({ }) => {
    const [list, setList] = useState([])
    const url = "https://api.skilla.ru/mango/getList"
    const getApiData = async () => {
        const response = await fetch(
            url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Authorization": "Bearer testtoken"

            }
        }
        ).then((response) => response.json());




        // Обновим состояние
        setList(response.results);


    };

    useEffect(() => {
        getApiData()
    }, [])

    console.log("list", list)
    const getTime = (date: string) => {
        const TimeArr = new Date(date).toLocaleTimeString().split(":")
        return TimeArr.filter((el: string, idx: number) => idx !== TimeArr.length - 1).join(":");
    };
    console.log("time", getTime("2024-02-02 20:03:01"))

    const rows = useMemo(() => {

        return list?.map((el: any) => createData(
            {
                in_out: el.in_out,
                status: el.status
            },
            getTime(el.date),
            {
                avatar: el.person_avatar,
                name: el.person_name + " " + el.person_surname,

            },
            el.from_number,
            el.source,
            0,
            el.time),)
    }, [list])
    return (
        <Box sx={{ width: "1440px", margin: "64px auto 0 auto" }}>
            <TableContainer component={PaperBox}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Тип</TableCell>
                            <TableCell align="right">Время</TableCell>
                            <TableCell align="right">Сотрудник</TableCell>
                            <TableCell align="right">Звонок</TableCell>
                            <TableCell align="right">Источник</TableCell>
                            <TableCell align="right">Оценка</TableCell>
                            <TableCell align="right">Длительность</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.type}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.type.in_out === 0 ? <CallMadeOutlinedIcon color={row.type.status === "Дозвонился" ? "success" : "error"} /> :
                                        <CallReceivedOutlinedIcon color={row.type.status === "Дозвонился" ? "primary" : "error"} />}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right"><Box sx={{ display: "flex", justifyContent: "center" }}><Avatar alt={row.collegue.name} src={row.collegue.avatar} /></Box></TableCell>
                                <TableCell align="right">{row.call}</TableCell>
                                <TableCell align="right">{row.source}</TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right">{row.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}



