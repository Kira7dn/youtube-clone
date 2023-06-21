// import React from "react";
import { VideoDetailResponse } from "@/state/api";
import ReactPlayer from "react-player/youtube";
import { Box, Typography, Card, CardContent } from "@mui/material";
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
      <Box>
        <Typography variant="h3">{video.title}</Typography>
        <Card sx={{}}>
          <CardContent sx={{}}>
            <Link to={`channel/${video.channelId}`}>
              <Typography variant="subtitle1" fontWeight="bold">
                {video.channelTitle}
              </Typography>
            </Link>

            <Typography variant="subtitle2" color="gray">
              {`${Number(video.viewCount).toLocaleString()} views`}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {video.description}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {video.publishDate}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
