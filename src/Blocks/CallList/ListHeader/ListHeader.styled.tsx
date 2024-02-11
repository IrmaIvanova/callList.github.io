import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from "@mui/system"
import TextField from '@mui/material/TextField';

export const BalanceTypography = styled(Typography)({
    fontSize: "14px",
    color: "#899CB1"
}) as typeof Typography

export const BalanceBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    width: "145px",
    height: "40px",
    borderRadius: "48px",
    background: "#fff",
    padding:"5px",
    boxSizing:"border-box",
    gap:"5px", 
    justifyContent:"center"
}) as typeof Box

export const HeaderFirstBox = styled(Box)({
    height: "80px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
}) as typeof Box

export const HeaderSecondBox = styled(Box)({
    height: "48px",
    display: "flex",
    justifyContent: "space-between"
}) as typeof Box

export const SearchBox = styled(Box)({
    display: "flex",
    alignItems: 'center',
    color: "rgba(94, 119, 147, 1)",
}) as typeof Box

export const SearchTextFieldStyled = styled(TextField)({
    ".MuiOutlinedInput-root": {
        borderRadius: "30px",
        width: "482px"
    },
    ".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputTypeSearch ": {
        padding: "8.5px 14px"
    }


}) as typeof TextField

