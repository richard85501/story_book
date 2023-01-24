import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Button.module.scss";

export const Button = ({
  backgroundColor,
  size,
  label,
  type,
  onClick,
  icon,
  iconPlace,
  ...props
}) => {
  Button.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     * which type of button
     */
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    /**
     * where icon be
     */
    icon: PropTypes.object,
    /**
     * where icon be
     */
    iconPlace: PropTypes.oneOf(["before", "after"]),
  };

  Button.defaultProps = {
    backgroundColor: null,
    size: "medium",
    onClick: undefined,
    type: "primary",
    icon: null,
    iconPlace: icon ? "before" : null,
  };

  const buttonStyles = () => {
    let className = styles[`storybook-button`];
    if (size) className += " " + styles[`storybook-button--${size}`];
    if (type) className += " " + styles[`storybook-button--${type}`];
    return className;
  };

  return (
    <button
      type="button"
      className={buttonStyles()}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {iconPlace === "before" ? (
        <>
          {icon} {label}
        </>
      ) : (
        <>
          {label} {icon}
        </>
      )}
    </button>
  );
};
