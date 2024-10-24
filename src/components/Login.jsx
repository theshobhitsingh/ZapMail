import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/appSlice';

const Login = () => {
     const dispatch = useDispatch();

     const signInWithGoogle = async () => {
          try {
               const result = await signInWithPopup(auth, provider);
               dispatch(setAuthUser({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
               }));
          } catch (error) {
               console.log(error);
          }
     }

     return (
          <div className='flex items-center justify-center w-screen h-screen bg-gray-900'>
               <div className='p-10 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-5'>
                    <h1 className='text-center text-3xl font-bold text-white'>Welcome Back!</h1>
                    <p className='text-center text-gray-400'>Please sign in to continue</p>
                    <GoogleButton
                         onClick={signInWithGoogle}
                         style={{ width: '100%', borderRadius: '25px' }}
                    />
               </div>
          </div>
     )
}

export default Login;
