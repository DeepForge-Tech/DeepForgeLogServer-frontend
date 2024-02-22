import React, { useState, useEffect } from 'react';
import styles from "./Preloader.module.css"

export default function Nav() {
  return (
    <>
      <span class={styles.loader}></span>
    </>
  );
}