import AppIntro from "@/components/common/AppIntro";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import NormalButton from "@/components/common/NormalButton";
import Title from "@/components/common/Title";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-primary">
      <form className="absolute top-0 left-0 bg-white w-full h-full overflow-x-hidden overflow-y-auto">
        <div className="flex flex-col items-center gap-8 p-5 h-[100%]">
          <header className="p-4">
            <Title>Login</Title>
          </header>
          <div className="flex flex-col items-center justify-center gap-12 my-6">
            <div className="flex-1 flex flex-col gap-4 items-center justify-center">
              <Button className="w-100">
                <div className="flex justify-center items-center gap-2">
                  <IoLogoGoogle />
                  <span>Login</span>
                </div>
              </Button>
              <Button className="w-100">
                <div className="flex justify-center items-center gap-2">
                  <FaFacebookF />
                  <span>Login</span>
                </div>
              </Button>
            </div>
            <div className="w-[40%] h-[4px] bg-amber-500"></div>
            {showLoginForm ? (
              <div className="flex-1 flex flex-col justify-center items-center gap-4">
                <Input
                  label="Email:"
                  type="email"
                  name="email"
                  id="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  label="Password:"
                  type="password"
                  name="password"
                  id="password"
                  value={passowrd}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  className="w-100 mt-4"
                  handleClick={(e) => e?.preventDefault()}
                >
                  Login
                </Button>
              </div>
            ) : (
              <NormalButton handleClick={() => setShowLoginForm(true)}>
                Login using email & password
              </NormalButton>
            )}
          </div>
          <footer>
            <AppIntro />
          </footer>
        </div>
      </form>
    </div>
  );
};

export default Login;
