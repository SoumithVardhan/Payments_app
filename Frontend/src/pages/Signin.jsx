import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white text-center py-2 px-4 w-80">
                    <Heading label={"Sign in"}></Heading>
                    <SubHeading label={"Enter your Credentials to access your account"}></SubHeading>
                    <InputBox
                        onChange={(e) => {
                            setusername(e.target.value);
                        }}
                        label={"Email"}
                        placeholder={"johndoe@gmail.com"}
                    ></InputBox>
                    <InputBox
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        label={"Password"}
                        placeholder={"123456"}
                    ></InputBox>
                    <div className="pt-4">
                        <Button
                            onClick={async () => {
                                const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                    username,
                                    password,
                                });
                                localStorage.setItem("token", res.data.token);
                                const token = res.data.token;
                                console.log("Token:", token);
                                navigate("/dashboard");
                            }}
                            label={"Sign in"}
                        ></Button>
                    </div>
                    <BottomWarning label={"Don't have an account."} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
                </div>
            </div>
        </div>
    );
}
