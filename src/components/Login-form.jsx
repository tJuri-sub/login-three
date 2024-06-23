import { LoginIcon, PassIcon, UserIcon } from "./icons";

export const RegForm = () => {
  return (
    <div className="w-[80%] mx-auto bg-white min-h-[500px] rounded-lg flex">
      {/* Left Side: Login Form */}
      <div className="w-[50%] p-3 flex flex-col justify-center">
        <h1 className="text-center text-2xl mb-4">Login</h1>
        <form className="w-[60%] mx-auto">
          <div className="flex flex-col my-6">
            <div className="mb-4 relative flex items-center">
              <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
              <input
                id="username"
                className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-2 relative flex items-center">
              <PassIcon className="w-4 h-4 mr-2 text-gray-400" />
              <input
                id="password"
                className="border-[1px] border-slate-600 rounded-md p-[4px] w-full text-gray-700"
                type="password"
                placeholder="Password"
              />
            </div>
            <a
              className="text-slate-400 text-[14px] ml-5 hover:underline"
              href="#"
            >
              Forget password?
            </a>
          </div>
          <div>
            <button
              className="text-white bg-[#121212] w-[80%] text-center px-4 py-1 flex m-auto rounded-md cursor-pointer hover:bg-[#030149]"
              type="submit"
              value="Log in"
            >
              Log in <LoginIcon />
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Logo */}
      <div className="bg-gradient-to-r from-[#121212] to-[#030149] w-[50%] p-3 flex flex-col justify-center items-center rounded-r-lg">
        <img
          className="w-[30%] rounded-2xl shadow-lg mb-3"
          src="/logo.jpg"
          alt="Logo VigiWheel"
        />
        <h1 className="text-3xl font-bold text-white tracking-wider">
          VigiWheel
        </h1>
      </div>
    </div>
  );
};