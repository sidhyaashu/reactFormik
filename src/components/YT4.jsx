
//HOW TO REMOVE const formik =useFormik({})



import React from 'react'
import '../App.css'
import { Formik,Form ,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues ={
        name:'',
        email:'',
        channel:''    
    }
const onSubmit=(values)=>{
        console.log("Form data ",values)
    }

const validationSchema = Yup.object({
        name:Yup.string().required('Required!'),
        email:Yup.string().email('Invaid email format').required('Required!'),
        channel:Yup.string().required('Required!')
    })


const YT4 = () => {

  return (
    <Formik className='container'
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
        className='Field' 
        type="text" 
        name='name' id='name'
        />
        <ErrorMessage name='name'/>
        

        <label htmlFor="email">Emain</label>
        <Field
        className='Field' 
        type="email" 
        name='email' id='email'
        />
        <ErrorMessage name='email' />



        <label htmlFor="channel">Channel</label>
        <Field
        className='Field' 
        type="text" 
        name='channel' id='channel'
        />
        <ErrorMessage name='channel' />


        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YT4
