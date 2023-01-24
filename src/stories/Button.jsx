import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
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
    icon: PropTypes.node,
    /**
     * where icon be
     */
    iconPlace: PropTypes.oneOf(["before", "after"]),
  };

  Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
    type: "primary",
    icon: null,
    iconPlace: icon ? "before" : null,
  };

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {iconPlace === "before" && icon}
      {label}
      {iconPlace === "after" && icon}
    </button>
  );
};
