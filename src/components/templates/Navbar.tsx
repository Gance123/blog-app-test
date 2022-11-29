import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  isAuth: string | null;
};

export const Navbar = (props: Props) => {
  const { isAuth } = props;

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      gap="45px"
      height="50px"
      bg="#cb8c54"
      color="white"
    >
      <Box _hover={{ color: "cadetblue" }} transition="all .3s">
        <Link to="/">
          <Flex align="center" justify="center" gap="1">
            <FontAwesomeIcon icon={faHouse} />
            <Text>ホーム</Text>
          </Flex>
        </Link>
      </Box>

      {/* ログインボタンを押すとisAuth=trueになる・・・false(!true)の時 */}
      {isAuth === "false" ? (
        <Box _hover={{ color: "cadetblue" }} transition="all .3s">
          <Link to="/login">
            <Flex align="center" justify="center" gap="1">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <Text>ログイン</Text>
            </Flex>
          </Link>
        </Box>
      ) : (
        <>
          <Box _hover={{ color: "cadetblue" }} transition="all .3s">
            <Link to="/createpost">
              <Flex align="center" justify="center" gap="1">
                <FontAwesomeIcon icon={faFilePen} />
                <Text>記事投稿</Text>
              </Flex>
            </Link>
          </Box>
          <Box _hover={{ color: "cadetblue" }} transition="all .3s">
            <Link to="/logout">
              <Flex align="center" justify="center" gap="1">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <Text>ログアウト</Text>
              </Flex>
            </Link>
          </Box>
        </>
      )}
    </Flex>
  );
};
