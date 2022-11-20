import React, { useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Editor } from "@tinymce/tinymce-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
import { Buttons } from "./CommentModify.style";

const CommentModify = ({ Uid, JisikinId, Content }) => {
  const userId = getUserId();
  const editorRef = useRef();

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
    width: "100px",
  };

  const buttonBox = {
    display: "flex",
    justifyContent: "end",
  };

  const modify = () => {
    const comment = editorRef.current.getContent();
    http.connect_axios
      .put(
        `reply/?jisickinUid=${JisikinId}&userId=${userId}&content=${comment}&uid=${Uid}`
      )
      .then((res) => {
        alert("댓글 수정완료😆");
        window.location.reload();
      });
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>댓글수정</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={Content}
          init={{
            height: 200,
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
          <Buttons onClick={modify}>
            수정
            <div>
              <CheckCircleIcon />
            </div>
          </Buttons>
        </div>
      </FormControl>
    </>
  );
};
export default CommentModify;
