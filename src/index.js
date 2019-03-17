import React from "react";
import ReactDOM from "react-dom";
import ViewportRestrict from './lib';

ReactDOM.render(
    <ViewportRestrict type="desktop_landscape" />, 
    document.getElementById("root")
);