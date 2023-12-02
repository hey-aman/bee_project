import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <header className="px-12 py-8">
        <div className="logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
            width={120}
            alt=""
          />
        </div>
      </header>
      <div className="container py-10">
        <div className="bg-black py-10 text-center w-1/2 mx-auto">
          <h1 className="text-5xl my-12 font-semibold">Log in to Spotify</h1>
          <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
          <form className="text-center mx-auto w-1/2 ">
            <div className="w-full text-left py-4">
              <label
                htmlFor="email"
                className="font-semibold mb-2 inline-block"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
                className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
              />
            </div>

            <div className="w-full text-left py-4">
              <label
                htmlFor="password"
                className="font-semibold mb-2 inline-block"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white bg-[#1a1919]"
              />
            </div>

            <div className="w-full text-left py-4">
              <label htmlFor="password"className="font-semibold mb-2 inline-block">Remember me</label>
              <input
                type="type"
                value="Log in"
                name="password"
                placeholder="Password"
                className="block w-full outline-none bg-green-500 text-black p-3 hover:scale-105 translate-all duration-200 font-semibold hover:font-semibold text-center rounded-full"
              />
            </div>

            <div className="w-full text-center py-4">
              <Link to='/password/forgot' className="text-white font-semibold underline mx-auto">Forget Password</Link>
            </div>
          </form>
          <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
          <p className="pt-8">
            <span className="text-gray-300 font-semibold">Don't have an account?</span>
             <Link to='/signup' className="text-white hover:text-green-500 font-semibold underline mx-auto"> Sign up for Spotify</Link></p>  
        </div>
      </div>
    </>
  );
};

export default Login;
