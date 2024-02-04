
import { TOption } from "../../../UIComponents/Dropdown/Dropdown.interface"
export const calls: TOption[] = [
    {
        label: "Все звонки",
        value: "all"
    },
    // {
    //     label: "Все клиенты",
    //     value: 'clients'
    // },
    // {
    //     label: "Исполнители",
    //     value: 'workers'
    // },
    // {
    //     label: "Через прилложение",
    //     value: 'app'
    // },
]
// 1 - входящий звонок
// 0 - исходящий звонок
export const types: TOption[] = [
    {
        label: "Все типы",
        value: "all"
    },
    {
        label: "Входящии",
        value: '1'
    },
    {
        label: "Исходящие",
        value: '0'
    }
]
export const collegues: TOption[] = [

    {
        label: "Все сотрудники",
        value: "all"
    },
    // {
    //     label: "Входящие",
    //     value: '0'
    // },
    // {
    //     label: "Исходящие",
    //     value: '1'
    // }
]


export const source: TOption[] = [
    {
        label: "Все источники",
        value: "all"
    },
    // {
    //     label: "С сайта",
    //     value: 'from_site'
    // },
    // {
    //     label: "Yandex",
    //     value: 'yandex'
    // },
    // {
    //     label: "Google",
    //     value: 'google'
    // },
    // {
    //     label: "Номер линии",
    //     value: '12345678'
    // },
    // {
    //     label: "Без источника",
    //     value: 'empty'
    // }
]


export const rating: TOption[] = [
    {
        label: "Все оценки",
        value: "all"
    },

]
export const errors: TOption[] = [
    {
        label: "Все ошибки",
        value: "all"
    },
    // {
    //     label: "Без ошибок",
    //     value: 'noerrors'
    // },
    // {
    //     label: "Скрипт не использован",
    //     value: 'noscript'
    // },
    // {
    //     label: "Превышено время ожидания в очереди удержания",
    //     value: 'timeover '
    // },
    // {
    //     label: "Вызываемый номер недоступен",
    //     value: 'notavailable'
    // },
    // {
    //     label: "Вызов не получил ответа в течение времени ожидания",
    //     value: 'noanswer'
    // },
    // {
    //     label: "Вызов завершен вызывающим абонентом",
    //     value: 'subscribercompleted'
    // }
]

// export const filters  =[ 
// {   defaultValue: "all",
//     onFilterChange: (value: string) => void,
//     open: false,
//     options: types,
// },
// { defaultValue:  "all",
//     onFilterChange: (value: string) => void
//     open: false
//     options: collegues
// },
// { defaultValue:  "all";
//     onFilterChange: (value: string) => void
//     open: false
//     options: calls
// },
// { defaultValue:  "all";
//     onFilterChange: (value: string) => void
//     open: false
//     options: TOption
// },
// { defaultValue:  "all";
//     onFilterChange: (value: string) => void
//     open: false
//     options: TOption
// },
// { defaultValue:  "all";
//     onFilterChange: (value: string) => void
//     open: false
//     options: TOption
// },
// ]