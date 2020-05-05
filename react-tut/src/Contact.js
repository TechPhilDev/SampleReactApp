import React, {Component} from "react";
import {motion} from 'framer-motion'
import {pageVariants} from './pageVariants'
import ContactForm from './ContactForm'
import {DevForm} from './Dev';



var isDev;
class Contact extends Component {
    
    render(){
        return(
            <motion.div key={window.location.pathname} initial="initial" animate="in" exit="out" transition={pageVariants.transition} variants={pageVariants}>
            
                <h2>Get in Contact!</h2>
                {isDev ? <ContactForm/> : <DevForm/>}
            </motion.div>
        )
    }
    componentDidMount() {
        window.location.href === "localhost" || window.location.href === "dev.techphil.xyz" ? isDev=true : isDev=false;
        var URLParams = new URLSearchParams(window.location.search);
        if (URLParams.has("live")) {isDev=false;}
    }
}

export default Contact;