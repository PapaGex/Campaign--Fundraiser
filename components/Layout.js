import React from 'react';


const Layout = (props) => {
    return (
        <div>
        <h1> Im a header</h1>
        {props.children}
        </div>
    )
};

export default Layout;