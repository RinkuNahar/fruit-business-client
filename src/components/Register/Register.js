import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }


    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name});
        //   alert('Updated profile');
        //   navigate('/home')
    }
    return (
        <div className='container  mx-auto login-container'>
        <h2 className='login-title'>Please Register</h2>
        <form onSubmit={handleRegister}>
            <input className='w-75 mx-auto m-0 form-input login-container' type="text" name='name' placeholder='Your Name' />
            <br />
            <br />
            <input className='w-75 mx-auto form-input m-0 login-container' type="email" name="email" id="" placeholder='Your email' required/>
            <br />
            <br />
            <input className='w-75 mx-auto form-input m-0 login-container' type="password" name="password" id="" placeholder='Your Password' required/>
            <br />
            <br />
            {/* {errorElement} */}
            <input type="submit" className='btn btn-primary login-button' value="Register" />
        </form>
        <p className='mt-4 fs-4 new-para'>Already Have an account? <Link to={'/login'} className='text-primary text-decoration-none ' onClick={navigateLogin}>Please LogIn</Link></p>
        {/* <SocialLogin></SocialLogin> */}
    </div>
    );
};

export default Register;

// onClick={navigateLogin}