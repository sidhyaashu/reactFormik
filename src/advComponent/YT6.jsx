import React from 'react'
import { Formik,Form } from "formik";
import * as yup from 'yup'
import FormikControll from './FormikControll';

const YT6 = () => {
  const dropDownOptions=[
    {key:'Select an option',value:''},
    {key:'Option 1',value:'option1'},
    {key:'Option 2',value:'option2'},
    {key:'Option 3',value:'option3'},
  ]
  const radioOptions=[
    {key:'R1',value:'rOption1'},
    {key:'R2',value:'rOption2'},
    {key:'R3',value:'rOption3'},
  ]
  const checkBoxOption=[
    {key:'C1',value:'cOption1'},
    {key:'C2',value:'cOption2'},
    {key:'C3',value:'cOption3'},
  ]
  const initialValues = {
    email:'',
    description:'',
    selectOptions:'',
    radioOptions:'',
    checkBoxOption:[]

  }
  const validationSchema = yup.object({
    email:yup.string().email('Invaid email format').required('Required'),
    description:yup.string().required('Required'),
    selectOptions:yup.string().required('Required'),
    radioOptions:yup.string().required('Required'),
    checkBoxOption:yup.array().required('Required')
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
            <FormikControll control='select' label='Select' name='selectOptions' options={dropDownOptions} />
            <br />
            <FormikControll control='radio' label='Radio' name='radioOptions' options={radioOptions} />
            <br />
            <FormikControll control='checkbox' label='Checkbox' name='checkBoxOption' options={checkBoxOption} /> 
            <br />

            <button type='submit'>Submit</button>
          </Form>
        )
      }
        
    </Formik>
  )
}

export default YT6
