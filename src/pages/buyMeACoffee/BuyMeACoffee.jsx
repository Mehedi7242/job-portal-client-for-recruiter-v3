import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext/ThemeContext';
import QR from "../../assets/team/bikash.png";
import { motion } from "framer-motion";
import './BuyMeACoffee.css'; // Import the updated CSS for styles
import Lottie from 'lottie-react';
import coffeeLottieJSON from '../../assets/lottie/coffee.json';

const BuyMeACoffee = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen text-center p-5 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-center lg:text-left w-full">
                    <motion.h1
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Support My Work 
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Lottie animationData={coffeeLottieJSON} loop={true} />
                    </motion.div>
                    <motion.h1
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Buy Me A Coffee
                    </motion.h1>
                </div>

                <div className=" mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
                    {/* Framer Motion for Glow Effect with Moving Light */}
                    <motion.div 
                 
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className=" p-2 rounded-lg border-4 border-transparent moving-glow "
                    >
                        <img 
                            src={QR} 
                            alt="Bikash QR Code" 
                            className="w-full h-auto object-contain shadow-lg rounded-lg justify-center " 
                        />
                    </motion.div>
                </div>
                
            </div>

            <motion.p
                className="mt-3 text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                If you like my work, consider buying me a coffee! Your support helps me
                keep building awesome projects.
            </motion.p>
        </div>
    );
};

export default BuyMeACoffee;
