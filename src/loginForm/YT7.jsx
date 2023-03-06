import React from 'react'
import '../App.css'
import * as yup from 'yup'
import FormikControll from '../advComponent/FormikControll'
import { Formik,Form } from 'formik'

const YT7 = () => {
    const initialValue={
        email:'',
        password:''
    }
    const validationSchema=yup.object({
        email:yup.string().email("Invalid email format").required("Required"),
        password:yup.string().required("Required"),
    })
    const onSubmit=value=>{
        console.log("Form data -> ",value)
    }
  return (
    <Formik
    initialValues={initialValue}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {
            formik=>{
                return <Form>
                    <FormikControll
                    type='email'
                    label="Email"
                    name="email"
                    control="input"
                    />
                    <br />
                    <FormikControll
                    type='password'
                    label="Password"
                    name="password"
                    control="input"
                    />
                    <br />
                    <button type='submit' disabled={!formik.isValid} >Submit</button>
                </Form>
            }
        }
      
    </Formik>
  )
}

export default YT7
