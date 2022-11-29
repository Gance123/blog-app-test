import { ChangeEvent, useEffect, useState } from "react";
import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  isAuth: string | null;
};

export const CreatePost = (props: Props) => {
  const { isAuth } = props;

  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");
  const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeSetPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  };

  const onClickPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
  };

  //ログインしないと記事投稿できないようにする
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate, isAuth]);

  return (
    <Flex
      align="center"
      justify="center"
      flexDirection="column"
      h="90vh"
      w="100%"
    >
      <Flex
        direction="column"
        gap="20px"
        bg="white"
        p="10"
        shadow="0px 0px 10px -4px"
        borderRadius="10px"
        w="50%"
        minH="50%"
      >
        <Box>
          <Text as="h1" fontSize="30px" fontWeight="bold">
            記事を投稿する
          </Text>
        </Box>
        <Box>
          <Text>タイトル</Text>
          <Input
            type="text"
            placeholder="タイトルを記入"
            bg="white"
            onChange={onChangeSetTitle}
          />
        </Box>
        <Box>
          <Text>投稿</Text>
          <Textarea
            placeholder="投稿内容を記入"
            bg="white"
            h="5rem"
            onChange={onChangeSetPostText}
          />
        </Box>
        <Box margin="auto">
          <PrimaryButton onClick={onClickPost} bg={"teal.300"}>
            投稿する
          </PrimaryButton>
        </Box>
      </Flex>
    </Flex>
  );
};
