import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Interval } from "./QuestionCard.style";

const QuestionCard = ({ Tag, Title, theDate, Nickname }) => {
  return (
    <Interval>
      <Card sx={{ minWidth: 250 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {Tag}
          </Typography>
          <Typography variant="h5" component="div">
            {Title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {Nickname}닉네임
          </Typography>
          <Typography variant="body2">{theDate}</Typography>
        </CardContent>
        <CardActions>
          <Link
            to="/questiondetail"
            style={{ color: "green", marginLeft: "10px" }}
          >
            Detail
          </Link>
        </CardActions>
      </Card>
    </Interval>
  );
};

export default QuestionCard;
