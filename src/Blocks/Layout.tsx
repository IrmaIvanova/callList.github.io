import React from 'react';
// import logo from './logo.svg';
import Box from "@mui/material/Box/Box"
import { MenuComponent } from './Menu/Menu'
import { Header } from './Header/Header'
import { CallList } from './CallList/CallList'
export const Layout = () => {
  return (
    <Box className="Layout" sx={{ background: "#f3efef" }}>
      <MenuComponent />
      <Header />
      <CallList />
    </Box>
  );
}


