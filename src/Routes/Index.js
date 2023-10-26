import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test2 from "../Pages/Test2";
import NavBar from "../Components/Layout/NavBar";
import PageNotFound from "../Components/PageNotFound";
import Login from "../Pages/Login";
import One from "../Components/TEST/One";

export const Router = () => {
  return (
    <AuthProvider authType={"localStorage"} authName={"auth"}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/One" element={<One />} />
          <Route path="/Test2" element={<Test2 />} />
          <Route
            path="/Test3"
            element={
              <RequireAuth loginPath={"/"}>
                <Test2 />
              </RequireAuth>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
