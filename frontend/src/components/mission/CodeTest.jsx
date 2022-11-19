import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ButtonBox } from "./CodeTest.style";
import http from "../../api/http";

const CodeTest = () => {
  const submit = () => {
    http.connect_axios
      .post(`/grading/python?code=print(%22Hello%20World%22)&uid=1`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
    width: "100px",
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>코드작성</FormLabel>
        <ButtonBox>
          <Button
            style={blank}
            onClick={submit}
            variant="contained"
            startIcon={<CheckCircleIcon />}
          >
            제출
          </Button>
        </ButtonBox>
      </FormControl>
    </>
  );
};

export default CodeTest;
