import React from "react";
import ReactDOM from "react-dom";
import ViewportRestrict from './lib';

ReactDOM.render(
    <ViewportRestrict 
        type="desktop_landscape" 
        image={require('./test.jpg')}
        animation={true}
        animationSpeed={1000}
        backgroundColor="rgba(9, 18, 34, 1)"
    />, 
    document.getElementById("root")
);