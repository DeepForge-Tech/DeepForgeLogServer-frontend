import React, { useState, useEffect } from 'react';
import styles from "./Button.module.css"

function Field({children,type,text,placeholder,name,...props}) {

    return (
        <button className={styles.Button} type={type} name={name} {...props}>{children ? children : text}</button>
    );
};

export default Field;