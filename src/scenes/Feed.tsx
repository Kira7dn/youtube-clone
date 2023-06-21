import { Typography, useTheme } from "@mui/material";
import VideoList from "@/component/VideoList";
import { Video } from "@/state/api";
import { useGetSearchQuery } from "@/state/api";
import { useMemo } from "react";
import Loader from "@/component/Loader";

type Props = {
  selectedCategory: string;
  videos?: Array<Video>;
};

const Feed = ({ selectedCategory }: Props) => {
  const { palette } = useTheme();
  const { data, error, isLoading } = useGetSearchQuery(selectedCategory);
  const videos = useMemo(() => data && data.data, [data]);
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  if (data) {
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
        {videos && <VideoList videos={videos} />}
      </>
    );
  }
};

export default Feed;
