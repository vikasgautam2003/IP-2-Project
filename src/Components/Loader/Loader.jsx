import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './Loader.css';

function Loader() {
    return (
        <motion.div
            className="hourglass-container"
            initial={{ opacity: 0 }}  // Initial state
            animate={{ opacity: 1 }}  // Animate to fully visible
            exit={{ opacity: 0 }}    // Exit state (fade out)
            transition={{ duration: 0.2 }}  // Duration for the fade-in/out
        >
            <motion.div
                className="hourglass"
                animate={{ rotate: 360 }} // Rotate the hourglass
                transition={{ repeat: Infinity, duration: 1 }} // Infinite rotation
            />
        </motion.div>
    );
}

export default Loader;
