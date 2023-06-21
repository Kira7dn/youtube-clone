import { Video } from "@/state/api";
import { Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

type Props = {
  videos: Array<Video>;
  direction?: string;
};

const CardList = ({ videos, direction }: Props) => {
  return (
    <Stack
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        flexDirection: direction || "row",
      }}
    >
      {videos.map((video) => {
        if (video.type === "video" || video.videoId)
          return <VideoCard video={video} key={video.videoId} />;
        if (video.type === "channel")
          return <ChannelCard channel={video} key={video.channelId} />;
      })}
    </Stack>
  );
};

export default CardList;
