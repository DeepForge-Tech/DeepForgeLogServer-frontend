import React, { useState, useEffect } from 'react';
import styles from "./ButtonLink.module.css"

function ButtonLink({children,isFilled,text,href,...props}) {

    return (
        <a href={href} className={isFilled == true ? styles.FilledButtonLink : styles.ButtonLink} {...props}>{children ? children : text}</a>
    );
};

export default ButtonLink;