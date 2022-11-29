import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //eslint-disable-line
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

import { Home } from "./components/pages/Home";
import { CreatePost } from "./components/pages/CreatePost";
import { Login } from "./components/pages/Login";
import { Logout } from "./components/pages/Logout";
import { Navbar } from "./components/templates/Navbar";
import theme from "./theme/theme";

export default function App() {
  // ローカルストレージから値を取り出す
  // 削除ボタンでリダイレクトされてもログイン状態を保って
  const localstrageAuth = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState<string | null>(localstrageAuth);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar isAuth={isAuth} />
        {/*= Switch*/}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/createpost"
            element={<CreatePost isAuth={isAuth} />}
          ></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
