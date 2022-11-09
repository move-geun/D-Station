import React, { useRef, useState, useEffect } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// api 연결 관련 import구문
import connect_axios from "../../api/connect";
import { UserIdState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";
// tag 선택 탭
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";

export default function QuestionEditor() {
  const blank = {
    marginTop: "20px",
    fontSize: "20px",
  };

  const userId = useRecoilValue(UserIdState);
  const [titleCreate, setTitleCreate] = useState();
  const editorRef = useRef();
  const [selected, setSelected] = React.useState("");

  console.log("유저아이디ㅣㅣㅣㅣ  ", userId);
  useEffect(() => {}, [titleCreate]);
  const titleHandler = (e) => {
    setTitleCreate(e.target.value);
  };

  const contentHandler = (e) => {
    if (editorRef.current) {
      const editorCreate = editorRef.current.getContent();
      console.log(editorCreate);
    }
  };

  const writeQuestion = () => {
    const data = {
      id: "gheunS2",
      title: titleCreate,
      content: editorRef.current.getContent(),
      tag: selected,
    };
    connect_axios
      .post(`/ask/?content=${data.content}&tag=${data.tag}&title=${data.title}&userId=gheunS2`)
      .then((res) => {
        console.log("업로드 완료");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
        <Button
          style={blank}
          onClick={writeQuestion}
          variant="contained"
          endIcon={<SendIcon />}
        >
          작성완료
        </Button>
      </FormControl>
    </>
  );
}
