
import TimelineIcon from '@mui/icons-material/Timeline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// buttonAdorments
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

import logo from './logo.png'

import Typography from '@mui/material/Typography';

import { MenuItemStyled, Menu, LogoBox, ButtonStyled, ButtonBox } from './Menu.styled'

export const MenuComponent = ({ }) => {
    return (
        <Menu className="Menu">
            <LogoBox ><img src={logo} /></LogoBox>
            <MenuItemStyled>
                <TimelineIcon />
                <Typography variant="body1" >Итоги</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <DoneAllIcon />
                <Typography variant="body1">Заказы</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <MailOutlineIcon />
                <Typography variant="body1">Сообщения</Typography>
            </MenuItemStyled>
            <MenuItemStyled selected>
                <PhoneOutlinedIcon />
                <Typography variant="body1">Звонки</Typography>
            </MenuItemStyled>
            <MenuItemStyled >
                <PeopleOutlineOutlinedIcon />*-
                <Typography variant="body1">Контрагенты</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <DescriptionOutlinedIcon />
                <Typography variant="body1">Документы</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <PermIdentityOutlinedIcon />
                <Typography variant="body1">Исполнитери</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <WorkOutlineOutlinedIcon />
                <Typography variant="body1">Отчеты</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <LocalLibraryOutlinedIcon />
                <Typography variant="body1">База знаний</Typography>
            </MenuItemStyled>
            <MenuItemStyled>
                <SettingsOutlinedIcon />
                <Typography variant="body1">Настроки</Typography>
            </MenuItemStyled>
            <ButtonBox >
                <ButtonStyled
                    variant={"contained"}>
                    <Typography variant="body1">Добавить заказ</Typography>
                    <AddCircleOutlinedIcon
                        sx={{
                            color: "#D8E4FB8F",
                            fontSize: "30px"
                        }}
                    />
                </ButtonStyled>
                <ButtonStyled
                    variant={"contained"}>
                    <Typography variant="body1">Оплата</Typography>
                    <ErrorOutlinedIcon sx={{
                        color: "#D8E4FB8F",
                        fontSize: "30px"
                    }} />
                </ButtonStyled>
            </ButtonBox>
        </Menu>
    );
}


