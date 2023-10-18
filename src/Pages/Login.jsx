import { Button, Card, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useSignIn, useIsAuthenticated, useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi } from "../Api/Service";

const Login = () => {
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const authUser = useAuthUser();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required Field").email("Invalid email address "),
      password: Yup.string().required("Required Field"),
    }),
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  //   Access data from here
  //   authUser()

  useEffect(() => {
    if (isAuthenticated()) {
      // user is not i think authenticated
      //   navigate("/");
    }
  }, []);

  const onLogin = async (data) => {
    try {
      const loginRes = await loginApi(data);

      if (
        loginRes.success &&
        signIn({
          token: loginRes.data.token.token,
          expiresIn: 43200,
          tokenType: "Bearer",
          authState: loginRes.data,
        })
      ) {
        toast.success(loginRes.msg);
      } else {
        toast.error(loginRes?.msg || "Something went wrong");
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <Card className="mt-4 p-4">
        <h4>Sign IN</h4>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-4">
                <TextField
                  sx={{ m: 1, width: "30ch" }}
                  label="Email"
                  placeholder="Enter Your email address"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red">{formik.errors.email}</p>
                )}
              </div>
              <div className="mt-4">
                <TextField
                  sx={{ m: 1, width: "30ch" }}
                  type={"password"}
                  label="Password"
                  placeholder="Enter Your password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red">{formik.errors.password}</p>
                )}
              </div>
              <div className="mt-4">
                <Button sx={{ m: 1, width: "30ch" }} type="submit" variant="contained">
                  Login
                </Button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
