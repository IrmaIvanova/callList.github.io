
import React, { useState, useEffect, useMemo } from 'react';
import Box from "@mui/material/Box/Box"
import { Dropdown } from "../../../UIComponents/Dropdown/Dropdown"
import { TOption } from "../../../UIComponents/Dropdown/Dropdown.interface"
import SearchIcon from '@mui/icons-material/Search';

// - листинг звонков с выборкой по датам; 
// - фильтрация звонков по типу: входящие, исходящие или все звонки; 
// - проигрывание записи (если есть);
//  - сортировка по дате и продолжительности через API. 

// https://api.skilla.ru/mango/getList
// ? date_start=<начальная дата>
// & date_end=<конечная дата>
// & in_out=<признак входящего или исходящего звонка></признак>



const calls: TOption[] = [
    {
        label: "Все звонки",
        value: "all"
    },
    {
        label: "Все клиенты",
        value: 'clients'
    },
    {
        label: "Исполнители",
        value: 'workers'
    },
    {
        label: "Через прилложение",
        value: 'app'
    },
]
const types: TOption[] = [
    {
        label: "Все типы",
        value: "all"
    },
    {
        label: "Входящии",
        value: '0'
    },
    {
        label: "axaxa",
        value: '1'
    }
]
const collegues: TOption[] = [

    {
        label: "Все сотрудники",
        value: "all"
    },
    {
        label: "Входящие",
        value: '0'
    },
    {
        label: "Исходящие",
        value: '1'
    }
]


const source: TOption[] = [
    {
        label: "Все источники",
        value: "all"
    },
    {
        label: "С сайта",
        value: 'from_site'
    },
    {
        label: "Yandex",
        value: 'yandex'
    },
    {
        label: "Google",
        value: 'google'
    },
    {
        label: "Номер линии",
        value: '12345678'
    },
    {
        label: "Без источника",
        value: 'empty'
    }
]


const rating: TOption[] = [
    {
        label: "Все оценки",
        value: "all"
    },

]
const errors: TOption[] = [
    {
        label: "Все ошибки",
        value: "all"
    },
    {
        label: "Без ошибок",
        value: 'noerrors'
    },
    {
        label: "Скрипт не использован",
        value: 'noscript'
    },
    {
        label: "Превышено время ожидания в очереди удержания",
        value: 'timeover '
    },
    {
        label: "Вызываемый номер недоступен",
        value: 'notavailable'
    },
    {
        label: "Вызов не получил ответа в течение времени ожидания",
        value: 'noanswer'
    },
    {
        label: "Вызов завершен вызывающим абонентом",
        value: 'subscribercompleted'
    }
]
export const ListHeader = ({ }) => {
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



    return (<Box sx={{ width: "1440px", }}>
        <Box sx={{ height: "80px", }}>

        </Box>
        <Box sx={{ height: "48px", display: "flex", justifyContent: "space-between" }}>
            <Box sx={{
                display: "flex", alignItems: 'center',
                color: "rgba(94, 119, 147, 1)",

            }}><SearchIcon sx={{
                marginRight: "5px",
                textTransform: "inherit",
                color: "rgba(94, 119, 147, 1)",
                "&:hover": {
                    color: "rgba(0, 44, 251, 1)",
                    background: "none"
                }
            }} /> Поиск по звонкам </Box>
            
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Dropdown open={false} options={types} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
                <Dropdown open={false} options={collegues} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
                <Dropdown open={false} options={calls} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
                <Dropdown open={false} options={source} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
                <Dropdown open={false} options={errors} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
                <Dropdown open={false} options={rating} defaultValue={"all"} onChange={(value) => { console.log("Value", value) }} />
            </Box>
        </Box>
    </Box>
    );
}



