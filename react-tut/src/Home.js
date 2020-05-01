import React, {Component} from 'react';
import {motion} from 'framer-motion'
import {pageVariants} from './pageVariants'

class Home extends Component{
    render() {
        return (
            <motion.div key={window.location.pathname} initial="initial" animate="in" exit="out" transition={pageVariants.transition} variants={pageVariants}>
                <h1>Welcome to TechPhil</h1>
                <p>Welcome to the TechPhil website!!</p>
                <p>You are currently listening to Simulator Radio. For more information, please click on the link in the navbar</p>
            </motion.div>
        );
    }
}

export default Home;