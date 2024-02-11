import React, { FC } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Popover from '@mui/material/Popover';
import { IDropdownOwnProps, TOption } from './Dropdown.interface'
export const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}) as typeof MenuItem


export const Dropdown: FC<IDropdownOwnProps> = ({ options, defaultValue, papperWidth, disabled, onChange }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
        onChange(current)
    };

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
                endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            >
                {currentButtonText}
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{
                    ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
                        width: papperWidth || "204px",
                        border: "1px solid #EAF0FA",
                        boxShadow: "0px 0px 26px 0px rgba(233, 237, 243, 0.8)",
                        display: "flex",
                        flexDirection: "column",
                    }
                }}
            >
                {/* @ts-ignore */}

                {options.map(({ label, value }) => <StyledMenuItem
                    key={value}
                    onClick={handleChange(value)}>
                    <Typography sx={{
                        fontSize: "14px",
                        width: papperWidth || "204px",
                        color: value === currentValue ? "rgba(0, 44, 251, 1)" : "rgba(137, 156, 177, 1)",
                        "&:hover": {
                            color: "rgba(18, 41, 69, 1)",

                        }
                    }}>
                        {label}
                    </Typography>

                </StyledMenuItem>)}
            </Popover>
        </div>
    );
}