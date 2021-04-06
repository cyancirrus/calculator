import React from "react";
import { Image, Container } from 'semantic-ui-react';

var thoughts = [
    "machine learning engineer",
    "software engineer",
    "data scientist",
    "i don't really care what you call me"
]

function SpaceLines(accumulator, currentValue) {
    return (
    <div>
        {accumulator}
        <div/>
        {currentValue}
    </div>
    );
}

function LandingPageGreeting(props) {
    const thoughts = props.thoughts;
    const speech = thoughts.map((thought) =>
        "i think i might be a" + " " + thought     
    );
    return speech.reduce(SpaceLines);
}

const LandingPage = () => (
        <div class="ui segment" style={
            {
                backgroundColor:"#FFEFD1",
                color:'#5577EE'
            }
        }>
            <div class="ui equal width center alligned two column grid">
                <div class="column">
                    <Image src='./assets/images/rem_main.png'/>
                </div>
                <div class="column">
                    <div class="centered grid">
                        <div>
                            <h1 >
                                Welcome to Autumn's Playground
                            </h1>
                            <h2>a place to explore and have fun</h2>
                        </div>    
                        <div class="ui hidden divider"/>
                        <div>
                            hello i'm i hope you're doing well
                            <LandingPageGreeting thoughts={thoughts}/>
                        </div>
                        <div class="ui hidden divider" size="large"/>
                        <div>
                            <Image src='./assets/images/tripple_goddess.png' size="medium"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
export default LandingPage;
