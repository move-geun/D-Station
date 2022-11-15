import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActions, CardContent, Typography } from "@mui/material";
// import Chip from "@mui/joy/Chip";
import { Interval } from "./QuestionCard.style";

const QuestionCard = ({ Tag, Title, theDate, Nickname, Uid }) => {
  return (
    <Interval>
      <Card sx={{ minWidth: 250, marginRight: 3 }}>
        <CardContent>
          {/* <Chip variant="solid" color="danger"> */}
          <Typography
            sx={{ fontWeight: "bold", fontSize: 14, color: "hotpink" }}
            color="text.secondary"
            gutterBottom
          >
            {Tag}
          </Typography>
          {/* </Chip> */}
          <Typography variant="h5" component="div" sx={{ mt: 2 }}>
            {Title}
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
            {Nickname}
          </Typography>
          <Typography variant="body2">{theDate}</Typography>
        </CardContent>
        <CardActions>
          <Link to="/questiondetail" state={{ id: { Uid } }}>
            Detail
          </Link>
        </CardActions>
      </Card>
    </Interval>
  );
};

export default QuestionCard;
