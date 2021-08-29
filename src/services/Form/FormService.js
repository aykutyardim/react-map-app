export const toRadians = (v) => {
  return (v * Math.PI) / 180;
};

export const toDegrees = (v) => {
  return (v * 180) / Math.PI;
};

export const toMeterPerSec = (v) => {
  return v / 3.6;
};

export const findKeyByValue = (li, v) => {
  const r = li.find((l) => l.value === Number(v));
  return r ? r.key : null;
};

export const validateLatitude = (v) => {
  const re =
    /^(\+|-)?(?:90(?:(?:\.0{1,21})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,21})?))$/;
  return re.test(v);
};

export const validateLongitude = (v) => {
  const re =
    /^(\+|-)?(?:180(?:(?:\.0{1,21})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,21})?))$/;
  return re.test(v);
};

export const validatePosition = (t, n) => {
  return validateLatitude(t) && validateLongitude(n);
};

export const validatePositiveNumber = (v) => {
  const re = /^[+]?\d+([.]\d+)?$/;
  return re.test(v);
};

export const invalidForm = (t, n, v, b) => {
  if (!validateLatitude(t)) return "Invalid Latitute!";
  if (!validateLongitude(n)) return "Invalid Longitute!";
  if (!validatePositiveNumber(v)) return "Invalid Velocity!";
  if (!validatePositiveNumber(b)) return "Invalid Bearing!";
  return null;
};
