import React from "react";
import styles from "./ShortBtn.module.css";
import { MdArrowOutward } from "react-icons/md";



const AnimatedBtn1 = () => {
  return (
    <div className={styles.animatedBtn1}>
      <div className={styles.buttonWrapper}>
        <div className={styles.text}><MdArrowOutward className="text-[26px]"></MdArrowOutward></div>
        <span className={styles.icon}><MdArrowOutward className="text-[26px]"></MdArrowOutward></span>
      </div>
    </div>
  );
};

export default AnimatedBtn1;
