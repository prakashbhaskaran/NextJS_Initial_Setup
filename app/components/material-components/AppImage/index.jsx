import AppBox from "@components/material-components/AppBox";
import Image from "next/image";
import React from "react";

const AppImage = ({ src, alt = "", imageSx, sx }) => {
  return (
    <AppBox sx={{ position: "relative", ...sx }}>
      <AppBox
        component={Image}
        src={src}
        fill
        alt={alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...imageSx,
        }}
      />
    </AppBox>
  );
};

export default AppImage;
