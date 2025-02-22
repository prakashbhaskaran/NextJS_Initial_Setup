import React from "react";
import AppLink from "@components/page-components/AppLink";
import AppText from "@components/material-components/AppText";

const AppLogo = ({
  handleClose = () => {},
  link = "/",
  textSx = {},
  imageSize = "40px",
  sx,
}) => {
  return (
    <AppLink
      onClick={handleClose}
      href={link}
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        height: "100%",
        width: "100%",
        ...sx,
      }}
    >
      {/* <AppBox
        sx={{
          position: "relative",
          height: { xs: "30px", md: imageSize },
          width: { xs: "30px", md: imageSize },
        }}
      >
        <Image
          src={imageSrc}
          alt="LOGO"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </AppBox> */}
      <AppText
        text={"Logo"}
        sx={{
          fontWeight: "500",
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          ...textSx,
        }}
      />
    </AppLink>
  );
};

export default AppLogo;
