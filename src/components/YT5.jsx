
//



import React from 'react'
import '../App.css'
import { Formik,Form ,Field,ErrorMessage,FieldArray,FastField, useFormik} from 'formik'
import * as Yup from 'yup'
// import TextError from './TextError.jsx'

const initialValues ={
        name:'',
        email:'',
        channel:'',
        comments:'',
        address:'',
        social:{
            facebook:'',
            twitter:'',
        }, 
        phoneNumbers:['',''],
        phNumbers:[''],  
    }
const onSubmit=(values)=>{
        console.log("Form data ",values)
    }

const validationSchema = Yup.object({
        name:Yup.string().required('Required!'),
        email:Yup.string().email('Invaid email format').required('Required!'),
        channel:Yup.string().required('Required!'),
        address:Yup.string().required('Required!'),
    })

// const validateComments = value =>{
//     let error
//     if(!value){
//        return error = "Required!"
//     }
//     return error
// }


const YT5 = () => {
    

  return (
    <Formik className='container'
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    validateOnMount
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
        className='Field' 
        type="text" 
        name='name' id='name'
        />
        <ErrorMessage name='name' >
            {
                (error)=><span>{error}</span>
            }
        </ErrorMessage>
        

        <label htmlFor="email">Emain</label>
        <Field
        className='Field' 
        type="email" 
        name='email' id='email'
        />
        <ErrorMessage name='email'>
            {
                (error)=><span>{error}</span>
            }  
        </ErrorMessage>



        <label htmlFor="channel">Channel</label>
        <Field
        className='Field' 
        type="text" 
        name='channel' id='channel'
        />
        <ErrorMessage name='channel'>
            {
                (error)=><span>{error}</span>
            }  
        </ErrorMessage>





        <label htmlFor="comments">comments</label>
        <Field as='textarea'
        className='Field' 
        type="text" 
        name='comments' id='comments'
        />
        {/* <ErrorMessage name='comments' component={TextError}/> */}







        <label htmlFor="twitter">twitter</label>
        <Field
        className='Field' 
        type="text" 
        name='social.twitter' id='twitter'
        />



            {/*DYNAMIC PHONE NUMBERS ADD MENY  */}

        <label htmlFor="phNumbers">PhNumbers</label>
        <FieldArray
        className='Field' 
        type="text" 
        name='phNumbers' id='phNumbers'
        >
            {
                (fieldArrayProps)=>{
                    const { push , remove , form } = fieldArrayProps
                    const { values } = form
                    const {phNumbers } = values
                    // console.log(' Form errors ', form)

                    return <div>
                        {
                            phNumbers.map((phNum,index)=>{
                                return <div key={index}>
                                    <Field name={`phNumbers[${index}]`}/>
                                    {
                                        index>0 && <button type='button' onClick={()=>remove(index)} >-</button>
                                    }
                                    <button type='button' onClick={()=>push(index)} >+</button>
                                    
                                </div>
                            })
                        }
                    </div>
                }
            }
        </FieldArray>


        <label htmlFor="facebook">facebook</label>
        <Field
        className='Field' 
        type="text" 
        name='social.facebook' id='facebook'
        />


        <label htmlFor="phonePri">Phone Number</label>
        <Field
        className='Field' 
        type="text" 
        name='phoneNumbers[0]' id='phonePri'
        />


        <label htmlFor="phoneSec">Telephone Number</label>
        <Field
        className='Field' 
        type="text" 
        name='phoneNumbers[1]' id='phoneSec'
        />




        <label htmlFor="address">Address</label>
        {/* <Field component='textarea' */}
        <FastField 
        className='Field' 
        name='address'
        >
            {
                (props)=>{
                    // console.log(" render- > ")
                    const { field,form,meta }=props
                    return (
                        <>
                        <input className='Field' id='address' {...field}/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                        </>
                    )
                }
            }
        </FastField>


        <button type='submit' disabled={!formik.isValid} >Submit</button>
      </Form>
    </Formik>
  )
}

export default YT5
