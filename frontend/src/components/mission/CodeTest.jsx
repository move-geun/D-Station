import React, { useState } from "react";
import AceEditor from "react-ace";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CodeBox, ButtonBox } from "./CodeTest.style";
import http from "../../api/http";

const CodeTest = () => {
  const [code, setCode] = useState();

  const submit = () => {
    http.connect_axios
      .post(`/grading/python?code=${code}&uid=1`)
      .then((res) => {
        console.log(res);
        console.log(code);
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
    <CodeBox>
      <FormControl>
        <FormLabel style={blank}>코드작성</FormLabel>
        <AceEditor
          width="1000px"
          placeholder="코드를 입력해주세요."
          // mode="python"
          name="codeInput"
          // onLoad={this.onLoad}
          onChange={setCode}
          fontSize={18}
          showPrintMargin
          showGutter
          highlightActiveLine
          // value={``}
          setOptions={{
            // enableBasicAutocompletion: true,
            // enableLiveAutocompletion: true,
            // enableSnippets: true,
            // showLineNumbers: true,
            tabSize: 4,
          }}
        />
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
    </CodeBox>
  );
};

export default CodeTest;
