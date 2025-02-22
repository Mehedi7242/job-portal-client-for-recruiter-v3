import React, { useContext } from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

const text = "Latest Jobs For You!";

// Function to split text into letters while preserving spaces
const splitText = (text) =>
    text.split("").map((char, index) => (
        <motion.span
            key={index}
            initial={{
                x: Math.random() * 300 - 150, // Random horizontal position
                y: Math.random() * 200 - 100, // Random vertical position
                opacity: 0,
            }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                duration: 1.5,
                delay: index * 0.1, // Stagger animation for each letter
                ease: "easeOut",
            }}
            className="inline-block"
        >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
        </motion.span>
    ));

const Banner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <motion.h1 className="text-5xl font-bold flex flex-wrap ">
                        {splitText(text)}
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
