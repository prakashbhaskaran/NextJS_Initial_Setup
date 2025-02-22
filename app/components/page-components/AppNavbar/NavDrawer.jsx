import { IconButton, ListItemButton } from "@mui/material";
import React from "react";
import AppDrawer from "@components/material-components/AppDrawer";
import AppList from "@components/material-components/AppList";
import AppLink from "@components/page-components/AppLink";
import { navDrawerLinks } from "@constants/links";
import AppHstack from "@components/material-components/AppHstack";
import AppBox from "@components/material-components/AppBox";
import { FaWindowClose } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { cssStyle, color } from "@constants/style";
import AppLogo from "@components/page-components/AppLogo";
import AppVstack from "@components/material-components/AppVstack";
import AppText from "@components/material-components/AppText";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";

const NavDrawer = ({ open, handleClose }) => {
  const { status, data } = useSession();
  const pathname = usePathname();
  return (
    <AppDrawer
      open={open}
      handleClose={handleClose}
      PaperProps={{ sx: { width: { xs: "100%", sm: "320px" } } }}
    >
      <AppVstack>
        <AppBox sx={{ height: "100%" }}>
          <AppHstack
            justifyContent="space-between"
            sx={{
              background: cssStyle.mainColor,
              borderBottom: "2px solid #d8d8d8",
            }}
            py="0.5rem"
            px="1rem"
          >
            <AppLogo
              imageSize="30px"
              handleClose={handleClose}
              textSx={{ color: color.global.white }}
            />
            <IconButton color="light" onClick={handleClose}>
              <FaWindowClose size={23} />
            </IconButton>
          </AppHstack>
          <AppList>
            {navDrawerLinks().map((_) => {
              return (
                <ListItemButton
                  key={_.label}
                  sx={{
                    background: pathname.includes(_?.link)
                      ? `rgba(0, 0, 0, 0.04)`
                      : "initial",
                  }}
                >
                  <AppLink
                    href={_.link}
                    onClick={() => {
                      handleClose();
                    }}
                    sx={{ width: "100%", height: "100%" }}
                  >
                    <AppHstack gap="6px" py="5px">
                      <IconButton
                        sx={{
                          padding: "0px",
                          color: pathname.includes(_?.link)
                            ? color.global.secondary
                            : color.global.primary,
                        }}
                        size={"20px"}
                      >
                        {_.icon}
                      </IconButton>
                      <AppText
                        sx={{
                          fontWeight: "600",
                          color: pathname.includes(_?.link)
                            ? color.global.secondary
                            : color.global.primary,
                        }}
                        text={_?.label}
                      />
                    </AppHstack>
                  </AppLink>
                </ListItemButton>
              );
            })}
          </AppList>
        </AppBox>
      </AppVstack>
    </AppDrawer>
  );
};

export default NavDrawer;
