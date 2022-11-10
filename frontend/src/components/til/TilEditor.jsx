import React, { useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";

import http from "../../api/http";
import { UserIdState, UserState, PATState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";
import { getUserId } from "../../api/JWT";

export default function QuestionEditor() {
  const [tilContent, setTilContent] = useState({
    title: "",
    content: "",
    message: "",
  });

<<<<<<< HEAD
    const titleRef = useRef();
    const editorRef = useRef();
    const userId = getUserId();
=======
  const titleRef = useRef();
  const editorRef = useRef();
  const userId = getUserId();
>>>>>>> f13449ae456e7cf2bb70b51921181192545d2a8f

  useEffect(() => {}, [tilContent]);

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
  };

  const TitleHandler = (e) => {
    const { value } = e.target;
    setTilContent({
      ...tilContent,
      title: value,
    });
  };

  const log = (e) => {
    if (editorRef.current) {
      setTilContent({
        ...tilContent,
        content: editorRef.current.getContent(),
      });
      sendData();
    }
  };

  const MessageHandler = (e) => {
    const { value } = e.target;
    setTilContent({
      ...tilContent,
      message: value,
    });
  };

  const sendData = () => {
    if (tilContent.title.length < 1) {
      alert("제목을 입력해주세요");
      editorRef.current.focus();
      return;
    }

    if (tilContent.content.length < 1) {
      alert("내용을 입력해주세요");
      titleRef.current.focus();
      return;
    }

    if (tilContent.message.length < 1) {
      alert("Commit Message을 입력해주세요");
      titleRef.current.focus();
      return;
    }

    const data = {
      content: tilContent.content,
      fileName: tilContent.title,
      id: userId,
      message: tilContent.message,
      missionUid: "1000",
    };

    // 여기에 html 을 백에 보냄
    http.connect_axios.post(`/til/crate`, JSON.stringify(data), {
      headers: {
        "Content-Type": `application/json`,
      },
    });
    console.log("알려줘!", data.id);
  };

  return (
    <>
      <FormControl>
        <FormLabel style={blank}>제목</FormLabel>
        <Textarea
          ref={titleRef}
          placeholder="제목을 입력해주세요."
          minRows={1}
          name="title"
          onChange={TitleHandler}
        />
        <FormLabel style={blank}>내용</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          onChange={log}
          init={{
            height: 400,
            menubar: false,
            toolbar: false,
            statusbar: false,
            // toolbar:
            //   "undo redo | blocks | " +
            //   "bold italic forecolor | alignleft aligncenter " +
            //   "alignright alignjustify | bullist numlist outdent indent | " +
            //   "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <FormLabel style={blank}>Commit Message</FormLabel>
        <Textarea
          ref={titleRef}
          placeholder="Commit Message를 입력해주세요."
          minRows={1}
          name="message"
          onChange={MessageHandler}
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
