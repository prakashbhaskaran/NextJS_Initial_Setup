import React, { useState } from "react";
import AppDrawer from "@components/material-components/AppDrawer";
import AppHstack from "@components/material-components/AppHstack";
import AppLink from "../AppLink";
import AppBox from "@components/material-components/AppBox";
import { Card, debounce, IconButton, InputAdornment } from "@mui/material";
import { FaWindowClose } from "react-icons/fa";
import { cssStyle, lineClamp, color } from "@constants/style";
import AppInput from "@components/material-components/AppInput";
import { IoSearch } from "react-icons/io5";
import { useQuery } from "react-query";
import { makeGetRequest } from "@utils/api";
import AppVstack from "@components/material-components/AppVstack";
import AppText from "@components/material-components/AppText";
import AppLoader from "../AppLoader";
import AppLogo from "../AppLogo";

const SearchDrawer = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const [search, setSearch] = useState({ text: "" });
  const { data: products, isLoading: productsLoading } = useQuery(
    ["products-search", formValues],
    () =>
      makeGetRequest("/api/products/search", {}, { limit: 0, ...formValues }),
    {
      enabled: !!search?.text,
    }
  );
  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    debouncedOnChange(e.target, e.target.value);
  };

  const debouncedOnChange = debounce((target, search) => {
    setFormValues({
      ...formValues,
      limit: search ? 10 : 0,
      [target.name]: target.value,
    });
  }, 1000);
  return (
    <AppDrawer
      open={open}
      anchor="top"
      handleClose={handleClose}
      PaperProps={{
        style: {
          minWidth: "300px",
          minHeight: "100%",
        },
      }}
    >
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
          handleClose={handleClose}
          textSx={{ color: color.global.white }}
        />

        <IconButton color="light" onClick={handleClose}>
          <FaWindowClose size={23} />
        </IconButton>
      </AppHstack>
      <AppHstack sx={{ p: "1rem", justifyContent: "center" }}>
        <AppInput
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <IoSearch color={cssStyle.mainColor} size={25} />
                </InputAdornment>
              ),
            },
          }}
          value={search?.text || ""}
          name="text"
          changeHandler={(e) => {
            handleSearch(e);
          }}
          sx={{ width: "80%" }}
          type="text"
          label="Search Products"
        />
      </AppHstack>
      <AppLoader loading={productsLoading}>
        {products?.data?.length === 0 ? (
          <AppBox textAlign="center">
            {!search?.text
              ? "Search to display product list here"
              : search?.text
              ? "NO DATA FOUND"
              : null}
          </AppBox>
        ) : (
          <AppVstack p="20px" gap="14px">
            {products?.data?.map((item) => {
              return (
                <AppLink
                  key={item?.id}
                  href={`/products/${item?.id}`}
                  onClick={handleClose}
                >
                  <Card
                    sx={{
                      p: "20px",
                      border: `2px solid ${cssStyle.mainColor}`,
                      boxShadow: "none",
                      "&:hover": {
                        background: cssStyle.mainColor,
                        color: color.global.white,
                      },
                    }}
                  >
                    <AppHstack
                      sx={{
                        flexDirection: { xs: "column", md: "row" },
                        textAlign: "start",
                      }}
                    >
                      <AppText
                        sx={{
                          width: { xs: "initial", md: "20%" },
                          fontWeight: "600",
                        }}
                        text={item?.name}
                      />
                      <AppText
                        sx={{
                          ...lineClamp("1"),
                          width: { xs: "initial", md: "80%" },
                        }}
                        text={item?.description}
                      />
                    </AppHstack>
                  </Card>
                </AppLink>
              );
            })}
          </AppVstack>
        )}
      </AppLoader>
    </AppDrawer>
  );
};

export default SearchDrawer;
