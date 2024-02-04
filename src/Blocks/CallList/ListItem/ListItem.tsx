
import React, { useState, useEffect, useMemo, FC } from 'react';

import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import Box from "@mui/material/Box/Box"

export interface IListItemProps {
    row: {
        type: {
            in_out: number | string,
            status: string
        },
        time: string
        collegue: {
            avatar: string,
            name: string,

        }
        call: string
        source: string
        rating: any,
        duration: string
    }
    index: number
}


export const ListItem: FC<IListItemProps> = ({ row, index }) => {


    return (


        <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {row.type.in_out === 0 ? <CallMadeOutlinedIcon color={row.type.status === "Дозвонился" ? "success" : "error"} /> :
                    <CallReceivedOutlinedIcon color={row.type.status === "Дозвонился" ? "primary" : "error"} />}
            </TableCell>
            <TableCell align="right">{row.time}</TableCell>
            <TableCell align="right"><Box sx={{ display: "flex", justifyContent: "center" }}><Avatar alt={row.collegue.name} src={row.collegue.avatar} /></Box></TableCell>
            <TableCell align="right" sx={{ width: "246px", boxSizing: "border-box" }}>{row.call}</TableCell>
            <TableCell align="right">{row.source}</TableCell>
            <TableCell align="right">{row.rating}</TableCell>
            <TableCell align="right">{row.duration}</TableCell>
        </TableRow>

    );
}



