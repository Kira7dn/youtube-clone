// import React from "react";
import { VideoDetailResponse } from "@/state/api";
import ReactPlayer from "react-player/youtube";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  video: VideoDetailResponse;
};

const VideoPlayer = ({ video }: Props) => {
  return (
    <Box sx={{ width: "100%", position: "sticky", top: 0, padding: "8px" }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video.id}`}
        playing={true}
        className="react-player"
        controls
      />
      <Box sx={{ padding: "4px", marginTop: "8px" }}>
        <Typography variant="h3" gutterBottom>
          {video.title}
        </Typography>
        <Link to={`channel/${video.channelId}`}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: "16px" }}
            gutterBottom
          >
            {video.channelTitle}
          </Typography>
        </Link>
        <Typography variant="subtitle2" color="gray">
          {`${Number(video.viewCount).toLocaleString()} views`}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
