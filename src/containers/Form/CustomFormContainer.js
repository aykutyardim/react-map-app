// core
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
// custom components
import CustomTextField from "../../components/TextField/CustomTextField";
import CustomDropdown from "../../components/Dropdown/CustomDropdown";
import CustomButton from "../../components/Button/CustomButton";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
// static data
import { bearingTypes } from "../../constants/Form/BearingTypes";
import { velocityUnits } from "../../constants/Form/VelocityUnits";

export default function CustomFormContainer(props) {
  const {
    children,
    alert,
    moving,
    onFormChange,
    handleMoveClick,
    handleClearClick,
    handleAlertClose,
    ...rest
  } = props;

  const { lat, lng, velocity, velocityUnit, bearing, bearingType } = props.form;

  return (
    <div {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            id={lat.id}
            label={lat.label}
            disabled={moving}
            onChange={onFormChange}
            value={lat.value ? lat.value : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id={lng.id}
            label={lng.label}
            disabled={moving}
            onChange={onFormChange}
            value={lng.value ? lng.value : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            id={velocity.id}
            label={velocity.label}
            disabled={moving}
            onChange={onFormChange}
            value={velocity.value ? velocity.value : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomDropdown
            id={velocityUnit.id}
            value={velocityUnit.value}
            onChange={onFormChange}
            disabled={moving}
            options={velocityUnits}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            id={bearing.id}
            label={bearing.label}
            disabled={moving}
            onChange={onFormChange}
            value={bearing.value ? bearing.value : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomDropdown
            id={bearingType.id}
            value={bearingType.value}
            onChange={onFormChange}
            disabled={moving}
            options={bearingTypes}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomButton
            disabled={moving}
            onClick={handleClearClick}
            label="Clear"
          />
        </Grid>
        <Grid item xs={4}>
          <CustomButton
            color="primary"
            onClick={handleMoveClick}
            label={moving ? "Stop" : "Move"}
          />
        </Grid>
      </Grid>
      <CustomSnackbar
        id="alert"
        label={alert ? alert : ""}
        open={alert ? true : false}
        onClose={handleAlertClose}
      />
      {children}
    </div>
  );
}

CustomFormContainer.propTypes = {
  form: PropTypes.object,
  alert: PropTypes.string,
  moving: PropTypes.bool,
  onFormChange: PropTypes.func,
  handleMoveClick: PropTypes.func,
  handleClearClick: PropTypes.func,
  handleAlertClose: PropTypes.func,
  children: PropTypes.node,
};
