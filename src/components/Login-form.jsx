import { LoginIcon, PassIcon, UserIcon } from "./icons";

export const RegForm = () => {
  return (
    <div className="w-[50%] mx-auto bg-white min-h-[400px] rounded-lg flex shadowbox ">
      {/* Left Side: Login Form */}
      <div className="w-[50%] p-3 flex flex-col justify-center">
        <h1 className="text-center text-2xl mb-4">Login</h1>
        <form className="w-[60%] mx-auto">
          <div className="flex flex-col my-6">
            <div className="mb-4 relative flex items-center">
              <input
                id="username"
                className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10" /* Add padding-right to make space for the icon */
                type="text"
                placeholder="Username"
              />
              <UserIcon className="w-4 h-4 text-gray-400 absolute right-2" />
            </div>
            <div className="mb-2 relative flex items-center">
              <input
                id="password"
                className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700 pr-10" /* Add padding-right to make space for the icon */
                type="password"
                placeholder="Password"
              />
              <PassIcon className="w-4 h-4 text-gray-400 absolute right-2" />
            </div>
            <a className="text-slate-400 text-[14px] hover:underline" href="#">
              Forget password?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white bg-[#121212] w-[100%] text-center px-4 py-1 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#030149]"
              type="submit"
              value="Log in"
            >
              Log in <LoginIcon className="ml-2" />
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Logo */}
      <div className="bg-gradient-to-r from-[#030149] to-[#121212] w-[50%] p-3 flex flex-col justify-center items-center rounded-r-lg">
        <img
          className="w-[30%] rounded-3xl shadow-lg mb-3"
          src="/logo.png"
          alt="Logo VigiWheel"
        />
        <h1 className="text-3xl font-bold text-white tracking-wider">
          VigiWheel
        </h1>
      </div>
    </div>
  );
};
