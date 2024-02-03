import  React from "react"
import  { MenuProps } from '@mui/material/Menu';


export interface IDropdownOwnProps extends MenuProps {
    options: TOption[]
    defaultValue:string;
    onChange: (value: any) => void
}

export type TOption = {
    value: string,
    label: React.ReactNode,
    bold?: boolean,
    count?: number
}
