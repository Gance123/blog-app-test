import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

// import { postLists } from "../types/Postlist";

export const Home = () => {
  const [postLists, setPostLists] = useState([]);

  const onClickDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    // 更新ボタン
    window.location.href = "/";
  };

  // ドキュメント取得
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // ドキュメントに対してdata関数
      // スプレッド構文に対してidプロパティ追加
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <Flex
      w="100%"
      h="calc(100vh - 80px)"
      height="auto"
      alignItems="center"
      flexDirection="column"
      padding="20px"
loc    >
      {postLists.map((post) => {
        return (
          <Flex
            key="id"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            w="600px"
            max-h="600px"
            margin="20px"
            padding="20px"
            bg="white"
            shadow="5px 9px 15px -5px #777777"
            borderRadius="8px"
          >
            <Box>
              <Text as="h1" fontSize={30} fontWeight="bold" textAlign="center">
                {post.title}
              </Text>
            </Box>
            <Box>
              <Text>{post.postText}</Text>
            </Box>
            <Flex alignItems="center" justify="space-between" w="100%">
              <Box flex="90%">
                <Text as="h3" fontWeight="bold">
                  @{post.author.username}
                </Text>
              </Box>
              <Box flex="10%">
                {/* 投稿されたポストIDと現在のログインuserIDが一致すれば */}
                {post.author.id === auth.currentUser.uid && (
                  <PrimaryButton
                    bg={"red.500"}
                    onClick={() => onClickDelete(post.id)}
                  >
                    削除
                  </PrimaryButton>
                )}
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
