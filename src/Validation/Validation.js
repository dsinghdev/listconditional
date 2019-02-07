import React from 'react';

const Validation = (props) => {
    return(
        <div>
            {
                props.inputLength < 5 ?
            <p>Text too short!</p> :
            <p>Text is long enough</p>
            }
        </div>
    );
};

export default Validation;