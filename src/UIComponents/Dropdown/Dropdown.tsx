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




// const StyledMenu = styled((props: IDropdownOwnProps) => (
//     <Menu
//         elevation={0}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//         }}
//         {...props}
//     />
// ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//         borderRadius: 6,
//         marginTop: theme.spacing(1),
//         minWidth: 180,
//         color:
//             theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//         boxShadow:
//             'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//         '& .MuiMenu-list': {
//             padding: '4px 0',
//         },
//         '& .MuiMenuItem-root': {
//             '& .MuiSvgIcon-root': {
//                 fontSize: 18,
//                 color: theme.palette.text.secondary,
//                 marginRight: theme.spacing(1.5),
//             },
//             '&:active': {
//                 backgroundColor: alpha(
//                     theme.palette.primary.main,
//                     theme.palette.action.selectedOpacity,
//                 ),
//             },
//         },
//     },
// }));

export const Dropdown: FC<IDropdownOwnProps> = ({ options, defaultValue, onChange }) => {
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
        const current = defaultValue === value ? '' : value
        setValue(current);
        onChange(current)
    };

    const currentButtonText = options.find((el: TOption) => el.value)?.label
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
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
                        width: "204px",
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
                        width: "204px",
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