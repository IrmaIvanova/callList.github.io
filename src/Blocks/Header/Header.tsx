import React, { useState } from 'react';
// import logo from './logo.svg';
import Box from "@mui/material/Box/Box"
import Typography from "@mui/material/Typography"
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from '../../UIComponents/Dropdown/Dropdown'
import { TOption } from "../../UIComponents/Dropdown/Dropdown.interface"
import userAvatar from './img.png'
import { MainHeaderBox, MainHeaderContainer, MainHeaderResults, MainHeaderPersons, LinearProgressStyled, TypographyStyled } from './Header.styled'
export const partnerOptions: TOption[] = [
    {
        label: "ИП Сидорова Александра Михайловна",
        value: "333"
    },

]
export const personOptions: TOption[] = [
    {
        label: <Avatar alt={"Упоров Кирилл"} src={userAvatar} />,
        value: "555"
    },

]
export const Header = ({ }) => {
    const getToday = (date: Date) => {
        let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let month = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];

        return weekDays[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()];
    }
    
    const [partner, setPartner] = useState("333")
    const [person, setPerson] = useState("555")

    const today = new Date()

    return (
        <MainHeaderBox
            className="Menu">
            <MainHeaderContainer>
                <Box sx={{ color: "#899CB1" }}>{getToday(today)} </Box>

                < MainHeaderResults>
                    <Box >
                        <TypographyStyled variant='body2' sx={{ 'span': { color: "#28A879" } }}> Новые звонки <span>20 из 30 шт</span></TypographyStyled>
                        <LinearProgressStyled
                            sx={{
                                '.MuiLinearProgress-bar1Determinate': {
                                    background: "#28A879"
                                }
                            }}
                            variant='determinate'
                            value={65}
                        />
                    </Box>
                    <Box >
                        <TypographyStyled variant='body2' sx={{ 'span': { color: "#FFD500" } }}> Качество разговоров <span>40%</span></TypographyStyled>
                        <LinearProgressStyled
                            sx={{
                                '.MuiLinearProgress-bar1Determinate': {
                                    background: "#FFD500"
                                }
                            }}
                            variant='determinate'
                            value={40}
                        />
                    </Box>
                    <Box >
                        <TypographyStyled variant='body2' sx={{ 'span': { color: "#EA1A4F" } }}> Конверсия в заказ  <span>67%</span></TypographyStyled>
                        <LinearProgressStyled
                            sx={{
                                '.MuiLinearProgress-bar1Determinate': {
                                    background: "#EA1A4F"
                                }
                            }}
                            variant='determinate'
                            value={67}
                        />
                    </Box>
                </MainHeaderResults>

                <MainHeaderPersons>
                    <Box><SearchIcon sx={{ fontSize: "21px", color: "#899CB1" }} /></Box>

                    <Box>
                        <Dropdown
                            open={false}
                            papperWidth={"fit-content"}
                            options={partnerOptions}
                            defaultValue={partner}
                            onChange={(value) => setPartner(value)} />
                    </Box>
                    <Box>
                        <Dropdown
                            open={false}
                            papperWidth={"fit-content"}
                            options={personOptions}
                            disabled
                            defaultValue={person}
                            onChange={(value) => setPerson(value)} />
                    </Box>
                </MainHeaderPersons>

            </MainHeaderContainer>
        </MainHeaderBox>
    );
}


