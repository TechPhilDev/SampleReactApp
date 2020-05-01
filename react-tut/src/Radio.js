import React, {Component} from 'react'
import Iframe from 'react-iframe';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import srlogo from './sr.png';


var expanded = true;
function toggleRadio(){
    var player = document.getElementById("radioplayer");
    var caret = document.getElementById("caret");
    if (!expanded){
        player.style.animation = "playerexpand ease-in-out 1s forwards";
        caret.style.animation = "caretexpand ease-in-out 1s forwards";
    } else {
        player.style.animation = "playerretract ease-in-out 1s forwards";
        caret.style.animation = "caretretract ease-in-out 1s forwards";
    }
    expanded = !expanded
}



class Radio extends Component {
    render() {
        return(
            <div>
           
                <div id="radioplayer" className="playerDiv">
                <a href="https://www.simulatorradio.com"><img className="srlogo" src={srlogo}/></a>
                    <Iframe url="https://embedded.rcast.net/fixedbar2/65141"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    />
                </div>
                <div className="corner-triangle" onClick={toggleRadio}>
				<div className="corner-triangle-text" ><FontAwesomeIcon className="fas fa-caret-right" id="caret" icon={faCaretRight}/></div>
			</div>
            </div>
        )
    }
}

export default Radio