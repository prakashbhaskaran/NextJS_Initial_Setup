"use client";
import React from "react";
import AppBox from "@components/material-components/AppBox";
import AppText from "@components/material-components/AppText";
import AppVstack from "@components/material-components/AppVstack";
import AppHstack from "@components/material-components/AppHstack";
import AppContainer from "@components/page-components/AppContainer";
import AppLink from "../AppLink";
import AppLogo from "../AppLogo";
import { color } from "@constants/style";
import AppDivider from "@components/material-components/AppDivider";

const AppFooter = () => {
  const d = new Date();
  let year = d.getFullYear();
  const links = [
    {
      // name: "COMPANY",
      list: [
        { name: "About Us", link: "/about-us" },
        { name: "History", link: "/history" },
        { name: "Contact Us", link: "/contact-us" },
      ],
    },
  ];
  return (
    <AppBox as="footer" sx={{ background: color.global.primary }}>
      <AppBox
        sx={{
          // px: "10px",
          py: "40px",
        }}
      >
        <AppContainer>
          <AppHstack
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={{ xs: "1rem", md: "initial" }}
            justifyContent={{ md: "space-between" }}
            alignItems="start"
          >
            <AppVstack width={{ xs: "100%", md: "initial", gap: "16px" }}>
              <AppBox>
                <AppLogo
                  textSx={{
                    color: color.global.white,
                  }}
                />
              </AppBox>
              <AppText
                sx={{
                  color: color.global.white,
                  width: { xs: "auto", lg: "27em" },
                }}
                text={"Sentence"}
              />

              <AppText sx={{ color: color.global.white, mt: "2rem" }}>
                © Company {year} , All rights reserved
              </AppText>
            </AppVstack>

            <AppHstack
              gap={{ xs: "1rem", md: "10rem" }}
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="start"
              width={{ xs: "100%", md: "initial" }}
            >
              {links.map((item, index) => {
                return (
                  <AppVstack
                    width={{ xs: "100%", md: "initial" }}
                    key={item.name || index}
                    gap="10px"
                  >
                    <AppText
                      sx={{
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        color: color.global.white,
                      }}
                    >
                      {item?.name}
                    </AppText>
                    <AppVstack gap="20px">
                      {item.list.map((_) => {
                        return (
                          <AppLink
                            href={_?.link}
                            key={_.name}
                            text={_.name}
                            textSx={{
                              color: color.global.white,
                              fontSize: "1rem",

                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                          />
                        );
                      })}
                    </AppVstack>
                  </AppVstack>
                );
              })}
            </AppHstack>
          </AppHstack>
          <AppDivider sx={{ mt: "27px" }} />
        </AppContainer>
      </AppBox>
    </AppBox>
  );
};

export default AppFooter;
