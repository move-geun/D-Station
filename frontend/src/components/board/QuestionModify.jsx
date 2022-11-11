import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";

const QuestionModify = () => {
  const navigate = useNavigate();
  const userId = getUserId();
  return <></>;
};

export default QuestionModify;
