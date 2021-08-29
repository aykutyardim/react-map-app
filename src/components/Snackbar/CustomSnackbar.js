import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(props) {
  const { children, id, label, open, onClose, ...rest } = props;
  return (
    <div>
      <Snackbar
        id={id}
        key={id}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        {...rest}
      >
        <Alert onClose={onClose} severity="error">
          {label}
        </Alert>
      </Snackbar>
      {children}
    </div>
  );
}

CustomSnackbar.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
