import { Dispatch, FC, memo, SetStateAction } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | null>>;
};

export const Login: FC<Props> = memo((props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const onClickLoginWithGoogle = () => {
    //ログイン
    signInWithPopup(auth, provider).then((result) => {
      // ローカルストレージにログイン情報を保管(キー, 値)
      localStorage.setItem("isAuth", "true");
      // ログインした情報を保持
      setIsAuth("true");
      // ログイン時にホーム画面に遷移
      navigate("/");
    });
  };

  return (
    <Flex justify="center" alignItems="center" h="90vh">
      <Box>
        <PrimaryButton bg={""} onClick={onClickLoginWithGoogle}>
          <Flex
            bg="teal"
            h="100px"
            w="300px"
            borderRadius="10px"
            shadow="0px 0px 20px -5px black"
            justify="center"
            alignItems="center"
            transition="all 1s"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Text>Googleでログインしますよ！！</Text>
          </Flex>
        </PrimaryButton>
      </Box>
    </Flex>
  );
});
