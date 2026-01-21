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
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('newmovie.webp')" }}
    >

      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      <div className="flex w-full max-w-4xl bg-white/90 shadow-xl rounded-3xl overflow-hidden relative z-10">

        {/* LEFT — LOGIN */}
        <div className="w-1/2 flex justify-center items-center p-6">
          <div className="w-full max-w-md p-8
            bg-white rounded-2xl
            border border-sky-100 shadow-lg">

            <h2 className="text-3xl font-bold text-center text-black mb-2">
              Login
            </h2>

            <p className="text-sm text-black text-center mb-6">
              Welcome back, please login to your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-300"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-400 text-white
                  font-semibold py-2 rounded-xl
                  hover:bg-sky-500 transition">
                Login
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT — WELCOME */}
        <div className="w-1/2 relative flex flex-col justify-center items-center p-8">

          <div className="absolute inset-0 bg-gradient-to-br
            from-sky-200 via-sky-300 to-blue-300
            opacity-70 rounded-3xl">
          </div>

          <div className="relative z-10 w-full h-full
            bg-white/40 backdrop-blur-lg
            border border-white/50 rounded-3xl
            shadow-lg flex flex-col justify-center items-center p-8">

            <h2 className="text-3xl font-bold mb-4 text-black">
              Hello, Friend!
            </h2>

            <p className="text-sm md:text-base mb-6 text-center text-black">
              Don’t have an account yet?  
              Create one and start your journey with us.
            </p>

            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 rounded-full
                bg-sky-400 text-white font-semibold
                hover:bg-sky-500 transition">
              Sign Up
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
