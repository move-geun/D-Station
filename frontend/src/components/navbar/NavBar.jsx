import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../api/JWT";
import isAuthenticated from "../../api/isAuthenticated";

let loginPages = [
  { MLB: "https://www.mlb.com/" },
  { 시뮬레이션: "/customsimultaion" },
  { "팀 커스텀": "/teamcustom" },
  { 마이페이지: "/myprofile" },
];
let notLoginPages = [
  { MLB: "https://www.mlb.com/" },
  { 시뮬레이션: "/customsimultaion" },
];

const LogoImgDesk = styled.img`
  width: 40px;
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
const LogoImgMoblie = styled.img`
  width: 40px;
  @media screen and (min-width: 830px) {
    display: none;
  }
`;

const Navbar = () => {

  const [signup, setSignup] = useState(false);
  function logout() {
    deleteToken();
    navigate("/");
  }

  function login() {
    navigate("/login");
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const logoutHandle = () => {
    logout();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ background: "black"}} position="static">
      <Container maxWidth="0">
        <Toolbar disableGutters>
          {/* <LogoImgDesk src={"/assets/cap.png"}></LogoImgDesk> */}
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize: "30px",
              fontWeight: 1000,
              color: "white",
              textDecoration: "none",
            }}
          >
            D-Station
          </Typography>
        
          {/* 데스크탑 일 때 보이는 메뉴 */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            {/* ------------------------------------- */}
            <>
              {isAuthenticated()
                ? loginPages.map((page, idx) => (
                    <Button
                      component="a"
                      key={idx}
                      href={String(Object.values(page))}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "MICEGothic Bold",
                      }}
                    >
                      {Object.keys(page)}
                    </Button>
                  ))
                : notLoginPages.map((page, idx) => (
                    <Button
                      component="a"
                      key={idx}
                      href={String(Object.values(page))}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "MICEGothic Bold",
                      }}
                    >
                      {Object.keys(page)}
                    </Button>
                  ))}
            </>
            {/* ------------------------------------- */}
          </Box>
          <>
            {isAuthenticated() ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">
                  <IconButton onClick={logoutHandle} sx={{color: "white" }}>
                    로그아웃
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Login">
                  <IconButton onClick={login} sx={{color: "white"}}>
                    로그인
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
