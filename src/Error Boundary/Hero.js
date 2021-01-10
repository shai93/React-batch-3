import React from 'react';

const Hero = (props)=>{
    const {name} = props;

    if(name === "jokersss"){
        throw new Error("Not a hero")
    }

    return (
        <h2>{name}</h2>
    )
}

export default Hero;