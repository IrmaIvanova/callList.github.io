import React, { FC, useMemo } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Popover from '@mui/material/Popover';
import { IDateDropdownOwnProps, TOption } from './DateDropdown.interface'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import moment from 'moment';
import { DateRangePicker, Stack } from 'rsuite';
import 'rsuite/DateRangeInput/styles/index.css';
import "rsuite/dist/rsuite.min.css";
import { sub, format } from 'date-fns';
export declare type DateRange = [Date, Date];

window.moment = moment;
export const StyledMenuItem = styled(MenuItem)({

}) as typeof MenuItem

export const DateDropdown: FC<IDateDropdownOwnProps> = ({ options, defaultValue, disabled, onChange, onChangeDateValue }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const dateNow = new Date();

    const startTрreeDays = sub(dateNow, { days: 3 })
    const startWeek = sub(dateNow, { weeks: 1 })
    const startMonth = sub(dateNow, { months: 1 })
    const startYear = sub(dateNow, { years: 1 })
    const end = new Date()
    const [rangeDate, setRangeDate] = React.useState<DateRange | null>([startTрreeDays, end] || null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [currentValue, setValue] = React.useState<string | undefined>(defaultValue);


    const handleChange = (value: string) => () => {
        const current = defaultValue === value ? defaultValue : value
        setValue(current);
        if (value === "app") onChange(rangeDate)
        onChange(current)
    };

    const dateValueChanged = useMemo(() => {
        if (currentValue === "threedays") {
            onChangeDateValue([startTрreeDays, end]?.map((date) =>
                format(date, "dd.MM.yyyy")
            ))
        }
        if (currentValue === "week") {
            onChangeDateValue([startWeek, end]?.map((date) =>
                format(date, "dd.MM.yyyy")
            ))
        }
        if (currentValue === "month") {
            onChangeDateValue([startMonth, end]?.map((date) =>
                format(date, "dd.MM.yyyy")
            ))
        }
        if (currentValue === "year") {
            onChangeDateValue([startYear, end]?.map((date) =>
                format(date, "dd.MM.yyyy")
            ))
        }
        if (currentValue === "range") {
            onChangeDateValue(rangeDate?.map((date) =>
                format(date, "dd.MM.yyyy")

            ))
        }
    }, [rangeDate, currentValue])

    const currentButtonText = options.find((el: TOption) => el.value === currentValue)?.label
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
                disabled={disabled}
                sx={{
                    textTransform: "inherit",
                    color: "rgba(94, 119, 147, 1)",
                    "&:hover": {
                        color: "rgba(0, 44, 251, 1)",
                        background: "none"
                    }
                }}
                onClick={handleClick}
                startIcon={<KeyboardArrowLeftIcon />}
                endIcon={<KeyboardArrowRightIcon />}
            >
                <CalendarTodayIcon sx={{ fontSize: "16px", color: "#ADBFDF", marginRight: "5px" }} />{currentButtonText}
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disablePortal
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{
                    ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
                        width: "320px",
                        border: "1px solid #EAF0FA",
                        boxShadow: "0px 0px 26px 0px rgba(233, 237, 243, 0.8)",
                        display: "flex",
                        flexDirection: "column",
                    },

                }}
            >
                {/* @ts-ignore */}

                {options.map(({ label, value }) => <StyledMenuItem
                    key={value}
                    onClick={handleChange(value)}>
                    {label !== "Указать даты" && <Typography sx={{
                        fontSize: "14px",
                        width: "204px",
                        color: value === currentValue ? "rgba(0, 44, 251, 1)" : "rgba(137, 156, 177, 1)",
                        "&:hover": {
                            color: "rgba(18, 41, 69, 1)",

                        }
                    }}>
                        {label}

                    </Typography>}

                    {label === "Указать даты" && <Box sx={{ display: "block" }}>  <Typography sx={{
                        fontSize: "14px",
                        width: "204px",
                        color: value === currentValue ? "rgba(0, 44, 251, 1)" : "rgba(137, 156, 177, 1)",
                        "&:hover": {
                            color: "rgba(18, 41, 69, 1)",

                        }
                    }}>
                        {label}

                    </Typography>
                        <DateRangePicker
                            format="dd.MM.yyyy"
                            value={rangeDate}
                            caretAs={CalendarTodayIcon}
                            placeholder="__.__.__-__.__.__"
                            onChange={(value, event) => {
                                console.log(event)
                                setRangeDate(value)
                            }}
                            character=" – " />

                    </Box>
                    }



                </StyledMenuItem>)}
            </Popover>
        </div>
    );
}