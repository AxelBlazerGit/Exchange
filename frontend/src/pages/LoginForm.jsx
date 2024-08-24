import React, { useState } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerAvatar, setRegisterAvatar] = useState("");

  const handleLogin = () => {
    const userLoginData = {
      email: loginEmail,
      password: loginPassword,
    };
    console.log(userLoginData);
    
  };

  return (
    <div className="bg-teal-50 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center justify-between w-full px-2 md:px-20 space-x-4">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-2">
          <Link className="text-6xl text-teal-500 font-bold" to="/">UniHub</Link>
          <p className="font-medium text-lg leading-snug text-slate-700">
            Swap, Share, and Learn: Connecting Students Through Books and Gear Across Years.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-teal-100 rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out p-6">
          <Link className="p-3 text-3xl font-bold text-teal-500" to="/">UniHub</Link>
          <div className="inline-block border-[2px] justify-center w-20 border-teal-400 border-solid mb-2"></div>
          <h3 className="text-xl font-semibold text-teal-500 pt-2">Sign In!</h3>

          <div className="flex space-x-4 mt-4 items-center justify-center">
            <Facebook className="text-teal-500 hover:text-teal-700 cursor-pointer" />
            <GitHub className="text-teal-500 hover:text-teal-700 cursor-pointer" />
            <Google className="text-teal-500 hover:text-teal-700 cursor-pointer" />
          </div>

          <div className="flex flex-col items-center justify-center mt-4">
            <input
              id="loginEmail"
              name="loginEmail"
              type="email"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-slate-700 focus:outline-none transition duration-300"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              id="loginPassword"
              name="loginPassword"
              type="password"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-slate-700 focus:outline-none transition duration-300"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="rounded-2xl m-2 text-white bg-teal-500 w-3/5 px-4 py-2 shadow-md hover:text-teal-500 hover:bg-white border-[2px] border-teal-500 transition duration-300"
            >
              Sign In
            </button>
          </div>

          <p className="text-teal-500 m-4 text-sm">
            Don't have an account?
            <Link
              to="/signup"
              className="underline underline-offset-4 text-teal-600 ml-1 cursor-pointer hover:text-slate-700 transition duration-300"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
