import { ChannelMeta } from "@/state/api";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {
  meta: ChannelMeta;
};

const ChannelHeader = ({ meta }: Props) => {
  const { palette } = useTheme();

  return (
    <Box>
      <img
        src={meta.image.banner[2].url}
        alt="banner"
        style={{
          width: "100%",
        }}
      />
      <Card
        sx={{
          width: "100%",
          boxShadow: "none",
          borderRadius: 0,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <CardMedia
          image={meta.thumbnail[2].url}
          title={meta.title}
          sx={{
            width: { xs: "180px", sm: "180px" },
            height: "180px",
            borderRadius: "50%",
          }}
        />

        <CardContent
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: { md: "400px", lg: "800px" },
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            {meta.title}
            <CheckCircleIcon
              color="success"
              fontSize="inherit"
              sx={{ marginLeft: "4px" }}
            />
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {meta.subscriberCount} Subcribers
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {meta.description}
          </Typography>
        </CardContent>
      </Card>
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
        {meta.title}
        <span style={{ color: palette.primary.main, marginLeft: "6px" }}>
          Videos
        </span>
      </Typography>
    </Box>
  );
};

export default ChannelHeader;
