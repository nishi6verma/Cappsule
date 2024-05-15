import checkPackings from "./checkPackings";

function checkStrength(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && checkPackings(obj[key])) {
      return true;
    }
  }
  return false;
}

export default checkStrength;
