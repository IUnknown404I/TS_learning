import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink, useNavigate} from 'react-router-dom';

const NavBar:React.FC = () => {
    const pages = ['Продукты', 'Цены', 'О нас'];
    const settings = ['Аккаунт', 'Записки', 'Панель инструментов', 'Выйти'];
    const navigation = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="relative" className='app-navbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    noWrap*/}
                    {/*    component="div"*/}
                    {/*    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}*/}
                    {/*>*/}
                    {/*    LOGO*/}
                    {/*</Typography>*/}
                    <Box
                        component='div'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img
                            style={{maxHeight: '80px'}}
                            src='/images/svg/ts-logo-round-256.svg'
                            alt='LOGO'
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center"
                                                onClick={() => {
                                                    if(page==='О нас') navigation('/about');
                                                }}
                                    >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        TS DEMO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            // <Button
                            //     key={page}
                            //     onClick={handleCloseNavMenu}
                            //     sx={{ my: 2, color: 'white', display: 'block' }}
                            // >
                            //     {page}
                            // </Button>
                            <NavLink
                                to={page==='О нас'? '/about':'/sketches'}
                                key={page}
                                onClick={handleCloseNavMenu}
                            >
                                {page}
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Открыть настройки">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Р" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"
                                                onClick={() => {if(setting === 'Записки') navigation('/sketches');}}
                                    >{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;