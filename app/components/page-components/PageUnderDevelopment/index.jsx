import AppBox from "@components/material-components/AppBox";
import AppButton from "@components/material-components/AppButton";
import AppVstack from "@components/material-components/AppVstack";
import AppLink from "@components/page-components/AppLink";
import React from "react";

const PageUnderDevelopment = ({
  text = "PAGE UNDER DEVELOPMENT",
  disableButton = false,
}) => {
  return (
    <AppBox sx={{ height: "calc(100vh - 360px)" }}>
      <AppVstack
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {text}{" "}
        <AppBox>
          {!disableButton && (
            <AppLink href="/">
              <AppButton color="primary">Go Home</AppButton>
            </AppLink>
          )}
        </AppBox>
      </AppVstack>
    </AppBox>
  );
};

export default PageUnderDevelopment;
