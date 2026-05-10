import React from 'react'
import { useForm } from "react-hook-form"


function ReactHookForm() {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful, isSubmitting },
        getValues
    } = useForm({defaultValues: { name: "hitesh" }, mode: "onTouched" })
    
    function onSubmit(data){
        return new Promise(res => console.log("submitted: ", data))
    }

    // we create our own submit function since the rhf doesnt know what exactly we want to do with the data, thats  where handleSubmit just manages to to collect and send the data to our own method, its a HOF responsible for just transfering the data to our method.

    if(isSubmitSuccessful){
        return (
            <div>
                <h1>Form Submitted successfully</h1>
            </div>
        )
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email"
          {...register("email", {required: "email is required"})}  />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password"  
          {...register("password", {required: "password is required"})}/>
          {errors.password && <span>{errors.password}</span>}
        </label>
        <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default ReactHookForm