import { Stack, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useTheme } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchPartern] = useState("");
  const onHandleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSearchPartern("");
    navigate(`/search/${searchTerm}`);
  };
  return (
    <Stack
      direction="row"
      padding={2}
      sx={{ justifyContent: "space-between", position: "sticky", top: 0 }}
      alignItems="center"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={22} />
      </Link>
      <Paper
        component="form"
        onSubmit={onHandleSubmit}
        sx={{
          borderRadius: 20,
          paddingLeft: 2,
          mr: { sm: 5 },
          boxShadow: "none",
          width: { md: "500px", sm: "200px" },
          border: `solid 1px ${palette.grey[200]}`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "none",
            outline: "none",
          }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchPartern(event.target.value)}
        ></input>
        <IconButton
          type="submit"
          aria-label="search"
          sx={{
            padding: "10px",
            color: palette.primary.main,
            right: 0,
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
