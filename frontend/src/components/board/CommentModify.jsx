import React, { useRef, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
import { useEffect } from "react";

const CommentModify = (props) => {
  const userId = getUserId();
  const editorRef = useRef();
  const [content, setContent] = useState();
  const formData = new FormData();
  const JisikinId = props.value.JisikinId;
  const uid = props.alue.Uid;
  console.log(JisikinId);
  console.log(uid);

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
    width: "100px",
  };

  const buttonBox = {
    display: "flex",
    justifyContent: "end",
  };

  useEffect(() => {
    http.connect_axios.get(`reply/?jisickinUid=${JisikinId}`).then((res) => {
      console.log(res);
    });
  });

  const modify = () => {
    const comment = editorRef.current.getContent();
    const data = [
      {
        content: comment,
        jisikinUid: JisikinId,
      },
    ];
    formData.append("data", data);
    http.connect_axios.put(`/reply/?uid=${uid}&userId=${userId}`);
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>댓글수정</FormLabel>
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
            onClick={modify}
            variant="contained"
            endIcon={<CheckCircleIcon />}
          >
            수정
          </Button>
        </div>
      </FormControl>
    </>
  );
};
export default CommentModify;
