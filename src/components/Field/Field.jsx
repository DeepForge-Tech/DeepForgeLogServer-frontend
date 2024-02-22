import React, { useState, useEffect } from 'react';
import "./Field.css"

function Field({type,text,placeholder,name,...props}) {

    return (
        <input type={type} name={name} placeholder={placeholder} {...props}>{text}</input>
    );
};

export default Field;