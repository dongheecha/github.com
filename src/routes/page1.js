import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Page1 extends Component {
    render() {
        return (
            <div>
                Hi
                <br />
                <Link to="/page2"> Go to Page2 </Link>
            </div>
        );
    }
}

export default Page1;
