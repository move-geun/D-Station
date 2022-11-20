import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AceEditor from "react-ace";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Label, CodeBox, ButtonBox, Button } from "./CodeTest.style";
import http from "../../api/http";
import "ace-builds/webpack-resolver";

const CodeTest = ({ Uid }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);

  const submit = () => {
    http.connect_axios
      .post(`/grading/python?code=${code}&uid=${Uid}`)
      .then((res) => {
        alert("정답입니다.");
        navigate(-1);
      })
      .catch((err) => {
        alert("정답이 아닙니다.");
      });
  };

  return (
    <CodeBox>
      <Label>[코드작성]</Label>
      <AceEditor
        width="800px"
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
        <Button onClick={submit}>
          제출
          <CheckCircleIcon />
        </Button>
      </ButtonBox>
    </CodeBox>
  );
};

export default CodeTest;
