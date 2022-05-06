
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './LogIn.css';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    const navigateRegister = event => {
        navigate('/register')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error : {error?.message}</p>
    }

    if(loading){
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent mail');
        }
        else{
            toast('Please enter your email address');
        }
    }


    return (
        <div className='container mx-auto login-container'>
        <h2 className='login-title'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control className='w-75 mx-auto form-input' ref={emailRef}  type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='w-75 mx-auto form-input' ref={passwordRef}  type="password" placeholder="Password" required />
            </Form.Group>
            {errorElement}
            <Button className='login-button' variant="primary" type="submit">
              <p className='pt-1'>Login</p>
            </Button>
        </Form>
        <p className='mt-4 fs-4 new-para'>New to Juicy Warehouse? <Link to={'/register'} className='text-primary text-decoration-none '  onClick={navigateRegister} >Please Register</Link></p>
        
        <p className='mt-4 fs-5 forget-para'>Forget Password? <button to={'/register'} className='text-primary border-0 text-decoration-none  bg-white login-button forget-para '  onClick={resetPassword}>Reset Password</button></p>
        <SocialLogin></SocialLogin>
       <ToastContainer></ToastContainer>
   
    </div>
    );
};

export default LogIn;
