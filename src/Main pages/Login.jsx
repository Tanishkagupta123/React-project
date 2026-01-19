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

   <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
  style={{ backgroundImage: "url('newmovie.webp')" }}
>

  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>


  <div className="relative z-10 w-full max-w-md bg-white rounded-2xl
    border border-gray-200 p-10
    transition-transform duration-300 hover:-translate-y-1
    hover:shadow-xl">

    <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
      Login
    </h2>
    <p className="text-sm text-gray-500 mb-8 text-center">
      Welcome back, please enter your details
    </p>

    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl
            bg-[#F9FAFB] border border-gray-300
            transition-all duration-200
            focus:outline-none focus:border-sky-400
            focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl
            bg-[#F9FAFB] border border-gray-300
            transition-all duration-200
            focus:outline-none focus:border-sky-400
            focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-3 rounded-xl
          font-medium transition-all duration-300
          hover:bg-sky-600 hover:shadow-md
          active:scale-[0.98]">
        Login
      </button>

    </form>

    <p className="text-sm text-gray-500 text-center mt-8">
      Don’t have an account?{" "}
      <span
        onClick={() => navigate('/signup')}
        className="text-sky-500 font-medium cursor-pointer
          transition hover:text-sky-600 hover:underline" >
        Sign up
      </span>
    </p>

  </div>

</div>


  )
}

export default Login
