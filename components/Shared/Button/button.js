import React, { useState } from "react";
import styles from "./button.module.scss";

export const Button = ({ content }) => {
  //   const [, set] = useState();

  return <div className={`${styles.small} ${styles.button}`}>{content}</div>;
};
