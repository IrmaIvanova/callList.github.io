import  React from "react"
import  { MenuProps } from '@mui/material/Menu';


export interface IDateDropdownOwnProps extends MenuProps {
    options: TOption[]
    defaultValue:string;
    onChange: (value: any) => void
    onChangeDateValue: (value: any) => void
    disabled?: boolean
}

export type TOption = {
    value: string,
    label: React.ReactNode,
    bold?: boolean,
    count?: number
}
