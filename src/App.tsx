import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Stack, Box, Typography, CssBaseline } from "@mui/material";
import Navbar from "./component/Navbar";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "@/scenes";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/theme.ts";
import { useMemo, useState } from "react";
import { useGetSearchQuery } from "@/state/api";
import SideBar from "@/component/SideBar";
import { categories } from "@/utils/constants";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [selectedCategory, setCategory] = useState("New");
  const { data } = useGetSearchQuery(selectedCategory);
  const videos = useMemo(() => data && data.data, [data]);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <Stack
            sx={{
              flexDirection: { sx: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                px: { sx: 0, md: 2 },
                height: { sx: "auto", md: "90vh" },
                paddingTop: "24px",
              }}
            >
              <SideBar
                categories={categories}
                selectedCategory={selectedCategory}
                setCategory={setCategory}
              />
              <Typography
                className="copyright"
                variant="body2"
                sx={{ mt: 1.5 }}
              >
                Copyright © 2023 by Ducanh.Le
              </Typography>
            </Box>
            <Box
              minHeight="90vh"
              p={2}
              sx={{
                overflowY: "auto",
                height: "80vh",
                flex: 2,
                paddingRight: "20px",
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Feed
                      selectedCategory={selectedCategory}
                      videos={videos || []}
                    />
                  }
                />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
              </Routes>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
