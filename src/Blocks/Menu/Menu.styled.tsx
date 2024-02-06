import { styled } from "@mui/system"
import Box from "@mui/material/Box/Box"
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)({
    padding: "14px 16px",
    boxSizing: "border-box",
    textTransform: "inherit",
    backgroundColor: "#005FF8",
    width: "-webkit-fill-available",
    margin: "0 20px 28px 20px",
    display: "flex",
    justifyContent: "space-evenly"
}) as typeof Button

export const ButtonBox = styled(Box)({
    width: "100%",
    marginTop: "65px"
}) as typeof Box

export const Menu = styled(Box)({
    width: "240px",
    position: "fixed",
    left: "0",
    top: "0",
    background: " #091336",
    height: "100vh"

}) as typeof Box

export const LogoBox = styled(Box)({
    margin: "20px 0 28px 20px"

}) as typeof Box

export const MenuItemStyled = styled(MenuItem)({
    padding: "14px 16px",
    fontFamily: "SF Pro Display",
    color: "#FFFFFF99",

    ".MuiSvgIcon-root": {
        marginRight: "16px"
    },

    "&.Mui-selected": {
        backgroundColor: " #D8E4FB52",
        color: "#fff",
        position: "relative"
    },

    "&.Mui-selected:after": {
        content: "''",
        position: "absolute",
        boxShadow: "0px 3px 8px 0px #EDDA0180",
        background: " #FFD500",
        width: "8px",
        height: "8px",
        right: "16px",
        borderRadius: "50%"
    }
}) as typeof MenuItem

