import React, { useState } from 'react'
import '../Main pages/Signup.css'
import Galaxy from '../lib/Galaxy';

const Signup = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        password: "",
        cpassword: ""
    })

    const [error, setError] = useState('')

    const change = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        let valid = true
        setError("")

        if (form.firstname.trim() === "") {
            setError("Please enter first name")
            valid = false
        }
        
        else if (form.lastname.trim() === "") {
            setError("Please enter last name")
            valid = false
        } 
        
        else if (form.email.trim() === "") {
            setError("Please enter email")
            valid = false
        } 
        
        else if (!(form.email.includes("@") && form.email.includes(".com"))) {
            setError("Please enter correct email")
            valid = false;
        }
        
        else if (form.contact.trim() === "") {
            setError("Please enter contact")
            valid = false;
        }
        
        else if (form.contact.trim().length !== 10) {
            setError("Please enter correct contact")
            valid = false;
        }
        
        else if (form.password.trim() === "") {
            setError("Please enter password")
            valid = false;
        }
        
        else if (!(
            /[a-z]/.test(form.password) &&
            /[A-Z]/.test(form.password) &&
            /[0-9]/.test(form.password) &&
            /[!@#$%^&*]/.test(form.password) )) {
            setError("Password must contain uppercase, lowercase, number and special character")
            valid = false } 
        
        else if (form.cpassword.trim() === "") {
            setError("Please enter confirm password")
            valid = false
        } 
        
        else if (form.password !== form.cpassword) {
            setError("Password and confirm password do not match")
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully")
          
            setForm({
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                password: "",
                cpassword: ""
            })
         }}

    return (
        <>
 <div style={{ width: '100%', height: '600px', position: 'relative' ,background: 'black'}}>
        <Galaxy />
</div>

       
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Signup Form</h1>

                {error && <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">{error}</p>}

                <form onSubmit={submit} className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">First Name</label>
                        <input type="text" name="firstname" value={form.firstname} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" /> 
                    </div> <br />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                        <input type="text" name="lastname" value={form.lastname} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div> <br />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input type="email" name="email" value={form.email} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div> <br />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Contact</label>
                        <input type="text" name="contact" value={form.contact} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div><br />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input type="password" name="password" value={form.password} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div><br />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
                        <input type="password" name="cpassword" value={form.cpassword} onChange={change}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div><br /><br />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">
                        Submit </button>
                </form>

            </div>

        </div>

        
        {/* new css */}

        {/* // Basic usage */}




 </>
        
    )
}

export default Signup;


