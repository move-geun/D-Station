import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import { Container } from "./QuestionModify.style";
import { Button } from "./QuestionModify.style";

const QuestionModify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = getUserId();
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState();

  const [titleCreate, setTitleCreate] = useState();
  const editorRef = useRef();
  const [selected, setSelected] = useState(tag);

  // 버튼 조건용
  const [checkTag, setCheckTag] = useState(false);
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkContent, setCheckContent] = useState(false);

  const blank = {
    marginTop: "20px",
    fontSize: "20px",
  };

  useEffect(() => {
    const Uid = location.state.id.id;
    http.connect_axios.get(`/ask/detail?uid=${Uid}`).then((res) => {
      setTitle(res.data.title);
      setTag(res.data.tag);
      setContent(res.data.content);
      setId(res.data.uid);
    });
  }, []);

  const modify = () => {
    const Uid = location.state.id.id;
    const Content = editorRef.current.getContent();
    const data = {
      uId: Uid,
      userId: userId,
      title: titleCreate,
      content: Content,
      tag: selected,
    };
    http.connect_axios
      .put(
        `ask/detail?content=${data.content}&tag=${data.tag}&title=${data.title}&uid=${data.uId}&userId=${data.userId}`
      )
      .then((res) => {
        alert("수정이 완료되었습니다.");
        navigate(`/questionlist`);
      })
      .catch((err) => {
        console.log(err);
        alert("수정 안됨 ㅠㅠ");
      });
  };

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

  return (
    <Container>
      <h1>👀게시글 수정하기</h1>
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
          placeholder={title}
          value={title}
          minRows={1}
          onChange={titleHandler}
        ></Textarea>
        <FormLabel style={blank}>내용</FormLabel>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          onInit={(evt, editor) => (editorRef.current = editor)}
          onChange={contentHandler}
          initialValue={content}
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
          <Button onClick={modify}>
            작성완료
            <SendIcon />
          </Button>
        ) : null}
      </FormControl>
    </Container>
  );
};

export default QuestionModify;
