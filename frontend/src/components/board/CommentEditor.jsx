import React, { useRef, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";

export default function CommentEditor() {
  const userId = getUserId();
  const editorRef = useRef();

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
    width: "100px",
  };

  const buttonBox = {
    display: "flex",
    justifyContent: "end",
  };

  const writeComment = () => {
    const comment = editorRef.current.getContent();
    http.connect_axios
      .post(`reply/?userId=${userId}&content=${comment}&jisickinUid=11`)
      .then((res) => {
        console.log(res);
        alert("댓글 등록 성공");
      })
      .catch((err) => {
        alert("댓글 등록 실패");
      });
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>댓글작성</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>내용을 입력해주세요.</p>"
          init={{
            height: 300,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <div style={buttonBox}>
          <Button
            style={blank}
            onClick={writeComment}
            variant="contained"
            endIcon={<CheckCircleIcon />}
          >
            등록
          </Button>
        </div>
      </FormControl>
    </>
  );
}
