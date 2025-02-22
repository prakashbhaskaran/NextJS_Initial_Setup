"use client";
import React, { useContext, useState } from "react";
import AppBox from "@components/material-components/AppBox";
import AppHstack from "@components/material-components/AppHstack";
import { cssStyle, color } from "@constants/style";
import { Badge, IconButton } from "@mui/material";
import AppContainer from "../AppContainer";
import { ThemeContext } from "@providers/MaterialThemeProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import NavDrawer from "@components/page-components/AppNavbar/NavDrawer";
import SearchDrawer from "@components/page-components/AppNavbar/SearchDrawer";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import AppLogo from "@components/page-components/AppLogo";

const AppNavbar = () => {
  const pathname = usePathname();
  const { handleDarkMode, dark } = useContext(ThemeContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleSearchClose = () => {
    setOpenSearch(false);
  };
  const handleSearchOpen = () => {
    setOpenSearch(true);
  };
  const is_home = pathname === "/";
  let bgcolor = is_home ? color.global.white : cssStyle.mainColor;
  let textcolor = is_home ? cssStyle.mainColor : color.global.white;

  return (
    <AppBox
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 1000,
      }}
    >
      <AppBox
        sx={{
          background: bgcolor,
          boxShadow: dark ? cssStyle.dividerColor : cssStyle.shadow.bottom,
          borderBottom: dark ? `1px solid ${cssStyle.dividerColor}` : "none",
          py: "10px",
          px: "20px",
        }}
      >
        <AppContainer>
          <AppHstack justifyContent="space-between">
            <AppHstack>
              <AppBox>
                <AppLogo
                  image={
                    is_home
                      ? "/logo-without-bg-primarycolor.png"
                      : "/logo-without-bg.png"
                  }
                  textSx={{
                    color: textcolor,
                  }}
                  imageSize="30px"
                />
              </AppBox>
            </AppHstack>
            <AppHstack>
              <IconButton onClick={handleDrawerOpen}>
                <GiHamburgerMenu color={color} size={23} />
              </IconButton>
            </AppHstack>

            {/* <AppHstack gap="10px" justifyContent="end" width="20%">
              <IconButton onClick={handleSearchOpen} sx={{ p: "0px" }}>
                <IoSearch color={color} size={23} />
              </IconButton>
            </AppHstack> */}
          </AppHstack>
        </AppContainer>
        <NavDrawer open={openDrawer} handleClose={handleDrawerClose} />
        {/* <SearchDrawer open={openSearch} handleClose={handleSearchClose} /> */}
      </AppBox>{" "}
    </AppBox>
  );
};

export default AppNavbar;
