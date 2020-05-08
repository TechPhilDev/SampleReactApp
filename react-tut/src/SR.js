import React, {Component} from 'react';
import {motion} from 'framer-motion'
import {pageVariants} from './pageVariants'

class SR extends Component {
    render() {
        return (
            <motion.div key={window.location.pathname} initial="out" animate="in" exit="out" variants={pageVariants}>
                <h2>Simulator Radio</h2>
                <p>Right now, you're listening to Simulator Radio!</p>
                <p>If not, why not? Visit simulatorradio.com, or click the button in the top right to open the player</p>
            </motion.div>
        )
    }
}

export default SR;