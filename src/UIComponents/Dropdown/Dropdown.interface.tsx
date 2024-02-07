import  React from "react"
import  { MenuProps } from '@mui/material/Menu';


export interface IDropdownOwnProps extends MenuProps {
    options: TOption[]
    // value:string
    defaultValue:string;
    onChange: (value: any) => void
    disabled?: boolean
}

export type TOption = {
    value: string,
    label: React.ReactNode,
    bold?: boolean,
    count?: number
}
