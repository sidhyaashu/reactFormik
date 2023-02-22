// NORMAL VALIDATION


import React from 'react'
import '../App.css'
import { useFormik } from 'formik'

const YT = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values=>{
            console.log("Form data ",values)
        },
        validate:values=>{
            let errors ={}
            if(!values.name){
                errors.name ='Required'
            }
            if(!values.email){
                errors.email ='Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email ='Invalid email formats'
            }
            if(!values.channel){
                errors.channel ='Required'
            }
            return errors
        },

        
        
    })

    // console.log("Form Errors ",formik.errors)
    // console.log("Form data ",formik.values)
    console.log("visited ",formik.touched)

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" onBlur={formik.handleBlur} name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
        {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}


        <label htmlFor="email">Emain</label>
        <input type="email" onBlur={formik.handleBlur} name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
        {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}


        <label htmlFor="channel">Channel</label>
        <input type="text" onBlur={formik.handleBlur} name='channel' id='channel' onChange={formik.handleChange} value={formik.values.channel} />
        {formik.touched.channel && formik.errors.channel && <span>{formik.errors.channel}</span>}


        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YT
