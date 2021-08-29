import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core/";

export default function CustomTextField(props) {
  const { children, id, label, disabled, onChange, value, ...rest } = props;
  return (
    <div>
      <TextField
        id={id}
        label={label}
        disabled={disabled}
        onChange={onChange}
        value={value}
        variant="outlined"
        size="small"
        {...rest}
      />
      {children}
    </div>
  );
}

CustomTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};
