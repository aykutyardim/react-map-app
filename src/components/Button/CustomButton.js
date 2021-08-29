import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core/";

export default function CustomButton(props) {
  const { children, color, disabled, onClick, label, ...rest } = props;
  return (
    <div>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {label}
        {children}
      </Button>
    </div>
  );
}

CustomButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
