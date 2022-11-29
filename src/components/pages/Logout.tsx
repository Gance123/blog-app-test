import { Dispatch, FC, memo, SetStateAction } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
};

export const Logout: FC<Props> = memo((props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const onClickLogout = () => {
    //ログアウト
    signOut(auth).then((result) => {
      //ローカルストレージを初期化
      localStorage.clear();
      //ログアウト情報を保持
      setIsAuth("false");
      // ログイン画面に遷移
      navigate("/login");
    });
  };

  return (
    <>
      <Flex justify="center" alignItems="center" h="90vh">
        <Box>
          <PrimaryButton bg={""} onClick={onClickLogout}>
            <Flex
              bg="red.500"
              h="100px"
              w="300px"
              borderRadius="10px"
              shadow="0px 0px 20px -5px black"
              justify="center"
              alignItems="center"
              transition="all .5s"
              _hover={{ transform: "scale(1.3)" }}
            >
              <Text>Googleでログアウトします</Text>
            </Flex>
          </PrimaryButton>
        </Box>
      </Flex>
    </>
  );
});
