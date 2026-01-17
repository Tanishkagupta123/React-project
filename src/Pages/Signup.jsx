import React, { useState } from 'react'

const Signup = () => {

         let[form,setfrom]=useState({
          firstname:"",
          lastname:"",
          email:"",
          contact:"",
          password:"",
          cpassword:""

        })
        
        let [error,seterror]=useState('')
    let change=(e)=>{
          setfrom({...form , [e.target.name]:e.target.value})
        }

         const submit=(e)=>{

        e.preventDefault()   

        let vaild=true
        seterror("")

        if(form.firstname.trim()==""){
            seterror("Please enter first name")
            vaild=false

        }
        else if(form.lastname.trim()==""){
            seterror("Please enter last name")
            vaild=false

        }
    
        else if(form.email.trim()==""){
            seterror("Please enter email")
             vaild=false
        }

        else if(!(form.email.includes("@") && form.email.includes(".com"))){
             seterror("Please enter correct email")
              vaild=false
        }

        else if(form.contact.trim()==""){
            seterror("Please enter contact")
            vaild=false

        }

        else if(form.contact.trim().length !==10){
            seterror("Please enter correct contact")
            vaild=false

        }

        else if(form.password.trim()==""){
            seterror("Please enter password")
            vaild=false

        }

        else if (!(
             /[a-z]/.test(form.password) &&
             /[A-Z]/.test(form.password) &&
             /[0-9]/.test(form.password) &&
             /[!@#$%^&*]/.test(form.password))) {
             seterror("Password must contain uppercase, lowercase, number and special character")
             vaild = false
            }


        else if(form.cpassword.trim()==""){
            seterror("Please enter confirm password")
            vaild=false

        }

        else if(form.password!==form.cpassword){
            seterror("password and confirm password is not matched")
            vaild=false

        }

        if (vaild){
            alert("form submitted")
             vaild=false
        }

    }


  return (
    <>
      
        <h1>Signup Form </h1>

      <form onSubmit={submit}>
    
     {error && <p style={{ color: "red" }}>{error}</p>}

      Enter First Name: <input type="text" name='firstname' value={form.firstname} onChange={change} /> <br /> <br />

      Enter Last Name: <input type="text" name='lastname' value={form.lastname} onChange={change} /> <br /> <br />
    
      Enter Email: <input type="text" name='email' value={form.email} onChange={change} /> <br /> <br />

      Enter Contact: <input type="text" name='contact' value={form.contact} onChange={change} /> <br /> <br />

      Enter Password: <input type="text" name='password' value={form.password} onChange={change} /> <br /> <br />

      Enter Confirm Passowrd: <input type="text" name='cpassword' value={form.cpassword} onChange={change} /> <br /> <br />


      <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Signup