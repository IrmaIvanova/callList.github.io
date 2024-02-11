import { styled } from "@mui/system"
import Box from "@mui/material/Box/Box"
import LinearProgress from '@mui/material/LinearProgress';
import Typography from "@mui/material/Typography"

export const MainHeaderBox = styled(Box)({
    width: "100%",
    background: " #fff",
    marginLeft: "240px",
    height: "64px",
    padding: "0 233px",
    boxShadow: "0px 4px 5px 0px #E9EDF3",
    position: "fixed",
    top: "0",
    zIndex: "100",
}) as typeof Box

export const MainHeaderContainer = styled(Box)({
    width: "1241px",
    zIndex: "100",
    display: " flex",
    alignItems: "center",
    justifyContent: "space-between"
}) as typeof Box

export const MainHeaderResults = styled(Box)({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "34px"
}) as typeof Box

export const MainHeaderPersons= styled(Box)({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "25px"
}) as typeof Box

export const LinearProgressStyled = styled(LinearProgress)({
    background: "#DEE6F5!important",
    height: "6px",
    borderRadius: "12px",
}) as typeof LinearProgress

export const TypographyStyled = styled(Typography)({
    color: "#122945", 
}) as typeof Typography