import React from 'react'


const BoxColor = (props) => {
    
    const boxColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    }
    
return (
        <div className='boxcolor' style={boxColor}>
            <p className='rgbbox'>rgb({props.r},{props.g},{props.b})</p>
        </div>
    );
};


export default BoxColor