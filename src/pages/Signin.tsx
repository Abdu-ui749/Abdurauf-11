import React, { useState } from "react";
import axios from "axios";
const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/signin", { email, password });
      alert("You are Signed In");
    } catch (e: any) {
      setError(e.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-[#0e387a] h-screen mx-auto">
      <h1 className="text-center text-3xl text-[#9fafca] hover:text-[#b8df10] font-extrabold pt-10 pb-10">
        Sign In 
      </h1>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col pt-10">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-none mb-3 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password" className="text-white">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="rounded-md border-none p-2 pr-10 w-full"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="rounded-full text-lg font-medium bg-blue-500 hover:bg-sky-700 h-10 mt-5 text-white"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
