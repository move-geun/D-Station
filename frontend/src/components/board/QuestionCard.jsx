import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Interval } from "./QuestionCard.style";
// api 연결 관련
import http from "../../api/http";

const QuestionCard = ({ Title, theDate, Nickname }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Interval>
      <Card sx={{ minWidth: 250 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            {Title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {Nickname}
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
