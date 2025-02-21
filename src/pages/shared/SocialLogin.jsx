import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaGoogle, FaFacebook } from 'react-icons/fa';  // For Google & Facebook icons
import ThemeContext from '../../context/ThemeContext/ThemeContext';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleFacebookSignIn = () => {
        console.log('Facebook Sign In')
    };


    return (
        <div className='m-4'>
              <div className="divider">OR</div>

                <button
                    onClick={handleGoogleSignIn}
                    className={`btn w-full flex items-center justify-center p-4 mt-2
                    ${theme === "light" ? "bg-white text-black border-2 border-gray-300 hover:bg-gray-100" : "bg-gray-800 text-white border-2 border-gray-600 hover:bg-gray-700"}`}
                >
                    <FaGoogle className="mr-2 text-blue-500" /> {/* Google Icon */}
                    Sign in with Google
                </button>

            <button
                onClick={handleFacebookSignIn}
                className={`btn w-full flex items-center justify-center p-4 mt-2
                ${theme === "light" ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-blue-900 text-yellow-300 hover:bg-blue-800"}`}
            >
                <FaFacebook className="mr-2" /> {/* Facebook Icon */}
                Facebook
            </button>
        </div>
    );
};

export default SocialLogin;