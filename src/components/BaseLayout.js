import React, { useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Experience from './experience/Experience';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
                  <Route exact path={'/experience'} element={<Experience />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>Márleo Piber | <a href={'https://github.com/marleopr'}>Full Stack Developer</a></p>
                  <p>&copy; 2024</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

