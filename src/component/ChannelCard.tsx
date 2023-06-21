import { Video } from "@/state/api";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  // useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  channel: Video;
};

function ChannelCard({ channel }: Props) {
  // const { palette } = useTheme();
  const { channelId, title, channelTitle, thumbnail, subscriberCount } =
    channel;
  return (
    <Box key={channelId}>
      <Link to={`channel/${channelId}`}>
        <Card
          sx={{
            width: { xs: "320px", sm: "358px", md: "320px" },
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={thumbnail[1].url}
            title={title}
            sx={{
              width: { xs: "180px", sm: "180px" },
              height: "180px",
              borderRadius: "50%",
            }}
          />

          <CardContent
            sx={{
              backgroundColor: "transparent",
              height: "106px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {channelTitle}
            </Typography>
            <Typography
              variant="subtitle2"
              color="gray"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {subscriberCount}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}

export default ChannelCard;
