import AppBox from "@components/material-components/AppBox";
import { color } from "@constants/style";
import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <AppBox>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="calc(100vh - 100px)"
        sx={{ backgroundColor: color.global.quaternary }}
      />
    </AppBox>
  );
};

export default Loading;
