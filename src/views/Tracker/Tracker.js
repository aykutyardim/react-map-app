// core
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
// containers
import Logo from "../../static/Havelsan.png";
import CustomMapContainer from "../../containers/Map/CustomMapContainer";
import CustomFormContainer from "../../containers/Form/CustomFormContainer";
// services
import { getDestinationPoint } from "../../services/Map/MapService";
import {
  invalidForm,
  validatePosition,
  toMeterPerSec,
  toDegrees,
  findKeyByValue,
} from "../../services/Form/FormService";
// Static Data
import { initialFormData } from "../../constants/Form/FormConstants";
import { velocityUnits } from "../../constants/Form/VelocityUnits";
import { bearingTypes } from "../../constants/Form/BearingTypes";
// constants
import { TOTAL_DISPLACEMENT_TIME_IN_SEC } from "../../constants/Map/MapConstants";

export default function Tracker() {
  const [map, setMap] = useState(null);
  const [moving, setMoving] = useState(false);
  const [alert, setAlert] = useState(null);
  const [form, setForm] = useState(initialFormData);

  useEffect(() => {
    moving && move();
    form.lat.value && form.lng.value && setView();
  });

  const onFormChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: {
        ...form[event.target.id],
        value: event.target.value,
      },
    });
  };

  const handleMoveClick = () => {
    if (moving) setMoving(false);
    else {
      const invalid = invalidForm(
        form.lat.value,
        form.lng.value,
        form.velocity.value,
        form.bearing.value
      );
      !invalid ? setMoving(true) : setAlert(invalid);
    }
  };

  const handleClearClick = () => {
    setForm(initialFormData);
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  const setView = () => {
    validatePosition(form.lat.value, form.lng.value) &&
      map.setView([form.lat.value, form.lng.value]);
  };

  const move = () => {
    setTimeout(() => {
      var newPosition = getDestinationPoint(
        form.lat.value,
        form.lng.value,
        (findKeyByValue(velocityUnits, form.velocityUnit.value) === "KM"
          ? toMeterPerSec(form.velocity.value)
          : form.velocity.value) * TOTAL_DISPLACEMENT_TIME_IN_SEC,
        findKeyByValue(bearingTypes, form.bearingType.value) === "RAD"
          ? toDegrees(form.bearing.value)
          : form.bearing.value
      );
      setForm({
        ...form,
        lat: { ...form.lat, value: newPosition.lat },
        lng: { ...form.lng, value: newPosition.lng },
      });
    }, TOTAL_DISPLACEMENT_TIME_IN_SEC * 1000);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <CustomMapContainer
            markerPosition={{ lat: form.lat.value, lng: form.lng.value }}
            whenCreated={setMap}
          />
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={Logo} style={{ height: "90%", width: "90%" }} alt="" />
            </Grid>
            <Grid item xs={12}>
              <CustomFormContainer
                form={form}
                moving={moving}
                alert={alert}
                onFormChange={onFormChange}
                handleMoveClick={handleMoveClick}
                handleClearClick={handleClearClick}
                handleAlertClose={handleAlertClose}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
