import React, { useState } from 'react'

function ManualForm() {
  // store input values inside a state (inputValues)
  const [inputValues, setInputValues] = useState({
    email:'',
    password:''
  });

  // store errors inside a error state
  const [errors, setErrors] = useState({})
  // manage a submit state for succesfull submits/ loadings phases.
  const [submited, setSubmited] = useState(false);

  // a method to apend the values inside the dedicated keys of the input values (for storing them.)
  function set(field){
    return (e) => setInputValues((v) => ({...v, [field]:e.target.value}));
  }
  // client side validation method
  function validate(v){
    const errors = {};
    if(!v.email.trim()) errors.email = "Email is required";
    if(!v.password.trim()) errors.password = "Password is required";

    if(v.password.length < 8) errors.password = "Password should be atleast 8 characters"

    return errors;
  }

  function onSubmit(event){
    event.preventDefault();
    const errors = validate(inputValues);
    setErrors(errors);
    if(Object.keys(errors).length === 0) setSubmited(true); //since errors object empty hoga agar validate empty object return karta i.e. the input passed all the validations.

  }

  if(submited){
      return (<div>
        <h1>Form submitted succesfully, and a verification code has been sent to {inputValues.email}</h1>
      </div>
      )
    } 



  return (
    <div>
      <form action="" onSubmit={onSubmit} noValidate>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" value={inputValues.email} 
          onChange={set("email")} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password"  
          value={inputValues.password} onChange={set("password")}/>
          {errors.password && <span>{errors.password}</span>}
        </label>
        <button type='submit'>Submit form</button>
      </form>
    </div>
  )
}

export default ManualForm