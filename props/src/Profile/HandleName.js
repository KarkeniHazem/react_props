import React from 'react';

const HandleName = (props) => {
    function alertt(){
        alert(`***** : ${props.user} *****`)
    }

    return (
        <div>
         <h1>click me </h1> 
         <button onClick={alertt}>click</button>
        </div>
    );
}

export default HandleName;
