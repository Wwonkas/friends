import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '3px solid rgba(0, 0, 0, 0.3)', height:'900px', boxShadow:'inset 0px 0px 40px 10px rgba(0, 0, 0, 0.6)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;