
//HOW TO REMOVE BOILER PLATES CODES formik.getFieldProps('name')



import React from 'react'
import '../App.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const YT3 = () => {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values=>{
            console.log("Form data ",values)
        },

        validationSchema:Yup.object({
            name:Yup.string().required('Required!'),
            email:Yup.string().email('Invaid email format').required('Required!'),
            channel:Yup.string().required('Required!')
        }),
        
    })

    // console.log("Form Errors ",formik.errors)
    // console.log("Form data ",formik.values)
    console.log("visited ",formik.touched)

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name='name' id='name'
        {...formik.getFieldProps('name')} 
        />
        {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
        

        <label htmlFor="email">Emain</label>
        <input 
        type="email" 
        name='email' id='email'
        {...formik.getFieldProps('email')} 
        />
        {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}


        <label htmlFor="channel">Channel</label>
        <input 
        type="text" 
        name='channel' id='channel'
        {...formik.getFieldProps('channel')} 
        />
        {formik.touched.channel && formik.errors.channel && <span>{formik.errors.channel}</span>}


        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YT3
