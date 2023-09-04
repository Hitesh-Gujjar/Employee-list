import React, { memo, useState } from "react";
import { getLoginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const [credential, setCredential] = useState({
    userName: "admin",
    password: "admin",
  });

  //onchange on login field;
  const handleCredential = (name, value) => {
    setCredential({ ...credential, [name]: value });
  };

  //onClick sing in
  const onSingIn = async (e) => {
    e.preventDefault();

    //call login api
    const response = await getLoginUser(credential);
    localStorage.setItem("token", response.data.data.accessToken);

    if (response.data.status === 200) {
      return navigate("/employee");
    }

    return navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Sign in
        </h2>
        <form className="mt-8 space-y-6" onSubmit={onSingIn}>
          <div className="space-y-4">
            <input
              id="userid"
              name="userName"
              type="text"
              value={credential.userName}
              onChange={(e) => handleCredential(e.target.name, e.target.value)}
              autoComplete="email"
              required
              className=" border-gray-300 rounded-md placeholder-gray-500 block w-full px-4 py-2 border text-gray-900 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email address"
            />
            <input
              id="password"
              name="password"
              type="password"
              value={credential.password}
              onChange={(e) => handleCredential(e.target.name, e.target.value)}
              autoComplete="current-password"
              required
              className=" rounded-md placeholder-gray-500 block w-full px-4 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(Login);
