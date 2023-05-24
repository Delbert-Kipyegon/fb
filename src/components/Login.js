import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from "react-bootstrap"
import { useAuth } from '../context/AuthContext'

export const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
        e.preventDefault()
        
        // match passwords
        if(passwordRef.current.value !== passwordRef.current.value){
            return setError('Passwords do not match')
        }

        // signs us up 
        try {
            setError('')
            setLoading(true)
          await  login(emailRef.current.value,  passwordRef.current.value)   
            
        } catch (error) {
            setError(error)
            setLoading(true)
        }
         }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>

                {error && <Alert variant='danger'>{error}</Alert>}

                <Form onSubmit ={handleSubmit}> 
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100 mt-4' type="submit">Login</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}



// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// export const Signup= () => {
//   const { signup } = useAuth();

//   async function handleSignup(e) {
//     e.preventDefault();
//     const email = 'example@example.com';
//     const password = 'password123';

//     try {
//       await signup(email, password);
//       console.log('User signed up successfully!');
//     } catch (error) {
//       console.log('Error signing up:', error);
//     }
//   }

//   return (
//     <form onSubmit={handleSignup}>
//       {/* Form fields and submit button */}
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Signup;
