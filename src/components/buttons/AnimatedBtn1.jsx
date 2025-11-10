import React from "react";
import styles from "./AnimatedBtn1.module.css";

const AnimatedBtn1 = ({ arrowIconCurve,  borderColor, arrowIconStraight, text, width, bgColor }) => {
  return (
    <div
      className={styles.animatedBtn1}
      style={{
        width: width,
        backgroundColor: bgColor, 
          border: borderColor ? `1.5px solid ${borderColor}` : "none",
      }}
    >
      <div className={styles.buttonWrapper}>
        <div className={styles.text}>
          {text} {arrowIconCurve}
        </div>
        <span className={styles.icon}>
          {text} {arrowIconStraight}
        </span>
      </div>
    </div>
  );
};


export default AnimatedBtn1;
