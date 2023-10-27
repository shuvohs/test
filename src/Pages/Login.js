import React from "react";

const Login = () => {
  return (
    <div>
      <form className="px-6 ">
        <label className="block ">
          <span className="block">Username: </span>
          <input type="text" value="  tbone" disabled className=" bg-gray-200 rounded-md py-2 border border-red-600" />
        </label>

        <label>
          {" "}
          <span className="block ">Email: </span>
          <input type="email" placeholder="Enter Email" disbled className ="  bg-white rounded- py-2 rounded-md border border-red-600 " />
        </label>

        <label>
          <span className="block"> Password: </span>
          <input type="password" placeholder="Enter password" disbled className ="bg-white rounded-md py-2 border border-red-600 outline-none focus:border-sky-600" />
        </label>

      </form>
      <button className="rounded-sm px-2 py-2 ml-6 mt-2 bg-sky-300 hover:bg-sky-600 ">
        Save Changes
      </button>
    </div>
  );
};

export default Login;
