import React, { useRef } from "react";
import { useParams } from "react-router-dom";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";

import http from "../../api/http";
import { TilState, NavMissionIntoThree } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { getUserId } from "../../api/JWT";
import { EditorContainer } from "./TilEditor.style";

const defaultValue = {};
export default function TilEditor(prop = defaultValue) {
  const [tilContent, setTilContent] = useState({
    title: "",
    content: "",
    message: "",
  });

  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);
  const [tilState, setTilState] = useRecoilState(TilState);
  const misId = useParams().missNo;

  const titleRef = useRef();
  const editorRef = useRef();
  const userId = getUserId();

  useEffect(() => {}, [tilContent]);
  useEffect(() => {}, [prop]);

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
    }
  };

  const MessageHandler = (e) => {
    const { value } = e.target;
    setTilContent({
      ...tilContent,
      message: value,
    });
  };

  async function setOne() {
    setTimeout(await setWhichOne(null), 3000);
  }

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
      missionUid: misId,
    };

    // 여기에 html 을 백에 보냄
    http.connect_axios
      .post(`/til/create`, JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log("til 작성내용", data);
        // 작성 성공했을 때, threejs section에 성공 띄우기
        setWhichOne("tilSuccess");
        setTilState(true);
        // setOne();
      })
      .catch((err) => {
        console.log(data);
      });
  };

  return (
    <EditorContainer>
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
            height: 300,
            menubar: false,
            toolbar: false,
            statusbar: false,
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
          onClick={sendData}
          variant="contained"
          endIcon={<SendIcon />}
        >
          작성완료
        </Button>
      </FormControl>
    </EditorContainer>
  );
}
