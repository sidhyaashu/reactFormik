import React from 'react'
import '../App.css'
import { Formik,Form } from 'formik'
import FormikControll from '../advComponent/FormikControll'
import * as yup from 'yup'


const YT8 = () => {
    const option=[
        {key:"Email",value:'emailmoc'},
        {key:"Telephone",value:'telephonemoc'},
    ]
    const initialValues={
        email:'',
        password:'',
        modeOfContact:'',
        confirmPassword:'',
        phone:''
    }
    const phoneAddress={
            is:'telephonemoc',
            then:yup.string().required("required")
    }
    const validationSchema=yup.object({
        email:yup.string().email("Invalid email format").required("Required"),
        password:yup.string().required("Required"),
        confirmPassword:yup.string().oneOf([yup.ref('password'),''],'Password must match').required("Required"),
        modeOfContact:yup.string().required("Required"),
        phone:yup.string().when('modeOfContact',phoneAddress)
    })

    const onSubmit=values=>{
        console.log("Form data",values)
    }

  return (
    <Formik
    initialValues={initialValues}
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
                    <FormikControll
                    type='password'
                    label="Confirm password"
                    name="confirmPassword"
                    control="input"
                    />

                    <br />
                    <FormikControll
                    control='radio'
                    label="Mode of Contact"
                    name="modeOfContact"
                    options={option}
                    />
                    <br />
                    <FormikControll
                    control='input'
                    label="Phone"
                    name="phone"
                    type='text'
                    />
                    <br />
                    

                    <button type='submit' disabled={!formik.isValid} >Submit</button>
            </Form>
        }
      }
    </Formik>
  )
}

export default YT8
