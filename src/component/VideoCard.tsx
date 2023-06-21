import { Video } from "@/state/api";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  video: Video;
};

function VideoCard({ video }: Props) {
  const {
    videoId,
    channelId,
    title,
    channelTitle,
    thumbnail,
    channelThumbnail,
    viewCount,
  } = video;
  const bestThumbnail =
    thumbnail[3] || thumbnail[2] || thumbnail[1] || thumbnail[0];
  return (
    <Box key={videoId} sx={{ marginBottom: "12px" }}>
      <Card
        sx={{
          width: { xs: "320px", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={`/video/${videoId}`}>
          <CardMedia
            image={bestThumbnail.url}
            title={title}
            sx={{
              width: "100%",
              height: 180,
              borderRadius: 3,
              cursor: "pointer",
              "&:hover": {
                borderRadius: 0,
              },
              transition: "ease-in-out 0.4s",
            }}
          />
        </Link>

        <CardContent
          sx={{
            backgroundColor: "transparent",
            height: "106px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            align="left"
            sx={{
              flexGrow: 1,
              paddingBottom: "4px",
            }}
          >
            {title.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" color="gray" align="left">
            <Link
              to={`channel/${channelId}`}
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "100%",
                cursor: "pointer",
              }}
            >
              {channelTitle}

              {channelThumbnail && (
                <img
                  src={channelThumbnail[0].url}
                  alt={channelTitle}
                  style={{
                    height: 18,
                    marginLeft: "6px",
                    borderRadius: "50%",
                  }}
                />
              )}
            </Link>
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            align="left"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            {viewCount} views
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default VideoCard;
