import { Category } from "@/utils/types";
import { Stack, useTheme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";
import React from "react";

const useStyles = makeStyles()((theme) => ({
  categoryBtn: {
    fontWeight: "bold !important",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    cursor: "pointer",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    padding: "7px 8px",
    margin: "4px 0",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    "&&:hover": {
      backgroundColor: theme.palette.primary[400] + "!important",
    },
    "&&:hover span": {
      color: theme.palette.secondary.main + "!important",
    },
  },
}));

type Props = {
  categories: Array<Category>;
  selectedCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};
const SideBar = ({ categories, selectedCategory, setCategory }: Props) => {
  const { palette } = useTheme();
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className={cx(classes.categoryBtn)}
            key={category.name}
            onClick={() => {
              setCategory(category.name);
              navigate("");
            }}
            style={{
              backgroundColor:
                selectedCategory !== category.name
                  ? palette.background.paper
                  : palette.primary.main,
            }}
          >
            <span
              style={{
                marginRight: "12px",
                color:
                  selectedCategory === category.name
                    ? palette.background.paper
                    : palette.primary.main,
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                wordWrap: "normal",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
