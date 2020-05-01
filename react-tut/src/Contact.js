import React, {Component} from "react";
import {motion} from 'framer-motion'
import {pageVariants} from './pageVariants'

class Contact extends Component {
    render(){
        return(
            <motion.div key={window.location.pathname} initial="initial" animate="in" exit="out" transition={pageVariants.transition} variants={pageVariants}>
                <h2>Get in Contact!</h2>
                <p>Right now, just open an issue on Github!</p>
                <p>github.com/TechPhilDev/SampleReactApp</p>
            </motion.div>
        )
    }
}

export default Contact;