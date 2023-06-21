import CardList from "@/component/CardList";
import { Typography, useTheme } from "@mui/material";
import { useGetSearchQuery } from "@/state/api";
import { useParams } from "react-router-dom";
import Loader from "@/component/Loader";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { palette } = useTheme();

  const { data, error, isLoading } = useGetSearchQuery(searchTerm || "");
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
      <div>
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
          {data.data.length}
          <span style={{ color: palette.primary.main, marginLeft: "6px" }}>
            Videos
          </span>
        </Typography>
        <CardList videos={data.data} />
      </div>
    );
  }
};

export default SearchFeed;
