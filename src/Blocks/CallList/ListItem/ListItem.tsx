
import React, { FC } from 'react';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import Box from "@mui/material/Box/Box"
import { TableCellItem } from "../CallList.styled"

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
        call: {
            number: string,
            partner: {
                id: string,
                name: string,
                phone: string
            }
        }
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
            <TableCellItem component="th" scope="row">
                {row.type.in_out === 0 ? <CallMadeOutlinedIcon color={row.type.status === "Дозвонился" ? "success" : "error"} /> :
                    <CallReceivedOutlinedIcon color={row.type.status === "Дозвонился" ? "primary" : "error"} />}
            </TableCellItem>

            <TableCellItem sx={{ color: "#122945" }}>{row.time}</TableCellItem>

            <TableCellItem ><Avatar alt={row.collegue.name} src={row.collegue.avatar} /></TableCellItem>

            <TableCellItem sx={{ width: "325px", boxSizing: "border-box" }}>
                <Typography sx={{ fontSize: "15px", color: "#122945" }}>
                    {row.call.number.length > 11 ? row.call.partner.phone : row.call.number}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: " #5E7793" }}>
                    {row.call.partner.name}
                </Typography>
            </TableCellItem>

            <TableCellItem >
                <Typography sx={{ fontSize: "15px", color: " #5E7793" }}>
                    {row.source}
                </Typography>
            </TableCellItem>

            <TableCellItem  sx={{ color: "#122945"}}>{row.rating}</TableCellItem>

            <TableCellItem sx={{ textAlign: "right", paddingRight: "30px", color: "#122945" }}>{row.duration}</TableCellItem>
        </TableRow>

    );
}



