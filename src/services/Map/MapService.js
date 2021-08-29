import { EARTH_RADIUS } from "../../constants/Map/MapConstants";
import { toDegrees, toRadians } from "../Form/FormService";

export const getDestinationPoint = (lat, lng, distance, bearing) => {
  // distance in m
  // bearing in degree

  var δ = Number(distance) / EARTH_RADIUS;
  var θ = toRadians(Number(bearing));

  var φ1 = toRadians(Number(lat));
  var λ1 = toRadians(Number(lng));

  var sinφ1 = Math.sin(φ1),
    cosφ1 = Math.cos(φ1);
  var sinδ = Math.sin(δ),
    cosδ = Math.cos(δ);
  var sinθ = Math.sin(θ),
    cosθ = Math.cos(θ);

  var sinφ2 = sinφ1 * cosδ + cosφ1 * sinδ * cosθ;
  var φ2 = Math.asin(sinφ2);
  var y = sinθ * sinδ * cosφ1;
  var x = cosδ - sinφ1 * sinφ2;
  var λ2 = λ1 + Math.atan2(y, x);

  return { lat: toDegrees(φ2), lng: ((toDegrees(λ2) + 540) % 360) - 180 };
};
