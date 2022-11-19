import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import SendIcon from "@mui/icons-material/Send";
import { Container, Button } from "./QuestionEditor.style";
// api 연결 관련 import구문
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
// tag 선택 탭
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";

export default function QuestionEditor() {
  const navigate = useNavigate();
  const blank = {
    marginTop: "20px",
    fontSize: "20px",
  };

  const userId = getUserId();
  const [titleCreate, setTitleCreate] = useState();
  const editorRef = useRef();
  const [selected, setSelected] = useState("");
  const [checkTag, setCheckTag] = useState(false);
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkContent, setCheckContent] = useState(false);

  useEffect(() => {}, [titleCreate]);
  const titleHandler = (e) => {
    setTitleCreate(e.target.value);
    setCheckTitle(true);
  };

  const contentHandler = (e) => {
    if (editorRef.current) {
      const editorCreate = editorRef.current.getContent();
      setCheckContent(true);
    }
  };

  const writeQuestion = () => {
    const data = {
      id: userId,
      title: titleCreate,
      content: editorRef.current.getContent(),
      tag: selected,
    };
    http.connect_axios
      .post(
        `/ask/?content=${data.content}&tag=${data.tag}&title=${data.title}&userId=${userId}`
      )
      .then((res) => {
        alert("게시물 업로드 성공🤗");
        navigate(`/questionlist`);
      })
      .catch((err) => {
        alert("게시물 업로드 실패😥");
      });
  };

  return (
    <Container>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box>
          <Typography level="h2" fontSize="lg" id="best-movie" mb={2}>
            분류
          </Typography>
          <RadioGroup
            name="best-movie"
            aria-labelledby="best-movie"
            row
            sx={{ flexWrap: "wrap", gap: 1 }}
          >
            {["백엔드😀", "프론트엔드😆", "데브옵스😎", "CS🧷", "기타🎸"].map(
              (name) => {
                const checked = selected === name;
                return (
                  <Chip
                    key={name}
                    variant={checked ? "soft" : "plain"}
                    color={checked ? "primary" : "neutral"}
                    startDecorator={
                      checked && (
                        <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                      )
                    }
                  >
                    <Radio
                      variant="outlined"
                      color={checked ? "primary" : "neutral"}
                      disableIcon
                      overlay
                      label={name}
                      value={name}
                      checked={checked}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelected(name);
                          setCheckTag(true);
                        }
                      }}
                    />
                  </Chip>
                );
              }
            )}
          </RadioGroup>
        </Box>
      </Box>
      <FormControl>
        <FormLabel style={blank}>제목</FormLabel>
        <Textarea
          placeholder="제목을 입력해주세요."
          minRows={1}
          onChange={titleHandler}
        />
        <FormLabel style={blank}>내용</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          onChange={contentHandler}
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
        {checkTag && checkTitle && checkContent ? (
          <Button onClick={writeQuestion}>
            작성완료
            <SendIcon />
          </Button>
        ) : null}
      </FormControl>
    </Container>
  );
}
