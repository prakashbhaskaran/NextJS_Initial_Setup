import Link from "next/link";
import React from "react";
import AppText from "@components/material-components/AppText";
import AppBox from "@components/material-components/AppBox";

const AppLink = ({ href = "", sx, textSx, text = "", children, ...rest }) => {
  return (
    <AppBox
      href={href}
      component={Link}
      sx={{ textDecoration: "none", ...sx }}
      {...rest}
    >
      {children || <AppText sx={textSx} text={text} />}
    </AppBox>
  );
};

export default AppLink;
