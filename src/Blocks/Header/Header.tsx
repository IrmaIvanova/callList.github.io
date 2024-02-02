import React from 'react';
// import logo from './logo.svg';
import Box from "@mui/material/Box/Box"

export const Header = ({ }) => {
    return (
        <Box sx={{
            width: "100%",
            background: " #fff",
            marginLeft: "240px",
            height: "64px",
            boxShadow: "0px 4px 5px 0px #E9EDF3",
            position:"fixed",
            top:"0",
            zIndex:"100"

        }}
            className="Menu">
            Header
        </Box>
    );
}


