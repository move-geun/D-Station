import React, { useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useEffect } from "react";

export default function QuestionEditor() {

    const [tilContent, setTilContent] = useState({
        title: '',
        content: '',
    });

    const titleRef = useRef();
    const editorRef = useRef();
    useEffect(()=>{}, [tilContent]);

    const blank = {
        marginTop: "20px",
        fontSize: "20px",
    };

    const TitleHandler = (e) => {
        const {value} = e.target;

        setTilContent({
            ...tilContent,
            title : value,
        })
    }

    const log = (e) => {
        if (editorRef.current) {

        setTilContent({
            ...tilContent,
            content : editorRef.current.getContent(),
        })
        sendData();
        }
    };

    const ConvertHtmltoMD  = () => {

    }

    const ConvertMDtoBase64 = () => {
        
    }
    

    const sendData = () => {
        if(tilContent.title.length < 1){
            alert("제목을 입력해주세요");
            editorRef.current.focus();
            return;
        }

        if(tilContent.content.length < 1){
            alert("내용을 입력해주세요");
            titleRef.current.focus();
            return;
        }

        // 여기에 html 을 백에 보냄

        console.log("알려줘!" , tilContent);
    }

   
    



  return (
    <>
      <FormControl>
        <FormLabel style={blank}>제목</FormLabel>
        <Textarea ref= {titleRef }placeholder="제목을 입력해주세요." minRows={1} name="title" onChange={TitleHandler}/>
        <FormLabel style={blank}>내용</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          onChange={log}
          init={{
            height: 400,
            menubar: false,
            toolbar : false,
            statusbar: false,
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
            // toolbar:
            //   "undo redo | blocks | " +
            //   "bold italic forecolor | alignleft aligncenter " +
            //   "alignright alignjustify | bullist numlist outdent indent | " +
            //   "removeformat | help",
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
