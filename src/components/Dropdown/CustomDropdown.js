import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core/";

export default function CustomDropdown(props) {
  const { children, id, value, onChange, disabled, options, ...rest } = props;
  return (
    <div>
      <TextField
        id={id}
        select
        label=""
        value={value}
        onChange={onChange}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
        disabled={disabled}
        size="small"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={Number(option.value)}>
            {option.label}
          </option>
        ))}
        {children}
      </TextField>
    </div>
  );
}

CustomDropdown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  children: PropTypes.node,
};
