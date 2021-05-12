import React, { useContext, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Logo from "../../logos/netflix-logo.png";
import { Button, ButtonGroup } from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";
import { SearchRounded } from "@material-ui/icons";
import "./MainNavbar.css";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
    },
    grow: {
        flexGrow: 1,
        backgroundColor: "black",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.05),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default function MainNavbar() {
    const { getUserInfo, cUser } = useContext(movieContext);
    const { currentUser } = useAuth();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    useEffect(() => {
        getUserInfo(currentUser.uid);
    }, []);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "center", horizontal: "center" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "center",
                horizontal: "center",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem style={{ backgroundColor: "black" }}>
                <Button style={{ color: "white" }} variant="text">
                    Home
                </Button>
            </MenuItem>
            <MenuItem>
                <Button variant="text" style={{ color: "black" }}>
                    Movies
                </Button>
            </MenuItem>
            <MenuItem>
                <Button
                    to="/my-list"
                    component={Link}
                    variant="text"
                    style={{ color: "black" }}
                >
                    My List
                </Button>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <Button variant="text" style={{ color: "black" }}>
                    Profile
                </Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                classes={{
                    root: classes.root,
                }}
                position="fixed"
            >
                <Toolbar>
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="logo-netflix"
                            className="main-logo"
                        />
                    </Link>
                    <div className={classes.search}>
                        <Button
                            size="small"
                            to="/search"
                            variant="text"
                            style={{ color: "white" }}
                            component={Link}
                            startIcon={<SearchRounded />}
                        >
                            Search
                        </Button>
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <div
                            style={{
                                display: "flex",
                                color: "white",
                            }}
                        >
                            <Button style={{ color: "white" }}>Home</Button>
                            <Button style={{ color: "white" }}>Movies</Button>
                            <Button
                                to="/my-list"
                                component={Link}
                                style={{ color: "white" }}
                            >
                                My List
                            </Button>
                        </div>
                        {cUser && (
                            <Button
                                to="/dashboard"
                                component={Link}
                                startIcon={<AccountCircle />}
                                style={{ color: "white" }}
                            >
                                {cUser.firstname}
                            </Button>
                        )}
                    </div>
                    <div className={classes.sectionMobile}>
                        <Button
                            aria-controls={mobileMenuId}
                            onClick={handleMobileMenuOpen}
                            color="secondary"
                            variant="text"
                        >
                            Browse
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
