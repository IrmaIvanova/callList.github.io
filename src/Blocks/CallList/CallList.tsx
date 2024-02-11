
import { useState, useEffect, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box/Box"
import { PaperBox, TableCellHead, IconButtonStyled, ButtonStyled } from './CallList.styled'
import { ListHeader } from './ListHeader/ListHeader'
import { ListItem } from './ListItem/ListItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import query_String from 'query-string'
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

// - листинг звонков с выборкой по датам; 
// - фильтрация звонков по типу: входящие, исходящие или все звонки; +
// - проигрывание записи (если есть);
//  - сортировка по дате и продолжительности через API +. 

export const CallList = () => {
    const [list, setList] = useState([])
    const [type, setType] = useState("all")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("date")
    const [dateSort, setDateSort] = useState("DESC")
    const [timeSort, setTimeSort] = useState("DESC")

    const paramsOpt = useMemo(() => {
        return {
            search: search,
            date_start: startDate,
            date_end: endDate,
            in_out: type,
            sort_by: sort,
            order: sort === "date" ? dateSort : timeSort
        }
    }, [type, search, sort, dateSort, timeSort, startDate, endDate])


    const getApiData = async (params: { [key: string]: string }) => {
        const clearData: any = {}
        for (let [key, value] of Object.entries(params)) {

            if (value !== '') clearData[key] = value
        }
        let queryString: string = ''

        queryString += '?' + query_String.stringify({ ...clearData })

        // const url = `https://api.skilla.ru/mango/getList`
        const url = `https://api.skilla.ru/mango/getList${queryString}`

        const response = await fetch(
            url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Authorization": "Bearer testtoken"

            },
        }
        ).then((response) => response.json());

        // Обновим состояние
        setList(response.results);


    };

    useEffect(() => {
        getApiData(paramsOpt)
    }, [paramsOpt])

    // console.log("list", list)
    const getTime = (date: string) => {
        const TimeArr = new Date(date).toLocaleTimeString().split(":")
        return TimeArr.filter((el: string, idx: number) => idx !== TimeArr.length - 1).join(":");
    };


    const rows = useMemo(() => {

        return list?.map((el: any) => createData(
            {
                in_out: el.in_out,
                status: el.status
            },
            getTime(el.date),
            {
                id: el.id,
                avatar: el.person_avatar,
                name: el.person_name + " " + el.person_surname,

            },
            {
                number: el.from_number,
                partner: el.partner_data
            },
            el.source,
            0,
            el.time),)
    }, [list])

    return (

        <Box sx={{ width: "65%", margin: "64px 25% 0 25%" }}>
            <ListHeader
                search={search}
                onSearchChange={setSearch}
                onChangeType={setType}
                onChangeStartDate={setStartDate}
                onChangeEndDate={setEndDate}
            />
            <TableContainer component={PaperBox}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ color: "#5E7793" }}>
                            <TableCellHead sx={{ width: "25px" }}>Тип</TableCellHead>
                            <TableCellHead sx={{ width: "77px" }}>
                                <ButtonStyled
                                    className={`${sort === "date" ? "ButtonSortActive" : ""}`}
                                    onClick={() => {
                                        setSort("date")
                                        if (sort === "date") setDateSort(dateSort === "ASC" ? "DESC" : "ASC")
                                    }}>
                                    Время
                                    {dateSort === "ASC" ?
                                        <KeyboardArrowUpIcon /> :
                                        <KeyboardArrowDownIcon />}</ButtonStyled>

                            </TableCellHead>
                            <TableCellHead sx={{ width: "70px" }}>Сотрудник</TableCellHead>
                            <TableCellHead sx={{ width: "325px" }}>Звонок</TableCellHead>
                            <TableCellHead sx={{ width: "214px" }}>Источник</TableCellHead>
                            <TableCellHead sx={{ width: "461px" }}>Оценка</TableCellHead>
                            <TableCellHead sx={{ width: "169px", paddingRight: "30px" }}>
                                <ButtonStyled
                                    className={`${sort === "duration" ? "ButtonSortActive" : ""}`}
                                    onClick={() => {
                                        setSort("duration")
                                        if (sort === "duration") setTimeSort(timeSort === "ASC" ? "DESC" : "ASC")
                                    }}>
                                    Длительность

                                    {timeSort === "ASC" ?
                                        <KeyboardArrowUpIcon /> :
                                        <KeyboardArrowDownIcon />}

                                </ButtonStyled>
                            </TableCellHead>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index: number) => (
                            <ListItem key={`ListItemKey_${row.collegue.id}`} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}



