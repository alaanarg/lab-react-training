import React from 'react'


const Greetings = (props) => {
    
    let greet = ""
    
    
    if (props.lang === "de") {
        greet = "Hallo"
    } else if (props.lang === "es") {
        greet = "Hola"
    } else if (props.lang === "en") {
        greet = "Hello"
    } else {
        greet = "Bonjour"
    }

    
return (
        <div>
            <p>{greet} {props.children}</p>
        </div>
    );
};

    


export default Greetings