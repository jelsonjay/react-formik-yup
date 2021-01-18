import './App.css';
import {Formik, useField, Form} from 'formik'
import {Styles} from './styled'
import * as Yup from 'yup'

const CustomerTextInput = ({label, ...props}) =>{
const [field, meta] = useField(props);
return(
  <>
  <label htmlFor={props.id || props.name}>{label}</label>
  <input className='text-input'{...field} {...props}/>
  {meta.touched && meta.error ? ( 
  <div className='error'>{meta.error}</div>) : null}
  </>
)
}

const CustomerCheckedBox = ({children, ...props}) =>{
const [field, meta] = useField(props, 'checkbox')
  return(
    <>
    <label className='checkbox'>
    <input type='checkbox'{...field} {...props}/>
    {children}
    </label>
    {meta.touched && meta.error ? ( 
    <div className='error'>{meta.error}</div>) : null}
    </>
  )
  }

  const CustomerSelect = ({label, ...props}) =>{
    const [field, meta] = useField(props)
    return(
      <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}/>
      {meta.touched && meta.error ? ( 
      <div className='error'>{meta.error}</div>) : null}
      </>
    )
    }

function App() {
  return (
  <Styles>

  <Formik
  initialValues={{
    name: '',
    email: '',
    acceptedTerms: false,
    frutList: '',
   }}

  validationSchema = {Yup.object({
    name: Yup.string()
             .min(4, 'Must be last 3 characters')
             .max(10, 'Must be 10 characters')
             .required('Name is required.'),
    email: Yup.string()
              .email('Invalid email address')
              .required('Email is required.'),
    acceptedTerms: Yup.boolean()
              .required('Required')
    .oneOf([true], 'Yuo must accept the terms & condictions'),
    frutList: Yup.string() 
    .oneOf(['orange', 'banana', 'apple', 'other'], 'Invali name')
        .required('Required')
  })}
  onSubmit={(values, {setSubmitting, resetForm}) => {
    setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    resetForm()
    setSubmitting(false)
    },2000)
  }}
  
  >
    {props => (
      <Form>
      <h1>Sign up</h1> 
      <CustomerTextInput label='Name' name='name' type='text' placeholder='Enter your name.' />
      <CustomerTextInput label='Email' name='email' type='email' placeholder='Enter your email.' />
      <CustomerSelect labe='Select Your Favor Frut' name='frutList'>
      <option value=''>Select your frut</option>
      <option value='orange'>orange</option>
      <option value='banana'>banana</option>
      <option value='apple'>apple</option>
      <option value='other'>other</option>
      </ CustomerSelect>
      <CustomerCheckedBox name='acceptedTerms'>
      I accept the terms and conditions
      </CustomerCheckedBox>
      <button type='submit'>{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
      </Form>
    )}
  </Formik>
    </Styles>
  );
}

export default App;
