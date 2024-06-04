import React from "react";
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  style?: object;
  disabled?: boolean;
}

/**
 * Renders a button component with the given text, onClick event handler, and optional className, style, and disabled props.
 *
 * @param {string} text - The text to display on the button.
 * @param {() => void} onClick - The event handler to be called when the button is clicked.
 * @param {string} [className] - Additional CSS class names to apply to the button.
 * @param {object} [style] - Additional inline styles to apply to the button.
 * @param {boolean} [disabled] - Whether the button should be disabled.
 * @return {JSX.Element} The rendered button component.
 */
const Button = ({ text, onClick, className, style, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.buttonContainer} ${className} ${disabled ? styles.disabled : ''}`}
      style={style}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default Button;