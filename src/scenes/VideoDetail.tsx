// import React from "react";
import { useGetRelatedVideoQuery, useGetVideoDetailQuery } from "@/state/api";
import { useParams } from "react-router-dom";
import VideoPlayer from "@/component/VideoPlayer";
import VideoList from "@/component/VideoList";
import { Box } from "@mui/material";
import Loader from "@/component/Loader";

const VideoDetail = () => {
  const { id } = useParams();
  const {
    data: videoData,
    error: videoDataError,
    isLoading: videoDataisLoading,
  } = useGetVideoDetailQuery(id || "dQw4w9WgXcQ");
  const {
    data: relatedVideos,
    error: relatedVideoError,
    isLoading: relatedVideoisLoading,
  } = useGetRelatedVideoQuery(id || "dQw4w9WgXcQ");
  if (videoDataisLoading || relatedVideoisLoading) {
    return <Loader />;
  }

  if (videoDataError) {
    if ("status" in videoDataError) {
      const errMsg =
        "error" in videoDataError
          ? videoDataError.error
          : JSON.stringify(videoDataError.data);
      return (
        <div>
          <div>An videoDataError has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{videoDataError.message}</div>;
    }
  }
  if (relatedVideoError) {
    if ("status" in relatedVideoError) {
      const errMsg =
        "error" in relatedVideoError
          ? relatedVideoError.error
          : JSON.stringify(relatedVideoError.data);
      return (
        <div>
          <div>An relatedVideoError has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{relatedVideoError.message}</div>;
    }
  }
  if (videoData && relatedVideos) {
    console.log(videoData);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1}>
          <VideoPlayer video={videoData} />
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {relatedVideos?.data && (
            <VideoList videos={relatedVideos.data} direction="column" />
          )}
        </Box>
      </Box>
    );
  }
};

export default VideoDetail;
