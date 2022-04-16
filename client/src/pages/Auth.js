import SignUp from "../components/Signup";
import SignIn from "../components/Signin";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import store from "store";
function Auth() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    userType: "",
    luser: "",
    lpass: "",
  });

  const HnaldeSignIn = async () => {
    if (data.luser === "" || data.lpass === "") {
      alert("Please Enter Username and Password");
    } else {
      const res = await axios.post("http://localhost:4000/api/v1/login", data);
      if (res.data.success) {
        alert("Login Successful");
        if (res.data.info[0].isContributer) {
          navigate("/upload");
        } else {
          navigate("/images");
        }

        store.set("userData", res.data.info[0]);
      } else {
        alert("Login Failed");
      }
    }
  };
  const HandleSignUp = async () => {
    if (
      data.username === "" ||
      data.password === "" ||
      data.email === "" ||
      data.userType === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        data
      );
      if (response.data.success) {
        setData((pre) => {
          return {
            ...pre,
            username: "",
            password: "",
            email: "",
            userType: "",
          };
        });
        alert("User registered successfully");
      }
    }
  };

  const HandleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className='App'>
      <Navbar header={"Assignment"} />
      <div className='container mt-4 '>
        <div className='row'>
          <SignUp
            data={data}
            HandleSignUp={HandleSignUp}
            HandleChange={HandleChange}
          />
          <SignIn
            data={data}
            HnaldeSignIn={HnaldeSignIn}
            HandleChange={HandleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
