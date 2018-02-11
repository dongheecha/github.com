import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Page2 extends Component {
    render() {
        return (
            <div>
                Bye
                <br />
                <Link to ="/" > Go to Page1 </Link>
                
            </div>
        );
    }
}

export default Page2;
