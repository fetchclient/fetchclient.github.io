import React from "react";
import styles from "./logo.module.css";

interface AnimatedLogoProps {
  size?: number;
}

export default function AnimatedLogo({ size = 150 }: AnimatedLogoProps) {
  return (
    <div className={styles.logoWrap} style={{ height: size }}>
      <svg viewBox="0 0 256 256">
        <polygon
          className={`${styles.arrow} ${styles.arrowRight}`}
          points="66,78 155,78 155,60 193,95 155,130 155,112 66,112"
        />
        <polygon
          className={`${styles.arrow} ${styles.arrowLeft}`}
          points="190,144 101,144 101,126 63,161 101,196 101,178 190,178"
        />
        <circle className={styles.ring} cx="128" cy="128" r="118" />
      </svg>
    </div>
  );
}
