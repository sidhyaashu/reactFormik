import React from 'react'
import { Formik,Form } from "formik";
import * as yup from 'yup'
import FormikControll from './FormikControll';

const YT6 = () => {
  const initialValues = {
    email:'',
    description:''
  }
  const validationSchema = yup.object({
    email:yup.string().email('Invaid email format').required('Required'),
    description:yup.string().required('Required')
  })
  const onSubmit=values=>console.log(`Form data ->`,values)

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {
        formik=>(
          <Form>
            <FormikControll control='input' type='email' label='Email' name='email' />
            <br />
            <FormikControll control='textarea' label='Description' name='description' />
            <br />

            <button type='submit'>Submit</button>
          </Form>
        )
      }
        
    </Formik>
  )
}

export default YT6
