import React from "react";
import { useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ButtonBox } from "./CodeTest.style";

import http from "../../api/http";

const CodeTest = () => {
  const EditorRef = useRef();
  const log = () => {
    // if (EditorRef.current) {
    //   console.log(EditorRef.current.getContent());
    // }
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
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (EditorRef.current = editor)}
          initialValue="<p><code>코드를 작성해주세요.</code></p>"
          init={{
            height: 300,
            menubar: false,
            toolbar: false,
            statusbar: false,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <ButtonBox>
          <Button
            style={blank}
            onClick={log}
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
