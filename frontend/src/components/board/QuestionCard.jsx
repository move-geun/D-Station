import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { Interval, LinkBox, TagBox, Button } from "./QuestionCard.style";
import { useEffect, useState } from "react";

const QuestionCard = ({ Tag, Title, theDate, Nickname, Uid }) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(theDate?.substring(0, 16));
  }, [theDate]);

  return (
    <Interval>
      <Card sx={{ minWidth: 250, marginRight: 3 }}>
        <CardContent>
          <TagBox>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 14, color: "hotpink" }}
              color="text.secondary"
              gutterBottom
            >
              {Tag}
            </Typography>
          </TagBox>
          <Typography component="div" sx={{ fontSize: 20, mt: 2 }}>
            {Title}
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 5 }} color="text.secondary">
            {Nickname}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </CardContent>
        <LinkBox>
          <Button>
            <Link
              to="/questiondetail"
              state={{ id: { Uid } }}
              style={{ display: "flex", textAlign: "end", color: "orangered" }}
            >
              🔎Detail
            </Link>
          </Button>
        </LinkBox>
      </Card>
    </Interval>
  );
};

export default QuestionCard;
