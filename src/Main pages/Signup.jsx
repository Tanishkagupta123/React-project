import React, { useState, useEffect } from 'react';
import '../Main pages/Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    cpassword: ""
  });

  const [error, setError] = useState('');

  // ✅ If user already logged in, redirect to dashboard
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) navigate('/Movies');
  }, [navigate]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validations
    if (!form.firstname.trim()) { setError("Please enter first name"); return; }
    if (!form.lastname.trim()) { setError("Please enter last name"); return; }
    if (!form.email.trim()) { setError("Please enter email"); return; }
    if (!(form.email.includes("@") && form.email.includes(".com"))) { setError("Please enter correct email"); return; }
    if (!form.contact.trim()) { setError("Please enter contact"); return; }
    if (form.contact.trim().length !== 10) { setError("Please enter correct contact"); return; }
    if (!form.password.trim()) { setError("Please enter password"); return; }
    if (!(/[a-z]/.test(form.password) && /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) && /[!@#$%^&*]/.test(form.password))) {
      setError("Password must contain uppercase, lowercase, number and special character");
      return;
    }
    if (!form.cpassword.trim()) { setError("Please enter confirm password"); return; }
    if (form.password !== form.cpassword) { setError("Password and confirm password do not match"); return; }

    let users = JSON.parse(localStorage.getItem('user')) || [];
    if (users.find(u => u.email === form.email)) {
      setError("User already exists");
      return;
    }

    // Save new user
    users.push(form);
    localStorage.setItem('user', JSON.stringify(users));


    localStorage.setItem('loggedInUser', JSON.stringify({ firstname: form.firstname, email: form.email }));


    setForm({ firstname:"", lastname:"", email:"", contact:"", password:"", cpassword:"" });

  
    navigate('/Movies');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('movie.webp')" }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      <div className="flex w-full max-w-4xl bg-white bg-opacity-80 shadow-2xl rounded-3xl overflow-hidden relative z-10">

    
        <div className="w-1/2 relative flex flex-col justify-center items-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 opacity-60 rounded-3xl"></div>
          <div className="relative z-10 w-full h-full bg-white/25 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-8 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-sm md:text-base mb-6 text-center text-gray-700">
              Already have an account? Login and continue your journey with us.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Log In
            </button>
          </div>
        </div>

        {/* Right side: Signup Form */}
        <div className="w-1/2 flex justify-center items-center p-6">
          <div className="w-full max-w-md p-6 md:p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 transform transition hover:-translate-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h1>

            {error && (
              <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center text-sm">
                {error}
              </p>
            )}

            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">First Name</label>
                  <input type="text" name="firstname" value={form.firstname} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Last Name</label>
                  <input type="text" name="lastname" value={form.lastname} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Email</label>
                <input type="email" name="email" value={form.email} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Contact</label>
                <input type="text" name="contact" value={form.contact} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Password</label>
                  <input type="password" name="password" value={form.password} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Confirm</label>
                  <input type="password" name="cpassword" value={form.cpassword} onChange={change} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-indigo-700 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all text-sm">
                Sign Up
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
