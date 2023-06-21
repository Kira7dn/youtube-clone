import { useGetChannelQuery } from "@/state/api";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import ChannelHeader from "@/component/ChannelHeader";
import { Box } from "@mui/material";
import CardList from "@/component/CardList";

const ChannelDetail = () => {
  const { id } = useParams();
  const { data } = useGetChannelQuery(id || "UCTwECeGqMZee77BjdoYtI2Q");
  const channelData = useMemo(() => data && data, [data]);
  return (
    <Box>
      {channelData && <ChannelHeader meta={channelData.meta} />}
      {channelData?.data && <CardList videos={channelData.data} />}
    </Box>
  );
};

export default ChannelDetail;
