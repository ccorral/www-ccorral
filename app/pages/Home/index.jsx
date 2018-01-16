import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './styles.less';

const message_intro = "HI,";
const message_body_1 = "I'M A SOFTWARE ENGINEER WITH PRODUCT AND DESIGN EXPERIENCE WHO'S PASSIONATE ABOUT CREATING MEANINGFUL AND SOPHISTICATED PRODUCTS.";
const message_body_2 = "CURRENTLY, YOU CAN FIND ME AT AIRMAP WHERE I'M PART OF THE PLATFORM ENGINEERING TEAM BUILDING MODERN JAVASCRIPT WEB APPLICATIONS AND MICROSERVICES IN NODE AND GO.";

export default class extends Component {

    shouldComponentUpdate() {
        return false;
    }
  
    render() {
        return (
            <div className="home_page_container">
                <div className="frame">
                    <div className="message_paragraph intro">
                        <Draggable>
                            <div className="font">{message_intro}</div>
                        </Draggable>
                    </div>
                    <div className="message_paragraph body_1">
                        {message_body_1.split(' ').map((word, index) => (
                            <Draggable
                                key={`message_body_1-${index}`}
                            >
                                <div id={`message_body_1-${index}`} className="font">{word}</div>
                            </Draggable>
                        ))}
                    </div>
                    <div className="message_paragraph">
                        {message_body_2.split(' ').map((word, index) => (
                            <Draggable
                                key={`message_body_2-${index}`}
                            >
                                <div id={`message_body_2-${index}`} className="font">{word}</div>
                            </Draggable>
                        ))}
                    </div>
                    <div className="message_paragraph">
                        <Draggable>
                            <div className="font">BEST,</div>
                        </Draggable>
                    </div>
                    <div className="message_paragraph">
                        <Draggable>
                            <div className="font">CARLOS CORRAL</div>
                        </Draggable>
                    </div>
                </div>
                <div className="coffee_message">
                    Have fun with the letterboard! Send me something clever and I may just buy you coffee.
                    <a href="mailto:emailccorral@gmail.com"> Email me a screenshot.</a>
                </div>
            </div>        
        );
    }
    
}