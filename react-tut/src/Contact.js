import React, {Component} from "react";
import {motion} from 'framer-motion'
import {pageVariants} from './pageVariants'
import ContactForm from './ContactForm'
import {DevForm} from './Dev';

function FormChoice(props) {
    var isDev;
    window.location.hostname === "localhost" || window.location.hostname === "dev.techphil.xyz" ? isDev=true : isDev=false;
    var URLParams = new URLSearchParams(window.location.search);
    if (URLParams.has("live")) {isDev=false;}
    if (isDev) {
        return <DevForm/>
    } else {
        return <ContactForm/>
    }
}



class Contact extends Component {
    render(){
        return(
            <motion.div key={window.location.pathname} initial="initial" animate="in" exit="out" transition={pageVariants.transition} variants={pageVariants}>
                <h2>Get in Contact!</h2>
                <FormChoice/>
            </motion.div>
        )
    }
}

export default Contact;