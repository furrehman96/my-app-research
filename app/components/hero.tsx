import React from "react";

const Hero = () => {
  return (


    <div
  className="min-h-screen flex flex-col items-center justify-center bg-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(/background-pattern-lines.svg)' }}
>
  <div className="text-center text-neutral-content w-full">
    <div className="w-full lg:w-6/12 mx-auto px-4">
      <div className="text-left lg:text-center">
        <h1 className="mb-5 text-3xl lg:text-5xl text-slate-900 font-medium">
          Don’t choose between building fast and building right
        </h1>
        <p className="mb-5 lg:mb-10 lg:text-l text-slate-500">
          A user research platform that makes user insights available at the speed of product development.
        </p>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-center lg:items-baseline space-y-4 lg:space-y-0 lg:space-x-4 mb-10 lg:mb-5">
        <div className="form-control w-full lg:w-1/2">
          <input
            type="email"
            placeholder="Email"
            className="block w-full px-6 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-red-500 invalid:text-red-600
                      focus:invalid:border-red-500 focus:invalid:ring-red-500"
            required
          />
          <p className="flex text-start lg:text-center font-medium text-xs py-1 text-slate-500">
            Sign up to get early access.
          </p>
        </div>
        <button className="w-full lg:w-auto px-6 py-3 text-sm font-semibold rounded-md bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600 active:bg-blue-700 lg:mt-7 lg:ml-4">
          Sign Up
        </button>
      </div>
    </div>
    <div className="flex justify-center px-4 lg:px-24">
      <img src="/geometric-shapes-mobile.svg" alt="Mobile Graphic" className="block lg:hidden max-w-full h-auto" />
      <img src="/geometric-shapes-desktop.svg" alt="Desktop Graphic" className="hidden lg:block max-w-full h-auto" />
    </div>
  </div>
</div>


  );
};

export default Hero;
