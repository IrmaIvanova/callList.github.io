
import React, { useState, FC } from 'react';
import Box from "@mui/material/Box/Box"
import { Dropdown } from "../../../UIComponents/Dropdown/Dropdown"
import { calls, collegues, errors, rating, source, types } from './FilterConstants'
import SearchIcon from '@mui/icons-material/Search';
import { TOption } from "../../../UIComponents/Dropdown/Dropdown.interface"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface IListHeaderProps {
    search: string;
    onSearchChange: (value: string) => void
    onChangeType: (value: string) => void
    setСalls?: (value: string) => void
    setСollegues?: (value: string) => void
    setSource?: (value: string) => void
    setErrors?: (value: string) => void
    setRating?: (value: string) => void
    filters?: IFilterProps[]
}

interface IFilterProps {

    defaultValue: string;
    onFilterChange: (value: string) => void
    open: boolean
    options: TOption

}



export const ListHeader: FC<IListHeaderProps> = ({ search, onSearchChange, filters, onChangeType, setСalls, setСollegues, setSource, setErrors, setRating }) => {

    const [showSearch, setShowSearch] = useState(false)
    return (<Box sx={{ width: "100%", }}>
        <Box sx={{ height: "80px", }}>

        </Box>
        <Box sx={{ height: "48px", display: "flex", justifyContent: "space-between" }}>

            {!showSearch ? < Box sx={{
                display: "flex", alignItems: 'center',
                color: "rgba(94, 119, 147, 1)",

            }}>
                <SearchIcon sx={{
                    marginRight: "5px",
                    textTransform: "inherit",
                    color: "rgba(94, 119, 147, 1)",
                    "&:hover": {
                        color: "rgba(0, 44, 251, 1)",
                        background: "none"
                    }
                }}
                    onClick={() => setShowSearch(true)}
                /> Поиск по звонкам </Box>
                :
                <TextField
                    id="outlined-search"
                    type="search"
                    value={search}
                    onChange={(event) => onSearchChange(event.currentTarget.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        ".MuiOutlinedInput-root": {
                            borderRadius: "30px",
                            width: "482px"
                        },
                        ".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputTypeSearch ": {
                            padding: "8.5px 14px"
                        }

                    }} />

            }
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Dropdown open={false} options={types} defaultValue={"all"} onChange={(value) => onChangeType(value)} />
                <Dropdown open={false} disabled options={collegues} defaultValue={"all"} onChange={(value) => setСalls && setСalls(value)} />
                <Dropdown open={false} disabled options={calls} defaultValue={"all"} onChange={(value) => setСollegues && setСollegues(value)} />
                <Dropdown open={false} disabled options={source} defaultValue={"all"} onChange={(value) => setSource && setSource(value)} />
                <Dropdown open={false} disabled options={errors} defaultValue={"all"} onChange={(value) => setErrors && setErrors(value)} />
                <Dropdown open={false} disabled options={rating} defaultValue={"all"} onChange={(value) => setRating && setRating(value)} />
            </Box>
        </Box>
    </Box >
    );
}



