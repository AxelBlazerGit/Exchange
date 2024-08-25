import React, { useState } from 'react';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerInstitution, setRegisterInstitution] = useState("");
  const [registerPlace, setRegisterPlace] = useState("");

  const navigate = useNavigate(); // For redirection

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userRegistrationData = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      institution: registerInstitution,
      place: registerPlace,
    };
    console.log(userRegistrationData);

    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify(userRegistrationData),
      headers: { 'Content-Type': 'application/json' },
    });

  console.log(res);
  

    // Here you would typically send the data to the backend for signup
    // After signup is successful, redirect to homepage
    // Simulating signup completion with a timeout for example purpose
    setTimeout(() => {
      navigate("/login"); // Redirect to home page after successful signup
    }, 1000); // Simulating a delay for signup completion
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

        {/* SignUp Form */}
        <div className="bg-slate-700 text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in p-6">
          <Link className="p-3 text-3xl font-bold text-white" to="/">UniHub</Link>
          <div className="inline-block border-[2px] justify-center w-20 border-white mb-2"></div>
          <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>

          <div className="flex space-x-4 mt-4 items-center justify-center">
            <Facebook className="text-white hover:text-teal-300 cursor-pointer" />
            <GitHub className="text-white hover:text-teal-300 cursor-pointer" />
            <Google className="text-white hover:text-teal-300 cursor-pointer" />
          </div>

          <form onSubmit={(e) => handleSignUp(e)} className="flex flex-col items-center justify-center mt-4">
            <input
              id="registerName"
              name="registerName"
              type="text"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-white focus:outline-none transition duration-300 text-black"
              placeholder="Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <input
              id="registerEmail"
              name="registerEmail"
              type="email"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-white focus:outline-none transition duration-300 text-black"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              id="registerPassword"
              name="registerPassword"
              type="password"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-white focus:outline-none transition duration-300 text-black"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
              id="registerInstitution"
              name="registerInstitution"
              type="text"
              className="rounded-2xl px-4 py-2 w-4/5 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-white focus:outline-none transition duration-300 text-black"
              placeholder="Institution"
              value={registerInstitution}
              onChange={(e) => setRegisterInstitution(e.target.value)}
            />
            <input
              id="registerPlace"
              name="registerPlace"
              type="text"
              className="inline rounded-2xl px-4 py-2 w-1/2 md:w-full border-[2px] border-teal-400 m-2 focus:shadow-lg focus:border-white focus:outline-none transition duration-300 text-black"
              placeholder="Place"
              value={registerPlace}
              onChange={(e) => setRegisterPlace(e.target.value)}
            />
            <input
              type='submit'
              className="rounded-2xl m-2 text-teal-500 bg-white w-1/2 px-4 py-2 shadow-md hover:bg-teal-500 hover:text-white border-[2px] border-teal-500 transition duration-300 inline"
              value={"Sign Up"}
            />
              
          </form>

          <p className="text-white m-4 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="underline underline-offset-4 text-teal-300 ml-1 cursor-pointer hover:text-teal-400 transition duration-300"
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpForm;