import React from "react";
import styles from "./LongBtn.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai'; 
import { MdArrowOutward } from "react-icons/md";



const AnimatedBtn1 = ({text}) => {
  return (
    <div className={styles.animatedBtn1}>
      <div className={styles.buttonWrapper}>
        <span className={styles.text}>{text} <MdArrowOutward className="pl-2 text-[28px]"/></span>
        <span className={styles.icon}>{text} <AiOutlineArrowRight className="pl-2 text-[28px]"/></span>
      </div>
    </div>
  );
};

export default AnimatedBtn1;
