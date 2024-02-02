import React from 'react';
// import logo from './logo.svg';
import Box from "@mui/material/Box/Box"
import { Menu } from './Menu/Menu'
import { Header } from './Header/Header'
import { CallList } from './CallList/CallList'
export const Layout = () => {
  return (
    <Box className="Layout" sx={{ background: "#f3efef",
    height:"100vh" }}>
      <Menu />
      <Header />
      <CallList />
    </Box>
  );
}


