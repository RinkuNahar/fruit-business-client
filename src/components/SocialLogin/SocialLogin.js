import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let errorElement; 
    let from = location.state?.from?.pathname || "/";
    if (error) {
         errorElement = <p className='text-danger'>Error: {error.message}</p>
      }

      if(loading){
          return <Loading></Loading>
      }

    if(user){
        navigate(from, { replace: true });
    
    }

    if(error){
        <p className='text-danger'>Error : {error?.message}</p>
    }
    
    return (
        <div>
             <h4>or</h4>
            <button onClick={()=> signInWithGoogle()} className='btn btn-primary mb-4 p-2'>Continue with Google</button>  
            {errorElement}
        </div>
    );
};

export default SocialLogin;