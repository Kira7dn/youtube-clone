import { Typography, useTheme } from "@mui/material";
import CardList from "@/component/CardList";
import { Video } from "@/state/api";

type Props = {
  selectedCategory: string;
  videos: Array<Video>;
};

const Feed = ({ selectedCategory, videos }: Props) => {
  const { palette } = useTheme();

  return (
    <>
      <Typography
        gutterBottom
        variant="h2"
        sx={{
          fontWeight: "700",
          color: palette.text.primary,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {selectedCategory}
        <span style={{ color: palette.primary.main, marginLeft: "6px" }}>
          Videos
        </span>
      </Typography>
      {videos && <CardList videos={videos} />}
    </>
  );
};

export default Feed;
