
import React, { useState, FC } from 'react';
import Box from "@mui/material/Box/Box"
import { Dropdown } from "../../../UIComponents/Dropdown/Dropdown"
import { calls, collegues, errors, rating, source, types, dateOptions } from './FilterConstants'
import SearchIcon from '@mui/icons-material/Search';
import { TOption } from "../../../UIComponents/Dropdown/Dropdown.interface"
import InputAdornment from '@mui/material/InputAdornment';
import { BalanceTypography, BalanceBox, HeaderFirstBox, HeaderSecondBox, SearchBox, SearchTextFieldStyled } from './ListHeader.styled'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Typography from '@mui/material/Typography';
import { DateDropdown } from '../../../UIComponents/DateDropdown/DateDropdown'
import { DateRangePicker, Stack, DateRangePickerProps } from 'rsuite';
import 'rsuite/DateRangeInput/styles/index.css';
import "rsuite/dist/rsuite.min.css";
import { sub, format } from 'date-fns';

export declare type DateRange = [Date, Date];
interface IListHeaderProps {
    search: string;
    onSearchChange: (value: string) => void
    onChangeType: (value: string) => void
    onChangeStartDate: (value: string) => void
    onChangeEndDate: (value: string) => void
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



export const ListHeader: FC<IListHeaderProps> = ({ search, onSearchChange, filters, onChangeType, onChangeStartDate, onChangeEndDate, setСalls, setСollegues, setSource, setErrors, setRating }) => {
    const [showSearch, setShowSearch] = useState(false)
    const [valueDateDropdown, setValueDateDropdown] = useState("threedays")
    return (<Box sx={{ width: "100%", }}>
        <HeaderFirstBox >
            <BalanceBox>
                <BalanceTypography>Баланс:</BalanceTypography>
                <Typography>252</Typography>
                <AddCircleOutlinedIcon
                    sx={{
                        color: "#002CFB",
                        fontSize: "30px"
                    }}
                />
            </BalanceBox>
            <DateDropdown
                open={false}
                options={dateOptions}
                onChangeDateValue={(value) => {
                    console.log("value", value)
                    if (value) {
                        value.map((date: string, idx: number) => {
                            if (idx === 0) onChangeStartDate(date)
                            if (idx === 1) onChangeEndDate(date)
                        })
                    } else {
                        onChangeStartDate("")
                        onChangeEndDate("")

                    }
                }}
                defaultValue={"threedays"}
                onChange={(value) => {
                    setValueDateDropdown(value)
                }} />
        </HeaderFirstBox>

        <HeaderSecondBox>
            {!showSearch ?
                < SearchBox>
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
                    />
                    Поиск по звонкам
                </SearchBox>
                :
                < SearchBox>
                    <SearchTextFieldStyled
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
                    />
                </SearchBox>

            }
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Dropdown open={false} options={types} defaultValue={"all"} onChange={(value) => onChangeType(value)} />
                <Dropdown open={false} disabled options={collegues} defaultValue={"all"} onChange={(value) => setСalls && setСalls(value)} />
                <Dropdown open={false} disabled options={calls} defaultValue={"all"} onChange={(value) => setСollegues && setСollegues(value)} />
                <Dropdown open={false} disabled options={source} defaultValue={"all"} onChange={(value) => setSource && setSource(value)} />
                <Dropdown open={false} disabled options={errors} defaultValue={"all"} onChange={(value) => setErrors && setErrors(value)} />
                <Dropdown open={false} disabled options={rating} defaultValue={"all"} onChange={(value) => setRating && setRating(value)} />
            </Box>
        </HeaderSecondBox>
    </Box >
    );
}



