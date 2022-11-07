import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Interval } from "./QuestionCard.style";

const QuestionCard = () => {
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            태그자리
          </Typography>
          <Typography variant="h5" component="div">
            제목자리
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            글쓴이
          </Typography>
          <Typography variant="body2">게시글 요약내용</Typography>
        </CardContent>
        <CardActions>
          <Link to="/questiondetail" style={{color: "green", marginLeft:"10px"}}>Detail</Link>
        </CardActions>
      </Card>
    </Interval>
  );
};

export default QuestionCard;
