const color = {
  global: {
    primary: "#22252b",
    secondary: "#53655c",
    teritiary: "#a3aeb1",
    quaternary: "#e5e8eb",
    quinary: "#b09f95",
    white: "#ffffff",
    black: "#111",
  },
};
const cssStyle = {
  mainColor: color.global.primary,
  shadow: {
    bottom: "0 0.8px #d8d8d8",
  },
  nameText: { fontSize: "1.5rem", fontWeight: "600" },
  headText: { fontSize: "2rem", fontWeight: "700" },
  dividerColor: "rgba(255, 255, 255, 0.12)",
  globalBorderRadius: "4px",
  absoluteCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 10,
  },
  globalBoxShadow:
    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
};

const materialStyle = {
  menu: {
    paper: {
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        width: "150px",
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    },
  },
  uploadButton: {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  },
};

const lineClamp = (value = "2") => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: value,
    WebkitBoxOrient: "vertical",
  };
};

export { materialStyle, cssStyle, lineClamp, color };
