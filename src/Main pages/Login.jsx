import React, { useState } from 'react'
import '../Main pages/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()

    let user = JSON.parse(localStorage.getItem("user")) || []

    let exituser = user.find((e) => e.email === email)

    if (!exituser) {
      alert("Please Signup first")
      navigate('/signup')
      return
    }

    if (password !== exituser.password) {
      alert("Invalid password")
      return
    }

    alert("Login Successfully")
  }

  return (
    <div className="min-h-screen flex items-center justify-center  from-blue-100 to-purple-200">
      
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Signup
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login
