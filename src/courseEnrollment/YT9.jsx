import React from 'react'
import { Formik,Form } from 'formik'
import '../App.css'
import FormikControll from '../advComponent/FormikControll'
import * as yup from 'yup'

const YT9 = () => {
    const dropDownOption=[
        {key:"Select your course",value:''},
        {key:"React",value:'react'},
        {key:"Angular",value:'angular'},
        {key:"Vue",value:'vue'},
    ]
    const checkBoxOptions=[
        {key:'HTML',value:'html'},
        {key:'CSS',value:'css'},
        {key:'JAVASCRIPT',value:'javascript'},
    ]
    const initialValues={
        email:'',
        bio:'',
        course:'',
        skill:[],
        courseDate:null
    }
    const validationSchema=yup.object({
        email:yup.string().email('Invalid Email Format').required("Required"),
        bio:yup.string().required("Required"),
        course:yup.string().required("Required"),
        courseDate:yup.date().required("Required").nullable(),
    })

    const onSubmit=value=>{
        console.log("Form data -> ",value)
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
                    label="Bio"
                    name="bio"
                    control="textarea"
                    />
                    <br />
                    <FormikControll
                    label="Course"
                    name="course"
                    control="select"
                    options={dropDownOption}
                    />
                    <br />
                    <FormikControll
                    label="Skill"
                    name="skill"
                    control="checkbox"
                    options={checkBoxOptions}
                    />
                    <br />
                    <FormikControll
                    label="Date"
                    name="courseDate"
                    control="date"
                    />
                    <br />

                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                    
            </Form>
        }
      }
    </Formik>
  )
}

export default YT9
