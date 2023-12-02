import React from "react";
import { Link } from "react-router-dom";
// import "./Signup.css";

const Signup = () => {
    return (
        <>
            <div className="container bg-black">
                <header className="px-12 py-8">
                <div className="logo">
                    <img src="https://imgs.search.brave.com/FDaIgK4qY_gub6ejRnXmOcbS2NVlJICrPDzIST22tKA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA5L3Nwb3RpZnkt/bG9nby1icmFuY2Et/d2hpdGUucG5n"  width={120} alt="" />
                </div>
                </header>
                
                <div className="text-white">
                    <div className=" text-center w-1/2 mx-auto">
                        <h1 className="text-5xl my-12 font-semibold">
                            Sign up to start listening
                        </h1>
                        <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
                        <form className="text-center mx-auto w-1/2 ">
                            <div className="w-full text-left py-4">
                                <label
                                    htmlFor="email"
                                    className="font-semibold mb-2 inline-block"
                                >
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="name@domain.com"
                                    className="block w-full rounded-[4px] border-0  text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-3 hover:ring-black bg-[#fff]"/>
                            </div>

                            <p className="">

                            <Link
                                to="/signup"
                                className="text-green-500 hover:text-green-500 font-semibold underline mx-auto">
                                Use phone number instead.
                            </Link>
                        </p>
                            <div className="w-full text-left py-2">
                                <input
                                    type="submit"
                                    value="Next"
                                    placeholder="Password"
                                    className="block cursor-pointer w-full outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
                                />
                            </div>
                            <div className="w-full text-center py-2">
                                <Link
                                    to="/password/forgot"
                                    className="text-black font-semibold underline mx-auto"
                                >
                                    {/* Forget Password? */}
                                </Link>
                            </div>
                        </form>
                        <div className="border-b border-gray-400 w-3/4 my-2 mx-auto"></div>
                        <p className="pt-8">
                            <span className="text-gray-300 font-semibold">
                            Already have an account?{" "}
                            </span>

                            <Link
                                to="/signup"
                                className="text-white hover:text-green-500 font-semibold underline mx-auto"
                            >
                                Log in here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
