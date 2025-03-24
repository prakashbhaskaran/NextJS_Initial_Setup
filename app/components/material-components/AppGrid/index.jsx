import React from "react";
import AppBox from "../AppBox";

const AppGrid = ({ children, sx }) => {
  return (
    <AppBox
      sx={{
        display: "grid",
        ...sx,
      }}
    >
      {children}
    </AppBox>
  );
};

export default AppGrid;
