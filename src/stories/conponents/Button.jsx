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
  disabled,
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
    size: PropTypes.oneOf(["small", "medium", "large", "pureIcon"]),
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
    /**
     * Button disabled
     */
    disabled: PropTypes.bool,
  };

  Button.defaultProps = {
    backgroundColor: null,
    size: "medium",
    onClick: undefined,
    type: "primary",
    icon: null,
    iconPlace: icon ? "before" : null,
    disabled: false,
  };

  const buttonStyles = () => {
    let className = styles[`storybook-button`];
    if (size) className += " " + styles[`storybook-button--${size}`];
    if (type) className += " " + styles[`storybook-button--${type}`];
    if (disabled) className += " " + styles[`storybook-button--disabled`];
    return className;
  };

  return (
    <button
      type="button"
      className={buttonStyles()}
      onClick={(e) => !disabled && onClick(e)}
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
