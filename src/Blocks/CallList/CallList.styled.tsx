import { styled } from "@mui/system"
import Box from "@mui/material/Box/Box"
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export const PaperBox = styled(Paper)({
    top: "135px",
    borderRadius: "8px",
    paddingLeft: "40px",
    boxShadow: "0px 4px 5px 0px #E9EDF3",
    boxSizing: "border-box"


}) as typeof Paper

export const IconButtonStyled = styled(IconButton)({
    padding: "0",
    marginLeft: "5px",
    "&:hover": {
        background: "none"
    }

}) as typeof IconButton

export const ButtonStyled = styled(Button)({
    padding: "5px",
    margin: "0",
    textTransform: "initial",
    "&.ButtonSortActive": {
        backgroundColor: "#0000002b!important"
    } 

}) as typeof Button

export const TableCellHead = styled(TableCell)({
    color: "#5E7793",
    textAlign: "left",
    fontSize: "14px"

}) as typeof TableCell

export const TableCellItem = styled(TableCell)({
    textAlign: "left"

}) as typeof TableCell