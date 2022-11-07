import React, { useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function QuestionEditor() {
  const titleRef = useRef();
  const editorRef = useRef();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      console.log(editorRef);
      console.log(titleRef.current);
    }
  };

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>제목</FormLabel>
        <Textarea placeholder="제목을 입력해주세요." minRows={1} ref={titleRef}/>
        <FormLabel style={blank}>내용</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>내용을 입력해주세요.</p>"
          init={{
            height: 400,
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
        <Button
          style={blank}
          onClick={log}
          variant="contained"
          endIcon={<SendIcon />}
        >
          작성완료
        </Button>
      </FormControl>
    </>
  );
}
